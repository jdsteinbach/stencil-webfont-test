import { Component } from '@stencil/core'

@Component({
  tag: 'use-font',
  styleUrl: 'use-font.css',
  shadow: false
})

export class UseFont {
  render() {
    return [
      <p>If you see a monospace font, it’s failed.</p>,
      <p>If you see a chunky display font, it’s working.</p>
    ]
  }
}
