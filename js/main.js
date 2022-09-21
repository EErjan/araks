try {
    $(document).ready(function () {
        $(".fancybox").fancybox();
    });
} catch (e) {

}

try {
    $('.phone-musk').inputmask("+\\9\\9\\ (89)9 999-99-99");
} catch (e) {

}


$(document).on('click', '.hamburger-menu', function () {
    $('.navigation__drawer').toggleClass('active');
    $('.backdrop').toggleClass('active');
});


$(document).on('click', '.backdrop', function () {
    $('.navigation__drawer').removeClass('active');
    $(this).removeClass('active');
});


try {
    AOS.init();
} catch (e) {

}


// Mobile accordion


try {
    $(function () {
        var Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables
            var link = this.el.find('.link');
            // Eventos
            link.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
        }

        Accordion.prototype.dropdown = function (e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            // Desencadena evento de apertura en los elementos siguientes a la clase link = ul.submenu
            $next.slideToggle();
            // Agregar clase open a elemento padre del elemento con clase link = li
            $this.parent().toggleClass('open');

            //Parametro inicial que permite ver 1 solo submenu abierto
            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
                $el.find('.accordion__content').not($next).slideUp().parent().removeClass('open');
            }

        }
        // Elegir submenus multiples (true) submenus uno a la vez (false)
        var accordion = new Accordion($('#accordion'), false);
    });
} catch (e) {

}