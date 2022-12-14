const readline = require('readline')
const { createReadStream } = require('fs')
const events = require('events')

const DEFAULT_FILE = '../files/day5_entry.txt'
const CHAR_TO_REMOVE = /( |\[|\])+/g
const isLineOFdelimitation =  line => /^( [\d]+?( ){1,2})+$/.test(line)

const MOVE_REGEX = /^move ([\d]+) from ([\d]+) to ([\d]+)$/gi
class Move {
	constructor(string) {
		const [ ,quantity, from, to ] = [...string.matchAll(MOVE_REGEX)][0]
		this.quantity = quantity
		this.from = from
		this.to = to
	}
}
class SupplyStack {
	constructor() {
		this.moves = []
		this.stacks = []
		this.isInit = false
	}

	init(stacksSize) {
		let i = 0
		do {
			i++
			this.stacks.push([])
		} while (i < stacksSize)
		this.isInit = true
	}

	unshiftStack(stack) {
		stack.forEach((stackElement, index) => {
			if(stackElement && stackElement!=='') {
				this.stacks[index].unshift(stackElement)
			}
		})
	}

	doOneMove(move) {
		const stackToTake = this.stacks[move.from-1]
		const stackToPut = this.stacks[move.to-1]
		for (let i = 0; i<move.quantity; i++) {
			stackToPut.push(stackToTake.pop())
		}
	}

	doOneMoveLIFO(move) {
		const stackToTake = this.stacks[move.from-1]
		const stackToPut = this.stacks[move.to-1]
		const takenStack = []
		for (let i = 0; i<move.quantity; i++) {
			takenStack.unshift(stackToTake.pop())
		}
		this.stacks[move.to-1] = stackToPut.concat(takenStack)
	}

	doAllQueuedMove() {
		while(this.moves.length) {
			this.doOneMove(this.moves.pop())
		}
	}
	doAllQueuedMoveLIFO() {
		while(this.moves.length) {
			this.doOneMoveLIFO(this.moves.pop())
		}
	}
	unshiftMove(move) {
		this.moves.unshift(move)
	}
	toString() {
		return this.stacks.map(stack => stack[stack.length-1]).join('')
	}
}

const init = async (filename) => {
	const supplyStack = new SupplyStack()
	let delimitationLinePassed = false
	const reader = readline.createInterface({
		input: createReadStream(filename),
		crlfDelay: Infinity,
	})

	reader.on('line', (line) => {
		if(!supplyStack.isInit) {
			supplyStack.init((line.length+1)/4)
		}
		if(isLineOFdelimitation(line)) {
			delimitationLinePassed = true
		}
		if(!delimitationLinePassed) {
			supplyStack.unshiftStack(convertLineStack(line))
		}
		if(line !== '' && !isLineOFdelimitation(line) && delimitationLinePassed){
			const move = new Move(line)
			supplyStack.unshiftMove(move)
		}
	})
	await events.once(reader, 'close')
	return supplyStack
}

const convertLineStack = (line) =>
	`${line} `.match(/.{1,4}/g)
		.map(stack => stack
			.replaceAll(CHAR_TO_REMOVE, ''),
		)
const run =  async (filename = DEFAULT_FILE) => {
	const supplyStack = await init(filename)
	supplyStack.doAllQueuedMove()
	return supplyStack.toString()
}
const run2 =  async (filename = DEFAULT_FILE) => {
	const supplyStack = await init(filename)
	supplyStack.doAllQueuedMoveLIFO()
	return supplyStack.toString()
}

const runs = [run, run2]
module.exports = { runs, SuplyStack: SupplyStack, convertLineStack, isLineOFdelimitation }
