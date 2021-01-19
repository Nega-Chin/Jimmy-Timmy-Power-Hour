let myDart: Dart = null
scene.setBackgroundColor(6)
info.setScore(0)
info.setLife(3)
forever(function () {
    let mySprite: Sprite = null
    myDart = darts.create(img`
        . . . 3 3 3 e e e . . . . . . . 
        . . 3 3 e e e e . . . . . . . . 
        . 3 3 e e e e e e e b b e e e . 
        . 3 e e e e b b e b 1 1 1 e e e 
        . 3 e e e b 1 1 1 f 1 8 1 1 e e 
        3 3 e e d 1 1 8 1 f 1 1 1 d . e 
        3 3 3 e e d 1 1 1 1 f 1 d d . . 
        . 3 3 e e d d d d b d b d d . . 
        3 . . d e d d d d d b d d d . . 
        3 . . d d d b 1 1 b d d d d . . 
        3 . . d d d b 1 1 d d d d d . . 
        . . . d d d 2 b b d d d d . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    myDart.throwDart()
    mySprite.setVelocity(50, 50)
})
