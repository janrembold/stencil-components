import { r as registerInstance, h, e as Host } from './index-7341b105.js';

const jrReaderCss = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;justify-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid grey;max-width:900px}.move{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-wrap:nowrap;flex-wrap:nowrap;text-align:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.forward{display:block;-webkit-box-flex:0;-ms-flex:0 0 200px;flex:0 0 200px}.back{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px}.text{position:relative;-webkit-box-flex:2;-ms-flex-positive:2;flex-grow:2;font-size:30px;overflow:hidden;height:60px;border-left:1px solid grey;border-right:1px solid grey}.text>p{position:absolute;top:0;left:0;padding:10px;margin:0;width:100%;white-space:nowrap}";

const JrReader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.left = 0;
  }
  logMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const foo = event.clientX < rect.left ? 0 : event.clientX - rect.left;
    const distanceInPercent = Math.round((foo / rect.width) * 100);
    console.log('onMouseMove', distanceInPercent);
  }
  render() {
    return (h(Host, null, h("div", { class: "move back" }, "<<"), h("div", { class: "text" }, h("p", { style: { translateX: `${this.left}%` } }, "Lesen bezeichnet im engeren Sinn das visuelle oder auch taktile Umsetzen von Schriftzeichen in Lautsprache: Buchstabenlaute, Sprechsilben, W\u00F6rter, S\u00E4tze und ganze Textabschnitte. Lesen wird auch beim Umgang mit nicht-linearen Texten, also z.B. Karten, technischen Zeichnungen, Fahrpl\u00E4nen, graphischen Darstellungen, Schaltpl\u00E4nen, Musiknoten und mathematischen Formeln gebraucht. Im weiteren Sinn versteht man darunter die Rekonstruktion der im Text kodierten Bedeutungsinhalte und den Aufbau einer mentalen Repr\u00E4sentation dieser Inhalte in einem sog. Situations- oder mentalen Modell. (s.a. Textinterpretation)")), h("div", { class: "move forward", onMouseMove: (event) => this.logMouseMove(event) }, ">>")));
  }
};
JrReader.style = jrReaderCss;

export { JrReader as jr_reader };
