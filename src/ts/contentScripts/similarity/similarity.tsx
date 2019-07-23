import { IExtractor, Amazon } from '../extraction/extraction';
import { array } from 'prop-types';

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
        var xmlhttp = new XMLHttpRequest();
        var url = "https://www.amazon.com/dp/" + ASIN; 
        xmlhttp.open("GET", url, false);
        xmlhttp.send();
        if (xmlhttp.responseText != ""){
            var currentProdString = xmlhttp.responseText; 
            var similarityFound = this.isSimilar(currentProdString, this.getOrderHistory())
            console.log(similarityFound);
        } 
        else {
            console.log("product has no info, some error occured");
        } 
    }

    getOrderHistory():string[] {
        // TODO: once I can get order history, get the titles of everything the user has 
        // ordered before in a string array
        // Dummy data here
        var arr:string[] = ["IPhone", "shirt", "water bottle", "mug"]; 
        return arr;
    }

    isSimilar(currentProd: string, orderHistory: string[]):boolean {
        // This parses through the order history arrary and sees 
        // if any keywords from the current product's data 
        // matches any of the items in the user's order history 
        for (var i = 0; i < orderHistory.length; i++) {
            if (currentProd.indexOf(orderHistory[i]) > -1)
                return true;
        }
        return false;
    }
}