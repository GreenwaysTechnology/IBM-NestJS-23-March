//callback nesting

const getUser = (resolve, reject) => {

    console.log('getUser is called')
    let user = {
        name: 'admin',
        password: 'admin'
    }
    //user = null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, 'User not found')
    }
}
const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin' && user.password === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}
const showDashborad = (status, resolve, reject) => {
    console.log('showDashboard is called')
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'Welcome to User')
    } else {
        setTimeout(reject, 1000, 'Welcome to Guest')
    }
}

getUser(user => {
    login(user, status => {
        showDashborad(status, userPage => {
            console.log(userPage)
        }, guestPage => {
            console.log(guestPage)
        })
    }, err => {
        console.log(err)
    })
}, err => { console.log(err) })