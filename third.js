import fetch from 'node-fetch'

async function getCountry() {
    let item = [];
    const data = await fetch('https://api.first.org/data/v1/countries?limit=1000').then((response) => response.json()).then((data) => {
        return data.data
    })
    await Promise.all(Object.keys(data).map(async (val) => {
        item.push({
            name: data[val].country, abbr: val, remark: "", regionId: await convertRegionToId(data[val].region)
        })
    }))
    return item
}

async function getRegion() {
    let data = [
        { id: 1, name: "Asia" },
        { id: 2, name: "Africa" },
        { id: 3, name: "North America" },
        { id: 4, name: "South America" },
        { id: 5, name: "Oceania" },
        { id: 6, name: "Europe" },
        { id: 7, name: "Australia" },
        { id: 8, name: "Central America" },
        { id: 9, name: "Middle East" },
        { id: 10, name: "The Caribbean" },
        { id: 11, name: "Antarctic" }

    ]
    return data
}

async function convertRegionToId(regionName) {
    const data = await getRegion().then((data) => {
        return data.find(v => v.name === regionName);
    })
    return data.id
}


async function render () {
    let result = {}
    let countries = await getCountry()
    let region = await getRegion();
    countries.map((val) => {
        const obj = region.find(v => v.id === val.regionId)
        result[val.abbr] = obj.name;
    })
    return result;
}

render().then(data => {
    console.log(data)
})