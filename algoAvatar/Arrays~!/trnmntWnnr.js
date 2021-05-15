// ** AE: Arrays Reps Challenge  
// ** --> { Two Number Sum !!! }

// T A SK !!!

// There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each comp, there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.

// Given an array of pairs representing teams that have completed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results respectively. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won.

// It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams. 

// * main squeeze:
// competitions = home team[0] away team[1]
// indicies in results array correspond to the indices of the comps array
// results = 0 or 1 --> 0 = won by away team // 1 = won by home team
// competitions array will be the same length as results array
// * its confusing because of the setup with the arrays -- loop through all competitions and find the team that has the most points
// data structure: to tell us which team has the most number of points => "scores" = hash table/map => key: team, value = score
// ~ loop through comps to figure out which team won
// looping through results and comps array at the same time, using value in results array to figure out who wins
// winning team? update score in score data structure 

// * --- Roadmap --- *
// input: an array of pairs representing teams that have competed against each other + an array containing the results of each competition 
// output: string announing winner of the tournament
// constraints: optimize
// edge cases:

// * time complexity: O(N) time N = number of competitions
// * space complexity: O(K) space K = number of teams

// rather than having to write 1 in program, we can just use this variable to be more readable 
const HOME_TEAM_WON = 1;

const tournamentWinner = (competitions, results) => {
  // compare score of team that just won with the current best team, this variable will hold the team that currently has the highest score 
  let currentBestTeam = '';
  // edge case add above by default to avoid errors at start
  const scores = {[currentBestTeam] : 0 };

  for(let i = 0; i < competitions.length; i += 1) {
    // corresponding index to tell us if home or away team won
    const result = results[i];
    // split array to first and second element 
    const [homeTeam, awayTeam] = competitions[i];

    // using constant value to be more readable
    // set winning team variable to home team if the result is 1
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    // updates the score data structure
    updateScores(winningTeam, 3, scores);

    if(scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}

// * helper method to update scores
const updateScores = (team, points, scores) => {
  // check scores cache, if not add it
  // points = 3 thus the argument passed above in line 44
  if(!(team in scores)) scores[team] = 0;
  
  // if it is found update points value
  scores[team] += points;
}
