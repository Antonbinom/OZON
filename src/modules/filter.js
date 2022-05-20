import getData from "./getData"
import renderGoods from "./renderGoods"
import {
	priceFilter,
	saleFilter
} from "./filters"

const filter = () => {
	const inputMin = document.querySelector('#min')
	const inputMax = document.querySelector('#max')
	const checkboxInput = document.querySelector('.filter-check_checkmark')
	let checkboxSale

	inputMin.addEventListener('input', () => {
		getData().then((data) => {
			renderGoods(priceFilter(saleFilter(data, checkboxSale), inputMin.value, inputMax.value))
		})
	})
	inputMax.addEventListener('input', () => {
		getData().then((data) => {
			renderGoods(priceFilter(saleFilter(data, checkboxSale), inputMin.value, inputMax.value))
		})
	})

	checkboxInput.addEventListener('click', (e) => {
		e.target.classList.toggle('checked')
		if (checkboxInput.classList.contains('checked')) checkboxSale = true
		else checkboxSale = false

		getData().then((data) => {
			renderGoods(priceFilter(saleFilter(data, checkboxSale), inputMin.value, inputMax.value))
		})
	})
}

export default filter