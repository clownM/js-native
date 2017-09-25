(function(){
    var imgs = document.getElementsByClassName("img");
    var box = document.getElementsByClassName("box")[0];

    var pre = document.getElementsByClassName("arrow_left")[0];
    var next = document.getElementsByClassName("arrow_right")[0];

    var btn = document.getElementsByTagName("button");
    var flag = 0;
    setInterval(function(){
        flag++;
        if(box.style.left === "-4000px"){            
            box.style.left = 0;
            flag = 0;
            btn[5].classList.remove("active");
            btn[flag].classList.add("active");
        }else{
            var left = box.offsetLeft;
            box.style.left = left-800 + "px";
            btn[flag].classList.add("active");
            var flag_ = flag - 1;
            btn[flag_].classList.remove("active");
        }
    },2000);

    pre.onclick = function(){

    };
})();