import express from "express";

const app = express();

// healthcheck endpoint
app.get("/", (req, res) => res.send("healthy"));

app.get("/cpu", (req, res) => {
	for (let i = 0; i < 100000000; i++) {
		Math.random();
	}
	res.send("Hello world");
});
app.listen(3000, () => console.log("Server Started on PORT 3000"));
