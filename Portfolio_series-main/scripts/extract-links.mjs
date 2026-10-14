import { copyFileSync, readFileSync } from 'node:fs';

const pdfPath = 'C:/Users/shree/.gemini/antigravity-ide/brain/b15032c8-fec4-4bb2-ad26-c9a355b98aaa/.user_uploaded/media_1791968460455.pdf';
copyFileSync(pdfPath, 'public/assets/Rohit_Dhondage_Resume.pdf');
console.log('Copied resume PDF to public/assets/Rohit_Dhondage_Resume.pdf');

// Read raw buffer to scan for URI links (URI links in PDF are stored as /URI (http...))
const buf = readFileSync(pdfPath, 'latin1');
const matches = buf.match(/\/URI\s*\(([^)]+)\)/g);
if (matches) {
  console.log('Found Links in PDF:');
  for (const m of matches) {
    console.log(m);
  }
} else {
  console.log('No /URI found with simple regex');
}
