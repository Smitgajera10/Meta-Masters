import PDFDocument from 'pdfkit';

export async function exportEventPDF(req, res){
    const doc = new PDFDocument();
    const filename = `${req.event.name.replace(/\s+/g, '_')}_checklist.pdf`;
  
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'application/pdf');
  
    doc.pipe(res);
  
    doc.fontSize(18).text(`Event: ${req.event.name}`, { underline: true });
    doc.fontSize(12).text(`Location: ${req.event.location}`);
    doc.text(`Start: ${req.event.startDate?.toDateString()}`);
    doc.text(`End: ${req.event.endDate?.toDateString()}`);
    doc.moveDown();
  
    doc.fontSize(16).text(`Checklist`, { underline: true });
    req.event.checklist.forEach(item => {
      doc.fontSize(12).text(`- ${item.name} [${item.status}]`);
    });
  
    doc.end();
  };