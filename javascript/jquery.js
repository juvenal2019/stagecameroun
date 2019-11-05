
$(document).ready(function(){
    $('#bouton').hide();

    /*var term = $('#input').change(function()){
        for(var i = 0; i < term.length; i++){
            if(!$.isNumeric($(term[i]).val())){
                window.alert("La valeur saisie n'est pas numérique");
            }
        }
    }*/

    $('#input1').change(function(){
        if(!$.isNumeric($('#input1').val())){
            window.alert("La valeur saisie n'est pas numérique");
        }
    })
    $('#input2').change(function(){
        if(!$.isNumeric($('#input2').val())){
            window.alert("La valeur saisie n'est pas numérique");
        }
    })

    $('#input1' && '#input2').keyup(function(){
        if($(this).val()){
            $('#bouton').show();
        }
    })

    $('#bouton').click(function(){
        var term1 = +$('#input1').val();
        var term2 = +$('#input2').val(); 
        $('#result').text(term1 + term2);
    }); 
    
});