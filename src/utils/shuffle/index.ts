/**
 * Shuffles the provided array elements
 * @param array An array of type T to be shuffled
 */
function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export default shuffle
