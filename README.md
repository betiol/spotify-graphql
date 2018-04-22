# Spotify GraphQL Query

[Spotify GraphQL](https://graphql-spotify.herokuapp.com)

## Albums
```
query {
  albums(albumId: ["41vPD50kQ7JeamkxQW7Vuy", "5U4W9E5WsYb2jUQWePT8Xm", "3KyVcddATClQKIdtaap4bV"]) {
    album_type
    images {
       width
       height
       url
    }
    artists {
      href
      type
      name
      uri
    }
    uri
    release_date
    release_date_precision
    popularity
    name
    label
    id
    href
    tracks {
      artists {
        name
      }
      disc_number
      duration_ms
      explicit
      href
      id
      is_local
      name
      preview_url
      track_number
      type
      uri
    }
  }
}
```

## Categories
```
query {
  categories {
    href
    icons {
      height
      width
      url
    }
    id
    name
  }
}
```
