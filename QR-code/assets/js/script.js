// On page load, check the stored theme and apply it
window.onload = function () {
    const body = document.body;
    const toggleIcon = document.getElementById("toggle-icon");

    // Check if dark-mode is saved in localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleIcon.src = "/assets/svg/moon.svg";  // Set moon icon for dark mode
    } else if (localStorage.getItem("theme") === "light") {
        body.classList.remove("dark-mode");
        toggleIcon.src = "/assets/svg/sun.svg";   // Set sun icon for light mode
    } else {
        // If no theme is saved, use the system's preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add("dark-mode");
            toggleIcon.src = "/assets/svg/moon.svg";  // Set moon icon for dark mode
        } else {
            body.classList.remove("dark-mode");
            toggleIcon.src = "/assets/svg/sun.svg";   // Set sun icon for light mode
        }
    }
};

// Toggle theme and save to localStorage
function toggleMode() {
    const body = document.body;
    const toggleIcon = document.getElementById("toggle-icon");

    body.classList.toggle("dark-mode");

    // Save the theme to localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleIcon.src = "/assets/svg/moon.svg";  // Set moon icon
    } else {
        localStorage.setItem("theme", "light");
        toggleIcon.src = "/assets/svg/sun.svg";   // Set sun icon
    }
}

// Generate QR Code
function generateQR() {
    var text = document.getElementById("text").value;

    // Check if the text is a valid URL
    if (text.trim() !== "") {
        // Regular expression for basic URL validation
        var urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

        if (urlPattern.test(text)) {
            document.getElementById("qrcode").innerHTML = "";
            var qrCode = new QRCode(document.getElementById("qrcode"), {
                text: text,
                width: 128,
                height: 128,
            });
        } else {
            showErrorAlert("Please enter a valid URL to generate a QR code.");
        }
    } else {
        showErrorAlert("Please enter some text to generate a QR code.");
    }
}


// Handle QR Code Scanner
document.getElementById("qr-input").addEventListener("change", function (e) {
    var file = e.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var img = new Image();
            img.onload = function () {
                var canvas = document.getElementById("qr-canvas");
                var context = canvas.getContext("2d");
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0, img.width, img.height);
                var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                var code = jsQR(imageData.data, canvas.width, canvas.height);
                if (code) {
                    document.getElementById("qr-result").innerText =
                        "QR Code Data: " + code.data;
                } else {
                    document.getElementById("qr-result").innerText = "No QR Code found.";
                    showErrorAlert("No QR Code found. Please try again.");
                }
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function showErrorAlert(message) {
    const errorAlert = document.getElementById('error-alert');
    const errorMessage = errorAlert.querySelector('.error-description');
    errorMessage.textContent = message;
    errorAlert.classList.add('show');

    setTimeout(function() {
        errorAlert.style.opacity = '0';  

        setTimeout(function() {
            errorAlert.classList.remove('show');
            errorAlert.style.opacity = '1';  
        }, 400);
    }, 4000); 
}

document.querySelector('.close-btn').addEventListener('click', function() {
    const errorAlert = document.getElementById('error-alert');
    errorAlert.classList.remove('show');
    errorAlert.style.opacity = '1';
});
