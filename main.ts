input.onButtonPressed(Button.A, function () {
    _90grader += -10
})
input.onButtonPressed(Button.B, function () {
    _90grader += 10
})
let afstand = 0
minibit.mbBias(mbRobotDirection.Left, 1)
let _90grader = 250
minibit.setPixelColor(0, 0xFF0000)
minibit.setPixelColor(1, 0x659900)
minibit.setPixelColor(2, 0xFFFF00)
minibit.setPixelColor(3, 0x0000FF)
loops.everyInterval(500, function () {
    afstand = minibit.sonar(mbPingUnit.Centimeters)
})
basic.forever(function () {
    if (afstand < 15) {
        minibit.stop(mbStopMode.Brake)
        minibit.rotatems(mbRobotDirection.Left, 60, _90grader)
        minibit.ledRotate()
    } else {
        minibit.go(mbDirection.Forward, 60)
    }
})
