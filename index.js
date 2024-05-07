






document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('qrForm').onsubmit = function(event) {
    event.preventDefault();

    // Collect form data
    const tenantName = document.getElementById('tenantName').value;
    const visitorName = document.getElementById('visitorName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const apartmentNumber = document.getElementById('apartmentNumber').value;
    const message = document.getElementById('message').value;

    // Log the collected data to the console
    console.log('Tenant Name:', tenantName);
    console.log('Visitor Name:', visitorName);
    console.log('Mobile Number:', mobileNumber);
    console.log('Apartment Number:', apartmentNumber);
    console.log('Message:', message);

    // Additional details
    const visitDate = document.getElementById('visitDate').value; // Assuming you have an input for visit date
    const visitTime = document.getElementById('visitTime').value; // Assuming you have an input for visit time

    // Ensure the container for QR code image exists
    const qrCodeContainer = document.getElementById('qrCode');
    if (!qrCodeContainer) {
      console.error('The QR code container does not exist.');
      return;
    }

    // Create or update the QR code image
    let qrImage = document.getElementById('qrImage');
    if (!qrImage) {
      qrImage = document.createElement('img');
      qrImage.id = 'qrImage';
      qrCodeContainer.appendChild(qrImage);
    }
    
    // Construct the data string with all parameters
    const dataString = `Tenant Name: ${tenantName}, Visitor Name: ${visitorName}, Mobile Number: ${mobileNumber}, Apartment Number: ${apartmentNumber}, Message: ${message}, Visit Date: ${visitDate}, Visit Time: ${visitTime}`;//


    // Define your API URL with collected data
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(dataString)}&size=300x300`;
    
    // Set the source of the QR code image to the API URL
    qrImage.src = apiUrl;


    // // Create or update the download link for the QR code image
    // let downloadLink = document.getElementById('downloadLink');
    // if (!downloadLink) {
    // downloadLink = document.createElement('a');
    // downloadLink.id = 'downloadLink';
    // downloadLink.textContent = 'Download QR Code';
    // qrCodeContainer.appendChild(downloadLink);
    // }

    // // Set properties of the download link
    // downloadLink.href = apiUrl;
    // downloadLink.download = 'QRCode.png'; // The name of the downloaded file














  };
});



























// // Function to handle form submission
// document.addEventListener('DOMContentLoaded', function() {
// document.getElementById('qrForm').onsubmit = function(event) {
//     event.preventDefault();
  
//     // Collect form data
//     const tenantName = document.getElementById('tenantName').value;
//     const visitorName = document.getElementById('visitorName').value;
//     const mobileNumber = document.getElementById('mobileNumber').value;
//     const apartmentNumber = document.getElementById('apartmentNumber').value;
//     const message = document.getElementById('message').value;
  
//     // Construct the data string for QR code
//     const qrData = `Tenant: ${tenantName}, Visitor: ${visitorName}, Mobile: ${mobileNumber}, Apartment: ${apartmentNumber}, Message: ${message}`;
  
//     // Construct the API URL
//     const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${qrData}&size=200x200`;




//     // Ensure the container for QR code image exists
//     const qrCodeContainer = document.getElementById('qrCode');
//     if (!qrCodeContainer) {
//     console.error('The QR code container does not exist.');
//     return;
//     }

  
//     // Create or update the QR code image
//     let qrImage = document.getElementById('qrImage');
//     if (!qrImage) {
//       qrImage = document.createElement('img');
//       qrImage.id = 'qrImage';
//       document.getElementById('qrCode').appendChild(qrImage);
//     }
//     qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?data=${qrData}&size=200x200";






//   }
// };