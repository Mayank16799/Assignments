const imageDownloader = require("node-image-downloader");

imageDownloader({
  imgs: [
    {
      uri:
        "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
      filename: "my-image-file-name",
    },
    {
      uri:
        "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg", // in this case filename will be kiwi.svg
    },
  ],
  dest: "./images", //destination folder
})
  .then((info) => {
    console.log("all done", info);
  })
  .catch((error, response, body) => {
    console.log("something goes bad!");
    console.log(error);
  });
