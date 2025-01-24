import { connectionDB } from "../database/connect.db.js";

export const getAllContacts = (res) => {
  const sql = "SELECT * FROM CONTACTOS";
  connectionDB.query(sql, (err, result) => {
    if (result) {
      return res.status(200).json(result);
    }
    if (err) {
      return res.status(401).json({ msg: "Error al mostrar los datos" });
    }
  });
};
export const getContactCelular = (celular, res) => {
  const sql = "SELECT * FROM CONTACTOS WHERE CELULAR = ?";
  connectionDB.query(sql, [celular], (err, result) => {
    if (result) {
      if (result[0]) {
        return res.status(200).json(result[0]);
      }else{
        return res.status(404).json({ msg: "Contacto no encontrado" });
      }
    }
    if (err) {
      return res.status(401).json({ msg: "Error al mostrar los datos" });
    }
  });
};

export const createContact = (nombre, celular, email, res) => {
  const query = "INSERT INTO CONTACTOS(NOMBRE,CELULAR,EMAIL) VALUES (?,?,?)";
  connectionDB.query(query, [nombre, celular, email], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(401).json({ msg: "Numero celular ya existente" });
      }
      return res.status(401).json({ msg: "Error al crear el contacto" });
    }
    if (result) {
      return res.status(201).json({ msg: "Contacto creado exitosamente" });
    }
  });
};
