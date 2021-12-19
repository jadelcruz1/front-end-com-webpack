/*css em js
inserindo um texto pelo metodo  create no body do html atráves do index.js

*/

import './heading.css'; /* importação de css dentro do js pelo webpack.
 para isso ocorrer preciso criar dois loader's no webpack.config.js, são eles (loader's)

'css-loader' - esse identifica os arquivos que são css. e;
'style-loader' - que irá transformar os arquivos css em estilo de fato.
MiniCssExtractPlugin.loader, // como iremos externo o css usar este comando. (se não for externo o css usar o de cima)


obs1. esses pacotes são opcionais, então devem ser baixados quando utilizados.
    npm install --save-dev style-loader css-loader

obs2. não se pode esquecer de colocar a regra: test:/\.css$/, aqui estou dizendo que se o arquivo terminar em css  irei usar o que está dentro dele.




*/
class Heading {

    create(text){ //recusrso es6+ que o js consegue interpretar.
        const heading = document.createElement('h2');

        heading.innerText = text;

        heading.classList.add('main-title'); // aqui que irá importar o css

        document.querySelector('body').appendChild(heading);
    }
}

export default Heading;