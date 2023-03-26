radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 94, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.setGroup(1)
radio.setTransmitPower(7)
music.setBuiltInSpeakerEnabled(true)
