(function () {
  window.addEventListener('load', () => {
    const jd_my_jd = document.querySelector('.jd_my_jd')
    const jd_buy = document.querySelector('.jd_buy')

    jd_my_jd.addEventListener('mouseover', () => {
      jd_my_jd.querySelector('.jd_my_jd_hover').classList.toggle('active')
    })
    jd_buy.addEventListener('mouseover', () => {
      jd_buy.querySelector('.jd_buy_hover').classList.toggle('active')
    })
  })
})()