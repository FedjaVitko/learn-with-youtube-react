export const PLAYLISTS_REQUEST = "PLAYLISTS_REQUEST";

export function requestPlaylists(searchInput) {
    return {
        type: PLAYLISTS_REQUEST,
        payload: searchInput
    }
}