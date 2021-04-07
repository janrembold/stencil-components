import { Component, Host, h, State } from '@stencil/core'

@Component({
  tag: 'jr-reader',
  styleUrl: 'jr-reader.scss',
  shadow: true,
})
export class JrReader {
  @State() left: number = 0

  logMouseMove(event: MouseEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const foo = event.clientX < rect.left ? 0 : event.clientX - rect.left
    const distanceInPercent = Math.round((foo / rect.width) * 100)
    console.log('onMouseMove', distanceInPercent)
  }

  render() {
    return (
      <Host>
        <div class="move back">&lt;&lt;</div>
        <div class="text">
          <p style={{ translateX: `${this.left}%` }}>
            Lesen bezeichnet im engeren Sinn das visuelle oder auch taktile Umsetzen von
            Schriftzeichen in Lautsprache: Buchstabenlaute, Sprechsilben, Wörter, Sätze und ganze
            Textabschnitte. Lesen wird auch beim Umgang mit nicht-linearen Texten, also z.B. Karten,
            technischen Zeichnungen, Fahrplänen, graphischen Darstellungen, Schaltplänen, Musiknoten
            und mathematischen Formeln gebraucht. Im weiteren Sinn versteht man darunter die
            Rekonstruktion der im Text kodierten Bedeutungsinhalte und den Aufbau einer mentalen
            Repräsentation dieser Inhalte in einem sog. Situations- oder mentalen Modell. (s.a.
            Textinterpretation)
          </p>
        </div>
        <div class="move forward" onMouseMove={(event: MouseEvent) => this.logMouseMove(event)}>
          &gt;&gt;
        </div>
      </Host>
    )
  }
}
