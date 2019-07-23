import {Extractor} from "./extractionFactory"
import { SimilarityChecker } from '../similarity/similarity';

var extractor = new Extractor();
extractor.details(false);
var similarityChecker1 = new SimilarityChecker();
similarityChecker1.getCurrentProdData();