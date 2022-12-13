const readline = require('readline')
const { createReadStream } = require('fs')
const events = require('events')

const DEFAULT_FILE = '../files/day4_entry.txt'

const init = async (filename) => {
	const lines = []
	const reader = readline.createInterface({
		input: createReadStream(filename),
		crlfDelay: Infinity,
	})

	reader.on('line', (line) => {
		lines.push(line)
	})
	await events.once(reader, 'close')
	return lines
}
const run =  async (filename = DEFAULT_FILE) => {
	const lines = await init(filename)
	return lines
}

const runs = [run]
module.exports = { runs }
