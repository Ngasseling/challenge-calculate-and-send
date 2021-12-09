def on_pin_pressed_p0():
    global Afstand
    Afstand += 1
    basic.show_number(Afstand)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    global Afstand, Punten_aantal
    Afstand = Afstand * 220
    Afstand = Afstand / 1000
    basic.show_number(Afstand)
    basic.pause(1000)
    basic.show_string("KM")
    Punten_aantal = Afstand * 1
    serial.write_number(Punten_aantal)
input.on_button_pressed(Button.A, on_button_pressed_a)

Punten_aantal = 0
Afstand = 0
Afstand = 0