class Card {
  constructor(_numberValue, _suit, _stringVal) {
    this.numVal = _numberValue;
    this.suit = _suit;
    this.stringVal = _stringVal;
  }
  show() {
    console.log(`${this.stringVal} of ${this.suit}`);
  }
}

class Deck {
  constructor() {
    this.cards = this.reset();
  }
  reset() {
    const cards = [];
    const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
    const stringValues = [
      'Ace',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten',
      'Jack',
      'Queen',
      'King'
    ];

    for (let i = suits.length - 1; i >= 0; i--) {
      // i represents a single suit
      for (let j = 0; j < stringValues.length; j++) {
        // j represents a single string value
        cards.push(new Card(j + 1, suits[i], stringValues[j]));
      }
    }
    return cards;
  }

  deal() {
    return this.cards.pop();
  }
  shuffle() {
    // Phisher Yates Shuffle
    for (let i = 0; i < 10; i++) {
      for (let j = this.cards.length - 1; j > 0; j--) {
        let randomNumber = Math.floor(Math.random() * this.cards.length);
        let temp = this.cards[randomNumber];
        this.cards[randomNumber] = this.cards[j];
        this.cards[j] = temp;
      }
    }
  }
  dealRandom() {}
}

class Player {
  constructor(_name) {
    this.hand = [];
    this.name = _name;
  }

  drawCard(deck) {
    this.hand.push(deck.deal());
    return this;
  }

  discard(index) {
    this.hand.splice(index, 1);
    return this;
  }
}

const newDeck = new Deck();
newDeck.shuffle();

const player = new Player('Bob');
console.log(newDeck.cards.length);
player
  .drawCard(newDeck)
  .drawCard(newDeck)
  .drawCard(newDeck)
  .drawCard(newDeck)
  .drawCard(newDeck);
console.log(newDeck.cards.length);
console.log('before -->', player.hand);
player.discard(2);
console.log('after -->', player.hand);
