// babel.config.js
// babel.config.js
module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }], // Handles ES modules for the Node environment
      '@babel/preset-react' // Handles JSX
    ]
  };
  