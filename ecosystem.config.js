module.exports = {
  apps : [{
    name: 'zap-hardhat',
    script: './start.sh',
    instances: 1,
    autorestart: true,
  }]
};
