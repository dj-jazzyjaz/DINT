export abstract class IExtractor {
    protected abstract website: string;
    isWebsite() {
        return location.href.startsWith(this.website);
    }
    protected abstract isProductPage(): null | {site: string, type: string};
    protected abstract isCartPage(): null | {site: string, type: string};
    protected abstract isCheckoutPage(): null | {site: string, type: string};
    getPage(debug=false) {
        var results = [
            this.isProductPage(),
            this.isCartPage(),
            this.isCheckoutPage()
        ]
        results = results.filter(x => x != null)
        if (debug) {
            debugger;
            switch (results.length) {
                case 0: alert("No matching patterns!");
                        break;
                case 1: alert(JSON.stringify(results[0]))
                        break;
                default: alert("More than 1 pattern! " + JSON.stringify(results))
                         break
            }
        }
        return results.length == 1 ? results[0] : null;
    }
}

export class Dummy extends IExtractor {
    protected website = "dummy"
    protected isProductPage() {
       return  null;
    }

    protected isCartPage() {
        return null;
    }

    protected isCheckoutPage() {
        return null;
    }
}

export class Amazon extends IExtractor{
    protected website = "https://www.amazon.com/"
    
    protected isProductPage() {
        if (document.getElementById('add-to-cart-button') != null)
            return {site: "Amazon", type: "ProductPage"};
        return  null;
    }

    protected isCartPage() {
        if (location.href.includes("/cart/"))
            return {site: "Amazon", type: "CartPage"}
        return null;
    }

    protected isCheckoutPage() {
        var headings = document.getElementsByTagName("h1");
        if (headings.length != 1)
            return null;
        if (headings[0].textContent == null)
            return null;
        if (headings[0].textContent.includes("Checkout"))
            return {site: "Amazon", type: "CheckoutPage"};
        return null;
    }
}