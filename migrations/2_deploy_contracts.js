const OptionBuyer = artifacts.require('OptionBuyer.sol');

const OptionHolder = artifacts.require('OptionHolder.sol');

module.exports = async function(deployer, _network, accounts) {

    const [writer, producer, _] = accounts;

    await promises.all( [OptionHolder, OptionBuyer].map(contract => deployer.deploy(contract)) );
    const [optionHolder, optionBuyer] = await promises.all(  [OptionHolder, OptionBuyer].map(contract => contract.deployed()) );

}