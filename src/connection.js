import mysql2 from 'mysql2/promise';

let connection = await mysql2.createConnection({

    host:'localhost',
    user:'root',
    password:'1234',
    database:'infob_db'
});

export default connection;