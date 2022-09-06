'use strict'

let app = document.addEventListener('DOMContentLoaded', () => {

  const gird = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const width = 10
  const scoreDisplay = document.querySelector('#score')
  const startBtn =document.querySelector('#start-button')


  console.log(scoreDisplay, startBtn)
})

module.exports = app