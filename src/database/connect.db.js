import { createConnection } from "mysql";

export const connectionDB = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gestion_contactos",
  port: "3306",
});

export const connected = () => {
  connectionDB.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("Base de datos conectada correctamente");
  });
};
