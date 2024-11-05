import { chromium, firefox } from "playwright";
import fs from "fs";

async function getDollarPrice() {
	let browser;
    try {
        browser = await firefox.launch({ headless: true

        });
        const page = await browser.newPage();
        await page.goto("https://www.bcv.org.ve/", { timeout: 120000,waitUntil:'domcontentloaded'});

        const priceDollar = await page.$$eval(
            "#dolar * strong",
            (elements) => elements.map(el => parseFloat(el.innerText.replace(",", ".")).toFixed(2))[0]
        );

        const dataString = JSON.stringify({ price: priceDollar });
        const folder = "./public";
        const filePath = `${folder}/dollarPrice.json`;
        
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
        }

        fs.writeFileSync(filePath, dataString);
        console.log("Precio del dólar guardado en:", filePath);
    } catch (error) {
        console.error("Error al obtener el precio del dólar:", error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}
getDollarPrice();
setInterval(getDollarPrice, 600000);


