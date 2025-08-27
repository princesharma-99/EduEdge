// ✅ Get PDF file name from URL query parameter
const params = new URLSearchParams(window.location.search);
const file = params.get("file");

if (!file) {
  alert("No file specified.");
  throw new Error("Missing PDF file in query string.");
}

const url = file;
const container = document.getElementById('pdf-container');
const header = document.getElementById('pdf-header');
let pdfDoc = null;
let scale = 1.2;

// ✅ Dynamically set PDF title in the header
document.querySelector('#pdf-header h1').textContent =
  decodeURIComponent(file.split('/').pop().replace('.pdf', '').replace(/_/g, ' '));

// ✅ PDF.js setup (for local version)
pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';

// ✅ Load and render the PDF
pdfjsLib.getDocument(url).promise.then(pdf => {
  pdfDoc = pdf;
  renderPagesSequentially(1); // start rendering from page 1
}).catch(err => {
  container.innerHTML = `<p style="color:red; text-align:center;">Failed to load PDF: ${err.message}</p>`;
});

// ✅ Sequential rendering function
function renderPagesSequentially(pageNum) {
  if (pageNum > pdfDoc.numPages) return; // stop when all pages are done

  pdfDoc.getPage(pageNum).then(page => {
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    page.render({ canvasContext: ctx, viewport }).promise.then(() => {
      container.appendChild(canvas);

      // Render next page only after current finishes
      renderPagesSequentially(pageNum + 1);
    });
  });
}

// ✅ Click to hide/show header
let headerVisible = true;
document.body.addEventListener("click", () => {
  headerVisible = !headerVisible;
  header.classList.toggle("hidden", !headerVisible);
});
