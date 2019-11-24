function removeElements () {
  const trends   = document.getElementsByTagName('section')[1],
  tweetBar = document.querySelectorAll('.r-184en5c')[1],
  spacer   = document.querySelectorAll('.r-aaos50')[0]

    
  trends.remove()
  tweetBar.remove()
  spacer.remove()
}


setInterval(function () {
  removeElements()
}, 500)