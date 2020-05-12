import createCore from '../src/core'
import createLogger from '../src/logging/logger'

function createServiceMock() {
  const logger = createLogger('mock_service')

  return {
    start: () => {
      logger.info('Started mock')
    },

    stop: () => {
      logger.info('Stopped mock')
    },
  }
}

describe('Core tests', () => {
  test('should not throw when start core', () => {
    const core = createCore({
      trainer: createServiceMock(),
    })

    expect(() => {
      core.start()
    }).not.toThrow()
  })

  test('should not throw when stop core', () => {
    const core = createCore({
      trainer: createServiceMock(),
    })

    expect(() => {
      core.stop()
    }).not.toThrow()
  })
})
