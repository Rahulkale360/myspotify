// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

  production: true,
    spotifySecret: '856339afa07c4bafb0763466e92055d1',
    authUrl : "https://accounts.spotify.com/authorize",
    redirectUrl : "http://musicspotify.herokuapp.com/home",
    clientId : "ddb79c4c0f884b5a8d1b6d29b2310671",
    scopes : [
      "user-read-currently-playing",
      "user-read-currently-played",
      "user-read-playback-state",
      "user-top-read",
      "user-modify-playback-state",
    ]

  
  // production: false,
  // spotifySecret: 'b94e7c4937f7405283070ee56b44a479',
  // authUrl : "https://accounts.spotify.com/authorize",
  // redirectUrl : "http://localhost:4200/home",
  // clientId : "48f4fa8b23be472a9a8de596aa8344b1",
  // scopes : [
  //   "user-read-currently-playing",
  //   "user-read-currently-played",
  //   "user-read-playback-state",
  //   "user-top-read",
  //   "user-modify-playback-state",
  // ]

  
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
