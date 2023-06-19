// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// Edited by Sam Makuc
// Edited on: June 2023
// This is the Title Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })
  }

  // sets the background colour to black
  init (data) {
    this.cameras.main.setBackgroundColor('#000000')
  }

  // loads images from the assets folder
  preload () {
    console.log('Title Scene')
    this.load.image('gameSceneBackground', './assets/GameSceneBackground.jpg')
    this.load.image('luigi', 'assets/LuigiImage.png')
  }

  // the menu scene is created and centered here
   create () {
    this.background = this.add.image(0, 0, 'gameSceneBackground').setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'luigi').setScale(0.5)

}

   update (time, delta) {
    // called 60 times a second
    const keySpaceObj = this.input.keyboard.addKey('SPACE') // Get key object
    const keyLeftObj = this.input.keyboard.addKey('LEFT') // Get key object
    const keyRightObj = this.input.keyboard.addKey('RIGHT') // Get key object

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }
    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire missile
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
        aNewMissile.body.velocity.y = -200
        this.missileGroup.add(aNewMissile)
        this.sound.play('laser')
      }
    }
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    this.missileGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 50) {
        item.destroy()
      }
    })

export default GameScene
