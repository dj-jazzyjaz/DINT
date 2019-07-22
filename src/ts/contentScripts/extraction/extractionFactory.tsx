import {Amazon, Dummy, IExtractor} from './extraction'

var EXTRACTOR_LIST = [
    new Amazon(),
]

export class Extractor {
    private extractor: IExtractor;

    constructor() {
        var extractors = EXTRACTOR_LIST.map(x => x.isWebsite())
        if (extractors.filter(x => x).length == 1)
            this.extractor = EXTRACTOR_LIST[extractors.indexOf(true)]
        else
            this.extractor = new Dummy();  
    }

    details(debug=false) {
        return this.extractor.getPage(debug)
    }
}