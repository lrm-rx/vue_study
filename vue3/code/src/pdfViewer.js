// src/pdfViewer.js
import * as pdfjsLib from 'pdfjs-dist';

async function loadPdfWorker() {
  try {
    const workerModule = await import('pdfjs-dist/build/pdf.worker.js?url');
    pdfjsLib.GlobalWorkerOptions.workerSrc = workerModule.default;
  } catch (error) {
    console.error('Failed to load PDF worker', error);
  }
}

loadPdfWorker();

export default pdfjsLib;