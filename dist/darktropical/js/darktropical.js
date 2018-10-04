// SIDEBAR
function showSidebar() {
    if($('.sidebar').css("margin-left") !== "0px"){
        var $modal = '<div id="sidebar-modal" class="modal"></div>';

        $('.sidebar').addClass('sidebar-mobile-visible');
        $( ".wrapper" ).append( $modal );
    }
}

function hideSidebar(){
    $('.sidebar').removeClass('sidebar-mobile-visible');
    $( "#sidebar-modal" ).remove();
}


// EVENTS
$( document ).ready(function() {

    // SIDEBAR

    // Dynamic active links
    $('.sidebar li a').on("click", function() {
        var $this = $(this);

        if(!($this.attr("data-toggle") == "collapse")){
            $('.sidebar .active').removeClass('active');

            if (!$this.parent().hasClass('active')) {
                $this.parent().addClass('active');
            }

            hideSidebar();
        }
    });

    // Hide and show sidebar on mobile
    $("body").on("click", '#hamburger-menu', function() {
        showSidebar();
    });

    $("body").on("click", '#sidebar-modal', function() {
        hideSidebar();
    });

    $("#sidebar").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            hideSidebar();
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            showSidebar();
        }
    });


    // INPUTS

    $(".form-group").on("focusin", function(){
        var label = $(this).children("label");

        label.addClass("label-focused");
        label.addClass("label-outside-input");
    });

    $(".form-group").on("focusout", function(){
        var label = $(this).children("label");
        var input = $(this).children("input");

        label.removeClass("label-focused");

        // If input is empty
        if(!input.val())
            label.removeClass("label-outside-input");
    });
    
});