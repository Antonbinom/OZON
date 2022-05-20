import renderCart from "./renderCart"
import postData from "./postData"
import {
	changeCartCounter
} from "./cartCounter"

const cart = () => {
	const cartBtn = document.getElementById('cart')
	const cartModal = document.querySelector('.cart')
	const cartClose = cartModal.querySelector('.cart-close')
	const cartTotal = cartModal.querySelector('.cart-total > span')
	const cartSendBtn = cartModal.querySelector('.cart-confirm')
	const goodsWrapper = document.querySelector('.goods')
	const cartWrapper = document.querySelector('.cart-wrapper')

	const openCart = () => {
		// при открытии корзины получаем массив с добавленными товарами
		const cart = localStorage.getItem('cart') ?
			JSON.parse(localStorage.getItem('cart')) : []
		cartModal.style.display = "flex"

		// отрисовываем товары в корзине
		renderCart(cart)
		//суммируем стоимость товаров и передаем в span с общей стоимостью
		cartTotal.textContent = cart.reduce((sum, goodItem) => {
			return sum + goodItem.price
		}, 0)
	}

	const closeCart = () => {
		cartModal.style.display = ""
	}

	document.body.addEventListener('click', (e) => {
		e.preventDefault()
		if (e.target === cartBtn) openCart()
		else if (e.target === cartClose || e.target === cartModal) closeCart()
	})

	goodsWrapper.addEventListener('click', (e) => {
		if (e.target.classList.contains('btn-primary')) {
			const card = e.target.closest('.card')
			// создаем переменную с ключем карточки
			const key = card.dataset.key
			// получаем массив с товарами из localStorage, преобразуем его из строки в массив
			const goods = JSON.parse(localStorage.getItem('goods'))
			// добавляем массив с товарами в localStorage, если товаров в массиве нет, добавляем пустой массив
			const cart = localStorage.getItem('cart') ?
				JSON.parse(localStorage.getItem('cart')) : []
			// получаем товар из массива с товарами соответствующий его идентификатору и ключу
			const goodItem = goods.find((item) => {
				return item.id === +key
			})

			// помещаем данный товар в массив cart
			cart.push(goodItem)
			// отправляем массив с выбранными товарами в localStorage, переводим в строку
			localStorage.setItem('cart', JSON.stringify(cart))

			changeCartCounter()
		}
	})

	cartWrapper.addEventListener('click', (e) => {
		// при нажатии на кнопку удаления товара из корзины
		if (e.target.classList.contains('btn-primary')) {
			const cart = localStorage.getItem('cart') ?
				JSON.parse(localStorage.getItem('cart')) : []
			const card = e.target.closest('.card')
			const key = card.dataset.key
			// получаем индекс товара соответствующий ключу и id товара
			const index = cart.findIndex((item) => {
				return item.id === +key
			})

			// удаляем товар из массива cart
			cart.splice(index, 1)
			// отправляем в localStorage обновленные данные
			localStorage.setItem('cart', JSON.stringify(cart))
			// далее отрисовываем товары из массива cart
			renderCart(cart)
			// обновляем общую стоимость товаров в корзине
			cartTotal.textContent = cart.reduce((sum, goodItem) => {
				return sum + goodItem.price
			}, 0)
		}

		changeCartCounter()
	})

	cartSendBtn.addEventListener('click', () => {
		const cart = localStorage.getItem('cart') ?
			JSON.parse(localStorage.getItem('cart')) : []

		postData(cart)
			.then(() => {
				localStorage.removeItem('cart')
				renderCart([])
				cartTotal.textContent = 0

				changeCartCounter()
			})
	})
}

export default cart