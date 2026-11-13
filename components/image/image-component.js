
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
        <img id="${this.tag}" src="${this.source}" alt="${this.subtitle}" class="zoomable">
        <span class="zoom-icon" aria-hidden="true">⌕</span>
      </div>

      <dialog class="image-lightbox">
        <button class="close-button" aria-label="Close enlarged image">×</button>
        <div class="zoom-container">
          <img src="${this.source}" alt="${this.subtitle}">
        </div>
      </dialog>

      <sub>${this.subtitle}</sub>

      <style>
        :host {
          display: block;
          text-align: center;
        }

        .normal-image {
          width: ${this.getAttribute("width") || "70%"};
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

        /* Indicate that images are clickable */
        .normal-image,
        .scrollable-image {
          position: relative;
        }

        .zoomable {
          cursor: zoom-in;
          transition: opacity 0.2s ease;
        }

        .zoomable:hover {
          opacity: 0.85;
        }

        .zoom-icon {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.65);
          color: white;
          font-size: 24px;
          border-radius: 6px;
          padding: 4px 10px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .normal-image:hover .zoom-icon,
        .scrollable-image:hover .zoom-icon {
          opacity: 1;
        }

        sub {
          display: block;
          font-size: 1rem;
          font-style: italic;
          margin-top: 8px;
        }


        .image-lightbox {
          width: 90vw;
          max-width: 90vw;
          height: 85vh;
          max-height: 85vh;
          padding: 15px;
          border: none;
          border-radius: 8px;
          background: white;
          box-sizing: border-box;
          position: fixed;
        }

        .image-lightbox::backdrop {
          background: rgba(0, 0, 0, 0.75);
        }

        .zoom-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .zoom-container img {
          display: block;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          margin: auto;
        }

        .close-button {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 100;

          width: 38px;
          height: 38px;
          font-size: 28px;
          font-weight: bold;
          line-height: 1;

          color: white;
          background-color: #333;
          border: none;
          border-radius: 8px;

          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s, transform 0.15s;
        }

        .close-button:hover {
          background-color: #b42318;
        }

        .close-button:active {
          background-color: #7f1d1d;
          transform: scale(0.9);
        }

        .close-button:focus-visible {
          outline: none;
        }

      </style>
    `;

    this.shadowRoot.replaceChildren(div);
    const image = this.shadowRoot.querySelector(".zoomable");
    const lightbox = this.shadowRoot.querySelector(".image-lightbox");
    const closeButton = this.shadowRoot.querySelector(".close-button");
    
    image.addEventListener("click", () => {
      lightbox.showModal();
    });
    
    closeButton.addEventListener("click", () => {
      lightbox.close();
    });

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.close();
      }
    });
  }
}

customElements.define("image-component", ImageComponent);
