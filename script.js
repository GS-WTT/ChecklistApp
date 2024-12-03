// Show/hide dynamic options based on dropdown selection
document.getElementById('selection').addEventListener('change', function() {
    var selectedOption = this.value;
    document.getElementById('A-options').style.display = selectedOption === 'A' ? 'block' : 'none';
    document.getElementById('B-options').style.display = selectedOption === 'B' ? 'block' : 'none';
});

// Generate PDF when form is submitted
document.getElementById('checklistForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    var selectedOption = document.getElementById('selection').value;
    var subOption = selectedOption === 'A'
        ? document.getElementById('A-suboption').value
        : document.getElementById('B-suboption').value;

    // Add content to PDF
    doc.setFontSize(16);
    doc.text("Checklist Generator", 20, 20);
    doc.setFontSize(12);
    doc.text(`Selected Option: ${selectedOption}`, 20, 40);
    doc.text(`Sub-option: ${subOption}`, 20, 50);

    // Save the PDF
    doc.save('checklist.pdf');
});
