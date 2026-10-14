import sharp from 'sharp';
import { existsSync } from 'node:fs';

const SRC = existsSync('pic1.jpeg')
  ? 'pic1.jpeg'
  : 'C:/Users/shree/.gemini/antigravity-ide/brain/b15032c8-fec4-4bb2-ad26-c9a355b98aaa/.user_uploaded/media_1791967754706.jpg';

const OUT = 'public/assets';

console.log('Generating portraits from:', SRC);

for (const w of [1100, 720, 420]) {
  await sharp(SRC)
    .resize({ width: w })
    .webp({ quality: 92 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Update og-image as well
await sharp(SRC)
  .resize({ width: 600, height: 600, fit: 'cover', position: 'top' })
  .jpeg({ quality: 90 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Generated portrait-1100.webp, portrait-720.webp, portrait-420.webp, and og-image.jpg');
