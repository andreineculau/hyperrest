/*global jQuery*/
(function($) {
    "use strict";

    // GENERAL
    $('.dropdown-toggle').dropdown();

    // CONTENT
    // Replace header auto-id with inner one
    $('#content h2 a[id],#content h3 a[id],#content h4 a[id],#content h5 a[id]').each(function() {
        var $this = $(this),
            $parent = $this.parent();

        $parent.attr('id', $this.attr('id'));
        $this.remove();
    });

    // Make headers link-able
    $('#content h2[id],#content h3[id],#content h4[id],#content h5[id]').each(function() {
        var $this = $(this),
            nbsp = new Array(Number($this.get(0).tagName.substr(1)) - 1).join('&middot;&nbsp;');

        $this.on('click', function() {
            var $this = $(this);

            window.location.hash = $this.attr('id');
        });

        $('#sidebar-toc').append(
            $('<li><a href="#' +
              $this.attr('id') +
              '">' +
              nbsp +
              $this.text() +
              '</li>')
        ).css('display', 'block');
    });

    // CODE SYNTAX HIGHLIGHT
    $('pre > code[lang]').each(function() {
        var $this = $(this);

        $this.attr('data-language', $this.attr('lang'));
        $this.parent().attr('class', 'rainbow');
    });

    // TOOLTIP, POPOVER
    $('a[data-toggle=popover], li[data-toggle=popover]').popover({
        html: true,
        container: 'body'
    });
    $('a[data-toggle=tooltip], li[data-toggle=tooltip]').tooltip({
        html: true,
        container: 'body'
    });

    // SIDEBAR FOOTER
    $('.btn-group .btn[data-href]:not(.disabled)').on('click', function() {
        var $this = $(this),
        href = $this.data('href'),
        target = $this.data('target') || '_blank';

        if (target === '_self') {
            window.location = href;
        } else {
            window.open(href, target);
        }
    }).each(function() {
        var $this = $(this);

        $this.tooltip({
            placement:'top',
            container:'body',
            title:$this.data('href')
        });
    });
})(jQuery);
