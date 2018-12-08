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

    // Activate links when scrolling through components page
    $('#content').scroll(function() {
        var scrollDistance = $('#content').scrollTop();

        if ($('#buttons').length){
            scrollDistance += $('#buttons').position().top;
        }

        // Assign active class to nav links while scolling
        $('.page-section').each(function(i) {            
            if ($(this).position().top <= scrollDistance) {
                $('.sidebar li.active').removeClass('active');
                $('.sidebar .submenu li').eq(i).addClass('active');
            }
        });
    }).scroll();

    // Hide and show sidebar on mobile
    $("body").on("click", '#hamburger-menu', function() {
        showSidebar();
    });

    $("body").on("click", '#sidebar-modal', function() {
        hideSidebar();
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

    // file input
    $('input[type=file]').change(function(e){
        $in=$(this);
        $in.siblings(".file-name").text($in.val().split('\\').pop());
    });

    // IMAGES
    var avatarPic = $('.avatar-pic');
    var avatarPicParent = avatarPic.parent();
    
    if(!avatarPicParent.hasClass( "card-primary-title" )){
        var dim = avatarPicParent.width() < avatarPicParent.height() ? avatarPicParent.width() : avatarPicParent.height();

        dim = dim > 200 ? 200 : dim;

        avatarPic.children().css('width', dim);
        avatarPic.children().css('height', dim);
    }
    
});