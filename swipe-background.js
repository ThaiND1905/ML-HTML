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
    if (pictures[2].getBoundingClientRect().left > 3031 ){
        leftArrow.disabled = true;
    }else{
        Array.prototype.forEach.call(arrows, arrow => {
            arrow.style.display = 'none';
        });
        Array.prototype.forEach.call(pictures, picture => {
            let left = picture.getBoundingClientRect().left;
            let moveRight = 0;
            console.log(left);
            picture.style.left = `${moveRight}px`;
            if (0 <= Math.abs(left) && Math.abs(left) < 3030.22509765625) {
                if(left > 0) {
                    moveRight = 6060.4501953125 ;
                    picture.style.left = `${moveRight}px`;
                }else{
                    moveRight = 3030.22509765625;
                    picture.style.left = `${moveRight}px`;
                }
            } else if( 3030.22509765265 <= Math.abs(left) && Math.abs(left) < 6060.4501953125 ) {
                if(left > 0) {
                    moveRight = 6060.4501953125;
                    picture.style.left = `${moveRight}px`; 
                }else{
                    moveRight = 0;
                    picture.style.left = `${moveRight}px`;
                }
            }else if( Math.abs(left) >= 6060.4501953125){
                if(left < 0) {
                    moveRight = -3030.22509765265;
                    picture.style.left = `${moveRight}px`;
                }
            };
        });
    }
}

function swipeRight() {
    const rightArrow = document.getElementById('right');
    let pictures = document.getElementsByClassName("picture");
    let arrows= document.getElementsByClassName("arrow");
    if (pictures[0].getBoundingClientRect().left < -3031 ){
        rightArrow.disabled = true;
    }else{
        Array.prototype.forEach.call(arrows, arrow => {
            arrow.disabled =true;
            arrow.style.display = 'none';
        });
        Array.prototype.forEach.call(pictures, picture => {
            let left = picture.getBoundingClientRect().left;
            let moveLeft = 0;
            if (0 <= Math.abs(left) && Math.abs(left) < 3030.22509765625) {
                if(left >= 0) {
                    moveLeft = - 3030.22509765265;
                    picture.style.left = `${moveLeft}px`; 
                }else{
                    moveLeft = - 6060.4501953125;
                    picture.style.left = `${moveLeft}px`;
                }
            } else if( 3030.22509765265 <= Math.abs(left) && Math.abs(left) < 6060.4501953125 ) {
                if(left > 0) {
                    moveLeft = 0;
                    picture.style.left = `${moveLeft}px`; 
                }else{
                    moveLeft = -2 * 3030.22509765265;
                    picture.style.left = `${moveLeft}px`;
                }
            }else if( Math.abs(left) >= 6060.4501953125){
                if(left > 0) {
                    moveLeft = 3030.22509765265;
                    picture.style.left = `${moveLeft}px`; 
                }
            };
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
    },16000);
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

