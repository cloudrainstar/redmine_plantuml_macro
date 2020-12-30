// This file is unused, the contents are minified and placed into lib/plantuml_macro_hook.rb
class PlantUMLGraph extends HTMLElement {
  static get observedAttributes() {
    return ['url'];
  }

  constructor() {
    super();
    const t = document.createElement("div");
    var e = new XMLHttpRequest();
    e.open("POST", this.getAttribute('url'), !0),
      (e.onload = function (n) {
        4 === e.readyState &&
          (200 === e.status
            ? (t.innerHTML = e.responseText)
            : (t.innerHTML = e.statusText));
      }),
      e.send(this.textContent),
      this.attachShadow({ mode: "open" }).appendChild(t);
  }

  get url() {
    return this.getAttribute('url');
  }

  set url(val) {
    this.setAttribute('url', val);
  }

}
customElements.define("plantuml-graph", PlantUMLGraph);
