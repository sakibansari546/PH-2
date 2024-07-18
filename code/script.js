locoMotiveScroller()

function locoMotiveScroller() {


    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

onload()

function onload() {
    hero()
    // page-1

    gamePage()
    gamePage2()
    gamePage3()
    gamePage4()

    animateStoreText()
}

// GSAP Scroll Trigger
gsap.registerPlugin(ScrollTrigger);
function hero() {
    gsap.to(".hero-section", {
        scrollTrigger: {
            trigger: ".page-1",
            scroller: "#main",
            // markers: true,
            start: "top 0%",
            end: "top -100%",
            scrub: 2,
            // pin: true
        },
        rotationX: -10,
        rotationY: -10,
        skewY: 17,
        translateY: -100,
        opacity: 0,
        ease: "none"
    });

    gsap.from('.hero-section h1', {
        rotationX: -10,
        rotationY: -10,
        skewY: 17,
        translateY: -100,
        opacity: 0,
        ease: "none"
    })

    gsap.from('.hero-section .hero-sm-heading', {
        rotationX: -10,
        rotationY: -10,
        skewY: 17,
        translateY: -100,
        opacity: 0,
        ease: "none"
    })
    gsap.from('.hero-section .hero-desc', {
        rotationX: -10,
        rotationY: -10,
        skewY: 17,
        translateY: -100,
        opacity: 0,
        ease: "none"
    })
}


function gamePage() {
    // Create the scroll animation
    const gameName = document.querySelector('.gameName');
    const viewProject = document.querySelector('.view-project');

    gsap.from(gameName, {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.game-section',
            start: "top 90%",
            end: "top 46%",
            scrub: 1,
            // Adding some additional properties for the effect
        },
        x: 450, // Move left
        y: 150, // Rotate 360 degrees
        scale: 0, // Scale down to 50% of its original size
        opacity: 0, // Make it semi-transparent
        ease: "none"
    });

    gsap.from('.page-2 .gameImgText img', {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.page-2 .game-section',
            start: "top 90%",
            end: "top 46%",
            scrub: 1,
            // Adding some additional properties for the effect
        },
        x: -40, // Rotate 360 degrees
        scale: 1.03, // Scale down to 50% of its original size
        opacity: 0, // Make it semi-transparent
        ease: "none"
    });

    gsap.from('.page-2 .gameNo p', {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.page-2 .game-section',
            start: "top 60%",
            end: "top 46%",
            scrub: 1,
        },
        y: 20, // Move down 20 pixels
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        ease: "sine.inOut", // Smoother easing
        duration: 0.5 // Duration for each animation cycle
    });

    gsap.fromTo('.page-2 .gameImgText img', {
        scale: 1.03, // Start slightly scaled up
    }, {
        scale: 1, // Scale back to original size
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        duration: 2, // Duration of the scale transition
        ease: "sine.inOut" // Smoother easing
    });
    gsap.from('.page-2 .gameNo p', {
        y: 110,
        duration: 2,
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        ease: "sine.inOut"
    });

    // Animation for the view project button
    gsap.from('.page-2 .view-project', {
        x: -50, // Move slightly right
        y: 110,
        duration: 2,
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        ease: "sine.inOut"
    });


}

function gamePage2() {
    // Animation for game name
    gsap.from('.page-3 .gameName', {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.page-3 .game-section',
            start: "top 90%",
            end: "top 46%",
            scrub: 1,
        },
        x: 450, // Move right
        y: 150, // Move down
        scale: 0, // Scale down
        opacity: 0, // Start transparent
        ease: "none"
    });

    // Animation for game image
    gsap.from('.page-3 .gameImgText img', {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.page-3 .game-section',
            start: "top 90%",
            end: "top 46%",
            scrub: 1,
        },
        x: -40, // Move left
        scale: 1.03, // Start slightly larger
        opacity: 0, // Start transparent
        ease: "none"
    });

    // Animation for game number
    gsap.from('.page-3 .gameNo p', {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.page-3 .game-section',
            start: "top 60%",
            end: "top 46%",
            scrub: 1,
        },
        y: 20, // Move down
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        ease: "sine.inOut",
        duration: 0.5 // Duration for each cycle
    });

    // Continuous scaling animation for the game image
    gsap.fromTo('.page-3 .gameImgText img', {
        scale: 1.03, // Start slightly scaled up
    }, {
        scale: 1, // Scale back to original size
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        duration: 2, // Duration of the transition
        ease: "sine.inOut"
    });

    // Animation for the game number position
    gsap.from('.page-3 .gameNo p', {
        y: 110,
        duration: 2,
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        ease: "sine.inOut"
    });

    // Animation for the view project button
    gsap.from('.page-3 .view-project', {
        x: -50, // Move slightly right
        y: 110,
        duration: 2,
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        ease: "sine.inOut"
    });
}

