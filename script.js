function removeElements () {
  const trends   = document.getElementsByTagName('section')[1],
        tweetBar = document.querySelectorAll('.r-184en5c')[1],
        spacer   = document.querySelectorAll('.r-aaos50')[0]

  // Error handling
  if (trends === undefined) {
    return false;
  }

  trends.remove()
  tweetBar.remove()
  spacer.remove()
}


setInterval(removeElements, 1000)