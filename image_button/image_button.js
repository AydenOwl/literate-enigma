(function () {
    let template = document.createElement("template");
    template.innerHTML = `
		<style>
		:host {
			border-radius: 10px;
			border-width: 2px;
			border-color: black;
			border-style: solid;
			display: block;
		} 
        
		</style>
		
		<div class="container">
            <button type="button">

            </button>
		</div>
	`;

    class Imagebutton extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(template.content.cloneNode(true));

            this.$style = shadowRoot.querySelector('style');
            this.$svg = shadowRoot.querySelector('svg');

            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
            });

            this._props = {};
        }

        render(textColor, backgroundColor, tooltip) {
            this.$style.innerHTML = ':host {border-radius: 10px;border-width: 2px;border-color: black;border-style: solid;display: block;} .button {color: + ' + textColor + ';background-color: ' + backgroundColor + ';}';
            this.$svg.innerHTML = '<button class="button" type="button" title="' + tooltip + '"> </button>';
        }

        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }

        onCustomWidgetAfterUpdate(changedProperties) {
            if ("textColor" in changedProperties) {
                this.$textColor = changedProperties["textColor"];
            }

            if ("backgroundColor" in changedProperties) {
                this.$backgroundColor = changedProperties["backgroundColor"];
            }

            if ("tooltip" in changedProperties) {
                this.$tooltip = changedProperties["tooltip"];
            }

            this.render(this.$textColor, this.$backgroundColor, this.$tooltip);
        }
    }

    customElements.define("com-synvance-imagebutton", Imagebutton);
})();