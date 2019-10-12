function removeElements () {
    const trends   = document.getElementsByTagName('section')[1],
          tweetBar = document.querySelectorAll('.r-yfoy6g'),
          spacer   = document.querySelectorAll('.r-aaos50')

    trends.remove()
    tweetBar[3].remove()
    spacer[0].remove()
}

setInterval(function () {
    removeElements()
}, 500)