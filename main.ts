input.onButtonPressed(Button.B, function () {
    taste_b_gedrueckt = 1
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
})
let taste_b_gedrueckt = 0
taste_b_gedrueckt = 0
while (taste_b_gedrueckt == 0) {
    basic.showIcon(IconNames.Square)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
}
basic.forever(function () {
	
})
