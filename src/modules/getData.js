const getData = (str) => {

	return fetch(`https://ozon-e21c6-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
		.then(res => res.json())
}

export default getData