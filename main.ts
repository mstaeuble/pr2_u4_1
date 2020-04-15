input.onButtonPressed(Button.B, function () {
    taste_b_gedrueckt = 1
})
let taste_b_gedrueckt = 0
taste_b_gedrueckt = 0
while (taste_b_gedrueckt == 0) {
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
basic.forever(function () {
	
})
