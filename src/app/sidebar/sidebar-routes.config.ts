export const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },

    { path: '#catalogo', id: 'catalogo', title: 'Catálogo', icon: 'menu_book', children: [
      {path: 'catalogo/catalogo-link', title: 'Catálogo Link', icon: 'CL'},
      {path: 'catalogo/catalogo-nivel', title: 'Catálogo Nível', icon: 'CN'},
    ]},

    { path: '#venda', id: 'venda', title: 'Venda', icon: 'point_of_sale', children: [
      {path: 'venda/venda-detalhe', title: 'Consultar Venda', icon: 'VD'}
    ]},


    { path: 'clientes', title: 'Clientes', icon: 'people_alt', children: null },
    { path: 'produtos', title: 'Produtos', icon: 'view_carousel', children: null },
    { path: 'outros', title: 'Outros', icon: 'more', children: null },
    { path: 'utilitarios', title: 'Utilitários', icon: 'apps', children: null },

    { path: '#component', id: 'component', title: 'Componentes', icon: 'apps', children: [
      {path: 'components/price-table', title: 'Price Table', icon: 'PT'},
      {path: 'components/panels', title: 'Panels', icon: 'P'},
      {path: 'components/wizard', title: 'Wizard', icon: 'W'},
    ]},
    // { path: 'table', title: 'Table List', icon: 'content_paste', children: null },
    // { path: 'notification', title: 'Notification', icon: 'notifications', children: null },
    // { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
    { path: 'settings', title: 'Settings', icon: 'settings', children: null },
];
