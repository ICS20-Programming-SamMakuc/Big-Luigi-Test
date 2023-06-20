// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// Edited by Sam Makuc
// Edited on: June 2023
// This is the Menu Scene

// the MenuScene class represents a scene in a Phaser game that serves as the menu screen
class MenuScene extends Phaser.Scene {
  constructor () {
    // call the parent of Phaser.Scene and provide a key for identification
    super({ key: 'menuScene' }); 
    // initialize variables for the background image and text elements
    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  // sets the background colour to grey
  init (data) {
    this.cameras.main.setBackgroundColor('#808080')
  }

  // loads the menu scene from the assets folder
  preload () {
    console.log('Menu Scene')
    this.load.image('menuSceneBackground', 'assets/MenuSceneBackground.webp')
    this.load.image('startButton', 'assets/startbutton.png')
  }

  // the menu scene is created and centered here
  create (data) {
  this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground').setScale(2.0)
  this.menuSceneBackgroundImage.x = 1920 / 2
  this.menuSceneBackgroundImage.y = 1080 / 2

  // puts the start button the bottom middle of the screen
  const buttonX = this.cameras.main.centerX;
  const buttonY = this.cameras.main.height - 160; 

  this.startButton = this.add.sprite(buttonX, buttonY, 'startButton').setScale(0.5);
  this.startButton.setInteractive({ useHandCursor: true })
  this.startButton.on('pointerdown', () => this.clickButton())
}

  update (time, delta) {

  }

  // when user clicks the start button it goes to the game scene
  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene
