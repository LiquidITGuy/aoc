const events = require('events')
const readline = require('readline')
const { createReadStream } = require('fs')

const DEFAULT_FILE = '../files/day1_entry.txt'
const ELF_SEPARATOR = ''
const INITIAL_CALORIES_OWNED_BY_AN_ELF = 0

const init = async (filename) => {
	const caloriesOwnedByElfs = [INITIAL_CALORIES_OWNED_BY_AN_ELF]
	const reader = readline.createInterface({
		input: createReadStream(filename),
		crlfDelay: Infinity,
	})

	reader.on('line', (line) => {
		const currentElf = caloriesOwnedByElfs.length-1
		if(line!==ELF_SEPARATOR) {
			caloriesOwnedByElfs[currentElf]+=parseInt(line)
		}
		else {
			caloriesOwnedByElfs.push(INITIAL_CALORIES_OWNED_BY_AN_ELF)
		}
	})
	await events.once(reader, 'close')
	return caloriesOwnedByElfs
}
const run = async (filename = DEFAULT_FILE) => {
	const elfsCalories = await init(filename)
	const maxCalories = Math.max(...elfsCalories)
	return maxCalories
}
const runs = [run]
module.exports = { runs }
