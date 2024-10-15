import { chromium, firefox } from "playwright";
import fs from "fs";

async function getDollarPrice() {
	const browser = await chromium.launch({ headless: true });

	const page = await browser.newPage();

	await page.goto("https://www.bcv.org.ve/",{
		timeout:60000,
		waitUntil:'domcontentloaded'
	});
	const priceDollar = await page.$$eval(
		"#dolar * strong",
		(elements) =>
			elements.map(el =>+parseFloat(el.innerText.replace(",", ".")).toFixed(2))[0]
			
	);
	await browser.close();
	const dataString = JSON.stringify({
		price: priceDollar,
	});
	const folder = "./public";

	fs.writeFileSync(
		`${folder}/priceDollar.json`,
		dataString,
		(err) => {
			if (err) {
				console.log(err);
			} else {
				console.log("Data saved");
			}
		}
	);
}

	getDollarPrice();

