$(document).ready(function(){
    $("img").click(function(){
        var oldSrc = $(this).attr("src");
        var newSrc = $(this).attr("alternate-img");
        $(this).attr("src", newSrc);
        $(this).attr("alternate-img", oldSrc);
    });
});