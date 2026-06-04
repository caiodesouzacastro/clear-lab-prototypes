# Protótipos de IA do CLEAR Lab — Documentação técnica e roadmap para produção

**FGV CLEAR · EESP** · versão piloto interno · junho de 2026
Repositório: `clear-lab-prototypes` · Portal: `caiodesouzacastro.github.io/clear-lab-prototypes`

---

## 1. O que é este conjunto

Seis protótipos navegáveis que materializam, em ferramenta, hipóteses sobre como modelos de linguagem podem entregar bens públicos a gestores municipais brasileiros. Cada um opera em uma camada diferente do ciclo de política pública — da leitura de dados administrativos à construção de instrumentos técnico-jurídicos. A premissa que atravessa todos é que a IA atua como **organizadora, não como autoridade**: ela amplia o leque que o gestor considera e ancora cada afirmação em fonte verificável, mas a decisão segue dele.

Os seis se distribuem em quatro camadas:

| Camada | Protótipos |
|---|---|
| **Ler** — tornar legíveis registros dispersos | C · Copiloto do gestor |
| **Sintetizar** — reunir evidência em formato decisório | A · EvidênciaBR Express · B · What Works Brasil |
| **Propor** — gerar opções ancoradas em evidência | D · Gerador de Opções · F · Auxiliar de Teoria de Mudança |
| **Construir** — materializar em instrumento técnico-jurídico | E · Editor de TR |

Esta versão é um **piloto interno**: link não divulgado, uso restrito à equipe. O objetivo do piloto não é técnico — a infraestrutura já funciona — e sim epistemológico: descobrir se a saída de cada protótipo é confiável e útil o bastante para um especialista do CLEAR confiar nela.

---

## 2. Arquitetura comum

Todos os seis compartilham a mesma fundação técnica, escolhida para ser gratuita, sem servidor próprio e mantida inteiramente dentro da conta GitHub e de serviços de camada gratuita.

```
Navegador (equipe)
   │  { produto, question }
   ▼
Front estático (GitHub Pages)
   React via CDN + Babel, sem build
   │  POST
   ▼
Cloudflare Worker  ← proxy; guarda a chave Gemini como secret
   seleciona o prompt do produto pedido
   │
   ▼
Google Gemini 2.5 Flash + googleSearch (grounding real)
   │  JSON estruturado + groundingMetadata (URLs reais)
   ▼
Render no front (design Michel)
```

As decisões de fundo, e por que foram tomadas:

**Front 100% estático.** Cada protótipo é um único `index.html` (React via CDN, sem etapa de build), no mesmo padrão dos demais produtos do CLEAR Lab. Isso elimina pipeline de build e permite publicar pelo fluxo de sempre — commit e push no GitHub Pages.

**Worker como proxy, não chave no navegador.** Tudo que o navegador recebe é visível ao usuário, então uma chave de API embutida no front estaria exposta — e o Google revoga chaves vazadas em minutos. A chave do Gemini vive como *secret* num Cloudflare Worker (camada gratuita, 100 mil requisições por dia, sem cartão de crédito). O navegador chama o Worker; o Worker chama o Gemini. Ninguém vê a chave.

**Um Worker para os seis.** O front manda qual produto quer (`evidencia`, `opcoes`, `teoria`, `whatworks`, `copiloto`, `editortr`) e o Worker escolhe o prompt correspondente, que fica guardado dentro dele. Como os prompts não vêm do navegador, a URL do Worker não pode ser sequestrada como proxy Gemini aberto. Adicionar um protótipo novo é só acrescentar uma entrada no mapa de prompts.

**Grounding com busca real.** Cada consulta dispara uma busca na web via Gemini. As fontes exibidas vêm do `groundingMetadata` — os links que o modelo de fato consultou —, o que reduz o risco de URL inventada e sustenta o compromisso de ancoragem em evidência.

**Saída estruturada em JSON.** Cada prompt instrui o modelo a responder apenas com um objeto JSON num formato fixo, que o front então renderiza em cartões, cadeias ou selos. Isso dá consistência visual e permite tratar a saída como dado, não como texto solto.

Os limites honestos desta fundação, comuns a todos: o teto do Gemini gratuito é o uso diário (cerca de 250 consultas por dia no Flash, mil no Flash-Lite), compartilhado por toda a equipe; o *free tier* do Gemini pode usar os envios para treinar modelos, então dados municipais não-públicos não devem ser colados; e não há memória entre consultas — cada pergunta é independente.

---

## 3. Os seis protótipos

### A · EvidênciaBR Express — *Sintetizar*

**O que faz.** Recebe uma pergunta de política pública e devolve uma síntese estruturada de evidência no padrão da Diretriz Metodológica do Ministério da Saúde: o problema reformulado, opções de intervenção, o nível de evidência de cada uma (escala A/B/C/D), a transferibilidade ao contexto municipal e as limitações da síntese, com as fontes consultadas.

**Como funciona.** O modelo busca evidência real, classifica cada opção por robustez (de revisão sistemática a opinião de especialista) e devolve tudo em JSON. O front renderiza cada opção como um cartão com selo colorido de nível.

