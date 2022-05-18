export const getData = () => {
	return fetch('http://localhost:3000/goods')
		.then(res => res.json())
}