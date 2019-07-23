export abstract class IExtractor {
    protected abstract website: string;
    isWebsite() {
        return location.href.startsWith(this.website);
    }
    abstract isProductPage(): boolean;
    abstract isCartPage(): boolean;
    abstract isCheckoutPage(): boolean;
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
    isProductPage() {
       return  false;
    }

    isCartPage() {
        return false;
    }

    isCheckoutPage() {
        return false;
    }

    getProductDetails() {
        return false;
    }
}

export class Amazon extends IExtractor{
    protected website = "https://www.amazon.com/"
    
    isProductPage() {
        if (document.getElementById('add-to-cart-button') != null)
            return true;
        return  false;
    }

    isCartPage() {
        if (location.href.includes("/cart/"))
            return true;
        return false;
    }

    isCheckoutPage() {
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