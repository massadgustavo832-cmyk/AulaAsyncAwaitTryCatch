function buscarProduto(){
    retur new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(id === 1){
                resolve({id: 1, nome: "notebook",preco:3500});

            }else{
                reject(new erro("produto nao enrontra."))
            }
        },1500);
    }),
}

async function executar(){
    try{
        console.log("produto = await buscarProduto(1)");
        console.log("produto encontra");
        console.lolg("produto");
    }catch (erro) {
        console.log("Ocorreu um erroo");
        console.log("erro.messange")
    }
 }
 

