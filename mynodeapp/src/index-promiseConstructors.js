//promise constructors
function login(userName, password) {
    return new Promise((resolve, reject) => {
        if (userName === 'amdin' && password === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login success')
        }
    })
}
function blockMe(message) {
    console.log(message)
}

blockMe('start')

login('admin', 'admin')
    .then(status => {
        console.log(status)
    })
    .catch(err => console.log(err))


blockMe('end')