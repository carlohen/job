const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao site do meu grupo! AV2</h1>");
})

//rota do cadastro de produtos
app.get("/produtos", function(req,res){
    res.send("<h1>LLista de Produtos do bloco K!</h1>");
})

//rota com parametro 
app.get("/consulta/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})

//rota com parametro opcional
app.get("/cadastro/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto " + nome + " criado!</h1>");
    }else{
        res.send("produto criado com sucesso!");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao Iniciar o Servidor!!");
    }else{
        console.log("Servidor Iniciado com Sucesso!!.");
    }
})

