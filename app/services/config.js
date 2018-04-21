import SpotifyWebApi from 'spotify-web-api-node'

var spotifyApi = new SpotifyWebApi({
    clientId: '90f0afe3811b4a0184f92d2530a89f66',
    clientSecret: 'd920941478344d9a9844ab61d5fe8359',
});

async function credentialsAccess() {
    const credentials = await spotifyApi.clientCredentialsGrant()
    const accessToken = await spotifyApi.setAccessToken(credentials.body.access_token)
}

export { credentialsAccess, spotifyApi }