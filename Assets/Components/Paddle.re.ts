import * as RE from 'rogue-engine';
import CannonBody from '../rogue_packages/rogue-cannon/Components/CannonBody.re';

export default class Paddle extends RE.Component {
  @RE.props.num() speed = 6;
  @RE.props.num() xLimit = 25;

  bodyComponent: CannonBody;

  private actualXLimit: number

  awake() {
    this.actualXLimit = this.xLimit - this.object3d.scale.x / 2;
    this.bodyComponent = RE.getComponent(CannonBody, this.object3d) as CannonBody;
  }

  update() {
    const monvementX = RE.Input.touch.touches[0] ? RE.Input.touch.touches[0].deltaX : RE.Input.mouse.movementX;

    this.bodyComponent.body.position.x += monvementX * this.speed * RE.Runtime.deltaTime;

    if (this.bodyComponent.body.position.x < -this.actualXLimit) {
      this.bodyComponent.body.position.x = -this.actualXLimit;
    }

    else if (this.bodyComponent.body.position.x > this.actualXLimit) {
      this.bodyComponent.body.position.x = this.actualXLimit;
    }
  }
}

RE.registerComponent(Paddle);
