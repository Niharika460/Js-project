// Create an array to hold the NFT objects
const nfts = [];

// Function to mint a new NFT
function mintNFT(name, description, age, centuries, fifties) {
  // Create an object to hold the metadata for the NFT
  const nftMetadata = {
    name: name,
    description: description,
    age: age,
    centuries: centuries,
    fifties: fifties,
  };

  // Store the minted NFT in the array
  nfts.push(nftMetadata);
}

// Function to list all NFTs
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Name: " + nfts[i].name);
    console.log("Description: " + nfts[i].description);
    console.log("Age: " + nfts[i].age);
    console.log("Centuries: " + nfts[i].centuries);
    console.log("Fifties: " + nfts[i].fifties);
    console.log("\n");
  }
}

// Function to get the total supply of NFTs
function getTotalSupply() {
  return nfts.length;
}

mintNFT("Sachin Tendulkar", "Legendary Indian cricketer", 48, 100, 164);
mintNFT("Virat Kohli", "Indian cricket team captain", 32, 70, 59);
mintNFT("MS Dhoni", "Former Indian cricket team captain", 39, 10, 20);
mintNFT("Ricky Ponting", "Former Australian cricketer", 47, 71, 82);
mintNFT("Jacques Kallis", "Former South African cricketer", 47, 62, 58);
mintNFT("Brian Lara", "Former West Indian cricketer", 52, 53, 63);
mintNFT("AB de Villiers", "South African cricketer", 37, 47, 47);

// List all NFTs
listNFTs();

// Get the total supply of NFTs
const totalSupply = getTotalSupply();
console.log("Total Supply: " + totalSupply);
