import express from 'express';
import multer from 'multer';
import { body } from 'express-validator';
import auth from '../middleware/auth.js';
import { saveVideo, getVideo, deleteVideo } from '../storage.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Upload video
router.post('/upload',
  auth,
  upload.single('video'),
  [
    body('title').trim().notEmpty(),
    body('description').trim().notEmpty(),
  ],
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No video file uploaded' });
      }

      const fileName = await saveVideo(req.file);
      
      const video = new Video({
        title: req.body.title,
        description: req.body.description,
        fileName,
        user: req.user.id
      });
      
      await video.save();
      res.status(201).json(video);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Stream video
router.get('/stream/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    const videoPath = getVideo(video.fileName);
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = (end - start) + 1;
      const file = fs.createReadStream(videoPath, { start, end });
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(200, head);
      fs.createReadStream(videoPath).pipe(res);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;