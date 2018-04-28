'use strict';
$(document).ready(function() {

    $('.services-tab').on('click', function(evt) {
        let $this = $(this);
        if ($(evt.target).closest('.js-services-tab__label').length) {
            $this.toggleClass('active');
        }
    });

    function totalServicesPrice() {
        let totalPrice = 0,
            $checkedRows = $('.js-services-checkbox:checked').parents('.services-table__tr');

        $checkedRows.each(function(i, item) {
            let quantity = $(item).find('.services-quantity__input').length ? 
                parseInt( $(item).find('.services-quantity__input').val() ) : 1;
            totalPrice += parseInt( $(item).find('.js-service-subs-price').text() * quantity );
        });

        $('.js-services-total-price').text(totalPrice);
    }

    $('.services-quantity__input').on('change', function() {
        let $this = $(this),
            val = parseInt($this.val());
        $this.val( val < 0 ? 0 : val );
    });

    $('.js-services-table').on('click', function(evt) {
        let $target = $(evt.target);
        if ($target.closest('.js-services-checkbox').length) {
            totalServicesPrice();
        } else if (
            $target.closest('.services-quantity__minus').length || 
            $target.closest('.services-quantity__plus').length
        ) {
            let $input = $target.parents('.services-quantity').find('.services-quantity__input'),
                n = $target.closest('.services-quantity__plus').length && 1 || -1,
                val = parseInt($input.val()) + n;
                val = val < 0 ? 0 : val;

            $input.val( val );
            totalServicesPrice();
        }
    });

    $('.services-table__name').on('mouseover', function() {
        let $popup = $(this).find('.services-popup');
        $popup.addClass('active');
    });
    $('.services-table__name').on('mouseout', function() {
        let $popup = $(this).find('.services-popup');
        $popup.removeClass('active');
    });
    $('.services-popup__close').on('click', function() {
        let $popup = $(this).parents('.services-popup');
        $popup.removeClass('active');
    });

    totalServicesPrice();

});