import { ACCOUNT_TYPE, POKEMON_TYPE, TAccount, TPokemon } from "./types";

export const accounts: TAccount[] = [
    {
        id: "a001",
        ownerName: "Ciclano",
        balance: 10000,
        type: ACCOUNT_TYPE.GOLD
    },
    {
        id: "a002",
        ownerName: "Astrodev",
        balance: 500000,
        type: ACCOUNT_TYPE.BLACK
    },
    {
        id: "a003",
        ownerName: "Fulana",
        balance: 20000,
        type: ACCOUNT_TYPE.PLATINUM
    }
]

export const pokemons: TPokemon[] = [
    {
        id: "001",
        name: "Charmander",
        type: POKEMON_TYPE.FIRE,
        power: 100
    },
    {
        id: "002",
        name: "Bulbasaur",
        type: POKEMON_TYPE.GRASS,
        power: 100
    },
    {
        id: "003",
        name: "Squirtle",
        type: POKEMON_TYPE.WATER,
        power: 100
    }
] 