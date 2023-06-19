// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// Edited by Sam Makuc
// Edited on: June 2023
// This is the Title Scene

// the TitleScene class represents a scene in a Phaser game that serves as the title screen
class TitleScene extends Phaser.Scene {
  constructor() {
    // call the parent of Phaser.Scene and provide a key for identification
    super({ key: 'titleScene' }); 
    // initialize variables for the background image and text elements
    this.titleSceneBackgroundImage = null;
    this.titleSceneText = null;
  }

  // sets the background colour to black
  init(data) {
    this.cameras.main.setBackgroundColor('#000000');
  }

  // loads the title scene from the assets folder
  preload() {
    console.log('Title Scene');
    this.load.image('titleSceneBackground', './assets/luigititlescreen.jpg');
    // Title image
    this.load.image('titleSceneText', './assets/superluigititle.webp');
  }

  // the title scene is created and centered here
  create(data) {
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75);
    this.titleSceneBackgroundImage.x = 1920 / 2;
    this.titleSceneBackgroundImage.y = 1080 / 2;

    this.titleSceneText = this.add.sprite(1920 / 2, (1080 / 2) + 350, 'titleSceneText').setScale(0.5);
  }

  // switches from title scene to menu scene after 7 seconds
  update(time, delta) {
    if (time > 7000) {
      // Remove the sprite from the scene
      this.titleSceneText.destroy(); 
      this.scene.switch('menuScene');
    }
  }
}

export default TitleScene;
