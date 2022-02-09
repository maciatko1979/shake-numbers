input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(2)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(4)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(6)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showNumber(randint(7, 10))
})
basic.forever(function () {
	
})
