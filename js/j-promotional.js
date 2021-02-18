/*
 * @Author: your name
 * @Date: 2021-02-17 15:33:09
 * @LastEditTime: 2021-02-17 15:50:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JDCOM\src\js\j-promotional.js
 */

 
const btn = document.querySelector('.j-promotional')
const j_promotional = document.querySelector('.J-promotional-top')
const img = j_promotional.querySelector('img')

function jsonpActivityTopGray (res) {
  img.src = res.data.banner.img
  btn.addEventListener('click', () => {
    j_promotional.style.display = "none"
    btn.style.display = "none"
  })
}