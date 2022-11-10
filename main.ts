input.onButtonPressed(Button.A, function () {
    Player_1.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player_1.change(LedSpriteProperty.X, 1)
})
let Player_1: game.LedSprite = null
Player_1 = game.createSprite(2, 4)
let COIN = game.createSprite(randint(0, 4), 0)
loops.everyInterval(1000, function () {
    basic.pause(1000)
    COIN.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    if (COIN.isTouching(Player_1)) {
        COIN.delete()
        game.addScore(1)
    } else {
    	
    }
})
loops.everyInterval(5000, function () {
	
})
