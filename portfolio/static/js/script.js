document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio site loaded!");

    // Add simple animation
    document.querySelectorAll('.intro').forEach(el => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = 'opacity 1s ease-in-out';
            el.style.opacity = 1;
        }, 500);
    });
});
