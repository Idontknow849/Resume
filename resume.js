const resumeDiv = document.getElementById('finalResume');

// Get stored data
const data = JSON.parse(localStorage.getItem('resumeData')) || {};

// Build resume content
resumeDiv.innerHTML = `
  <section>
    <h2>${data.fullName || ''}</h2>
    <p><strong>Email:</strong> ${data.email || ''}</p>
    <p><strong>Phone:</strong> ${data.phone || ''}</p>
    <p><strong>Address:</strong> ${data.address || ''}</p>
  </section>

  <section>
    <h3>Education</h3>
    <p>${data.education || ''}</p>
  </section>

  <section>
    <h3>Skills</h3>
    <p>${data.skills || ''}</p>
  </section>

  ${data.status === 'Experienced' ? `
  <section>
    <h3>Experience</h3>
    <p>${data.experience || ''}</p>
  </section>` : ''}

  <section>
    <h3>Certificates</h3>
    <p>${data.certificates || ''}</p>
  </section>
`;

// Print button
document.getElementById('printBtn').addEventListener('click', () => {
  window.print();
});
