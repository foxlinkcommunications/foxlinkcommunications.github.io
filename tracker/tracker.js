function handleHoursTrackerFormSubmission(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    var jobName = document.getElementById("job-order-number").value;
    var jobNumber = document.getElementById("toggle").checked;
    var mileageStart = document.getElementById("mileage-start").value;
    var mileageEnd = document.getElementById("mileage-end").value;
    var description = document.getElementById("job-description").value;
    var technicianComments = document.getElementById("technician-comments").value;

    // Authenticate and authorize with Google Sheets API
    gapi.load('client:auth2', function() {
        gapi.client.init({
            apiKey: 'AIzaSyCLcwV5nM7KJ5IZN3fR22xramXNk2lD4Iw',
            clientId: '277548571627-rempavoh7q2v549jth0u9q93qgir4rll.apps.googleusercontent.com',
            discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
            scope: 'https://www.googleapis.com/auth/spreadsheets',
        }).then(function() {
            // Sign in and authorize user
            return gapi.auth2.getAuthInstance().signIn();
        }).then(function() {
            // Get access token
            var accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;

            // Create a new row in the Google Sheets
            var spreadsheetId = 'd/1rVbczd2f1rz15CaPxvYq-_m0Zk8UG_oH4rX1mbMXmfY';
            var range = 'Sheet1!A1:append?valueInputOption=USER_ENTERED';
            var url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`;

            // Construct the request payload
            var payload = {
                values: [[
                    jobName,
                    jobNumber,
                    mileageStart,
                    mileageEnd,
                    description,
                    technicianComments
                ]]
            };

            // Send a POST request to save the data
            fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + accessToken,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(function(response) {
                if (response.ok) {
                    // Data saved successfully
                    showAlert('success', 'Data saved successfully!');
                    document.getElementById('tracker-form').reset(); // Reset the form
                } else {
                    // An error occurred while saving data
                    showAlert('error', 'An error occurred while saving data. Please try again.');
                }
            })
            .catch(function(error) {
                // An error occurred while saving data
                showAlert('error', 'An error occurred while saving data. Please try again.');
                console.error(error);
            });
        });
    });
}

// Show alert message
function showAlert(type, message) {
    var alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
    var alertBox = document.createElement('div');
    alertBox.className = 'alert ' + alertClass;
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    // Automatically remove the alert after 3 seconds
    setTimeout(function() {
        document.body.removeChild(alertBox);
    }, 3000);
}

// Handle form submission
document.getElementById('tracker-form').addEventListener('submit', handleHoursTrackerFormSubmission);
