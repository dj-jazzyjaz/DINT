import { AmazonExtractor } from '../extraction/PageExtractors/AmazonExtractor';
import { AmazonProduct } from '../extraction/ProductExtractors/AmazonProduct';

export class SimilarityChecker {

    isSimilar():boolean {
        // This parses through the order history arrary and sees 
        // if any keywords from the current product's data 
        // matches any of the items in the user's order history 
        return true;
        /*var pageChecker = new AmazonExtractor();
        if (pageChecker.getPageType() == "ProductPage"){
            var purchasedProd = this.getOrderHistory();
            // Category checking
            var currentProdCategory: string = this.getCurrentProdData("Category");
            var purchasedProdCategory = purchasedProd.getCategory(); 
            //var smallestCategory = currentProdCategory[currentProdCategory.length-1];
            if (purchasedProdCategory != null) {
                for (var i = purchasedProdCategory.length-1; i >= 0; i--) {
                    for (var j = currentProdCategory.length - 1; j >= 0; j--) {
                        // The closer to length the number that the match is found at, the more similar
                        // the closer to 0, the less similar they could be 
                        if (currentProdCategory[j] == purchasedProdCategory[i]){
                            console.log("positions " + i + " " + j);
                            console.log("found match at " + currentProdCategory[j] + " and " + purchasedProdCategory[i]);
                            return true;
                        } 
                    }
                }
                return false; 
            }
            return false;
        }
        return false; */
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

   
}