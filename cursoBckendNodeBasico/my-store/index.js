import express from "express";
import routerApi from "./routes/index.js"

const app = express()
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.get('/nueva-ruta', (req, res) => {
  res.send("nueva ruta!")
})

routerApi(app)

app.listen(port, () => {
  console.log("corriendo en " + port);
})
