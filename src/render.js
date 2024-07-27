const sharp = require('sharp');
const fs = require('fs');

document.getElementById('compressButton').addEventListener('click', () => {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const imageBuffer = Buffer.from(event.target.result);
      
      sharp(imageBuffer)
        .resize({ width: 800 }) // Example resize, you can adjust as needed
        .toBuffer()
        .then(data => {
          const blob = new Blob([data], { type: 'image/jpeg' });
          const url = URL.createObjectURL(blob);
          document.getElementById('outputImage').src = url;

          // Optionally save the compressed image to disk
          fs.writeFile('compressed_image.jpg', data, (err) => {
            if (err) throw err;
            console.log('Compressed image saved!');
          });
        })
        .catch(err => {
          console.error('Error during compression:', err);
        });
    };
    reader.readAsArrayBuffer(file);
  }
});
