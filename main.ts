input.onPinPressed(TouchPin.P0, function () {
    Afstand += 1
    basic.showNumber(Afstand)
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(100)
    basic.showString("PUNTEN")
    serial.writeLine("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    Afstand = Afstand * 220
    Afstand = Afstand / 1000
    basic.showNumber(Afstand)
    basic.pause(200)
    basic.showString("KM")
    Punten_aantal = Math.trunc(Afstand * 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Punten_aantal)
    Punten_balans = Punten_balans + Punten_aantal
    radio.sendNumber(Punten_aantal)
    basic.pause(100)
    Afstand = 0
    Punten_aantal = 0
})
let Punten_balans = 0
let Punten_aantal = 0
let Afstand = 0
radio.setGroup(125)
Afstand = 0
Punten_aantal = 0
Punten_balans = Punten_balans + Punten_aantal
