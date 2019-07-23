import { IExtractor, Amazon } from '../extraction/extraction';

export abstract class ISimilarity extends IExtractor{
    protected abstract productName: string;
    protected abstract productCategory: string; 
    protected abstract productDetail: string; 
}

export class SimilarityChecker {
    getCurrentProdData() {
        new Amazon(); 
        // TODO: Use the extractor to make sure we're on a product page
        if (document.URL) {
            // Get the URL
            var URL = document.URL; 
            var res = URL.split("/");
            // Get the ASIN from the URL and look it up?
            var ASIN;
            // ASIN's length is 10 digits 
            for(var i = 0; i < res.length; i++) {
                if (res[i].length == 10) {
                    ASIN = res[i];
                    break;
                }
            }
            if (ASIN)
                console.log(ASIN);
            else    
                console.log("error");
        }
        else {
            console.log("trouble getting URL");
        }
        // TODO: get current product's data
    }

    getOrderHistory() {
        // TODO: get order history
    }

    isSimilar() {
        // TODO: logic goes here
    }
}