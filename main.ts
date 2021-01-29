input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendString(message)
    message = ""
})
input.onButtonPressed(Button.A, function () {
    if (index >= 1) {
        index += -1
    } else {
        index = 25
    }
    current_char = text_list[index]
    basic.showString("" + (current_char))
})
input.onButtonPressed(Button.AB, function () {
    message = "" + message + current_char
})
radio.onReceivedString(function (receivedString) {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    index += 1
    if (index >= text_list.length) {
        index = 0
    }
    current_char = text_list[index]
    basic.showString("" + (current_char))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(message)
})
let message = ""
let current_char = ""
let index = 0
let text_list: string[] = []
radio.setGroup(1)
text_list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
index = 24
current_char = text_list[index]
basic.showString("" + (current_char))
basic.forever(function () {
	
})
