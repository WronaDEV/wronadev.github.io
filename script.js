var upClass = 'toggle-up';
var downClass = 'toggle-down';
var show = 'show';
var unshow = 'unshow';

function toggle() {
    const languages_list = document.querySelector('.languages-list');
    const square = document.querySelector('.arrow');
    if (~square.className.indexOf(downClass)) {
        languages_list.className = languages_list.className.replace(unshow, show);
        square.className = square.className.replace(downClass, upClass);
    } else {
        languages_list.className = languages_list.className.replace(show, unshow);
        square.className = square.className.replace(upClass, downClass);
    }
}


// Snow
let snow = "true";
if (snow === "true") {
    document.addEventListener('DOMContentLoaded', function(){
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.onload = function(){
            particlesJS("snow", {
                "particles": {
                    "number": {
                        "value": 200,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "opacity": {
                        "value": 0.7,
                        "random": false,
                        "anim": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": false
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "enable": true,
                        "speed": 5,
                        "direction": "bottom",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": true,
                            "rotateX": 300,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": false
                        },
                        "onclick": {
                            "enable": false
                        },
                        "resize": false
                    }
                },
                "retina_detect": true
            });
        }
        document.head.append(script);
    });
}