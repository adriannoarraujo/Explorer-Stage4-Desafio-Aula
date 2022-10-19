// Criar uma lista de pacientes
// Cada pacientes deverá conter : nome, idade, peso , altura e o IMC
// ter a opção de listar pacientes
// ter a opção de fazer um emc de um paciente 


let patientes = [];
let opcao;
let index = 0


class Patient {

    constructor(nome, idade, peso, altura){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;

        this.imc =  (peso/((altura/100) ** 2)).toFixed(2);
       
    }
};

function Imc( peso, altura ){
    let valor = peso/((altura/100) ** 2)

    valor = valor.toFixed(2)

    if (valor >=18.5 && valor <=24.9) {
        alert(`O IMC do paciente é ${valor}. IMC considerado normal`)

    }else if (valor >=25 && valor <=29.9){
        alert(`O IMC do paciente é ${valor}. IMC considerado Sobrepeso`)

    }else if (valor >=30 && valor <=39.9){
        alert(`O IMC do paciente é ${valor}. IMC é considerado Obsidade`)

    }else if (valor >=40){
        alert(`O IMC do paciente é ${valor}. IMC é considerado Obsidade grave`)

    }else {
        alert(`O IMC do paciente é ${valor}. o paciente está abaixo do peso`)
    }
    return 
}



// function Patient(nome, idade, peso, altura) {
//     this.nome = nome;
//     this.idade = idade;
//     this.peso = peso;
//     this.altura = altura;
// }

while (opcao !=4) {

        
    opcao = Number(prompt(`
        Olá usuário! Digite o número da opção desejada

          1 - Adicione os dados do paciente.
          2 - Listar pacientes cadastrados.
          3 - Calcular o IMC de um paciente
          4 - Sair do programa.`
        )   
    );

    
    switch (opcao) {

        case 1:{

            let nome = prompt(`Digite o nome do paciente.`);
            let idade = Number (prompt(`Digite a idade do paciente.`)); 
            let peso = Number(prompt(`Digite o peso do paciente.`)); 
            let altura = Number(prompt(`Digite a altura do paciente.`));

            let paciente = new Patient(nome, idade, peso, altura)

           patientes.push(paciente);
            
        }break;
    
        case 2: {
           if (patientes.length !=0){

                for ( let elemento of patientes){
                    alert(`Dados do paciente = nome    :  ${elemento.nome} 
                                    Idade   :  ${elemento.idade}
                                    Peso    :  ${elemento.peso}
                                    Altura  :  ${elemento.altura}
                                    IMC     :  ${elemento.imc}
                          ` ) 
                                            
                }
           } else{
                alert("Nenhum paciente cadastrado")
           }
        } break;

        case 3: {
            let peso = Number(prompt("Didite o peso do paciente"))
            let altura = Number(prompt("Didite a altura do paciente sem ponto e virgula. Exemplo paciente 1,78 vamos digitar 178"))
            Imc(peso, altura);
           
         } break;

        case 4: {
           alert("O programa vai ser encerrado");
        } break;

        default : 
            alert("A opção não corresponde com o menu de opçãoes");
        break;
    }
}
