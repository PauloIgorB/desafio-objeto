class hero{
    constructor(name, age, job, power){
        this.name = name
        this.age = age
        this.job = job
        this.power = power
    }
    
    attack(){
        console.log(`o ${this.job} atacou usando ${this.power}`)
    }
    counter(){
        console.log(`${this.job} contra atacou com ${this.power}`)
    }
    viwer(){
        console.log(`o ${this.job} assistia de longe`)
    }
    sneak(){
        console.log(`enquanto o ${this.job} espreitava para atacar com ${this.power}`)
    }
}

let heroMage = new hero("Adalberto", 76, "mago", "magia")
let heroWarrior = new hero("Roger", 23, "guerreiro", "espada")
let heroNinja = new hero("Naldo", 21, "ninja", "shuriken")
let heroMonge = new hero("joãotaro", 42, "monge", "artes marciais")

heroMage.attack()
heroWarrior.counter()
heroNinja.sneak()
heroMonge.viwer()