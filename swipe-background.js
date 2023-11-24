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

function swipeLeft() {
    let leftArrow = document.getElementById('left');
    let pictures = document.getElementsByClassName("picture");
    let arrows= document.getElementsByClassName("arrow");
    console.log(pictures[2])
    if (pictures[2].getBoundingClientRect().left >= 6060.45 ){
        leftArrow.disabled = true;
    }else{
        Array.prototype.forEach.call(arrows, arrow => {
            debounc(() => {arrow.style.display = 'none'} ,2000);
        })
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
            debounce(arrow.style.display = 'none',1000);
        })
        Array.prototype.forEach.call(pictures, picture => {
            var left = picture.getBoundingClientRect().left;
            let moveLeft = left - 3030.22509765625;
            picture.style.left = `${moveLeft}px`;
      });
    }
}

setInterval(swipeRight,5000);
setTimeout(setInterval(swipeLeft,5000),200000);

function show(obj1,obj2) {
    var obj1 = document.getElementById(obj1);
    var obj2 = document.getElementById(obj2);  
    obj1.style.display = 'block';
    obj2.style.display = 'block';
}

function hide(obj1, obj2) {
    var obj1 = document.getElementById(obj1);
    var obj2 = document.getElementById(obj2);  
    obj1.style.display = 'none';
    obj2.style.display = 'none';
}

function leftDisabledStyle(){
    let pictures = document.getElementsByClassName("picture");
    let leftArrow = document.getElementById('left');
    
    if (pictures[2].getBoundingClientRect().left >= 6060 ){
        leftArrow.classList.add('disabled-arrow');
    }else{

        leftArrow.classList.remove('disabled-arrow');
    }
}

function rightDisabledStyle(){
    let pictures = document.getElementsByClassName("picture");
    let rightArrow = document.getElementById('right');
    if (pictures[0].getBoundingClientRect().left <= -6060.45 ){
        rightArrow.classList.add('disabled-arrow');
    }else{
        rightArrow.classList.remove('disabled-arrow');
    }
}

