const delay = (callback, ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback())
        }, ms);
    })
}


// delay(() => 10 + 5, 1000).then(res => console.log(res))

module.exports = delay