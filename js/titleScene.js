// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// Edited by Sam Makuc
// Edited on: June 2023
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
  }

  // sets the background colour to black
  init (data) {
    this.cameras.main.setBackgroundColor('#000000')
  }

  // loads the title scene from the assets folder
  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', './assets/luigititlescreen.jpg')
    this.load.image('titleSceneText', './assets/superluigititle.webp');
  }

  // the title scene is created and centered here
  create(data) {
  this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75);
  this.titleSceneBackgroundImage.x = 1920 / 2;
  this.titleSceneBackgroundImage.y = 1080 / 2;

  this.titleSceneImage = this.add.sprite(1920 / 2, (1080 / 2) + 350, 'titleSceneText').setScale(0.5);
}

  // switches from title scene to menu scene after 7 seconds
  update (time, delta) {
    if (time > 7000) {
      this.scene.switch('menuScene')
    }
  }
}

export default TitleScene
