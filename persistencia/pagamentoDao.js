function pagamentoDao(connection) {
    this._connection = connection;
}

pagamentoDao.prototype.salva = function (pagamento, callback) {
    this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback);
}

pagamentoDao.prototype.lista = function (callback) {
    this._connection.query('SELECT * FROM pagamentos', callback);
}

pagamentoDao.prototype.buscaPorId = function (id, callback) {
    this._connection.query('SELECT * FROM pagamentos WHERE id = ?', [id], callback);
}

module.exports = function(){
    return pagamentoDao;
};