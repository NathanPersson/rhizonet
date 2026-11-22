let count = 1;


$(".rightarrow").click(function () {
    count++;

  if (count == 1) {
    slide1();
  }

  if (count == 2) {
    slide2();
  }

  if (count == 3) {
    slide3();
  }

  if (count == 4) {
    slide4();
  }
  
});

$(".leftarrow").click(function () {
    count--;

  if (count == 1) {
    slide1();
  }

  if (count == 2) {
    slide2();
  }

  if (count == 3) {
    slide3();
  }

  if (count == 4) {
    slide4();
  }
});

$(".menu-1").click(function () {

  slide1();
  $(".menu-item").removeClass("this-page");
  $(".menu-1").addClass("this-page");
  
});

$(".menu-2").click(function () {

  slide2();
  
});

$(".menu-3").click(function () {

  slide3();
  
});

$(".menu-4").click(function () {

  slide4();

});

function slide1() {
  count = 1;

    $(".illo").addClass("hide");
    $(".nar").addClass("hide");
    $(".chat").addClass("hide");
    $(".leftarrow").addClass("hide");
    $(".outroarrow").addClass("hide");

    $(".illo1").removeClass("hide");
    $(".nar1").removeClass("hide");
    $(".chat1").removeClass("hide");
    $(".localserver").removeClass("hide");
    $(".introarrow").removeClass("hide");
    $(".rightarrow").removeClass("hide");

    $(".menu-item").removeClass("this-page");
    $(".menu-1").addClass("this-page");
}

function slide2() {
  count = 2;

    $(".illo").addClass("hide");
    $(".nar").addClass("hide");
    $(".chat").addClass("hide");
    $(".introarrow").addClass("hide");
    $(".outroarrow").addClass("hide");

    $(".illo2").removeClass("hide");
    $(".nar2").removeClass("hide");
    $(".chat2").removeClass("hide");
    $(".localserver").removeClass("hide");
    $(".leftarrow").removeClass("hide");
    $(".rightarrow").removeClass("hide");
    
    $(".menu-item").removeClass("this-page");
    $(".menu-2").addClass("this-page");
}

function slide3() {
  count = 3;

    $(".illo").addClass("hide");
    $(".nar").addClass("hide");
    $(".chat").addClass("hide");
    $(".introarrow").addClass("hide");
    $(".outroarrow").addClass("hide");

    $(".illo3").removeClass("hide");
    $(".nar3").removeClass("hide");
    $(".chat3").removeClass("hide");
    $(".localserver").removeClass("hide");
    $(".leftarrow").removeClass("hide");
    $(".rightarrow").removeClass("hide");

    $(".menu-item").removeClass("this-page");
    $(".menu-3").addClass("this-page");
}

function slide4() {
  count = 4;

    $(".illo").addClass("hide");
    $(".nar").addClass("hide");
    $(".chat").addClass("hide");
    $(".introarrow").addClass("hide");
    $(".rightarrow").addClass("hide");

    $(".illo4").removeClass("hide");
    $(".nar4").removeClass("hide");
    $(".chat4").removeClass("hide");
    $(".localserver").removeClass("hide");
    $(".leftarrow").removeClass("hide");
    $(".outroarrow").removeClass("hide");

    $(".menu-item").removeClass("this-page");
    $(".menu-4").addClass("this-page");
}

function change() {
                document.querySelector(".menu").classList.toggle("menu-active");
            }