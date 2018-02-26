import {
    PLAYLISTS_LOAD
} from '../constants/actionTypes';

const initState = {
    playlists: [],
    playlistsCount: 0
}

export default (state = initState, action) => {
    switch (action.type) {
        case PLAYLISTS_LOAD:
            return {
                ...state,
                playlists: action.payload.playlists,
                playlistsCount: action.payload.playlistsCount
            };
        default:
            return state;
    }
}