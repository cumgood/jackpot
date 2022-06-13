function jackpot () {
    if (a1.get(LedSpriteProperty.Y) == a2.get(LedSpriteProperty.Y) && (a3.get(LedSpriteProperty.Y) == a4.get(LedSpriteProperty.Y) && a4.get(LedSpriteProperty.Y) == a5.get(LedSpriteProperty.Y))) {
        basic.showString("JACKPOT")
    }
}
input.onButtonPressed(Button.A, function () {
    b1 = true
    b2 = true
    b3 = true
    b4 = true
    b5 = true
})
let b5 = false
let b4 = false
let b3 = false
let b2 = false
let b1 = false
let a5: game.LedSprite = null
let a4: game.LedSprite = null
let a3: game.LedSprite = null
let a2: game.LedSprite = null
let a1: game.LedSprite = null
a1 = game.createSprite(0, 1)
a2 = game.createSprite(1, 2)
a3 = game.createSprite(2, 3)
a4 = game.createSprite(3, 2)
a5 = game.createSprite(4, 1)
b1 = false
b2 = false
b3 = false
b4 = false
b5 = false
basic.forever(function () {
    if (b1) {
        for (let index = 0; index < randint(20, 30); index++) {
            basic.pause(50)
            a1.change(LedSpriteProperty.Y, 1)
            if (a1.get(LedSpriteProperty.Y) == 4) {
                basic.pause(50)
                a1.set(LedSpriteProperty.Y, 0)
            }
        }
        b1 = false
    }
})
basic.forever(function () {
    if (b2) {
        for (let index = 0; index < randint(31, 40); index++) {
            basic.pause(50)
            a2.change(LedSpriteProperty.Y, 1)
            if (a2.get(LedSpriteProperty.Y) == 4) {
                basic.pause(50)
                a2.set(LedSpriteProperty.Y, 0)
            }
        }
        b2 = false
    }
})
basic.forever(function () {
    if (b3) {
        for (let index = 0; index < randint(41, 50); index++) {
            basic.pause(50)
            a3.change(LedSpriteProperty.Y, 1)
            if (a3.get(LedSpriteProperty.Y) == 4) {
                basic.pause(50)
                a3.set(LedSpriteProperty.Y, 0)
            }
        }
        b3 = false
    }
})
basic.forever(function () {
    if (b4) {
        for (let index = 0; index < randint(51, 60); index++) {
            basic.pause(50)
            a4.change(LedSpriteProperty.Y, 1)
            if (a4.get(LedSpriteProperty.Y) == 4) {
                basic.pause(50)
                a4.set(LedSpriteProperty.Y, 0)
            }
        }
        b4 = false
    }
})
basic.forever(function () {
    if (b5) {
        for (let index = 0; index < randint(61, 70); index++) {
            basic.pause(50)
            a5.change(LedSpriteProperty.Y, 1)
            if (a5.get(LedSpriteProperty.Y) == 4) {
                basic.pause(50)
                a5.set(LedSpriteProperty.Y, 0)
            }
        }
        b5 = false
    }
    jackpot()
})
