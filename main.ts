basic.forever(function () {
    st7032.setPosition(0, 0)
    st7032.writeData("                    ")
    st7032.setPosition(0, 0)
    for (let counter = 0; counter <= 19; counter++) {
        basic.pause(100)
        st7032.setPosition(0, counter)
        st7032.writeData(String.fromCharCode(65 + counter))
    }
    st7032.setPosition(1, 0)
    st7032.writeData("                    ")
    st7032.setPosition(1, 0)
    for (let counter2 = 0; counter2 <= 19; counter2++) {
        basic.pause(100)
        st7032.setPosition(1, counter2)
        st7032.writeData(String.fromCharCode(97 + counter2))
    }
    st7032.setPosition(2, 0)
    st7032.writeData("                    ")
    st7032.setPosition(2, 0)
    for (let counter3 = 0; counter3 <= 19; counter3++) {
        basic.pause(100)
        st7032.setPosition(2, counter3)
        st7032.writeData(String.fromCharCode(177 + counter3))
    }
    st7032.setPosition(3, 0)
    st7032.writeData("                    ")
    st7032.setPosition(3, 0)
    for (let counter4 = 0; counter4 <= 19; counter4++) {
        basic.pause(100)
        st7032.setPosition(3, counter4)
        st7032.writeData(String.fromCharCode(197 + counter4))
    }
})
