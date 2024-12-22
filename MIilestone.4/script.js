function generateResume(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeData = {
        personalInfo: { name: name, email: email, phone: phone },
        education: education,
        experience: experience,
        skills: skills,
    };
    displayResume(resumeData);
}
function displayResume(resumeData) {
    var resumeDisplay = document.getElementById("resume-display");
    resumeDisplay.innerHTML = "\n        <h2><b>Editable Resume</b></h2>\n        <p><strong><b>Name:</b><span contenteditable=\"true\"></strong> ".concat(resumeData.personalInfo.name, "</span></p>\n        <p><strong><b>Email:</b><span contenteditable=\"true\"></strong> ").concat(resumeData.personalInfo.email, "</span></p>\n        <p><strong><b>Phone:</b><span contenteditable=\"true\"></strong> ").concat(resumeData.personalInfo.phone, "</span></p>\n        <p contenteditable=\"true\"><strong><b>Education:</b></strong> ").concat(resumeData.education, "</p>\n        <p contenteditable=\"true\"><strong><b>Experience:</b></strong> ").concat(resumeData.experience, "</p>\n        <p contenteditable=\"true\"><strong><b>Skills:</b></strong> ").concat(resumeData.skills, "</p>\n    ");
}
var form = document.getElementById("resume-form");
form.addEventListener("submit", generateResume);
