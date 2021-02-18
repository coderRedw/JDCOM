/*
 * @Author: your name
 * @Date: 2021-02-18 09:31:52
 * @LastEditTime: 2021-02-18 09:41:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JDCOM\src\js\header.js
 */
  /**
   * 打开页面按下s键快速定位到搜索框
   */
  const ipt = document.querySelector('.search-m').querySelector('input')
  document.addEventListener('keyup', (e) => {
    if (e.key === 's') {
      ipt.focus()
    }
  })

  /**
   * jsonp跨域请求请求数据，模拟百度搜索
   * 搜索功能 { 是百度搜索，京东的抓取不到，有安全限制 }
   */
  const search_ul = document.querySelector('.search_ul')
  ipt.addEventListener('input', function () {
    const str = 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=33423,33516,33402,33344,31660,33461,26350,33264&wd='+ this.value +'&cb=jQuery110202665711899062828_1612356817808&_=1612356817809'
    const script = document.createElement('script')
    script.src = str
    document.body.appendChild(script)
    script.remove()
  })
  function jQuery110202665711899062828_1612356817808 (res) {
    if (!res.g) {
      search_ul.style.display = "none"
      return 
    }
    let str = ``
    res.g.forEach(item => {
      str += `
        <li>${ item.q }</li>
      `
    })
    search_ul.innerHTML = str
    search_ul.style.display = "block"
  }

  /**
   * 热词更换
   */
 const hot_words = document.querySelector('.hotwords').querySelectorAll('a')
 function jsonpHotWords(res) {
   for (let i = 1; i < 9; i++) {
     hot_words[i].innerText = res.data[i].n
   }
   let num = 0
   setInterval(() => {
     if (num === 4) num = 0
     if (search_ul === 18) search_ul = 18
    hot_words[0].innerText = res.data[0][num].n
    num++
   }, 2000)
 }