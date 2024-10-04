const fs = require("fs");

var usuarios = [];

function read(array, file){
    return array = JSON.parse(fs.readFileSync(file));
}

function create(array,nome, idade, valor, chave){
    array.push({
        "nome":nome,
        "idade":idade,
        "Valor":valor,
        "chave": chave
    },);
    update("bd.json", usuarios);
}

function update(file, array){
    save(file);
    read(array, file);
}

function save(file){
    fs.writeFileSync(file, JSON.stringify(usuarios));
}

function del(array, nome){
    
    for (let index = 0; index < array.length; index++) {
        if(array[index].nome === nome){
            array.splice(index, 1);
        }
    }
    update("bd.json", usuarios);
}

usuarios = read(usuarios, "bd.json");

create(usuarios, 'Dyeison', 30, 1000, 10312312320);

del(usuarios, 'Dyeison')

console.log(usuarios)

