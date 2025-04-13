function validate() {
    const email = document.querySelector(".search-field").value;
    let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const emailVerificationText = document.querySelector(".email-verification");
    const searchField = document.querySelector(".search-field");

    emailVerificationText.classList.remove("valid", "invalid");
    searchField.classList.remove("invalid-border", "valid-border");
    if(pattern.test(email)) {
        document.querySelector(".email-verification").innerHTML="Your email address was signed up!";
        emailVerificationText.classList.add("valid");
        searchField.classList.add("valid-border")

    } else {
        document.querySelector(".email-verification").innerHTML="Please provide a valid email address";
        emailVerificationText.classList.add("invalid");
        searchField.classList.add("invalid-border")
    }
}