$(function () {
    var hakaiAudio = new Audio("/sound/hakai3.mp3")


    $(".delete").on("click", function (event) {
        event.preventDefault();

        hakaiAudio.play()

        var id = $(this).data("id");

        $.ajax("/api/character/" + id, {
            type: "PUT"
        }).then(function (response) {
            setTimeout(window.location.reload.bind(window.location), 4000)

        });
    });

    $("#newCharacter").on("submit", function (event) {
        event.preventDefault();

        $.ajax("/api/character", {
            type: "POST",
            data: { name: $("#characterName").val().trim() }
        }).then(function (response) {
            location.reload();
        });
    });

});


