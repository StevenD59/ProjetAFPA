$(function () {
    $.getJSON('ajax/experiences.json', function (donnees) {
        console.log(donnees);
        $.each(donnees, function (key, val) {
            $('.jsontable').append('<div class="border pt-3"><p class="text-center"><b>Société</b> : ' + val.societe + '</p> <p class="text-center"><b>Durée</b> : ' + val.duree + '</p> <p class="text-center"><b>Lieu</b> : ' + val.lieu + '</p> <p class="text-center"><b>Tâches</b> : <ul class="text-center"><li>' + val.task.join("</li><li>") +  '</li></ul></p></div>');
        });
    });

    $.getJSON('ajax/formations.json', function (donnees) {
        console.log(donnees);
        $.each(donnees, function (key, val) {
            $('.jsontable2').append('<p class="text-center"><b>Diplômes</b> : ' + val.name + '</p>');
        });
    });

    $.getJSON('ajax/contact.json', function (donnees) {
        console.log(donnees);
        $.each(donnees, function (key, val) {
            $('.contact').append('<p class="text-center mt-2"> ' + val.rue + '</p> <p class="text-center"> ' + val.ville + '</p><p>' + val.mail + '</p><p class="text-center">' + val.number + '</p><p class="text-center mb-2">' + val.permis + '</p>');
        });

    });


    $.getJSON('ajax/competences.json', function (donnees) {
        console.log(donnees);
        $.each(donnees, function (key, val) {
            $('.competences').append('<i class=" taille-icone ' + val.image + '"></i>');
        });
    });

    $.getJSON('ajax/langues.json', function (donnees) {
        console.log(donnees);
        $.each(donnees, function (key, val) {
            $('.langues').append('<p>' + val.lang + '</p>');
        });
    });

    $.getJSON('ajax/hobbies.json', function (donnees) {
        console.log(donnees);
        $.each(donnees, function (key, val) {
            $('.hobbies').append('<p>' + val.hobbie + '</p>');
        });
    });





});

let contactLoaded = false;
$(document).on("scroll", function () {
    if (!contactLoaded) {
        let scrollHeight = $(document).height();
        let scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight <0.01) {
            // when scroll to bottom of the page
            $(".formulaire").load("ajax/contact.html");
            contactLoaded = true;
       }
    }
});