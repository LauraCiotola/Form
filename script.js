function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
    //trim serve a levare gli spazi all'inizio e alla fine
    var firstname = $("#length").val().trim();
    var lastname = $("#length2").val().trim();
    var username = $("#user").val().trim();
    var password = $("#inputPassword3").val().trim();
    var password2 = $("#inputPassword4").val().trim();
    var email = $("#mail").val().trim();

    if ( firstname.length < 4) {
        return false;
    }

    if ( lastname.length < 4) {
        return false;
    }

    if ( username.length < 7 || username.length > 20) {
        return false;

    }
    
    if (password != password2) {
        return false;
    }

    if (!validateEmail(email)) {
        return false;
    }
};

$("#form").submit(function(e){

    if (!validateForm()) {
        e.preventDefault();
    }
 });

