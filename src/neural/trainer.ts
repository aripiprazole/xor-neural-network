import { Network, Trainer } from 'synaptic'
import createLogger from '../logging/logger'

type Configuration = {
  learningRate?: number
  maxLearningIndex?: number
}

const DEFAULT_CONFIGURATION: Configuration = {}

function createTrainer(
  neuralNetwork: Network,
  configuration = DEFAULT_CONFIGURATION
) {
  const { learningRate = 0.5, maxLearningIndex = 10e7 } = configuration

  const logger = createLogger('training')

  function start() {
    logger.info('Starting trainer...')

    for (let index = 0; index < maxLearningIndex; ++index) {
      // 0,0 => 0
      neuralNetwork.activate([0, 0])
      neuralNetwork.propagate(learningRate, [0])

      // 0,1 => 1
      neuralNetwork.activate([0, 1])
      neuralNetwork.propagate(learningRate, [1])

      // 1,0 => 1
      neuralNetwork.activate([1, 0])
      neuralNetwork.propagate(learningRate, [1])

      // 1,1 => 0
      neuralNetwork.activate([1, 1])
      neuralNetwork.propagate(learningRate, [0])
    }

    logger.info('Successfully finished trainer')
  }

  function stop() {
    logger.info('Stopping trainer...')

    logger.info('Nothing to stop in trainer')
  }

  return {
    start,
    stop,
  }
}

export default createTrainer
