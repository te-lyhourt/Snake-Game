const endImage = new Image();
endImage.src ="assets/img/gamaOver.jpg"; 

function endBackground(){
    ctx.fillStyle = "#231d1d";
    ctx.fillRect(0,0,608,608);
    ctx.drawImage(endImage, 50, -30,500,500);
}

function drawEndScore(){
    
    ctx.fillStyle = "#F2940D";

    ctx.font = "40px 'Bangers', cursive";

    //draw score
    ctx.fillText("Score : "+score,200,450);

    //draw high scire
    checkScore();
    ctx.fillText("High Score : "+highScore,200,500);
}

function gameOver(){

    clearInterval(game);
    dead.play();

    setTimeout(()=>{
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        
        endBackground();
    
        drawEndScore();
        

        $(".restart").css("visibility","visible");
        // localStorage.clear();
    },2000);
    reload();
    
}

function reload(){
    $(".restart").click(()=>{
        $(".restart").css("visibility","hidden");
        location.reload();
    })
}
