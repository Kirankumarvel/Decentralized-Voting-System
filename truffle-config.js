module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default:none)
      port: 7545,  // standard Port
      network_id: "*" // Match any network id
    }
  }
}
