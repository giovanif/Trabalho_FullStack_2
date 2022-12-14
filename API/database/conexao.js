const {Pool} = require('pg');

require('dotenv').config();

const conexao = {
    user: 'fatec',
    database: 'fatec',
    host: 'localhost',
    password: 'fatec@123',
    port: 5432,
}

const pool = new Pool({
    user:  conexao.user,
    database:conexao.database,
    host: conexao.host,
    password: conexao.password,
    port: conexao.port,
});

module.exports ={
    pool, conexao
}