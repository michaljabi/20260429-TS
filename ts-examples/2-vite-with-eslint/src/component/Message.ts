export class Message extends HTMLElement {
	constructor (title = 'Sample message') {
		super();
		this.innerHTML = `
			<div style="margin-top: 2em">${title}</div>
		`;
	}
}

customElements.define('custom-message', Message);
