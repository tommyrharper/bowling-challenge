describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('open frame games', function() {

    it('Gutter game returns 0', function() {
      expect(game.score([00, 00, 00, 00, 00, 00, 00, 00, 00, 00])).toEqual(0);
    });
  
    it('game with 5 pins hit returns 5', function() {
      expect(game.score([05, 00, 00, 00, 00, 00, 00, 00, 00, 00])).toEqual(5);
    });

    it('game with 10 scores of 5 scores 50', function() {
      expect(game.score([05, 05, 05, 05, 05, 05, 05, 05, 05, 05])).toEqual(50);
    });

  });

  describe('strikes', function() {

    it('Game with 1 strike and then 5 returns 20', function() {
      expect(game.score([10, 05, 00, 00, 00, 00, 00, 00, 00, 00])).toEqual(20);
    });
  
  });
  
  
});
