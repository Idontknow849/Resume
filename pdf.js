const resumeDiv = document.getElementById('finalResume');
const data = JSON.parse(localStorage.getItem('resumeData'));
if (data) {
  resumeDiv.innerHTML = `
    <h2>${data.name}</h2>
    <p>Email: ${data.email} | Phone: ${data.phone}</p>
    <p><strong>Profile:</strong> ${data.profile}</p>
    ${data.profile === 'experienced' ? `<p><strong>Experience:</strong><br>${data.experience}</p>` : ''}
    <p><strong>Education:</strong><br>${data.education}</p>
    <p><strong>Skills:</strong><br>${data.skills}</p>
    <p><strong>Certificates:</strong><br>${data.certificates}</p>
  `;
}

document.getElementById('downloadBtn').addEventListener('click', () => {
  window.print();
});
