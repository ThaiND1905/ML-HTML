function debounce(fn, ms) {
    let timer;
    
    return function() {
        // Nhận các đối số
        const args = arguments;
        const context = this;
        
        if(timer) clearTimeout(timer);
        
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, ms)
    }
}

function show(obj) { 
    obj.style.display = 'block';
}

function hide(obj) { 
    obj.style.display = 'none';
}

function swipeLeft() {
    let leftArrow = document.getElementById('left');
    let pictures = document.getElementsByClassName("picture");
    let arrows= document.getElementsByClassName("arrow");
    if (pictures[2].getBoundingClientRect().left >= 6060.45 ){
        leftArrow.disabled = true;
    }else{
        Array.prototype.forEach.call(arrows, arrow => {
            arrow.style.display = 'none';
        });
        Array.prototype.forEach.call(pictures, picture => {
            var left = picture.getBoundingClientRect().left;
            let moveRight = left + 3030.22509765625;
            picture.style.left = `${moveRight}px`;
        });
    }
}

function swipeRight() {
    const rightArrow = document.getElementById('right');
    let pictures = document.getElementsByClassName("picture");
    let arrows= document.getElementsByClassName("arrow");
    if (pictures[0].getBoundingClientRect().left <= -6060.45 ){
        rightArrow.disabled = true;
    }else{
        Array.prototype.forEach.call(arrows, arrow => {
            console.log(arrow.disabled);
            arrow.disabled =true;
            arrow.style.display = 'none';
        });
        Array.prototype.forEach.call(pictures, picture => {
            var left = picture.getBoundingClientRect().left;
            let moveLeft = left - 3030.22509765625;
            picture.style.left = `${moveLeft}px`;
      });
    }
}

function autoSwipe(){
    let rightSwipe = setInterval(swipeRight,3000); 
    let leftSwipe = 0;
    setTimeout(function (){
        clearInterval(rightSwipe);
        leftSwipe = setInterval(swipeLeft,3000);
    },7000);
    setTimeout(function (){
        clearInterval(leftSwipe);
    },14000);
}

setTimeout(function(){
    setInterval(function(){
        autoSwipe();
    },16000)
},1000);

function showArrow() {
    let arrows= document.getElementsByClassName("arrow");
    Array.prototype.forEach.call(arrows, arrow => {
        show(arrow);
    });
}

function hideArrow() {
    let arrows= document.getElementsByClassName("arrow");
    Array.prototype.forEach.call(arrows, arrow => {
        hide(arrow);
    });
}

