import getData from "./getData"
import renderGoods from "./renderGoods"

// функция load занимается отрисовкой контента с свервера(db.json)
const load = () => {
	getData()
		.then(data => renderGoods(data))
}

export default load