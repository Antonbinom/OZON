const getData = (str) => {
	// получаем данные о товарах с сервера
	/**
	return fetch(`https://ozon-e21c6-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
	 */
	return fetch(`https://ozon-e21c6-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
		.then(res => res.json())
}

export default getData