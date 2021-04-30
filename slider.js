/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
// get images
const display = () => {
  const img = Array.from(document.querySelectorAll('.imgWrapper'));
  // display an image
  const displayImg = (n) => {
    img.map((item) => {
      item.classList = 'imgWrapper';
    });
    img[n].classList = 'imgWrapperVisible';
    img[n].id = img.indexOf(img[n]);
    // eslint-disable-next-line no-use-before-define
    currDot();
  };
  // get image in display
  const currImg = () => {
    const currImg = document.querySelector('.imgWrapperVisible');
    return parseFloat(currImg.id);
  };
  // event listeners to buttons
  const arrows = () => {
    const left = document.querySelector('.arrow.left');
    const right = document.querySelector('.arrow.right');
    // left button
    left.addEventListener('click', () => {
      if (currImg() === 0) { displayImg(0); } else {
        displayImg(currImg() - 1);
      }
    });
    // right button
    right.addEventListener('click', () => {
      if (currImg() === 9) { displayImg(9); } else {
        displayImg(currImg() + 1);
      }
    });
  };
  // set dot bigger for current image
  function currDot() {
    const dots = Array.from(document.querySelectorAll('.dot'));
    dots.map((item) => {
      item.style.width = '10px';
      item.style.height = '10px';
    });
    dots[currImg()].style.width = '15px';
    dots[currImg()].style.height = '15px';
  }
  // timeout, advance slides in 5sec intervals
  const auto = () => {
    if (currImg() === 9) { displayImg(0); } else {
      displayImg(currImg() + 1);
    }
  };
  return { displayImg, auto, arrows };
};

const disp = display();
disp.displayImg(0);
setInterval(disp.auto, 5000);
disp.arrows();
