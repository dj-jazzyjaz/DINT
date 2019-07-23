import {IExtractor} from './PageExtractors/IExtractor'
import {AmazonExtractor} from './PageExtractors/AmazonExtractor'
import { IProduct } from './ProductExtractors/IProduct';
import { AmazonProduct } from './ProductExtractors/AmazonProduct';

export class Extractor {
    private extractor: IExtractor;
    private product: null | IProduct;
    private debug: boolean;

    constructor(debug=false) {
        this.debug = debug;
        this.extractor = this.setExtractor();
        this.product = this.setProduct();
    }

    private setExtractor() {
        var extractorFactory = [
            new AmazonExtractor(),
        ]
        var extractors = extractorFactory.map(x => x.isWebsite())
        if (extractors.filter(x => x).length == 1)
            return extractorFactory[extractors.indexOf(true)]
        else
            throw "No extractor for page!"
    }

    private setProduct() {
        if (this.extractor.getPageType() != "ProductPage")
            return null;
        switch(this.extractor.getWebsite()) {
            case "https://www.amazon.com/":
                return new AmazonProduct();
            default:
                throw " No product class implementation for that website.";
        }
    }

    getPage() {
        if (this.debug)
            alert(JSON.stringify(this.extractor.getPageType()));
        return this.extractor.getPageType();
    }

    getProduct() {
        if (this.debug)
            alert(JSON.stringify(this.product));
        return this.product;
    }
}