//1 passo:criei uma tabela no dynamo (database nosql aws) chamada servelessApp
//2 passo: criei uma funcao lambda (serverlessAppFunction) utilizando nodejs como linguagem na aws
//linhas 10 a 14 da funcao define o objeto que o dynamo ira
receber uma data e uma mensagem,15 nome tabela no dynamodb
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: "as-east-1"});

exports.handler = (event, context, callback) => {
    console.log("Processing...");
    const params = {
        Item: {
            date: Date.now(),
            message: event.key1
        },
        TableName: "serverlessApp"
    };
    const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify('Hello from new Lambda!'),
  };
    
    docClient.put(params, function(err, data) {
        if(err){
            callback(err, null);
        } else {
            callback(null, data);
        }
    })
};
//3 passo configurar apigateway e o cors da api utilizando metodo post para criar um objeto na tabela dynamo
//4 passo criar uma politica no IAM da aws que permita a funcao lambda acessa o dynamodb
//5 passo testar url gerada no postman, status code tem que ser 200
//6 passo testar form e ver se inclui os dados no DynamoDB
