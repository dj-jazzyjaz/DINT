import { AmazonExtractor } from '../extraction/PageExtractors/AmazonExtractor';
import { AmazonProduct } from '../extraction/ProductExtractors/AmazonProduct';


export class SimilarityChecker {

    isSimilar():boolean {
        // This parses through the order history arrary and sees 
        // if any keywords from the current product's data 
        // matches any of the items in the user's order history 
        var currentProd: string = this.getCurrentProdData();
        var orderHistory: string[] = this.getOrderHistory();
        for (var i = 0; i < orderHistory.length; i++) {
            if (currentProd.indexOf(orderHistory[i]) > -1) {
                console.log(orderHistory[i]);
                return true;
            }    
        }
        console.log("not similar");
        return false;
    }

    getCurrentProdData():any {
        // Use the extractor to make sure we're on a product page
        var pageChecker = new AmazonExtractor();
        if (pageChecker.getPageType() == "ProductPage"){
            var currentProd = new AmazonProduct();
            if (currentProd)
                return currentProd.getName();
            else
                console.log("error");
        }
        else
            return "";
    }

    getOrderHistory():string[] {
        // TODO: once I can get order history, get the titles of everything the user has 
        // ordered before in a string array
        // Dummy data here
        var arr:string[] = ["iPhone", "shirt", "water bottle", "mug"]; 
        return arr;
    }
}