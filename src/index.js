import Heading from './components/heading';
import soma from './calc';

console.log("Testando o webpack 2 -  com o arquivo bundle.js ao invés do main.js(arquivo nativo do webpack)");

soma(9, 4);
soma(32, 20);
soma(9, 3);

// aqui  está o Loaders.

const heading = new Heading();

heading.create(" Teste de título dinâmico em Webpack");

heading.create(" Teste do hot realod do  devServer no webpack.config.json que não precisa toda hora buildar");