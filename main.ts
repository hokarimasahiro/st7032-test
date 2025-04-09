st7032.initLcd()
basic.forever(function () {
    st7032.setPosition(0, 0)
    for (let counter = 0; counter <= 19; counter++) {
        st7032.writeData(String.fromCharCode(65 + counter))
    }
    st7032.setPosition(1, 0)
    for (let counter = 0; counter <= 19; counter++) {
        st7032.writeData(String.fromCharCode(97 + counter))
    }
    st7032.setPosition(2, 0)
    for (let counter = 0; counter <= 19; counter++) {
        st7032.writeData(String.fromCharCode(177 + counter))
    }
    st7032.setPosition(3, 0)
    for (let counter = 0; counter <= 19; counter++) {
        st7032.writeData(String.fromCharCode(197 + counter))
    }
})
