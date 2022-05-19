const cart = () => {
	const cartBtn = document.getElementById('cart')
	const cartModal = document.querySelector('.cart')
	const cartClose = cartModal.querySelector('.cart-close')

	const openCart = () => {
		cartModal.style.display = "flex"
	}

	const closeCart = () => {
		cartModal.style.display = ""
	}
	document.body.addEventListener('click', (e) => {
		e.preventDefault()
		if (e.target === cartBtn) openCart()
		else if (e.target === cartClose || e.target === cartModal) closeCart()
	})
}

export default cart