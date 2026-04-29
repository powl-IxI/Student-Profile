<script>
    // create audio objects
    const hoverSound = new Audio("SOUNDS/hover.mp3");
    const clickSound = new Audio("SOUNDS/click.mp3");

    // select all clickable images
    const overlays = document.querySelectorAll(".overlay");

    overlays.forEach(img => {
        // HOVER sound
        img.addEventListener("mouseenter", () => {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });

        // CLICK sound
        img.addEventListener("click", () => {
            clickSound.currentTime = 0;
            clickSound.play();
        });
    });
</script>