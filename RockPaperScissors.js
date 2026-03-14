const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function jogo(){
    
    let opcoes = ["Pedra", "Papel", "Tesoura"];
    
    let jogadaMaquina = opcoes[Math.floor(Math.random() * opcoes.length)]; /*Math.random gera números entre 0 e 1. */ /*Math.floor arrendonda os números (para baixo)*/
    /* Resultado - Math.random * quantidade de itens no array(3), Math.floor pega o resultado e arredonda, no final ficando por ex:  "opcoes[1]" que seria Papel. */
                                
    rl.question(`\nInsira sua jogada ( Pedra, Papel ou Tesoura): `, (jogadaUsuario) => {

        if (!opcoes.includes(jogadaUsuario)) { /*includes verifica se o valor digitado pelo usuário existe no array. */
            console.log("Jogada inválida!"); 
            jogo();
            return;    
            /* Caso o valor digitado pelo usuário esteja no array o resultado retornado pelo includes é "true" e assim que passa pelo "!" vira false, assim não executando o if. */
            /* E caso a jogada do usuário não esteja no array o resultado retornado é "false" e assim que passa pelo "!" vira true, assim executando o if */
        }

        console.log(`Jogada da máquina: ${jogadaMaquina}\n`);
        
        if(jogadaMaquina === jogadaUsuario){
            console.log("Empate!");
            jogo();
            return;

        }else if ((jogadaMaquina === "Pedra") && (jogadaUsuario === "Papel")) {
            console.log("Você ganhou!");
            jogo();
            return;
        
        }else if ((jogadaMaquina === "Pedra") && (jogadaUsuario === "Tesoura")) {
            console.log("Você perdeu!");
            jogo();
            return;

        }else if ((jogadaMaquina === "Papel") && (jogadaUsuario === "Tesoura")) {
            console.log("Você ganhou!");
            jogo();
            return;

        }else if ((jogadaMaquina === "Papel") && (jogadaUsuario === "Pedra")) {
            console.log("Você perdeu!");
            jogo();
            return;

        }else if ((jogadaMaquina === "Tesoura") && (jogadaUsuario === "Pedra")) {
            console.log("Você ganhou!");
            jogo();
            return;

        }else if ((jogadaMaquina === "Tesoura") && (jogadaUsuario === "Papel")) {
            console.log("Você perdeu!");
            jogo();
            return;
        }
    });
}

jogo();



