let express = require("express");
let cors = require("cors");
let ytdl = require("ytdl-core");
let app = express();

app.use(cors());

app.listen(9000, () => {
  console.log("Server IS Working at port 9000..!");
});

app.get("/index.html", (req, res) => {
  let URL = req.query.URL;
  res.header("Content-Disposition", 'attachment; filename="video.mp4');
  ytdl(URL, {
    format: "mp4",
  }).pipe(res);
});
