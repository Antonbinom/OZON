export const changeCartCounter = () => {
	const cartCounter = document.querySelector('.counter')
	const cart = localStorage.getItem('cart') ?
		JSON.parse(localStorage.getItem('cart')) : []

	localStorage.setItem('goodsNumber', JSON.stringify(cart.length))
	const goodsNumber = localStorage.getItem('goodsNumber')
	cartCounter.textContent = goodsNumber
}