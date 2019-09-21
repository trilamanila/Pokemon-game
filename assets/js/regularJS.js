// This is the Database
var pokemonDB = [
    {
      name: 'charmander',
      type: 'fire',
      hp: 39,
      attack: 52,
      defense: 39,
      level: 1,
      img: 'http://www.smogon.com/dex/media/sprites/xy/charmander.gif'
    },
    {
      name: 'bulbasaur',
      type: 'grass',
      hp: 45,
      attack: 49,
      defense: 49,
      level: 1,
      img: 'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif'
    },
    {
        name: 'squirtle',
        type: 'water',
        hp: 44,
        attack: 48,
        defense: 65,
        level: 1,
        img: 'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif'
      }
    
  ]

//State
var gameState = {
    userPokemon: '',
    rivalPokemon: ''
}
console.log(gameState)

//elements
var pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character')
console.log(pokemonsEl)
var battleScreenEl = document.getElementById('battle-screen')
var i = 0;

//this is the initial loop
    while (i < pokemonsEl.length) {
      //add function to all characters on screen select

        pokemonsEl[i].onclick = function() {
          //current selected pokemons name
            var pokemonName = this.dataset.pokemon

            //elements for images on battle screen
            var player1Img = document.querySelector('.player1').getElementById('img')
            var player2Img = document.querySelector('.player2').getElementById('img')

            //we save the current pokemon
            gameState.userPokemon = pokemonName

            //cpu picks a pokemon
            cpuPick()
            //change screen to battle scene
            battleScreenEl.classList.toggle('active')
          
            //select data from current user pokemon
            var currentPokemon = pokemonDB.filter(function(pokemon){
              return pokemon.name == gameState.userPokemon
            })
            //select data from current cpu pokemon
            var currentRivalPokemon = pokemonDB.filter(function(pokemon){
              return pokemon.name == gameState.RivalPokemon
            })

            player1Img[0].src = currentPokemon[0].img
            player2Img[0].src = currentRivalPokemon[0].img


            //user choose attack


            //cpu health goes does

            //cpu attack

            //user health goes down

            //rock > scissors

            //paper > rock

            //scissors > paper

            //depending on pokemone type and defense is how hard the attack is going to be and how much health it will take out

            //then whoever get to health <= 0 loses
        }
        i++
    }

    var randomNumber = function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) +min;
    }

    function cpuPick() {
        gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].dataset.pokemon
    }



































// // pokemon
// // create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)

  
  
//   var attack = 20;
//   var level = 10;
//   var stack = 1.3;
//   var defense = 39;
  
//   // create a formula for attacks
//   console.log((attack * level ) * stack / 7)
  
  
  
//   // create a formula for health
//   //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
//   console.log(((0.20 * Math.sqrt(level)) * defense) * 15)
  
  
  
  
//   // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
//   // p1 vs p2
  
  
  
  
//   // when one user loses all his health declare a winner
  
  