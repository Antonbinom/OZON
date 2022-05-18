import {
	getData
} from "./getData"
import {
	postData
} from "./postData"

export const second = () => {
	getData()
		.then(data => console.log(data))
}