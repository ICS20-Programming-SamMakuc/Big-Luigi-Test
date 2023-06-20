// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// Edited by Sam Makuc
// Edited on: June 2023
// This is the Splash Scene

// the SplashScene class represents a scene in a Phaser game that serves as the splash screen
class SplashScene extends Phaser.Scene {
  constructor () {
    // call the parent of Phaser.Scene and provide a key for identification
    super({ key: 'splashScene' }); 
    // initialize variables for the background image and text elements
    this.splashSceneBackgroundImage = null
  }

  // sets the background colour to a shade of blue
  init (data) {
    this.cameras.main.setBackgroundColor('#004AFF')
  }

  // loads the splash scene from the assets folder
  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', 'assets/splashSceneImage.png')
  }

  // the splash scene is created and centered here
  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  // switches from splash scene to title scene after 4 seconds
  update (time, delta) {
    if (time > 4000) {
      this.scene.switch('titleScene')
    }
  }
}

export default SplashScene