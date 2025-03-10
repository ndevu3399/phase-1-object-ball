function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // Function to get points scored by a player
  function numPointsScored(playerName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
  }
  
  // Function to get shoe size of a player
  function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
  }
  
  // Function to get team colors
  function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
  }
  
  // Function to return an array of team names
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // Function to get player numbers of a team
  function playerNumbers(teamName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
  }
  
  // Function to get player stats
  function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
  }
  
  // Function to get rebounds of the player with the biggest shoe size
  function bigShoeRebounds() {
    let game = gameObject();
    let maxShoeSize = 0;
    let rebounds = 0;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].shoe > maxShoeSize) {
          maxShoeSize = game[team].players[player].shoe;
          rebounds = game[team].players[player].rebounds;
        }
      }
    }
    return rebounds;
  }
  
  // Function to find the player with the most points
  function mostPointsScored() {
    let game = gameObject();
    let maxPoints = 0;
    let bestPlayer = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].points > maxPoints) {
          maxPoints = game[team].players[player].points;
          bestPlayer = player;
        }
      }
    }
    return bestPlayer;
  }
  
  // Function to determine the team with the most points
  function winningTeam() {
    let game = gameObject();
    let scores = { home: 0, away: 0 };
  
    for (let team in game) {
      for (let player in game[team].players) {
        scores[team] += game[team].players[player].points;
      }
    }
    return scores.home > scores.away ? game.home.teamName : game.away.teamName;
  }
  
  // Function to find the player with the longest name
  function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  
  // Super bonus function: Does the longest name player have the most steals?
  function doesLongNameStealATon() {
    let game = gameObject();
    let longestName = playerWithLongestName();
    let mostSteals = 0;
    let bestDefender = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].steals > mostSteals) {
          mostSteals = game[team].players[player].steals;
          bestDefender = player;
        }
      }
    }
    return longestName === bestDefender;
  }
  
  // Example console log tests
  console.log(gameObject());
  console.log(numPointsScored("Alan Anderson"));
  console.log(shoeSize("Mason Plumlee"));
  console.log(teamColors("Charlotte Hornets"));
  console.log(teamNames());
  console.log(playerNumbers("Brooklyn Nets"));
  console.log(playerStats("Ben Gordon"));
  console.log(bigShoeRebounds());
  console.log(mostPointsScored());
  console.log(winningTeam());
  console.log(playerWithLongestName());
  console.log(doesLongNameStealATon());
  