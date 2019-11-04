
function valider(){
    var val1 = +document.getElementById('input1').value;
    var val2 = +document.getElementById('input2').value;
    if (Number.isNaN(val1)){
        window.alert("La valeur saisie n'est pas un nombre");
    }else if(Number.isNaN(val2)){
        window.alert("La valeur saisie n'est pas un nombre");
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

var ms = document.querySelectorAll('input')
for(var i = 0; i < ms.length; i++){
    var m = ms[i];
    m.addEventListener('change', function () {
        this.nextElementSibling.classList.add('btn-visible')
    })
}

