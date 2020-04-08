new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            this.playerAttacks(3, 10);
        },
        specialAttack: function() {
            this.playerAttacks(10, 20);
        },
        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.monsterAttacks();
        },
        giveUp: function() {

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
            this.playerHealth -= this.calculateDamage(5, 12);
            this.checkIfWins();
        },
        playerAttacks: function(minDamage, maxDamage) {
            this.monsterHealth -= this.calculateDamage(minDamage, maxDamage);
            if (this.checkIfWins()) return true;

            this.monsterAttacks();
        }
    }
});
