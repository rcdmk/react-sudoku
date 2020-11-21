import compareArrays from './'

describe('compareArrays', () => {
  it('returns true if arrays are identical', () => {
    expect(compareArrays([1, 2, 3, 4], [1, 2, 3, 4])).toBeTruthy()

    expect(compareArrays([1, '2', 3, '4'], [1, '2', 3, '4'])).toBeTruthy()

    expect(compareArrays([[1, '2', 3, '4']], [[1, '2', 3, '4']])).toBeTruthy()

    expect(
      compareArrays(
        [
          [1, '2', 3, '4'],
          [5, 6, null, undefined],
        ],
        [
          [1, '2', 3, '4'],
          [5, 6, null, undefined],
        ]
      )
    ).toBeTruthy()
  })

  it('returns false if arrays are identical not', () => {
    expect(compareArrays([1, 2, 4], [1, 2, 3])).toBeFalsy()

    expect(compareArrays([1, 2, 3, 4], [1, 2, 3])).toBeFalsy()

    expect(compareArrays([1, '2', 3, '4', '5'], [1, '2', 3, '4', 5])).toBeFalsy()

    expect(compareArrays([[1, '2', 3, '4'], [5]], [[1, '2', 3, '4']])).toBeFalsy()
  })
})
