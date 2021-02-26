(function () {
    let template = document.createElement("template");
    template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Properties</legend>
				<table>
					<tr>
						<td>Image URL</td>
						<td><input id="sps_image_url" type="text" size="40" maxlength="500"></td>
					</tr>                   
					<tr>
						<td>Tooltip text</td>
						<td><input id="sps_tooltip" type="text" size="40" maxlength="40"></td>
					</tr>   
					<tr>
						<td>Image max width</td>
						<td><input id="sps_max_width" type="text" size="40" maxlength="10"></td>
					</tr>                                    
				</table>                
				<input type="submit" style="display:none;">
			</fieldset>
		</form>
	`;

    class ImagebuttonSps extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
            this._shadowRoot.appendChild(template.content.cloneNode(true));
            this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
        }

        _submit(e) {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
                detail: {
                    properties: {
                        imageUrl: this.imageUrl,
                        tooltip: this.tooltip,
                        maxWidth: this.maxWidth
                    }
                }
            }));
        }

        set imageUrl(newUrl) {
            this._shadowRoot.getElementById("sps_image_url").value = newUrl;
        }

        get imageUrl() {
            return this._shadowRoot.getElementById("sps_image_url").value;
        }

        set tooltip(newText) {
            this._shadowRoot.getElementById("sps_tooltip").value = newText;
        }

        get tooltip() {
            return this._shadowRoot.getElementById("sps_tooltip").value;
        }

        set maxWidth(newMaxWidth) {
            this._shadowRoot.getElementById("sps_max_width").value = newMaxWidth;
        }

        get maxWidth() {
            return this._shadowRoot.getElementById("sps_max_width").value;
        }

    }

    customElements.define("com-synvance-imagebutton-sps", ImagebuttonSps);
})();
