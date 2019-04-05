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
    bttn.addEventListener('click', () => {
        if (!particles.isAnimating() && buttonVisible) {
            particles.disintegrate();
            buttonVisible = !buttonVisible;
        }
    });

});