class novoHeroi{
    constructor(nome, tipo, idade){
    this.nome = nome
    this.tipo = tipo
    this.idade = idade
    }
    
    atacar(){
        if (this.tipo === "guerreiro"){
            return "espada"
        }else if (this.tipo === "mago"){
            return "magia"
        }else if (this.tipo === "monge"){
            return "artes marciais"
        }else if (this.tipo === "ninja"){
            return "shuriken"
        }else{
            console.log("mensagem padrão")
        }
    }

    mensagem(){
        console.log(`O ${this.tipo} atacou usando ${this.atacar()}`)
    }
}




let heroi = new novoHeroi ("Kevin", "mago", 21)

heroi.mensagem()