**Limitações.** A qualidade segue a qualidade da busca aberta, o que pode supervalorizar o que está mais indexado em inglês. A classificação A/B/C/D é uma heurística do modelo, não uma extração auditada do desenho de cada estudo — precisa de validação humana.

**Como tornar público.** O salto decisivo é trocar a busca aberta por um acervo curado (Cochrane, Campbell, EVIPNet, biblioteca CLEAR) consultado via recuperação semântica (RAG), o que torna a evidência mais confiável e a classificação mais defensável. Somam-se a isso uma validação humana periódica dos níveis, cache das perguntas mais comuns e registro de cada classificação para auditoria.

### D · Gerador de Opções — *Propor*

**O que faz.** A partir de um problema, gera um menu de quatro a seis opções de desenho de política — não uma recomendação. Cada opção traz o instrumento (transferência, regulação, serviço direto, incentivo, etc.), o mecanismo, a evidência com nível A/B/C/D, o custo qualitativo e os requisitos de implementação.

**Como funciona.** O prompt exige que as opções sejam distintas entre si e use instrumentos diferentes, e que o custo seja qualitativo (baixo/médio/alto), sem inventar valores em reais. O front mostra cada opção com selos de custo e de nível.

**Limitações.** O custo é qualitativo e indicativo. As opções refletem o que a busca alcança, não um catálogo exaustivo de instrumentos.

**Como tornar público.** Conectar a bases reais de custo (SINAPI, painéis de preços públicos) para sair do custo qualitativo; oferecer templates de instrumentos por setor; e integrar com o A (puxando a evidência) e com o F (transformando a opção escolhida em cadeia da ToC).

### F · Auxiliar de Teoria de Mudança — *Propor*

**O que faz.** A partir de um problema ou ideia de programa, levanta as causas prováveis (diagnóstico) e oferece os elementos da cadeia da teoria de mudança — insumos, atividades, produtos, resultados, impacto —, além de premissas críticas, riscos e um desenho avaliativo sugerido (DiD, RDD, matching, etc.). É deliberadamente um **auxiliar**: entrega elementos para a equipe construir e validar a própria ToC, não uma ToC pronta.

**Como funciona.** O diagnóstico (causas) é tratado separadamente da cadeia operacional, fiel ao método do curso de avaliação ex-ante do CLEAR. O front exibe o diagnóstico num bloco à parte e a cadeia como elos conectados, terminando no impacto, com premissas e riscos lado a lado.

**Limitações.** É o protótipo de menor risco de alucinação, porque opera sobre o que o gestor traz — mas justamente por isso depende da qualidade do enunciado. Os elementos são ponto de partida, não validação.

**Como tornar público.** Permitir editar e salvar a ToC montada; exportar o diagrama como imagem ou PDF; oferecer uma biblioteca de ToCs setoriais de referência; e ligar o desenho avaliativo sugerido aos indicadores disponíveis para o programa.

### B · What Works Brasil — *Sintetizar*

**O que faz.** Responde à pergunta "quem, parecido comigo, melhorou em X — e como?". Busca casos reais de municípios (preferência por brasileiros) que enfrentaram o problema, o que fizeram e o resultado, com nível de evidência e ressalva de transferibilidade.

**Como funciona.** O prompt é explícito em deixar claro que isto é busca de casos análogos, não pareamento estatístico, e que semelhança é aproximada e correlação não é causa. O front reforça esse aviso.

**Limitações.** Esta é a maior tensão do conjunto: o protótipo promete "quem como eu", mas, sem uma base de indicadores municipais por trás, a semelhança é qualitativa, não medida. Hoje ele entrega *casos análogos*, não *municípios estatisticamente comparáveis*.

**Como tornar público.** O salto real é incorporar uma base de indicadores municipais (porte, IDH, região, capacidade fiscal, perfil do problema) que permita um pareamento de fato — e então o "quem como eu" deixa de ser aproximação e passa a ser uma comparação defensável. É o protótipo que mais depende de dados próprios para cumprir a própria promessa.

### C · Copiloto do gestor — *Ler*

**O que faz.** Um assistente analítico em linguagem natural sobre a gestão do município. Responde de forma analítica e indica como o gestor verificaria a resposta na própria base de dados.

**Como funciona.** Um banner permanente avisa que o protótipo **não está conectado aos dados reais do município** — as respostas são gerais, e o modelo sempre aponta como checar cada coisa na base local.

**Limitações.** A hipótese do C é "ler os *seus* dados", e hoje ele não lê dado nenhum — é a maior distância entre promessa e entrega de todo o conjunto. Sem conexão a dados, é um assistente analítico genérico, não um copiloto.

**Como tornar público.** Este é o protótipo que mais exige antes de qualquer abertura: conectar a dados municipais reais (Radar, Painel, bases administrativas) via API ou consulta em linguagem natural sobre o banco (text-to-SQL), com controle de acesso. Enquanto isso não existir, ele deve permanecer marcado como demonstração de interface.

### E · Editor de TR — *Construir*

