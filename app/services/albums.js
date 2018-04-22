// @flowx
import confg from './config'
import { spotifyApi, credentialsAccess } from './config'

export default async function albums(albumId: string) {
    if (!albumId) {
        return {
            error: 'Invalid album'
        }
    }

    let data = await credentialsAccess().then(() => spotifyApi.getAlbums(albumId))
    let albumsData = await data.body.albums
    return albumsData.map((album) => {
        return {
            album_type: album.album_type,
            artists: album.artists,
            available_markets: album.available_markets,
            copyrights: album.copyrights,
            external_ids: album.external_ids,
            external_urls: album.external_urls,
            genres: album.genres,
            href: album.href,
            id: album.id,
            images: album.images,
            label: album.label,
            name: album.name,
            popularity: album.popularity,
            release_date: album.release_date,
            release_date_precision: album.release_date_precision,
            tracks: album.tracks.items,
            uri: album.uri,
        };
    });
}
