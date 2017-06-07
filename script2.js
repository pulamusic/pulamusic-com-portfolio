var quotes = [
	"And then when I went to Chicago, that's when I had these outer space experiences and went to the other planets.",

	"I'm not a minister, I'm not a philosopher, I'm not a politician, I'm in another category.",

	"I'm playing dark history. It's beyond black. I'm dealing with the dark things of the cosmos.",

	"What I'm dealing with is so vast and great that it can't be called the truth. It's above the truth.",

	"Music is a language, you see, a universal language.",

	"Today's symphonic music is sponsored by the upper structures of society.",

	"But recently I began to feel that maybe I wouldn't be able to do what I want to do and need to do with American musicians, who are imprisoned behind these bars; music's got these bars and measures you know.",

	"Bach and Beethoven, all of them, they had to write something to please the upper structure, those with money and power.",

	"I use music as a medium to talk to people.",

	"I am a musician, but I'm another type of musician.",

	"All these other nations seem to appreciate what I'm doing and they want me to play the furthest out things.",

	"History is His story. You haven't heard my story.",

	"What do you do when you know that you know, that you know that you're wrong?",

  "Every thing's vibration is a different degree of music"
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById("quoteDisplay").innerHTML = '"' + quotes[randomNumber] + '"' + " --Sun Ra";
};
