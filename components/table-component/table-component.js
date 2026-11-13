new gridjs.Grid({
  columns: ["Step","Time Taken (in minutes)"],
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


new gridjs.Grid({
  columns: [
    "Visit",
    "Date and Time",
    "Purpose",
    "Attendees",
    "Key Observations / Takeaways"
  ],
  data: [
    [
      "1",
      gridjs.html("19/08/26<br>2PM - 4PM"),
      "Understand problem context",
      "Team members, NUH staff (3 pharmacists), Prof Mark, Keith",
      "Understood how the DDS machine works and identified the main pain points."
    ],
    [
      "2",
      gridjs.html("02/09/26<br>2PM - 4PM"),
      "Conduct primary research and gain a better understanding of user experiences",
      "Preeti, Jia Shuen, NUH staff (3 pharmacists)",
      gridjs.html(`
        <ul>
          <li>Observed staff during the restocking process and understood the workflow.</li>
          <li>Identified the main pain points that staff wanted us to address.</li>
        </ul>
      `)
    ],
    [
      "3",
      gridjs.html("09/09/26<br>1PM - 3PM"),
      "Conduct primary research and gain a better understanding of user experiences",
      "Nikitha, Zhao Tian, NUH staff (2 pharmacists)",
      gridjs.html(`
        <ul>
          <li>Clarified doubts from previous visits.</li>
          <li>Gained a better understanding of possible ways to automate the process.</li>
        </ul>
      `)
    ],
    [
      "4",
      gridjs.html("08/10/26<br>2PM - 4PM"),
      "Collect feedback from users on the first proposed prototype",
      "Team members, NUH staff (3 pharmacists + 2 hospital operations team members)",
      gridjs.html(`
        <ul>
          <li>Staff expressed concerns that the vertical-drop mechanism might cause multiple blisters to fall and that excessive pressure could cause pills to pop out.</li>
          <li>Space was not a major constraint, and reasonable space could be provided based on the prototype dimensions.</li>
          <li>Discussed testing the final prototype at their site in March 2027 and providing a detailed schedule in December 2026 or January 2027.</li>
          <li>Staff lent the team a cartridge for prototype development and testing.</li>
        </ul>
      `)
    ],
    [
      "5",
      gridjs.html("30/10/26<br>11AM - 1PM"),
      "Collect feedback on the interim presentation slides and discuss potential future considerations",
      "Jia Shuen, Zhao Tian, Preeti, NUH staff",
      gridjs.html(`
        <ul>
          <li>Received positive feedback on the structure and level of detail of the interim presentation slides.</li>
          <li>Further YOLO and OCR model training was needed to achieve the target accuracy.</li>
          <li>Verification of all fed blisters was required for the prototype.</li>
          <li>Future considerations included displaying complete pill details in the desired format, short-term memory storage, audit-accessible footage from internal compartments, and automated blister arrangement into cartridges.</li>
        </ul>
      `)
    ]
  ],
  sort: false,
  search: false,
  pagination: false
}).render(document.getElementById("Table-B1"));


new gridjs.Grid({
  columns: ["Project Area", "Task", "Team Members"],
  data: [
    ["Project Coordination", "Stakeholder Communication", "Jia Shuen"],

    ["Research and Requirements", "Literature Review", "All members"],
    ["", "Survey Design and Analysis", "Nikitha"],
    ["", "Stakeholder Analysis", "Preeti"],
    ["", "DDS Data Error Analysis", "Nikitha"],

    ["YOLO + OCR Development", "Image Acquisition", "All members"],
    ["", "Image Labelling", "Nikitha, Preeti, Jia Shuen"],
    ["", "Model Training", "All members"],
    ["", "Model Analysis", "Jia Shuen"],

    ["Design Development", "Morphological Charts", "Zhao Tian, Preeti"],
    ["", "Design Evaluation and Selection", "All members"],
    ["", "3D Rendering of Optivis Prototype", "Zhao Tian"],
    ["", "Prototype Testing", "Zhao Tian"],

    ["Documentation", "Interim Report Writing", "All members"],
    ["", "Website Content Integration", "Preeti, Nikitha"]
  ],
  sort: false,
  search: false,
  pagination: false
}).render(document.getElementById("Table-D1"));

const style = document.createElement("style");

style.textContent = `
  /* Site visit table only */

  #Table-B1 th.gridjs-th,
  #Table-B1 td.gridjs-td {
    font-size: 0.95rem;
  }

  #Table-B1 td.gridjs-td:first-child,
  #Table-B1 th.gridjs-th:first-child {
    white-space: nowrap;
    min-width: 40px;
  }

  #Table-B1 th.gridjs-th:nth-child(2),
  #Table-B1 td.gridjs-td:nth-child(2) {
    min-width: 80px;
    white-space: nowrap;
  }

  #Table-B1 td.gridjs-td {
    text-align: left !important;
    vertical-align: top;
  }

  #Table-B1 th.gridjs-th {
    text-align: left !important;
  }

  #Table-B1 ul {
    margin: 0;
    padding-left: 20px;
  }

  #Table-B1 li {
    margin-bottom: 6px;
  }

  /* Team responsibilities table */
  #Table-D1 td.gridjs-td,
  #Table-D1 th.gridjs-th {
    text-align: left !important;
  }
`;

document.head.appendChild(style);


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
