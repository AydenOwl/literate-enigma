(function () {
    let template = document.createElement("template");
    template.innerHTML = `
		<style>
		:host {
			display: block;
		} 

		</style>
	`;

    class HideHeaderMassupload extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(template.content.cloneNode(true));

            this._props = {};
        }

        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }

        onCustomWidgetAfterUpdate(changedProperties) {
        }

        hideHeader() {
            console.log("I WAS CALLED");
            let header = this.shadowRoot.querySelector("#shell-hdr");
            console.log(header);
            header.style = "display:none";
            console.log("DONE");
        }
    }

    customElements.define("com-synvance-hideheadermassupload", HideHeaderMassupload);
})();