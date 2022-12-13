const readline = require('readline')
const { createReadStream } = require('fs')
const events = require('events')

const DEFAULT_FILE = '../files/day4_entry.txt'
const SECTION_SEPARATOR = '-'
const SECTIONS_SEPARATOR = ','

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

class Section {
	constructor(begin, end) {
		this.begin = parseInt(begin)
		this.end = parseInt(end)
	}

	_stringify() {
		if(this.begin === this.end) {
			return this.begin.toString()
		}
		let string = ''
		let i = this.begin
		const end = this.end
		while (i<=end){
			string+=i.toString()
			i++
		}
		return string
	}

	includesOrIsIncludesIn(section) {
		return this._includes(section) || this._isIncludesIn(section)
	}
	isOverlapped (section) {
		if(this.end > section.end) {
			return this.begin <= section.end
		}
			return section.begin <= this.end
	}
	isDifferentOf(section) {
		return this.toString() !== section.toString()
	}

	_includes(section) {
		return this.begin <= section.begin && this.end >= section.end
	}
	_isIncludesIn(section) {
		return this.begin >= section.begin && this.end <= section.end
	}

	toString() {
		return this._stringify()
	}
}
const createSection = (section) => {
	const [begin, end] = section.split(SECTION_SEPARATOR)
	return new Section(begin, end)
}
const createSections = (line) => {
	const [firstSection, secondSection] = line.split(SECTIONS_SEPARATOR)
	return [ createSection(firstSection), createSection(secondSection) ]
}
const run =  async (filename = DEFAULT_FILE) => {
	let numberOfSectionsIncludes = 0
	const lines = await init(filename)
	const sections = lines.map(line => createSections(line))
	sections.forEach(([firstSection, secondSection]) => {
		if(firstSection.includesOrIsIncludesIn(secondSection)) {
			numberOfSectionsIncludes++
		}
	})
	return numberOfSectionsIncludes
}
const run2 =  async (filename = DEFAULT_FILE) => {
	let numberOfSectionsOverlapped = 0
	const lines = await init(filename)
	const sections = lines.map(line => createSections(line))
	sections.forEach(([firstSection, secondSection]) => {
		if(firstSection.isOverlapped(secondSection)) {
			numberOfSectionsOverlapped++
		}
	})
	return numberOfSectionsOverlapped
}

const runs = [run, run2]
module.exports = { runs, Section }
