const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('start() method should put all cards into a Deck', function() {

    const game = new Game()
    game.start()

    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
  });

  it('start() method should create all cards', function() {

    const game = new Game()
    game.start()

    expect(game.currentRound.deck.countCards()).to.equal(30);
    expect(game.currentRound.returnCurrentCard().id).to.equal(1);
  });

  it('start() should instantiate a Round and keep track of the currentRound', function() {

    const game = new Game()

    game.start()
    game.currentRound.takeTurn('yo')

    expect(game.currentRound).to.be.an.instanceof(Round);
    expect(game.currentRound.turns).to.equal(1);
  });



});
