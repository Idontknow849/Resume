document.getElementById('profile').addEventListener('change', function() {
  const expSection = document.getElementById('experienceSection');
  expSection.style.display = this.value === 'experienced' ? 'block' : 'none';
});

document.getElementById('resumeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    profile: document.getElementById('profile').value,
    experience: document.getElementById('experience').value,
    education: document.getElementById('education').value,
    skills: document.getElementById('skills').value,
    certificates: document.getElementById('certificates').value
  };
  localStorage.setItem('resumeData', JSON.stringify(data));
  window.location.href = 'preview.html';
});
