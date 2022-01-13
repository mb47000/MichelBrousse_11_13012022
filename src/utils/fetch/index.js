const JSONFILE = require('../../data/logements.json')

const fetchHousings = {
    all: () => JSONFILE,
    one: (id) => JSONFILE.find(house => house.id === id)
}

export default fetchHousings;