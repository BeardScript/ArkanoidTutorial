import * as RE from 'rogue-engine';
import CannonBody from '../rogue_packages/rogue-cannon/Components/CannonBody.re';

export default class Brick extends RE.Component {
  static count = 0;
  static onDestroy = () => {};

  bodyComponent: CannonBody;

  awake() {
    Brick.count += 1;
  }

  start() {
    this.bodyComponent = RE.getComponent(CannonBody, this.object3d) as CannonBody;

    this.bodyComponent.onCollide(() => {
      this.object3d.parent?.remove(this.object3d);
      Brick.count -= 1;
      Brick.onDestroy();
    });
  }
}

RE.registerComponent(Brick);
