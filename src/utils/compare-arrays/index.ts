/**
 * Returns true if both values are arrays and they contain the same elements.
 *
 * This function compares arrays with any number of dimensions.
 *
 * Elements are compared for strict equality.
 *
 * @param arr1 An array to compare to
 * @param arr2 An array to compare with
 */
function compareArrays(arr1: any[], arr2: any[]): boolean {
  if (arr1.length !== arr2.length) return false

  for (let i = 0, len = arr1.length; i < len; i++) {
    const element1 = arr1[i]
    const element2 = arr2[i]
    const element1IsArray = Array.isArray(element1)
    const element2IsArray = Array.isArray(element2)

    if (!element1IsArray || !element2IsArray) {
      if (element2IsArray || element2IsArray) return false

      if (element1 !== element2) return false

      continue
    }

    if (!compareArrays(element1, element2)) return false
  }

  return true
}

export default compareArrays
