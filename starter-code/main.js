console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king']
var cardsInPlay = []



var gameBoard = document.getElementById('game-board');

function createCards() {
	for (var i = 0; i < 4; i++) {
		var card = document.createElement('div');
		card.className = 'card';
		gameBoard.appendChild(card);
		card.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
	}
}


var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'king') {
		card.innerHTML = '<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQF4RgQSqy2P0vYcKy_M2UUDFOOVV4piX_yLgrrB_V6VRiPVfzb" alt="King of Hearts" />';
	}
		else {this.innerHTML = '<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuaHk4seG-oEDGSiOkQRSDYLiY6_22Grbg7SIPphL0QYOWhirK" alt="Queen of Hearts" />';
	}
		if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}


function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("you have found a match");
	}
	else {
		alert("sorry try again");
	}
	}
}

createCards();
