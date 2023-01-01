import * as RE from 'rogue-engine';
import CannonBody from '../rogue_packages/rogue-cannon/Components/CannonBody.re';

export default class Ball extends RE.Component {
  @RE.props.num() speed = 50;
  bodyComponent: CannonBody;

  awake() {
    this.bodyComponent = RE.getComponent(CannonBody, this.object3d) as CannonBody;
    this.bodyComponent.body.velocity.set(0.3, 0.7, 0);
  }

  update() {
    const velocity = this.bodyComponent.body.velocity;

    if (velocity.length() !== this.speed) {
      velocity.normalize();
      velocity.scale(this.speed, velocity);
    }
  }
}

RE.registerComponent(Ball);
