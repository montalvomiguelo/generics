import { expectType } from 'ts-expect'

/**
 * @template {string} T
 * @param {T[]} statuses
 */
const makeStatus = (statuses) => {
  return statuses
}

const statuses = makeStatus(['INFO', 'DEBUG', 'ERROR', 'WARNING'])

expectType(statuses)
