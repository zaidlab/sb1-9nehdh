import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMP_DIR = path.join(__dirname, '../temp');

// Create temp directory if it doesn't exist
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

export const saveVideo = async (file) => {
  const fileName = `${Date.now()}-${file.originalname}`;
  const filePath = path.join(TEMP_DIR, fileName);
  
  await fs.promises.writeFile(filePath, file.buffer);
  return fileName;
};

export const getVideo = (fileName) => {
  return path.join(TEMP_DIR, fileName);
};

export const deleteVideo = async (fileName) => {
  const filePath = path.join(TEMP_DIR, fileName);
  await fs.promises.unlink(filePath);
};

// Clean up temp directory on process exit
process.on('exit', () => {
  try {
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  } catch (error) {
    console.error('Error cleaning up temp directory:', error);
  }
});