removeElements = () => {
  const trends = document.querySelector('[aria-label="Timeline: Trending now"]'),
        tweetsBar = document.querySelector('[role="progressbar"]').parentElement,
        spacer = document.querySelector('.r-1or9b2r')

  trends.remove()
  tweetsBar.remove()
  spacer.remove()
}

window.addEventListener('load', () => {
  setTimeout(removeElements, 4000)
})