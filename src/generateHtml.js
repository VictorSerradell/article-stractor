import fs from "fs";

// Leer los datos del archivo JSON
const data = JSON.parse(fs.readFileSync("data/article.json", "utf8"));

// Generar el contenido HTML
let mediaContent = "";

// Si hay imágenes, añadirlas al contenido
if (data.images && data.images.length > 0) {
  data.images.forEach((image) => {
    mediaContent += `<img src="${image}" alt="Article Image" class="article-image">`;
  });
}

// Si hay videos, añadirlos al contenido
if (data.videos && data.videos.length > 0) {
  data.videos.forEach((video) => {
    mediaContent += `<video controls class="article-video"><source src="${video}" type="video/mp4">Your browser does not support the video tag.</video>`;
  });
}

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.title}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>${data.title}</h1>
    ${mediaContent}
    <p>${data.content}</p>
  </div>
  <script src="script.js"></script>
</body>
</html>
`;

// Generar el contenido CSS
const cssContent = `
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
h1 {
  color: #333;
}
p {
  color: #555;
}
.article-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px 0;
}
.article-video {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px 0;
}
`;

// Generar el contenido JavaScript (vacío por ahora)
const jsContent = `
console.log("Article Loaded");
`;

// Guardar el contenido en archivos respectivos en la carpeta public
fs.writeFileSync("public/index.html", htmlContent);
fs.writeFileSync("public/styles.css", cssContent);
fs.writeFileSync("public/script.js", jsContent);
fs.writeFileSync("public/media.js", mediaContent);

console.log("HTML, CSS, and JS files have been generated.");
