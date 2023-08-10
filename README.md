<h1><strong>Bem vindo/a ao meu projeto Car Shop!!</strong>></h1>

<h2><strong>Sobre o projeto:</strong></h2>
  Projeto estruturado pensando em uma aplicação de vendas focada em carros e um espaço para motocicletas, nele você pode ver uma lista detalhada sobre os carros e suas informações como preço, cor, modelo e quantidade de assentos. No caso das motos você pode consultar os modelos disponíveis, preço, cilindrada e ano. Também é possivel cadastrar e apagar veiculos do banco de dados, e atualizar qualquer informação, tudo isso passando por casos de testes para não corromper o banco de dados.

<h2><strong>Construção e Features/Tecnologias:</strong></h2                                                                    
      A construção foi feita através do <strong>Docker</strong> para que ele possa ser usado em qualquer maquina, contruido em um banco de dados  não relacional feito
      com <strong>MongoDB</strong> e <strong>Mongoose</strong>, rotas com feitas com <strong>express</strong> para facilitar a manipulação e entendimento de 
      código, foi escrito inteiramente com <strong>TypeScript</strong> para se ter mais segurança no código e facilitar a leitura do código, manutenção e 
      escalabilidade da aplicação, todas as rotas efunções passaram por testes utilizando <strong>chai e sinon</strong> para fazer facilitar leitura e para fazer mock
      em teste confirmando resultado concretos.

<h2><strong>Estrutura:</strong></h2>
        .</br>
       ├── 🔸 src/</br>
        │   ├──🔸 Controllers/</br>
        │   ├── 🔸 Domains/</br>
        │   ├── 🔸 Interfaces/</br>
        │   ├── 🔸 middlewares/</br>
        │   ├── 🔸 Models/</br>
        │   ├── 🔸 Routes/</br>
        │   ├── 🔸 Services/</br>
        │   └── ...</br>
       ├── 🔸 tests/</br>
        │   ├── 🔸 unit/</br>
         |   │      ├── 🔸 Services/</br>
         |   │      ├── ...</br>
         |   └── ... </br>
        └── ...</br>

<h2><strong>Para rodar o projeto siga as intruções:</strong></h2>
      - Dê um git clone no seu trminal de sua maquina um pasta vazia para instalar o projeto desta maneira:
      </br>
        git clone git@github.com:DearJao/Prova-tecnica-BHUT.git
        </br>
        </br>
      - Em seguida você precisa entrar na pasta do projeto, através do seu gerenciador de arquivos ou no terminal com o comando:
      </br>
        cd Prova-tecnica-BHUT/back-end/
        </br>
        </br>
      - Para o projeto funcionar você precisa ter a biblioteca .NODE.JS instalada em sua maquina. Caso não tenha neste link: https://nodejs.org/en/download você tera
      acesso ao dowload oficial da biblioteca e as intruções para configurar.
      </br>
(obs* o projeto foi contruido na versão 18.12.1, outras versões podem ocasionar erros inesperados)
</br>
</br>
      - Primeiramente use o comando docker-compose up -d
      </br>
      </br>
      - Após esses passos, no terminal digite o seguinte comando: npm i ou npm install
      </br>
      (na segunda opção tera de escolher de que forma quer instalar os pacotes do projeto)
      </br>
      </br>
      - Para subir o projeto completo use o comando <strong>npm run compose:up</strong> ou <strong>npm run compose: up:dev</strong>
      </br>
      (você precisa ter o docker instalado na sua maquina)
      </br>

<h2><strong>Através desse link você pode testar o banco de dados com o Swagger:</strong></h2>
  </br>
      - (em construção)
