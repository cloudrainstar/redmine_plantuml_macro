class MermaidGraph extends HTMLElement {
    constructor() {
      super();
      const wrapper = document.createElement('div');
      mermaid.mermaidAPI.render('graphDiv', this.childNodes[0].textContent, (svgGraph) => {wrapper.innerHTML = svgGraph});
      const root = this.attachShadow({mode: 'open'});
      root.appendChild(wrapper);
    }
  }
  
  customElements.define('mermaid-graph', MermaidGraph);
