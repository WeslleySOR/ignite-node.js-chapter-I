const express = require("express");

const app = express();

app.get("/", (request, response) => {
	return response.json({ message: "Olá" });
});

app.listen(3001);