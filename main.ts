enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    nbLettreActu += 1
    if (nbLettreActu == 1) {
        basic.showString("A")
    } else if (nbLettreActu == 2) {
        basic.showString("B")
    } else if (nbLettreActu == 3) {
        basic.showString("C")
    } else if (nbLettreActu == 4) {
        basic.showString("D")
    } else if (nbLettreActu == 5) {
        basic.showString("E")
    } else if (nbLettreActu == 6) {
        basic.showString("F")
    } else if (nbLettreActu == 7) {
        basic.showString("G")
    } else if (nbLettreActu == 8) {
        basic.showString("H")
    } else if (nbLettreActu == 9) {
        basic.showString("I")
    } else if (nbLettreActu == 10) {
        basic.showString("J")
    } else if (nbLettreActu == 11) {
        basic.showString("K")
    } else if (nbLettreActu == 12) {
        basic.showString("L")
    } else if (nbLettreActu == 13) {
        basic.showString("M")
    } else if (nbLettreActu == 14) {
        basic.showString("N")
    } else if (nbLettreActu == 15) {
        basic.showString("O")
    } else if (nbLettreActu == 16) {
        basic.showString("P")
    } else if (nbLettreActu == 17) {
        basic.showString("Q")
    } else if (nbLettreActu == 18) {
        basic.showString("R")
    } else if (nbLettreActu == 19) {
        basic.showString("S")
    } else if (nbLettreActu == 20) {
        basic.showString("T")
    } else if (nbLettreActu == 21) {
        basic.showString("U")
    } else if (nbLettreActu == 22) {
        basic.showString("V")
    } else if (nbLettreActu == 23) {
        basic.showString("W")
    } else if (nbLettreActu == 24) {
        basic.showString("X")
    } else if (nbLettreActu == 25) {
        basic.showString("Y")
    } else if (nbLettreActu == 26) {
        basic.showString("Z")
    } else if (nbLettreActu > 26) {
        nbLettreActu = 0
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (message))
    radio.sendMessage(message)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (nbLettreActu == 1) {
        message.push("A")
        nbLettreActu = 0
    } else if (nbLettreActu == 2) {
        message.push("B")
        nbLettreActu = 0
    } else if (nbLettreActu == 3) {
        message.push("C")
        nbLettreActu = 0
    } else if (nbLettreActu == 4) {
        message.push("D")
        nbLettreActu = 0
    } else if (nbLettreActu == 5) {
        message.push("E")
        nbLettreActu = 0
    } else if (nbLettreActu == 6) {
        message.push("F")
        nbLettreActu = 0
    } else if (nbLettreActu == 7) {
        message.push("G")
        nbLettreActu = 0
    } else if (nbLettreActu == 8) {
        message.push("H")
        nbLettreActu = 0
    } else if (nbLettreActu == 9) {
        message.push("I")
        nbLettreActu = 0
    } else if (nbLettreActu == 10) {
        message.push("J")
        nbLettreActu = 0
    } else if (nbLettreActu == 11) {
        message.push("K")
        nbLettreActu = 0
    } else if (nbLettreActu == 12) {
        message.push("L")
        nbLettreActu = 0
    } else if (nbLettreActu == 13) {
        message.push("M")
        nbLettreActu = 0
    } else if (nbLettreActu == 14) {
        message.push("N")
        nbLettreActu = 0
    } else if (nbLettreActu == 15) {
        message.push("O")
        nbLettreActu = 0
    } else if (nbLettreActu == 16) {
        message.push("P")
        nbLettreActu = 0
    } else if (nbLettreActu == 17) {
        message.push("Q")
        nbLettreActu = 0
    } else if (nbLettreActu == 18) {
        message.push("R")
        nbLettreActu = 0
    } else if (nbLettreActu == 19) {
        message.push("S")
        nbLettreActu = 0
    } else if (nbLettreActu == 20) {
        message.push("T")
        nbLettreActu = 0
    } else if (nbLettreActu == 21) {
        message.push("U")
        nbLettreActu = 0
    } else if (nbLettreActu == 22) {
        message.push("V")
        nbLettreActu = 0
    } else if (nbLettreActu == 23) {
        message.push("W")
        nbLettreActu = 0
    } else if (nbLettreActu == 24) {
        message.push("X")
        nbLettreActu = 0
    } else if (nbLettreActu == 25) {
        message.push("Y")
        nbLettreActu = 0
    } else if (nbLettreActu == 26) {
        message.push("Z")
        nbLettreActu = 0
    } else {
    	
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Bonjour, vous etes actuellement sur MicroMessage. Si vous voulez skip l'introduction de MicroMessage appuyez sur B. Sinon appuyer sur A+B.")
    basic.showString("MicroMessage est un programme développer pas Simon Guyot pour deux MicroBit.")
})
let message = 0
let nbLettreActu = 0
nbLettreActu = 0
message = 0
radio.setGroup(109)
radio.setFrequencyBand(11)
