
const left_arrow = document.getElementById("arrow-left");
const right_arrow = document.getElementById("arrow-right");


const carousel = document.getElementById("carousel");
const step =  carousel.children[0].clientWidth + 120;
let i = 0;
function getVisibleItems(){
    if(window.innerHeight<768){
        return 1;
    }
    if (window.innerWidth<1440){
        return 2;
    }

    return 3;

}

function  slideRight(){

    if (carousel.childElementCount- getVisibleItems() <=i){
        return;
    }
    i++;
    changePosition();
}
function slideLeft(){
    if (i === 0){
        return;
    }
    i--;
    changePosition();
}
function changePosition(){
    carousel.style.right = step*i+"px";
}



right_arrow.onclick = function (){
    slideRight()
};

left_arrow.onclick = function (){
    slideLeft()
};


carousel.ontouchstart = function (e){
    let point = e.changedTouches[0].clientX;
    console.log(e);
    carousel.ontouchmove = function (e){
        let temp = e.changedTouches[0].clientX;


        if (point - temp > 100){
            slideRight();
            point = temp
            carousel.ontouchmove = null;
        }
        if (point - temp < -100){

            slideLeft();
            point = temp

            carousel.ontouchmove = null;

        }

        carousel.ontouchend = function (){
            carousel.ontouchmove = null;

            return;
        }
    }
}


