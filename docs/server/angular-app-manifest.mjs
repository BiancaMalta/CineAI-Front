
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/Kaua-Novaes/CineAI-Front',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Kaua-Novaes/CineAI-Front/login",
    "route": "/Kaua-Novaes/CineAI-Front"
  },
  {
    "renderMode": 2,
    "route": "/Kaua-Novaes/CineAI-Front/login"
  },
  {
    "renderMode": 2,
    "route": "/Kaua-Novaes/CineAI-Front/cadastro"
  },
  {
    "renderMode": 2,
    "route": "/Kaua-Novaes/CineAI-Front/home"
  },
  {
    "renderMode": 2,
    "route": "/Kaua-Novaes/CineAI-Front/indicacoes"
  },
  {
    "renderMode": 2,
    "route": "/Kaua-Novaes/CineAI-Front/avaliacoes"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 781, hash: '05cc943680ffc9b4445b327ca769075414d43419fad589d446b575144855f6ec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1045, hash: '4beb822df0fddeda378ab220d94e03968e0bfb78b564724ceb8d7afcd2798ed5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3948, hash: '126cc3755b2264d4b2febd1b6de40990d3bd238c3b87f279f23782cc6f409533', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'avaliacoes/index.html': {size: 6447, hash: '6faf65005126fe9a48b800deea944d70a17f5dfe7756147db072b7c87c4f579b', text: () => import('./assets-chunks/avaliacoes_index_html.mjs').then(m => m.default)},
    'cadastro/index.html': {size: 9506, hash: '1ec019e328c3a2f068d56c9f48043857d02c52175b2e3aa620795e7cffacc16f', text: () => import('./assets-chunks/cadastro_index_html.mjs').then(m => m.default)},
    'indicacoes/index.html': {size: 2641, hash: '1f1ed799fb371b7e3e04a664a98de042e1260bb4c9e1c7d216dce39575063e81', text: () => import('./assets-chunks/indicacoes_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5234, hash: 'bb64637b8fbddb7c114ff5f99ee3e78b6601a6ba05dec0d367f897d9f3df0535', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-TFOVDJJR.css': {size: 129, hash: 'Bd3DrNNvDi4', text: () => import('./assets-chunks/styles-TFOVDJJR_css.mjs').then(m => m.default)}
  },
};
