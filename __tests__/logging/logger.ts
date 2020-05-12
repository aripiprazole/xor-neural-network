import createLogger, { Logger } from '../../src/logging/logger'

describe('Logger tests', () => {
  let logger: Logger

  beforeAll(() => {
    logger = createLogger('logger_tests')
  })

  test('should not throw when call logger.info', () => {
    expect(() => {
      logger.info('Test')
    }).not.toThrow()
  })

  test('should not throw when call logger.warn', () => {
    expect(() => {
      logger.warn('Test')
    }).not.toThrow()
  })

  test('should not throw when call logger.error', () => {
    expect(() => {
      logger.error('Test')
    }).not.toThrow()
  })
})
