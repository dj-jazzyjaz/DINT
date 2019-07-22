export abstract class IExtractor {
    protected abstract website: string;
    isWebsite() {
        return location.href.startsWith(this.website);
    }
    protected abstract isProductPage(): boolean;
    protected abstract isCartPage(): boolean;
    protected abstract isCheckoutPage(): boolean;
    getPage(debug=false) {
        var results = [
            this.isProductPage(),
            this.isCartPage(),
            this.isCheckoutPage()
        ]
        if (debug) {
            debugger;
            alert((results.filter(x => x).length) + " pattern(s) match the page.")
        }
        return results.filter(x => x).length == 1 ? results[0] : null;
    }
}

export class Dummy extends IExtractor {
    protected website = "dummy"
    protected isProductPage() {
       return  false;
    }

    protected isCartPage() {
        return false;
    }

    protected isCheckoutPage() {
        return false;
    }

    getProductDetails() {
        return false;
    }
}

export class Amazon extends IExtractor{
    protected website = "https://www.amazon.com/"
    
    protected isProductPage() {
        if (document.getElementById('add-to-cart-button') != null)
            return true;
        return  false;
    }

    protected isCartPage() {
        if (location.href.includes("/cart/"))
            return true;
        return false;
    }

    protected isCheckoutPage() {
        var headings = document.getElementsByTagName("h1");
        if (headings.length != 1)
            return false;
        if (headings[0].textContent == null)
            return false;
        if (headings[0].textContent.includes("Checkout"))
            return true;
        return false;
    }
}