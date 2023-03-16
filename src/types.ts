export enum ACCOUNT_TYPE {
    BRONZE = "Bronze",
    SILVER = "Prata",
    GOLD = "Ouro",
    PLATINUM = "Platina",
    BLACK = "Black"
}

export enum POKEMON_TYPE {
    GRASS = "Grass",
    FIRE = "Fire",
    WATER = "Water",
    THUNDER = "Thunder"
}

export type TAccount = {
    id: string,
    ownerName: string,
    balance: number,
    type: ACCOUNT_TYPE
}

export type TPokemon = {
    id: string,
    name: string,
    type: POKEMON_TYPE,
    power: number
}