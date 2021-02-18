(function () {
  window.addEventListener('load', () => {
    const lis = document.querySelector('.fr').querySelectorAll('li')
    for (let i = 0; i < lis.length; i++) {
      lis[i].addEventListener('mouseover', () => {
        if (lis[i].children[2]) {
          lis[i].children[2].classList.toggle('active')       
        }
      })
    }
  })
})()