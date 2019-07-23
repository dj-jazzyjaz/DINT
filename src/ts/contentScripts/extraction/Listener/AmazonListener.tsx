export class Listener {
    private debug: boolean;

    constructor(debug=false) { this.debug = debug }

    TestButton() {
        if (this.debug) {
            var debug = this.debug;
            var button = document.createElement('button');
            button.id = "test-button";
            var text = document.createTextNode('Test');
            button.appendChild(text);
            document.body.insertBefore(button, document.body.firstChild);
    
            button.addEventListener("click", function() {
                if (debug)
                    alert("test-listener");
                return;
            });
        }
    }

}