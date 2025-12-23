import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Meta Genesis Docs",
  description: "Documentação da aplicação Meta Genesis",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentação', link: '/docs' },
    ],
    sidebar: [
      {
        text: 'Básicos',
        items: [
          { text: 'Criação', link: '/docs/criacao' },
          { text: 'Edição', link: '/docs/edicao' },
          { text: 'Remoção', link: '/docs/remocao' },
        ],

      },
      {
        text: 'Objetos',
        items: [
          { text: 'Diagrama', link: '/docs/diagrama' },
          { text: 'Diagrama Item', link: '/docs/diagrama-item' },
          { text: 'Índice', link: '/docs/indice' },
          { text: 'Consulta', link: '/docs/consulta' },
          { text: 'Pasta', link: '/docs/pasta' },
        ]
      },
      {
        text: 'Avançados',
        items: [
          { text: 'Libs', link: '/docs/libs' },
        ],
      },
    ],
  }
})
