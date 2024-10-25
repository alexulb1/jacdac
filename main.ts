basic.forever(function () {
    modules.led1.setAll(0x000000)
    modules.led1.setPixelColor(modules.rotaryEncoder2.position() % 8, 0xff0000)
})
