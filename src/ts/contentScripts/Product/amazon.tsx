import {IPrice, IProduct} from './Product'

export class AmazonPrice implements IPrice{
    private dealPrice: null | Number;
    private ourPrice: null | Number;

    constructor() {
        this.dealPrice = this.setDealPrice();
        this.ourPrice = this.setOurPrice();
    }

    private setDealPrice() {
        var price = document.getElementById('priceblock_dealprice')
        if (price == null)
            return null;
        return parseFloat(price!.textContent!.substr(1))
    }

    private setOurPrice() {
        var price = document.getElementById('priceblock_ourprice')
        if (price == null)
            return null;
        return parseFloat(price.textContent!.substr(1))
    }

    getPrices() {
        return {
            dealPrice: this.dealPrice,
            ourPrice: this.ourPrice,
        }
    }
}

export class AmazonProduct extends IProduct {
    constructor() {
        super();
    }

    setName() {
        return document.getElementById('productTitle')!.textContent;
    }

    setDescription() {
        return document.getElementById('feature-bullets')!.textContent;
    }

    setPrices() {
        return new AmazonPrice();
    }
}