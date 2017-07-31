class Board {
  constructor(){
	this.view = [[ , , ],[ , , ],[ , , ]];
	this.turn = 'X'
	this.over = false
  }
	this.check = function() {
	  for(var i = 0; i<3; i++){
	  	if(this.view[i][0] !== ' ' && this.view[i][0] === this.view[i][1] && this.view[i][1] === this.view[i][2]){
	  	  this.over = true
	  	  return `${this.view[i][0]} WINS!!`
	  	} else if(this.view[0][i] !== ' ' && this.view[0][i] === this.view[1][i] && this.view[1][i] === this.view[2][i]){
	  	  this.over = true
	  	  return `${this.view[i][0]} WINS!!`
	  	}
	  }
	  if(this.view[0][0] !== ' ' && this.view[0][0] === this.view[1][1] && this.view[1][1] === this.view[2][2]){
	  	this.over = true
	  	return `${this.view[0][0]} WINS!!`
	  } else if(this.view[2][0] !== ' ' && this.view[2][0] === this.view[1][1] && this.view[1][1] === this.view[0][2]){
	  	this.over= true
	  	return `${this.view[2][0]} WINS!!`
	  }
	}
	this.placePiece = function(row,col){
	  this.view[row][col] = this.turn
	  if(this.turn === 'X'){
		this.turn = 'O'
	  } else {
		this.turn = 'X'
	  }
	  this.check()
    }
    this.play = function() {
       while(!this.over){
         console.log(`It is ${this.turn}'s turn to play`)
         var moveRow = prompt('please type your row')
         var moveCol = prompt('please type your column')
         this.placePiece(moveRow, moveCol)
      }
    }
} 

