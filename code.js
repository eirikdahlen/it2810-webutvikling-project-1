
let hidden = true;
let sizeBigSun = false;
let planetBig = false;
let rays = false;

//Makes an array for all elements with class="planet" in HTML
let planets = document.getElementsByClassName("planet");


// documentation-buttom method
$(".doc_btn").click(() => {
    if (hidden == true){
        $(".content").css({"display":"block"})
        hidden = false;
    } else {
        $(".content").css({"display":"none"})
        hidden = true;
    }
});

// -------------------SVG actions------------------
// Color-change
$(".planets").hover(function() {
    for (var i = 0; i < planets.length ; i++) {
        $(planets[i]).css({"fill": getRandomColor()});
    }
});

// Creates random movements for the planets onClick
$(".planets").click(function() {
    for (var i = 0; i < planets.length ; i++) {
        let number = Math.floor((Math.random() * 150) + 1);
        if(i % 2 == 0) {
            if(planetBig == false) {
                TweenMax.to(planets[i], 2, {
                    scale:2,
                    y:'-=' + number.toString()
                });
                planetBig = true;
            } else {
                TweenMax.to(planets[i], 2, {
                    scale:1,
                    y:'+=' + number.toString()
                });
                planetBig = false;
            }
        } else {
            if(planetBig == false) {
                TweenMax.to(planets[i], 2, {
                    scale:0.5,
                    y:'-=' + number.toString(),
                    x:'+=' + number.toString()
                });
                planetBig = true;
            } else {
                TweenMax.to(planets[i], 2, {
                    scale:1,
                    y:'+=' + number.toString(),
                    x:'+=' + number.toString()
                });
                planetBig = false;
            }
        }

    }
});

// Sunrays
$("#sun").hover(function() {
    if (rays) {
        $(".rays").css({"display":"none"});
        rays=false;
    } else {
        $(".rays").css({"display":"block"});
        rays=true;
    }
});

// Function for exploding sun
$("#sun").click(function() {
    if(sizeBigSun == false) {
        TweenMax.to("#sun", 2, {
            scale:2,
            y:'-=150'
        });
        sizeBigSun = true;
    } else {
        TweenMax.to("#sun", 2, {
            scale:1,
            y:'+=150'
        });
        sizeBigSun = false;
    }
});

// This function just generates some random colors
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
