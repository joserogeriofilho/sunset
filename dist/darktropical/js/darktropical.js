$( document ).ready(function() {

    // sidebar
    $('.sidebar li a').on("click", function() {
        var $this = $(this);

        if(!$this.attr("data-toggle")){
            $('.sidebar .active').removeClass('active');

            if (!$this.parent().hasClass('active')) {
                $this.parent().addClass('active');
            }
        }
    });

    $("body").on("click", '#hamburger-menu', function() {
        $('.sidebar').addClass('modal-sidebar');

        var $modal = '<div id="sidebar-modal" class="modal"></div>';

        $( ".wrapper" ).append( $modal );
    });

    $("body").on("click", '#sidebar-modal', function() {
        $('.sidebar').removeClass('modal-sidebar');

        $( "#sidebar-modal" ).remove();
    });

    // inputs
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