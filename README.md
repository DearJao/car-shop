<h1><strong>Bem vindo/a ao meu projeto Car Shop!!</strong></h1>

<h2><summary><strong>Sobre o projeto:</strong></summary></h2>
  Projeto estruturado pensando em uma aplicação de vendas focada em carros e um espaço para motocicletas, nele você pode ver uma lista detalhada sobre os carros e suas informações como preço, cor, modelo e quantidade de assentos. No caso das motos você pode consultar os modelos disponíveis, preço, cilindrada e ano. Também é possivel cadastrar e apagar veiculos do banco de dados, e atualizar qualquer informação, tudo isso passando por casos de testes para não corromper o banco de dados.

<h2><summary><strong>Construção e Features/Tecnologias:</strong></summary></h2>
      A construção foi feita através do <strong>Docker</strong> para que ele possa ser usado em qualquer maquina, contruido em um banco de dados  não relacional feito
      com <strong>MongoDB</strong> e <strong>Mongoose</strong>, rotas com feitas com <strong>express</strong> para facilitar a manipulação e entendimento de 
      código, foi escrito inteiramente com <strong>TypeScript</strong> para se ter mais segurança no código e facilitar a leitura do código, manutenção e 
      escalabilidade da aplicação, todas as rotas efunções passaram por testes utilizando <strong>chai e sinon</strong> para fazer facilitar leitura e para fazer mock
      em teste confirmando resultado concretos.

<h2><summary><strong>Estrutura:</strong></summary></h2>
<details>
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
</details>

<h2><summary><strong>Para rodar o projeto siga as intruções:</strong></summary></h2>
      - Para que o projeto funcione você precisa ter a biblioteca .NODE.JS e o docker instalado em sua maquina. Caso não tenha neste link :
      <link>https://nodejs.org/en/download</link> e neste: <link>https://www.docker.com/products/docker-desktop/</link> você tera acesso ao dowload oficial da
      biblioteca e as intruções para configurar.
      </br>
      (obs* o projeto foi contruido na versão 18.12.1, outras versões podem ocasionar erros inesperados)
      </br>
      </br>
      - Dê um git clone no seu trminal de sua maquina um pasta vazia para instalar o projeto desta maneira:
      </br>
        git clone git@github.com:DearJao/car-shop.git
        </br>
        </br>
      - Em seguida você precisa entrar na pasta do projeto, através do seu gerenciador de arquivos ou no terminal.
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
      - Para subir o projeto completo use o comando <strong>docker exec -it car_shop bash</strong> e em seguida <strong>npm run dev</strong>
      </br>
      (você precisa ter o docker instalado na sua maquina)
      </br>

<h2><summary>Swagger</summary></h2>
</br>
- Após subir o projeto, no seu navegador acesse a rota <strong>ttp://localhost:3001/api-docs/</strong> você testar o banco de dados com o Swagger.

