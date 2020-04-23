class Tooltip extends HTMLElement { 
    constructor() {
        super();
        this._toolTipContainer;
        this._tooltipIcon;
        this._tooltipText = 'Some dummy text';
        this.attachShadow({mode: 'open'})
        const template = document.querySelector('#tooltip-template');
        //this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.innerHTML = `
        <style>
        
            div {
                background: black;
                color: white;
                position: absolute;
                z-index: 10;

            }
            :host(.custom-style) {
                background: var(--color-primary, #ccc)
            }
            :host-context(div) {
                font-weight: bold;
                
            }
            .highlight {
                background: #eee;
                color: yello
            }
            ::slotted(.highlight){
                border-bottom: 1px solid black
            }
        </style>
        <slot></slot><span>(?)</span>
        `
    }
    connectedCallback() { 
        if(this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text')
        }
        this._tooltipIcon = this.shadowRoot.querySelector('span')
        this._tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this))
        this._tooltipIcon.addEventListener('mouseleave', this._hideTooltip  )
        this.shadowRoot.appendChild(this._tooltipIcon)
        this.style.position = 'relative'
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
        if(oldValue === newValue) {
            return
        }
        if(name === 'text') {
            this._tooltipText = newValue
        }
    }

    static get observedAttributes() {
        return ['text']
    }

    disconnectedCallback() {
        this._tooltipIcon.removeEventListener('mouseenter', this._showTooltip)
        this._tooltipIcon.removeEventListener('mouseleave', this._hideTooltip)
      
    }

    _showTooltip() {
        this._toolTipContainer = document.createElement('div');
        this._toolTipContainer.textContent = this._tooltipText;
        this.shadowRoot.appendChild(this._toolTipContainer)
    }

    _hideTooltip() {
        this.shadowRoot.removeChild(this._toolTipContainer)
    }
}

// create element with tag name am-tooltip with Tooltip instance
customElements.define('am-tooltip', Tooltip)