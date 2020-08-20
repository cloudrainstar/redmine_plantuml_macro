class MermaidGraph extends HTMLElement {
    constructor() {
      super();
      
      const wrapper = document.createElement('div');
  
      while (this.childNodes.length > 0) {
          wrapper.appendChild(this.childNodes[0]);
      }
      
      this.appendChild(wrapper);
      mermaid.init({ startOnLoad:true }, wrapper);
  
      const root = this.attachShadow({mode: 'open'});
      root.appendChild(wrapper);
    }
  }
  
  customElements.define('mermaid-graph', MermaidGraph);