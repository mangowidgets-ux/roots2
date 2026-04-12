import { RequestHandler } from "express";
import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const handleDownloadHeroImage: RequestHandler = async (_req, res) => {
  try {
    // Determine the public images directory
    const publicDir = path.join(__dirname, "../../public");
    const imagesDir = path.join(publicDir, "images");
    const imagePath = path.join(imagesDir, "hero-bg.jpg");

    // Ensure directory exists
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    // Check if image already exists
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      return res.json({
        success: true,
        message: "Hero image already exists",
        filePath: imagePath,
        fileSize: `${(stats.size / 1024).toFixed(2)} KB`,
      });
    }

    // Download the image
    const imageUrl =
      "https://images.pexels.com/photos/14069124/pexels-photo-14069124.jpeg";

    return new Promise((resolve) => {
      https
        .get(imageUrl, (response) => {
          if (response.statusCode !== 200) {
            res.status(500).json({
              success: false,
              error: `Failed to download image. Status: ${response.statusCode}`,
            });
            return resolve(undefined);
          }

          const file = fs.createWriteStream(imagePath);
          response.pipe(file);

          file.on("finish", () => {
            file.close();
            const stats = fs.statSync(imagePath);
            res.json({
              success: true,
              message: "Hero image downloaded successfully",
              filePath: imagePath,
              fileSize: `${(stats.size / 1024).toFixed(2)} KB`,
            });
            resolve(undefined);
          });

          file.on("error", (err) => {
            fs.unlink(imagePath, () => {});
            res.status(500).json({
              success: false,
              error: "Error saving image: " + err.message,
            });
            resolve(undefined);
          });
        })
        .on("error", (err) => {
          res.status(500).json({
            success: false,
            error: "Error downloading image: " + err.message,
          });
          resolve(undefined);
        });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
