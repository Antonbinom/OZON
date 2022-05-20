const renderCart = (goods) => {
	const cartWrapper = document.querySelector('.cart-wrapper')

	cartWrapper.innerHTML = '' // обнуляем верстку в корзине

	if (goods.length === 0) {
		cartWrapper.insertAdjacentHTML('beforeend', `
			<div id="cart-empty">
				Ваша карзина пуста
			</div>
		`)
	} else {
		goods.forEach(goodsItem => { // затем перебираем товары
			// и отрисовываем
			cartWrapper.insertAdjacentHTML('beforeend', `
			<div class="card" data-key="${goodsItem.id}">
				<div class="card-img-wrapper">
					<span class="card-img-top"
						style="background-image: url('${goodsItem.img}')"></span>
				</div>
				<div class="card-body justify-content-between">
					<div class="card-price">${goodsItem.price} ₽</div>
					<h5 class="card-title">${goodsItem.title}</h5>
					<button class="btn btn-primary">Убрать</button>
				</div>
			</div>
		`)
		});
	}
}

export default renderCart