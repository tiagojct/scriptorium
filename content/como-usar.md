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

O site é gerado a partir do vault Obsidian em `~/github/scriptorium/content/`.

```
# Escrever ou editar notas em content/
cd ~/github/scriptorium

# Pré-visualizar localmente
npx quartz build --serve

# Publicar
git add content/
git commit -m "Nova nota: título"
git push
```

O deploy dispara automaticamente via GitHub Actions e fica online em menos de um minuto.

## Não publicar

Para manter uma nota privada (só no Obsidian, não no site):

- Adicionar `draft: true` no frontmatter da nota
- Ou mover para uma pasta fora de `content/` (ex: `private/`)

O filtro `RemoveDrafts` no Quartz ignora notas com `draft: true`.

## Estrutura do projecto

```
~/github/scriptorium/
  content/           <- Notas publicadas (vault Obsidian)
  quartz/            <- Motor do site (Quartz v4)
  quartz.config.ts   <- Configuração (título, tema, plugins)
  public/            <- Output do build (gitignored)
```

## Actualizar o Quartz

O Quartz é copiado directamente para o repo (não é fork). Para actualizar:

```
git clone --depth 1 https://github.com/jackyzha0/quartz.git /tmp/quartz-update
cp -r /tmp/quartz-update/quartz/ ~/github/scriptorium/
# Verificar diffs no quartz.config.ts e juntar manualmente
npm ci
npx quartz build
```

## Notas

- A tradução pt-PT está em `quartz/i18n/locales/pt-PT.ts`
- O workflow de deploy está em `.github/workflows/deploy.yaml`
- Se o GitHub Pages falhar após rename do repo, reactivar com:
  `gh api /repos/tiagojct/scriptorium/pages -X POST -f "build_type=workflow"`
