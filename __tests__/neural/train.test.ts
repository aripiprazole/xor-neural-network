import { Network } from 'synaptic'
import createNetwork from '../../src/neural/network'
import createTrainer from '../../src/neural/trainer'

const TRAINER_DEFAULT_OPTIONS = {
  maxLearningIndex: 20000,
}

describe('Trainer tests', () => {
  test('should not throw when start training', () => {
    const network = createNetwork()

    const trainer = createTrainer(network, TRAINER_DEFAULT_OPTIONS)

    expect(() => {
      trainer.start()
    }).not.toThrow()
  })

  test('should not throw when stop training', () => {
    const network = createNetwork()

    const trainer = createTrainer(network, TRAINER_DEFAULT_OPTIONS)

    expect(() => {
      trainer.stop()
    }).not.toThrow()
  })

  describe('XOR tests', () => {
    let network: Network

    beforeAll(() => {
      network = createNetwork()

      const trainer = createTrainer(network, TRAINER_DEFAULT_OPTIONS)

      trainer.start()
    })

    test('should network return a number rounded to [1] when activate [0,1]', () => {
      const [value] = network.activate([0, 1])

      expect(Math.round(value)).toEqual(1)
    })

    test('should network return a number rounded to [0] when activate [0,0]', () => {
      const [value] = network.activate([0, 0])

      expect(Math.round(value)).toEqual(0)
    })

    test('should network return a number rounded to [1] when activate [1,0]', () => {
      const [value] = network.activate([1, 0])

      expect(Math.round(value)).toEqual(1)
    })

    test('should network return a number rounded to [0] when activate [1,1]', () => {
      const [value] = network.activate([1, 1])

      expect(Math.round(value)).toEqual(0)
    })
  })
})
