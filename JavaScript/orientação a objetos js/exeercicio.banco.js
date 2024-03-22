/*Criem uma nova classe para os clientes desse banco
Ela deve possuir os atributos id, name, account (conta) e digit (digito da 
conta). Vocês podem criar quantos atributos a mais vocês quiserem*/
class Clientes{
    #id 
    nome 
    #cpf
    #password
    #acout
    #digit

    constructor(id, nome, cpf, password, acout, digit){
        this.#id = id
        this.nome = nome 
        this.#cpf = cpf
        this.#password = password
        this.#acout = acout
        this.#digit = digit
    }

    get id(){
      return  this.#id
    }

    set(id){
        this.#id = id
    }

}

class Bank {
    #name
    description
    #departments
    #clients

    constructor(name, description, departments, clients) {
        this.#name = name
        this.description = description
        this.#departments = departments
        this.#clients = clients
    }

    get name() {
        return this.#name
    }
    
    set name(value) {
        this.#name = value
    } 

    get clients(){
        return this.#clients
    }

    buscarClientId(numId){
        return this.clients.find(cliente => cliente.id === numId).nome
    }

    removeClientId(numId){
        this.#clients =  this.clients.filter(cliente => cliente.id !== numId)
    }

    novoCliente(cliente){
        const existeId = this.clients.some(c => c.id === cliente.id)
        const existeNome = this.clients.some(c => c.name === cliente.nome)
        if(!existeId && !existeNome){
            this.#clients.push(cliente)
        } else{
            throw "Id e Nome já exitente."
        }
    }
}

const joao = new Clientes(123, "João Marcos", "702.101.331-62", 123456, "501.601.701-01", 54)
const paulo = new Clientes(321, "Paulo Ricardo", "800.122.551-55", 654321, "547.184.844-55", 25)
const ricardo = new Clientes(456, "Ricardo Soares", "555.884.964-01", 987456, "844.442.112-88", 72)
//const nelma = new Clintes(789, "Nelma Francisca", "369.159.753-76", 654789, "123.872.782-56", 38)

const name = "Santander"
const description = 'A solução completa para o seu negócio'
const departments = ['Crédito', 'Contas a pagar', 'Atendimento ao cliente']
const clients =  [joao, paulo, ricardo]

const bank = new Bank(name, description, departments, clients)
console.log(bank)

//Criem um método que busca um determinado cliente a partir do seu id no banco.
console.log(bank.buscarClientId(123))
console.log(bank.buscarClientId(321))
console.log(bank.buscarClientId(456))

//Criem um método que remove um cliente a partir do seu id no banco
console.log(bank.clients)
bank.removeClientId(123)
console.log(bank.clients)

/*Criem um método que adiciona um novo cliente no banco. Antes de criar, 
vocês devem validar se: (a) já existe um cliente com esse id; (b) se já 
existe um cliente com o nome em questão. Caso já exista, não adicionem o 
novo cliente*/
const nelma = new Clientes(789, "Nelma Francisca", "369.159.753-76", 654789, "123.872.782-56", 38)
bank.novoCliente(nelma)

console.log(bank.clients)