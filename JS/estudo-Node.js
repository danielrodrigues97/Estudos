//const { error } = require('console');
let modulo_node = require('fs');

let args = process.argv.slice(2);

let fileName = args[0];

modulo_node.readFile(fileName, 'UTF8', (error, data)=>{
    if(error) throw error;

    modulo_node.writeFile(fileName + '_Uppercase', data.toUpperCase(), (error)=>{
        if(error) throw error;

        console.log("Arquivo gerado com sucesso!!!")
    })
})