// Global Phaser

// Define the configuration object
const config = {
  type: Phaser.AUTO,       // Specifies the renderer type (Phaser.AUTO automatically chooses between WebGL or Canvas)
  width: 1920,             // Sets the width of the game canvas to 1920 pixels
  height: 1080,            // Sets the height of the game canvas to 1080 pixels
  backgroundColour: 0x5f6e7a // Sets the background color of the game canvas to a hexadecimal color value (0x5f6e7a)
};

// The config object can be used to create a Phaser game instance with the specified settings.
const game = new Phaser.Game(config);

console.log(game);
