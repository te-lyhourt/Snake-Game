//get our html elemt and set it to 2d
const cvs = document.getElementById("myGame");
const ctx = cvs.getContext('2d');


const welcome = new Image();
welcome.src = "assets/img/welcome.png";
ctx.drawImage(welcome,0,0,608,608);


let game ;

$(".start").click(()=>{
    $(".start").css("visibility","hidden");

    ctx.clearRect(0, 0, cvs.width, cvs.height);

    game = setInterval(draw,100);
})