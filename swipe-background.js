// Actual window's width;
const wrapper = document.getElementById('wrapper').getBoundingClientRect().width;
const actualWidth = wrapper/3;

const handleSwipe = () => {
  const leftArrow = document.getElementById("left");
  const rightArrow = document.getElementById("right");
  const pictures = document.querySelectorAll(".picture");
  rightArrow.onclick = () => {
    pictures.forEach(picture => {
      left = picture.getBoundingClientRect().left;
      switch (true) {
        case pictures[0].getBoundingClientRect().left < -actualWidth:
          rightArrow.disabled = true;
          break;
        case left < -2 * actualWidth:
          break;
        case 0 > left && left >= -2 * actualWidth:
          moveLeft = -2 * actualWidth;
          picture.style.left = `${moveLeft}px`;
          break;
        case actualWidth > left && left >= 0:
          moveLeft = -actualWidth;
          picture.style.left = `${moveLeft}px`;
          break;
        case 2 * actualWidth > left && left >= actualWidth:
          moveLeft = 0;
          picture.style.left = `${moveLeft}px`;
          break;
        case left >= 2 * actualWidth:
          moveLeft = actualWidth;
          picture.style.left = `${moveLeft}px`;
          break;
      }
    });
  };
  leftArrow.onclick = () => {
    pictures.forEach(picture => {
      left = picture.getBoundingClientRect().left;
      console.log(left);
      switch (true) {
        case pictures[2].getBoundingClientRect().left > 3031:
          rightArrow.disabled = true;
          break;
        case left <= -2 * actualWidth:
          moveLeft = -actualWidth;
          picture.style.left = `${moveLeft}px`;
          break;
        case -actualWidth >= left && left > -2 * actualWidth:
          moveLeft = 0;
          picture.style.left = `${moveLeft}px`;
          break;
        case 0 >= left && left > -actualWidth:
          moveLeft = actualWidth;
          picture.style.left = `${moveLeft}px`;
          break;
        case actualWidth >= left && left > 0:
          moveLeft = 2 * actualWidth;
          picture.style.left = `${moveLeft}px`;
          break;
        case 2 * actualWidth >= left && left > actualWidth:
          moveLeft = 2 * actualWidth;
          picture.style.left = `${moveLeft}px`;
          break;
        case left > 2 * actualWidth:
          break;
      }
    });
  };
};
 
const handleArrowAppearance = () => {
  const arrows = document.querySelectorAll(".arrow");
  const wrapper = document.getElementById("wrapper");
  console.log(arrows);
  if (arrows) {
    wrapper.onmousemove = () => {
      arrows.forEach(arrow => {
        arrow.style.display = "block";
      });
    };
    wrapper.onmouseleave = () => {
      arrows.forEach(arrow => {
        if (arrow.style.display === "block") {
          arrow.style.display = "none";
        } else {
          arrow.style.display = "block";
        }
      });
    };
  }else{
    return arrows.forEach(arrow => {
      arrow.style.display = "none";
    });
  }
};

handleSwipe();
handleArrowAppearance();
