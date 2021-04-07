import { Component, Host, h, State } from '@stencil/core';
export class JrReader {
  constructor() {
    this.left = 0;
  }
  logMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const foo = event.clientX < rect.left ? 0 : event.clientX - rect.left;
    const distanceInPercent = Math.round((foo / rect.width) * 100);
    console.log('onMouseMove', distanceInPercent);
  }
  render() {
    return (h(Host, null,
      h("div", { class: "move back" }, "<<"),
      h("div", { class: "text" },
        h("p", { style: { translateX: `${this.left}%` } }, "Lesen bezeichnet im engeren Sinn das visuelle oder auch taktile Umsetzen von Schriftzeichen in Lautsprache: Buchstabenlaute, Sprechsilben, W\u00F6rter, S\u00E4tze und ganze Textabschnitte. Lesen wird auch beim Umgang mit nicht-linearen Texten, also z.B. Karten, technischen Zeichnungen, Fahrpl\u00E4nen, graphischen Darstellungen, Schaltpl\u00E4nen, Musiknoten und mathematischen Formeln gebraucht. Im weiteren Sinn versteht man darunter die Rekonstruktion der im Text kodierten Bedeutungsinhalte und den Aufbau einer mentalen Repr\u00E4sentation dieser Inhalte in einem sog. Situations- oder mentalen Modell. (s.a. Textinterpretation)")),
      h("div", { class: "move forward", onMouseMove: (event) => this.logMouseMove(event) }, ">>")));
  }
  static get is() { return "jr-reader"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["jr-reader.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["jr-reader.css"]
  }; }
  static get states() { return {
    "left": {}
  }; }
}
