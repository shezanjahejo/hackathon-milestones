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
        <h2>Dynamic Resume</h2>
        <p><strong>Name:</strong> ${resumeData.personalInfo.name}</p>
        <p><strong>Email:</strong> ${resumeData.personalInfo.email}</p>
        <p><strong>Phone:</strong> ${resumeData.personalInfo.phone}</p>
        <p><strong>Education:</strong> ${resumeData.education}</p>
        <p><strong>Experience:</strong> ${resumeData.experience}</p>
        <p><strong>Skills:</strong> ${resumeData.skills}</p>
    `;
}


const form = document.getElementById("resume-form") as HTMLFormElement;
form.addEventListener("submit", generateResume);