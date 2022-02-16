// calc cart price
function calcCartPrice() {
	const cartWrapper = document.querySelector('.cart__wrapper');
	const priceElements = cartWrapper.querySelectorAll('.catalog-2__item-price-number');
	const totalPriceEl = document.querySelector('.cart__total-number');
	// const deliveryCost = document.querySelector('.delivery-cost');
	// const cartDelivery = document.querySelector('[data-cart-delivery]');

	let priceTotal = 0;

	priceElements.forEach(function (item) {
		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});

	totalPriceEl.innerText = priceTotal;

	// if (priceTotal > 0) {
	// 	cartDelivery.classList.remove('none');
	// } else {
	// 	cartDelivery.classList.add('none');
	// }
}


// toggle cart status
function toggleCartStatus() {

    const cartWrapper = document.querySelector('.cart__wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    // const orderForm = document.querySelector('#order-form');

    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('display-none');
        // orderForm.classList.remove('none');
    } else {
        cartEmptyBadge.classList.remove('display-none');
        // orderForm.classList.add('none');
    }

}

// counter
window.addEventListener('click', function (event) {
    let counter;
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
	}
	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}
	if (event.target.dataset.action === 'minus') {
		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		} else if (event.target.closest('.cart__wrapper') && parseInt(counter.innerText) === 1) {
			event.target.closest('.cart-item').remove();

            toggleCartStatus();

            calcCartPrice();
		}
	}
	if (event.target.hasAttribute('data-action') && event.target.closest('.cart__wrapper')) {
        calcCartPrice();
	}
});
// ===================================================================================================================================================================================================================================================================================================================================================================================================================================
// ===================================================================================================================================================================================================================================================================================================================================================================================================================================
// cart
const cartWrapper =  document.querySelector('.cart__wrapper');
window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {
		const card = event.target.closest('.catalog-2__item');
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.catalog-2__item-img').getAttribute('src'),
			title: card.querySelector('.catalog-2__item-title').innerText,
            price: card.querySelector('.catalog-2__item-price-number').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
            const cartItemHTML = 
                            `
                            <div class="cart-item" data-id="${productInfo.id}">
                            <div class="cart-item__image responsive-1">
                                <img class="cart-item__img" src="${productInfo.imgSrc}" loading="lazy" alt="${productInfo.title}">
                            </div>
                        <div class="cart-item__information">
                            <p class="cart-item__information-title">${productInfo.title}</p>
                        </div>
                        <div class="cart-item__bottom">
                            <div class="counter-wrapper">
                                <button class="counter-wrapper__control counter-wrapper__minus" data-action="minus"></button>
                                <div class="counter-wrapper__current" data-counter="">${productInfo.counter}</div>
                                <button class="counter-wrapper__control counter-wrapper__plus" data-action="plus"></button>
                            </div>
                            <p class="cart-item__price-number catalog-2__item-price-number">${productInfo.price}₽</p>
                            <div class="cart-item__delete"></div>
                        </div>
                        </div>
                            `;
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

		card.querySelector('[data-counter]').innerText = '1';

        toggleCartStatus();

        calcCartPrice();
	}
});