triggerDropdown = () => {
  document.getElementById("dropdown-menu").style.width = "233px";
};

closeDropdown = () => {
  document.getElementById("dropdown-menu").style.width = "0";
};

moveBlogSliderLeft = () => {
  let sliderWindow = document.getElementById("home-carousel-window");
  let cardsList = document.getElementById("home-carousel-list");
  /* 
  motion right only allowed if enough 
  content to left
  */
  let offset = cardsList.offsetLeft;
  console.log("moving slider to right", offset);
  if (offset >= 0) {
    /* 
    there is not enough room for motion 
    */
    return;
  }
  cardsList.style.left =
    (cardsList.offsetLeft + sliderWindow.clientWidth).toString() + "px";
};

moveBlogSliderRight = () => {
  let sliderWindow = document.getElementById("home-carousel-window");
  let cardsList = document.getElementById("home-carousel-list");
  /* 
  compute the difference between left position
  of card list and window size
  */
  let offset = cardsList.clientWidth + cardsList.offsetLeft;
  console.log("moving slider to left", offset);
  if (Math.abs(sliderWindow.clientWidth - offset) < 30) {
    /* 
    there is not enough room for motion 
    */
    return;
  }
  cardsList.style.left =
    (cardsList.offsetLeft - sliderWindow.clientWidth).toString() + "px";
};
