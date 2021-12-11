
const express= require("express");
const app = express();
app.get("/index", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000);
console.log("Kör servern");
app.use(express.static("public"));














