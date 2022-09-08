import { Component, Prop, h, Host, Watch } from '@stencil/core';

@Component({
  tag: 'nice-cheese',
  shadow: true,
})
export class AMessage {
  /** Message text */
  @Prop({reflect: true}) message = 'loading...';

  @Watch('message')
  handleMessage(newVal, oldVal) {
    console.log(newVal, oldVal)
  }

  /** Dark theme */
  @Prop() dark = false;

  componentDidRender() {
    console.log(this.message);
  }

  render() {
    return (
      <Host>{this.message} hello <slot /></Host>
    );
  }
}
