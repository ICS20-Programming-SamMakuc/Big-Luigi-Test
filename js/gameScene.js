// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// Edited by Sam Makuc
// Edited on: June 2023
// This is the Title Scene

// the GameScene class represents a scene in a Phaser game that serves as the game screen
class GameScene extends Phaser.Scene {
  constructor () {
    // call the parent of Phaser.Scene and provide a key for identification
    super({ key: 'gameScene' }); 
  }

 // sets the background colour to black
  init(data) {
    this.cameras.main.setBackgroundColor('#000000');
  }

  // loads images from the assets folder
  preload() {
    console.log('Title Scene');
    this.load.image('gameSceneBackground', './assets/GameSceneBackground.jpg');
    this.load.image('luigi', 'assets/LuigiImage.png');
    this.load.image('missile', 'assets/LuigiLightning.png')
  }

  create() {
    // the game scene background is created and centered
    this.background = this.add.image(0, 0, 'gameSceneBackground').setScale(2.0);
    this.background.setOrigin(0, 0);

    // luigi and the lightning are created here and put into the game
    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'luigi').setScale(0.5);
    this.missileGroup = this.physics.add.group(); // Initialize the missile group
    this.missle = this.physics.add.sprite('luigi').setScale(0.3)
  }

  
  update(time, delta) {
    // this is what gets the input for luigi to move
    const keySpaceObj = this.input.keyboard.addKey('SPACE');
    const keyLeftObj = this.input.keyboard.addKey('LEFT');
    const keyRightObj = this.input.keyboard.addKey('RIGHT');

    // makes luigi move left with left arrow key
    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15;
      if (this.ship.x < 0) {
        this.ship.x = 0;
      }
    }
    // makes luigi move right with right arrow key
    if (keyRightObj.isDown === true) {
      this.ship.x += 15;
      if (this.ship.x > 1920) {
        this.ship.x = 1920;
      }
    }

    // makes luigi shoot lightning with space bar
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        this.fireMissile = true;
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile');
        aNewMissile.body.velocity.y = -200;
        this.missileGroup.add(aNewMissile);
      }
    }
    // makes luigi shoot lightning with down arrow key
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false;
    }
  }

  end() {}
}

export default GameScene;
