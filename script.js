const exercises = {
    1: `
class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    apresentar() {
        return \`Olá, meu nome é \${this.nome}, tenho \${this.idade} anos e sou \${this.sexo}.\`;
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, sexo, matricula, curso) {
        super(nome, idade, sexo);
        this.matricula = matricula;
        this.curso = curso;
    }
    apresentar() {
        return \`\${super.apresentar()} Estou matriculado no curso de \${this.curso}.\`;
    }
}

const aluno = new Aluno("João", 20, "homem", 12345, "Engenharia");
console.log(aluno.apresentar());
`,
    2: `
class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }
    mostrarSaldo() {
        return \`Saldo atual: R$ \${this.saldo.toFixed(2)}\`;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(titular, saldo, limite) {
        super(titular, saldo);
        this.limite = limite;
    }
    sacar(valor) {
        if (valor <= this.saldo + this.limite) {
            this.saldo -= valor;
        } else {
            console.log("Valor excede o limite.");
        }
    }
}
`,
    3: `
class Produto {
    constructor(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    atualizarEstoque(quantidade) {
        this.quantidadeEmEstoque += quantidade;
    }
    calcularValorEstoque() {
        return this.preco * this.quantidadeEmEstoque;
    }
}

class ProdutoPerecivel extends Produto {
    constructor(nome, preco, quantidadeEmEstoque, dataDeValidade) {
        super(nome, preco, quantidadeEmEstoque);
        this.dataDeValidade = dataDeValidade;
    }
    verificarValidade(dataAtual) {
        return new Date(this.dataDeValidade) > new Date(dataAtual);
    }
}
`,
    4: `
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    descrever() {
        return \`Marca: \${this.marca}, Modelo: \${this.modelo}, Ano: \${this.ano}\`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }
    descrever() {
        return \`\${super.descrever()}, Portas: \${this.portas}\`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }
    descrever() {
        return \`\${super.descrever()}, Cilindradas: \${this.cilindradas}\`;
    }
}
`,
    5: `
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    aumentarSalario(percentual) {
        this.salario += (this.salario * percentual / 100);
    }
    mostrarInformacoes() {
        return \`Nome: \${this.nome}, Salário: R$ \${this.salario.toFixed(2)}\`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario);
        this.departamento = departamento;
    }
    mostrarInformacoes() {
        return \`\${super.mostrarInformacoes()}, Departamento: \${this.departamento}\`;
    }
}

class Estagiario extends Funcionario {
    aumentarSalario(percentual) {
        if (percentual > 10) {
            percentual = 10;
        }
        super.aumentarSalario(percentual);
    }
}
`,
    6: `
class Livro {
    constructor(titulo, autor, disponivel = true) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }
    emprestar() {
        this.disponivel = false;
    }
    devolver() {
        this.disponivel = true;
    }
    status() {
        return \`\${this.titulo} - \${this.disponivel ? "Disponível" : "Emprestado"}\`;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    listarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }
    buscarLivroPorTitulo(titulo) {
        return this.livros.filter(livro => livro.titulo.includes(titulo));
    }
}
`,
    7: `
class Jogador {
    constructor(nome, nivel = 1, experiencia = 0) {
        this.nome = nome;
        this.nivel = nivel;
        this.experiencia = experiencia;
    }
    ganharExperiencia(pontos) {
        this.experiencia += pontos;
        this.subirDeNivel();
    }
    subirDeNivel() {
        if (this.experiencia >= 100) {
            this.nivel++;
            this.experiencia = 0;
        }
    }
}

class Guerreiro extends Jogador {
    constructor(nome, nivel, experiencia, forca) {
        super(nome, nivel, experiencia);
        this.forca = forca;
    }
    subirDeNivel() {
        super.subirDeNivel();
        if (this.nivel > 1) {
            this.forca += 5;
        }
    }
}
`,
    8: `
class Turma {
    constructor(curso) {
        this.curso = curso;
        this.alunos = [];
    }
    adicionarAluno(nome) {
        this.alunos.push(nome);
    }
    removerAluno(nome) {
        this.alunos = this.alunos.filter(aluno => aluno !== nome);
    }
    listarAlunos() {
        return this.alunos;
    }
}

class TurmaOnline extends Turma {
    constructor(curso, linkDeAcesso) {
        super(curso);
        this.linkDeAcesso = linkDeAcesso;
    }
    listarAlunos() {
        return \`\${super.listarAlunos().join(", ")} - Acesso: \${this.linkDeAcesso}\`;
    }
}
`,
    9: `
class Tarefa {
    constructor(descricao) {
        this.descricao = descricao;
        this.concluida = false;
    }
    marcarConcluida() {
        this.concluida = true;
    }
    descrever() {
        return \`\${this.descricao} - \${this.concluida ? "Concluída" : "Não concluída"}\`;
    }
}

class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }
    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }
    listarTarefasConcluidas() {
        return this.tarefas.filter(tarefa => tarefa.concluida);
    }
}
`,
    10: `
class Carro {
    constructor(placa, modelo) {
        this.placa = placa;
        this.modelo = modelo;
    }
    descrever() {
        return \`Placa: \${this.placa}, Modelo: \${this.modelo}\`;
    }
}

class Estacionamento {
    constructor(vagasTotais) {
        this.vagasTotais = vagasTotais;
        this.carros = [];
    }
    adicionarCarro(carro) {
        if (this.carros.length < this.vagasTotais) {
            this.carros.push(carro);
        } else {
            console.log("Sem vagas disponíveis.");
        }
    }
    removerCarro(placa) {
        this.carros = this.carros.filter(carro => carro.placa !== placa);
    }
    listarCarros() {
        return this.carros.map(carro => carro.descrever());
    }
}
`
};

function showCode(exerciseNumber) {
    const codeOutput = document.getElementById("code-output");
    codeOutput.textContent = exercises[exerciseNumber] || "Exercício não encontrado.";
}
