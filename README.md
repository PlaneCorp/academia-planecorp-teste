# Academia PlaneCorp

Plataforma de treinamento do time comercial PlaneCorp. A página inicial tem duas seções:

1. **Do zero ao avançado** — formações base, independentes de operadora:
   - **Do básico ao avançado** (completa): 35 módulos em 9 partes + exame de 86 perguntas.
   - **Sistema de CRM** (Pipedrive): 15 módulos em 8 partes + exame de 30 perguntas.
   - **Transição entre operadoras** (marcada como "Em breve").
2. **Operadoras** — **Paraná Clínicas, Unimed Curitiba, Hapvida/Clinipam, Amil, SulAmérica e
   Unimed Adesão Vital**; dentro de cada uma há **Treinamento** e **Quiz (Exame de Certificação)**.
   A **Unimed Adesão Vital** (Coletivo por Adesão via Grupo Vital) tem 26 módulos em 11 partes +
   exame de 30 perguntas.

A **Paraná Clínicas** tem a linha completa (CIM · 400 · 600) com 76 módulos e a aba de
**Rede credenciada**. **Do básico ao avançado** foi construída mesclando o *Manual de
Treinamento PlaneCorp V2.0* + o *Playbook do Corretor* (mercado, contratação,
coparticipação, carências, CPT, legislação, cultura, venda consultiva, guia de todas as
operadoras, mesas padrão, glossário e checklist).

## O que tem

- **Hub** com seção "Do zero ao avançado" (3 formações) + seção "Operadoras" (5 operadoras).
- **SulAmérica Saúde PME e Odonto PME:** 17 módulos · 8 partes · exame de **30 perguntas** + aba
  de **Rede credenciada** (~14.726 hospitais). Filtros: **Nome do prestador**; multi-seleção de
  Plano, UF, Município e Acomodação; multi-seleção de Tipo de atendimento (Hospital Geral,
  Maternidade, Pronto Socorro Adulto/Pediátrico, Hospital Dia/Oncológico/Oftalmológico etc.,
  derivado da coluna de cobertura). Impressão branded A4 retrato.
- **Do básico ao avançado:** 35 módulos · 9 partes · exame de **86 perguntas** (sem cortes dos PDFs).
- Dentro de cada operadora/formação: **Treinamento** + **Quiz (Exame de Certificação)**.
- **Rede credenciada:** disponível na **Paraná Clínicas** (~13 mil prestadores) e na **Amil**
  (~9,5 mil prestadores). Filtros + impressão branded em A4 retrato (ver abaixo).
  - **Paraná:** filtros por Plano, Cidade, Bairro, Público, Tipo de estabelecimento e Especialidade.
  - **Amil:** busca por **Nome do prestador** (texto); **multi-seleção** de Plano, UF, Estado e
    Cidade; **multi-seleção** de Tipo de atendimento (Eletivo / Pronto Atendimento / Pronto Socorro)
    e Idade (Adulto / Infantil). O tipo de atendimento e a idade são derivados das colunas-flag da
    planilha via a **Legenda** (`window.REDE_LEGENDA.amil` em `content.js`).
- **Rede credenciada (Paraná):** ~13.050 prestadores filtráveis por **Plano** (CIM/400/600),
  **Público** (Adulto/Infantil), **Tipo de estabelecimento**, **Cidade**, **Especialidade** e
  **nome** (busca livre) — com **impressão branded PlaneCorp em A4 retrato** do resultado filtrado.
- **Paraná Clínicas:** 76 módulos em 16 partes (todo o conteúdo do manual, sem cortes).
- **Exame de Certificação** com **34 perguntas** cobrindo as 16 partes (aprovação 70%).
- **16 quizzes por parte** (um ao fim de cada parte) com correção e explicação.
- **Navegação lateral contextual** com partes/módulos, busca e barra de progresso.
- **Acompanhamento de progresso** salvo no navegador (localStorage) — por dispositivo.
- **Dados da PlaneCorp** (site, Instagram, WhatsApp) e chamada para corretores no rodapé,
  no hub e na barra lateral.
- **Identidade visual PlaneCorp** (Navy #303d50 + Teal #4ab8aa, fontes Aldo/Manjari,
  logo tipográfica AldoPlaneCorp embutida — funciona offline).
- **Responsivo** (desktop e celular) e navegação por teclado (← →).
- **Acesso restrito por login** (e-mail + senha). Só usuários autorizados entram; a sessão fica salva
  por 30 dias no aparelho e há botão "Sair". As senhas e o guia de publicação estão no arquivo
  **`ACESSOS-E-PUBLICACAO.md`** (não suba esse arquivo para o site público).

## Atualizar a rede credenciada

A base da rede está em `assets/rede-parana.js` (gerada da planilha oficial *Paraná
Clínicas.xlsx*, aba "Linha Nova"). Para atualizar com uma nova planilha, basta regerar
esse arquivo no mesmo formato (`window.REDE.parana = { cols:[...], rows:[[...]] }`).
No arquivo único, a base vem embutida; nos arquivos separados ela é carregada só quando
você abre a aba **Rede** (carregamento sob demanda, mantém o app leve).

## Como adicionar uma nova operadora (Unimed, Amil, Hapvida)

Em `assets/content.js`, a lista `OPERADORAS` controla os botões do hub (basta mudar
`ativo:false` para `true` e ligar o conteúdo). A estrutura de treinamento/quiz segue o
mesmo formato do curso da Paraná — é só replicar quando o material chegar.

## Como usar

### Opção 1 — Abrir localmente (mais rápido)
Basta abrir o arquivo `index.html` no navegador (duplo clique).
> Os arquivos `assets/fonts.css` e `assets/content.js` precisam estar na mesma estrutura de pastas.

### Opção 2 — Publicar online (recomendado para a equipe)
Hospede a pasta inteira em qualquer serviço estático e compartilhe o link:

- **GitHub Pages:** suba a pasta num repositório e ative o Pages.
- **Netlify / Vercel / Cloudflare Pages:** arraste a pasta na interface (deploy em segundos).
- **Servidor interno:** copie a pasta para o webserver da empresa.

### Opção 3 — Pré-visualizar sem instalar nada (Windows)
Execute o servidor local incluído e acesse `http://localhost:4321`:
```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
```

## Estrutura de arquivos

```
plataforma-parana-clinicas/
├── index.html          → a aplicação (layout, motor de navegação, quizzes)
├── assets/
│   ├── content.js      → todo o conteúdo dos 76 módulos + quizzes
│   └── fonts.css       → fontes da marca PlaneCorp embutidas (base64, offline)
├── serve.ps1           → servidor local opcional (pré-visualização)
└── README.md
```

## Como editar o conteúdo

Todo o material está em `assets/content.js`, num formato simples:
cada parte tem `titulo`, `desc`, uma lista de `modulos` (com `titulo` e `html`)
e um `quiz`. Para corrigir um número, trocar uma redação ou acrescentar um módulo,
basta editar esse arquivo — nenhuma ferramenta de build é necessária.

---
*Documento interno e confidencial · Grupo Rede D'Or · Versão do conteúdo: Manual v3.0 (2026).*
*A rede e as regras podem sofrer alterações — sempre consulte os canais oficiais da Paraná Clínicas.*
