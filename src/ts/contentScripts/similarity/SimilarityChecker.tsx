import { AmazonExtractor } from '../extraction/PageExtractors/AmazonExtractor';
import { AmazonProduct } from '../extraction/ProductExtractors/AmazonProduct';
import { PurchasedProduct } from './PurchasedProduct';


export class SimilarityChecker {

    isSimilar():boolean {
        // This parses through the order history arrary and sees 
        // if any keywords from the current product's data 
        // matches any of the items in the user's order history 

        var pageChecker = new AmazonExtractor();
        if (pageChecker.getPageType() == "ProductPage"){
            var purchasedProd = this.getOrderHistory();
            // Category checking
            var currentProdCategory: string = this.getCurrentProdData("Category");
            var purchasedProdCategory = purchasedProd.getCategory(); 
            //var smallestCategory = currentProdCategory[currentProdCategory.length-1];
            if (purchasedProdCategory != null) {
                for (var i = purchasedProdCategory.length-1; i >= 0; i--) {
                    for (var j = currentProdCategory.length - 1; j >= 0; j--) {
                        if (currentProdCategory[j] == purchasedProdCategory[i]){
                            console.log("found match at " + currentProdCategory[j] + " and " + purchasedProdCategory[i]);
                            return true;
                        } 
                    }
                }
            }

            


            console.log("no category match found");
            // Title checking 
            var currentProd: string = this.getCurrentProdData("Name").toUpperCase();
            var orderHistory: string[] = this.getOrderHistory("Name");
            for (var i = 0; i < orderHistory.length; i++) {
                if (currentProd.indexOf(orderHistory[i].toUpperCase()) > -1) {
                    return true;
                }    
            }
            return false;
        }
    }

    getCurrentProdData(type:string):any {
        // Use the extractor to make sure we're on a product page
        var pageChecker = new AmazonExtractor();
        if (pageChecker.getPageType() == "ProductPage"){
            var currentProd = new AmazonProduct();
            if (currentProd){
                if(type == "Name")
                    return currentProd.getName();
                if(type == "Category")
                    return currentProd.getCategory();
            }
            else
                console.log("error");
        }
        else
            return "";
    }

    getOrderHistory():PurchasedProduct {
        // TODO: get PurchasedProducts from DB
        var prod = new PurchasedProduct();
        return prod;
    }
}