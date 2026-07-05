import express from "express";

const app = express();
const port = 3001;
app.use(express.json());

//Routes

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);