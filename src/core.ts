import createTrainer from './neural/trainer'
import createNetwork from './neural/network'
import createLogger from './logging/logger'

export type Service = {
  start: () => void
  stop: () => void
}

type Configuration = {
  trainer?: Service
}

const MAX_LEARNING_TIMES = 2 * 10e5

function createCore(configuration: Configuration = {}) {
  const logger = createLogger('core')

  const network = createNetwork()

  const {
    trainer = createTrainer(network, { maxLearningIndex: MAX_LEARNING_TIMES }),
  } = configuration

  function start() {
    logger.info('Starting core...')

    trainer.start()

    logger.info('Successfully started core')
  }

  function stop() {
    logger.info('Stopping core...')

    trainer.stop()

    logger.info('Successfully stopped core')
  }

  return {
    start,
    stop,
  }
}

export default createCore
