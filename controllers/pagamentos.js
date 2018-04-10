module.exports = function (app) {
    app.get('/pagamentos', function (req, res) {
        console.log('Recebida requisição de teste na porta 3000');
        res.send('OK')
    });

    app.post('/pagamentos/pagamento', function (req, res) {
        var pagamento = req.body;
        console.log('Processando a Requisição de um novo pagamento')

        pagamento.status = 'CRIADO';
        pagamento.data = new Date();

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.pagamentoDao(connection);

        pagamentoDao.salva(pagamento, function (erro, resultado) {
            if (erro) {
                res.send(erro);
            } else {
                console.log('Pagamento criado');
                res.json(pagamento);
            }
        });
    });
}