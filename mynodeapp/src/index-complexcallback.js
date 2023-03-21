//complex callback based code .
//resolve=success reject=failure
function login(userName, password, resolve, reject) {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}
function blockMe(message) {
    console.log(message)
}


blockMe('start')

login('admin', 'admin', (status) => {
    console.log(status)
}, (err) => {
    console.log(err)
})

login('foo', 'bar', (status) => {
    console.log(status)
}, (err) => {
    console.log(err)
})

blockMe('end')