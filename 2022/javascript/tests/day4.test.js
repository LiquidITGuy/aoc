const { runs, Section } = require('../day4')
const CARACTERISATION_FILE_ENTRY = '../files/day4_test_entry.txt'
const CARACTERISATION_DAY1_REAL_RESULT_FILE_ENTRY = '../files/day4_entry.txt'
const CARACTERISATION_EXPECTED_OUTPUT_RUN1 = 2
const CARACTERISATION_EXPECTED_OUTPUT_RUN1BIS = 448
const [ run ] = runs
describe('day4', () => {
	test('caracterisation testing run 1', async () => {
		expect(await run(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN1)
	})
	test('caracterisation testing run 1 Bis', async () => {
		expect(await run(CARACTERISATION_DAY1_REAL_RESULT_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN1BIS)
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
})
