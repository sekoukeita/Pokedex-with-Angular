export interface Pokemom{
    id: number;
    name: string;
    sprites: {
        front_shiny: string,
        front_default: string
    };
    abilities: Array<{
        ability: {
            name: string
        }
    }>;
}