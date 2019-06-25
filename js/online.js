window.onload = function(){





    // 置顶
    let Top = document.querySelector(".roof");

    let Tu = document.querySelector(".nav-bar");

    let Jl = Tu.offsetTop;

    Top.onclick=()=>{
        let timer = setInterval(()=>{
            let scrollT = document.documentElement.scrollTop;
            
            let speed = (Jl - scrollT)/10;
        
            
            scrollT += speed;
            scrollTo(0 , scrollT)
        }, 20)
        onwheel=()=>{
            clearInterval(timer);
        }
    }


    //验证码
    let yz = document.querySelector(".third .th-nk .nk-nr .tu img");

    yz.setAttribute("dog" , "img/6.4.png")

    yz.onclick=()=>{
        yz.src = yz.getAttribute("dog" , "img/6.4.png")
    }


























}