$(document).ready(function(){

    $.fn.snowflakes = function(language){
        if(!language){
            console.log( "Language required: " + err );
            return;
        }

        $.getJSON( "i18n/languages/"+language+".json" )
        .done(function( json ) {
            setTranslations(json);
        })
        .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });

        function setTranslations(allTranslations)
        {
            $('[translate]').each(function() {
                var translateId = $(this)[0].attributes['translate'].value;
                var value = findTranslation(allTranslations, translateId);
                $(this)[0].innerText=value;
            });
        }

        function findTranslation(allTranslations, id){
            var result;
            $.each(allTranslations, function(i){
                if(i == id) {
                    result = allTranslations[i];
                    return false;
                }
            })
            return result;
        }     
    }
});