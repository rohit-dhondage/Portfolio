import sharp from 'sharp';
import { copyFileSync, mkdirSync } from 'node:fs';

const SRC = 'C:/Users/shree/.gemini/antigravity-ide/brain/b15032c8-fec4-4bb2-ad26-c9a355b98aaa/.user_uploaded/media_1791967754706.jpg';
const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

// Copy source photo to project root
copyFileSync(SRC, 'pic1.jpeg');

const img = sharp(SRC);
const meta = await img.metadata();
const { width, height } = meta;

console.log(`Original dimensions: ${width}x${height}`);

// Create an elegant feathered mask for hero/cinematic integration
// Left/Right/Top/Bottom soft falloff so rectangular edges disappear smoothly into dark background
const maskSvg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="vignette" cx="50%" cy="45%" r="58%" fx="50%" fy="40%">
      <stop offset="65%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="85%" stop-color="#ffffff" stop-opacity="0.85" />
      <stop offset="95%" stop-color="#ffffff" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="75%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </linearGradient>
    <mask id="fadeMask">
      <rect width="${width}" height="${height}" fill="url(#vignette)" />
      <rect width="${width}" height="${height}" fill="url(#bottomFade)" style="mix-blend-mode: multiply;" />
    </mask>
  </defs>
  <rect width="${width}" height="${height}" fill="white" mask="url(#fadeMask)" />
</svg>
`;

const alphaMask = await sharp(Buffer.from(maskSvg))
  .resize(width, height)
  .extractChannel(0)
  .toBuffer();

// Combine RGB from photo with the feathered alpha mask
const { data: rgb } = await sharp(SRC)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const rgba = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  rgba[i * 4] = rgb[i * 3];
  rgba[i * 4 + 1] = rgb[i * 3 + 1];
  rgba[i * 4 + 2] = rgb[i * 3 + 2];
  rgba[i * 4 + 3] = alphaMask[i];
}

const featheredCutout = await sharp(rgba, {
  raw: { width, height, channels: 4 },
})
  .png()
  .toBuffer();

// Generate the responsive webp assets
for (const w of [1100, 720, 420]) {
  await sharp(featheredCutout)
    .resize({ width: w })
    .webp({ quality: 90, alphaQuality: 92 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Generate updated social share og-image
const portrait = await sharp(featheredCutout).resize({ height: 580 }).png().toBuffer();
await sharp({
  create: { width: 1200, height: 630, channels: 4, background: '#07070a' },
})
  .composite([
    {
      input: Buffer.from(`
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g" cx="78%" cy="45%" r="45%">
            <stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#e5132b" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="120" fill="#f4f1ec" letter-spacing="4">ROHIT</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">SOFTWARE DEVELOPER • JAVA • PYTHON</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 88 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Successfully generated Rohit portrait assets & og-image.jpg');
