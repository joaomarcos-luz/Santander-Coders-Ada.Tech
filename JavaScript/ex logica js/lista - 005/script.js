Exercício Aula 05
Suponha que você esteja desenvolvendo um sistema de gestão de alunos para uma escola. Você precisa criar algumas funções para lidar com as informações dos alunos. Cada aluno é representado por um objeto que contém as seguintes informações: nome, idade, e uma lista de disciplinas que o aluno está cursando, onde cada disciplina é representada por um objeto contendo o nome da disciplina e a nota do aluno nessa disciplina.

Crie uma função chamada adicionarAluno que aceita como argumentos o nome, a idade e um dicionário de disciplinas de um aluno, e retorna um objeto representando o aluno.
Crie uma função chamada adicionarDisciplina que aceita como argumentos um objeto de aluno, o nome e a nota de uma disciplina, e atualiza o objeto do aluno para adicionar a nova disciplina com sua respectiva nota.
Crie uma função chamada calcularMedia que aceita como argumento um objeto de aluno e retorna a média das notas de todas as disciplinas cursadas por esse aluno.
Crie uma função chamada alunosAprovados que aceita como argumento um array de objetos de alunos e um valor mínimo de média para aprovação, e retorna um novo array contendo apenas os alunos que têm média igual ou superior ao valor mínimo de média.
OBS: Neste exercício, você irá criar funções de primeira ordem (adicionarAluno, adicionarDisciplina, calcularMedia) e uma função de alta ordem (alunosAprovados) para lidar com a gestão de alunos em uma escola. Isso inclui a criação de alunos, adição de disciplinas, cálculo de média e filtragem de alunos aprovados.

// 1. Crie uma função chamada adicionarAluno que aceita como argumentos o nome, a idade e um dicionário de disciplinas de um aluno, e retorna um objeto representando o aluno.

function adicionarAluno(nome, idade, disciplinas){
    return {
        nome: nome,
        idade: idade,
        disciplinas: disciplinas
    }
}

// 2. Crie uma função chamada adicionarDisciplina que aceita como argumentos um objeto de aluno, o nome e a nota de uma disciplina, e atualiza o objeto do aluno para adicionar a nova disciplina com sua respectiva nota.

function adicionarDisciplina(aluno, nome, nota) {
    aluno.disciplinas.push({nome: nome, nota:nota})
}

// 3. Crie uma função chamada calcularMedia que aceita como argumento um objeto de aluno e retorna a média das notas de todas as disciplinas cursadas por esse aluno.

function calcularMedia(aluno) {
    let soma = 0
    for (disciplina of aluno.disciplinas) {
        soma += disciplina.nota
    }
    return soma / aluno.disciplinas.length;
}

// 4. Crie uma função chamada alunosAprovados que aceita como argumento um array de objetos de alunos e um valor mínimo de média para aprovação, e retorna um novo array contendo apenas os alunos que têm média igual ou superior ao valor mínimo de média.

function alunosAprovados(arrAlunos, mediaAprovacao) {
    aprovados = [];
    for (aluno of arrAlunos) {
        if (calcularMedia(aluno) >= mediaAprovacao) {
            aprovados.push(aluno.nome);
        }
    }
    return aprovados;
}

// Iniciando os objetos do tipo aluno
joao = adicionarAluno("Joao", 17, [])
cintia = adicionarAluno("Cintia", 17, [])
mauricio = adicionarAluno("Mauricio", 17, [])
lucas = adicionarAluno("Lucas", 17, [])

console.log("Joao antes das disciplinas: ", joao)

// Adicionando as disciplinas
adicionarDisciplina(lucas, "espanhol", 8)
adicionarDisciplina(lucas, "matematica", 9)
adicionarDisciplina(lucas, "fisica", 10)

adicionarDisciplina(cintia, "espanhol", 9.5)
adicionarDisciplina(cintia, "matematica", 9.5)
adicionarDisciplina(cintia, "fisica", 9.5)

adicionarDisciplina(joao, "espanhol", 8)
adicionarDisciplina(joao, "matematica", 7)
adicionarDisciplina(joao, "fisica", 9)

adicionarDisciplina(mauricio, "espanhol", 2)
adicionarDisciplina(mauricio, "matematica", 5)
adicionarDisciplina(mauricio, "fisica", 7)

console.log("Joao apos as disciplinas: ", joao)

// Visualizando as medias
console.log("Medias")
console.log("Lucas: ", calcularMedia(lucas))
console.log("Cintia: ", calcularMedia(cintia))
console.log("Joao: ", calcularMedia(joao))
console.log("Mauricio: ", calcularMedia(mauricio))

// Verificando que Mauricio reprovou
console.log("Aprovados: ", alunosAprovados)