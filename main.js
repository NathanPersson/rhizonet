$(document).ready(function () {
  $(".illo-slideshow .illo-slide").hide();
  $(".illo-slideshow").each(function () {
    $(this).find(".illo-slide:first").show();
  });
  $(".rightarrow").click(function () {
    var containerEl = $(this).parent();
    var currentImg = containerEl.find(".illo-slide:visible");

    $(currentImg).hide();
    $(currentImg).next(".illo-slide").show();

    if (containerEl.find(".illo-slide:visible").length == 0)
      containerEl.find(".illo-slide").first().show();
  });

  $(".leftarrow").click(function () {
    var containerEl = $(this).parent();
    var currentImg = containerEl.find(".illo-slide:visible");

    $(currentImg).hide();
    $(currentImg).prev(".illo-slide").show();

    if (containerEl.find(".illo-slide:visible").length == 0)
      containerEl.find(".illo-slide").last().show();
  });
});

$(document).ready(function () {
  $(".narration-slideshow .narration").hide();
  $(".narration-slideshow").each(function () {
    $(this).find(".narration:first").show();
  });
  $(".rightarrow").click(function () {
    var containerEl = $(this).parent();
    var currentImg = containerEl.find(".narration:visible");

    $(currentImg).hide();
    $(currentImg).next(".narration").show();

    if (containerEl.find(".narration:visible").length == 0)
      containerEl.find(".narration").first().show();
  });

  $(".leftarrow").click(function () {
    var containerEl = $(this).parent();
    var currentImg = containerEl.find(".narration:visible");

    $(currentImg).hide();
    $(currentImg).prev(".narration").show();

    if (containerEl.find(".narration:visible").length == 0)
      containerEl.find(".narration").last().show();
  });
});