//Promise implementation: Promise by default async

function blockMe(message) {
    console.log(message)
}

function delay() {
    return Promise.resolve('Hello') //Return Promise with success
}

blockMe('start')
delay().then(status => console.log(status))
blockMe('end')

