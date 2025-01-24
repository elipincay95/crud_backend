import express from "express";
import { connected } from "./database/connect.db.js";
import cors from "cors";
import {
  createContact,
  getAllContacts,
  getContactCelular,
} from "./service/contactos.service.js";
const app = express();
const port = 3200;
connected();
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.get("/obtener-contacto", (req, res) => {
  const celular = req.query.celular;
  if (!celular) {
    return getAllContacts(res);
  } else {
    return getContactCelular(celular, res);
  }
});

app.post("/create-contacto", (req, res) => {
  const { name, celular, email } = req.body;
  if (!name || !celular || !email) {
    res.status(401).json({ msg: "Faltan campos por llenar" });
  }
  return createContact(name, celular, email, res);
});
app.put("/update-contacto/:celular", (req, res) => {
  console.log(req.params.celular);
  res.send("update contacto");
});

app.delete("/remover-contacto/:celular", (req, res) => {
  res.send("remover contacto");
});

app.listen(port, () => {
  console.log(`app escuchando en el puerto ${port}`);
});
