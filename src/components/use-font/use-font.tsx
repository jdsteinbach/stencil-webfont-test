import { Component } from '@stencil/core'

@Component({
  tag: 'use-font',
  styleUrl: 'use-font.css',
  shadow: false
})

export class UseFont {
  render() {
    return <test-text />
  }
}
