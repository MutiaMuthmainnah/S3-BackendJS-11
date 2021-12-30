// import express dan routing
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());

// Menggunakan routing (router)
const router = require("./routes/api");
app.use(router);

// Mendefinisikan port.
app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});
 