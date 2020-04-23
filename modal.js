class Modal extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`
            <style>
                #backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: rgba(0,0,0,0.75);
                    z-index: 10;
                    display: none
                }
                :host([opened]) #backdrop {
                    display: block
                }
                :host([opened]) #modal {
                    display: flex
                }
                #modal {
                    position: fixed;
                    top: 15vh;
                    left: 25%;
                    width: 50%;
                    background: white;
                    z-index: 100;
                    border-radius: 4px;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    display: none
                }
                #actions {
                    border-top: 1px solid #ccc;
                    padding: 1rem;
                    display: flex;
                    justify-content: flex-end;
                }
                header{
                    padding: 1rem
                }

                header h1 {
                    font-size: 1.25rem
                }

                #actions button{
                    margin: 0 0.25rem;
                    width: 20%;
                    padding: 5px;
                    border-radius: 4px
                }

                #main {
                    padding: 1rem
                }
            </style>
            <div id="backdrop"></div>
            <div id="modal">
                <header>
                    <slot name="title">
                        <h1>Header</h2>
                    </slot>
                </header>
                <section id="main">
                    <slot name="body"></slot>
                </section>
                <section id="actions">
                    <button>Cancel</button>
                    <button>Okay</button>
                </section>
            </div>
        `
    }

    open() {
        this.setAttribute('opened', '')
    }

    // attributeChangedCallback(name, oldVal, newVal) {
    //     if(name === 'opened') {
    //         if(this.hasAttribute('opened')) {
    //             this.shadowRoot.querySelector('#backdrop').style.display = 'block'
    //             this.shadowRoot.querySelector('#modal').style.display = 'flex'
    //         }
    //     }
    // }
    // static get observedAttributes() {
    //     return ['opened']
    // }
}

customElements.define('am-modal', Modal)