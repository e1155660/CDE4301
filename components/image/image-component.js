
class ImageComponent extends HTMLElement {
  static get observedAttributes() {
    return ["tag", "source", "subtitle", "scrollable"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    const isScrollable = this.hasAttribute("scrollable");

    div.innerHTML = `
      <div class="${isScrollable ? "scrollable-image" : "normal-image"}">
        <img id="${this.tag}" src="${this.source}" alt="${this.subtitle}">
      </div>

      <sub>${this.subtitle}</sub>

      <style>
        :host {
          display: block;
          text-align: center;
        }

        .normal-image {
          width: 70%;
          margin: auto;
        }

        .normal-image img {
          display: block;
          width: 100%;
          height: auto;
        }

        .scrollable-image {
          width: 70%;
          margin: auto;
          overflow-x: auto;
        }

        .scrollable-image img {
          display: block;
          width: 1400px;
          max-width: none;
          height: auto;
        }

        sub {
          display: block;
          font-size: 1rem;
          font-style: italic;
          margin-top: 8px;
        }
      </style>
    `;

    this.shadowRoot.replaceChildren(div);
  }
}

customElements.define("image-component", ImageComponent);
