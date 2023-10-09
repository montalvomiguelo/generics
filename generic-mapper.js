import { expectType } from 'ts-expect'

/**
 * @template {import('./types').User} T
 * @param {T} user
 */
export const concatenateFirstNameAndLastName = (user) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  }
}

const users = [
  {
    firstName: 'Miguel',
    lastName: 'Montalvo',
  },
]

const newUsers = users.map(concatenateFirstNameAndLastName)

expectType(newUsers)
