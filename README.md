<div align="center">

# CLEAR Lab Prototypes

### Seis protótipos de bens públicos com IA para política pública municipal brasileira

[![Status](https://img.shields.io/badge/status-v0.1_mockups-orange?style=flat-square)](https://caiodesouzacastro.github.io/clear-lab-prototypes/)
[![License](https://img.shields.io/badge/code-MIT-blue?style=flat-square)](LICENSE)
[![Content](https://img.shields.io/badge/conte%C3%BAdo-CC_BY_4.0-green?style=flat-square)](https://creativecommons.org/licenses/by/4.0/)
[![CLEAR](https://img.shields.io/badge/FGV-CLEAR_Lab-1B3A5C?style=flat-square)](https://fgvclear.org)

**[→ Abrir o portal navegável](https://caiodesouzacastro.github.io/clear-lab-prototypes/)**

</div>

---

## Sobre

Este repositório materializa, em **mockups estáticos navegáveis**, seis hipóteses sobre como modelos de linguagem podem entregar bens públicos a gestores municipais brasileiros. Cada protótipo opera em uma camada diferente do ciclo de política pública — da leitura de dados administrativos à construção de instrumentos técnico-jurídicos.

A premissa não é substituir o pesquisador, o avaliador ou o gestor. É **materializar em ferramenta** o que o CLEAR e a rede brasileira de monitoramento e avaliação já fazem artesanalmente — para que chegue a quem nunca encomendou uma síntese de evidência ou desenhou uma teoria de mudança.

> _"Bens públicos pedem infraestrutura, não otimização."_

---

## Os seis protótipos

| | Protótipo | Camada | Hipótese |
|---|---|---|---|
| **A** | [EvidênciaBR Express](a-evidencia-br/) | 🔵 Sintetizar | Síntese conversacional de evidência no padrão Diretriz/MS, com níveis A/B/C/D e advertência de transferibilidade |
| **B** | [What Works Brasil](b-what-works-br/) | 🔵 Sintetizar | Município pergunta _"quem como eu melhorou em X?"_ e recebe pares estatisticamente comparáveis com hipótese explicativa |
| **C** | [Copiloto do gestor](c-copiloto-gestor/) | ⚪ Ler | Análise em linguagem natural sobre dados administrativos do município — não é dashboard; é alguém que lê o dashboard com você |
| **D** | [Gerador de opções de política](d-gerador-opcoes/) | 🟣 Propor | Menu de 4–6 instrumentos estruturados (mecanismo causal, evidência, custo, exemplo) — _menu_, não recomendação |
| **E** | [Editor de TR assistido por evidência](e-editor-tr/) | 🟠 Construir | Editor de termo de referência que classifica o objeto, sugere especificações e flagga risco jurídico |
| **F** | [Construtor de teoria de mudança](f-teoria-mudanca/) | 🟣 Propor | Wizard de 8 etapas (problema → causas → atividades → produtos → resultados → impacto → premissas → riscos) com sugestão de desenho avaliativo |

---

## Mapa das quatro camadas

```
LER  →  SINTETIZAR  →  PROPOR  →  CONSTRUIR
 (C)     (A, B)        (D, F)      (E)
```

Cada protótipo responde a uma pergunta diferente do ciclo de política pública:

- **Ler** — _o que nossos dados dizem?_
- **Sintetizar** — _o que sabemos sobre X? quem como nós conseguiu?_
- **Propor** — _que opções existem? qual lógica de intervenção?_
- **Construir** — _como redigir o instrumento?_

---

## Princípios

Seis compromissos epistemológicos atravessam todos os protótipos:

1. **Honestidade sobre limites** — cada saída declara o que mede e o que não mede.
2. **Ancoragem em evidência** — toda afirmação remete a fonte verificável; LLM como organizador, não autoridade.
3. **Suporte, nunca substituição** — opções como _menu de deliberação_, não recomendação otimizada.
4. **Métricas brasileiras** — taxonomias e indicadores para o ciclo de política pública municipal brasileiro.
5. **Auditabilidade radical** — código aberto, taxonomia versionada, inferência rastreável.
6. **Materializar o já-ensinado** — operacionalizar Diretriz/MS, EVIPNet, Avaliação na Prática — não inventar metodologia nova.

---

## Estrutura

```
clear-lab-prototypes/
├── index.html                  Portal de entrada
├── README.md
├── assets/
│   ├── clear.css               Design system (herdado de painel-clear)
│   ├── clear.js                Toggle de tema
│   └── proto-chrome.js         Header/footer compartilhado + ilustrações SVG
│
├── a-evidencia-br/             A. EvidênciaBR Express
├── b-what-works-br/            B. What Works Brasil
├── c-copiloto-gestor/          C. Copiloto do gestor
├── d-gerador-opcoes/           D. Gerador de opções de política
├── e-editor-tr/                E. Editor de TR
└── f-teoria-mudanca/           F. Construtor de teoria de mudança
```

Cada protótipo é uma página HTML independente, sem backend e sem dependências externas além das fontes do Google. Os dados, gestores, municípios e respostas são **ilustrativos** — servem para comunicar o conceito, não para uso operacional.

---

## Como rodar localmente

Não há build. Basta abrir `index.html` em qualquer navegador. Para servir via HTTP local:

```bash
git clone https://github.com/caiodesouzacastro/clear-lab-prototypes.git
cd clear-lab-prototypes
python3 -m http.server 8000
# abrir http://localhost:8000
```

Para publicar no GitHub Pages: **Settings → Pages → Source → main / (root)**.

---

## Stack

- HTML5 / CSS3 / JavaScript vanilla — sem frameworks, sem build.
- Tipografia: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display serif), [Inter](https://fonts.google.com/specimen/Inter) (sans), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono).
- Ilustrações SVG inline desenhadas à mão (uma por protótipo).
- Dark mode com persistência via localStorage.

---

## Status

**v0.1 · Mockups estáticos · Não-funcional.**

Estes são mockups de comunicação. Mostram **o que cada protótipo seria** se construído. Nenhum executa LLM real, nenhum tem dados administrativos reais conectados, nenhum opera contra um corpus de literatura. A próxima fase (a confirmar) seria escolher 1 ou 2 protótipos e levar para nível funcional (LLM + RAG + dados).

---

## Repositórios irmãos

- 🔗 **[Radar de Políticas Municipais](https://caiodesouzacastro.github.io/radar-politicas-municipais/)** — classificação automática de contratos PNCP por agenda de política pública
- 🔗 **[Painel CLEAR](https://caiodesouzacastro.github.io/painel-clear/)** — indicadores de políticas públicas brasileiras seguindo o Guia de Fontes de Dados (série _Avaliação na Prática_)

---

## Sobre o CLEAR Lab

Pesquisa exploratória conduzida no contexto do [**CLEAR Lab**](https://fgvclear.org) — Centro de Aprendizado e Pesquisa em Avaliação e Resultados, FGV EESP. O CLEAR forma servidores em monitoramento e avaliação, produz guias metodológicos e sintetiza evidência para política pública brasileira.

## Autor

**Caio de Souza Castro** · FGV CLEAR Lab · caio.castro@fgv.br

## Licença

Código sob [MIT](LICENSE). Conteúdo textual (taxonomias, sínteses, princípios) sob [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

---

<div align="center">
<sub>v0.1 · Volume 01 · Edição 01 · Maio 2026</sub>
</div>
