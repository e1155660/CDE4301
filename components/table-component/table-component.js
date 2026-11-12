new gridjs.Grid({
  columns: ["Step","Average Time Taken (in minutes)"],
  data: [
    ["Step 1", 5.52],
    ["Step 2", 1.25],
    ["Step 3", 1.32],
    ["Total Time Taken", 8.09],
  ],
}).render(document.getElementById("Table-1"));


new gridjs.Grid({
  columns: ["Configuration", "Description", "Purpose"],
  data: [
    [
      "Whole-image OCR",
      "OCR processes the complete blister image.",
      "Provides a baseline without YOLO localisation."
    ],
    [
      "1-class YOLO + OCR",
      "Annotated regions are detected as one general text class.",
      "Tests general text localisation."
    ],
    [
      "2-class YOLO + OCR",
      "Batch numbers and expiry dates are detected as separate classes.",
      "Tests field-specific localisation."
    ],
    [
      "3-class YOLO + OCR",
      "Batch numbers, expiry dates and Pill Details are detected as separate classes.",
      "Tests whether distinguishing Pill Details helps route relevant fields."
    ],
  ],
}).render(document.getElementById("Table-2"));

new gridjs.Grid({
  columns: ["Selection criterion", "Vertical drop", "Horizontal conveyor"],
  data: [
    ["Verification accuracy", "−", "+"],
    ["Singulation reliability", "−", "0"],
    ["Packaging safety", "−", "0"],
    ["Ease of operation", "0", "+"],
    ["Error Proof", "−", "+"],
    ["Implementation feasibility", "0", "0"],
    ["Sum +'s", 0, 3],
    ["Sum −'s", 4, 0],
    ["Sum 0's", 1, 2],
    ["Net Score", -4, 3],
    ["Continue", "No", "Yes"],
  ],
}).render(document.getElementById("Table-3"));


class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
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
    div.innerHTML = `
    <sub>${this.subtitle}</sub>
    <slot></slot>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
      display: block;
      font-size: 1rem;
      font-style: italic;
      margin-bottom: 10px;
}
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
