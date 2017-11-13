
function random_num() {
  var number=document.getElementById('mon_numero').value;
  var num_croupier=Math.floor(Math.random()*11);
  var phrase=document.getElementById('message');
  result.innerHTML = num_croupier;

  if (num_croupier<number) {
    document.getElementById('message').value="Vous avez gagné";
  } else {
    document.getElementById('message').value="Vous avez perdu";
  }

}
