// Function to get form values and display the resume
function generateResume(event) {
    event.preventDefault();
    // Get input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Create a ResumeData object
    var resumeData = {
        personalInfo: { name: name, email: email, phone: phone },
        education: education,
        experience: experience,
        skills: skills,
    };
    displayResume(resumeData);
}
// Function to display the resume on the page
function displayResume(resumeData) {
    var resumeDisplay = document.getElementById("resume-display");
    // Generate resume HTML
    resumeDisplay.innerHTML = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(resumeData.personalInfo.name, "</p>\n        <p><strong>Email:</strong> ").concat(resumeData.personalInfo.email, "</p>\n        <p><strong>Phone:</strong> ").concat(resumeData.personalInfo.phone, "</p>\n        <p><strong>Education:</strong> ").concat(resumeData.education, "</p>\n        <p><strong>Experience:</strong> ").concat(resumeData.experience, "</p>\n        <p><strong>Skills:</strong> ").concat(resumeData.skills, "</p>\n    ");
}
// Add event listener to form
var form = document.getElementById("resume-form");
form.addEventListener("submit", generateResume);
