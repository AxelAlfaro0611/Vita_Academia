$(document).ready(function () {
    $(".btn-sede").click(function () {
        const id = $(this).attr("id");
        const txt = id.substring(4);
        $('.background').css('background-image', 'url(' + "../img/sede/" + txt + ".jpeg" + ')');
        $(".btn-sede").parent().removeClass("border-bottom border-info");
        $(this).parent().addClass("border-bottom border-info");

    })    
});

