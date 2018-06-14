const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(1234, 'KGJH)*YHJK&JKBJ67fhvjt78787878^$*8','wekjfwkdfbkjdKGGJGKJG');
bitcoin.createNewTransaction(100,'sendervd78jbsf7djsdb8','receiverf7gjhgjklgfl698');

bitcoin.createNewBlock(1234, 'KGJfhvjt78787878^$*8','wekjfwKGGJGKJG');

bitcoin.createNewTransaction(100,'sendervd78jbsf7djsdb8','receiverf7gjhgjklgfl698');
bitcoin.createNewTransaction(200,'sendervd78jbsf7djsdb8','receiverf7gjhgjklgfl698');
bitcoin.createNewTransaction(2000,'sendervd78jbsf7djsdb8','receiverf7gjhgjklgfl698');

bitcoin.createNewBlock(14, 'fhfhf^$ggggggggggggggc*8','wekjfwKGGdsfdfdJGKJG');

console.log(bitcoin.chain[2]);