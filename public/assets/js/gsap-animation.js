gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});

let splitTitleLines = gsap.utils.toArray(".tf-title");
splitTitleLines.forEach((title) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            trigger: title,
        },
    });

    const itemSplitted = new SplitText(title, {
        type: "words, lines",
    });
    gsap.set(title, {
        perspective: 400,
    });
    itemSplitted.split({
        type: "lines",
    });
    tl.from(itemSplitted.lines, {
        duration: 0.7,
        delay: 0,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
    });
});

