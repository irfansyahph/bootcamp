const cities = ["merak", "tangerang", "jakarta", "bogor", "cianjur", "cimahi", "bandung"];

const jakarta = cities.indexOf("jakarta")

const citiesSliced = [...cities.slice(0, jakarta), ...cities.slice(jakarta + 1)]

function citiesSlice(arrays, cityBetween) {
    return citiesSliced
}

console.log(citiesSlice(cities, "jakarta"));
//['merak', 'tangerang', 'bogor', 'cianjur', 'cimahi', 'bandung']