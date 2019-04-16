export default function(state = {}, action) {
    switch (action.type) {
        case 'GET_MUSICS':
            return state;
        case 'MUSICS_RECEIVED':
            return {
                ...state,
                musics: action.musics
            }
        case 'MUSICS_ERROR':
            console.log('Error', action.error);
            return state
        case 'MAP_MUSICS':
            let mappedMusics = {
                names: [],
                songs: [],
                dates: []
            };
            let map = {};
            state.musics.forEach(item => {
                for (let key in item) {
                    let el = item[key];
                    if (key !== 'type' && key !== 'id' && !map[el] ) {
                        mappedMusics[key + 's'].push({
                            id: Math.round(Math.random() * 1000000),
                            value: el});
                            map[el] = true;
                    }
                }
            });

            return {
                ...state,
                ...mappedMusics
            }

        case 'FILTER_BY_NAME' :
            return {
                ...state,
                musics: state.musics.filter((item) => (item.name === action.payload))
            }

        case 'FILTER_BY_SONG' :
            return {
                ...state,
                musics: state.musics.filter((item) => (item.song === action.payload))
            }

        case 'FILTER_BY_DATE' :
            return {
                ...state,
                musics: state.musics.filter((item) => (item.date === action.payload))
            }
        default:
            return state;
    }
}
