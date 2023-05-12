const start = document.querySelector('#start');
const howMany = document.querySelector('#combiendetemps');
const compte = document.querySelector("#temps");
const alert = document.querySelector("#alert");
const restart = document.querySelector("#restart");



function demarrerMinuteur(dureeEnSecondes) {
    
    let dureeEnMillisecondes = (parseInt(howMany.value) + 1) * 1000;
  
    
  
    let minuteur = setInterval(function() {
      dureeEnMillisecondes -= 1000;
  
      let tempsRestantEnSecondes = (dureeEnMillisecondes) / 1000;
  
      compte.innerHTML = `Il te reste ${tempsRestantEnSecondes} Secondes`;
       if(tempsRestantEnSecondes >= howMany.value * 0.66){
        compte.style.color = "green";
       }
        
       if(tempsRestantEnSecondes <= howMany.value *0.66 && tempsRestantEnSecondes > howMany.value * 0.33){
        compte.style.color = "orange";
      }
       if(tempsRestantEnSecondes <= howMany.value * 0.33 ){
        compte.style.color ="red";
      }
  
       if (dureeEnMillisecondes <= -1) {
        clearInterval(minuteur);
        compte.innerHTML = "";
        howMany.value = ""
        alert.innerHTML = "Temps écoulé !! Personne Suivante !!"
      }
      restart.addEventListener("click",function(){
        clearInterval(minuteur);
        howMany.value = "45";
        compte.innerHTML = "";
        alert.innerHTML= "";
      })
      
      
    }, 1000); 
  }



  start.addEventListener("click", function(){
    demarrerMinuteur(howMany.value);
    alert.innerHTML = "";
      
  });

 


    

    






