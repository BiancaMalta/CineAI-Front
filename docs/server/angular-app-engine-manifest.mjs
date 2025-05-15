
export default {
  basePath: 'https://github.com/Kaua-Novaes/CineAI-Front',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
