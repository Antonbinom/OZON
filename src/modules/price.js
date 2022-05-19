import getData from "./getData"
import renderGoods from "./renderGoods"
import {
	priceFilter
} from "./filters"

const price = () => {
	const priceInputs = document.querySelectorAll('.filter-price_input')
	const inputMin = document.querySelector('#min')
	const inputMax = document.querySelector('#max')

	priceInputs.forEach((input) => {

		input.addEventListener('input', () => {

			let min = inputMin.value
			let max = inputMax.value

			getData().then((data) => {
				renderGoods(priceFilter(data, min, max))
			})

		})
	})
}

export default price