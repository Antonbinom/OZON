export const postData = () => {

	return fetch('http://localhost:3000/goods/23', {
			method: 'POST',
			body: JSON.stringify({
				title: "Cyber Punk 2077",
				price: 3500,
				sale: false,
				img: "https://cdn1.ozone.ru/multimedia/c400/1011627377.jpg",
				category: "Игры и софт"
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
		.then(res => res.json())
}