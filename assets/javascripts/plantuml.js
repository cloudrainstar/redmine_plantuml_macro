class PlantUMLGraph extends HTMLElement {
  static get observedAttributes() {
    return ["url", "method"];
  }

  constructor() {
    super();
    const t = document.createElement("div");
    var e = new XMLHttpRequest();
    if (this.getAttribute("method") === "GET") {
      const url =
        this.getAttribute("url") +
        window.plantumlEncoder.encode(this.textContent);
      e.open("GET", url, !0);
    } else {
      e.open("POST", this.getAttribute("url"), !0);
    }
    e.onload = function (n) {
      4 === e.readyState &&
        (200 === e.status
          ? (t.innerHTML = e.responseText)
          : (t.innerHTML = e.statusText));
    };
    if (this.getAttribute("method") === "GET") {
      e.send();
    } else {
      e.send(this.textContent);
    }
    this.attachShadow({ mode: "open" }).appendChild(t);
  }

  get url() {
    return this.getAttribute("url");
  }

  set url(val) {
    this.setAttribute("url", val);
  }

  get method() {
    return this.getAttribute("method");
  }

  set method(val) {
    if (val === "POST") {
      this.setAttribute("method", "POST");
    } else {
      this.setAttribute("method", "GET");
    }
  }
}
customElements.define("plantuml-graph", PlantUMLGraph);
