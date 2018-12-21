import { Component } from '@stencil/core'

@Component({
  tag: 'test-text',
  styleUrl: 'test-text.css',
  shadow: true
})

export class TestText {
  render() {
    return [
      <p>If you see a monospace font, it’s failed.</p>,
      <p>If you see a chunky display font, it’s working.</p>
    ]
  }
}
