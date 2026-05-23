import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Por batizar",
    description: "Por cartografar",
  },
  components: {
    callout: {
      note: "Anotação",
      abstract: "Resumo",
      info: "Informação",
      todo: "Por fazer",
      tip: "Sondagem",
      success: "Boavista!",
      question: "Pergunta",
      warning: "Aviso",
      failure: "Falha",
      danger: "Baleia Branca",
      bug: "Erro",
      example: "Amostra",
      quote: "Borda",
    },
    backlinks: {
      title: "Backlinks",
      noBacklinksFound: "Nenhum backlink avistado",
    },
    themeToggle: {
      lightMode: "Acima da linha d'água",
      darkMode: "Abaixo da linha d'água",
    },
    readerMode: {
      title: "Modo de vigia",
    },
    explorer: {
      title: "Carta de navegação",
    },
    footer: {
      createdWith: "Armado com",
    },
    graph: {
      title: "Cartografia",
    },
    recentNotes: {
      title: "Diário de bordo",
      seeRemainingMore: ({ remaining }) => `Mais ${remaining} no horizonte →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Abordagem de ${targetSlug}`,
      linkToOriginal: "Amarrar ao original",
    },
    search: {
      title: "Sondar",
      searchBarPlaceholder: "Deitar a sonda...",
    },
    tableOfContents: {
      title: "Tábuas",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} minutos de vigia`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Últimas entradas no diário de bordo",
      lastFewNotes: ({ count }) => `Últimas ${count} entradas no diário de bordo`,
    },
    error: {
      title: "Terra à vista? Não.",
      notFound: "Esta página é privada ou nunca existiu.",
      home: "Regressar ao convés",
    },
    folderContent: {
      folder: "Porão",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 volume no porão." : `${count} volumes no porão.`,
    },
    tagContent: {
      tag: "Arpão",
      tagIndex: "Arpoeira",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 captura com este arpão." : `${count} capturas com este arpão.`,
      showingFirst: ({ count }) => `A mostrar as ${count} primeiras capturas.`,
      totalTags: ({ count }) => `Encontrados ${count} arpões ao todo.`,
    },
  },
} as const satisfies Translation
