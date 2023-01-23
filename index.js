const express = require('express');

const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/books.route"));
app.use(require("./routes/genres.route"));
app.use(require("./routes/authors.route"));
app.use(require("./routes/reviews.route"))


mongoose
  .connect(
    "mongodb+srv://jahar:9626562131@cluster0.ksjqjid.mongodb.net/genres"
  )

  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(3000, () => {
  console.log("Сервер запущен успешно"); 
});