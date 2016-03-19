setInterval(function(){move()},10);
function move()
{
    $(document).ready(function(){
        $("div").animate({
            top: '+=10px'
        });
    });
}
