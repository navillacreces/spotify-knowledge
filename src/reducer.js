export const initialState = {
    user : null,
    playlists: [],
    // remove after
    token: null,
    topArtists : [],
    topTracks:[],
    recentlyPlayed:[]
    
};


const reducer = (state,action) => {

    console.log(action)

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
                return{
                    ...state,
                    token: action.token
                }
        case 'SET_TOPARTISTS':
                return{
                    ...state,
                    topArtists: action.topArtists
                }
        case 'SET_TOPTRACKS':
                return{
                    ...state,
                    topTracks: action.topTracks
                }
        case 'SET_RECENTLYPLAYED':
                return{
                    ...state,
                    recentlyPlayed: action.recentlyPlayed
                }
            default:
                return state;
    }

}

export default reducer;