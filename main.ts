st7032.initLcd()
basic.forever(function () {
    st7032.setPosition(0, 0)
    for (let カウンター = 0; カウンター <= 19; カウンター++) {
        st7032.writeData(String.fromCharCode(65 + カウンター))
    }
    st7032.setPosition(1, 0)
    for (let カウンター = 0; カウンター <= 19; カウンター++) {
        st7032.writeData(String.fromCharCode(97 + カウンター))
    }
    st7032.setPosition(2, 0)
    for (let カウンター = 0; カウンター <= 19; カウンター++) {
        st7032.writeData(String.fromCharCode(177 + カウンター))
    }
    st7032.setPosition(3, 0)
    for (let カウンター = 0; カウンター <= 19; カウンター++) {
        st7032.writeData(String.fromCharCode(197 + カウンター))
    }
})
