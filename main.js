// email

let email = ["chris@gmail.com", "dago@gmail.com", "luca@gmail.com",]
let btn = document.getElementById('btn')

btn.addEventListener('click', 
    function(){
        let flag = false 
        var myEmail = document.getElementById('email').value;
        console.log(myEmail);
    

        for ( let i = 0; i <email.length; i++){
            if (myEmail == email[i] ) {
                flag = true                
            }            
        }

        if (flag == true){
            alert ('email valida')

        }else {
            alert ('email non valida')

        }
    }
)


//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


//Stabilire il vincitore, in base a chi fa il punteggio più alto