What is Web component 1. Custom HTML Element - Register your own HTML tags 2. Shadow Dom - Manage a seperate DOM node tree for your HTML elements 3. Template & slot

Why Web component

1. Encapsulate logic + UI - Easy to understand, Easy to maintain.
2. Re-usable across page -  Use it just like a normal Html element, Don't worry about overlapping logic, write logic + ui only once
3. Re-usable between Apps/Projects
Type of custom element

1. Autonomous Elements
2. Extented Built-in Elements 
Web component Lifecycle 1. Element created - create element in memory and not part of real DOM constructor() - Basic Initialization

2. Element attached to Dom
     connectedCallback() - DOM initialization - add and access the dom

3. Element detached from DOM 
    disconnectedCallback() - cleanup Work

4. Observed Attribute update
    attributeChangesCallback() - update data + DOM 
Shadow Dom Custom component should have its own DOM tree, which is not effected by the normal DOM tree. DOM tree is not effected by global style also

Slot Add content inside templete which is b/w custom element. Slot is not part of shadow dom, so style added in component is not applied to the slot. To style a slot inside web component we need to use a special psudeo selector ::slotted(span)

To style complete element or host element we need to use :host pseduo selector

//listen to attribute change attributeChangedCallback(name, oldValue, newValue) { console.log(name, oldValue, newValue) }

//register the change attribute static get observedAttributes() { return ['text'] }
