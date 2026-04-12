import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '../public/images/hero-bg.jpg');

// Ensure directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const imageUrl = 'https://images.pexels.com/photos/14069124/pexels-photo-14069124.jpeg';

https.get(imageUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download image. Status: ${response.statusCode}`);
    process.exit(1);
  }

  const file = fs.createWriteStream(outputPath);
  response.pipe(file);

  file.on('finish', () => {
    file.close();
    const stats = fs.statSync(outputPath);
    console.log(`✅ Image downloaded successfully to ${outputPath}`);
    console.log(`📊 File size: ${(stats.size / 1024).toFixed(2)} KB`);
  });

  file.on('error', (err) => {
    fs.unlink(outputPath, () => {});
    console.error('Error downloading image:', err);
    process.exit(1);
  });
}).on('error', (err) => {
  console.error('Error:', err);
  process.exit(1);
});
