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
    pool.connect((err, client) => {
        if (err) return cb(err, undefined);
        client.query(sql, (errQuery, result) => {
            if (errQuery) return cb(errQuery, undefined)
            cb(undefined, result);
        });
    });
}

const kq = queryDB('SELECT * FROM "Product"', function (err, result) {
    if (err) return console.log(err);
    console.log(result.rows);
});
