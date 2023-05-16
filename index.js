const start = document.querySelector('#start');
const howMany = document.querySelector('#combiendetemps');
const compte = document.querySelector("#temps");
const alert = document.querySelector("#alert");
const restart = document.querySelector("#restart");
const temps15 = document.querySelector("#temps15");
const temps30 = document.querySelector("#temps30");
const temps45 = document.querySelector("#temps45");
const temps60 = document.querySelector("#temps60");
const rachid = document.querySelector("#rachid");


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
      if(howMany.value === "0123456789"){
          
        howMany.value = "";
        alert.innerHTML = "";
        compte.innerHTML = "Golden Moustache 🥸 !!!";
        clearInterval(minuteur);
      }

      temps15.addEventListener("click",function(){
        clearInterval(minuteur)
      })
      temps30.addEventListener("click",function(){
        clearInterval(minuteur)
      })
      temps45.addEventListener("click",function(){
        clearInterval(minuteur)
      })
      temps60.addEventListener("click",function(){
        clearInterval(minuteur)
      })

      restart.addEventListener("click",function(){
        clearInterval(minuteur);
        howMany.value = "";
        compte.innerHTML = "";
        alert.innerHTML= "";
      })
      

     
      
    }, 1000); 
  }



  start.addEventListener("click", function(){
    demarrerMinuteur(howMany.value);
    alert.innerHTML = "";
      
  });

  

 
 
  rachid.addEventListener('click',function(){
    window.alert("Non pas lui svp !! au suivant");
  })

  temps15.addEventListener("click",function(){
    howMany.value = "15"
    demarrerMinuteur(howMany.value);
    alert.innerHTML = "";
  });

    
 

  temps30.addEventListener("click",function(){
    howMany.value = "30"
    demarrerMinuteur(howMany.value);
    alert.innerHTML = "";
  });

  temps45.addEventListener("click",function(){
    howMany.value = "45"
    demarrerMinuteur(howMany.value);
    alert.innerHTML = "";
  });
  temps60.addEventListener("click",function(){
    howMany.value = "60"
    demarrerMinuteur(howMany.value);
    alert.innerHTML = "";
  });





