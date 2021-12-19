const path = require('path') // esse module é do node.js

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
/* este plugin é para externar o arquivo css para não debugar.
    npm install --save-dev mini-css-extract-plugin
*/


const HtmlWebpackPlugin = require('html-webpack-plugin')
/* esse plugin gerar o arquivo html automaticamente toda vez que dar um build
       npm install --save-dev html-webpack-plugin

*/


module.exports = {
    entry: './src/index.js', // essearquivo é que gerar a build. será o arquivo principal do projeto.
    output:{ // será gerado pela build.
        filename:'bundle.js', // seria o '.dist/main.js' ele pode ser chamado de bundles em alguns projetos.
        path: path.resolve(__dirname, './dist') // caminho relativo para o arquivo. Aqui ele entende onde ele irá gerar a build
    },
    mode: 'development', /* mode alterna entre modo de desenvolvimento e produção em bundles.js.
      assim nos ajuda a encontrar erros na aplicação durante o desenvolvimento.  
    */

    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'), // caminho para ele ler os arquivos.
        },
        compress: true,
        port: 9000  /* aqui é para ele rodar o servidor nessa porta.
        para rodar o servidor nessa porta preciso criar um script no package.json
        "dev": "webpack serve --hot" =npm run dev
        */
        /*esse modulo é para usar  servidor do proprio webpack
        npm install --save-dev webpack-dev-server 
        */
    },
      
    module:{
        rules:[
            {
              test: /\.css$/, //aqui estou dizendo que se o arquivo terminar em css  irei usar o que está dentro dele.
                use: [
                  //'style-loader', // - que irá transformar os arquivos css em estilo de fato.
                   MiniCssExtractPlugin.loader, // como iremos externo o css usar este comando. (se não for externo o css usar o de cima)
                     'css-loader' /* - esse identifica os arquivos que são css. 
                     tem que ser esta ordem. pois ele lê da direita para esquerda.
                       */
                ]
            
            }
       ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css' // aqui estamos gerando o arquivo final de build do css. pode colocar o nome que quiser.
        }),

        new HtmlWebpackPlugin ({
            filename: 'index.html' /* Este plugin é para criar automaticamente o Html e ele estará entre o build e a finalização do projeto.
                este arquivo pode gerar um template do arquivo já criado do HTML dentro da pasta public.
            */
        })

    ]
}



/*configração do webpack para conseguir trabalhar com recursos mais avançados.

*/
