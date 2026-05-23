---
title: "Como usar este site"
date: 2026-05-23
tags:
  - meta
  - guia
draft: true
---

# Como usar este site

Guia pessoal para publicar e manter o scriptorium.

## Publicar notas

O site e gerado a partir do vault Obsidian em `~/github/scriptorium/content/`.

```
# Escrever ou editar notas em content/
cd ~/github/scriptorium

# Pre-visualizar localmente
npx quartz build --serve

# Publicar
git add content/
git commit -m "Nova nota: titulo"
git push
```

O deploy dispara automaticamente via GitHub Actions e fica online em menos de um minuto.

## Nao publicar

Para manter uma nota privada (so no Obsidian, nao no site):

- Adicionar `draft: true` no frontmatter da nota
- Ou mover para uma pasta fora de `content/` (ex: `private/`)

O filtro `RemoveDrafts` no Quartz ignora notas com `draft: true`.

## Estrutura do projecto

```
~/github/scriptorium/
  content/           <- Notas publicadas (vault Obsidian)
  quartz/            <- Motor do site (Quartz v4)
  quartz.config.ts   <- Configuracao (titulo, tema, plugins)
  public/            <- Output do build (gitignored)
```

## Actualizar o Quartz

O Quartz e copiado directamente para o repo (nao e fork). Para actualizar:

```
git clone --depth 1 https://github.com/jackyzha0/quartz.git /tmp/quartz-update
cp -r /tmp/quartz-update/quartz/ ~/github/scriptorium/
# Verificar diffs no quartz.config.ts e juntar manualmente
npm ci
npx quartz build
```

## Notas

- A traducao pt-PT esta em `quartz/i18n/locales/pt-PT.ts`
- O workflow de deploy esta em `.github/workflows/deploy.yaml`
- Se o GitHub Pages falhar apos rename do repo, reactivar com:
  `gh api /repos/tiagojct/scriptorium/pages -X POST -f "build_type=workflow"`
