window.onload = function(){

    // 导航栏

   

    //轮播图

    let imgbox = document.querySelectorAll(".banners .banners-nk .banner-tu");
    
    let rotbox = document.querySelectorAll(".banners .banners-nk .rotbox .rot");

    imgbox[0].style.left = 0;
    let index = 0;
    let nextindex = 0;

    time = setInterval(()=>{
        nextindex++;
        if(nextindex > imgbox.length-1){
            nextindex = 0;
        }
        imgbox[index].style.left = 0;
        imgbox[nextindex].style.left = 1349 + "px";
        animate(imgbox[index], {left:-1349});
        animate(imgbox[nextindex], {left:0}, function(){
            rotbox.forEach((j)=>{
                j.classList.remove("hot");
            })
            rotbox[index].classList.add("hot");
        })
        index = nextindex;
    }, 2000)

    let bigbox = document.querySelector(".banners");
    bigbox.onmouseover=()=>{
        clearInterval(time);
    }
    bigbox.onmouseout=()=>{
        time = setInterval(()=>{
            over();
        },2000)
    }

    let btn = document.querySelectorAll(".banners .banners-nk .btn");
    let flage = true;
    btn[0].onclick=()=>{
        if(!true){
            return;
        }
        flage = false;
        nextindex--;
        if(nextindex < 0){
            nextindex = imgbox.length - 1;
        }
        imgbox[index].style.left = 0;
        imgbox[nextindex].style.left = -1349 + "px";
        animate(imgbox[index], {left:1349});
        animate(imgbox[nextindex], {left:0}, function(){
            flage = true;
            rotbox.forEach((j)=>{
                j.classList.remove("hot");
            })
            rotbox[index].classList.add("hot");
        });
        index = nextindex;
    }
    btn[1].onclick=()=>{
        if(!flage){
            return;
        }
        flage = false;
        nextindex++;
        if(nextindex > imgbox.length - 1){
            nextindex = 0;
        }
        imgbox[index].style.left = 0;
        imgbox[nextindex].style.left = 1349 + "px";
        animate(imgbox[index], {left:-1349});
        animate(imgbox[nextindex], {left:0}, function(){
            flage = true;
            rotbox.forEach((j)=>{
                j.classList.remove("hot");
            })
            rotbox[index].classList.add("hot");
        });
        index = nextindex;
    }
    //封装时间函数
    function over(){
        nextindex++;
        if(nextindex > imgbox.length-1){
            nextindex = 0;
        }
        imgbox[index].style.left = 0;
        imgbox[nextindex].style.left = 1349 + "px";
        animate(imgbox[index], {left:-1349});
        animate(imgbox[nextindex], {left:0}, function(){
            rotbox.forEach((j)=>{
                j.classList.remove("hot");
            })
            rotbox[nextindex].classList.add("hot");
        })
        index = nextindex;
}


//置顶
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


//图片的上滑
let tubox = document.querySelectorAll(".background .bg-nk .second .nr");


tubox.forEach(()=>{
    onscroll=()=>{
        if(scrollY > 160){
            setTimeout(()=>{
                animate(tubox[0], {top:40})
            },5)
            setTimeout(()=>{
                animate(tubox[1], {top:40})
            },100)
            setTimeout(()=>{
                animate(tubox[2], {top:40})
            },150)
            setTimeout(()=>{
                animate(tubox[3], {top:40})
            },200)
        }
        
    }
})





























}