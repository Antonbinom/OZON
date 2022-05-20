const renderGoods = (goods) => {
	const goodsWrapper = document.querySelector('.goods')

	//помещаем массиы с товарами в localStorage, преобразуем его в строку
	localStorage.setItem('goods', JSON.stringify(goods))

	goodsWrapper.innerHTML = '' // обнуляем верстку в товарах

	goods.forEach(goodsItem => { // затем перебираем товары
		// и отрисовываем
		goodsWrapper.insertAdjacentHTML('beforeend', `
			<div class="col-12 col-md-6 col-lg-4 col-xl-3">
				<div class="card" data-key="${goodsItem.id}">
					${goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
					<div class="card-img-wrapper">
						<span class="card-img-top"
							style="background-image: url('${goodsItem.img}')"></span>
					</div>
					<div class="card-body justify-content-between">
						<div class="card-price">${goodsItem.price} ₽</div>
						<h5 class="card-title">${goodsItem.title}</h5>
						<button class="btn btn-primary">В корзину</button>
					</div>
				</div>
			</div>
		`)
	});
}

export default renderGoods