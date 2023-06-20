class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' });
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#000000');
  }

  preload() {
    console.log('Title Scene');
    this.load.image('gameSceneBackground', './assets/GameSceneBackground.jpg');
    this.load.image('luigi', 'assets/LuigiImage.png');
    this.load.image('missile', 'assets/LuigiLightning.png');
  }

  create() {
    this.background = this.add.image(0, 0, 'gameSceneBackground').setScale(2.0);
    this.background.setOrigin(0, 0);

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'luigi').setScale(0.5);
    this.missileGroup = this.physics.add.group(); // Initialize the missile group
    this.missle = this.physics.add.sprite('luigi').setScale(0.3)
  }

  update(time, delta) {
    const keySpaceObj = this.input.keyboard.addKey('SPACE');
    const keyLeftObj = this.input.keyboard.addKey('LEFT');
    const keyRightObj = this.input.keyboard.addKey('RIGHT');

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15;
      if (this.ship.x < 0) {
        this.ship.x = 0;
      }
    }
    if (keyRightObj.isDown === true) {
      this.ship.x += 15;
      if (this.ship.x > 1920) {
        this.ship.x = 1920;
      }
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        this.fireMissile = true;
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile');
        aNewMissile.body.velocity.y = -200;
        this.missileGroup.add(aNewMissile);
      }
    }
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false;
    }
  }

  end() {}
}

export default GameScene;


