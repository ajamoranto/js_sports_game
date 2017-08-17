(function(){

  //Team One
  let oneShoot = document.querySelector("#teamone-shoot");
  let oneShots = document.querySelector("#teamone-numshots");
  let oneGoals = document.querySelector("#teamone-numhits");
  //Team Two
  let twoShoot = document.querySelector("#teamtwo-shoot");
  let twoShots = document.querySelector("#teamtwo-numshots");
  let twoGoals = document.querySelector("#teamtwo-numhits");
  //Reset
  let reset = document.querySelector("#reset");
  let resetCounter = document.querySelector("#num-resets");
  //Sound
  let shotSound = document.querySelector("#shotSound");
  let scoreSound = document.querySelector("#scoreSound");
  let buzzer = document.querySelector("#buzzer");


  //Team One function
  oneShoot.addEventListener("click", function(){

    shotSound.play();
    oneShots.innerHTML = parseInt(oneShots.innerHTML) + 1

    shot = (Math.floor(Math.random() * 2) == 0);
    if (shot){
      oneGoals.innerHTML = parseInt(oneGoals.innerHTML) + 1;
      scoreSound.play();
    }

  })

  //Team Two function
  twoShoot.addEventListener("click", function(){

    shotSound.play();
    twoShots.innerHTML = parseInt(twoShots.innerHTML) + 1
    shot = (Math.floor(Math.random() * 2) == 0);
    if (shot){
      twoGoals.innerHTML = parseInt(twoGoals.innerHTML) + 1;
      scoreSound.play();
    }

  })

  //Reset function
  reset.addEventListener("click", function(){

    buzzer.play();

    if (oneGoals.innerHTML > twoGoals.innerHTML) {
      alert("Fighting Mongooses Win!")
    } else if (twoGoals.innerHTML > oneGoals.innerHTML) {
      alert("Coney Island Whitefish Win!")
    } else {
      alert("No one likes a draw...")
    }

    oneShots.innerHTML = 0;
    oneGoals.innerHTML = 0;
    twoShots.innerHTML = 0;
    twoGoals.innerHTML = 0;
    resetCounter.innerHTML = parseInt(resetCounter.innerHTML) + 1;

  })
})();
