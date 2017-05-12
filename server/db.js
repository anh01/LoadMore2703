const pg = require('pg');

const config = {
    user: 'postgres',
    database: 'REACT2703',
    password: 'khoapham',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

function queryDB(sql, cb) {
    pool.connect((err, client, done) => {
        if (err) return cb(err, undefined);
        client.query(sql, (errQuery, result) => {
            done(errQuery);
            if (errQuery) return cb(errQuery, undefined);
            cb(undefined, result);
        });
    });
}

function getProducts(idMax, cb) {
    const sql = `SELECT * FROM "Product" WHERE id > ${idMax} 
    ORDER BY id ASC LIMIT 3`;
    queryDB(sql, (err, result) => {
        if (err) return cb(err);
        cb(undefined, result.rows);
    });
}

module.exports = getProducts;
