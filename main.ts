input.onButtonPressed(Button.A, function () {
    _90grader += -10
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        minibit.goms(mbDirection.Forward, 60, 4000)
        minibit.rotatems(mbRobotDirection.Left, 60, _90grader)
        minibit.ledRotate()
    }
})
input.onButtonPressed(Button.B, function () {
    _90grader += 10
})
let _90grader = 0
minibit.mbBias(mbRobotDirection.Left, 1)
_90grader = 250
minibit.setPixelColor(0, 0xFF0000)
minibit.setPixelColor(1, 0x659900)
minibit.setPixelColor(2, 0xFFFF00)
minibit.setPixelColor(3, 0x0000FF)
