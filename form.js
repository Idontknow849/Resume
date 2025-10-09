const form = document.getElementById('resumeForm');
const status = document.getElementById('status');
const expSection = document.getElementById('experienceSection');

// Show/hide experience field based on status
status.addEventListener('change', () => {
  expSection.style.display = status.value === 'Experienced' ? 'block' : 'none';
});

// Save form data to localStorage
form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem('resumeData', JSON.stringify(formData));
  window.location.href = 'preview.html';
});
