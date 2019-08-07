function test () {
    const element = document.getElementsByTagName('section')[1]

    element.remove()
}

setInterval(function () {
    test()
}, 2000)