function gamePage3() {
    // Animation for game name
    gsap.from('.page-4 .gameName', {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.page-4 .game-section',
            start: "top 90%",
            end: "top 46%",
            scrub: 1,
        },
        x: 450, // Move right
        y: 150, // Move down
        scale: 0, // Scale down
        opacity: 0, // Start transparent
        ease: "none"
    });

    // Animation for game image
    gsap.from('.page-4 .gameImgText img', {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.page-4 .game-section',
            start: "top 90%",
            end: "top 46%",
            scrub: 1,
        },
        x: -40, // Move left
        scale: 1.03, // Start slightly larger
        opacity: 0, // Start transparent
        ease: "none"
    });

    // Animation for game number
    gsap.from('.page-4 .gameNo p', {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.page-4 .game-section',
            start: "top 60%",
            end: "top 46%",
            scrub: 1,
        },
        y: 20, // Move down
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        ease: "sine.inOut",
        duration: 0.5 // Duration for each cycle
    });

    // Continuous scaling animation for the game image
    gsap.fromTo('.page-4 .gameImgText img', {
        scale: 1.03, // Start slightly scaled up
    }, {
        scale: 1, // Scale back to original size
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        duration: 2, // Duration of the transition
        ease: "sine.inOut"
    });

    // Animation for the game number position
    gsap.from('.page-4 .gameNo p', {
        y: 110,
        duration: 2,
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        ease: "sine.inOut"
    });

    // Animation for the view project button
    gsap.from('.page-4 .view-project', {
        x: -50, // Move slightly right
        y: 110,
        duration: 2,
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        ease: "sine.inOut"
    });
}
function gamePage4() {
    // Animation for game name
    gsap.from('.page-5 .gameName', {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.page-5 .game-section',
            start: "top 90%",
            end: "top 46%",
            scrub: 1,
        },
        x: 450, // Move right
        y: 150, // Move down
        scale: 0, // Scale down
        opacity: 0, // Start transparent
        ease: "none"
    });

    // Animation for game image
    gsap.from('.page-5 .gameImgText img', {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.page-5 .game-section',
            start: "top 90%",
            end: "top 46%",
            scrub: 1,
        },
        x: -40, // Move left
        scale: 1.03, // Start slightly larger
        opacity: 0, // Start transparent
        ease: "none"
    });

    // Animation for game number
    gsap.from('.page-5 .gameNo p', {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.page-5 .game-section',
            start: "top 60%",
            end: "top 46%",
            scrub: 1,
        },
        y: 20, // Move down
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        ease: "sine.inOut",
        duration: 0.5 // Duration for each cycle
    });

    // Continuous scaling animation for the game image
    gsap.fromTo('.page-5 .gameImgText img', {
        scale: 1.03, // Start slightly scaled up
    }, {
        scale: 1, // Scale back to original size
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        duration: 2, // Duration of the transition
        ease: "sine.inOut"
    });

    // Animation for the game number position
    gsap.from('.page-5 .gameNo p', {
        y: 110,
        duration: 2,
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        ease: "sine.inOut"
    });

    // Animation for the view project button
    gsap.from('.page-5 .view-project', {
        x: -50, // Move slightly right
        y: 110,
        duration: 2,
        yoyo: true, // Reverse the animation
        repeat: -1, // Loop indefinitely
        ease: "sine.inOut"
    });
}

// Function to animate text elements
function animateStoreText() {
    gsap.to('.store-image img', {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.store-image',
            start: "top 40%", // Start the animation when the image is at the center of the viewport
            end: "top -200%", // End the animation when the bottom of the image reaches the top of the viewport
            scrub: true, // Smooth animation based on scroll position
            // markers: true, // For debugging purposes, remove this in production
            pin: true // Pin the animation to the viewport while scrolling
        },
        width: "100vw", // Increase width
        height: "150vh", // Increase height
        borderRadius: "0%", // Change border-radius to 0%
        ease: "power1.inOut"
    });

    gsap.from('.insta-posts .post', {
        scrollTrigger: {
            scroller: "#main",
            trigger: '.insta-posts',
            start: "top 80%", // Start when the top of the posts is near the viewport
            end: "top 30%", // End when the posts are in view
            scrub: true, // Smooth animation based on scroll position
            // markers: true // For debugging purposes
        },
        y: 100, // Move posts up from below
        opacity: 0, // Start from transparent
        stagger: 0.2, // Stagger the animation for each post
        ease: "power1.inOut"
    });
}
gsap.registerPlugin(ScrollTrigger);

function addImageScrollAnimation() {
    gsap.utils.toArray('.page-7 section').forEach((section, index) => {
        const image = document.querySelector(`#preview-${index + 1} img`);
        const startCondition = index === 0 ? 'top top' : 'bottom bottom';

        gsap.to(image, {
            scrollTrigger: {
                scroller: "#main",
                trigger: section,
                start: startCondition,
                end: () => {
                    const viewPortHeight = window.innerHeight;
                    const sectionBottom = section.offsetTop + section.offsetHeight;
                    const additionalDistance = viewPortHeight * 0.5;
                    const endValue = sectionBottom - viewPortHeight + additionalDistance;
                    return `+=${endValue}`;
                },
                scrub: 1,
            },
            scale: 3,
            ease: 'none',
        });
    });
}

function animateClipPath(sectionId, previewId, startClipPath, endClipPath, start = 'top center', end = 'bottom top') {
    let section = document.querySelector(sectionId);
    let preview = document.querySelector(previewId);

    ScrollTrigger.create({
        scroller: "#main",
        trigger: section,
        start: start,
        end: end,
        onEnter: () => {
            gsap.to(preview, {
                scrollTrigger: {
                    scroller: "#main",
                    trigger: section,
                    start: start,
                    end: end,
                    scrub: 0.125,
                },
                clipPath: endClipPath,
                ease: 'none'
            });
        }
    });
}

animateClipPath(
    "#section-1",
    "#preview-1",
    "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
);

const totalSections = 4;

for (let i = 1; i <= totalSections; i++) {
    let currentSection = `#section-${i}`;
    let prevPreview = `#preview-${i - 1}`;
    let currentPreview = `#preview-${i}`;

    if (i > 1) {
        animateClipPath(
            currentSection,
            prevPreview,
            "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            "top bottom",
            "center center"
        );
    }

    if (i < totalSections) {
        animateClipPath(
            currentSection,
            currentPreview,
            "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            'center center',
            'bottom bottom'
        );
    }
}

addImageScrollAnimation();
