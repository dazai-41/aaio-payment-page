// Кнопка смены языка
dropdownLanguage.onclick = function(){
	dropdownLanguageList.classList.toggle("isActive");
}

// Если клик вне кнопки смены языка
document.addEventListener( 'click', (e) => {
	const withinBoundariesList = e.composedPath().includes(dropdownLanguageList);
	const withinBoundaries = e.composedPath().includes(dropdownLanguage);
 
	if ( ! withinBoundaries && ! withinBoundariesList) {
		dropdownLanguageList.classList.remove('isActive'); // скрываем элемент т к клик был за его пределами
	}
})

//Input
$(document).ready(function(){
	$('.float fieldset input').on('keyup keydown keypress change paste', function(){
		if($(this).val() !== ''){
			$(this).parent().find('label').addClass('stay')
		}else{
			if($(this).parent().find('label').hasClass('stay')){
				$(this).parent().find('label').removeClass()
			}	
		}
	});

	//Переход на страницу "Подтверждение"
	$('.method-payment-wrapp .payment-item').on('click', function(){
		const nameItem = $(this).attr('data-method-payment');
		if(nameItem !== '' && typeof nameItem !== "undefined"){
			$('.methods-payment-wrapp').addClass('hidden');
			$('.progress ul li.isActive').addClass('prev');
			$('.progress ul li.isActive').next().addClass('isActive');
			if(nameItem == 'digital'){
				$('.confirm-method[data-name-confirm="'+ nameItem +'"]').addClass('isActive');
			}
			if(nameItem == 'crypto'){
				$('.confirm-method[data-name-confirm="'+ nameItem +'"]').addClass('isActive');
			}
			if(nameItem == 'coupon'){
				$('.confirm-method[data-name-confirm="'+ nameItem +'"]').addClass('isActive');
			}
			if(nameItem == 'pm'){
				$('.confirm-method[data-name-confirm="'+ nameItem +'"]').addClass('isActive');
			}
		}
	})

	//Прогресс-бар назад
	$('.confirm-payment-wrapp .back').on('click', function() {
		$('.progress ul li:eq(1)').addClass('widthNone');
		setTimeout(function() {
			$('.progress ul li:eq(1)').removeClass('isActive');
			$('.progress ul li:eq(1)').removeClass('widthNone');
		}, 200)
		$('.progress ul li.prev').removeClass('prev');
		$('.confirm-method.isActive').removeClass('isActive');
		setTimeout(function() {$('.methods-payment-wrapp.hidden').removeClass('hidden')}, 200);
	})

	//Добавить лоадинг btn-submit и смена на страницу "Оплата"
	$('button:submit').on('click', function() {
		 event.preventDefault();
		 $(this).html('<div class="loading-wrapp"><img src="assets/img/loading-w.svg"></div>');
		 $(this).parent().parent().parent().removeClass('isActive');
		 var nameAttr = $(this).parent().parent().parent().attr('data-name-confirm');
		 $('.methods-payment-wrapp').addClass('hidden');
		 $('.progress ul li.isActive').addClass('prev');
		 $('.progress ul li.isActive').next().addClass('isActive');
		  if(nameAttr !== '' && typeof nameAttr !== "undefined"){
			 if(nameAttr == 'digital'){
				 $('.paying-payment[data-paying-name="'+ nameAttr +'"]').addClass('isActive');
		  	 }
			 if(nameAttr == 'crypto'){
				 $('.paying-payment[data-paying-name="'+ nameAttr +'"]').addClass('isActive');
		  	 }
		 }
	})

    function IsEmail(email) {
	    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	    if(regex.test(email)) {
	        return true;
	    }else{
	        return false;
	    }
	}

    function IsCoupon(coupon) {
	    var regex = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/;
	    if(regex.test(coupon)) {
	        return true;
	    }else{
	        return false;
	    }
	}

	// Открытие селекта валюты
	$('.currency-select').on('click', function(){
		const wrapp = $(this).parent();
		if(!wrapp.hasClass('isActive')){
			wrapp.addClass('isActive');
		}
	})

	// Если клик вне блока селекта
	$(document).click(function (e) {
	    if ($(e.target).closest(".currency-select-wrapp").length) {
	        // клик внутри элемента
	        return;
	    }
	    // клик снаружи элемента
	    $(".currency-select-wrapp").removeClass('isActive');
	});

	// Смена value select и смена активного item
	$('.select-list-item').on('click', function() {
		const text = $(this).text();
		$(this).parent().parent().find('.currency-select').val(text);
		$(this).parent().find('.isActive').removeClass('isActive');
		$(this).addClass('isActive');
		$(this).parent().parent().removeClass('isActive');
	})

})
	// Кнопка скопировать на странице оплаты
	$('.paying-payment-wrapp .copy-btn').on('click', function () {
		let input = this.parentElement.querySelector('input');
		let btnValue = this.parentElement.querySelector('.copy-btn-value');
		btnValue.classList.add('isActive');
		setTimeout(function(){
			btnValue.classList.remove('isActive');
		}, 400)
		let inputValue = input.value;
		navigator.clipboard.writeText(inputValue);

	});

	$('.qr-code-btn').on('click', function() {
		$('.qr-code-wrapp').addClass('isActive');
	})

	$('.qr-code-wrapp .close-btn').on('click', function() {
		$(this).parent().parent().parent().removeClass('isActive')
	})