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
            console.log(document);
            let header = document.querySelector("#shell-hdr");
            console.log(header);
            if (header === null || header === undefined) return false;
            header.style = "display:none";
            console.log("DONE");

            return true;
        }
    }

    customElements.define("com-synvance-hideheadermassupload", HideHeaderMassupload);
})();