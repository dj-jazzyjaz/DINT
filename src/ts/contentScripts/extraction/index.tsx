import {Extractor} from "./Extractor"
import {Listener} from "./Listener/AmazonListener"

var extractor = new Extractor(true);
extractor.getPage();
extractor.getProduct();

var listener = new Listener(false);
listener.TestButton();