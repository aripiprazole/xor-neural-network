import { Layer, Network } from 'synaptic'

function createNetwork() {
  const inputLayer = new Layer(2)
  const hiddenLayer = new Layer(3)
  const outputLayer = new Layer(1)

  inputLayer.project(hiddenLayer)
  hiddenLayer.project(outputLayer)

  const neuralNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer,
  })

  return neuralNetwork
}

export default createNetwork
