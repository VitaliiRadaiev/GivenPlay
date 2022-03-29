@@include('plugins/inputmask.min.js')
@@include('plugins/swiper-bundle.js')
@@include('plugins/tippy.js')

window.addEventListener('load', () => {
	// quantity
	{
		let quantityAll = document.querySelectorAll('[data-quantity]');
		if (quantityAll.length) {
			quantityAll.forEach(quantity => {
				let input = quantity.querySelector('.quantity__input');
				let minus = quantity.querySelector('.quantity__btn--minus');
				let plus = quantity.querySelector('.quantity__btn--plus');

				if (input && minus && plus) {
					input.addEventListener('input', (e) => {
						if (!e.target.value.trim()) return;

						Inputmask('9{*}', {
							clearIncomplete: true,
							clearMaskOnLostFocus: true,
						}).mask(input);


						if (e.target.value < 1) {
							if (e.target.value < 1 && e.target.value.trim()) {
								e.target.value = 1;
							}
						}
					})

					input.addEventListener('blur', (e) => {
						if (e.target.value < 1) {
							input.value = 1;
						}
					})

					plus.addEventListener('click', () => {
						input.value++;
					})
					minus.addEventListener('click', () => {
						if (input.value <= 1) return;

						input.value--;
					})
				}
			})
		}
	}

	// sliders
	@@include('../common/donate-card-slider/donate-card-slider.js')
	@@include('../common/cards-carousel/cards-carousel.js')



	// init tooltip
	{
		let tooltipElements = document.querySelectorAll('[data-tooltip]');
		if (tooltipElements.length) {
			tooltipElements.forEach(el => {
				tippy(el, {
					content: el.dataset.tooltip,
				});
			})
		}
	}

	@@include('../common/donat-progress/donat-progress.js')
	
	@@include('../common/timer/timer.js')

});

jQuery(document).ready(function ($) {


	$('img.img-svg').each(function () {
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function (data) {
			var $svg = $(data).find('svg');
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}
			$img.replaceWith($svg);
		}, 'xml');
	});

});
