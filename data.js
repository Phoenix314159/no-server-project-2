const planets = require('planet-facts')

console.log(`The volume of the Earth is ${planets.earth.volume}m³`)

module.exports = {
    earth : planets.earth.volume
}
