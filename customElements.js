(function fragments() {
  
    class CountDisplay extends HTMLElement {
        
      static get observedAttributes() {
          console.log("in observedAtributes")
        return ['count'];
      }
      connectedCallback() {
        console.log("connected callback");
        const count = this.getAttribute('count');
        this.log('connected', count);
        this.render();
      }
      attributeChangedCallback(attr, oldValue, newValue) {
        this.log('attributeChanged', attr, newValue);
        this.render();
      }
      render() {
        console.log("in count render");
        const count = this.getAttribute('count');
        // const reco = recos[sku] || [];
        this.innerHTML = `
          <h3>Counter Element</h3>
          ${count}
        `;
      }
      disconnectedCallback() {
        const count = this.getAttribute('count');
        this.log('disconnected', count);
      }
      log(...args) {
        console.log('🖼️ green-recos', ...args);
      }
    }
    window.customElements.define('count-display', CountDisplay);
  }());