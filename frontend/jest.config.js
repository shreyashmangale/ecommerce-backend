module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest' // Transform ES modules using Babel
    },
    testEnvironment: 'jsdom', // Simulates browser-like environment for React
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock styles
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js' // Mock assets
    }
  };
  