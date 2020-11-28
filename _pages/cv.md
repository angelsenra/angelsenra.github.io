---
layout: default
permalink: /cv
title: Curriculum Vitae
---

{: .hide-on-print }
[<- Go back to jobs]({% link _pages/jobs.md %})
/
[Print this page](javascript:print())
/
[Generate PDF](javascript:generatePDF('cv-content');)

<div id="cv-content" markdown="1">
    {%- include cv-content.md -%}
</div>

<script src="/assets/dist/jspdf-2.1.1.umd.min.js"></script>
<script src="/assets/dist/html2canvas-1.0.0-rc.7.min.js"></script>
<script>
    const a4Ratio = 842 / 595
    const { jsPDF } = window.jspdf;
    generatePDF = function (elementId) {
        const element = document.getElementById(elementId)
        const width = element.offsetWidth + 40
        var pdf = new jsPDF(
            {
                orientation: 'p',
                unit: 'px',
                format: [width, a4Ratio * width],
                putOnlyUsedFonts: true,
                floatPrecision: 16 // or "smart", default is 16
            }
        );
        pdf.html(element, {
            callback: function (pdf) {
                pdf.output('save', 'cv-angelsenra.pdf');
            },
            x: 20,
            y: 20
        });
    };
</script>
