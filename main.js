document.addEventListener("DOMContentLoaded", include);

// include nav på alle sider //

async function include() {
  let headerData = await fetch("nav.html");
  let header = await headerData.text();
  document.querySelector("#menu").innerHTML = header;

  let footerData = await fetch("footer.html");
  let footer = await footerData.text();
  document.querySelector("#footer").innerHTML = footer;
}

//include nav på alle sider slut //

//slide show //
$(document).ready(function() {
  setInterval();
});

$("#prev").on("click", function() {
  // Change to the previous image
  $("#im_" + currentImage)
    .stop()
    .fadeOut(1);

  decreaseImage();
  $("#im_" + currentImage)
    .stop()
    .fadeIn(1);
});
$("#next").on("click", function() {
  // Change to the next image
  $("#im_" + currentImage)
    .stop()
    .fadeOut(1);

  increaseImage();
  $("#im_" + currentImage)
    .stop()
    .fadeIn(1);
});

var currentImage = 4;

var totalImages = 4;

var dm_1 = 1;
var dm_2 = 2;
var dm_3 = 3;
var dm_4 = 4;

function increaseImage() {
  /* Increase currentImage by 1.
   * Resets to 1 if larger than totalImages
   */
  console.log(currentImage);
  ++currentImage;

  if (currentImage > totalImages) {
    currentImage = 1;
  }

  if (currentImage == dm_1) {
    $("#dm_1").addClass("active");
    $("#dm_2").removeClass("active");
    $("#dm_3").removeClass("active");
    $("#dm_4").removeClass("active");
  }
  if (currentImage == dm_2) {
    $("#dm_2").addClass("active");
    $("#dm_1").removeClass("active");
    $("#dm_3").removeClass("active");
    $("#dm_4").removeClass("active");
  }
  if (currentImage == dm_3) {
    $("#dm_3").addClass("active");
    $("#dm_1").removeClass("active");
    $("#dm_2").removeClass("active");
    $("#dm_4").removeClass("active");
  }
  if (currentImage == dm_4) {
    $("#dm_4").addClass("active");
    $("#dm_1").removeClass("active");
    $("#dm_2").removeClass("active");
    $("#dm_3").removeClass("active");
  }
}

function decreaseImage() {
  /* Decrease currentImage by 1.
   * Resets to totalImages if smaller than 1
   */

  --currentImage;

  if (currentImage < 1) {
    currentImage = totalImages;
  }
  if (currentImage == dm_1) {
    $("#dm_1").addClass("active");
    $("#dm_2").removeClass("active");
    $("#dm_3").removeClass("active");
    $("#dm_4").removeClass("active");
  }
  if (currentImage == dm_2) {
    $("#dm_2").addClass("active");
    $("#dm_1").removeClass("active");
    $("#dm_3").removeClass("active");
    $("#dm_4").removeClass("active");
  }
  if (currentImage == dm_3) {
    $("#dm_3").addClass("active");
    $("#dm_1").removeClass("active");
    $("#dm_2").removeClass("active");
    $("#dm_4").removeClass("active");
  }
  if (currentImage == dm_4) {
    $("#dm_4").addClass("active");
    $("#dm_1").removeClass("active");
    $("#dm_2").removeClass("active");
    $("#dm_3").removeClass("active");
  }
}

function setInterval() {
  $("#next").click();
  setTimeout(setInterval, 6000);
}
