/*
    @Author:        Pasquale Cappa Spina;
    @Website:       http://pasqualecappaspina.com;
    @Description:   Plugin jQuery for copy elemnts of DOM;
*/

(function ( $ ) {
 
    $.pcsCpElement = function( options ) {

        // Default options.
        var settings = $.extend({
            // These are the defaults.
            container: "#pcs-cp-container",
            element: "#pcs-cp-element",
            button: "#pcs-cp-button"
        }, options );
 
        // Copy
        $(settings.button).click(function(e) {
            e.preventDefault();

            var container = $(settings.container);
            var element = $(settings.element).clone();

            container.append(element);
        });
        
    };
 
}( jQuery ));
