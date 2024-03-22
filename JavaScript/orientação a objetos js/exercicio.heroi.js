//Exercicio Heeroi.

class Heroi{
    #ataque
    #defesa
    #hp
    #mana

    constructor(nome, superPoder){
        this.nome = nome
        this.superPoder = superPoder
    }

    get ataque(){
        return this.#ataque
    }

    set ataque(ataque){
        this.#ataque = ataque
    }

    get defesa(){
        return this.#defesa
    }

    set defesa(defesa){
        this.#defesa = defesa
    }

    get hp(){
        return this.#hp
    }

    set hp(hp){
        this.#hp = hp
    }

    get mana(){
        return this.#mana
    }

    set mana(mana){
        this.#mana = mana
    }

    atacar(sasuke, naruto){
        sasuke.hp -= naruto.ataque
    }

    atacar(heroiInimigo) {
        // Reduz o HP do heroi inimigo
        heroiInimigo.hp -= this.#ataque
    
        // Reduz a mana do heroi atual
        this.#mana -= 10
      }
    
      defender(dano) {
        // Reduz o HP do heroi atual, mitigado pela defesa
        this.#hp -= (dano - this.#defesa)
      }
}

const naruto = new Heroi("Naruto", "Rasengan")
console.log(naruto)
const sasuke = new Heroi("Sasuke", "Chidori")
console.log(sasuke)

console.log("")

naruto.ataque = 90
naruto.defesa = 60
naruto.hp = 100
naruto.mana = 100

sasuke.ataque = 80
sasuke.defesa = 50
sasuke.hp = 90
sasuke.mana = 90

console.log(`Ataque do Naruto: ${naruto.ataque}`)
console.log(`Defesa do Naruto: ${naruto.defesa}`)
console.log(`HP do Naruto: ${naruto.hp}`)
console.log(`Mana do Naruto: ${naruto.mana}`)

console.log("")

console.log(`Ataque do Sasuke: ${sasuke.ataque}`)
console.log(`Defesa do Sasuke: ${sasuke.defesa}`)
console.log(`HP do Sasuke: ${sasuke.hp}`)
console.log(`Mana do Sasuke: ${sasuke.mana}`)

console.log("")

// Ataque do Naruto
naruto.atacar(sasuke);

// Defesa do Sasuke
sasuke.defender(naruto.ataque);

console.log(`Ataque do Naruto: ${naruto.ataque}`)
console.log(`Defesa do Naruto: ${naruto.defesa}`)
console.log(`HP do Naruto: ${naruto.hp}`)
console.log(`Mana do Naruto: ${naruto.mana}`)

console.log("");

console.log(`Ataque do Sasuke: ${sasuke.ataque}`)
console.log(`Defesa do Sasuke: ${sasuke.defesa}`)
console.log(`HP do Sasuke: ${sasuke.hp}`)
console.log(`Mana do Sasuke: ${sasuke.mana}`)