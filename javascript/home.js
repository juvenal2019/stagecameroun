
function valider(){
    var val1 = +document.getElementById('input1').value;
    var val2 = +document.getElementById('input2').value;
    if (Number.isNaN(val1)){ 
        document.getElementById('bouton').style.display = 'none'
        window.alert("La valeur saisie n'est pas un nombre");
    }else if(Number.isNaN(val2)){ 
        document.getElementById('bouton').style.display = 'none'
        window.alert("La valeur saisie n'est pas un nombre");
    }
    else{
        document.getElementById('bouton').style.display = 'block'
    }
}

function additionne(){
    var term1 = +document.getElementById('input1').value;
    var term2 = +document.getElementById('input2').value;
    if(term1 != '' && term2 != ''){
        document.getElementById("result").textContent = "La somme est : " + (term1 + term2);
    }else{
        window.alert("Veuillez remplir les champs avec des valeurs numériques");
    }
}

