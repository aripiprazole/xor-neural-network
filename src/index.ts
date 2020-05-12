import * as dotenv from 'dotenv'
import createCore from './core'

dotenv.config()

const core = createCore()

try {
  core.start()
  core.stop()
} catch (error) {
  console.error('Unexpected exception: ')
  console.error(error)
}
