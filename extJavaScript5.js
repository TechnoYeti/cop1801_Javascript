var mydog = {
    "name": "White Fang",
    "breed": "wolf-dog hybrid",
    "tvshow": "White Fang",
    "mysound": "I can be very intimidating",
    "note": "I was a wild dog that took a journey of domestication during the Klondike Gold Rush",
    "myGreeting": function()
    {
        return `<p> Hey! My name is ${this.name}, I am a ${this.breed}.<br> When I bark or growl ${this.mysound}<br>
        I was the main star on ${this.tvshow}.<br> In this movie ${this.note}</p>`
    }
}
document.getElementById("show1").innerHTML = mydog.myGreeting();
class dog{
    constructor(name, breed, tvshow, mysound, note, cantalk) {
        this.name = name,
        this.breed = breed,
        this.tvshow = tvshow,
        this.mysound = mysound,
        this.note = note
        this.cantalk = cantalk
    }
    myGreeting2(){
        var talkString = "";
    if (this.cantalk== true)
        talkString = "I can talk.";
    else
        talkString = "I cannot talk.";
        return `<p>Hello! My name is ${this.name}, I was the main star in ${this.tvshow}. ${this.mysound}<br>
        My character is a ${this.breed}. ${this.note}.<br> ${talkString}`
}
}

let WhiteFang = new dog("White Fang", "Wolf-dog hybrid", "White Fang", "I can be very scary if you make me mad", "I was a wild dog that found domestication. I've seen both good and bad sides of humans", false);
document.getElementById("show2").innerHTML = WhiteFang.myGreeting2();

let akamaru = new dog("akamaru", "unknown", "Naruto", "I am not scary", "Bonded with Kima, strong and devoted especially if Kima ever gets hurt.", false);

let ladybird = new dog("ladybird", "Bloodhound", "King of the Hill", "I am not scary", "I am an old dog that lives with the Hill Family in Texas. I sleep a lot.", false);

let underdog = new dog("underdog", "beagle", "Underdog", "I am not scary", "A speaking dog that has super powers that only speaks in rhymes.", true);

for(var item in akamaru)
  console.log(`${item}: ${akamaru[item]}`)
console.log("-----------------------------");
let text ="";
for(var item in akamaru)
  text += `<b>${item}:</b> ${akamaru[item]} <br>`

document.getElementById("show3").innerHTML = text

let dogList = [];
dogList.push(WhiteFang);
dogList.push(akamaru);
dogList.push(ladybird);
dogList.push(underdog);
dogList.forEach(dog => {
    for(var item in dog)
       console.log(`${item}: ${dog[item]}`)
    console.log("-----------------------------");
  });
  
  function search()
{
    var searchTerm = document.getElementById("dogname").value;
    var result = dogList.find(dog => dog.name == searchTerm);
    if(result)
  {
    text = "";
    for(var item in result)
      text += `${item}: <b>${result[item]}</b> <br>`
    document.getElementById("show4").innerHTML = text;
    document.getElementById("show5").innerHTML = result.myGreeting2();
  }
  else{
    document.getElementById("show4").innerHTML = "<b>ERROR:</b> " + searchTerm + " is not in the database. Please try Again";
    document.getElementById("show5").innerHTML = "";
  }
}
