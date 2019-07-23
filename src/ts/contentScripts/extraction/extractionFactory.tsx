import {Amazon, Dummy, IExtractor} from './extraction'
import { IProduct } from '../Product/Product';
import { AmazonProduct } from '../Product/amazon';

var EXTRACTOR_LIST = [
    new Amazon(),
]

export class Extractor {
    private extractor: IExtractor;
    private product: null | IProduct;

    constructor() {
        var extractors = EXTRACTOR_LIST.map(x => x.isWebsite())
        if (extractors.filter(x => x).length == 1)
            this.extractor = EXTRACTOR_LIST[extractors.indexOf(true)]
        else
            this.extractor = new Dummy();
        if (this.extractor.isProductPage())
            this.product = new AmazonProduct();
        else
            this.product = null;
    }

    details(debug=false) {
        debugger;
        this.extractor.getPage(debug)
        if (this.product != null && debug) {
            alert(this.product.getName());
            alert(JSON.stringify(this.product.getProduct()));
            alert(JSON.stringify(this.product.getPrices()));
        }
            
        return this.product;
    }
}