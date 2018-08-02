// SIDEBAR
function showSidebar() {
    var $modal = '<div id="sidebar-modal" class="modal"></div>';

    $('.sidebar').addClass('sidebar-mobile-visible');
    $( ".wrapper" ).append( $modal );
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

    $("body").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            hideSidebar();
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            showSidebar();
        }
    });


    // INPUTS

    // Verify if an input has content, if it does, stops the label from becoming a placeholder
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