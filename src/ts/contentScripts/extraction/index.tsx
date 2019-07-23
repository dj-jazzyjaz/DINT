import {Extractor} from "./Extractor"
import { SimilarityChecker } from '../similarity/similarity';
import {Listener} from "./Listener/AmazonListener"

// Extractor
var extractor = new Extractor(false);
extractor.getPage();
extractor.getProduct();

// Similarity 
var similarityChecker1 = new SimilarityChecker();
var similarityFound = similarityChecker1.isSimilar();
if (similarityFound)
    console.log("Similarity Found");
else
    console.log("No Similarity Found");

// Listener
var listener = new Listener(false);
listener.TestButton();
