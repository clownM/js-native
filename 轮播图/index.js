(function(){
    var container = document.getElementsByClassName("container")[0];
    var box = document.getElementsByClassName("box")[0];

    var pre = document.getElementsByClassName("arrow_left")[0];
    var next = document.getElementsByClassName("arrow_right")[0];

    var btn = document.getElementsByTagName("button");
    var flag = 0;
    var timer = null;

    function btnShow(index){
        for(var i = 0;i < btn.length;i++){
            btn[i].classList.remove("active");
        };
        btn[index].classList.add("active");
    };
    function preImg(){  
        flag--;  
        if(flag < 0 ){            
            box.style.left = "-4000px";
            flag = 5;
            btnShow(flag);
        }else{            
            var left = box.offsetLeft;
            box.style.left = left+800 + "px";
            btnShow(flag);
        }
    };
    function nextImg(){    
        flag++;  
        if(flag > 5){            
            box.style.left = 0;
            flag = 0;
            btnShow(flag);
        }else{         
            var left = box.offsetLeft;
            box.style.left = left-800 + "px";
            btnShow(flag);
        };
    };
    
    function autoPlay(){
        timer = setInterval(nextImg,1000);
    };
    autoPlay();

    container.onmouseover = function(){
        clearInterval(timer);
    };
    container.onmouseleave = function(){
        autoPlay();
    };

    pre.onclick = function(){
        preImg();
    };
    next.onclick = function(){
        nextImg();
    };

    for(var i = 0; i < btn.length;i++){
        btn[i].onclick = function(){
            var index = this.getAttribute("index");
            btnShow(index-1);
            flag = index -1;
            box.style.left = (-800)*(index-1) + "px";
            autoPlay();
        };
    }
    
})();