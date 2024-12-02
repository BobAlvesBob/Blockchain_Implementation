function lightningHash(input) {
    return input.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0).toString(16);
}

class Block {
    constructor(data, hash, lastHash) {
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }
}

class Blockchain {
    constructor() {
        const genesis = new Block("Genesis", "gen-hash", "gen-lastHash");
        this.chain = [genesis];
    }
    addBlock(data) {
        const lastBlock = this.chain[this.chain.length - 1];
        const lastHash = lastBlock.hash;
        const hash = lightningHash(data + lastHash);
        const newBlock = new Block(data, hash, lastHash);
        this.chain.push(newBlock);
        
    }
}

const fooBlockchain = new Blockchain();

fooBlockchain.addBlock("First Block");
fooBlockchain.addBlock("Second Block");
fooBlockchain.addBlock("Third Block");

console.log(fooBlockchain);
