const mysql = require('mysql2/promise');

const bd_usuario = 'ewerton_node'; //usuário
const bd_senha = '123456'; //senha
const bd_servidor = '10.67.22.216'; // servidor
const bd_porta = '3306'; //porta
const bd_banco = 'ewerton_node'; // nome do banco
let connection;

const config = {
    host: bd_servidor,
    port: bd_porta, //Default:3306
    user: bd_usuario,
    password: bd_senha,
    database: bd_banco,
    waitForConnections : true,
    connectionLimit: 10, //Default: 10 - deixar 100 ou 1000
}