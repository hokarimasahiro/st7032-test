st7032.initLcd()
basic.forever(function () {
    st7032.setPosition(0, 0)
    st7032.writeData(" ")
    for (let counter = 0; counter <= 18; counter++) {
        basic.pause(100)
        st7032.setPosition(0, counter)
        st7032.writeData(String.fromCharCode(65 + counter))
        st7032.writeData(" ")
    }
    st7032.setPosition(0, 19)
    st7032.writeData(String.fromCharCode(65 + 19))
    st7032.setPosition(1, 0)
    st7032.writeData(" ")
    for (let counter = 0; counter <= 18; counter++) {
        basic.pause(100)
        st7032.setPosition(1, counter)
        st7032.writeData(String.fromCharCode(97 + counter))
        st7032.writeData(" ")
    }
    st7032.setPosition(1, 19)
    st7032.writeData(String.fromCharCode(97 + 19))
    st7032.setPosition(2, 0)
    st7032.writeData(" ")
    for (let counter = 0; counter <= 18; counter++) {
        basic.pause(100)
        st7032.setPosition(2, counter)
        st7032.writeData(String.fromCharCode(177 + counter))
        st7032.writeData(" ")
    }
    st7032.setPosition(2, 19)
    st7032.writeData(String.fromCharCode(177 + 19))
    st7032.setPosition(3, 0)
    st7032.writeData(" ")
    for (let counter = 0; counter <= 18; counter++) {
        basic.pause(100)
        st7032.setPosition(3, counter)
        st7032.writeData(String.fromCharCode(197 + counter))
        st7032.writeData(" ")
    }
    st7032.setPosition(3, 19)
    st7032.writeData(String.fromCharCode(197 + 19))
})
