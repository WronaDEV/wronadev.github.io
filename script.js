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

const LoadingPage = document.getElementById("loading-page");
setTimeout(() => {
    LoadingPage.style.display = "none";
}, 1900)

setTimeout(() => {
    document.body.style.overflowY = "scroll";
}, 1000)

function Translate(arg) {
    if (arg === "polish") {
        document.getElementById("united-kingdom-flag").src = "assets/polish-flag.png";
        document.getElementById("languages-menu-text").textContent = "PL";
        document.getElementById("hello-text").textContent = "Cześć, jestem";
        document.getElementById("hello-text").style.width = "500px";
        document.getElementById("wrona-text").style.marginLeft = "75px";
        document.getElementById("main-image").style.marginLeft = "300px";
        document.getElementById("about-me-text1").textContent = "O mnie";
        document.getElementById("about-me-text2").innerHTML = "Cześć, jestem Wrona. Zajmuję się programowaniem od 2019 roku. Tworzę zaawansowane<br> strony, proste aplikacje Webowe a nawet gry. Programuję z pasji oraz z perspektywą dalszej<br> pracy. Przykłady moich projektów możesz zobaczyć na moim <a target='_blank' href='https://github.com/WronaDEV'>[Githubie]</a>. Jeśli chcesz się<br> skontaktować to pisz śmiało!";
        toggle();
    }
    if (arg === "germanisch") {
        document.getElementById("united-kingdom-flag").src = "assets/germany-flag.png";
        document.getElementById("languages-menu-text").textContent = "DE";
        document.getElementById("hello-text").textContent = "Hallo, ich bin";
        document.getElementById("hello-text").style.width = "500px";
        document.getElementById("wrona-text").style.marginLeft = "75px";
        document.getElementById("main-image").style.marginLeft = "300px";
        document.getElementById("about-me-text1").textContent = "Über mich";
        document.getElementById("about-me-text2").innerHTML = "Cześć, jestem Wrona. Zajmuję się programowaniem od 2019 roku. Tworzę zaawansowane<br> strony, proste aplikacje Webowe a nawet gry. Programuję z pasji oraz z perspektywą dalszej<br> pracy. Przykłady moich projektów możesz zobaczyć na moim <a target='_blank' href='https://github.com/WronaDEV'>[Githubie]</a>. Jeśli chcesz się<br> skontaktować to pisz śmiało!";
        toggle();
    }
}

var copyDiscord = () => {
    navigator.clipboard.writeText('wronadev');
    document.getElementById("copy-done").style.opacity = 1;
    setTimeout(() => {
        document.getElementById("copy-done").style.opacity = 0;
    }, 1000)
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

// Rain
/*
var ctx;
var cW;
var cH;

var raindrops;

var rainStrength = 1;

function initCanvas() {

	ctx = document.getElementById("particleCanvas").getContext("2d");

	ctx.canvas.width = 1280 * 0.75; //690
	ctx.canvas.height = 720 * 0.75; //540

	cW = ctx.canvas.width;
	cH = ctx.canvas.height;

}

function Raindrops() {

	this.x;
	this.y;
	this.s;
	this.width;
	this.height;

	this.drops = [];
	this.splashes = [];

}
Raindrops.prototype.addDrop = function() {
	
	this.x = (Math.random() * (cW + 100)) - 100;
	this.y = 0;
	this.s = (Math.random() * 7) + 2;

	this.drops.push({
		x: this.x,
		y: this.y,
		velY: 2,
		width: this.s / 3,
		height: this.s * 1.2,
		speed: this.s,
		life: 60
	});

};
Raindrops.prototype.render = function() {

	for (var i = 0; i < rainStrength; i++) {
		this.addDrop();
	};
	
	ctx.save();

	ctx.clearRect(0, 0, cW, cH);

	ctx.fillStyle = 'rgba(50, 80, 200, 1)';
	for (var i = 0; i < this.drops.length; i++) {
		var drop = this.drops[i];

		ctx.fillRect(drop.x, drop.y, drop.width, drop.height);
		drop.y += drop.speed * 2;
		drop.x += 2;

		if (drop.y + drop.height > cH) {
			this.splashes.push(drop);

			this.drops.splice(i, 1);
		}
	};

	for (var i = 0; i < this.splashes.length; i++) {
		var splash = this.splashes[i];

		ctx.fillRect(splash.x, splash.y, splash.width/3, splash.height/3);

		splash.y -= splash.velY * splash.speed / 6;
		splash.life--;
		splash.velY -= 0.1;
		splash.x += 0.15 * splash.speed;

		if (splash.life <= 0 ) {
			this.splashes.splice(i, 1);
		}
		
	};

	ctx.restore();

};


function init() {

	raindrops = new Raindrops();

	loop();
}

function render() {

	raindrops.render();

}

function loop() {

	requestAnimationFrame(loop);
	render();
}

window.addEventListener('load', function() {
	initCanvas();
	init();
});

*/