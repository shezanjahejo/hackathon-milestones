interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
}

interface ResumeData {
    personalInfo: PersonalInfo;
    education: string;
    experience: string;
    skills: string;
}


function generateResume(event: Event) {
    event.preventDefault();

    
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    const resumeData: ResumeData = {
        personalInfo: { name, email, phone },
        education,
        experience,
        skills,
    };

    displayResume(resumeData);
}

function displayResume(resumeData: ResumeData) {
    const resumeDisplay = document.getElementById("resume-display") as HTMLElement;

    resumeDisplay.innerHTML = `
        <h2><b>Editable Resume</b></h2>
        <p><strong><b>Name:</b><span contenteditable="true"></strong> ${resumeData.personalInfo.name}</span></p>
        <p><strong><b>Email:</b><span contenteditable="true"></strong> ${resumeData.personalInfo.email}</span></p>
        <p><strong><b>Phone:</b><span contenteditable="true"></strong> ${resumeData.personalInfo.phone}</span></p>
        <p contenteditable="true"><strong><b>Education:</b></strong> ${resumeData.education}</p>
        <p contenteditable="true"><strong><b>Experience:</b></strong> ${resumeData.experience}</p>
        <p contenteditable="true"><strong><b>Skills:</b></strong> ${resumeData.skills}</p>
    `;
}


const form = document.getElementById("resume-form") as HTMLFormElement;
form.addEventListener("submit", generateResume);