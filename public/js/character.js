$(function () {

    const items = document.querySelectorAll('.grid__item');
    items.forEach((el, pos) => {
        const bttn = el.querySelector('button.particles-button');

        let particlesOpts = {
            direction: 'right',
            size: 3,
            color: 'blue',
            duration: 1200,
            easing: 'easeInCubic',
            particlesAmountCoefficient: 8,
            speed: 0.4,
            oscillationCoefficient: 1
        };

        const particles = new Particles(bttn, particlesOpts);

        let buttonVisible = true;
        // bttn.addEventListener('click', () => {
            
        // });
        $(".delete").on("click", function (event) {
            event.preventDefault();
            if (!particles.isAnimating() && buttonVisible) {
                particles.disintegrate();
                buttonVisible = !buttonVisible;
            }
            var id = $(this).data("id");
    
            $.ajax("/api/character/" + id, {
                type: "PUT"
            }).then(function (response) {
                setTimeout(window.location.reload.bind(window.location), 3000)
                
     
            });
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


