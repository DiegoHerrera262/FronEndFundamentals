triggerDropdown = () => {
  document.getElementById("dropdown-menu").style.width = "233px";
};

closeDropdown = () => {
  document.getElementById("dropdown-menu").style.width = "0";
};

triggerContactForm = () => {
  alert("Triggering Contact Form");
  console.log("Triggering Contact Form");
};

moveBlogSliderLeft = () => {
  blogCards = document.getElementById("home-blog-wrapper").children;
  if (blogCards[0].className !== "blog-card active-post") {
    for (let idx = 0; idx < blogCards.length - 1; idx++) {
      // swap classes of 0th and idx-th child
      [blogCards[idx].className, blogCards[idx + 1].className] = [
        blogCards[idx + 1].className,
        blogCards[idx].className,
      ];
    }
  }
};

moveBlogSliderRight = () => {
  blogCards = document.getElementById("home-blog-wrapper").children;
  // periodic exchange of card classes
  if (
    blogCards[blogCards.length - 1].className !==
    "blog-card active-post third-post"
  ) {
    for (let idx = 0; idx < blogCards.length - 1; idx++) {
      // swap classes of 0th and idx-th child
      [blogCards[0].className, blogCards[idx + 1].className] = [
        blogCards[idx + 1].className,
        blogCards[0].className,
      ];
    }
  }
};
