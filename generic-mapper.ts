import { expectType } from 'ts-expect'
import type { User } from './types'

export const concatenateFirstNameAndLastName = <T extends User>(user: T) => {
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

expectType<({ firstName: string; lastName: string } & { fullName: string })[]>(
  newUsers
)
