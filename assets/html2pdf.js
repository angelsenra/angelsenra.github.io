const a4Ratio = 842 / 595;
const { jsPDF } = window.jspdf;
generatePDF = function (elementId, filename) {
  const element = document.getElementById(elementId);
  const width = element.offsetWidth + 40;
  var pdf = new jsPDF({
    orientation: "p",
    unit: "px",
    format: [width, a4Ratio * width],
    putOnlyUsedFonts: true,
    floatPrecision: 16, // or "smart", default is 16
  });
  pdf.html(element, {
    callback: function (pdf) {
      pdf.output("save", filename);
    },
    x: 20,
    y: 20,
  });
};
