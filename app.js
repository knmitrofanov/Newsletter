function animation(arguments) {

    if ($(".banner-text").css("text-shadow") === "rgb(2, 162, 153) 2px 2px 0px") {
        $(".banner-text").css("text-shadow", "2px 2px magenta");
    } else {
        $(".banner-text").css("text-shadow", "2px 2px #02a299");
    }

    setTimeout(function () {
        animation();
    }, 500);
}

animation();