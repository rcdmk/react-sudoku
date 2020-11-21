import shuffle from './'

describe('suffle', () => {
  it('returns an array with the same length as the array being shuffled', () => {
    const array = [1, 2, 3, 4, 5]
    shuffle(array)
    expect(array).toHaveLength(5)
  })

  it('returns an array with the same elements after being shuffled', () => {
    const array = [1, 2, 3, 4, 5]
    shuffle(array)

    expect(array).toContain(1)
    expect(array).toContain(2)
    expect(array).toContain(3)
    expect(array).toContain(4)
    expect(array).toContain(5)
  })
})
