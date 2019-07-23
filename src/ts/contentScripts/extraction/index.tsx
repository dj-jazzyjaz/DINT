import {Extractor} from "./Extractor"
import { SimilarityChecker } from '../similarity/similarity';
import {Listener} from "./Listener/AmazonListener"

var extractor = new Extractor(false);
extractor.getPage();
extractor.getProduct();
var similarityChecker1 = new SimilarityChecker();
similarityChecker1.getCurrentProdData();
var listener = new Listener(false);
listener.TestButton();
