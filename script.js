// ================= TAB CHANGE =================

function changeTab(button, type) {

    // Remove active class
    let tabs = document.querySelectorAll(".tab");

    tabs.forEach(function(tab) {
        tab.classList.remove("active");
    });

    // Add active class
    button.classList.add("active");

    console.log("Selected property type:", type);
}


// ================= SEARCH PROPERTIES =================

function searchProperties() {

    let location =
        document.getElementById("location").value;

    let propertyType =
        document.getElementById("propertyType").value;

    let budget =
        document.getElementById("budget").value;


    let properties =
        document.querySelectorAll(".property-card");

    let found = 0;


    properties.forEach(function(property) {

        let propertyLocation =
            property.getAttribute("data-location");

        let propertyTypeValue =
            property.getAttribute("data-type");

        let propertyPrice =
            Number(property.getAttribute("data-price"));


        let locationMatch =
            location === "all" ||
            propertyLocation === location;


        let typeMatch =
            propertyType === "all" ||
            propertyTypeValue === propertyType;


        let budgetMatch = true;


        if (budget !== "all") {

            budgetMatch =
                propertyPrice <= Number(budget);

        }


        if (
            locationMatch &&
            typeMatch &&
            budgetMatch
        ) {

            property.style.display = "block";

            found++;

        } else {

            property.style.display = "none";

        }

    });


    let noResults =
        document.getElementById("noResults");


    if (found === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }


    // Scroll to results

    document
        .getElementById("properties")
        .scrollIntoView({
            behavior: "smooth"
        });

}



// ================= FAVORITE =================

function toggleFavorite(button) {

    button.classList.toggle("active");


    if (
        button.classList.contains("active")
    ) {

        button.innerHTML = "♥";

    } else {

        button.innerHTML = "♡";

    }

}



// ================= LOGIN =================

function openLogin() {

    document
        .getElementById("loginModal")
        .style.display = "flex";

}


function closeLogin() {

    document
        .getElementById("loginModal")
        .style.display = "none";

}


function loginUser() {

    let message =
        document.getElementById("loginMessage");


    message.innerHTML =
        "✅ Login successful!";

    message.style.color = "green";

}



// ================= POST PROPERTY =================

function openPostProperty() {

    document
        .getElementById("postModal")
        .style.display = "flex";

}


function closePostProperty() {

    document
        .getElementById("postModal")
        .style.display = "none";

}


function postProperty() {

    let name =
        document.getElementById("ownerName").value;

    let title =
        document.getElementById("propertyTitle").value;

    let location =
        document.getElementById("propertyLocation").value;

    let price =
        document.getElementById("propertyPrice").value;


    let message =
        document.getElementById("postMessage");


    if (
        name === "" ||
        title === "" ||
        location === "" ||
        price === ""
    ) {

        message.innerHTML =
            "❌ Please fill all the fields.";

        message.style.color = "red";

        return;

    }


    message.innerHTML =
        "✅ Property submitted successfully!";

    message.style.color = "green";

}



// ================= PROPERTY DETAILS =================

function viewProperty(propertyName) {

    document
        .getElementById("detailsTitle")
        .innerHTML = propertyName;


    document
        .getElementById("detailsModal")
        .style.display = "flex";

}


function closeDetails() {

    document
        .getElementById("detailsModal")
        .style.display = "none";

}



// ================= EXPLORE BUTTON =================

function scrollToProperties() {

    document
        .getElementById("properties")
        .scrollIntoView({
            behavior: "smooth"
        });

}



// ================= CLOSE MODAL ON OUTSIDE CLICK =================

window.onclick = function(event) {

    let loginModal =
        document.getElementById("loginModal");

    let postModal =
        document.getElementById("postModal");

    let detailsModal =
        document.getElementById("detailsModal");


    if (event.target === loginModal) {

        loginModal.style.display = "none";

    }


    if (event.target === postModal) {

        postModal.style.display = "none";

    }


    if (event.target === detailsModal) {

        detailsModal.style.display = "none";

    }

};
