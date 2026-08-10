/* ================================
   UNGAPROPERTY - MAIN STYLESHEET
   ================================ */

/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.6;
}

/* ================================
   HEADER
   ================================ */

header {
    background-color: #ffffff;
    width: 100%;
    padding: 12px 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 0;
    z-index: 1000;
}

/* Logo */
.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
}

/* Logo Image */
.logo img {
    width: 100px;
    height: 55px;
    object-fit: contain;
    display: block;
}

/* Website Name */
.logo span {
    color: #198754;
    font-size: 24px;
    font-weight: 700;
    white-space: nowrap;
}

/* ================================
   NAVIGATION
   ================================ */

nav {
    display: flex;
    align-items: center;
    gap: 25px;
}

nav a {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: 0.3s ease;
}

nav a:hover {
    color: #198754;
}

/* ================================
   BUTTONS
   ================================ */

button,
.btn {
    background-color: #198754;
    color: #ffffff;
    border: none;
    padding: 11px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    transition: 0.3s ease;
}

button:hover,
.btn:hover {
    background-color: #146c43;
    transform: translateY(-1px);
}

/* ================================
   HERO SECTION
   ================================ */

.hero {
    min-height: 500px;
    padding: 80px 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(
        rgba(25, 135, 84, 0.08),
        rgba(25, 135, 84, 0.03)
    );
}

.hero-content {
    max-width: 800px;
}

.hero h1 {
    font-size: 45px;
    color: #198754;
    margin-bottom: 20px;
}

.hero p {
    font-size: 18px;
    color: #555;
    margin-bottom: 30px;
}

/* ================================
   SEARCH BOX
   ================================ */

.search-box {
    width: 100%;
    max-width: 900px;
    margin: 30px auto;
    padding: 25px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.search-box form {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.search-box input,
.search-box select {
    flex: 1;
    min-width: 180px;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 15px;
    outline: none;
}

.search-box input:focus,
.search-box select:focus {
    border-color: #198754;
}

/* ================================
   PROPERTY SECTION
   ================================ */

.properties {
    padding: 60px 5%;
}

.properties h2 {
    text-align: center;
    color: #198754;
    font-size: 32px;
    margin-bottom: 35px;
}

/* Property Grid */
.property-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

/* Property Card */
.property-card {
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
    transition: 0.3s ease;
}

.property-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

/* Property Image */
.property-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
}

/* Property Details */
.property-details {
    padding: 20px;
}

.property-details h3 {
    color: #198754;
    font-size: 21px;
    margin-bottom: 8px;
}

.property-details p {
    color: #666;
    margin-bottom: 8px;
}

.property-price {
    color: #198754;
    font-size: 20px;
    font-weight: bold;
    margin: 12px 0;
}

/* ================================
   FORM
   ================================ */

form {
    width: 100%;
}

input,
textarea,
select {
    font-family: inherit;
}

textarea {
    resize: vertical;
}

/* ================================
   ABOUT SECTION
   ================================ */

.about {
    padding: 60px 5%;
    background-color: #ffffff;
    text-align: center;
}

.about h2 {
    color: #198754;
    font-size: 32px;
    margin-bottom: 20px;
}

.about p {
    max-width: 800px;
    margin: auto;
    color: #666;
    font-size: 16px;
}

/* ================================
   CONTACT SECTION
   ================================ */

.contact {
    padding: 60px 5%;
}

.contact h2 {
    text-align: center;
    color: #198754;
    margin-bottom: 30px;
}

.contact-form {
    max-width: 600px;
    margin: auto;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    outline: none;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: #198754;
}

/* ================================
   FOOTER
   ================================ */

footer {
    background-color: #198754;
    color: #ffffff;
    text-align: center;
    padding: 25px 5%;
    margin-top: 40px;
}

footer p {
    margin: 5px 0;
}

footer a {
    color: #ffffff;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

/* ================================
   MOBILE RESPONSIVE
   ================================ */

@media (max-width: 768px) {

    header {
        padding: 10px 4%;
    }

    /* Smaller logo on mobile */
    .logo img {
        width: 75px;
        height: 45px;
    }

    .logo span {
        font-size: 20px;
    }

    nav {
        gap: 12px;
    }

    nav a {
        font-size: 14px;
    }

    .hero {
        min-height: 400px;
        padding: 60px 5%;
    }

    .hero h1 {
        font-size: 32px;
    }

    .hero p {
        font-size: 16px;
    }

    .property-grid {
        grid-template-columns: 1fr;
    }

    .properties h2,
    .about h2,
    .contact h2 {
        font-size: 27px;
    }
}

/* ================================
   SMALL MOBILE
   ================================ */

@media (max-width: 480px) {

    .logo img {
        width: 65px;
        height: 40px;
    }

    .logo span {
        font-size: 18px;
    }

    nav {
        gap: 8px;
    }

    nav a {
        font-size: 12px;
    }

    .hero h1 {
        font-size: 28px;
    }

    .search-box {
        padding: 15px;
    }

    .search-box input,
    .search-box select,
    .search-box button {
        width: 100%;
        min-width: 100%;
    }
}
