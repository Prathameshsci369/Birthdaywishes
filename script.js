document.addEventListener('DOMContentLoaded', function() {
    const hackingTexts = [
        'INITIALIZING HACK SEQUENCE...',
        'BYPASSING MAINFRAME...',
        'ACCESSING SECURE DATABASE...',
        'DECRYPTING FILES...',
        'ALMOST THERE...',
        'ACCESS GRANTED. SURPRISE!',
        'EXECUTING SCRIPT...',
        'LOADING BIRTHDAY WISHES...'
    ];

    new Typed('#hacking-text', {
        strings: hackingTexts,
        typeSpeed: 50,
        backSpeed: 25,
        onComplete: function() {
            setTimeout(showBirthdayMessage, 500);
        }
    });

    function showBirthdayMessage() {
        document.getElementById('hacking-interface').style.display = 'none';
        document.getElementById('birthday-message').style.display = 'block';
    }

    createMatrixEffect();

    function createMatrixEffect() {
        const canvas = document.createElement('canvas');
        canvas.classList.add('matrix-canvas');
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
        const font_size = 16;
        const columns = canvas.width / font_size;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.25)"; // Increase opacity to make text more visible
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#00FF00";  // Brighter and more intense green
            ctx.font = font_size + "px arial";

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(text, i * font_size, drops[i] * font_size);

                if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(draw, 33);
    }

    addGlitchEffect();

    function addGlitchEffect() {
        const hackingText = document.getElementById('hacking-text');
        hackingText.classList.add('glitch');
    }
});
