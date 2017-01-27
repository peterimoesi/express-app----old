
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
    
    
    //parallax on the web

    //floating element

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    console.log("yes");


    if((wScroll - 300) > $('#features').offset().top - $(window).height() && window.outerWidth > 1000){

        var offset = (Math.min(0, wScroll - $('#features').offset().top +$(window).height() - 680)).toFixed();

        $('#simulator').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.1) +'px)'});

        $('#promises').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.1) +'px)'});

  }

})