**O que faz.** A partir do objeto de uma contratação, monta um rascunho estruturado de termo de referência, com seções (justificativa, especificação técnica, critérios, obrigações, fiscalização), marcações `[PREENCHER]` onde faltam dados locais e uma lista de pontos de risco jurídico/técnico.

**Como funciona.** O prompt e o front são enfáticos: é rascunho gerado por IA, não documento final nem parecer jurídico; a revisão técnica e jurídica é obrigatória. Os trechos a completar aparecem destacados e os riscos vêm com selo de gravidade.

**Limitações.** É o protótipo de maior risco institucional do conjunto. Gerar minuta de TR é tecnicamente fácil, mas um TR malfeito tem consequência jurídica real para o gestor. A IA não conhece a realidade local nem a jurisprudência atualizada de cada tribunal de contas.

**Como tornar público.** Ancorar numa base de TRs bem avaliados — o convênio com o TCE-ES é a fonte natural —, oferecer templates por categoria de contratação, checar contra a Lei 14.133/2021 e, sobretudo, embutir no fluxo uma etapa obrigatória de revisão jurídica antes de qualquer exportação. Sem isso, não deve ser aberto além de uso assistido por equipe técnica.

---

## 4. Caminho geral para produção pública

A passagem de piloto interno para uso público não é um único salto, e sim uma sequência de estágios. O que já existe é o suficiente para a equipe usar; o que falta é o que separa "ferramenta interna" de "bem público de massa".

**Escala e custo.** Hoje o teto é o uso diário do Gemini gratuito, compartilhado por todos. O primeiro upgrade é trocar o modelo para o Flash-Lite (mais requisições por dia) mudando uma linha; o seguinte é o tier pago, barato no Flash, combinado com cache das consultas frequentes e *rate limit* por usuário para conter abuso e custo. O Cloudflare AI Gateway dá esse controle (cache, limite, observabilidade) ainda na camada gratuita.

**Privacidade e LGPD.** O *free tier* do Gemini pode usar envios para treino. Para qualquer dado sensível ou identificável, é obrigatório migrar para um plano que não treine com os dados (Vertex AI ou tier pago) e formalizar termos de uso e tratamento de dados conforme a LGPD.

**Qualidade e governança.** A classificação A/B/C/D e a seleção de evidência precisam de uma rotina de validação humana e de versionamento dos prompts e da taxonomia, com trilha de auditoria de cada inferência — é o compromisso de auditabilidade radical saindo do discurso para a prática.

**Corpus próprio.** A mudança de maior impacto para A, B e parte do D é deixar de depender da busca aberta e passar a consultar um acervo curado do CLEAR e fontes brasileiras (IPEA, EVIPNet, biblioteca CLEAR) via recuperação semântica. Isso transforma os produtos de "buscadores na web" em "sintetizadores do acervo do CLEAR" — mais confiáveis e mais alinhados à identidade institucional.

**Quem banca a inferência.** Uma decisão de governança, não técnica: chave institucional única do CLEAR, ou chave por órgão parceiro (o TCE-ES, por exemplo). Isso define quem arca com o custo e quem responde pela cota.

---

## 5. Prontidão para abertura pública

Resumo honesto de quão perto cada protótipo está de poder ser aberto ao público, e do que falta.

| Protótipo | Prontidão | O que falta para abrir |
|---|---|---|
| **A** EvidênciaBR | Alta | RAG sobre acervo curado; validação dos níveis |
| **F** Auxiliar de ToC | Alta | Editar/salvar/exportar; baixo risco intrínseco |
| **D** Gerador de Opções | Média-alta | Base de custos; integração com A e F |
| **B** What Works | Média | Base de indicadores municipais para pareamento real |
| **E** Editor de TR | Média, alto risco | Base de TRs; checagem legal; revisão jurídica no fluxo |
| **C** Copiloto | Baixa | Conexão a dados municipais reais |

A leitura: A e F podem caminhar para abertura com melhorias incrementais; D segue logo atrás; B e C dependem de uma camada de dados que ainda não existe; e E, embora tecnicamente pronto, carrega risco institucional que exige revisão jurídica obrigatória antes de qualquer abertura.

---

## 6. Checklist antes de tornar qualquer um público

1. Migrar o motor para um plano que não treine com os dados, ou garantir que nenhum dado sensível trafega.
2. Implementar *rate limit* por usuário e cache de consultas comuns (AI Gateway).
3. Definir e formalizar quem banca a chave/cota.
4. Rodar a validação humana da qualidade da saída com a equipe especialista e registrar o log de discordância.
5. Publicar termos de uso, aviso de IA e política de dados (LGPD).
6. Para A/B/D, conectar ao corpus curado; para C, à base de dados; para E, à revisão jurídica.
7. Manter o disciplinador permanente de honestidade — o que cada saída mede e o que não mede — visível em todas as telas.

> O piloto interno existe para responder a uma pergunta antes de todas essas: a saída é boa o suficiente para um especialista do CLEAR confiar nela? O log de discordância da equipe — onde o nível A/B/C/D ou a recomendação diverge do julgamento de quem domina o tema — é o insumo que decide se, e quais, protótipos avançam.
