import { createConnection } from 'mysql';

export const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestion_contactos',
    port: '3306'
});