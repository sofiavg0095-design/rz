radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        R1 += 1 * SENSIBILIDAD
        R2 += 1 * SENSIBILIDAD
    }
    if (receivedNumber == -1) {
        R1 += -1 * SENSIBILIDAD
        R2 += -1 * SENSIBILIDAD
    }
    if (receivedNumber == 0) {
        R2 += 0
        R2 += 0
    }
    if (receivedNumber == 2) {
        R1 += -5 * SENSIBILIDAD
    }
    if (receivedNumber == -2) {
        R1 += 5 * SENSIBILIDAD
    }
})
let SENSIBILIDAD = 0
radio.setGroup(1)
let R1 = 0
let R2 = 0
SENSIBILIDAD = 40
basic.forever(function () {
    if (R1 == R2) {
        if (R1 == 0) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . # . #
                . # . # .
                . . # . .
                `)
        }
        if (R1 > 0) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . # . # .
                . . # . .
                `)
        }
    }
    if (R1 < R2) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    }
    if (R1 > R2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    }
    cuteBot.motors(R1 / 10, R2 / 10)
})
