var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'sql10.freesqldatabase.com',
        user: 'sql10231464',
        database: 'sql10231464',
        password: 'RKCBvKKGuc',
        port: 3306
    });
}

module.exports = function () {
    return createDBConnection;
}