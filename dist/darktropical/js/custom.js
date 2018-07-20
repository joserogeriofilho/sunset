$( document ).ready(function() {

    $(".form-group").on("focusin", function(){
        $(this).addClass("form-group-focused");
        $(this).children("label").addClass("label-outside-form");
    });

    $(".form-group").on("focusout", function(){
        $(this).removeClass("form-group-focused");

        if( !$(this).children("input").val() ) {
            $(this).children("label").removeClass("label-outside-form");
        }
    });
    
});