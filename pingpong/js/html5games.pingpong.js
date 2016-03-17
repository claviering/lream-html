var pingpong = {}
pingpong.pressedKeys = [];
$(function(){
    pingpong.timer = setInterval (gameloop,30);
    $(document).keydown(function(e){
        pingpong.pressedKeys[e.which] = true;
    });
    $(document).keyup(function(e){
        pingpong.pressedKeys[e.which] = false;
    });
});

function gameloop(){
    movePaddles();
}

function movePaddles(){
    $(document).keydown(function(e){
        var code = e.keyCode || e.which;
        if (code == 13){
            var top = parseInt($("#paddleB").css("top"));
            $("#paddleB").css("top",top - 1);
        }
    });
//    if (pingpong.pressedKeys[KEY.UP]){
//        var top = parseInt($("#paddleB").css("top"));
//        $("#paddleB").css("top",top - 5);
//    }
//    if (pingpong.pressedKeys[KEY.DOWN]){
//        var top = parseInt($("#paddleB").css("top"));
//        $("#paddleB").css("top",top + 5);
//    }
//    if (pingpong.pressedKeys[KEY.W]){
//        var top = parseInt($("#paddleA").css("top"));
//        $("#paddleA").css("top",top - 5);
//    }
//    if (pingpong.pressedKeys[KEY.S]){
//        var top = parseInt($("#paddleA").css("top"));
//        $("#paddleA").css("top",top + 5);
//    }
}
