import * as RE from 'rogue-engine';
import * as THREE from 'three';
import Ball from './Ball.re';
import Brick from './Brick.re';
import Pit from './Pit.re';

export default class GameLogic extends RE.Component {
  @RE.props.prefab() ballPrefab: RE.Prefab;
  @RE.props.prefab() brickWallPrefab: RE.Prefab;
  @RE.props.prefab() paddlePrefab: RE.Prefab;
  @RE.props.num() lives: number;

  currentLives = 0;

  ball: THREE.Object3D;
  brickWall: THREE.Object3D;
  paddle: THREE.Object3D;

  ballComponent: Ball;

  startGameUI: HTMLDivElement;
  gameOverUI: HTMLDivElement;
  winGameUI: HTMLDivElement;
  inGameUI: HTMLDivElement;
  livesLabel: HTMLDivElement;

  start() {
    this.initUI();

    Pit.onHit = () => this.onHitPit();

    Brick.onDestroy = () => {
      if (Brick.count === 0 && this.currentLives > 0) {
        this.winGame();
      }
    }
  }

  async initUI() {
    const htmlPath = RE.getStaticPath("ui.html");

    const gameUI = await (await fetch(htmlPath)).text();

    RE.Runtime.uiContainer.innerHTML = gameUI;

    this.startGameUI = document.getElementById("start-game-ui") as HTMLDivElement;
    this.gameOverUI = document.getElementById("game-over-ui") as HTMLDivElement;
    this.winGameUI = document.getElementById("win-game-ui") as HTMLDivElement;
    this.inGameUI = document.getElementById("in-game-ui") as HTMLDivElement;

    this.livesLabel = document.getElementById("lives-label") as HTMLDivElement;

    const startGameButton = document.getElementById("start-game-button") as HTMLDivElement;
    const retrytButton = document.getElementById("retry-button") as HTMLDivElement;
    const restartButton = document.getElementById("restart-button") as HTMLDivElement;

    startGameButton.onclick = () => this.onStartGame();
    retrytButton.onclick = () => this.onStartOver();
    restartButton.onclick = () => this.onStartOver();

    startGameButton.ontouchstart = () => this.onStartGame();
    retrytButton.ontouchstart = () => this.onStartOver();
    restartButton.ontouchstart = () => this.onStartOver();

    this.startGameUI.style.display = "block";
  }

  setLives(lives: number) {
    this.livesLabel.textContent = "Lives: " + lives;
  }

  onHitPit() {
    this.currentLives -= 1;

    if (this.currentLives === 0) {
      return this.endGame();
    }

    this.setLives(this.currentLives);
    this.ballComponent.bodyComponent.body.position.y = -31;
  }

  onStartGame() {
    this.startGameUI.style.display = "none";
    this.inGameUI.style.display = "block";
    this.startGame();
  }

  onStartOver() {
    this.gameOverUI.style.display = "none";
    this.winGameUI.style.display = "none";
    this.inGameUI.style.display = "block";
    this.startGame();
  }

  startGame() {
    this.currentLives = this.lives;
    this.setLives(this.currentLives);

    this.ball = this.ballPrefab.instantiate();
    this.brickWall = this.brickWallPrefab.instantiate();
    this.paddle = this.paddlePrefab.instantiate();

    this.ballComponent = RE.getComponent(Ball, this.ball) as Ball;

    this.paddle.position.y = -32;
    this.ball.position.y = -31;

    RE.Input.mouse.lock();
  }

  endGame() {
    RE.Input.mouse.unlock();

    this.inGameUI.style.display = "none";
    this.gameOverUI.style.display = "block";

    RE.Runtime.scene.remove(this.ball);
    RE.Runtime.scene.remove(this.brickWall);
    RE.Runtime.scene.remove(this.paddle);
  }
  
  winGame() {
    RE.Input.mouse.unlock();

    this.inGameUI.style.display = "none";
    this.winGameUI.style.display = "block";

    RE.Runtime.scene.remove(this.ball);
    RE.Runtime.scene.remove(this.brickWall);
    RE.Runtime.scene.remove(this.paddle);
  }
}

RE.registerComponent(GameLogic);
