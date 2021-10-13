require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remind concert gesture forest fresh teach'; 
let testAccounts = [
"0xcf55404f07eb19733cbff572cead11f4d18ac5ad2589b0a4d38221379c530675",
"0xd70d237853d5d5c1473ff89f0e9fa7cc68b4af08f232a1af56c26bfa6af14884",
"0xf6173c91507fc76d03e00a00cdd237e5f0959d6518925fe1b6ce20f93535908c",
"0x0ba13aff7cba4e148a95c9e83bddbcb5cebfb69912b10fc5ac85d38eeb610eff",
"0x563efbddf94b3ec33027370883d8080053a43dd548c1887a06b04bcae7a0e083",
"0x4d669978b0744ba97d755744a059e8194f5e32d4e7f41d789fa17b03d87006e4",
"0x35070607ac303e59afc1b0fd0a99f8060d2a8f44f3e5e53862d06375daae2e29",
"0x8d43c0c51c4195ad20fa69aaec898e41883ed1cdbdf38fd95240803247fd487b",
"0x31f3bdf6e5a3a50465469fc70a69c94581af31128f9e3dc060c2762beae59ab3",
"0x476cf162c7760523fa5fd85a430ff57e21a239cd8180654beb71df68bb4feb67"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


