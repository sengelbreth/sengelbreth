$(window).on("load", startHistorie);

function startHistorie() {
    console.log("start historie");
    $("#startknap").show();
    $("#title")[0].play();
    $("#title")[0].volume = 0.1;
    $("#bagrund_musik")[0].pause();
    $("#offer_container").addClass("hide");
    $("#sender_container").addClass("hide");
    $("#dilemma_container").addClass("hide");
    $("#afslutning").addClass("hide");
    $("#modtager_container").addClass("hide");


}
$("#startknap").on("click", offerKommerInd);

function offerKommerInd() {
    console.log("offer kommer ind")
    $("#startknap").hide();
    $("#title")[0].pause();
    $("#fodtrin")[0].play();
    $("#bagrund_musik")[0].currentTime = 10;
    $("#bagrund_musik")[0].play();
    $("#bagrund_musik")[0].volume = 0.1;
    $("#offer_sprite").removeClass("offer_glad");
    $("#offer_sprite").removeClass("offer_graeder");
    $("#modtager_sprite").removeClass("KiggerPaaTelefon_modtager");
    $("#modtager_sprite").removeClass("modtager_reaktion");
    $("#offer_sprite").addClass("offer_walkcycle_right");
    $("#offer_container").removeClass("hide");
    $("#offer_container").on("animationend", senderKommerInd);
}

function senderKommerInd() {
    console.log("sender kommer ind")
    $("#offer_container").off("animationend", senderKommerInd);
    $("#sender_container").removeClass("hide");
    $("#fodtrin")[0].play();
    $("#sender_container").addClass("sender_start_pos");
    $("#sender_container").addClass("sender_move_right");
    $("#sender_sprite").addClass("sender_walkcycle_right");
    $("#sender_container").on("animationend", modtagerBesked);
}

function modtagerBesked() {
    console.log("modtager besked")
    $("#sender_container").off("animationend", modtagerBesked);
    $("#sender_container").removeClass("sender_start_pos");

    $("#sender_sprite").removeClass("sender_walkcycle_right");
    $("#sms_modtag")[0].play();
    $("#sms_modtag")[0].volume = 0.2;
    $("#sender_container").addClass("sender_kigger_pos");
    $("#griner")[0].play();
    $("#griner")[0].currentTime = 7;
    $("#griner")[0].volume = 0.2;
    $("#sender_sprite").addClass("kiggerPaaTelefon");

    $("#sender_container").on("animationend", beskedSendt);

}




function beskedSendt() {
    setTimeout(function () {
        console.log("besked sendt")

        $("#sms_sendt")[0].play();


        $("#sms_sendt").on("ended", modtagerKommerInd);
    }, 4000);
    $("#sender_container").off("animationend", beskedSendt);
}


function modtagerKommerInd() {
    console.log("modtager kommer ind")
    $("#sms_sendt").off("ended", modtagerKommerInd);
    $("#modtager_container").removeClass("hide")
    $("#fodtrin")[0].play();
    $("#modtager_container").addClass("modtager_start_pos");
    $("#modtager_container").addClass("modtager_move_left");
    $("#modtager_sprite").addClass("modtager_walkcycle_left");
    $("#modtager_container").on("animationend", modtagerBesked2);

}

function modtagerBesked2() {
    console.log("modtager modtager besked")
    $("#modtager_container").off("animationend", modtagerBesked2);
    $("#sms_modtag")[0].play();
    $("#modtager_container").removeClass("modtager_start_pos");
    $("#modtager_sprite").removeClass("modtager_walkcycle_left");
    $("#modtager_container").addClass("modtager_telefon_pos");
    $("#modtager_sprite").addClass("KiggerPaaTelefon_modtager");
    $("#modtager_sprite").on("animationend", reaktion);
}

function reaktion() {
    console.log("reaktion")
    $("#modtager_sprite").off("animationend", reaktion);

    $("#modtager_sprite").removeClass("KiggerPaaTelefon_modtager");

    $("#modtager_sprite").addClass("modtager_reaktion");
    $("#modtager_sprite").on("animationend", dilemma);
}

function dilemma() {
    console.log("dilemma")
    $("#modtager_sprite").off("animationend", dilemma);
    $("#dilemma_container").removeClass("hide");
}

$(".dilemma_svar1").on("click", videresender);
$(".dilemma_svar2").on("click", sletter);

function videresender() {
    console.log("videresender")
    $("#dilemma_container").addClass("hide");
    $("#offer_sprite").removeClass("offer_walkcycle_right");
    $("#offer_sprite").addClass("offer_graeder");
    $("#offer_container").addClass("offer_graeder_pos");
    $("#cry")[0].play();
    $("#cry")[0].currentTime = 25;
    $("#cry").on("ended", afslutning1);
}

function afslutning1() {

    $("#cry").off("ended", afslutning1);
    $("#afslutning").removeClass("hide");
    $("#sender_container").addClass("hide");
    $("#afslutning_glad_sprite").addClass("hide");
    $("#afslutning_graeder_sprite").removeClass("hide");
    $(".godt").addClass("hide");
    $("#modtager_container").addClass("hide");
    $("#offer_container").addClass("hide");
    $(".forkert").removeClass("hide");
}

function sletter() {
    console.log("sletter")
    $("#dilemma_container").addClass("hide");
    $("#offer_sprite").removeClass("offer_walkcycle_right");
    $("#offer_sprite").addClass("offer_glad");
    $("#offer_container").addClass("offer_glad_pos");
    $("#glad")[0].play();
    $("#glad").on("ended", afslutning2);
}

function afslutning2() {
    $("#glad").off("ended", afslutning2);
    $("#afslutning").removeClass("hide");
    $("#sender_container").addClass("hide");
    $("#afslutning_graeder_sprite").addClass("hide");
    $(".godt").removeClass("hide");
    $("#afslutning_glad_sprite").removeClass("hide");
    $(".forkert").addClass("hide");
    $("#modtager_container").addClass("hide");
    $("#offer_container").addClass("hide");

}
$("#replayknap").on("click", startHistorie);
