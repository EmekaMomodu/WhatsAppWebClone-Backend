const { sentences, USERS } = require("./database");

const getRandomSentence = () => {
	const randomIndex = Math.floor(Math.random() * sentences.length);
	return sentences[randomIndex];
};

const getRandomSentenceByUser = (userId) => {
	let userSentence = "Empty";
	USERS.forEach((user) => {
		if(user.id === Number(userId)){
			const randomIndex = Math.floor(Math.random() * user.sentences.length);
			userSentence = user.sentences[randomIndex]
		}
	})
	return userSentence;
};

function getResponseInterval(min, max) {
	return Math.random() * (max - min) + min;
}

module.exports = { getRandomSentence, getResponseInterval, getRandomSentenceByUser };
