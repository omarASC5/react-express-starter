const express = require("express");

const app = express();

app.get('/api/customers', (req, res) => {
	// In the real world, customers array comes from DB
	const customers = [
		{id: 1, firstName: 'John', lastName: 'Doe'},
		{id: 2, firstName: 'Sally', lastName: 'Smith'},
		{id: 3, firstName: 'Mary', lastName: 'Jane'}
	];
	res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server is running at port ${port}`));