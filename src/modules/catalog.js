import getData from "./getData"
import renderGoods from "./renderGoods"
import {
	categoryFilter
} from "./filters"

const catalog = () => {
	const catalogBtn = document.querySelector('.catalog-button > button')
	const catalogModal = document.querySelector('.catalog')
	const catalogItems = document.querySelectorAll('.catalog li')

	let isOpen = false

	document.addEventListener('click', (e) => {
		if (e.target.closest('.catalog-button')) {
			isOpen = !isOpen

			if (isOpen) catalogModal.style.display = "block"
			else catalogModal.style.display = ""

		} else {
			catalogModal.style.display = ""
			isOpen = false
		}
	})

	catalogItems.forEach(item => {
		item.addEventListener('click', (e) => {
			const text = item.textContent
			getData().then((data) => {
				renderGoods(categoryFilter(data, text))
			})
		})
	})
}


export default catalog