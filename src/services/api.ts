import axios from 'axios';
const requestHelper = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes'
});

export default {
    frase: {
        get: (categoriaSeleccionada ="") => {
            let ruta = "random";
            if (categoriaSeleccionada !== "") {//recibir frase random
                ruta += "?category=" + categoriaSeleccionada
            }
           return requestHelper({//recibir de la categoria que se busca
                url: ruta,
                method: 'get',
            })
        },
    },
    categorias: {
        get: () => requestHelper({
            url: 'categories',
            method: 'get',
        })
    },

}