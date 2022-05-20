import getData from "./getData"
import renderGoods from "./renderGoods"
import {
	changeCartCounter
} from "./cartCounter"
// функция load занимается отрисовкой контента с свервера(db.json)
const load = () => {
	getData()
		.then(data => renderGoods(data))
}
changeCartCounter()

export default load