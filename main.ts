st7032.initLcd()
basic.forever(function () {
    st7032.setPosition(0, 0)
    st7032.writeData("1234567890abcdefg")
})
