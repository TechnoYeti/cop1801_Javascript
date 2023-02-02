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

let WhiteFang = new dog("White Fang", "Wolf-dog hybrid", "White Fang", "I can be very scary if you make me mad", "I was a wild dog that found domestication. I've seen both good and bad sides of humans", true);
document.getElementById("show2").innerHTML = WhiteFang.myGreeting2();
