import React from 'react'

export async function listadoPokemons(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
    })
}

export async function obtenerPokemonInfo(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);})
    }
        )
}