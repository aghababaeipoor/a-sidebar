$(document).ready(function () {


    $(".collapse").each(function( index ) {

            var aSidebarIconId = $(this).attr('asidebar-icon-id');
            if (typeof aSidebarIconId !== 'undefined' && aSidebarIconId !== false) {
                $(this).on('show.bs.collapse', function () {
                    $("#" + aSidebarIconId).html('<i class="bi bi-dash"></i>');
                });
                $(this).on('hide.bs.collapse', function () {
                    $("#" + aSidebarIconId).html('<i class="bi bi-plus"></i>');
                });                
            }
    });

    /* this only work for pages with postback */
    /* this need unique keyword in url and this is very important to full performance, otherwise it will appear inappropriate */
    $("a").each(function( index ) {
        
        var aSidebarUrlParameter = $(this).attr('asidebar-url-parameter'); 
        
        if (typeof aSidebarUrlParameter !== 'undefined' && aSidebarUrlParameter !== false) {

            var url = window.location.href;
            $(this).css('background-color', 'white');
            if (url.toLowerCase().indexOf(aSidebarUrlParameter.toLowerCase()) >= 0){
                $(this).css('background-color', '#89CFF0');

                var aSidebarCollapseId = $(this).attr('asidebar-collapse-id');
                
                if (typeof aSidebarUrlParameter !== 'undefined' && aSidebarUrlParameter !== false) {
                    var aSidebarIconId = $("#" + aSidebarCollapseId).attr('asidebar-icon-id');
                    $("#" + aSidebarIconId).html('<i class="bi bi-dash"></i>');
                    $("#" + aSidebarCollapseId).addClass("show");
                }                  
            }
        }        
    });


    $(".offcanvas").each(function( index ) {

        var mainSidebarId = $(this).attr('main-sidebar-id');
        if (typeof mainSidebarId !== 'undefined' && mainSidebarId !== false) {

            var mainSidebarBody = $("#" + mainSidebarId).parent();
            var offcanvasBody = $(this).children(".offcanvas-body");

            $(this).on('show.bs.offcanvas', function () {
                var sidebarMenu = $("#" + mainSidebarId).detach();
                console.log(sidebarMenu.html());
                offcanvasBody.html(sidebarMenu);
            });
            $(this).on('hide.bs.offcanvas', function () {
                var sidebarMenu = $("#" + mainSidebarId).detach();
                console.log(sidebarMenu.html());
                mainSidebarBody.html(sidebarMenu);                
            });                
        }
    });               

});