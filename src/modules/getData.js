export const getData = () => {
	return fetch('https://ozon-e21c6-default-rtdb.firebaseio.com/goods.json')
		.then(res => res.json())
}