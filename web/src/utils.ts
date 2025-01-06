export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function uninvert(obj) {
  const arr = []
  // If to robustify function
  if (obj) {
    Object.keys(obj).forEach((k) => obj[k].forEach((a) => (arr[a] = k)))
    return arr.join(' ')
  }
}
