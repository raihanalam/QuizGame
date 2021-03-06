const username= document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem("mostRecentScore");

let highestScores;

if(localStorage.getItem('highestScores') === null){
    highestScores = [];
}
else{
    highestScores = JSON.parse(localStorage.getItem('highestScores'));
}

finalScore.innerText = mostRecentScore; 
/*username.addEventListener('keyup',(e)=>{
    if(username.value === ''){
        saveScoreBtn.disabled = true;
    }
});*/
saveHighScore = (e)=>{
    console.log('Saved');
    e.preventDefault();
    const score ={
        score: mostRecentScore,
        name: username.value
    };
    highestScores.push(score);
    highestScores = highestScores.sort( (a,b) => {
        return b.score - a.score;
    });
    highestScores.splice(5);
    
    localStorage.setItem('highestScores', JSON.stringify(highestScores));
    window.location.assign('index.html');
    console.log(highestScores)
    
}