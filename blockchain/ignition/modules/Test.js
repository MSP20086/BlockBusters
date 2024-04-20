const{ buildModule } = require('@nomicfoundation/hardhat-ignition/modules')



const TestModule = buildModule('TestModule', (m) => {
  const contract = m.contract('Test')
 
  return { contract }
})

module.exports= TestModule
