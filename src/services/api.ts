import axios from 'axios';
const requestHelper = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes'
});
const requestHelperLocal = axios.create({
    baseURL: 'http://localhost:4000'
});

export default{
    frase: {
        get: () => requestHelperLocal({
            url: 'frases',
            method: 'get',
        }),
        create: (data: any) => requestHelperLocal({
            url: 'frases',
            method: 'post',
            data
        })
    },
    categorias: {
        get: () => requestHelper({
            url: 'categories',
            method: 'get',
        })
    },
    
    fraseCategoria: {
        get: () => requestHelper({//recibir la categoria que se busca
            url: 'random?category=animal',
            method: 'get',
        })
    },
    
}