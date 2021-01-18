var TinyURL = require("tinyurl");

let arr = ["http://google.com", "http://goosssgle.com"];

let result = [];
arr.forEach((val) => {
  TinyURL.shorten(val).then(
    function (res) {
      console.log(res);
      result.push({ originalURL: val, shortenURL: res });
    },
    function (err) {
      console.log(err);
    }
  );
});

console.log(result);
