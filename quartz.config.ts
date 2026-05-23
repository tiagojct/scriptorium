import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Scriptorium",
    pageTitleSuffix: " — Tiago Jacinto",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "pt-PT",
    baseUrl: "tiagojct.github.io/scriptorium",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Atkinson Hyperlegible",
        body: "Source Serif 4",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#F7F3EE",
          lightgray: "#DBC9B6",
          gray: "#A16E50",
          darkgray: "#163F54",
          dark: "#0D2F42",
          secondary: "#163F54",
          tertiary: "#BD8C68",
          highlight: "rgba(207, 173, 142, 0.15)",
          textHighlight: "#DEC57788",
        },
        darkMode: {
          light: "#0B1720",
          lightgray: "#163F54",
          gray: "#A16E50",
          darkgray: "#DBC9B6",
          dark: "#EAE1D7",
          secondary: "#BD8C68",
          tertiary: "#CFAD8E",
          highlight: "rgba(189, 140, 104, 0.15)",
          textHighlight: "#DEC57788",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
