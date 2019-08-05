function test () {
    let element = document.getElementsByTagName('section')[1]

    element.remove()
}

setTimeout(function () {
    test()
}, 2000)