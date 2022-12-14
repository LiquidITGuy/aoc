const { runs, Section } = require('../day4')
const CARACTERISATION_FILE_ENTRY = '../files/day4_test_entry.txt'
const CARACTERISATION_DAY1_REAL_RESULT_FILE_ENTRY = '../files/day4_entry.txt'
const CARACTERISATION_EXPECTED_OUTPUT_RUN1 = 2
const CARACTERISATION_EXPECTED_OUTPUT_RUN1BIS = 448
const CARACTERISATION_EXPECTED_OUTPUT_RUN2 = 4
const [ run, run2 ] = runs
describe('day4', () => {
	test('caracterisation testing run 1', async () => {
		expect(await run(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN1)
	})
	test('caracterisation testing run 1 Bis', async () => {
		expect(await run(CARACTERISATION_DAY1_REAL_RESULT_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN1BIS)
	})
	test('caracterisation testing run 2', async () => {
		expect(await run2(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN2)
	})
})
describe('Section',() => {
	describe('toString', () => {
		it('should return 6 with 6-6', () => {
			const section = new Section(6,6)
			expect(section.toString()).toEqual('6')
		})
		it('should return 7 with 7-7', () => {
			const section = new Section(7,7)
			expect(section.toString()).toEqual('7')
		})
		it('should return 78 with 7-8', () => {
			const section = new Section(7,8)
			expect(section.toString()).toEqual('78')
		})
		it('should return 678 with 6-8', () => {
			const section = new Section(6,8)
			expect(section.toString()).toEqual('678')
		})
		it('should return 23456789101112 with 2-12', () => {
			const section = new Section(2,12)
			expect(section.toString()).toEqual('23456789101112')
		})
	})
	describe('includesOrIsIncludesIn', () => {
		it('should return false with 2 sections without inclusion', () => {
			const expectedResult = false
			const firstSection = new Section(1,3)
			const secondSection = new Section(3,6)
			expect(firstSection.includesOrIsIncludesIn(secondSection)).toBe(expectedResult)

		})
		it('should return false with 2 sections without inclusion but with an overlap', () => {
			const expectedResult = false
			const firstSection = new Section(1,4)
			const secondSection = new Section(2,5)
			expect(firstSection.includesOrIsIncludesIn(secondSection)).toBe(expectedResult)

		})
		it('should return true with 2 sections with two similar sections', () => {
			const expectedResult = true
			const firstSection = new Section(1,4)
			const secondSection = new Section(1,4)
			expect(firstSection.includesOrIsIncludesIn(secondSection)).toBe(expectedResult)

		})
		it('should return true when the second section includes into the first one', () => {
			const expectedResult = true
			const firstSection = new Section(1,9)
			const secondSection = new Section(2,4)
			expect(firstSection.includesOrIsIncludesIn(secondSection)).toBe(expectedResult)
		})
		it('should return true when the first section includes into the second one', () => {
			const expectedResult = true
			const firstSection = new Section(2,4)
			const secondSection = new Section(1,9)
			expect(firstSection.includesOrIsIncludesIn(secondSection)).toBe(expectedResult)
		})
		it('should return true when the second section includes into the first one with only one segment', () => {
			const expectedResult = true
			const firstSection = new Section(1,9)
			const secondSection = new Section(3,3)
			expect(firstSection.includesOrIsIncludesIn(secondSection)).toBe(expectedResult)
		})
		it('should return true when the first section includes into the second one with only one segment', () => {
			const expectedResult = true
			const firstSection = new Section(3,3)
			const secondSection = new Section(1,9)
			expect(firstSection.includesOrIsIncludesIn(secondSection)).toBe(expectedResult)
		})
		describe('edge case',  () => {
			it('should return false when the first section is 10-19 into the second one with only one segment', () => {
				const expectedResult = false
				const firstSection = new Section(10,19)
				const secondSection = new Section(1,1)
				expect(firstSection.includesOrIsIncludesIn(secondSection)).toBe(expectedResult)
			})
		})
	})
	describe('isOverlapped', () => {
		describe('with a end section for the first section bigger than the second section', function () {
			it('should return true if the second section end is bigger than the begin of the first one', () => {
				const expectedResult = true
				const firstSection = new Section(10,15)
				const secondSection = new Section(8,12)
				expect(firstSection.isOverlapped(secondSection)).toBe(expectedResult)
			})
			it('should return true if the second section end is equal to the first one', () => {
				const expectedResult = true
				const firstSection = new Section(10,15)
				const secondSection = new Section(8,10)
				expect(firstSection.isOverlapped(secondSection)).toBe(expectedResult)
			})
			it('should return false if the second section end is less to the first one', () => {
				const expectedResult = false
				const firstSection = new Section(10,15)
				const secondSection = new Section(8,9)
				expect(firstSection.isOverlapped(secondSection)).toBe(expectedResult)
			})

		})
		describe('with a end section for the second section bigger than the first section', function () {
			it('should return true if the first section end is bigger than the begin of the second one', () => {
				const expectedResult = true
				const firstSection = new Section(8,12)
				const secondSection = new Section(10,15)
				expect(firstSection.isOverlapped(secondSection)).toBe(expectedResult)
			})
			it('should return true if the first section end is equal to the second one', () => {
				const expectedResult = true
				const firstSection = new Section(8,10)
				const secondSection = new Section(10,15)
				expect(firstSection.isOverlapped(secondSection)).toBe(expectedResult)
			})
			it('should return false if the first section end is less to the second one', () => {
				const expectedResult = false
				const firstSection = new Section(8,9)
				const secondSection = new Section(10,15)
				expect(firstSection.isOverlapped(secondSection)).toBe(expectedResult)
			})

		})
		describe('edge case', () => {
			it('should return true if the begin of the second section is equal of the end of the first one', () => {
				const expectedResult = true
				const firstSection = new Section(1,8)
				const secondSection = new Section(8,12)
				expect(firstSection.isOverlapped(secondSection)).toBe(expectedResult)
			})
			it('should return true if the begin of the second section is equal of the begin of the first one', () => {
				const expectedResult = true
				const firstSection = new Section(8,8)
				const secondSection = new Section(8,12)
				expect(firstSection.isOverlapped(secondSection)).toBe(expectedResult)
			})
			it('should return true if the end of the second section is equal of the begin of the first one', () => {
				const expectedResult = true
				const firstSection = new Section(2,8)
				const secondSection = new Section(8,8)
				expect(firstSection.isOverlapped(secondSection)).toBe(expectedResult)
			})
			it('should return true if the end of the first section is equal of the begin of the second one', () => {
				const expectedResult = true
				const firstSection = new Section(8,8)
				const secondSection = new Section(2,8)
				expect(firstSection.isOverlapped(secondSection)).toBe(expectedResult)
			})
			it('should return true if all the sections are identical', () => {
				const expectedResult = true
				const firstSection = new Section(2,8)
				const secondSection = new Section(2,8)
				expect(firstSection.isOverlapped(secondSection)).toBe(expectedResult)
			})
			it('should return true if all the sections are a one similar section', () => {
				const expectedResult = true
				const firstSection = new Section(8,8)
				const secondSection = new Section(8,8)
				expect(firstSection.isOverlapped(secondSection)).toBe(expectedResult)
			})
		})
	})
})
