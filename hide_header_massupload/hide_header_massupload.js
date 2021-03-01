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
            let header = document.querySelector("#shell-hdr");
            if (header === null || header === undefined) return false;
            console.log(header);
            console.log(document);
            console.log(this.document);
            header.style = "display:none";
            console.log("DONE");
            return true;
        }
    }

    customElements.define("com-synvance-hideheadermassupload", HideHeaderMassupload);
})();