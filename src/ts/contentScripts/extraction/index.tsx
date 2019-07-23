import {Extractor} from "./Extractor"
import { SimilarityChecker } from '../similarity/similarity';

var extractor = new Extractor(false);
extractor.getPage();
extractor.getProduct();
var similarityChecker1 = new SimilarityChecker();
similarityChecker1.getCurrentProdData();
