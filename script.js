// ========================================
// UNGAPROPERTY JAVASCRIPT
// ========================================


// MOBILE MENU
function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");

}


// PROPERTY SEARCH
function searchProperty() {

    const location =
        document.getElementById("locationInput").value.trim();

    const propertyType =
        document.getElementById("propertyType").value;


    if (location === "" && propertyType === "") {

        alert("Please enter a location or select a property type.");

        return;
    }


    let message = "Searching Ungaproperty";

    if (location !== "") {

        message += " in " + location;

    }

    if (propertyType !== "") {

        message += " for " + propertyType;

    }


    alert(message + "...");

}


// PROPERTY DETAILS
function viewProperty(propertyName) {

    alert(
        "You selected:\n\n" +
        propertyName +
        "\n\nProperty details will be available here."
    );

}


// CONTACT
function contactUs() {

    alert(
        "Thank you for contacting Ungaproperty!\n\n" +
        "Our team will contact you soon."
    );

}


// CLOSE MOBILE MENU WHEN LINK IS CLICKED

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navbar")
            .classList.remove("active");

    });

});
