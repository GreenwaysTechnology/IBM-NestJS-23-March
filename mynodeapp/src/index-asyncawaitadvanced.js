const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
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
    })
}
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin' && user.password === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}
const showDashborad = status => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'Welcome to User')
        } else {
            setTimeout(reject, 1000, 'Welcome to Guest')
        }
    })
}

async function main() {
    // getUser()
    //     .then(user => {
    //         return login(user)
    //     })
    //     .then(status => {
    //         return showDashborad(status)
    //     })
    //     .then(page => {
    //         console.log(page)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showDashborad(status)
        console.log(page)
    }
    catch (err) {
        console.log(err)
    }

}
main()
