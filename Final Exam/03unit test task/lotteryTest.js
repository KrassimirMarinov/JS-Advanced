const { assert } = require('chai');
const lottery = require('./Lottery');

describe('Lottery', () => {
  let lottery;

  beforeEach(() => {
    lottery = {
      buyLotteryTicket(ticketPrice, ticketCount, buy) {
        // implementation
      },
      checkTicket(ticketNumbers, luckyNumbers) {
        // implementation
      },
      secondChance(ticketID, secondChanceWinningIDs) {
        // implementation
      },
    };
  });

  describe('buyLotteryTicket', () => {
    it('should throw an error for invalid input', () => {
      assert.throws(() => lottery.buyLotteryTicket(0, 5, true), 'Invalid input!');
    });

    it('should throw an error if unable to buy lottery ticket', () => {
      assert.throws(() => lottery.buyLotteryTicket(5, 3, false), 'Unable to buy lottery ticket!');
    });

    it('should return the correct string for valid input', () => {
      const result = lottery.buyLotteryTicket(2, 10, true);
      assert.strictEqual(result, 'You bought 10 tickets for 20$.');
    });
  });

  describe('checkTicket', () => {
    it('should throw an error for invalid input', () => {
      assert.throws(() => lottery.checkTicket([1, 2, 3], [4, 5, 6]), 'Invalid input!');
    });

    it('should return the correct message for 3 to 5 winning numbers', () => {
      const result = lottery.checkTicket([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9]);
      assert.strictEqual(result, 'Congratulations you win, check your reward!');
    });

    it('should return the correct message for all 6 winning numbers', () => {
      const result = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
      assert.strictEqual(result, 'You win the JACKPOT!!!');
    });
  });

  describe('secondChance', () => {
    it('should throw an error for invalid input', () => {
      assert.throws(() => lottery.secondChance('abc', [123, 456]), 'Invalid input!');
    });

    it('should return the correct message for a winning ticket', () => {
      const result = lottery.secondChance(123, [123, 456, 789]);
      assert.strictEqual(result, 'You win our second chance prize!');
    });

    it('should return the correct message for a non-winning ticket', () => {
      const result = lottery.secondChance(123, [456, 789]);
      assert.strictEqual(result, 'Sorry, your ticket didn\'t win!');
    });
  });
});