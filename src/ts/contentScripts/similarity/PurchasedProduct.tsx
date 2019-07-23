import { IProduct, IPrice } from '../extraction/ProductExtractors/IProduct';

// price for now stolen from amazon price
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

// Dummy implementation for testing of a product in the user's order history
export class PurchasedProduct extends IProduct {
    constructor() { super(); }
    
    protected setName() { 
        // Eventually, this will get the name of the product once it is purchased
        // if(checked out) {
        //     return "product name from page";
        // }
        return "Magnet Toys Kids Magnetic Building Tiles 100 Pcs 3D Magnetic Blocks" + 
         + "Preschool Building Sets Educational Toys for Toddlers Boys and Girls."; 
    }
    protected setDescription() { 
        // Will eventually set the description of purchased product
        // if(checked out) {
        //     return "product desc from page";
        // }
        return "this is my description";
    }
    protected setCategories() {
        // Will eventually set the categories
        // if(checked out) {
        //     return "product category array from page";
        // }
        var arr:string[] = ["Toys & Games", "Building Toys", "Building Sets"];
        return arr;
    }

    // Eventually return the real price of course
    protected setPrices() { return new AmazonPrice(); }
}