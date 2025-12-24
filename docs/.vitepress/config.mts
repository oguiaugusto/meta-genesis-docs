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
          { text: 'Criação', link: '/basicos/criacao' },
          { text: 'Edição', link: '/basicos/edicao' },
          { text: 'Remoção', link: '/basicos/remocao' },
        ],

      },
      {
        text: 'Objetos',
        items: [
          { text: 'Diagrama', link: '/objetos/diagrama' },
          { text: 'Diagrama Item', link: '/objetos/diagrama-item' },
          { text: 'Índice', link: '/objetos/indice' },
          { text: 'Consulta', link: '/objetos/consulta' },
          { text: 'Pasta', link: '/objetos/pasta' },
        ]
      },
      {
        text: 'Libs',
        items: [
          { text: 'Introdução', link: '/libs/introducao' },
          { text: 'Gatilhos', link: '/libs/gatilhos' },
          { text: 'Valores Padrão', link: '/libs/valores-padrao' },
          { text: 'Índices', link: '/libs/indices' },
          { text: 'Validações', link: '/libs/validacoes' },
          { text: 'Validações Personalizadas', link: '/libs/validacoes-personalizadas' },
          { text: 'Lista', link: '/libs/lista' },
        ],
      },
    ],
  }
})
