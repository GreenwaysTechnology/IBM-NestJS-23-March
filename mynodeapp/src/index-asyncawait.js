
function blockMe(message) {
    console.log(message)
}

//async function returns Promises default.
async function delay() {
    return 'Hello' //Return Promise with success
}

async function main() {
    blockMe('start')
    //delay().then(status => console.log(status))
    const message = await delay()
    console.log(message)
    blockMe('end')
}
main()


