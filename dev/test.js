const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1529174418699,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1529174454921,
    "transactions": [],
    "nonce": 18140,
    "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1529174478831,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "b7c8aa80719411e8a0b9c10295ff83e7",
    "transactionid": "cd5cce30719411e8a0b9c10295ff83e7"
    }
    ],
    "nonce": 197008,
    "hash": "0000e691290d22fc9deeee9e23ee9e58dc82b7822ad476f7a2f1719d9659469d",
    "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    "index": 4,
    "timestamp": 1529174510982,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "b7c8aa80719411e8a0b9c10295ff83e7",
    "transactionid": "db9da3c0719411e8a0b9c10295ff83e7"
    }
    ],
    "nonce": 41448,
    "hash": "0000042066f65bd38c0ef8f0bd65a1f44494b4d067424e1d16fac1378d80d9e1",
    "previousBlockHash": "0000e691290d22fc9deeee9e23ee9e58dc82b7822ad476f7a2f1719d9659469d"
    },
    {
    "index": 5,
    "timestamp": 1529174741893,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "b8056560719411e8a1b8e9ce9104abf2",
    "transactionid": "eeca1640719411e8a1b8e9ce9104abf2"
    },
    {
    "amount": 900,
    "sender": "aaaaadsjslkdfhskjdfhsja",
    "recipient": "aaaaafwdfwfwdefwgwgrweg",
    "transactionid": "26186980719511e8b3abedc5a25b243b"
    },
    {
    "amount": 90,
    "sender": "aaaaadsjslkdfhskjdfhsja",
    "recipient": "aaaaafwdfwfwdefwgwgrweg",
    "transactionid": "3873a950719511e8b3abedc5a25b243b"
    },
    {
    "amount": 30,
    "sender": "aaaaadsjslkdfhskjdfhsja",
    "recipient": "aaaaafwdfwfwdefwgwgrweg",
    "transactionid": "3af52410719511e8b3abedc5a25b243b"
    }
    ],
    "nonce": 103432,
    "hash": "0000c110902a3ef369a09ac12e9e033fb469c788a2df9f5558f400602b377b3d",
    "previousBlockHash": "0000042066f65bd38c0ef8f0bd65a1f44494b4d067424e1d16fac1378d80d9e1"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "b7c43db0719411e89f1ec109d7e5d54d",
    "transactionid": "787094f0719511e89f1ec109d7e5d54d"
    }
    ],
    "currentNodeUrl": "http://localhost:3005",
    "networkNodes": []
};


console.log(bitcoin.chainIsValid(bc1.chain));

