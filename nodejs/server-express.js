import express from "express";

const app = express();

const PORT = process.env.NODE_PORT;

app.get("/", (req, res) => {
  res.send("hello word dyeison");
});

app.listen(PORT, (err) => {
  if (err) return console.log("error Connect");

  return console.log(
    `Server is running in port ${PORT} http://localhost:${PORT}`
  );
});
