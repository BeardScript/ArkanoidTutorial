import * as RE from 'rogue-engine';
import CannonBody from '../rogue_packages/rogue-cannon/Components/CannonBody.re';

export default class Pit extends RE.Component {
  static onHit = () => {};

  bodyComponent: CannonBody;

  start() {
    this.bodyComponent = RE.getComponent(CannonBody, this.object3d) as CannonBody;

    this.bodyComponent.onCollide((event) => {
      const otherBody = CannonBody.findByBody(event.other);

      if (otherBody?.object3d.name === "Ball") {
        Pit.onHit();
      }
    });
  }
}

RE.registerComponent(Pit);
