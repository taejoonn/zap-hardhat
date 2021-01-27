const { task, taskArgs } = require("hardhat/config");
require("hardhat-deploy-ethers");
require("hardhat-deploy");

task("initiateProviderCurve", "Initializes the first 20 provider accounts with a unique bonding curve")

    .setAction(async () => {

        // Test accounts
        const signers = await ethers.getSigners();

        // Connection to Registry.sol
        const Registry = await ethers.getContractFactory('Registry');
        const registry = await Registry.attach('0xa513E6E4b8f2a923D98304ec87F64353C4D5C853');

        // Stores the endpoints of all 20 providers
        let endpoint = [
            "Ramanujan",
            "Lagrange",
            "Wiles",
            "Jacobi",
            "Turing",
            "Riemann",
            "Poincare",
            "Hilbert",
            "Fibonacci",
            "Bernoulli",
            "Pythagoras",
            "Gauss",
            "Newton",
            "Euler",
            "Archimedes",
            "Euclid",
            "Merkle",
            "Shamir",
            "Buterin",
            "Nakamoto"
        ];

        endpoint = endpoint.map(name => ethers.utils.formatBytes32String(name));

        const curve = [
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],
            [3, 0, 2, 1, 100],

        ]

        const broker = '0x0000000000000000000000000000000000000000';

        for (var i = 0; i < signers.length; i++) {

            await registry.connect(signers[i]).initiateProviderCurve(endpoint[i], curve[i], broker);

            await registry.connect(signers[i]).getProviderCurve(signers[i].address, endpoint[i])
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })


        }

    })