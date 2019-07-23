import {IPrice, IProduct} from './IProduct'

class AmazonPrice implements IPrice{
    private dealPrice: null | Number;
    private ourPrice: null | Number;

    constructor() {
        this.dealPrice = this.setDealPrice();
        this.ourPrice = this.setOurPrice();
    }

    getPrices() {
        return {
            dealPrice: this.dealPrice,
            ourPrice: this.ourPrice,
        }
    }

    private setDealPrice() {
        var price = document.getElementById('priceblock_dealprice')
        if (price == null)
            return null;
        return parseFloat(price!.textContent!.substr(1));
    }

    private setOurPrice() {
        var price = document.getElementById('priceblock_ourprice')
        if (price == null)
            return null;
        return parseFloat(price.textContent!.substr(1));
    }
}

export class AmazonProduct extends IProduct {
    constructor() { super(); }

    protected setName() { 
        return document.getElementById('productTitle')!.textContent!.trim();
    }
    protected setDescription() { 
        var dom = document.getElementById('feature-bullets')!.getElementsByTagName('li')
        // THIS IS UGLY
        if (dom.length > 3) {
            for (var i = 0; i < 3; i++)
                dom[0].remove()
        }
        var description = ""
        for (var i = 0; i < dom.length; i++)
            description += dom[i].textContent!.trim() + " ";
            
        return description.trim();
    }
    protected setCategories() {
        var doms = document.getElementById('wayfinding-breadcrumbs_container')!.querySelectorAll('span.a-list-item:not(.a-color-tertiary)');
        var result: string[] = [];
        for (var i=0; i<doms.length; i++)
            result.push(doms[i].textContent!.trim());
        return result;
    }

    protected setImage() {
        var dom = document.querySelector("img#landingImage");
        if (dom == null)
            return null;
        return dom.getAttribute('src');
    }

    protected setPrices() { return new AmazonPrice(); }
}