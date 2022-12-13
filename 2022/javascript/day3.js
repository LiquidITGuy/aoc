const readline = require('readline')
const { createReadStream } = require('fs')
const events = require('events')

const DEFAULT_FILE = '../files/day3_entry.txt'
const PRIORITY_ORDER = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const NUMBER_OF_LINE_BY_ELF = 3

const priorityOfLetter = (letter) => PRIORITY_ORDER.indexOf(letter)+1
const splitIntoSameSizeParts = (stringToSplit, nbParts= 2) => [
	stringToSplit.slice(0, stringToSplit.length/nbParts),
	stringToSplit.slice(-stringToSplit.length/nbParts),
]

const findLettersInCommon = (stringsArray) => {
	const lastString = retrieveOnlyUniqueChars(stringsArray.pop())
	return stringsArray.reduce((currentCommonString, stringToEvaluate) =>
		currentCommonString
			.split('')
			.filter(char => retrieveOnlyUniqueChars(stringToEvaluate).includes(char))
			.join(''),
	lastString)
}


const init = async (filename) => {
	let totalPriority = 0
	const reader = readline.createInterface({
		input: createReadStream(filename),
		crlfDelay: Infinity,
	})

	reader.on('line', (line) => {
		const compartments = splitIntoSameSizeParts(line)
		const letter = findLettersInCommon(compartments)[0]
		const priority = priorityOfLetter(letter)
		totalPriority+=priority
	})
	await events.once(reader, 'close')
	return totalPriority
}

const retrieveOnlyUniqueChars = string => [...new Set(string)].join('')
const init2 = async (filename) => {
	let itemsForAGroup = []
	let totalPriority = 0
	const reader = readline.createInterface({
		input: createReadStream(filename),
		crlfDelay: Infinity,
	})

	reader.on('line', (line) => {
		itemsForAGroup.push(retrieveOnlyUniqueChars(line))
		if(itemsForAGroup.length % NUMBER_OF_LINE_BY_ELF === 0) {
			const lettersInCommon = findLettersInCommon(itemsForAGroup)
			const letter = lettersInCommon[0]
			const priority = priorityOfLetter(letter)
			totalPriority += priority
			itemsForAGroup = []
		}
	})
	await events.once(reader, 'close')
	return totalPriority
}

const run =  async (filename = DEFAULT_FILE) => {
	const totalPriority = await init(filename)
	return totalPriority
}
const run2 =  async (filename = DEFAULT_FILE) => {
	const totalPriority = await init2(filename)
	return totalPriority
}

const runs = [run, run2]
module.exports = { runs, splitIntoSameSizeParts, priorityOfLetter }
