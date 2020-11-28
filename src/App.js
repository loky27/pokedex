import React from 'react';
import Card from './components/card';
import Pagination from './components/pagination';
import './App.css';
import Opcard from "./components/option-card/opcard"
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ti:true,
            next: "",
            previous: "",
            count: "",
            numpag:0,
            pokemones: [],
            currentPage: 1,
            pokemonPerPage: 10,
            pokemon:""
        }
    }

    componentDidMount() {
        //Pedir la primera página con todos los pokemones
        const limit = this.state.pokemonPerPage;
        const url = 'https://pokeapi.co/api/v2/pokemon';
        //Consumir la API de pokeapi
        fetch(`${url}?limit=${limit}`)
            .then(response => response.json())
            .then(data => this.setState({pokemones: data.results, next: data.next, previous: data.previous, count: data.count}))
            .catch(error => {
                console.log(error);
            })
            //
    }
    numpoke(info) {
        let num = ""
        let con = 0
        for (let index = 0; index < info.length; index++) {
            if ((con === 6) && (info[index] != "/")) {
                num += info[index]
            }
            if (info[index] === "/") {
                con++
            }
        }
        return num
    }

    fetchPage = (requestPage) => {

        let up=this.state.numpag;
            up=requestPage - 4;

        // 1. Completar el método para poder obtener los pokemones dependiendo de la
        // actualizar el estado con la página solicitada
        this.setState({currentPage: requestPage});
        const limit = this.state.pokemonPerPage;
        const url = 'https://pokeapi.co/api/v2/pokemon';
        fetch(`${url}?limit=${limit}&offset=${ (requestPage) * limit}`)
            .then(response => response.json())
            .then(data => this.setState({
                pokemones: data.results, 
                next: data.next, 
                previous: data.previous,
                numpag:up,
                count: data.count
            }))
            .catch(error => {
                console.log(error);
            })
    }
    pag=(url, op)=> {

        if (op) {
            let max=this.state.currentPage+1;
            let up=this.state.numpag;
            up++;
            fetch(`${url}`)
            .then(response => response.json())
            .then(data => this.setState({
                pokemones: data.results, 
                next: data.next, 
                previous: data.previous,
                numpag: up,
                currentPage:max, 
                count: data.count}))
            .catch(error => {
                console.log(error);
            })
        } else {
            let max=this.state.currentPage-1;
            let up=this.state.numpag;
            up--;
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({
                    pokemones: data.results, 
                    next: data.next, previous: 
                    data.previous,
                    numpag: up,
                    currentPage: max,
                    count: data.count}))
                .catch(error => {
                    console.log(error);
                })
                //console.log(this.state.next)
        }

    }
    inf=(info,num) =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${info}`)
        .then(response => response.json())
        .then(data => this.setState({
            ti: num,
            pokemon:{
                data:data,
                name:data.forms[0].name,
                number:data.id,
                stats:data.stats,
                type:data.types,
                img:data.sprites.other.dream_world.front_default
            } , 
           }))
        .catch(error => {
            console.log(error);
        })
        console.log(this.state.pokemon)
    }
    ret=(op)=>{
        this.setState({ti:op})
    }
    render() {
        const max = {count:this.state.count,
                    poke:this.state.pokemonPerPage,
                    up:this.state.currentPage
                }
        return (
            <div>
                {this.state.ti
                    ?
                        ( null)
                    :
                    <Opcard
                    pokes={this.state.pokemon}
                    op={this.ret}
                    />
                }
            <div className="pokedex-container">
            {this.state.ti
                ?
                (this.state.pokemones.map(pokemon => {
                    // 2. Solucionar el problema de obtener las imagenes de los pokemones con id <
                    // 10, > 10, > 100
                    let numpoke = this.numpoke(pokemon.url);
                    let pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${numpoke}.svg`;
                    return (
                       
                            <Card 
                            key={numpoke} 
                            name={pokemon.name} 
                            img={pokemonImg} 
                            number={numpoke}
                            info={this.inf}
                            />)
                        })
                        )
                        :
                       null
                    }
                
                {
                this.state.ti
                ?
                (
                <Pagination 
                    key={"poke"}
                    fetchPageFn={this.fetchPage} 
                    pag={this.pag} 
                    urlp={this.state.previous}
                    urln={this.state.next}
                    numpag={this.state.numpag}
                    count={max}/>)
                    :
                    null
                }
                </div>
            </div>
        )
    }
}
