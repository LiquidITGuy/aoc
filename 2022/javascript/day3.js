const readline = require('readline')
const { createReadStream } = require('fs')
const events = require('events')
const DEFAULT_FILE = '../files/day3_entry.txt'
const PRIORITY_ORDER = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const priorityOfLetter = (letter) => PRIORITY_ORDER.indexOf(letter)+1
const splitIntoSameSizeParts = (stringToSplit, nbParts= 2) => [
	stringToSplit.slice(0, stringToSplit.length/nbParts),
	stringToSplit.slice(-stringToSplit.length/nbParts),
]

const findLetterInCommon = ([firstString, secondString]) =>
	firstString
		.split('')
		.find(letter =>
			secondString.includes(letter),
		)


const init = async (filename) => {
	let totalPriority = 0
	const reader = readline.createInterface({
		input: createReadStream(filename),
		crlfDelay: Infinity,
	})

	reader.on('line', (line) => {
		const compartments = splitIntoSameSizeParts(line)
		const letter = findLetterInCommon(compartments)
		const priority = priorityOfLetter(letter)
		totalPriority+=priority
	})
	await events.once(reader, 'close')
	return totalPriority
}

const run =  async (filename = DEFAULT_FILE) => {
	const totalPriority = await init(filename)
	return totalPriority
}

const runs = [run]
module.exports = { runs, splitIntoSameSizeParts, findLetterInCommon, priorityOfLetter }
