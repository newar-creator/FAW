const fs = require('fs');
const path = require('path');
const https = require('https');

const destDir = path.join(__dirname, 'icons');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

const baseUrl = 'https://raw.githubusercontent.com/B00merang-Artwork/Windows-7/master/';

const files = {
  'folder.png': 'filesystems/folder.png',
  'home.png': 'filesystems/user-home.png',
  'aero_orb.png': 'filesystems/start-here.png',
  'games.png': 'filesystems/folder-games.png',
  'gallery.png': 'filesystems/folder-pictures.png',
  'computer.png': 'filesystems/computer.png',
  'music.png': 'filesystems/folder-music.png',
  'personalize.png': 'apps/32/preferences-desktop-theme.png',
  'star.png': 'actions/32/gnome-app-install-star.png',
  'search.png': 'actions/48/system-search.png',
  'play.png': 'notifications/32/notification-audio-play.png',
  'cd.png': 'mimetypes/cdimage.png',
  'sound.png': 'mimetypes/sound.png'
};

function downloadFile(filename, repoPath) {
  return new Promise((resolve, reject) => {
    const fileUrl = baseUrl + repoPath;
    const destPath = path.join(destDir, filename);
    const file = fs.createWriteStream(destPath);
    
    https.get(fileUrl, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: Status code ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename} successfully.`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting Vista Aero icons download...');
  for (const [filename, repoPath] of Object.entries(files)) {
    try {
      await downloadFile(filename, repoPath);
    } catch (err) {
      console.error(`Error downloading ${filename}:`, err.message);
    }
  }
  console.log('All downloads completed!');
}

downloadAll();
