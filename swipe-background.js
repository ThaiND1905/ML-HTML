// space between 2 pictures which defined by left position;
const spaceBetween = 3030.22509765625;

debounce = (fn, ms) => {
  let timer;

  return function () {
    // Nhận các đối số
    const args = arguments;
    const context = this;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, ms);
  };
};

handleSwipe = () => {
  const leftArrow = document.getElementById("left");
  const rightArrow = document.getElementById("right");
  const pictures = document.getElementsByClassName("picture");
  let left = 0;
  let moveLeft = 0;
  rightArrow.onclick = () => {
    for (var picture in pictures) {
      left = picture.getBoundingClientRect().left;
      switch (true) {
        case pictures[0].getBoundingClientRect().left < -spaceBetween:
          leftArrow.disabled = true;
          break;
        case left < -2 * spaceBetween:
          break;
        case -0 > left && left >= -2 * spaceBetween:
          moveLeft = -2 * spaceBetween;
          picture.style.left = `${moveLeft}px`;
          break;
        case spaceBetween > left && left >= 0:
          moveLeft = -spaceBetween;
          picture.style.left = `${moveLeft}px`;
          break;
        case 2 * spaceBetween > left && left >= spaceBetween:
          moveLeft = 0;
          picture.style.left = `${moveLeft}px`;
          break;
        case left >= 2 * spaceBetween:
          moveLeft = spaceBetween;
          picture.style.left = `${moveLeft}px`;
          break;
      }
    };
  };
 leftArrow.onclick = () => {
    for (var picture in pictures) {
      left = picture.getBoundingClientRect().left;
      console.log(left);
      switch (true) {
        case pictures[2].getBoundingClientRect().left > 3031:
          rightArrow.disabled = true;
          break;
        case left <= -2 * spaceBetween:
          moveLeft = - spaceBetween;
          picture.style.left = `${moveLeft}px`;
          break;
        case -spaceBetween >= left && left > -2 * spaceBetween:
          moveLeft = 0;
          picture.style.left = `${moveLeft}px`;
          break;
        case 0 >= left && left > -spaceBetween:
          moveLeft = spaceBetween;
          picture.style.left = `${moveLeft}px`;
          break;
        case spaceBetween >= left && left > 0:
          moveLeft = 2 * spaceBetween;
          picture.style.left = `${moveLeft}px`;
          break;
        case 2 * spaceBetween >= left && left > spaceBetween:
          moveLeft = 2 * spaceBetween;
          picture.style.left = `${moveLeft}px`;
          break;
        case left > 2 * spaceBetween:
          break;
      }
    };
  };
};

handleArrowAppearance = () => {
  const arrows = document.getElementsByClassName("arrow");
  const wrapper = document.getElementById("wrapper");
  if (arrows) {
    wrapper.onmousemove = () => {
      for(var arrow in arrows) {
        arrow.style.display = "block";
      };
    };
    wrapper.onmouseleave = () => {
      for (var arrow in arrows) {
        if (arrow.style.display === "block") {
          arrow.style.display = "none";
        } else {
          arrow.style.display = "block";
        }
      };
    };
  }
};

handleSwipe();
handleArrowAppearance();
