# Desafio de projeto Bootcamp DIO: Construindo uma Pokedex com JavaScript

Desafio: elaborar uma Pokedex utilizando JavaScript, HTML, CSS e consumindo dados de uma API REST.
Utilizando-se os conceitos de array, funtion, objects, arrow function, estruturas de repetição, estruturas de decisão, e manipulação de variáveis diversas.
Entendendo e aplicando requisições via http utilizando o JavaScript.

<!-- //O que é uma API?
//Uma aplicação que serve dados, seja por um Web service, um servidor
//No caso do projeto da Pokedex, o http-server está oferecendo HTML, CSS e Java Script
//Neste casso nossa API roda no protocolo HTTP
//É importante entender mais aprofundado o protocolo HTTP, estudar mais sobre ele
//Uma requisiçao HTTP consiste em se fazer uma solicitação a um servidor por meio da URL
//A URL é composta pelo ${IP}/${PATH = caminho que identifica o recurso}
//Memorizar endereços IP`s são impraticáveis, com isso o DNS encarrega de entender o domínio e buscar o respectivo IP
//Request method é o método de solicitação que podemos fazer, podendo ser dos tipos: GET, POST, PUT, DELET, PATCH
//O método diz ao servidor o que queremos fazer
//Existem algumas formas de passar dados ao servidor, como pelo PATH.
//Primeira área de transferência de dados é o PATH
//Segunda área de transferência de dados é pela query string
//A sintaxe da query string começa após o ?
//Com isso, podemos como um filtro, buscar dados que contenham parâmetros na query string
//A query string sempre será do tipo: chave=valor. Por exemplo: ?type=grass&name=i. Ou seja, buscará tipo grass e nomes iniciados com i
//Outro exemplo dado, utilizando offset e limit. Ou seja, limit + número mostrará a quantidade de dados conforme o número inserido
//Offset + número indicará quantos objetos, dados serão mostrados por página
//As páginas da web trarão alguns dados para escolhermos essas query strings
//Outra área de transferência de dados é o HEADER, que é o metadado que são coisas para descrever nossa requisição
//ou coisas para complementar nossa requisição
//Os HEADERS são um tipo de configuração da nossa requisição, sendo algumas: idioma aceitável, tipos de dados aceitáveis, formatos de
//arquivos aceitáveis
//Agora, falando um pouco sobre o BODY e STATUS CODE
//Dependendo do método de requisição, teremos uma área de dados que é o BODY, que é corpo da nossa requisição
//O método GET não possui BODY em sua requisição
//O BODY é indicado com nome de content-type
//O STATUS CODE indica o resultado da nossa requisiçao, se estiver entre os números 200 a 299, família 200
//indica que nossa requisiçao foi processada pelo servidor e retornou um resultado
//Em resumo, uma requisição HTTP temos o seguinte:
        //URL;
        //Requeste method;
        //Request Headers;
//Como resposta, temos:
        //Status Code;
        //Response Headers;
        //Response Body;

//Existem várias maneiras de se fazer um Request HTTP pelo Java Script. Uma das formas utilizadas no exemplo da Pokedex
//será o fetch(); Entre os parênteses passamos a URL. Há possibilidade de passar outros modos para o FETCH
//O FETCH nos retorna um Promise. A resposta não é imediata, gasta-se um tempo para o Browser solicitar ao servidor,
//tráfego da rede, a este tempo damos o nome de processamento assíncrono;
//É um processamento que não retorna um dado de forma imediata;
//Uma Promise retornada pelo FETCH necessita ser tratada por função.
//Ao retornar, devemos utilizar o .then function(response), ou seja, invocando uma função sem nome definido e passando response
//como parâmetro da função. Com isso o Body retorna um Readable String e necessitamos converter em formato json para
//trabalharmos no Java Script. Por padrão o fetch(), dando o comando response.json()
//Fazendo outra função para obter o Body retornado, devemos invocar nova função fazendo function (responsebody) {}
//Também conseguimos fazer tratativa de erro, utilizando .catch e .finally, todas tipo função
//    .then(function (response) {         //chama a função cujo parâmetro é o reponse da requisição
//        return response.json()          //retorna o arquivo json correspondente à request
//    })
//    .then(function (jsonBody) {         //chama a função do Body, ou seja o conteúdo da request
//        console.log(jsonBody)           //mostra no console o resultado da request
//    })
//    .catch(function(error) {            //tracho de código para tratativa de erro
//        console.error(error)
//    })
//    .finally (function () {             //trecho de código que independente do resultado da request retorna que a mesma foi concluída
//        console.log(`Captura concluída`)
//   })

//Podemos reduzir drasticamente a quantidade de código nessa tratativa do fetch com o then, ou seja
//reduzindo a verbosidade do código, trocando as funções convencionais por arrow function, fazendo conforme mostrado abaixo
//Quando utilizando o return em uma linha única, podemos fazer da seguinte forma:
            return fetch(url)
                .then((response) => response.json())
                .then((jsonBody) => jsonBody.results)
//Utilizando arrow function, são funções normalmente anônimas e armazenadas como expressão em uma variável
//Podemos ver mais detalhes neste link: https://developerplus.com.br/o-que-sao-arrow-functions-e-como-usar/
//Como resultado do comando FETCH temos um objeto:
//Utilizando a função MAP para converter os objetos capturados em formato para HTML, de certa forma mais "elegante"
//sem a necessidade de usarmos FOR e concatenação de objetos
//essa função MAP é uma função transformadora, a qual é muito utilizada para auxiliar Java Script, HTML e CSS
//se a arrow function possuir uma única linha e um único retorno, posso suprimir o uso do {}
//Utilizando a função MAP podemos converter itens de lista em formato HTML
//Após isso, utilizamos a função JOIN('') com um espaço como parâmetro. Por default, essa função separa com uma vírgula,
//por isso inserimos uma string vazia como parâmetro. Esta função concatena os elementos HTML "capturado" pela função MAP

//Desafio de código, implementando mais informações de cada pokemon:
// Implementando About, o qual possui dados como, height, weight e abilities;
// Implementando Base Stats, contendo nome e valor, sendo os nomes: HP, Attack, Defense, Sp. Atk, Sp. Def, Speed e Total;
// Implementando Evolution
// Implementando Moves, os 10 primeiros;--!>
