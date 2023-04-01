const fullscreenDiv = document.getElementById("fullscreenDiv");
const hammer = new Hammer(fullscreenDiv);

hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });

hammer.on("panup", function (e) {
    const translateY = Math.min(0, e.deltaY);
    fullscreenDiv.style.transform = `translateY(${translateY}px)`;
});

hammer.on("panend", function (e) {
    fullscreenDiv.style.transform = "";
});
