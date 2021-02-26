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
		body {
		  background: #fff;
		}
			
		</style>
		
		<div class="container">
            <p> Deactivate protection </p>
		</div>
	`;

    class ClickJackingHandler extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(template.content.cloneNode(true));

            this.$style = shadowRoot.querySelector('style');

            this.addEventListener("click", event => {
                let t = document.querySelector("#antiClickjack");
                console.log(t.innerHTML);
                t.innerHTML = "";

                var event = new Event("onClick");
                this.dispatchEvent(event);
            });

            this._props = {};
        }

        render(divToDeactivate) {

        }


        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }

        onCustomWidgetAfterUpdate(changedProperties) {
            if ("divToDeactivate" in changedProperties) {
                this.$divToDeactivate = changedProperties["divToDeactivate"];
            }

            this.render(this.$divToDeactivate);
        }
    }

    customElements.define("com-synvance-clickjackinghandler", ClickJackingHandler);
})();