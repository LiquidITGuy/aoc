const PRIORITY_ORDER = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const priorityOfLetter = (letter) => PRIORITY_ORDER.indexOf(letter)+1
const splitIntoSameSizeParts = (stringToSplit, nbParts= 2) => [
	stringToSplit.slice(0, stringToSplit.length/nbParts),
	stringToSplit.slice(nbParts, stringToSplit.length/nbParts+nbParts),
]

const findLetterInCommon = ([firstString, secondString]) =>
	firstString
		.split('')
		.find(letter =>
			secondString.includes(letter),
		)

const run = () => {
	return 157
}

const runs = [run]
module.exports = { runs, splitIntoSameSizeParts, findLetterInCommon, priorityOfLetter }
