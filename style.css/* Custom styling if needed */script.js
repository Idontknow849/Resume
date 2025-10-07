document.addEventListener("DOMContentLoaded", () => {
  const expTypeRadios = document.querySelectorAll("input[name='expType']");
  const expDetails = document.getElementById("expDetails");

  expTypeRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      expDetails.classList.toggle("hidden", radio.value !== "Experienced");
    });
  });

  document.getElementById("resumeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "pt", "a4");

    // Colorful header
    pdf.setFillColor(64, 84, 178);
    pdf.rect(0, 0, 595, 100, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.text(data.name || "Your Name", 40, 60);

    // Main info
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(12);
    pdf.text(`Email: ${data.email}`, 40, 120);
    pdf.text(`Phone: ${data.phone}`, 40, 140);
    pdf.text(`Address: ${data.address}`, 40, 160);
    pdf.text(`Blood Group: ${data.blood}`, 40, 180);

    // Education
    pdf.setFontSize(16);
    pdf.setTextColor(64, 84, 178);
    pdf.text("Education", 40, 210);
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(12);
    pdf.text(`10th: ${data.class10}`, 40, 230);
    pdf.text(`12th: ${data.class12}`, 40, 250);
    pdf.text(`Graduation: ${data.graduation}`, 40, 270);

    // Skills
    pdf.setFontSize(16);
    pdf.setTextColor(64, 84, 178);
    pdf.text("Skills", 40, 300);
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(12);
    pdf.text(data.skills || "", 40, 320, { maxWidth: 500 });

    // Computer Skills
    pdf.setFontSize(16);
    pdf.setTextColor(64, 84, 178);
    pdf.text("Computer Skills", 40, 360);
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(12);
    pdf.text(data.computers || "", 40, 380, { maxWidth: 500 });

    // Experience
    pdf.setFontSize(16);
    pdf.setTextColor(64, 84, 178);
    pdf.text("Experience", 40, 420);
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(12);
    if (data.expType === "Experienced") {
      pdf.text(`Company: ${data.company}`, 40, 440);
      pdf.text(`Years: ${data.years}`, 40, 460);
      pdf.text(`Role: ${data.role}`, 40, 480);
    } else {
      pdf.text("Fresher", 40, 440);
    }

    pdf.save(`${data.name}_Resume.pdf`);
  });
});
