'use strict'


document.addEventListener('DOMContentLoaded', () => {

  const gird = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const width = 10
  const scoreDisplay = document.querySelector('#score')
  const startBtn =document.querySelector('#start-button')


  const lTetro = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2] 
  ]

  const zTetro = [
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1]
  ]

  const tTetro = [
    [1, width, width+1, width+2],
    [1, width+1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
  ]

  const oTetro = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetro = [
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3]
  ]

  const theTetrominoes = [lTetro, zTetro, tTetro, oTetro, iTetro]


  let currentPosition = 4
  let currentRotation = 0

  //select tetromino randomly
  let random = Math.floor(Math.random()*theTetrominoes.length)
  // console.log(random)
  let current = theTetrominoes[random][currentRotation]

  //draw tetro
  function draw(){
    current.forEach(index =>{
      squares[currentPosition + index].classList.add('tetromino')
    })
  }

  //undraw tetro
  function undraw() {
    current.forEach( index => {
      squares[currentPosition + index].classList.remove('tetromino')
    })
  }

  timerID = setInterval(moveDown, 1000)

  function moveDown(){
    undraw()
    currentPosition += width
    draw()
    freeze()
  }


  function freeze(){
    if(current.some(index => squares[currentPosition + index +width].classList.contains('taken'))) {
      current.forEach(index => squares[currentPosition + index].classList.add('taken'))
      random = Math.floor(Math.random() * theTetrominoes.length)
      current = theTetrominoes[random][currentRotation]
      currentPosition = 4
      draw()
    }
  }

  moveDown()
})



