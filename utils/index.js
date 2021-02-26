import XRegExp from "xregexp"

let re = new XRegExp('((\\p{Ll})(\\p{Lu})|(\\d)(\\p{Lu})|(\\p{Ll})(\\d))', 'g')

const replace = () => {
  let lhs = arguments[2] || arguments[4] || arguments[6]
  let rhs = arguments[3] || arguments[5] || arguments[7]

  return lhs + '-' + rhs
}

export const kebabify = text => {
  return text.replace(re, replace).replace(re, replace).toLowerCase()
}
