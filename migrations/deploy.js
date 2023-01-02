const Token = artifacts.require('Token');
const Dice = artifacts.require('Dice');

module.exports = async function(deployer) {
 // const token = {address: '0xF42a4429F107bD120C5E42E069FDad0AC625F615'};
 const tokenSupply = 1000000000;
 const tokenDecimals = 18;
 const tokenName = 'XUSD Token';
 const tokenSymbol = 'XUSD';
 const diceMinBet = '1000000000000000000'; // 1 XUSD
 const diceMaxBet = '100000000000000000000'; // 100 XUSD
 const diceFeePercent = '3';
 const diceDev = '0x650E5c6071f31065d7d5Bf6CaD5173819cA72c41';

 await deployer.deploy(Token, tokenName, tokenSymbol, tokenSupply, tokenDecimals);
 const token = await Token.deployed();
 await deployer.deploy(Dice, token.address, diceDev, diceMinBet, diceMaxBet, diceFeePercent);
 const dice = await Dice.deployed();

 // TODO: token.transfer WORKS ONLY IF A NEW TOKEN IS DEPLOYED, NOT WITH JUST ADDRESS
 token.transfer(dice.address, '10000000000000000000000'); // 10 000 XUSD
};
