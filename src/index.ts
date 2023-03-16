import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts, pokemons } from './database'
import { TPokemon } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

// app.get("/accounts", (req: Request, res: Response) => {
//     res.send(accounts)
// })

// app.get("/accounts/:id", (req: Request, res: Response)=>{
//         const {id} = req.params
    
//         const result = accounts.find((account) => account.id === id)
    
//         res.status(200).send(result)
// })
    
// app.delete("/accounts/:id", (req: Request, res: Response)=>{

//     const {id} = req.params

//     const accountResult = accounts.findIndex((account) => account.id === id)

//     accountResult < 0 ?
//         res.status(404).send("Ítem não encontrado")
//     :
//         accounts.splice(accountResult, 1)
//         res.status(200).send("Ítem deletado com sucesso")
    
// })

// app.put("/accounts/:id", (req: Request, res: Response)=>{
//     const {id} = req.params

//     const newId = req.body.id
//     const newOwnerName = req.body.ownerName
//     const newBalance = req.body.balance
//     const newType = req.body.type

//     const accountFind = accounts.find((account) => account.id === id)

//     if(accountFind) {
//         accountFind.id = newId || accountFind.id
//         accountFind.ownerName = newOwnerName || accountFind.ownerName
//         accountFind.balance = newBalance || accountFind.balance
//         accountFind.type = newType || accountFind.type
//     }

//     res.status(200).send("Atualização realizada com sucesso")
// })

app.get('/pokemons', (req: Request, res: Response)=>{
    res.status(200).send(pokemons)
})

app.post('/pokemons',(req: Request, res: Response)=>{
    const {id, name, type, power} = req.body

    const newPokemon: TPokemon = {
        id,
        name,
        type,
        power
    }

    pokemons.push(newPokemon)

    res.status(200).send("Pokemon criado com sucesso!")
})

app.put('/pokemons/:id', (req: Request, res: Response)=>{
    const {id} = req.params

    const newId = req.body.id
    const newName = req.body.name
    const newType = req.body.type
    const newPower = req.body.power

    const pokemonFind = pokemons.find((pokemon) => pokemon.id === id)

    if(pokemonFind){
        pokemonFind.id = newId || pokemonFind.id
        pokemonFind.name = newName || pokemonFind.name
        pokemonFind.type = newType || pokemonFind.type
        pokemonFind.power = newPower || pokemonFind.power
    }

    res.status(200).send("Pokemon atualizado com sucesso")
})

app.delete('/pokemons/:id', (req: Request, res: Response)=>{
    const {id} = req.params

    const pokemonIndex = pokemons.findIndex((pokemon) => pokemon.id === id)

    if(pokemonIndex > 0) {
        pokemons.splice(pokemonIndex, 1)
    }

    res.status(200).send("Pokemon deletado com sucesso")
})