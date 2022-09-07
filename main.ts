controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    info.startCountdown(10)
    mySprite.setImage(assets.image`A static Down`)
    projectile = sprites.createProjectileFromSprite(assets.image`Big Star`, mySprite, randint(-100, 100), randint(-50, -100))
})
info.onCountdownEnd(function () {
    game.over(false, effects.confetti)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`TheStage`)
game.splash("Press A Too Start!")
mySprite = sprites.create(assets.image`A static`, SpriteKind.Player)
