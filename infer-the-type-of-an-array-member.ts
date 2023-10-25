import { expectType } from 'ts-expect'

const makeStatus = <TStatuses extends string>(statuses: TStatuses[]) => {
  return statuses
}

const statuses = makeStatus(['INFO', 'DEBUG', 'ERROR', 'WARNING'])

expectType<Array<'INFO' | 'DEBUG' | 'ERROR' | 'WARNING'>>(statuses)
