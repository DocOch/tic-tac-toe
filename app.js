class Board {
  constructor(){
	this.view = [[ , , ],[ , , ],[ , , ]];
	this.turn = 'X'
  }
	this.check = function() {
	  for(var i = 0; i<3; i++){
	  	if(this.view[i][0] !== ' ' && this.view[i][0] === this.view[i][1] && this.view[i][1] === this.view[i][2]){
	  	  return `${this.view[i][0]} WINS!!`
	  	} else if(this.view[0][i] !== ' ' && this.view[0][i] === this.view[1][i] && this.view[1][i] === this.view[2][i]){
	  	  return `${this.view[i][0]} WINS!!`
	  	}
	  }
	  if(this.view[0][0] !== ' ' && this.view[0][0] === this.view[1][1] && this.view[1][1] === this.view[2][2]){
	  	return `${this.view[0][0]} WINS!!`
	  } else if(this.view[2][0] !== ' ' && this.view[2][0] === this.view[1][1] && this.view[1][1] === this.view[0][2]){
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
} 

