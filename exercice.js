
function somme() {
    a=prompt('entrée un nombre');
    b=prompt('entrée un nombre');
    let resultat = Number(a) + Number(b);
    document.open();
    document.write(resultat);
}
function afficherNombres() {

    for (let i = 1; i <= 10; i++) {
        alert(i);
    }
}

function plusGrandNombre() {
   let  a = Number(prompt("Veuillez enter un nombre: "))
   let  b = Number(prompt("Veuillez enter un nombre: "))
    if (a>b){
        document.write(a + ' ' +'est plus grand que' + ' ' + b)
    }
    else{
        document.write(b + ' ' +'est plus grand que' + ' ' + a) 
    }
}
function pair() {
    let a = Number(prompt("Veuillez entrez un nombre: "))
    if( a%2==0) {
        document.write(a + ' '+ 'est un nombre pair')
    }
    else{
        document.write(a + ' '+ "n'est pas un nombre pair")
    }
}
    
function compterVoyelles() {
    let compteur = 0;
    const voyelles = "aeiouyAEIOUY";
    let chaine = prompt("Entrez votre chaîne de caractères :"); // Demande à l'utilisateur d'entrer une chaîne
    
    // Parcours de chaque caractère de la chaîne
    for (let i = 0; i < chaine.length; i++) {
      if (voyelles.includes(chaine[i])) { // Vérifie si le caractère est une voyelle
        compteur++;
      }
    }
    
    // Affiche le résultat en remplaçant le texte du bouton
    document.write("Nombre de voyelles : " + compteur) ;
  }
    
  
  
  function factorielle() {
        n = Number (prompt("Veuillez saisir un nombre"))
        if (n === 0 || n === 1) {
          return 1;
        }
        let resultat = 1;
        for (let i = 1; i <= n; i++) {
          resultat *= i;
        }
        document.write("La factorielle de " + n + " est : " + resultat);
      }

      function Palindrome() {
        let chaine = prompt("Entrer un mot")
        let chaineInversee = chaine.split("").reverse().join("");
        if (chaine === chaineInversee) {
          document.write(chaine + " est un palindrome.");
        } else {
            document.write(chaine + " n'est pas un palindrome.");
        }
      }
      function calculerAge() {
        let année = Number(prompt("veuillez saisir votre année actuel"))
        let naissance = Number(prompt("veuillez saisir votre année de naissance"))
        let valeur = Number(prompt("votre anniversaire est déjà passée?"))
        
  
        if(valeur = "oui"){
          document.write(année - naissance)
        }
        else{
          document.write(année - naissance-1)
        }

    }
       
    
    function trouverMinimum() {
      let  a = Number(prompt("Veuillez enter un nombre: "))
      let  b = Number(prompt("Veuillez enter un nombre: "))
       if (a<b){
           document.write(a + ' ' +'est plus petit que' + ' ' + b)
       }
       else{
           document.write(b + ' ' +'est plus petit que' + ' ' + a) 
       }
      }


 
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Exemple
console.log(isPrime(7));  // true
console.log(isPrime(12)); // false

  

      
    
    
      
      
      
      
      
      
      
      
      
      
      
      
  






