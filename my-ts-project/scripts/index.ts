
async function fetchData() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await response.json();
		console.log(data);
		fillTable(data); // Uncomment this line if you want to fill the table
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

function fillTable(users: any[]) {
	const table = document.createElement('table');
	const headerRow = table.insertRow(0);

	['id', 'name', 'username', 'email', 'phone', 'website'].forEach((field, index) => {
		const th = document.createElement('th');
		th.innerHTML = field;
		headerRow.appendChild(th);
	});

	users.forEach(user => {
		const row = table.insertRow(-1);

		['id', 'name', 'username', 'email', 'phone', 'website'].forEach(field => {
			const cell = row.insertCell(-1);
			cell.innerHTML = user[field];
		});
	});

	document.body.appendChild(table);
}

fetchData();
