const highestScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highestScores')) || [];
highestScoresList.innerHTML = 
highScores.map( score =>{
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join("");