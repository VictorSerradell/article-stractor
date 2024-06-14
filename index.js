import { extract } from "@extractus/article-extractor";
import fs from "fs";

(async () => {
  try {
    const article = await extract(
      "https://www.wexterhome.com/proyectos-con-arduino/pantalla-holografica/"
    );

    // Guardar los datos en un archivo JSON
    fs.writeFileSync("article.json", JSON.stringify(article, null, 2));

    console.log("Article data saved to article.json");
  } catch (error) {
    console.error("Error extracting article:", error);
  }
})();
