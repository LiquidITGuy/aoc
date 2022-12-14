const STATUS = {
	SUCCESS: 0,
	FAILED: 1,
}
const methods = {
	1: {
		runs: require('./day1').runs,
	},
	2: {
		runs: require('./day2').runs,
	},
	3: {
		runs: require('./day3').runs,
	},
	4: {
		runs: require('./day4').runs,
	},
	5: {
		runs: require('./day5').runs,
	},
}

const DISPLAY_PART = {
	1: 'First',
	2: 'Second',
}

const sanitizeDay = (day) => {
	if(day.includes('day')) {
		return day.replace('day','')
	}
	return day
}

const [, , day, file] = process.argv
const sanitizedDay = sanitizeDay(day)
if (!sanitizedDay || isNaN(Number(sanitizedDay)) || !methods[sanitizedDay]) {
	console.group('Error in your command')
	console.error('please enter a day on your command')
	console.warn('you need to pass a day as an argument when you run your command')
	console.info('you can also pass a file as a second argument when you run your command')
	console.info('this message can happen if the day is not implemented yet')
	console.groupEnd()
	process.exit(STATUS.FAILED)
}
const displayResult = async (day, file) => {
	console.group(`day ${day}`)
	let index = 1
	for (const method of (methods[day].runs)) {
		console.group(`${DISPLAY_PART[index]} part`)
		const result = await method(file)
		console.log(result)
		console.groupEnd()
		index++
	}
	console.groupEnd()
}

displayResult(sanitizedDay, file).then(() => {
	process.exit(STATUS.SUCCESS)
})
