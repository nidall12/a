const { ProxyAgent } = require('undici');

const url = 'https://ipv4.icanhazip.com';
const client = new ProxyAgent(
	'http://:dgQk19rhe9IfT5dQ:HbzWVsg8EIRrQsyj@_country-id@geo.iproyal.com:12321'
);
const proxyTest = async () => {
	try {
		const response = await fetch(url, {
			dispatcher: client,
		});

		const data = await response.text();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
};

proxyTest();