enum Direction {
    Up,
    Down,
    Left,
    Right,
}
console.log(Direction.Up)
console.log(Direction.Down)

enum UserResponse {
    No = 0,
    Yes = 1,
}
function respond(recipient: string, message: UserResponse): void {
    console.log(recipient, message)
}

respond("Princess Caroline", UserResponse.No);