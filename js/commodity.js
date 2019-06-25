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

    //轮播图

    let imgbox = document.querySelectorAll(".content .second .sec-left .imgbox .img");


    let rotbox = document.querySelectorAll(".content .second .sec-left .rotbox .rot");


    let btnbox = document.querySelectorAll(".content .second .sec-left .imgbox .btn");


    imgbox[0].style.left=0;

    let index = 0;
    let nextindex = 0;

    let flage = true;

    btnbox[0].onclick=()=>{
        if(!flage){
            return;
        }
        flage = false;
        nextindex--;
        if(nextindex < 0){
            nextindex = imgbox.length-1;
        }
        imgbox[index].style.left=0;
        imgbox[nextindex].style.left=-300 + "px";
        animate(imgbox[index], {left:300});
        animate(imgbox[nextindex], {left:0}, function(){
            flage = true;
            rotbox.forEach((j)=>{
                j.classList.remove("hot");
            })
            rotbox[index].classList.add("hot");
        });
        index = nextindex;
    }

    btnbox[1].onclick=()=>{
        if(!flage){
            return;
        }
        flage = false;
        nextindex++;
        if(nextindex > imgbox.length-1){
            nextindex = 0;
        }
        imgbox[index].style.left=0;
        imgbox[nextindex].style.left=300 + "px";
        animate(imgbox[index], {left:-300});
        animate(imgbox[nextindex], {left:0}, function(){
            flage = true;
            rotbox.forEach((j)=>{
                j.classList.remove("hot");
            })
            rotbox[index].classList.add("hot");
        });
        index = nextindex;
    }

    rotbox.forEach((m , n)=>{
        m.onclick=()=>{
            if(!flage){
                return;
            }
            flage = false;
            rotbox.forEach((i)=>{
                i.classList.remove("hot");
            })
            rotbox[n].classList.add("hot");
            if(n < index){
                nextindex = n;
                imgbox[index].style.left=0;
                imgbox[nextindex].style.left=-300 + "px";
                animate(imgbox[index], {left:300});
                animate(imgbox[nextindex], {left:0}, function(){
                    flage = true;
                });
                index = nextindex;
            }
            if(n > index){
                nextindex = n;
                imgbox[index].style.left=0;
                imgbox[nextindex].style.left=300 + "px";
                animate(imgbox[index], {left:-300});
                animate(imgbox[nextindex], {left:0}, function(){
                    flage = true;
                });
                index = nextindex;
            }
            if(n == index){
                flage = true;
            }
        }
    })


































}