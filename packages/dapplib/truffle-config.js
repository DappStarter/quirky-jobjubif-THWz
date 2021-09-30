require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name release rural essence install battle flower genre'; 
let testAccounts = [
"0x9791879b03b78b7f5a178c79bf0248ec2ac3f1b73a017b9ec24f84eae833ce6c",
"0xc78cb2d829a61395d192e1338377065ffe8ad7e00905c88dfee4430d7151f1e1",
"0x8831b67d97c3b0a765c5dabd8fcd9bb710d39dfdb085930e69a58d0971384a3e",
"0xa9767d454617363851368a82190a776519c0f3ef90f4f61a0533593cd2796878",
"0xf9c5309726d2913a72353c3a3c4213a1fe00c3684f270343b7dfb49faf1e55a2",
"0xbf90ba88992b7debbe115c4b9f2404b5229de64eda2e9b54e3401214267491be",
"0x87d457d3cb95a9ea26d839d0ee79eb4d872c4d8084465eb1a0fcb0928c18ebb7",
"0x0210b25f459309137f5b99e1404d16c68cee2d70d7184c851d738adea012fa01",
"0x2dff2428cd3c0efcf689b0e46b75a1082aa919fd8fc860badeec9266a2f20dff",
"0xb6eea08b47dd479f280d41ede03744b5cd79aa7f48c5571b5f46685bc577f462"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

