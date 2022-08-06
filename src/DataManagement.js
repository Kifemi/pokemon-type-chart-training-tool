export default function fetchAllTypes() {
    return fetch("https://pokeapi.co/api/v2/type")
        .then(res => res.json())
        .then(allTypesData => {
            const fetchAllList = allTypesData.results.map((type, index) => {
                if (index < 18) {
                    return fetchType(type.url)
                }
            })
            return Promise.all(fetchAllList)
        });
}

function fetchType(url) {
    return fetch(url)
        .then(res => res.json())
        .then(typeData => {
            return {
                name: typeData.name,
                // backgroundColor: typeBackgroundColors[typeData.name],
                icon: typeIcons[typeData.name],
                attackRelations: {
                    superEffective: typeData.damage_relations.double_damage_to,
                    notEffective: typeData.damage_relations.half_damage_to,
                    noEffect: typeData.damage_relations.no_damage_to,
                },
                defenceRelations: {
                    notEffective: typeData.damage_relations.half_damage_from,
                    superEffective: typeData.damage_relations.double_damage_from,
                    noEffect: typeData.damage_relations.no_damage_from, 
                }
            }
        });
}

export const typeBackgroundColors = {
    normal: "#AAAA99",
    fire: "#FF4422",
    water: "#3399FF",
    electric: "#FFCC33",
    grass: "#77CC55",
    ice: "#66CCFF",
    fighting: "#BB5544",
    poison: "#AA5599",
    ground: "#DDBB55",
    flying: "#8899FF",
    psychic: "#FF5599",
    bug: "#AABB22",
    rock: "#BBAA66",
    ghost: "#6666BB",
    dragon: "#7766EE",
    dark: "#775544",
    steel: "#AAAABB",
    fairy: "#EE99EE",
}

const typeIcons = {
    normal: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg",
    fire: "https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg",
    water: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg",
    electric: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg",
    grass: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg",
    ice: "https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg",
    fighting: "https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg",
    poison: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg",
    ground: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg",
    flying: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg",
    psychic: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg",
    bug: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg",
    rock: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg",
    ghost: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg",
    dragon: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg",
    dark: "https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg",
    steel: "https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg",
    fairy: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg",
}

export const bug = {
    "name": "bug",
    "color": "#AABB22",
    "attack": {
        "superEffective": [
            {
                "name": "grass",
                "url": "https://pokeapi.co/api/v2/type/12/"
            },
            {
                "name": "psychic",
                "url": "https://pokeapi.co/api/v2/type/14/"
            },
            {
                "name": "dark",
                "url": "https://pokeapi.co/api/v2/type/17/"
            }
        ],
        "notEffective": [
            {
                "name": "fighting",
                "url": "https://pokeapi.co/api/v2/type/2/"
            },
            {
                "name": "flying",
                "url": "https://pokeapi.co/api/v2/type/3/"
            },
            {
                "name": "poison",
                "url": "https://pokeapi.co/api/v2/type/4/"
            },
            {
                "name": "ghost",
                "url": "https://pokeapi.co/api/v2/type/8/"
            },
            {
                "name": "steel",
                "url": "https://pokeapi.co/api/v2/type/9/"
            },
            {
                "name": "fire",
                "url": "https://pokeapi.co/api/v2/type/10/"
            },
            {
                "name": "fairy",
                "url": "https://pokeapi.co/api/v2/type/18/"
            }
        ],
        "noEffect": []
    },
    "defence": {
        "resistances": [
            {
                "name": "fighting",
                "url": "https://pokeapi.co/api/v2/type/2/"
            },
            {
                "name": "ground",
                "url": "https://pokeapi.co/api/v2/type/5/"
            },
            {
                "name": "grass",
                "url": "https://pokeapi.co/api/v2/type/12/"
            }
        ],
        "weaknesses": [
            {
                "name": "flying",
                "url": "https://pokeapi.co/api/v2/type/3/"
            },
            {
                "name": "rock",
                "url": "https://pokeapi.co/api/v2/type/6/"
            },
            {
                "name": "fire",
                "url": "https://pokeapi.co/api/v2/type/10/"
            }
        ],
        "immunities": []
    }
}

export const electric = {
    "name": "electric",
    "color": "#FFCC33",
    "attack": {
        "superEffective": [
            {
                "name": "flying",
                "url": "https://pokeapi.co/api/v2/type/3/"
            },
            {
                "name": "water",
                "url": "https://pokeapi.co/api/v2/type/11/"
            }
        ],
        "notEffective": [
            {
                "name": "grass",
                "url": "https://pokeapi.co/api/v2/type/12/"
            },
            {
                "name": "electric",
                "url": "https://pokeapi.co/api/v2/type/13/"
            },
            {
                "name": "dragon",
                "url": "https://pokeapi.co/api/v2/type/16/"
            }
        ],
        "noEffect": [
            {
                "name": "ground",
                "url": "https://pokeapi.co/api/v2/type/5/"
            }
        ]
    },
    "defence": {
        "resistances": [
            {
                "name": "flying",
                "url": "https://pokeapi.co/api/v2/type/3/"
            },
            {
                "name": "steel",
                "url": "https://pokeapi.co/api/v2/type/9/"
            },
            {
                "name": "electric",
                "url": "https://pokeapi.co/api/v2/type/13/"
            }
        ],
        "weaknesses": [
            {
                "name": "ground",
                "url": "https://pokeapi.co/api/v2/type/5/"
            }
        ],
        "immunities": []
    }
}