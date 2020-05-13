const app = require('./app');
const port = 3030;

app.listen(3030, () => {
	console.log(`Application running on port ${port}`);
});
