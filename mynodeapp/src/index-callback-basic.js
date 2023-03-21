//timer for simulating async task.

function blockMe(message) {
    console.log(message)
}

function delay(callback) {
    //  callback()
    //non blocking api
    setTimeout(callback, 5000)
}
blockMe('start')
delay(() => {
    console.log('hello')
})
blockMe('end')