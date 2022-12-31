
// Use to check negative test cases for revert reasons
// Example usage: expect(hasReason(error, "revert Reason")).to.be.true;
// Use within a try/catch block
/// @param {Error} error - Error object
/// @param {string} text - Text to search for in error message
var hasReason = (error, text) => {
  return error.toString().indexOf(text) > -1;
}

// Use to initialize smart contracts + deploy for testing
// Example usage: const contract = await initSmartContracts();
var initSmartContracts = async () => {
  
  let contractFactory = await ethers.getContractFactory("<Contract>");
  const contract = await contractFactory.deploy();
  await contract.deployed();

  return contract;
}

module.exports = {
  hasReason,
  initSmartContracts
}