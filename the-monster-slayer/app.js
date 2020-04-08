new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            this.playerAttacks(3, 10, false);
        },
        specialAttack: function() {
            this.playerAttacks(10, 20, true);
        },
        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals plus 10'
            });
            this.monsterAttacks();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkIfWins: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! Start new game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;

            } else if (this.playerHealth <= 0) {
                if (confirm('You lose! Start new game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        monsterAttacks: function() {
            const damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
            this.checkIfWins();
        },
        playerAttacks: function(minDamage, maxDamage, isSpecial) {
            const damage = this.calculateDamage(minDamage, maxDamage);
            this.monsterHealth -= damage;
            let text = isSpecial ? 'Player hits Monster hard for ' : 'Player hits Monster for ';
            this.turns.unshift({
                isPlayer: true,
                text: text + damage
            });
            if (this.checkIfWins()) return true;

            this.monsterAttacks();
        }
    }
});
