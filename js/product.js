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
}