/* =====================================================================
   Academia PlaneCorp · Paraná Clínicas — Conteúdo do treinamento
   Fonte: Manual de Treinamento Paraná Clínicas v3.0 (76 módulos / 16 partes)
   Todo o conteúdo do manual foi preservado; estrutura didática adicionada.
   ===================================================================== */
const PARTES=[

/* ============================ PARTE 1 ============================ */
{id:1,titulo:"Fundamentos",desc:"Os conceitos universais de planos de saúde: o que é, ANS, segmentação, carências, coparticipação e portabilidade.",modulos:[

{id:1,num:1,tempo:"6 min",titulo:"O que é um plano de saúde",html:`
<p>Antes de qualquer coisa, você precisa entender o conceito mais básico. Um <em>plano de saúde</em> é um contrato entre uma pessoa (ou empresa) e uma operadora. O contratante paga uma mensalidade e, em troca, tem acesso a uma rede de profissionais de saúde — médicos, hospitais, clínicas, laboratórios — para realizar consultas, exames, cirurgias, internações e partos.</p>
<h3>Por que isso existe?</h3>
<p>O <strong>SUS</strong> (Sistema Único de Saúde) é universal e gratuito, mas tem limitações de agenda e disponibilidade. O plano de saúde existe como alternativa privada que oferece <strong>mais agilidade, conforto e previsibilidade</strong> de atendimento.</p>
<div class="callout key"><h4>Conceito-chave do treinamento</h4>
<p class="callout quote" style="margin:0;border:none;padding:0;background:none">"O geral dos planos de saúde não muda de uma operadora pra outra. A cobertura é a mesma, porque a gente tem que seguir o que a ANS estabelece. O que muda são algumas particularidades."<span class="who">— Lucas, Gerente Comercial Paraná Clínicas</span></p></div>
<p>Ou seja: <em>a cobertura mínima é igual para todos os planos de saúde do Brasil</em>, pois é regulada por lei. O que diferencia uma operadora da outra é:</p>
<ul>
<li>A <strong>rede credenciada</strong> (quais hospitais, médicos, laboratórios atendem)</li>
<li>A <strong>rede própria</strong> (algumas operadoras têm unidades próprias)</li>
<li>O <strong>atendimento</strong> (rapidez, qualidade, suporte)</li>
<li>Os <strong>programas de saúde</strong> (preventivos, gestantes, crônicos)</li>
<li>O <strong>preço</strong> (mensalidade)</li>
<li>As <strong>regras comerciais</strong> (carências, dependentes, coparticipação)</li>
</ul>
<h3>Os atores principais</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Ator</th><th>O que é</th></tr></thead><tbody>
<tr><td>Operadora</td><td>A empresa que oferece o plano (Paraná Clínicas, Unimed, Amil…)</td></tr>
<tr><td>ANS</td><td>Agência Nacional de Saúde Suplementar — reguladora</td></tr>
<tr><td>Beneficiário</td><td>Pessoa coberta pelo plano (titular ou dependente)</td></tr>
<tr><td>Titular</td><td>Pessoa principal do contrato</td></tr>
<tr><td>Dependente</td><td>Pessoa vinculada ao titular</td></tr>
<tr><td>Estipulante</td><td>Empresa contratante (plano empresarial)</td></tr>
<tr><td>Prestador</td><td>Hospital, clínica, laboratório ou médico que atende pela operadora</td></tr>
<tr><td>Corretor</td><td>Profissional que intermedia a venda (você!)</td></tr>
</tbody></table></div>`},

{id:2,num:2,tempo:"6 min",titulo:"ANS e regulação",html:`
<p>A <em>ANS (Agência Nacional de Saúde Suplementar)</em> é o órgão do governo federal que regula a saúde suplementar no Brasil. Foi criada em <strong>2000</strong> pela <strong>Lei 9.961</strong>.</p>
<h3>O que a ANS faz</h3>
<ul>
<li><strong>Registra operadoras</strong> — toda operadora precisa de registro ativo. A Paraná Clínicas tem registro nº <strong>416428</strong> (atualizado na nova linha de produtos).</li>
<li><strong>Define o Rol de Procedimentos</strong> — lista de coberturas obrigatórias que TODO plano deve oferecer.</li>
<li><strong>Controla reajustes</strong> — planos individuais têm reajuste limitado; empresariais têm reajuste negociado.</li>
<li><strong>Fiscaliza qualidade</strong> — atende reclamações, aplica multas.</li>
<li><strong>Exige reservas financeiras</strong> — garantia de que a operadora paga tratamentos caros.</li>
</ul>
<h3>O Rol de Procedimentos</h3>
<p>Lista enorme de exames, consultas, cirurgias e terapias que TODOS os planos devem cobrir: cirurgias gerais, exames de imagem, quimioterapia, radioterapia, internações, partos, terapias para autismo (sessões ilimitadas), entre outros. <strong>"Procedimento obrigatório por ANS" = está no Rol.</strong></p>
<h3>O que NÃO é coberto</h3>
<ul>
<li>Tratamentos estéticos (cirurgia plástica não-reparadora, botox)</li>
<li>Inseminação artificial (com exceções)</li>
<li>Tratamentos experimentais não-aprovados</li>
<li>Próteses fora dos casos previstos</li>
</ul>
<div class="callout tip"><h4>Atenção do treinamento</h4><p>"A cobertura é igual para todos porque a ANS obriga. Mas existem operadoras 'agressivas' que negam tudo na primeira instância. A Paraná tem padrão Rede D'Or de não negar o que está coberto."</p></div>`},

{id:3,num:3,tempo:"7 min",titulo:"Segmentação e abrangência",html:`
<h3>Tipos de Segmentação Assistencial</h3>
<p>A ANS define 4 tipos: <strong>(1) Ambulatorial</strong> — só consultas/exames; <strong>(2) Hospitalar com Obstetrícia</strong> — internações + partos; <strong>(3) Hospitalar sem Obstetrícia</strong>; <strong>(4) Referência</strong> — combinação completa.</p>
<p>A <em>Paraná Clínicas trabalha com Ambulatorial + Hospitalar com Obstetrícia</em> (o pacote mais completo): consultas em qualquer especialidade, exames laboratoriais e de imagem, pronto-socorro, cirurgias, internações, partos (com cobertura ao recém-nascido por 30 dias) e terapias.</p>
<div class="callout arg"><h4>Argumento de venda</h4><p>Mesmo um titular homem solteiro tem obstetrícia no plano. No futuro pode casar, ter filha mulher, e ela entra com cobertura completa. <strong>O produto já vem completo. Não é opcional.</strong></p></div>
<h3>Tipos de Acomodação</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tipo</th><th>Descrição</th><th>Custo</th></tr></thead><tbody>
<tr><td>Enfermaria</td><td>Quarto compartilhado</td><td>Mensalidade menor</td></tr>
<tr><td>Apartamento</td><td>Quarto individual, mais privacidade</td><td>Mensalidade maior</td></tr>
</tbody></table></div>
<p><em>Mesma cobertura médica em ambos.</em> A diferença é só conforto na internação.</p>
<h3>Abrangência Geográfica — REGIONAL</h3>
<p>A Paraná Clínicas é uma operadora <em>REGIONAL</em>, focada em <strong>Curitiba e Região Metropolitana</strong>. Fora dessa região, só há cobertura em <strong>URGÊNCIA E EMERGÊNCIA</strong> (garantida por lei). Atendimento eletivo (consultas marcadas, exames programados, cirurgias eletivas) só na região de abrangência.</p>
<div class="callout key"><h4>As 21 cidades de comercialização (ampliado de 11 para 21!)</h4><p>Almirante Tamandaré, Araucária, Balsa Nova, Bocaiúva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Colombo, Contenda, Curitiba, Fazenda Rio Grande, Itaperuçu, Lapa, Mandirituba, Pinhais, Piraquara, Quatro Barras, Quitandinha, Rio Branco do Sul, São José dos Pinhais e Tijucas do Sul.</p></div>
<h3>Quem precisa de cobertura nacional?</h3>
<ul>
<li><strong>Cotação híbrida</strong> (já disponível) — Paraná Clínicas para quem está em Curitiba + SulAmérica (irmã no grupo Rede D'Or) para outras regiões. Contratos vinculados.</li>
<li><strong>Plano nacional Paraná Clínicas</strong> (2º semestre 2026) — usando rede SulAmérica em capitais. Registro ANS em processo.</li>
<li><strong>Indicar outra operadora</strong> — Bradesco, Amil, SulAmérica. A PlaneCorp é multi-operadora.</li>
</ul>
<div class="callout tip"><h4>Atendimento fora da abrangência principal</h4><p>A Paraná também atende, em casos pontuais, <strong>Ponta Grossa</strong> (grandes empresas, 150-200+ vidas), <strong>Paranaguá</strong> e <strong>Maringá</strong> (casos excepcionais). Sempre consultar antes de cotar.</p></div>`},

{id:4,num:4,tempo:"5 min",titulo:"Carências (conceito geral)",html:`
<p><em>Carência é o período de espera entre a contratação e o direito de usar determinados serviços.</em> Durante a carência, o beneficiário paga mas não pode usar certos atendimentos.</p>
<h3>Por que existe?</h3>
<p>Para evitar que pessoas contratem só quando descobrem uma doença e cancelem depois. Proteção contra <strong>"uso oportunista"</strong>.</p>
<h3>Os 3 tipos de carência</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tipo</th><th>O que é</th></tr></thead><tbody>
<tr><td>Carência de procedimentos</td><td>Tempo até usar exames complexos, cirurgias, internações</td></tr>
<tr><td>Carência de parto</td><td>Tempo até cobertura para parto a termo (300 dias ANS)</td></tr>
<tr><td>CPT (Cobertura Parcial Temporária)</td><td>24 meses sem cobertura para alta complexidade de doenças preexistentes declaradas na DPS</td></tr>
</tbody></table></div>
<h3>Carências MÁXIMAS permitidas pela ANS</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Procedimento</th><th>Carência máxima</th></tr></thead><tbody>
<tr><td>Urgência e emergência</td><td>24 horas</td></tr>
<tr><td>Consultas e exames básicos</td><td>30 dias</td></tr>
<tr><td>Procedimentos e exames complexos</td><td>180 dias</td></tr>
<tr><td>Internações e cirurgias</td><td>180 dias</td></tr>
<tr><td>Parto a termo</td><td>300 dias</td></tr>
<tr><td>Doenças preexistentes (CPT)</td><td>24 meses</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Diferencial Paraná</h4><p>A Paraná Clínicas <em>isenta todas as carências para grupos acima de 10 vidas</em>, exceto CPT.</p></div>`},

{id:5,num:5,tempo:"6 min",titulo:"Coparticipação (conceito geral)",html:`
<p><em>Coparticipação é um valor que o beneficiário paga ao usar o plano</em>, além da mensalidade fixa. Funciona como um "ticket de uso".</p>
<h3>Por que existe?</h3>
<p>Para inibir uso desnecessário. Quem paga uma fração por cada consulta usa com mais consciência. É mecanismo de <strong>sustentabilidade do contrato</strong> — uso consciente = reajuste menor.</p>
<div class="callout quote"><h4 style="font-style:normal;color:var(--navy);font-family:var(--f-head);font-size:13px;letter-spacing:.08em;text-transform:uppercase">Citação do treinamento</h4>"A coparticipação serve para inibir aquele cliente que pensa 'tô em casa, não tem nada pra fazer, vamo no médico'. Sem ela, o uso explode e o contrato fica caro demais pra todo mundo."</div>
<h3>Como funciona</h3>
<p>Sobre o valor pago ao prestador, o beneficiário paga <strong>30% ou 50%</strong>. Exemplo: consulta de R$ 154,79, coparticipação 30% = R$ 46,44.</p>
<h3>O conceito de "limitador" (teto)</h3>
<div class="callout key"><h4>Teto de R$ 100,00 por procedimento</h4><p>O beneficiário nunca paga mais que R$ 100 por um único procedimento, mesmo que 30%/50% do valor seja maior. Exemplo: tomografia de R$ 692,39, 30% = R$ 207,72, mas paga <strong>R$ 100,00</strong>.</p></div>
<div class="callout tip"><h4>NÃO há coparticipação em INTERNAÇÃO</h4><p>Só em consultas, exames e procedimentos ambulatoriais.</p></div>`},

{id:6,num:6,tempo:"6 min",titulo:"Portabilidade de carência",html:`
<p>Cliente com plano há <strong>12 meses+</strong> pode migrar <em>sem cumprir novas carências</em> (exceto CPT, sempre 24 meses para preexistentes).</p>
<h3>Requisitos na Paraná Clínicas</h3>
<ul>
<li>Ativo no plano anterior há no mínimo <strong>12 meses</strong></li>
<li><strong>Em dia</strong> com pagamentos</li>
<li>Solicitar <strong>mesmo padrão de conforto</strong></li>
<li>Solicitar em até <strong>60 dias</strong> após a exclusão</li>
<li>Preencher a <strong>DPS</strong></li>
</ul>
<h3>Documentos</h3>
<ul>
<li><strong>Carta de Permanência</strong> atualizada</li>
<li><strong>Cópia da carteirinha</strong> do plano anterior (a Paraná NÃO aceita só a carta)</li>
</ul>
<div class="callout tip"><h4>Caso real</h4><p>Lucas conseguiu reaproveitar carência para cliente com apenas <strong>5 meses na operadora atual</strong> porque o cliente teve <strong>2 anos de plano anterior (na Clinipam) antes da Unimed</strong>, com migração em menos de 30 dias. <strong>Lição:</strong> sempre pergunte o histórico COMPLETO, não só o plano atual.</p></div>
<div class="callout warn"><h4>Atenção a fraudes</h4><p>Alto índice de fraude em cartas de permanência. Por isso: carta <strong>+ cópia da carteirinha</strong>, documentos legíveis e atualizados.</p></div>`},

],quiz:[
{pergunta:"Por que a cobertura mínima é praticamente igual entre todos os planos de saúde do Brasil?",opcoes:["Porque as operadoras combinam preços entre si","Porque é regulada por lei pela ANS (Rol de Procedimentos)","Porque todas usam a mesma rede de hospitais","Porque o SUS define a cobertura"],correta:1,explica:"A cobertura mínima é definida pelo Rol de Procedimentos da ANS e é obrigatória para todos. O que diferencia é rede, atendimento, programas, preço e regras comerciais."},
{pergunta:"A Paraná Clínicas isenta TODAS as carências para grupos acima de quantas vidas (exceto CPT)?",opcoes:["3 vidas","5 vidas","10 vidas","30 vidas"],correta:2,explica:"Grupos com 10+ vidas têm carência zero, inclusive parto. A única exceção é a CPT (24 meses), por exigência legal."},
{pergunta:"Qual o valor máximo (teto/limitador) que o beneficiário paga de coparticipação por procedimento?",opcoes:["R$ 50,00","R$ 100,00","R$ 200,00","Não há teto"],correta:1,explica:"O limitador é de R$ 100 por procedimento — mesmo uma ressonância cara custa no máximo R$ 100 de coparticipação. Isso dá previsibilidade ao cliente."},
{pergunta:"Para reaproveitar carência (portabilidade) na Paraná, o cliente deve solicitar em até quantos dias após a exclusão do plano anterior?",opcoes:["30 dias","60 dias","90 dias","12 meses"],correta:1,explica:"Os requisitos são: 12 meses+ no plano anterior, em dia, mesmo padrão de conforto, solicitar em até 60 dias após a exclusão e preencher a DPS."}
]},

/* ============================ PARTE 2 ============================ */
{id:2,titulo:"A Paraná Clínicas",desc:"História, DNA, o grupo Rede D'Or + SulAmérica, a grande mudança de portfólio em 2026 e os números da operadora.",modulos:[

{id:7,num:7,tempo:"5 min",titulo:"História e DNA da operadora",html:`
<p>A Paraná Clínicas é uma operadora <em>nascida em Curitiba</em>, com <strong>55 anos de história</strong>. Desde a fundação, sempre teve foco claro: <strong>atendimento ao plano empresarial</strong>. Nunca trabalhou com planos individuais nem adesão.</p>
<div class="callout quote">"Há 55 anos, temos a missão de cuidar, com excelência, de empresas e pessoas."<span class="who">— Slogan oficial</span></div>
<h3>Empresa para empresas</h3>
<p>Esse foco vem de origem: o antigo dono <strong>resistia à figura do corretor</strong>. Preferia equipe própria atendendo empresas diretamente. Isso fez a operadora ser conservadora e resistente a mudanças por décadas.</p>
<h3>A grande virada — aquisição pela Rede D'Or</h3>
<p>Com a compra pela Rede D'Or, a Paraná Clínicas ganhou <em>autonomia operacional</em> e abriu espaço para corretores parceiros. Hoje a estrutura comercial é totalmente voltada para crescer através de corretores.</p>
<div class="callout quote">"A Paraná era muito resistente à mudança. Agora, com a compra pela Rede D'Or, a gente começou a ter autonomia maior. A Tamara (gerente) é muito próxima da Daiane (superintendente), que está com olhar diferenciado pro comercial, escutando o corretor."<span class="who">— Lucas</span></div>
<h3>Especialista em PME</h3>
<p>Mais de <strong>50% dos contratos</strong> são de <strong>3 a 29 vidas</strong> (PME). É o público em que a Paraná é mais competitiva.</p>`},

{id:8,num:8,tempo:"6 min",titulo:"O grupo Rede D'Or + SulAmérica",html:`
<p>Entender a estrutura do grupo é essencial para transmitir credibilidade.</p>
<h3>A hierarquia</h3>
<div class="callout key"><h4>Estrutura do grupo</h4><p><strong>REDE D'OR (dona)</strong> — Maior rede de hospitais privados do Brasil<br>→ <strong>SulAmérica</strong> (seguradora nacional)<br>→ <strong>Paraná Clínicas</strong> (operadora regional Curitiba)</p></div>
<h3>Rede D'Or</h3>
<ul><li>Maior rede de hospitais privados do Brasil</li><li>Hospitais referência nacional (onde celebridades se internam)</li><li>Padrão de excelência em atendimento</li></ul>
<h3>SulAmérica</h3>
<ul><li>Uma das maiores seguradoras de saúde do Brasil</li><li>Atuação nacional</li><li>Foco em produtos premium (público A/B)</li></ul>
<h3>Paraná Clínicas</h3>
<ul><li>Operadora regional (Curitiba e RM)</li><li>+92 mil vidas</li><li>Foco em empresas (PME, PME Mais, Empresarial)</li><li>Custo-benefício (público B/C/D)</li></ul>
<h3>Por que isso importa na venda</h3>
<div class="callout arg"><h4>Argumento PODEROSO</h4><p>"O grupo tem poder de compra brutal. Quando a Paraná compra medicamentos, não compra só para si — compra para TODOS os hospitais do grupo no Brasil. Um medicamento de quimioterapia de R$ 80.000 que a Paraná sozinha pagava R$ 78.000, agora paga R$ 62.000 a R$ 65.000. Isso impacta diretamente no custo do contrato e na sustentabilidade dos preços."</p></div>
<p>A mensagem central: <em>força de operadora regional COM o poder de uma das maiores redes do país.</em></p>`},

{id:9,num:9,tempo:"8 min",titulo:"A grande mudança de portfólio em 2026",html:`
<p>Esta é a parte mais importante do treinamento. <em>Os produtos antigos saíram. Os novos entraram.</em></p>
<h3>Mapeamento dos produtos</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Antigo (não existe mais)</th><th>Substituído por</th></tr></thead><tbody>
<tr><td>Standard Plus (antigo "Sim")</td><td>Paraná CIM</td></tr>
<tr><td>Executivo Plus</td><td>Paraná 400</td></tr>
<tr><td>Estilo</td><td>Paraná 600</td></tr>
</tbody></table></div>
<h3>Por que mudaram? Problema de POSICIONAMENTO</h3>
<div class="callout quote">"Em 5 meses, eu nunca vendi um Executivo na Paraná."<span class="who">— Lucas</span></div>
<p><strong>Problemas dos produtos antigos:</strong></p>
<ul>
<li><strong>Standard Plus (Sim)</strong> era OK, mas muito limitado — só tinha Santa Cruz como referência, perdia para Clinipam/Nossa Saúde no preço.</li>
<li><strong>Executivo Plus</strong> era um "produto no limbo" — pagava mais que o Standard, mas a diferença de rede era mínima. Ninguém sentia que valia a pena.</li>
<li><strong>Estilo</strong> deveria competir com Unimed, mas não tinha os hospitais premium (Marcelino, Vita). O cliente comparava e ficava com a Unimed.</li>
</ul>
<h3>A nova estratégia: 3 produtos com posicionamento CLARO</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Produto</th><th>Posicionamento</th><th>Concorrência direta</th></tr></thead><tbody>
<tr><td>Paraná CIM</td><td>Custo. Para quem busca preço ou nunca teve plano.</td><td>Clinipam, Nossa Saúde, NotreDame</td></tr>
<tr><td>Paraná 400</td><td>Equilíbrio. Rede aberta, sem direcionamento.</td><td>Amil Regional, Bradesco básico</td></tr>
<tr><td>Paraná 600</td><td>Premium. Hospitais top de Curitiba.</td><td>Unimed, SulAmérica, Bradesco TOP</td></tr>
</tbody></table></div>
<div class="callout tip"><h4>Spoiler do treinamento</h4><p>"Segundo semestre vou ter produto NACIONAL." A Paraná já protocolou registro na ANS de um produto nacional usando rede SulAmérica nas principais capitais. Previsão: 2º semestre de 2026.</p></div>
<h3>Lançamento e campanha</h3>
<ul>
<li><strong>Lançamento:</strong> Final de abril de 2026</li>
<li><strong>Campanha ativa (28/04 a 31/05/2026):</strong> ISENÇÃO DA 2ª FATURA + comissão 100% garantida para vendas PME (3-29 vidas) no novo portfólio</li>
<li><strong>Instagram dos corretores:</strong> @chegamaiscorretor (canal oficial de campanhas)</li>
</ul>`},

{id:10,num:10,tempo:"5 min",titulo:"Números e posicionamento",html:`
<h3>Os números da Paraná Clínicas</h3>
<div class="stats">
<div class="stat"><div class="n">55</div><div class="l">anos de história</div></div>
<div class="stat"><div class="n">+92mil</div><div class="l">vidas atendidas</div></div>
<div class="stat"><div class="n">4</div><div class="l">CIMs (unidades próprias)</div></div>
<div class="stat"><div class="n">113</div><div class="l">hospitais credenciados</div></div>
<div class="stat"><div class="n">768</div><div class="l">clínicas e consultórios</div></div>
<div class="stat"><div class="n">310</div><div class="l">médicos na rede própria</div></div>
<div class="stat"><div class="n">141</div><div class="l">laboratórios credenciados</div></div>
<div class="stat"><div class="n">324</div><div class="l">colaboradores</div></div>
<div class="stat"><div class="n">416428</div><div class="l">registro ANS</div></div>
</div>
<h3>A nova rede credenciada (planilha oficial "Linha Nova")</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Plano</th><th>Prestadores</th></tr></thead><tbody>
<tr><td>Paraná 600</td><td>2.465 prestadores</td></tr>
<tr><td>Paraná 400</td><td>1.364 prestadores</td></tr>
<tr><td>Paraná CIM</td><td>499 prestadores</td></tr>
</tbody></table></div>
<ul>
<li><strong>107 especialidades médicas</strong> distintas</li>
<li><strong>17 cidades</strong> com prestadores credenciados</li>
<li><strong>185 hospitais/estabelecimentos</strong> únicos no Paraná 600</li>
<li><strong>4.328 registros totais</strong> na planilha de rede</li>
</ul>
<h3>Posicionamento de mercado</h3>
<div class="callout key"><p>Operadora regional especialista em empresas, com foco em <strong>prevenção, atendimento humanizado e ativo, e custo-benefício competitivo</strong> para Curitiba.</p></div>`},

],quiz:[
{pergunta:"O que mudou na Paraná Clínicas após a aquisição pela Rede D'Or?",opcoes:["Passou a vender apenas planos individuais","Ganhou autonomia operacional e abriu espaço para corretores parceiros","Deixou de atender Curitiba","Fechou suas unidades próprias"],correta:1,explica:"A compra pela Rede D'Or deu autonomia operacional e transformou a estrutura comercial para crescer através de corretores — antes o dono resistia à figura do corretor."},
{pergunta:"Qual a substituição correta dos produtos antigos pelos novos?",opcoes:["Estilo → Paraná CIM","Standard Plus (Sim) → Paraná CIM","Executivo Plus → Paraná 600","Standard Plus → Paraná 600"],correta:1,explica:"Standard Plus (Sim) → Paraná CIM; Executivo Plus → Paraná 400; Estilo → Paraná 600."},
{pergunta:"Qual o principal argumento de venda ligado ao poder de compra do grupo Rede D'Or?",opcoes:["O grupo dá descontos em consultas","A escala de compra reduz custos (ex.: quimio de R$80mil por R$62-65mil), sustentando os preços","O grupo é dono do SUS","A Paraná virou nacional"],correta:1,explica:"Comprando para TODOS os hospitais do grupo no Brasil, a escala reduz drasticamente o custo de medicamentos caros, controlando sinistralidade e mantendo reajustes sustentáveis."},
{pergunta:"Quantas vidas a Paraná Clínicas atende e há quantos anos atua?",opcoes:["+50 mil vidas, 30 anos","+92 mil vidas, 55 anos","+200 mil vidas, 55 anos","+92 mil vidas, 25 anos"],correta:1,explica:"São +92.000 vidas e 55 anos de história, nascida em Curitiba, com registro ANS 416428."}
]},

/* ============================ PARTE 3 ============================ */
{id:3,titulo:"Rede própria: os 4 CIMs",desc:"O modelo semi-verticalizado e as unidades próprias — Água Verde (agora hospital), CIC 24h, São José, Araucária, Centro de Infusão e Clínica Afeto.",modulos:[

{id:11,num:11,tempo:"6 min",titulo:"Operadora semi-verticalizada",html:`
<h3>Verticalizada vs Credenciada vs Semi-verticalizada</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Modelo</th><th>Como funciona</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Verticalizada</td><td>Só atende em unidades próprias</td><td>Clinipam (majoritariamente)</td></tr>
<tr><td>Credenciada</td><td>Sem unidades próprias, só prestadores externos</td><td>Bradesco, SulAmérica</td></tr>
<tr><td>Semi-verticalizada</td><td>Tem unidades próprias E credencia rede externa</td><td><strong>Paraná Clínicas</strong>, Unimed, Hapvida</td></tr>
</tbody></table></div>
<h3>Por que isso é diferencial?</h3>
<div class="callout quote">"A Clinipam tem só um hospital próprio (Hospital São Mateus). Se quebrar, ferrou. A Paraná tem 4 unidades próprias + 113 hospitais credenciados. É robusta."</div>
<p>A combinação permite: <strong>controle de qualidade</strong> (nos CIMs), <strong>controle de custo</strong> (atender no CIM custa menos), <strong>flexibilidade</strong> (cliente tem opções) e <strong>redução de infecção hospitalar</strong> (~60%).</p>
<div class="callout quote">"Eu trago o paciente pra minha unidade quando faz sentido. Por quê? Custo. O hospital, sendo o meu, é muito mais caro do que fazer lá fora. Fora que o risco de infecção diminui quase 60% trazendo pra minha unidade."<span class="who">— Lucas</span></div>`},

{id:12,num:12,tempo:"8 min",titulo:"CIM Água Verde: agora unidade hospitalar",html:`
<p>A unidade principal passou por grande transformação em 2026.</p>
<div class="callout key"><p><strong>Endereço:</strong> Av. República Argentina, 650 — Curitiba/PR · <strong>24 horas / 7 dias</strong></p></div>
<h3>A grande novidade de 2026: virou Hospital</h3>
<p>Antes era <strong>Hospital Dia</strong> (só cirurgias com alta no mesmo dia). Em <strong>abril/2026</strong> inaugurou a <em>Ala de Internação</em>:</p>
<ul>
<li><strong>28 leitos</strong> (22 enfermaria duplos + 6 modelo apartamento + 1 isolamento)</li>
<li>Portas de vidro entre leitos da enfermaria (privacidade aumentada)</li>
<li>Atendimento 24h</li>
</ul>
<p>Agora é oficialmente <strong>CIM Água Verde Unidade Hospitalar</strong>.</p>
<h3>Estrutura completa (8 andares)</h3>
<ul>
<li><strong>Hospital Dia (7º andar):</strong> 4 salas cirúrgicas, 18 leitos enfermaria, 4 apartamentos, 7 leitos de recuperação. 4.500 procedimentos/ano, 6.500 exames endoscópicos/ano. Seg-sex 7h-19h, sáb 7h-13h.</li>
<li><strong>Ala de Internação (8º andar — abril/2026):</strong> 22 leitos duplos, 6 apartamentos, 1 isolamento. 24h.</li>
<li><strong>Centro de Infusão (8º andar):</strong> oncológico, reumatológico, hematológico. 7 box individuais + 2 leitos cama. Até 400 pacientes, 1.300+ atendimentos/ano.</li>
<li><strong>Pronto Atendimento Adulto 24h (térreo):</strong> 5 consultórios, 9 poltronas medicação, 6 leitos observação, 1 isolamento, sala de sutura e gesso. <em>SEM TRIAGEM.</em></li>
<li><strong>40 especialidades médicas</strong></li>
<li>Exames de imagem (incluindo tomografia), laboratoriais. Ressonância: direcionada ao Santa Cruz.</li>
<li><strong>50.000 atendimentos/mês</strong></li>
</ul>
<h3>Principais cirurgias (Hospital Dia)</h3>
<p>Vasectomia, colecistectomia, varizes, hérnia inguinal/umbilical, hemorroidectomia, postectomia, septoplastia, histerectomia, amigdalectomia, artroscopia.</p>
<div class="callout arg"><h4>Argumento de venda — sem triagem</h4><p>"Tempo de espera RECORDE: 19 minutos. Sem triagem. Eu mesmo, semana passada, desci às 17h40 com crise de enxaqueca. Passei na recepção e NEM SENTEI — já fui chamado pelo médico."</p></div>
<h3>O modelo alta complexidade</h3>
<div class="callout quote">"Antes, qualquer caso ia pro Santa Cruz. Hoje, o médico das unidades estabiliza e avalia. Baixa/média complexidade → tratamento na nossa unidade. Alta complexidade (cardíaco, parto, transplante, cirurgia complexa) → Santa Cruz."</div>`},

{id:13,num:13,tempo:"4 min",titulo:"CIM CIC 24h",html:`
<div class="callout key"><p><strong>Endereço:</strong> Rua Manoel Valdomiro de Macedo, 2.851 — Curitiba/PR<br><strong>Eletivo:</strong> seg-sex 7h-19h, sáb 7h-13h · <strong>Urgência:</strong> 24h</p></div>
<h3>Estrutura</h3>
<ul>
<li>Pronto-atendimento 24h <strong>adulto e infantil</strong></li>
<li>Atendimento pediátrico e ortopédico</li>
<li>10 especialidades médicas</li>
<li>2 leitos emergência, 6 observação, 2 isolamento</li>
<li>Exames laboratoriais, Raios-X, Ultrassonografia</li>
<li>5.000 atendimentos/mês</li>
</ul>
<h3>Diferencial</h3>
<div class="callout arg"><h4>Por que importa</h4><p>Único CIM 24h com atendimento <strong>PEDIÁTRICO</strong>. 12 minutos de carro do Água Verde (cobertura complementar). Atende trabalhadores das indústrias da CIC.</p></div>`},

{id:14,num:14,tempo:"4 min",titulo:"CIM São José dos Pinhais",html:`
<div class="callout key"><p><strong>Endereço:</strong> Rua Voluntários da Pátria, 300 — São José dos Pinhais/PR<br><strong>Horário:</strong> todos os dias das <strong>7h às 24h</strong> (ampliado recentemente)</p></div>
<h3>Estrutura</h3>
<ul>
<li>2.690 m²</li>
<li>Pronto-atendimento adulto e infantil até 00:00</li>
<li>Atendimentos eletivos e urgência</li>
<li>20+ especialidades</li>
<li>2 leitos emergência, 7 observação, 1 isolamento</li>
<li>4.900 atendimentos/mês</li>
</ul>
<h3>A ampliação do horário — vitória estratégica</h3>
<div class="callout quote">"Antes era 7h-19h. Agora 7h-00h. Por quê? Para tirar dependência da Novaclínica, onde a espera ia de 2 a 4 horas. Depois de 00:00, vai pra Novaclínica (única opção 24h em São José)."</div>`},

{id:15,num:15,tempo:"3 min",titulo:"CIM Araucária",html:`
<div class="callout key"><p><strong>Endereço:</strong> Rua Manoel Ribas, 1.00, Centro — Araucária/PR<br><strong>Horário:</strong> seg-sex 7h às 19h</p></div>
<p>A unidade mais simples. Sem PA 24h, mas com clínico geral todos os dias.</p>
<ul>
<li><strong>Especialidades:</strong> clínica geral, pediatria, ginecologia e obstetrícia, cardiologia, gastroenterologia, ortopedia, otorrinolaringologia, oftalmologia.</li>
<li><strong>Exames:</strong> ECG, ecografia, fisioterapia, laboratoriais.</li>
<li><strong>2.200 atendimentos/mês</strong></li>
</ul>`},

{id:16,num:16,tempo:"6 min",titulo:"Centro de Infusão e o poder de barganha Rede D'Or",html:`
<h3>O que é</h3>
<p>No 8º andar do CIM Água Verde, para tratamento <strong>oncológico</strong> (quimioterapia), <strong>reumatológico</strong> (biológicos) e <strong>hematológico</strong>.</p>
<h3>Diferenciais</h3>
<ul>
<li>Capacidade para até <strong>400 pacientes</strong>, +1.300 atendimentos/ano</li>
<li>7 box individuais + 2 leitos cama</li>
<li><strong>Agenda inteligente</strong> (concentra protocolos, evita sobra de medicamento)</li>
<li>Política do não desperdício</li>
<li>Apoio psicológico e nutricional</li>
<li>Consultório individualizado</li>
</ul>
<h3>O segredo: poder de compra Rede D'Or</h3>
<div class="callout quote">"Quimio varia de R$ 8.000 a R$ 80.000 por aplicação. Quando eu era SÓ Paraná Clínicas, comprava o de R$ 80 mil por R$ 78 mil. AGORA, comprando como REDE D'OR, pago R$ 62 mil, R$ 65 mil. Por quê? Compro pra TODOS os hospitais do grupo no Brasil. Escala. Isso sustenta meu preço."</div>
<div class="callout arg"><h4>Tradução para venda</h4><p>Contratos com a Paraná têm sinistralidade mais controlada em casos oncológicos, reajustes mais sustentáveis, e a operadora consegue absorver casos graves sem repassar tudo ao preço.</p></div>
<h3>Por que trazer o paciente</h3>
<p>Custo menor, risco de infecção reduzido ~60%, padronização e acompanhamento multidisciplinar.</p>`},

{id:17,num:17,tempo:"5 min",titulo:"Clínica Afeto (TEA)",html:`
<p>Estrutura <em>EXCLUSIVA</em> para Transtorno do Espectro Autista, inaugurada em <strong>julho/2024</strong>.</p>
<div class="callout key"><p><strong>Endereço:</strong> Av. Pres. Getúlio Vargas, 2º andar — Curitiba/PR · seg-sex 7h-19h</p></div>
<h3>Estrutura</h3>
<ul>
<li>14 consultórios multi + 1 consultório médico</li>
<li>Sala de integração sensorial</li>
<li>Jardim com horta</li>
<li>Recepção interativa</li>
<li>Coworking exclusivo para pais</li>
</ul>
<h3>Equipe</h3>
<p>Pediatras, neuropediatras, psicólogos, fisioterapeutas, fonoaudiólogos, terapeutas ocupacionais.</p>
<h3>Como funciona</h3>
<ol>
<li>Avaliação inicial com neurologista pediátrico</li>
<li>Diagnóstico (laudo)</li>
<li>Atendimento direto na Clínica Afeto</li>
<li>Consulta médica a cada 3 meses (acompanhamento de evolução)</li>
<li>Se não houver evolução, muda-se o tratamento</li>
</ol>
<div class="callout quote">"A gente faz acompanhamento da CRIANÇA E DA FAMÍLIA. Muitas vezes pega caso que vem como autismo e não é — é problema social da família. A gente identifica e direciona pro caminho certo."</div>
<div class="callout warn"><h4>Coparticipação TEA</h4><p>A <strong>consulta</strong> com neurologista é SEM coparticipação. As <strong>terapias</strong> (psicologia, fono, TO, fisio) TÊM coparticipação. Em contratos PME (3-29 vidas) com caso de TEA, é <strong>obrigatória coparticipação de 50%</strong> (não tem opção 30%).</p></div>`},

],quiz:[
{pergunta:"O que torna a Paraná Clínicas uma operadora 'semi-verticalizada'?",opcoes:["Só atende em unidades próprias","Não tem unidades próprias, só credenciados","Tem unidades próprias (CIMs) E credencia rede externa","Pertence à Clinipam"],correta:2,explica:"Semi-verticalizada = 4 unidades próprias (CIMs) + 113 hospitais credenciados. Combina controle de qualidade/custo com flexibilidade de rede."},
{pergunta:"Qual a grande novidade do CIM Água Verde em 2026?",opcoes:["Fechou a ala cirúrgica","Inaugurou Ala de Internação (28 leitos) e virou Unidade Hospitalar","Passou a atender só pediatria","Mudou de endereço"],correta:1,explica:"Em abril/2026 inaugurou a Ala de Internação (28 leitos) e passou de Hospital Dia a CIM Água Verde Unidade Hospitalar, com atendimento 24h e sem triagem."},
{pergunta:"Qual CIM é o único com pronto-atendimento PEDIÁTRICO 24h?",opcoes:["CIM Água Verde","CIM Araucária","CIM São José","CIM CIC 24h"],correta:3,explica:"O CIM CIC 24h é o único com atendimento pediátrico 24h, a 12 minutos do Água Verde, servindo de cobertura complementar."},
{pergunta:"Em contratos PME (3-29 vidas) com caso de TEA, a coparticipação das terapias é:",opcoes:["Isenta","Obrigatória de 50% (sem opção de 30%)","Sempre 30%","Cobrada só na consulta"],correta:1,explica:"A consulta com neurologista é sem coparticipação, mas as terapias têm — e em PME com TEA a coparticipação é obrigatoriamente de 50%."}
]},

/* ============================ PARTE 4 ============================ */
{id:4,titulo:"Os 3 novos produtos",desc:"Paraná CIM, 400 e 600: posicionamento, características, rede, comparativo detalhado, direcionamento e as 21 cidades.",modulos:[

{id:18,num:18,tempo:"8 min",titulo:"Paraná CIM: cuidado que começa perto",html:`
<div class="callout key"><h4>Posicionamento</h4><p>"O Paraná CIM une a segurança de uma completa rede própria a hospitais de excelência. É a escolha ideal para quem busca um cuidado coordenado, com previsibilidade e excelente custo-benefício."</p></div>
<h3>Para quem é?</h3>
<ul>
<li>Quem busca <strong>preço</strong> (entrada)</li>
<li>Quem <strong>nunca teve plano</strong> e quer sair do SUS</li>
<li>Quem aceita o <strong>modelo gatekeeper</strong> (passar primeiro por generalista)</li>
<li>Empresas que querem benefício acessível</li>
</ul>
<h3>Características técnicas</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th>Detalhe</th></tr></thead><tbody>
<tr><td>Acomodação</td><td><strong>SOMENTE ENFERMARIA</strong> (não tem apartamento)</td></tr>
<tr><td>Coparticipação</td><td>OBRIGATÓRIA — 30% ou 50%</td></tr>
<tr><td>Segmentação</td><td>Ambulatorial + Hospitalar com Obstetrícia</td></tr>
<tr><td>Contratação</td><td>PME, PME Mais ou Empresarial (a partir de 3 vidas)</td></tr>
<tr><td>Abrangência</td><td>Regional (21 cidades)</td></tr>
<tr><td>Prestadores na rede</td><td>499</td></tr>
</tbody></table></div>
<h3>Modelo de atendimento eletivo (gatekeeper)</h3>
<p>O atendimento eletivo INICIAL deve ser feito por uma destas especialidades: <strong>Clínica Geral, Pediatria, Ginecologia e Obstetrícia, Cirurgia Geral, Ortopedia Geral, Oftalmologia, Geriatria</strong>.</p>
<p>Para acessar outras especialidades (cardiologista, endócrino, dermato), o beneficiário marca com um dos profissionais acima, recebe <strong>encaminhamento</strong> (guia) e marca com o especialista.</p>
<div class="callout tip"><h4>Exemplo</h4><p>"Quero consultar cardiologista. Moro em Campina Grande. Vou no Angelina Caron, marco com clínico geral. Falo: tenho histórico familiar cardíaco. Ele me dá encaminhamento. Coloco no sistema da Paraná, libero a guia, marco com o cardiologista."</p></div>
<h3>Rede hospitalar do Paraná CIM</h3>
<p><strong>Unidades próprias (acesso direto):</strong> CIM Água Verde, CIM CIC 24h, CIM São José, CIM Araucária.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Hospital credenciado</th><th>Acesso</th></tr></thead><tbody>
<tr><td>Hospital Santa Cruz</td><td>Urgência/emergência + alta complexidade (sem eletivo)</td></tr>
<tr><td>Hospital Angelina Caron</td><td>Pleno (especialidades-foco)</td></tr>
<tr><td>Hospital do Rocio</td><td>Pleno (especialidades-foco)</td></tr>
<tr><td>Hospital Pequeno Príncipe</td><td>COM DIRECIONAMENTO (D) — pediatria</td></tr>
<tr><td>Hospital Erasto Gaertner</td><td>COM DIRECIONAMENTO (D) — oncologia</td></tr>
<tr><td>Hospital Erastinho</td><td>COM DIRECIONAMENTO (D) — oncologia pediátrica</td></tr>
<tr><td>Hospital Mackenzie</td><td>COM DIRECIONAMENTO (D)</td></tr>
<tr><td>Maternidade Pinhais</td><td>COM DIRECIONAMENTO (D)</td></tr>
<tr><td>Novaclínica</td><td>Atendimento até 00:00 (depois, urgência São José)</td></tr>
<tr><td>CADMO Psiquiátrica</td><td>Aberto (psiquiatria)</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>ISENÇÃO de coparticipação nas unidades próprias</h4><p>"Por mais que o cliente precise passar pelo generalista antes do especialista, se usar dentro das minhas unidades, NÃO PAGA coparticipação. Nem na consulta geral, nem na consulta com o especialista. É o argumento mais forte do CIM."</p></div>
<h3>Laboratórios</h3>
<p>Apenas unidades próprias + Hospital Santa Cruz. (Sem Frischmann/a+, que só estão no 400 e 600.)</p>
<div class="callout key"><h4>Preço de referência</h4><p><strong>A partir de R$ 99,32</strong> (faixa 0-18 anos, 50% coparticipação, 30-99 vidas)</p></div>`},

{id:19,num:19,tempo:"7 min",titulo:"Paraná 400: o plano ainda mais completo",html:`
<div class="callout key"><h4>Posicionamento</h4><p>"O Plano Paraná 400 é a escolha ideal para quem busca mais hospitais e mais conforto. A escolha inteligente para quem não abre mão de uma rede ampla."</p></div>
<h3>Para quem é?</h3>
<ul>
<li>Cliente que já teve plano e sabe o que quer</li>
<li>Cliente que <strong>não aceita gatekeeper</strong> (quer marcar especialista direto)</li>
<li>Empresas de médio porte (custo-benefício)</li>
<li>Quem quer rede ampla SEM pagar premium</li>
</ul>
<div class="callout quote">"É o produto que MAIS tá vendendo hoje. Oferece diferencial real (coleta em casa, rede aberta) sem ser o mais caro."</div>
<h3>Características técnicas</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th>Detalhe</th></tr></thead><tbody>
<tr><td>Acomodação</td><td>Enfermaria OU Apartamento</td></tr>
<tr><td>Coparticipação</td><td>30% ou 50% (até 99 vidas); 100+: sem ou parcial</td></tr>
<tr><td>Contratação</td><td>PME, PME Mais ou Empresarial</td></tr>
<tr><td>Prestadores</td><td>1.364</td></tr>
<tr><td>Direcionamento</td><td><strong>NENHUM</strong> (rede totalmente aberta)</td></tr>
</tbody></table></div>
<h3>O que muda do CIM para o 400</h3>
<p><strong>Removeu:</strong> todo o direcionamento (marca especialista direto). <strong>Adicionou:</strong> Laboratório <strong>Frischmann</strong>, Laboratório <strong>a+</strong> com <strong>coleta domiciliar</strong>, mais hospitais.</p>
<h3>Hospitais EXCLUSIVOS do 400 (não estão no CIM)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Hospital</th><th>O que oferece</th></tr></thead><tbody>
<tr><td>Hospital das Nações</td><td>Atendimento Norte de Curitiba</td></tr>
<tr><td>Hospital São Lucas</td><td>Urgência + cirurgias</td></tr>
<tr><td>Hospital Cruz Vermelha Curitiba</td><td>Urgência + alguns eletivos</td></tr>
<tr><td>Hospital da Visão</td><td>Única opção em oftalmologia avançada</td></tr>
<tr><td>Maternidade Santa Brígida</td><td>Maternidade</td></tr>
<tr><td>Hospital Erastinho</td><td>Oncologia pediátrica (sem direcionamento)</td></tr>
</tbody></table></div>
<h3>Sobre o Santa Cruz no 400 — semi-eletivo</h3>
<div class="callout quote">"No Paraná 400, o Santa Cruz tem conceito de SEMI-ELETIVO. Não dou consulta eletiva ambulatorial dentro do Santa Cruz, MAS dou exames específicos, cirurgias eletivas e atendimento ao Centro Diagnóstico Água Verde (que fica EM FRENTE ao Santa Cruz). Para o cliente é quase como ter Santa Cruz pleno."</div>
<h3>Diferenciais únicos</h3>
<ul>
<li>Rede aberta (sem gatekeeper)</li>
<li>Coleta domiciliar a+ (laboratório vem em casa, sem custo)</li>
<li>Frischmann em todas as unidades</li>
<li>Hospital das Nações no Norte</li>
<li>Hospital da Visão (oftalmologia avançada)</li>
</ul>`},

{id:20,num:20,tempo:"7 min",titulo:"Paraná 600: cuidado no mais alto nível",html:`
<div class="callout key"><h4>Posicionamento</h4><p>"O Paraná 600 redefine o conceito de cobertura premium, com o diferencial de uma rede que combina a excelência dos Hospitais Santa Cruz, Marcelino Champagnat, Vita Curitiba, Vita Batel e Nossa Senhora das Graças."</p></div>
<h3>Para quem é?</h3>
<ul>
<li>Diretoria, sócios, cargos C-Level</li>
<li>Famílias que valorizam os melhores hospitais de Curitiba</li>
<li>Quem vem de <strong>SulAmérica, Unimed, Bradesco TOP</strong></li>
<li>Empresas que oferecem benefício premium</li>
</ul>
<h3>Características técnicas</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th>Detalhe</th></tr></thead><tbody>
<tr><td>Acomodação</td><td>Enfermaria OU Apartamento</td></tr>
<tr><td>Coparticipação</td><td>30% ou 50% (até 99 vidas); 100+: sem ou parcial</td></tr>
<tr><td>Contratação</td><td>PME, PME Mais ou Empresarial</td></tr>
<tr><td>Prestadores</td><td>2.465</td></tr>
<tr><td>Direcionamento</td><td><strong>NENHUM</strong> (totalmente aberto)</td></tr>
</tbody></table></div>
<h3>Os 5 hospitais "estrela"</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Hospital</th><th>Atendimento</th></tr></thead><tbody>
<tr><td>Hospital Santa Cruz</td><td><strong>ELETIVO</strong> (diferencial gigante!) + urgência + alta complexidade</td></tr>
<tr><td>Hospital Marcelino Champagnat</td><td>Urgência + cirurgias (eletivo em negociação)</td></tr>
<tr><td>Hospital Vita Curitiba</td><td>Urgência + cirurgias (eletivo em finalização)</td></tr>
<tr><td>Hospital Vita Batel</td><td>Urgência + cirurgias (eletivo em finalização)</td></tr>
<tr><td>Hospital Nossa Senhora das Graças</td><td><strong>ELETIVO</strong> (adulto e infantil) + urgência</td></tr>
</tbody></table></div>
<h3>Por que é uma virada de jogo</h3>
<div class="callout quote">"Eu estou tirando MUITO cliente da SulAmérica Prata e da Unimed para o 600. Porque bato o preço, bato a rede. O que perco é o nacional. Mas pergunta: quantas vezes o cliente viaja por ano? Ele precisa mesmo de nacional pleno? Em emergência fora da região, qualquer plano cobre."</div>
<h3>Hospitais exclusivos do 600 (além dos 5 estrela)</h3>
<p>Hospital INC (neurologia/neurocirurgia), Hospital IPO (otorrino), Hospital de Olhos do Paraná (oftalmologia, único na rede), Hospital N.S. do Pilar, Hospital Novo Mundo, Hospital Santa Casa de Curitiba, Instituto da Criança, Maternidade N.S. de Fátima, Clínica Heidelberg, Porto Seguro Clínica Psiquiátrica.</p>
<div class="callout tip"><h4>O futuro do Santa Cruz</h4><p>"O Santa Cruz está em reforma o ano inteiro. A Rede D'Or quer torná-lo um ALBERT EINSTEIN, um SÍRIO-LIBANÊS de Curitiba. Hospital de alto padrão. É a estratégia da rede."</p></div>`},

{id:21,num:21,tempo:"6 min",titulo:"Comparativo detalhado dos 3 planos",html:`
<p>Tabela de referência completa para consulta rápida em cotação:</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Característica</th><th>Paraná CIM</th><th>Paraná 400</th><th>Paraná 600</th></tr></thead><tbody>
<tr><td>Posicionamento</td><td>Custo</td><td>Equilíbrio</td><td>Premium</td></tr>
<tr><td>Concorrência</td><td>Clinipam, Nossa Saúde</td><td>Amil, Bradesco básico</td><td>Unimed, SulAmérica</td></tr>
<tr><td>Enfermaria</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Apartamento</td><td class="no">Não</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Coparticipação obrigatória (3-29)</td><td>30% ou 50%</td><td>30% ou 50%</td><td>30% ou 50%</td></tr>
<tr><td>Direcionamento</td><td>Sim (gatekeeper)</td><td>Nenhum</td><td>Nenhum</td></tr>
<tr><td>Rede aberta</td><td class="no">Não</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Isenção copart. unidades próprias</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Santa Cruz eletivo</td><td class="no">Não</td><td>Não (semi-eletivo via CDAV)</td><td class="yes">Sim</td></tr>
<tr><td>Santa Cruz urgência/alta complexidade</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Angelina Caron eletivo</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Hospital do Rocio eletivo</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Pequeno Príncipe</td><td>Com direcionamento</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Hospital das Nações</td><td class="no">Não</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Vita Curitiba/Batel</td><td class="no">Não</td><td class="no">Não</td><td class="yes">Sim (urgência+cirurgias)</td></tr>
<tr><td>Marcelino Champagnat</td><td class="no">Não</td><td class="no">Não</td><td class="yes">Sim (urgência+cirurgias)</td></tr>
<tr><td>N.S. das Graças (eletivo)</td><td class="no">Não</td><td class="no">Não</td><td class="yes">Sim</td></tr>
<tr><td>Hospital de Olhos do Paraná</td><td class="no">Não</td><td class="no">Não</td><td class="yes">Sim</td></tr>
<tr><td>Hospital INC</td><td class="no">Não</td><td class="no">Não</td><td class="yes">Sim</td></tr>
<tr><td>Hospital IPO</td><td class="no">Não</td><td class="no">Não</td><td class="yes">Sim</td></tr>
<tr><td>Laboratório Frischmann</td><td class="no">Não</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Lab. a+ coleta domiciliar</td><td class="no">Não</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Prestadores totais</td><td>499</td><td>1.364</td><td>2.465</td></tr>
<tr><td>Preço</td><td>A partir de R$ 99,32</td><td>Intermediário</td><td>Premium</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Como escolher o plano certo</h4>
<p><strong>Paraná CIM:</strong> cliente nunca teve plano, foco em CUSTO, aceita gatekeeper.<br>
<strong>Paraná 400:</strong> quer rede aberta sem ser premium, valoriza praticidade, vem de Clinipam/Amil.<br>
<strong>Paraná 600:</strong> vem de Unimed/SulAmérica, diretoria, quer hospitais premium.</p></div>`},

{id:22,num:22,tempo:"5 min",titulo:"Conceito de direcionamento (D)",html:`
<p>Hospital marcado com <strong>(D)</strong> tem <em>direcionamento</em> (aparece principalmente no Paraná CIM).</p>
<h3>O que é</h3>
<p>O beneficiário, antes de usar aquele hospital, precisa: (1) passar por consulta com clínico geral/médico de família nos CIMs; (2) receber encaminhamento; (3) só então marcar no hospital com direcionamento.</p>
<h3>Por que existe</h3>
<p>Controle de custos. São tipicamente hospitais de alta complexidade ou pediátricos.</p>
<h3>Exemplos no Paraná CIM</h3>
<p>Pequeno Príncipe (D), Erasto Gaertner (D), Erastinho (D), Mackenzie (D), Maternidade Pinhais (D).</p>
<div class="callout quote">"O direcionamento NÃO É um 'não'. É um caminho de entrada. Cliente precisa de tratamento de câncer? Trato dentro de casa no Centro de Infusão. Se for muito complexo, direciono pro Erasto ou Erastinho — e ele tem o atendimento."</div>
<div class="callout arg"><h4>Importante para a venda</h4>
<p><strong>Paraná CIM:</strong> TEM direcionamento em vários hospitais.<br><strong>Paraná 400 e 600:</strong> ZERO direcionamento (rede totalmente aberta).</p>
<p>"É um dos argumentos mais fortes para subir o cliente do CIM para o 400: 'Você marca onde quiser, sem precisar de encaminhamento'."</p></div>`},

{id:23,num:23,tempo:"3 min",titulo:"Abrangência das 21 cidades",html:`
<p>A nova grade ampliou de 11 para <strong>21 cidades</strong>:</p>
<div class="callout key"><p>Almirante Tamandaré, Araucária, Balsa Nova, Bocaiúva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Colombo, Contenda, Curitiba, Fazenda Rio Grande, Itaperuçu, Lapa, Mandirituba, Pinhais, Piraquara, Quatro Barras, Quitandinha, Rio Branco do Sul, São José dos Pinhais, Tijucas do Sul.</p></div>
<h3>Impacto na venda</h3>
<ul>
<li>Empresas com colaboradores espalhados pela RM cobertos</li>
<li>Maior abrangência regional desse perfil</li>
<li>Fora da abrangência: urgência/emergência sempre cobertos (por lei); eletivo só na região; para vendedores fora, cotação híbrida com SulAmérica</li>
</ul>`},

],quiz:[
{pergunta:"Qual a principal diferença de acomodação do Paraná CIM em relação ao 400 e 600?",opcoes:["CIM só tem apartamento","CIM tem SOMENTE enfermaria (não tem apartamento)","CIM não cobre internação","CIM tem mais hospitais"],correta:1,explica:"O Paraná CIM oferece somente enfermaria, coparticipação obrigatória e modelo gatekeeper — é o plano de entrada (a partir de R$ 99,32)."},
{pergunta:"O acesso ELETIVO completo ao Hospital Santa Cruz está disponível em qual plano?",opcoes:["Paraná CIM","Paraná 400","Paraná 600","Todos os três"],correta:2,explica:"Só o Paraná 600 tem Santa Cruz eletivo completo. No CIM é urgência/alta complexidade; no 400 é semi-eletivo via Centro Diagnóstico Água Verde (CDAV)."},
{pergunta:"Qual o argumento mais forte para 'subir' um cliente do CIM para o 400?",opcoes:["O 400 é mais barato","No 400 a rede é aberta — marca especialista direto, sem direcionamento/encaminhamento","O 400 tem apartamento de luxo","O 400 cobre todo o Brasil"],correta:1,explica:"O CIM tem gatekeeper e direcionamento (D). O 400 e o 600 têm ZERO direcionamento e rede totalmente aberta, além de lab a+ com coleta domiciliar."},
{pergunta:"Os laboratórios Frischmann e a+ (coleta domiciliar) estão disponíveis em:",opcoes:["Todos os planos","Apenas no CIM","Apenas no 400 e 600","Apenas no 600"],correta:2,explica:"Frischmann e a+ com coleta domiciliar são diferenciais do 400 e 600. No CIM os laboratórios são apenas as unidades próprias + Santa Cruz."}
]},

/* ============================ PARTE 5 ============================ */
{id:5,titulo:"Rede hospitalar detalhada",desc:"A matriz completa de hospitais por plano e os destaques: Santa Cruz, Angelina Caron, Rocio, os premium do 600 e especialidades exclusivas.",modulos:[

{id:24,num:24,tempo:"6 min",titulo:"Hospitais por plano (matriz completa)",html:`
<p>Tabela de referência completa para consulta:</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Hospital</th><th>Paraná CIM</th><th>Paraná 400</th><th>Paraná 600</th></tr></thead><tbody>
<tr><td>CIMs próprios (Água Verde, Araucária, São José, CIC)</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Hospital Santa Cruz</td><td>Urgência/alta</td><td>Urgência/alta + semi-eletivo (CDAV)</td><td class="yes">ELETIVO + tudo</td></tr>
<tr><td>Hospital Angelina Caron</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Hospital do Rocio</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Hospital São Lucas</td><td class="no">—</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Hospital Cruz Vermelha Curitiba</td><td class="no">—</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Hospital da Visão</td><td class="no">—</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Hospital das Nações</td><td class="no">—</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Maternidade Santa Brígida</td><td class="no">—</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Hospital Erastinho</td><td class="no">—</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Hospital Erasto Gaertner</td><td>Sim (D)</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Hospital Evangélico Mackenzie</td><td>Sim (D)</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Hospital Pequeno Príncipe</td><td>Sim (D)</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Maternidade Pinhais</td><td>Sim (D)</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>CADMO Psiquiátrica</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Novaclínica</td><td>Sim (até 00:00)</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Hospital de Olhos do Paraná</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
<tr><td>Hospital INC</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
<tr><td>Hospital IPO</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
<tr><td>Hospital Marcelino Champagnat</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
<tr><td>Hospital N.S. das Graças</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
<tr><td>Hospital Novo Mundo</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
<tr><td>Hospital N.S. do Pilar</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
<tr><td>Hospital Santa Casa de Curitiba</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
<tr><td>Hospital Vita Curitiba</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
<tr><td>Hospital Vita Batel</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
<tr><td>Instituto da Criança</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
<tr><td>Maternidade N.S. de Fátima</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
<tr><td>Clínica Heidelberg</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
<tr><td>Porto Seguro Psiquiátrica</td><td class="no">—</td><td class="no">—</td><td class="yes">Sim</td></tr>
</tbody></table></div>
<div class="callout tip"><p><strong>(D) = com direcionamento.</strong> A rede pode sofrer alterações — sempre consulte os canais oficiais (site, app). A planilha "Linha Nova" tem 4.328 registros de prestadores.</p></div>`},

{id:25,num:25,tempo:"5 min",titulo:"Hospital Santa Cruz: por que é especial",html:`
<p>O carro-chefe da rede credenciada. Está em <em>todos os 3 planos</em>, com formatos diferentes.</p>
<h3>Por que é estratégico</h3>
<ul>
<li>Referência em Curitiba há 60 anos</li>
<li>Maternidade de excelência</li>
<li>Alta complexidade (cardíaca, transplantes, oncológica)</li>
<li>Em reforma desde 2024 para padrão Rede D'Or</li>
<li><strong>Está no plano mais barato (CIM)</strong> — argumento poderoso</li>
</ul>
<h3>Como funciona em cada plano</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Plano</th><th>Acesso</th></tr></thead><tbody>
<tr><td>Paraná CIM</td><td>Apenas URGÊNCIA/EMERGÊNCIA e ALTA COMPLEXIDADE (parto complexo, cirurgia cardíaca, transplante)</td></tr>
<tr><td>Paraná 400</td><td>Urgência/alta complexidade + Centro Diagnóstico Água Verde (em frente, pleno eletivo para exames/cirurgias específicas)</td></tr>
<tr><td>Paraná 600</td><td><strong>ELETIVO COMPLETO</strong> + tudo</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Argumento PARA O CIM</h4><p>"Mesmo no plano mais simples, você tem o Santa Cruz para o que importa: urgência, emergência, alta complexidade. Parto complicado? Santa Cruz. Cirurgia cardíaca? Santa Cruz."</p></div>
<div class="callout arg"><h4>Argumento PARA O 600</h4><p>"Vai pra Unimed por causa do Santa Cruz eletivo? No 600 você tem TUDO no Santa Cruz: consulta com cardiologista, exames, parto eletivo. Por preço menor."</p></div>`},

{id:26,num:26,tempo:"3 min",titulo:"Hospital Angelina Caron",html:`
<p>Localizado em Campina Grande do Sul, referência para a região norte da RM.</p>
<ul>
<li><strong>Atendimento pleno</strong> nos 3 planos (eletivo + urgência + alta complexidade)</li>
<li>Cobertura pediátrica completa</li>
<li>Tagline: "Ao seu lado, sempre"</li>
</ul>
<div class="callout arg"><p>"Cliente mora em Campina ou Quatro Barras? Argumento: 'Você tem o Angelina Caron pleno, com cardiologia, ortopedia, parto. Não precisa nem vir pra Curitiba pra maioria das consultas.'"</p></div>`},

{id:27,num:27,tempo:"3 min",titulo:"Hospital do Rocio",html:`
<p>Localizado em Campo Largo, referência para a região oeste.</p>
<ul>
<li><strong>Atendimento pleno</strong> nos 3 planos (eletivo via especialidades-foco no CIM + urgência + alta complexidade)</li>
<li>Maternidade e pediatria</li>
</ul>
<div class="callout warn"><h4>Atenção</h4><p>"Eu atendo pediatria lá. Mas o hospital pode ficar temporariamente sem pediatra (se mandou o profissional embora). Não é a Paraná que não atende — é o hospital que está sem o profissional. Isso vale para qualquer hospital: a Paraná oferece a rede, mas a especialidade depende do hospital ter o profissional ativo."</p></div>`},

{id:28,num:28,tempo:"5 min",titulo:"Hospitais premium do Paraná 600",html:`
<p>Os 5 hospitais que TODO mundo pergunta numa cotação premium em Curitiba:</p>
<ol>
<li><strong>Hospital Santa Cruz</strong> — referência absoluta, eletivo no 600, em reforma para Rede D'Or.</li>
<li><strong>Hospital Marcelino Champagnat</strong> — Grupo Marista, premium. Eletivo em negociação. Urgência + cirurgias.</li>
<li><strong>Hospital Vita Curitiba</strong> — premium. Eletivo em finalização. Urgência + cirurgias.</li>
<li><strong>Hospital Vita Batel</strong> — irmão do Vita Curitiba. Eletivo em finalização. Urgência + cirurgias.</li>
<li><strong>Hospital Nossa Senhora das Graças</strong> — ELETIVO completo (adulto e infantil), pediatria forte, maternidade.</li>
</ol>
<div class="callout arg"><p>"Antes, se o cliente queria esses 5 hospitais, ia pra Unimed ou SulAmérica. Agora tem na Paraná 600. E paga menos."</p></div>
<h3>Especializados exclusivos do 600</h3>
<p>INC (neurocirurgia, AVC), IPO (otorrino), Hospital de Olhos do Paraná (oftalmologia avançada), Pilar, Novo Mundo, Santa Casa, Instituto da Criança, Maternidade N.S. de Fátima.</p>`},

{id:29,num:29,tempo:"3 min",titulo:"Especialidades exclusivas",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Hospital</th><th>Especialidade</th><th>Disponível em</th></tr></thead><tbody>
<tr><td>Hospital da Visão</td><td>Oftalmologia avançada (catarata, glaucoma, retina, refrativa)</td><td>400 e 600</td></tr>
<tr><td>Hospital IPO</td><td>Otorrinolaringologia (ouvido, garganta, nariz)</td><td>Apenas 600</td></tr>
<tr><td>Hospital INC</td><td>Neurologia/Neurocirurgia</td><td>Apenas 600</td></tr>
<tr><td>CADMO</td><td>Psiquiatria (internação + ambulatorial)</td><td>Todos os 3</td></tr>
<tr><td>Erasto Gaertner / Erastinho</td><td>Oncologia (adulto / pediátrico)</td><td>CIM com direcionamento; 400 e 600 acesso direto</td></tr>
</tbody></table></div>`},

],quiz:[
{pergunta:"O Hospital Santa Cruz está disponível em quais planos?",opcoes:["Apenas no 600","Apenas no 400 e 600","Em todos os 3 (com formatos diferentes)","Apenas no CIM"],correta:2,explica:"Está em todos os 3: CIM (urgência/alta complexidade), 400 (semi-eletivo via CDAV) e 600 (eletivo completo). É argumento poderoso por estar até no plano mais barato."},
{pergunta:"Um cliente em Campina Grande do Sul/Quatro Barras tem qual hospital pleno (eletivo+urgência) já no CIM?",opcoes:["Hospital Vita","Hospital Angelina Caron","Hospital Marcelino","Hospital de Olhos"],correta:1,explica:"O Angelina Caron atende pleno nos 3 planos e é referência para o norte da RM — argumento de que o cliente nem precisa ir a Curitiba para a maioria das consultas."},
{pergunta:"O Hospital IPO (otorrino) e o Hospital INC (neuro) estão disponíveis em:",opcoes:["Todos os planos","Apenas no 600","No 400 e 600","Apenas no CIM"],correta:1,explica:"São especializados exclusivos do Paraná 600. O Hospital da Visão (oftalmologia) está no 400 e 600; o CADMO (psiquiatria) em todos."}
]},

/* ============================ PARTE 6 ============================ */
{id:6,titulo:"Coparticipação",desc:"O limitador de R$ 100, exemplos práticos, coparticipação parcial (100+ vidas), isenção nas unidades próprias e por que ela existe.",modulos:[

{id:30,num:30,tempo:"4 min",titulo:"Como funciona o limitador de R$ 100",html:`
<p>A coparticipação tem um <em>teto de R$ 100,00 por procedimento</em>.</p>
<h3>Como o limitador funciona</h3>
<p>Para cada procedimento: (1) valor pago ao prestador; (2) % de coparticipação (30% ou 50%); (3) o <strong>menor valor</strong> entre o calculado e R$ 100.</p>
<h3>Exemplo simples — consulta eletiva</h3>
<ul>
<li>Valor pago ao médico: R$ 154,79</li>
<li>30% = R$ 46,44 | 50% = R$ 77,40</li>
<li>Beneficiário paga conforme a opção contratada</li>
</ul>
<h3>Exemplo com limitador ATIVO — tomografia de abdome</h3>
<ul>
<li>Valor pago ao prestador: R$ 692,39</li>
<li>30% = R$ 207,72 (passa do teto) | 50% = R$ 346,19 (passa muito)</li>
<li>Beneficiário paga: <strong>R$ 100,00</strong></li>
</ul>
<div class="callout arg"><p>"O cliente NUNCA paga mais que R$ 100 por procedimento. Mesmo uma ressonância de R$ 1.500, o cliente paga só R$ 100. Isso dá previsibilidade."</p></div>`},

{id:31,num:31,tempo:"5 min",titulo:"Coparticipação completa: exemplos práticos",html:`
<p>Tabela oficial atualizada (valores exemplificativos):</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Procedimento</th><th>Valor prestador</th><th>Limitador</th><th>Copart. 30%</th><th>Copart. 50%</th></tr></thead><tbody>
<tr><td>Consulta médica eletiva</td><td>R$ 154,79</td><td>R$ 100,00</td><td>R$ 46,44</td><td>R$ 77,40</td></tr>
<tr><td>Consulta urgência/emergência</td><td>R$ 192,64</td><td>R$ 100,00</td><td>R$ 57,79</td><td>R$ 96,32</td></tr>
<tr><td>Hemograma completo</td><td>R$ 12,07</td><td>R$ 100,00</td><td>R$ 3,62</td><td>R$ 6,04</td></tr>
<tr><td>Rotina de urina</td><td>R$ 9,65</td><td>R$ 100,00</td><td>R$ 2,90</td><td>R$ 4,83</td></tr>
<tr><td>RX Abdômen simples</td><td>R$ 41,02</td><td>R$ 100,00</td><td>R$ 12,31</td><td>R$ 20,51</td></tr>
</tbody></table></div>
<p>A coparticipação é cobrada por evento (cada procedimento incide coparticipação).</p>
<h3>O que entra na coparticipação completa</h3>
<p>Todos os procedimentos ambulatoriais: consultas, exames laboratoriais, exames de imagem, procedimentos ambulatoriais e terapias.</p>
<h3>O que NÃO entra</h3>
<p>Internação hospitalar (sempre sem coparticipação), cirurgias com internação, partos.</p>`},

{id:32,num:32,tempo:"4 min",titulo:"Coparticipação parcial (100+ vidas)",html:`
<p><em>Novidade exclusiva</em> do novo portfólio.</p>
<h3>O que é</h3>
<p>Para empresas <strong>a partir de 100 vidas (Empresarial)</strong>, há a opção de <em>coparticipação PARCIAL</em>: sem coparticipação para consultas e exames gerais, e <strong>coparticipação APENAS no grupo de TERAPIAS</strong> (30% ou 50%).</p>
<h3>Quais terapias</h3>
<p>Psicoterapia, fisioterapia, fonoaudiologia, terapia ocupacional e outras do Rol ANS.</p>
<h3>Exemplos práticos</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Procedimento</th><th>Valor</th><th>Limitador</th><th>Copart. 30%</th><th>Copart. 50%</th></tr></thead><tbody>
<tr><td>Fisioterapia ambulatorial individual</td><td>R$ 21,54</td><td>R$ 100,00</td><td>R$ 6,46</td><td>R$ 10,77</td></tr>
<tr><td>Sessão de psicoterapia individual</td><td>R$ 75,28</td><td>R$ 100,00</td><td>R$ 22,58</td><td>R$ 37,64</td></tr>
<tr><td>Sessão de fonoaudiologia</td><td>R$ 118,56</td><td>R$ 100,00</td><td>R$ 35,57</td><td>R$ 59,28</td></tr>
</tbody></table></div>
<h3>Por que existe</h3>
<p>Empresas grandes querem oferecer plano "sem coparticipação" como diferencial. Para evitar uso desnecessário de terapias (caras para a operadora), mantém-se coparticipação SÓ nessa categoria.</p>`},

{id:33,num:33,tempo:"3 min",titulo:"Isenção de coparticipação nas unidades próprias",html:`
<p>Um dos argumentos de venda mais fortes.</p>
<h3>O que está isento</h3>
<div class="callout arg"><p>Consultas eletivas e atendimento de urgência/emergência realizados nas <strong>unidades próprias (CIMs)</strong> = <em>SEM COPARTICIPAÇÃO</em>. Vale para os CIMs Água Verde, CIC, São José e Araucária. <strong>Em todos os planos</strong> (CIM, 400 e 600).</p></div>
<div class="callout quote">"Por mais que o cliente precise passar pelo generalista antes do especialista (no CIM), se usar dentro das minhas unidades, NÃO paga coparticipação. O cliente entende o gatekeeper como gestão de saúde — e a 'consulta de graça' tira o atrito."</div>`},

{id:34,num:34,tempo:"4 min",titulo:"Por que a coparticipação existe",html:`
<h3>O risco do uso indiscriminado</h3>
<div class="callout quote">"Cliente em casa, sem nada pra fazer, com plano sem coparticipação. O que ele faz? Vai no médico. Por quê? Porque pode. Esse é o problema."</div>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Cenário</th><th>Impacto</th></tr></thead><tbody>
<tr><td>Sem coparticipação</td><td>uso aumenta 40-60% sem necessidade, sinistralidade dispara, reajuste anual 25-35%, contrato vira inviável em 2-3 anos</td></tr>
<tr><td>Com coparticipação</td><td>uso consciente, sinistralidade controlada, reajuste 8-15%, contrato sustentável</td></tr>
</tbody></table></div>
<h3>Como argumentar</h3>
<div class="callout arg"><p>"A coparticipação não é pra te punir. É pra que seu plano dure 5, 10 anos. Sem ela, o reajuste te tira do plano. E o limitador de R$ 100 é a sua proteção: por mais cara que seja uma ressonância, você nunca paga mais que R$ 100."</p></div>`},

],quiz:[
{pergunta:"Numa tomografia de R$ 692,39 com coparticipação de 50%, quanto o beneficiário paga?",opcoes:["R$ 346,19","R$ 207,72","R$ 100,00","R$ 50,00"],correta:2,explica:"50% daria R$ 346,19, mas o limitador trava em R$ 100. O cliente nunca paga mais que R$ 100 por procedimento."},
{pergunta:"Onde NÃO incide coparticipação?",opcoes:["Em consultas eletivas","Em exames de imagem","Em internação hospitalar, cirurgias com internação e partos","Em terapias"],correta:2,explica:"Internação, cirurgias com internação e partos são sempre sem coparticipação. Ela incide nos procedimentos ambulatoriais."},
{pergunta:"A coparticipação parcial (só terapias) está disponível a partir de quantas vidas?",opcoes:["3 vidas","30 vidas","100 vidas (Empresarial)","Não existe"],correta:2,explica:"É novidade do novo portfólio para empresas com 100+ vidas: sem coparticipação em consultas/exames gerais, só no grupo de terapias."},
{pergunta:"Atendimentos nas unidades próprias (CIMs) têm coparticipação?",opcoes:["Sim, sempre 30%","Não — são isentos em todos os planos (CIM, 400 e 600)","Só no 600 são isentos","Só urgências são isentas"],correta:1,explica:"Consultas e urgências nas unidades próprias são isentas de coparticipação em todos os planos. É um dos argumentos mais fortes, principalmente no CIM."}
]},

/* ============================ PARTE 7 ============================ */
{id:7,titulo:"Carências",desc:"Tabela completa de carências da Paraná, reaproveitamento, campanha 10+ vidas (carência zero) e o caso do 'anterior do anterior'.",modulos:[

{id:35,num:35,tempo:"5 min",titulo:"Tabela completa de carências",html:`
<p>Tabela oficial atualizada da Paraná Clínicas:</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Procedimento</th><th>SEM plano anterior</th><th>COM plano anterior (12m+)</th><th>Campanha 10+ vidas</th></tr></thead><tbody>
<tr><td>Urgência e emergência</td><td>Não possui</td><td>Não possui</td><td>Não possui</td></tr>
<tr><td>Consulta eletiva + exames básicos (análises clínicas, RX convencional, ECG)</td><td>Não possui</td><td>Não possui</td><td>Não possui</td></tr>
<tr><td>Fisioterapia ambulatorial, US simples, endoscopia digestiva alta, mamografia, audiometria, teste ergométrico, cirurgias ambulatoriais</td><td>180 dias</td><td>Não possui</td><td>Não possui</td></tr>
<tr><td>Exames complexos (US Doppler, densitometria, ecocardiograma, MAPA, Holter)</td><td>180 dias</td><td>Não possui</td><td>Não possui</td></tr>
<tr><td>Alta complexidade (RM, TC, hemodinâmica, quimio, radio, hemodiálise)</td><td>180 dias</td><td>Não possui</td><td>Não possui</td></tr>
<tr><td>Cirurgias ambulatoriais</td><td>180 dias</td><td>Não possui</td><td>Não possui</td></tr>
<tr><td>Internações + transplante rim/córnea</td><td>180 dias</td><td>Não possui</td><td>Não possui</td></tr>
<tr><td>Terapias</td><td>180 dias</td><td>Não possui</td><td>Não possui</td></tr>
<tr><td>Parto a termo</td><td>300 dias</td><td>300 dias</td><td>Não possui</td></tr>
<tr><td>Doenças preexistentes (CPT)</td><td>24 meses</td><td>24 meses</td><td>24 meses</td></tr>
</tbody></table></div>
<div class="callout key"><h4>Resumo prático</h4>
<ul style="margin:0">
<li><strong>Sem plano anterior:</strong> 180 dias para a maioria, 300 para parto, 24 meses preexistentes</li>
<li><strong>Com plano anterior (12m+):</strong> ZERO carência (exceto parto e preexistentes)</li>
<li><strong>Grupo 10+ vidas (campanha):</strong> ZERO TUDO, inclusive parto. Só CPT (24m, exigência legal)</li>
</ul></div>`},

{id:36,num:36,tempo:"4 min",titulo:"Reaproveitamento de carência",html:`
<h3>Os 5 requisitos</h3>
<ol>
<li>Plano anterior ativo há <strong>12 meses+</strong></li>
<li>Em dia com pagamentos</li>
<li>Mesmo padrão de conforto</li>
<li>Solicitar em até <strong>60 dias</strong> após exclusão</li>
<li>Preencher DPS</li>
</ol>
<h3>A operadora de origem importa?</h3>
<div class="callout key"><p><strong>NÃO.</strong> A Paraná aceita de QUALQUER operadora (Unimed, Bradesco, Amil, Clinipam, SulAmérica).</p></div>
<h3>Documentação</h3>
<p><strong>Carta de Permanência</strong> atualizada + <strong>cópia da carteirinha</strong>.</p>
<div class="callout warn"><p>"Não aceitamos SÓ a carta. Tem que ter cópia da carteirinha junto. Carta de permanência fraudada é absurdamente comum."</p></div>`},

{id:37,num:37,tempo:"4 min",titulo:"Campanha 10+ vidas (carência zero)",html:`
<h3>O que é</h3>
<p>Empresas com <strong>10 ou mais vidas</strong> têm todas as carências <em>ZERADAS</em>, exceto <strong>CPT (24 meses)</strong> por exigência legal.</p>
<h3>O que significa</h3>
<ul>
<li>Beneficiário usa TUDO desde o dia 1</li>
<li>Inclui <strong>parto</strong> (que normalmente teria 300 dias)</li>
<li>Inclui cirurgias, exames complexos, terapias</li>
</ul>
<div class="callout tip"><h4>Caso real do treinamento</h4><p>"Tô fechando uma empresa de Pinhais com 11 vidas. SÓ porque a mulher do dono tá grávida e quer usar o Gestar Bem. A partir de 10 vidas, zero a carência de parto. Cliente nem ia comparar — só queria o parto coberto. Fechei pelo argumento."</p></div>
<div class="callout arg"><h4>Como vender</h4><p>"Sua empresa tem 10 ou mais vidas? Então pode usar TUDO desde o primeiro dia. Funcionários que querem ter filho, que precisam de cirurgia, que estão em terapia — todos cobertos imediatamente."</p></div>`},

{id:38,num:38,tempo:"4 min",titulo:"O caso real do 'anterior do anterior'",html:`
<h3>O cenário</h3>
<p>Cliente tem apenas <strong>5 meses</strong> na operadora atual. Pela regra padrão, não daria para reaproveitar carência (precisaria de 12 meses+).</p>
<h3>A descoberta</h3>
<p>Mas o cliente teve <strong>2 anos na Clinipam ANTES da Unimed</strong>. E migrou entre Clinipam → Unimed → Paraná dentro de <strong>30 dias</strong> entre cada uma.</p>
<h3>A solução</h3>
<div class="callout quote">"O time da Paraná consegue ver esse histórico. O cliente migrou dentro de 30 dias entre operadoras, e isso caracterizou como mais de 12 meses de plano total. Reaproveitou TODA a carência."</div>
<div class="callout arg"><h4>A lição</h4><p><strong>Sempre pergunte o histórico COMPLETO:</strong> "Há quanto tempo no plano atual? Antes dele, qual era? Quanto tempo ficou? Houve gap entre operadoras? Quantos dias?"</p></div>
<h3>Documentação</h3>
<p>Carta de Permanência da atual + carteirinha atual + Carta de Permanência da anterior + carteirinha anterior.</p>`},

],quiz:[
{pergunta:"Para um cliente SEM plano anterior, qual a carência da maioria dos procedimentos (exames complexos, cirurgias, internações)?",opcoes:["30 dias","180 dias","300 dias","24 meses"],correta:1,explica:"Sem plano anterior: 180 dias para a maioria, 300 dias para parto e 24 meses para preexistentes (CPT). Urgência e consultas básicas não têm carência."},
{pergunta:"Na campanha 10+ vidas, o que acontece com a carência de PARTO?",opcoes:["Continua 300 dias","É zerada (parto coberto desde o dia 1)","Vira 180 dias","Vira 24 meses"],correta:1,explica:"Com 10+ vidas tudo é zerado, inclusive parto. Só a CPT (24 meses) permanece, por exigência legal. Foi o argumento que fechou a empresa de 11 vidas com gestante."},
{pergunta:"A Paraná aceita reaproveitamento de carência de quais operadoras?",opcoes:["Só de operadoras do grupo Rede D'Or","Só da Unimed","De QUALQUER operadora (Unimed, Bradesco, Amil, Clinipam, SulAmérica)","Nenhuma"],correta:2,explica:"A origem não importa — aceita de qualquer operadora, desde que 12 meses+, em dia, mesmo padrão, em até 60 dias e com DPS. Sempre carta + cópia da carteirinha."},
{pergunta:"Qual a lição do caso 'anterior do anterior'?",opcoes:["Nunca aceitar cliente com menos de 12 meses","Perguntar SEMPRE o histórico completo de planos (migrações em até 30 dias somam tempo)","Só aceitar Clinipam","Recusar quem trocou de operadora"],correta:1,explica:"Cliente com 5 meses na atual reaproveitou tudo porque tinha 2 anos antes (Clinipam) com gaps menores que 30 dias entre operadoras. Pergunte o histórico completo."}
]},

/* ============================ PARTE 8 ============================ */
{id:8,titulo:"Regras de comercialização",desc:"PME / PME Mais / Empresarial, quem pode ser titular, dependentes (3-29 e 30+), regras de PJ e mesmo grupo societário.",modulos:[

{id:39,num:39,tempo:"6 min",titulo:"PME, PME Mais e Empresarial",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Categoria</th><th>Vidas</th><th>Características principais</th></tr></thead><tbody>
<tr><td>PME</td><td>3 a 29</td><td>DPS obrigatória, coparticipação obrigatória</td></tr>
<tr><td>PME Mais</td><td>30 a 99</td><td>Sem DPS, pode ser sem coparticipação</td></tr>
<tr><td>Empresarial</td><td>100+</td><td>Sem DPS, todas as opções (inclusive parcial)</td></tr>
</tbody></table></div>
<h3>Comparativo detalhado</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th>PME (3-29)</th><th>PME Mais (30-99)</th><th>Empresarial (100+)</th></tr></thead><tbody>
<tr><td>Declaração de Saúde (DPS)</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>Coparticipação obrigatória</td><td>Sim (30%/50%)</td><td>Pode ser sem</td><td>Pode ser sem</td></tr>
<tr><td>Coparticipação parcial (só terapias)</td><td class="no">Não</td><td class="no">Não</td><td class="yes">Sim</td></tr>
<tr><td>RG/CNH/CPF do titular</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>Certidão casamento/união estável</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>MEI</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>Comprovante residência (dono)</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>Relação de Funcionários</td><td class="no">Não</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>E-Social</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="no">Não</td></tr>
<tr><td>Demitidos/Aposentados</td><td>Sem limite</td><td>10% da massa</td><td>10% da massa</td></tr>
<tr><td>Carta de Aproveitamento de Carência</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>Pós-venda</td><td>Suporte geral (até 72h, prática 24h)</td><td>Consultor (Priscila)</td><td>Consultor dedicado</td></tr>
</tbody></table></div>
<div class="callout key"><h4>Quando indicar cada um</h4>
<p><strong>3-29 vidas → PME</strong> (maior parte dos contratos)<br><strong>30-99 vidas → PME Mais</strong> (empresas médias)<br><strong>100+ vidas → Empresarial</strong> (corporativo, opções avançadas)</p></div>`},

{id:40,num:40,tempo:"4 min",titulo:"Quem pode ser titular",html:`
<h3>PME (3-29 vidas)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tipo</th><th>Regra</th></tr></thead><tbody>
<tr><td>Administradores, Diretores e Sócios</td><td>Mínimo de <strong>6 meses</strong> no contrato social</td></tr>
<tr><td>Empregados CLT</td><td>Aceito</td></tr>
<tr><td>Estagiários</td><td>Até <strong>30 anos</strong></td></tr>
<tr><td>Aprendizes</td><td>14 a 24 anos</td></tr>
<tr><td>Expatriados, estrangeiros, demitidos, aposentados</td><td>Aceito</td></tr>
<tr><td>Prestador de Serviço PJ</td><td>Limitado a <strong>20% da massa CLT</strong></td></tr>
</tbody></table></div>
<h3>30+ vidas (PME Mais e Empresarial)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tipo</th><th>Regra</th></tr></thead><tbody>
<tr><td>Administradores, Diretores e Sócios</td><td>Mínimo 6 meses no contrato social</td></tr>
<tr><td>Empregados CLT</td><td>Aceito</td></tr>
<tr><td>Estagiários</td><td>Até 30 anos</td></tr>
<tr><td>Aprendizes</td><td>14 a 24 anos</td></tr>
<tr><td>Expatriados e Estrangeiros</td><td>Aceito</td></tr>
<tr><td>Demitidos e Aposentados</td><td>Limitado a <strong>10% da massa total</strong></td></tr>
<tr><td>PJ</td><td>20% da massa</td></tr>
</tbody></table></div>
<div class="callout quote">"Se a empresa tem 3 sócios sendo pai e os dois filhos, todos podem entrar. Mas é análise — me mande o caso."</div>`},

{id:41,num:41,tempo:"6 min",titulo:"Dependentes (PME 3-29 vidas)",html:`
<p>A parte mais detalhada. Memorize.</p>
<h3>Cônjuge / Companheiro(a)</h3>
<p>Inclusive do mesmo sexo, <strong>sem limite de idade</strong>.</p>
<h3>Filhos (naturais, adotivos, enteados)</h3>
<ul>
<li><strong>Até 44 anos, 11 meses e 29 dias</strong> (solteiros, casados ou divorciados)</li>
<li>Recém-nascido: segue carência do titular (sem necessidade de 12 meses no plano anterior)</li>
</ul>
<div class="callout arg"><h4>DIFERENCIAL GIGANTE</h4><p>O mercado padrão aceita filhos até 24 anos. A Paraná aceita até <strong>44 ANOS</strong> no PME. Permite filhos adultos no plano dos pais, mesmo casados.</p></div>
<h3>Genro / Nora</h3>
<ul>
<li>Até 44 anos, 11 meses e 29 dias</li>
<li>O filho(a) do titular precisa estar no grupo familiar (faz a ponte)</li>
<li>NÃO válido para MEI</li>
</ul>
<h3>Netos</h3>
<ul>
<li>Até <strong>17 anos, 11 meses e 29 dias</strong></li>
<li>Recém-nascido: segue carência do titular</li>
</ul>
<h3>Pai/Mãe, Padrasto/Madrasta, Irmãos</h3>
<ul>
<li>Até 64 anos, 11 meses e 29 dias</li>
<li><strong>SEM DS positiva</strong> (qualquer doença declarada = recusado)</li>
<li>APENAS para grupos a partir de 5 vidas</li>
<li>NÃO válido para MEI</li>
</ul>
<div class="callout internal"><h4>INTERNO — não passe ao cliente</h4><p>Pais/mães/irmãos com DS positiva (hipertensão, diabetes, enxaqueca, qualquer coisa) NÃO são aceitos. Risco muito alto para grupos pequenos.</p></div>
<h3>Sobrinhos</h3>
<ul>
<li>Até 44 anos, 11 meses e 29 dias</li>
<li>Recém-nascido: segue carência do titular</li>
</ul>
<h3>Regras gerais</h3>
<ul>
<li>Opção de plano dos dependentes = IGUAL à do titular</li>
<li>Netos e sobrinhos são do <strong>titular</strong> (não do cônjuge)</li>
<li>Grupos até 29 vidas: DPS preenchida no CNPJ da empresa</li>
</ul>`},

{id:42,num:42,tempo:"4 min",titulo:"Dependentes (30+ vidas — PME Mais e Empresarial)",html:`
<p>As regras MUDAM em relação ao PME.</p>
<h3>Cônjuge / Companheiro(a)</h3>
<p>Inclusive do mesmo sexo, sem limite de idade (igual ao PME).</p>
<h3>Filhos (naturais, adotivos, enteados)</h3>
<ul>
<li><strong>MENOR DE 24 ANOS</strong> (atenção: NÃO é 44 como no PME!)</li>
<li><strong>OU</strong> com incapacidade total e permanente para o trabalho — sem limite de idade</li>
</ul>
<div class="callout warn"><h4>MUITO IMPORTANTE</h4><p>Diferença drástica em relação ao PME. Em 30+ vidas, <strong>filhos só até 23 anos e 11 meses</strong>. Acima disso, só com laudo de incapacidade.</p></div>
<h3>Agregados</h3>
<p>Limitado a <strong>5% do grupo total</strong>, mediante análise da seguradora.</p>
<h3>Por que essa diferença</h3>
<div class="callout quote">"Em PME pequeno posso ser flexível (filhos até 44). Em contratos grandes (30+), sigo padrão de mercado para controlar sinistralidade."</div>`},

{id:43,num:43,tempo:"5 min",titulo:"PJ — regras e flexibilizações",html:`
<h3>Regra padrão</h3>
<p><strong>Limitado a 20% da massa de CLT.</strong> Ex.: 10 CLT = até 2 PJ; 20 CLT = até 4 PJ; 100 CLT = até 20 PJ.</p>
<h3>Documentação</h3>
<ul>
<li>Carta da Empresa Contratante solicitando inclusão do PJ (modelo pelo suporte de vendas)</li>
<li>Contrato de Prestação de Serviço válido (12 meses ou indeterminado) <strong>registrado em cartório como VERDADEIRO ou AUTÊNTICO</strong> (não por semelhança!)</li>
<li>1 Nota Fiscal eletrônica do mês anterior</li>
<li>Contrato Social e Alterações do PJ</li>
<li>Cartão CNPJ atualizado (mínimo 180 dias ativo, em caso de MEI)</li>
<li>Documentos de vínculo dos dependentes</li>
<li><strong>SEM vínculo familiar</strong> com os sócios da empresa principal</li>
</ul>
<div class="callout tip"><h4>Caso real</h4><p>"Fechei uma empresa de 11 vidas onde eram 3 CLT e 8 PJ. Pela regra de 20% não daria. Mas briguei internamente, mandei análise, e APROVARAM."</p></div>
<div class="callout arg"><h4>A flexibilidade</h4><p>"Eu nunca digo NÃO de imediato. A regra é 20%. Em casos razoáveis, levo internamente. O que NÃO é aceito: empresa com mais PJ que CLT (ex: 100 CLT + 500 PJ)."</p></div>
<h3>Caminho prático</h3>
<p>Se passar do limite, NÃO recuse — mande detalhes ao Lucas por e-mail (vínculo há quanto tempo, NF regular, serviço essencial). Análise em 24-48h.</p>`},

{id:44,num:44,tempo:"4 min",titulo:"Mesmo grupo societário",html:`
<p>Empresas com sócios em comum podem ser <em>unidas no mesmo contrato</em> (mais vidas = melhor preço, possível campanha 10+ vidas).</p>
<h3>Documentação adicional</h3>
<ul>
<li><strong>Sócios em comum:</strong> documento comprovando vínculo societário (última alteração do contrato social, estatuto, ata).</li>
<li><strong>Sócios incomum:</strong> declaração da empresa matriz/estipulante (modelo pelo suporte de vendas), assinada pela matriz e pelas empresas que entram.</li>
</ul>
<h3>Regras</h3>
<ul>
<li>Data do contrato = mesma data de vigência</li>
<li>Documento menciona a empresa do grupo como <strong>subestipulante</strong></li>
<li>Empresa matriz é o responsável pagador e estipulante</li>
</ul>
<div class="callout tip"><h4>Exemplo</h4><p>João tem Empresa A (3 funcionários) e Empresa B (5). Sozinhas não atingem 10 vidas. Juntas (8 + dependentes) passam de 10 e ativam a campanha de carência zero.</p></div>`},

],quiz:[
{pergunta:"Qual categoria exige DPS e tem coparticipação obrigatória?",opcoes:["PME (3-29 vidas)","PME Mais (30-99 vidas)","Empresarial (100+ vidas)","Nenhuma"],correta:0,explica:"PME (3-29) exige DPS e coparticipação obrigatória. PME Mais e Empresarial não têm DPS e podem ser sem coparticipação."},
{pergunta:"Até que idade a Paraná aceita FILHOS como dependentes no PME (3-29 vidas)?",opcoes:["Até 24 anos","Até 17 anos","Até 44 anos, 11 meses e 29 dias","Sem limite"],correta:2,explica:"No PME é um diferencial gigante: filhos até 44 anos (mercado padrão é 24). Mas atenção: em 30+ vidas o limite cai para menores de 24 anos."},
{pergunta:"Qual a regra padrão de limite de PJ em relação à massa CLT?",opcoes:["Sem limite","20% da massa CLT","50% da massa CLT","100% da massa CLT"],correta:1,explica:"PJ é limitado a 20% da massa CLT (10 CLT = até 2 PJ). Acima disso, não recuse: envie detalhes ao Lucas para análise (24-48h)."},
{pergunta:"Pais, mães e irmãos como dependentes no PME exigem o quê?",opcoes:["Qualquer idade, com qualquer condição de saúde","Até 64a11m29d, SEM DS positiva e apenas em grupos a partir de 5 vidas","Só até 24 anos","Apenas em MEI"],correta:1,explica:"Pai/mãe/padrasto/madrasta/irmãos: até 64a11m29d, sem DS positiva (qualquer doença = recusado), só a partir de 5 vidas e não válido para MEI."}
]},

/* ============================ PARTE 9 ============================ */
{id:9,titulo:"Documentação e implantação",desc:"Lista completa de documentos, planilha de implantação, DPS, facilitação de cônjuge, fluxo/timeline e vigência/pro-rata.",modulos:[

{id:45,num:45,tempo:"6 min",titulo:"Lista completa de documentos",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Documento</th><th>PME (3-29)</th><th>PME Mais (30-99)</th><th>Empresarial (100+)</th></tr></thead><tbody>
<tr><td>Declaração Pessoal de Saúde (DPS)</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>Cobertura Parcial Temporária (CPT) se preexistência</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>RG, CNH, CPF e Certidão de Nascimento (titular)</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>Passaporte/RNE (estrangeiro)</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>Certidão de Casamento/União Estável</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>Certidão de Adoção (se aplicável)</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>Comprovante Residencial (só dono)</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>Contrato Social (última alteração)</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Certificado MEI (se aplicável)</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>Contrato de Prestação de Serviço (PJ)</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Nota Fiscal eletrônica (PJ — mês anterior)</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Cartão CNPJ (últimos 30 dias)</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Guia Detalhada do FGTS</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>E-Social</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="no">Não</td></tr>
<tr><td>Relação de Funcionários</td><td class="no">Não</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Proposta Comercial (precificação)</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Ficha de Implantação preenchida</td><td class="yes">Sim</td><td class="yes">Sim</td><td class="yes">Sim</td></tr>
<tr><td>Carta de Aproveitamento de Carência</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td></tr>
</tbody></table></div>
<h3>Detalhamento dos documentos da empresa</h3>
<ul>
<li><strong>Contrato Social:</strong> última alteração consolidada/estatuto/ata. MEI ativo há 180 dias mínimo. Cópia legível.</li>
<li><strong>Cartão CNPJ:</strong> emitido nos últimos 30 dias.</li>
<li><strong>Guia Detalhada do FGTS:</strong> guia de recolhimento + comprovante bancário + relação SEFIP. Recém-contratados (até 30 dias): eSocial + Carteira de Trabalho (pág. 1, 2 e registro da empresa).</li>
</ul>
<div class="callout warn"><h4>Atenção a fraudes</h4><p>"Tenho fraude em cima de guia de FGTS e eSocial. Por isso peço as duas informações. Você não faz ideia do que corretor faz pra vender."</p></div>`},

{id:46,num:46,tempo:"4 min",titulo:"Planilha de implantação: cuidados críticos",html:`
<h3>Regras de preenchimento</h3>
<ul>
<li><strong>UMA planilha por CNPJ</strong></li>
<li><strong>Sistema MANUAL</strong> — primeira letra de cada nome em <strong>MAIÚSCULA</strong></li>
<li>Correto: "Lucas Pereira De Souza"</li>
<li>Errado: "lucas pereira de souza" / "LUCAS PEREIRA DE SOUZA"</li>
<li><strong>Endereços</strong> seguem mesma regra (primeira letra maiúscula)</li>
<li>Atenção a traços, acentos e formatação</li>
</ul>
<div class="callout warn"><p>"Se não seguir o padrão, o sistema não importa e devolve a planilha. Já vi corretor perder 3 dias por erro de formatação."</p></div>
<h3>Onde está</h3>
<p>Formato Excel, organizada em abas (perfil etário, planos, valores, formulário de pagamento).</p>
<h3>Como enviar</h3>
<p>E-mail para <strong>suportedevendas@paranaclinicas.com.br</strong>, com cópia para: gestor Paraná (Lucas), gestora PlaneCorp e assistente Ariane (quando aplicável).</p>`},

{id:47,num:47,tempo:"5 min",titulo:"Declaração de Saúde (DPS): processo detalhado",html:`
<p>Exclusiva para contratos <strong>PME (3-29 vidas)</strong>.</p>
<h3>Onde preencher</h3>
<p>Portal da Paraná Clínicas: <a href="https://www.paranaclinicas.com.br/comercial/" target="_blank" rel="noopener">paranaclinicas.com.br/comercial</a>. Preenchimento online, por <strong>grupo familiar</strong> (titular + dependentes).</p>
<h3>Processo passo a passo</h3>
<ol>
<li>Acesse o link no portal</li>
<li>Preencha dados do titular e dependentes</li>
<li>Responda às perguntas de saúde</li>
<li>Ao finalizar, o sistema gera <strong>PROTOCOLO + CÓDIGO</strong></li>
<li><strong>ANOTE/SALVE o protocolo</strong> (CRÍTICO!)</li>
</ol>
<h3>Cenários</h3>
<ul>
<li><strong>DPS negativa:</strong> implantação normal, carências conforme tabela</li>
<li><strong>DPS positiva:</strong> sistema gera <strong>CPT</strong>. Beneficiário precisa <strong>ACEITAR a CPT</strong> entrando novamente com o protocolo. 24 meses sem cobertura para procedimentos relacionados àquela doença; cobertura normal para o resto</li>
</ul>
<div class="callout warn"><h4>O risco de perder o protocolo</h4><p>"Se o cliente gera CPT mas perde o protocolo, ele tem que REFAZER TODA a DPS. Processo zero. Por isso insisto: anota, salva, manda pra você."</p></div>
<h3>Casos que recusam</h3>
<p>Câncer em tratamento, esclerose múltipla, doenças cardíacas graves, algumas condições neurológicas.</p>
<div class="callout quote">"Empresa de 32 vidas com esclerose múltipla + 3 cânceres — declino. É proposta fora do mercado. Mas caso isolado em grupo grande, eu brigo internamente. Bom senso."</div>`},

{id:48,num:48,tempo:"4 min",titulo:"NOVO! Facilitação de cônjuge",html:`
<p><em>Grande novidade</em> do novo portfólio.</p>
<h3>O problema anterior</h3>
<p>Exigia certidão de casamento OU declaração de união estável reconhecida em cartório como VERDADEIRA. Muitas vendas travavam.</p>
<h3>A novidade — comprovação simplificada</h3>
<p>Basta <strong>UM</strong> dos documentos:</p>
<ul>
<li><strong>Declaração conjunta de união estável</strong> — assinada por ambos com <strong>firma reconhecida em cartório</strong> OU <strong>assinatura digital ICP-Brasil</strong> (Gov.br, Sucent, etc.)</li>
<li>OU <strong>Certidão de filhos em comum</strong></li>
<li>OU <strong>Comprovante de dependentes na Declaração de Imposto de Renda</strong></li>
</ul>
<div class="callout quote">"Eu não escuto mais 'chegou casamento inteiro hoje'. Sério, ouvia isso TODA SEMANA. Agora, com 3 caminhos de comprovação, virou. As vendas fluem."</div>
<div class="callout tip"><h4>Sobre o ICP-Brasil</h4><p>Estrutura oficial de assinatura digital reconhecida pelo governo (Gov.br, Sucent, etc.). Tem a mesma validade de um cartório para esse fim.</p></div>`},

{id:49,num:49,tempo:"5 min",titulo:"Fluxo de implantação (timeline real)",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Etapa</th><th>Prazo</th><th>O que acontece</th></tr></thead><tbody>
<tr><td>Você envia a documentação</td><td>Dia 0</td><td>E-mail para suportedevendas + cópias</td></tr>
<tr><td>Triagem da Paraná</td><td>1-3 dias (pode ser menos de 24h)</td><td>Análise. Se houver pendência, retorna</td></tr>
<tr><td>Confirmação de vigência</td><td>Dia 1-3</td><td>E-mail com tabela e data da vigência</td></tr>
<tr><td>Assinatura pelo cliente</td><td>Até 3 dias depois</td><td>Cliente tem prazo para assinar</td></tr>
<tr><td>Vigência efetiva</td><td>Dia da vigência</td><td>Plano ativo</td></tr>
<tr><td>Primeiro boleto</td><td>Vigência + 10 dias</td><td>Pro-rata</td></tr>
<tr><td>Segundo boleto</td><td>Mês seguinte</td><td>Pode ser isento na campanha</td></tr>
</tbody></table></div>
<h3>Casos especiais</h3>
<ul>
<li><strong>Vigência futura:</strong> pode programar até 60 dias depois</li>
<li><strong>Cliente não assinou:</strong> processo é declinado; reenviar documentação. Lucas tem "poder de caneta" para realocar vigência se acionado a tempo</li>
</ul>
<div class="callout arg"><h4>Senso de urgência</h4><p>"Cliente que demora pode ser pego por outro corretor. Gere urgência."</p></div>`},

{id:50,num:50,tempo:"5 min",titulo:"Vigência, vencimento e pro-rata",html:`
<h3>Escolha do dia de vencimento</h3>
<p>Dia 5, 10 ou 15.</p>
<h3>Primeiro boleto: 10 dias após a vigência</h3>
<p>Independente do dia escolhido.</p>
<h3>O conceito de PRO-RATA</h3>
<p>Quando a vigência começa no meio do mês, o primeiro boleto é proporcional aos dias daquele mês. Vigência 22/07 → boleto pro-rata (22 a 31/07) + próximo boleto mês cheio de agosto.</p>
<div class="callout warn"><h4>Atenção: o cliente PRECISA SABER</h4><p>"O cliente recebe DOIS boletos no primeiro mês: um pro-rata (proporcional) e um do mês cheio. SE NÃO AVISAR, ele acha que está sendo cobrado em dobro."</p></div>
<h3>Campanha "Isenção da 2ª fatura"</h3>
<p>Refere-se à <strong>2ª FATURA CHEIA</strong>, não ao pro-rata. Vigência 22/07: 1ª fatura pro-rata (paga), 2ª fatura agosto cheio (paga), 3ª fatura setembro cheio (ISENTA na campanha).</p>
<div class="callout key"><p>"A 'segunda fatura' que isentamos é a SEGUNDA CHEIA — que pro cliente vai ser a TERCEIRA, porque a primeira é pro-rata."</p></div>
<h3>Mudança de vigência</h3>
<p>Possível alterar DEPOIS de definida, desde que: para o futuro (não retroativa) + e-mail formal do dono da corretora + Paraná confirma.</p>`},

],quiz:[
{pergunta:"A DPS (Declaração Pessoal de Saúde) é exigida em qual tipo de contrato?",opcoes:["Todos","Apenas PME (3-29 vidas)","Apenas Empresarial (100+)","Apenas PME Mais"],correta:1,explica:"A DPS é exclusiva de PME (3-29 vidas). PME Mais e Empresarial não exigem DPS."},
{pergunta:"Por que é CRÍTICO o cliente salvar o protocolo da DPS?",opcoes:["Para receber desconto","Porque se gerar CPT e perder o protocolo, precisa REFAZER toda a DPS","Para validar a carteirinha","Para a campanha de isenção"],correta:1,explica:"Se a DPS é positiva, o sistema gera CPT e o cliente precisa aceitá-la entrando novamente com o protocolo. Sem o protocolo, refaz tudo do zero."},
{pergunta:"Na campanha de isenção, qual fatura é de fato isentada?",opcoes:["A primeira (pro-rata)","A 2ª fatura CHEIA — que para o cliente é a 3ª (pois a 1ª é pro-rata)","Todas as faturas","Nenhuma"],correta:1,explica:"A isenção é da 2ª fatura cheia. Como a 1ª é pro-rata, na prática a fatura isenta é a 3ª que o cliente recebe. Sempre explique para não gerar confusão."},
{pergunta:"Com a nova facilitação de cônjuge, quantos documentos bastam para comprovar a união?",opcoes:["Todos os três","Apenas UM (declaração com firma/ICP-Brasil, OU filhos em comum, OU dependente no IR)","Certidão de casamento obrigatória","Nenhum"],correta:1,explica:"Basta UM dos três caminhos. Isso destravou vendas que antes paravam por falta de certidão de casamento."}
]},

/* ============================ PARTE 10 ============================ */
{id:10,titulo:"Programas de saúde (PRIORI)",desc:"A filosofia ativa do PRIORI e os programas: Gestar Bem, Afeto (TEA), Emagrecimento e os demais.",modulos:[

{id:51,num:51,tempo:"4 min",titulo:"PRIORI: filosofia ativa",html:`
<p>PRIORI é a marca dos programas de saúde da Paraná Clínicas. <em>A filosofia é ATIVA, não reativa</em> — a operadora procura, liga, agenda e acompanha proativamente.</p>
<h3>Os programas PRIORI</h3>
<p>Meu Médico, Gestar Bem, Afeto (TEA), Emagrecimento, Bate Aqui (cardíaco), Viva+ Viva Melhor (bem-estar), Nosso Momento (famílias), Bem Saudável (crônicos), Meu Cuidado (crônicos avançados), Em Frente (oncológico).</p>
<div class="callout arg"><p>"Cliente, sua operadora não é reativa. É proativa. Identificamos gestantes, ligamos, agendamos, acompanhamos. Se a gestante FALTA, a gente LIGA. Isso reduz a prematuridade de 13% (média nacional) para 6,57%."</p></div>
<p>A sala do PRIORI fica no <strong>térreo do CIM Água Verde</strong>, com equipe dedicada. Presencial + telemedicina. Todos GRATUITOS.</p>`},

{id:52,num:52,tempo:"4 min",titulo:"Programa Gestar Bem",html:`
<h3>Como funciona</h3>
<p>Identifica gestantes, liga proativamente, agenda pré-natal, <strong>liga se a gestante faltou</strong>, curso de gestantes, aconselhamento de amamentação, identificação de risco, monitoramento telefônico, apoio integral (do banho do bebê à troca de fralda).</p>
<h3>Números (2023)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Indicador</th><th>Resultado</th></tr></thead><tbody>
<tr><td>Taxa de prematuridade Paraná</td><td>6,57%</td></tr>
<tr><td>Taxa nacional média</td><td>13%</td></tr>
<tr><td>Gestantes inscritas</td><td>70%</td></tr>
<tr><td>Retenção em rede própria</td><td>71%</td></tr>
</tbody></table></div>
<div class="callout tip"><p>"Mãe grávida = decisão de comprar plano. Caso real: fechei 11 vidas POR CAUSA disso. Argumento Gestar Bem + carência zero (campanha 10+ vidas) = venda fechada."</p></div>
<p>Atende todos os perfis: gestação programada, adolescente sem estrutura, mãe de primeira viagem. "A gente ensina do ZERO."</p>`},

{id:53,num:53,tempo:"3 min",titulo:"Programa Afeto (TEA)",html:`
<p>Identificação e acompanhamento de Transtorno do Espectro Autista.</p>
<h3>O que faz</h3>
<p>Identifica beneficiários, acompanha com equipe multidisciplinar, avalia evolução a cada 3 meses, muda tratamento se não houver evolução, cuida da família.</p>
<h3>Infraestrutura: Clínica Afeto</h3>
<p>Endereço exclusivo, 14 consultórios multi + 1 médico, sala de integração sensorial, jardim com horta, coworking para pais.</p>
<div class="callout arg"><p>"Família com criança autista? Não fala da operadora, fala da CLÍNICA AFETO. Equipe especializada, infraestrutura própria, coworking pros pais. Não é só plano, é cuidado completo."</p></div>
<div class="callout warn"><h4>Atenção</h4><p>TEA em PME (3-29 vidas) = coparticipação obrigatória de 50%.</p></div>`},

{id:54,num:54,tempo:"3 min",titulo:"Programa de Emagrecimento",html:`
<h3>Números (2023)</h3>
<div class="stats">
<div class="stat"><div class="n">+1.600</div><div class="l">pacientes atendidos</div></div>
<div class="stat"><div class="n">2.899kg</div><div class="l">perdidos coletivamente</div></div>
</div>
<h3>Como funciona</h3>
<p>Avaliação multiprofissional, plano personalizado, acompanhamento nutricional e psicológico, atividade física orientada, preparação completa para bariátrica (quando indicada).</p>
<div class="callout arg"><p>"Empresa com colaboradores acima do peso, alta sinistralidade? Programa de Emagrecimento entrega resultado. Reduz comorbidades, aumenta qualidade de vida, reduz custo do plano."</p></div>`},

{id:55,num:55,tempo:"4 min",titulo:"Outros programas",html:`
<ul>
<li><strong>Bate Aqui (Cardiologia):</strong> acompanhamento de risco cardiovascular, cardiologista de referência, exames preventivos.</li>
<li><strong>Viva+ Viva Melhor (Bem-estar):</strong> qualidade de vida, cessação de tabagismo, combate ao sedentarismo, saúde mental.</li>
<li><strong>Nosso Momento (Famílias):</strong> suporte em adoção, luto, planejamento familiar.</li>
<li><strong>Bem Saudável (Crônicos):</strong> fumantes, alcoolistas, dependência química, prevenção.</li>
<li><strong>Meu Cuidado (Crônicos avançados):</strong> hipertensão grave, diabetes não controlada, doença renal, DPOC — acompanhamento ativo por enfermeiros e médicos.</li>
<li><strong>Em Frente (Oncologia):</strong> suporte a pacientes com câncer, articulação com Centro de Infusão, apoio psicológico.</li>
<li><strong>Programa Meu Médico:</strong> médico de referência, <strong>consulta pós-alta em até 7 dias</strong> após internação.</li>
</ul>`},

],quiz:[
{pergunta:"Qual é a filosofia do PRIORI (programas de saúde da Paraná)?",opcoes:["Reativa — espera o beneficiário procurar","Ativa — identifica, liga, agenda e acompanha proativamente","Apenas digital","Só para empresas grandes"],correta:1,explica:"A filosofia é ATIVA: a operadora procura o beneficiário. Se a gestante falta, ligam. Isso reduz a prematuridade de 13% para 6,57%."},
{pergunta:"O programa Gestar Bem é poderoso na venda porque...",opcoes:["É pago à parte","Mãe grávida = decisão de comprar plano; combinado com carência zero (10+ vidas) fecha vendas","Só atende partos de risco","Substitui o pré-natal do SUS"],correta:1,explica:"Gestante é forte motivador de compra. O caso real: 11 vidas fechadas combinando Gestar Bem + carência zero de parto (campanha 10+ vidas)."},
{pergunta:"O programa Meu Médico garante consulta pós-alta em até quanto tempo?",opcoes:["24 horas","48 horas","7 dias","30 dias"],correta:2,explica:"O Meu Médico oferece médico de referência e consulta pós-alta em até 7 dias após uma internação."}
]},

/* ============================ PARTE 11 ============================ */
{id:11,titulo:"Ferramentas digitais e extras",desc:"Portal e app, pronto atendimento digital, farmácias com desconto, laboratório a+ com coleta domiciliar e o cotador online.",modulos:[

{id:56,num:56,tempo:"4 min",titulo:"Portal e app Paraná Clínicas",html:`
<h3>Para o beneficiário (app)</h3>
<p>Cartão virtual, rede credenciada, agendamento/cancelamento de consultas, liberação de guias, extrato de utilização, pronto atendimento digital, resultados de exames, revistas/manuais, notícias.</p>
<h3>Para o RH (portal)</h3>
<p>Movimentação (incluir/excluir), fatura mensal, relatório de coparticipação, acompanhamento de utilização, 2ª via de carteirinha, suporte ao beneficiário.</p>
<div class="callout warn"><p>"Pode acontecer instabilidade no app (já aconteceu 2 dias). Nesses casos, agendamento via telefone funciona normal. Nunca prometa 100% de uptime."</p></div>
<h3>Cadastro inicial</h3>
<p>CPF + senha master (vem no e-mail) → personalizar senha → adicionar dependentes → testar agendamento.</p>`},

{id:57,num:57,tempo:"4 min",titulo:"Pronto atendimento digital",html:`
<h3>Características</h3>
<ul>
<li>Plataforma <strong>a+dok</strong> (mesma da SulAmérica)</li>
<li>24h / 7 dias</li>
<li><strong>Sem coparticipação</strong> e <strong>sem carência</strong></li>
</ul>
<h3>Atendimentos</h3>
<p>Urgências adulto e pediátrico, sintomas gerais, sintomas respiratórios, atendimento rápido. O médico pode prescrever medicamentos (inclusive controlados com receita), atestados, pedidos de exame e encaminhamentos.</p>
<div class="callout arg"><p>"Telemedicina 24h sem coparticipação. Dor de cabeça no domingo? Filho com febre de madrugada? Consulta digital resolve sem sair de casa. E reduz a sinistralidade: PA presencial custa ~R$ 200 pra operadora; teleconsulta R$ 30-50."</p></div>`},

{id:58,num:58,tempo:"3 min",titulo:"Farmácias Unipreço e BIOLEV",html:`
<p>Disponíveis em <strong>TODOS os planos</strong>.</p>
<h3>Unipreço</h3>
<ul>
<li><strong>Até 30% de desconto</strong> (15% referência, 30% genéricos)</li>
<li>Apresentar carteirinha ou app no caixa</li>
</ul>
<h3>BIOLEV (Manipulação)</h3>
<ul>
<li><strong>20% de desconto</strong> em medicamentos manipulados</li>
</ul>
<div class="callout arg"><p>"Mensalidade R$ 400, beneficiário gasta R$ 200/mês em remédios. Com 30% de desconto, economiza R$ 60/mês = R$ 720/ano. O plano paga parte de si mesmo."</p></div>`},

{id:59,num:59,tempo:"3 min",titulo:"Laboratório a+ (coleta domiciliar)",html:`
<p>Disponível nos planos <strong>Paraná 400 e 600</strong> (não no CIM).</p>
<p>A+ Medicina Diagnóstica (Grupo Fleury) oferece <strong>coleta de exames em casa ou no trabalho, sem custo extra</strong>, domingo a domingo, com resultados online no app.</p>
<div class="callout arg"><p>"Empresa pode programar manhã de coleta no local. Colaboradores fazem exames preventivos sem sair do trabalho. Reduz absenteísmo."</p></div>
<h3>Desconto em vacinas</h3>
<p>Inclusive para o Paraná CIM: influenza, HPV, hepatite, pneumocócica, febre amarela.</p>`},

{id:60,num:60,tempo:"4 min",titulo:"Cotador online",html:`
<p>Ferramenta web para simular preço.</p>
<h3>Acesso</h3>
<p>Para corretores Paraná Clínicas, via plataforma SulAmérica/OS11 (os11.sulamerica.com.br/SaúdeApp ou similar).</p>
<h3>Como funciona</h3>
<p>Login → seleciona produto (CIM, 400 ou 600) → adiciona vidas (idade, parentesco) → escolhe coparticipação → gera proposta.</p>
<h3>Cuidados</h3>
<ul>
<li>Cotar com TODAS as faixas etárias (incluir crianças)</li>
<li>Atenção à regra de dependentes (24 vs 44 anos)</li>
<li>Não compartilhar tabela com beneficiário (uso interno do corretor)</li>
</ul>
<h3>Quando o cotador NÃO resolve</h3>
<p>Vidas 59 anos+, casos de TEA/oncologia/alto custo → análise atuarial + médica. Manda detalhes pro Lucas.</p>
<div class="callout quote">"O cotador resolve 80% dos casos. Os outros 20%, manda pra mim com os detalhes que eu brigo internamente. Nunca diga NÃO direto pro cliente."</div>`},

],quiz:[
{pergunta:"O pronto atendimento digital (a+dok) tem coparticipação ou carência?",opcoes:["Tem coparticipação de 30%","Não tem coparticipação nem carência, 24h/7 dias","Tem carência de 30 dias","Só funciona no 600"],correta:1,explica:"A telemedicina a+dok é 24h/7d, sem coparticipação e sem carência. Reduz sinistralidade (PA presencial ~R$200 vs teleconsulta R$30-50)."},
{pergunta:"A coleta domiciliar do laboratório a+ está disponível em quais planos?",opcoes:["Todos","Apenas CIM","Apenas 400 e 600","Apenas 600"],correta:2,explica:"O a+ com coleta domiciliar é diferencial do 400 e 600 (não disponível no CIM). O desconto em vacinas, porém, vale inclusive para o CIM."},
{pergunta:"Quando o cotador online NÃO resolve a cotação sozinho?",opcoes:["Quando há crianças no grupo","Vidas 59+, casos de TEA/oncologia/alto custo (precisa análise atuarial e médica)","Sempre que há cônjuge","Em contratos PME"],correta:1,explica:"O cotador resolve ~80%. Casos de 59+, TEA, oncologia e alto custo precisam de análise — envie detalhes ao Lucas em vez de dizer não ao cliente."}
]},

/* ============================ PARTE 12 ============================ */
{id:12,titulo:"O jeito PlaneCorp de vender",desc:"A filosofia consultiva, os 6 pilares culturais, identificação de perfis e argumentação por produto.",modulos:[

{id:61,num:61,tempo:"4 min",titulo:"Filosofia consultiva",html:`
<p>A PlaneCorp é <em>consultiva, humana e orientada a resultado</em>. Orientamos, não empurramos. Mostramos opções, não impomos. Construímos relacionamento, não fazemos transação.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Corretora comum</th><th>PlaneCorp</th></tr></thead><tbody>
<tr><td>"Oi, posso te oferecer um plano? Tem Unimed, Bradesco, SulAmérica. Qual você quer?"</td><td>"Antes de tudo, me conta da sua família/empresa: quantas vidas, quais hospitais importam, qual orçamento, o que te incomoda no plano atual? A partir disso monto a melhor opção."</td></tr>
</tbody></table></div>
<div class="callout key"><p>O que conquista: <strong>escuta ativa, conhecimento técnico, honestidade</strong> (apontar pontos fracos também), comparação justa, pós-venda real.</p></div>`},

{id:62,num:62,tempo:"4 min",titulo:"6 pilares culturais",html:`
<ol>
<li><strong>CLAREZA</strong> — explique o porquê de cada recomendação, comparativos claros, sem jargão.</li>
<li><strong>RESULTADO COM PROPÓSITO</strong> — entregue mais do que prometeu, meça pelo impacto.</li>
<li><strong>AUTORRESPONSABILIDADE</strong> — cumpra prazos, busque solução, não espere ser cobrado.</li>
<li><strong>APRENDIZADO CONTÍNUO</strong> — estude produtos, acompanhe mudanças, compartilhe.</li>
<li><strong>CUIDADO CONTÍNUO</strong> — acompanhe após a venda, antecipe problemas.</li>
<li><strong>RESPEITO E HARMONIA</strong> — escute, cumpra combinados, respeite horários.</li>
</ol>`},

{id:63,num:63,tempo:"5 min",titulo:"Identificando perfis de cliente",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Perfil</th><th>Dor principal</th><th>Solução</th></tr></thead><tbody>
<tr><td>Família jovem (com crianças)</td><td>"E se meu filho passar mal de madrugada?"</td><td>Paraná 400, PA pediátrico (CIC e São José até 00:00), Pequeno Príncipe sem direcionamento, telemedicina 24h</td></tr>
<tr><td>Casal sênior (50+)</td><td>"Quero os melhores hospitais"</td><td>Paraná 600 (Santa Cruz eletivo + Marcelino + Vita)</td></tr>
<tr><td>MEI/Autônomo</td><td>"Plano individual é caro demais"</td><td>Paraná CIM com 3 vidas, coparticipação 30%</td></tr>
<tr><td>Dono empresa pequena (5-20)</td><td>"Não consigo pagar caro, mas funcionário pede"</td><td>Paraná CIM ou 400 com 50% copart., ROI de retenção</td></tr>
<tr><td>Empresa média (30-100)</td><td>"Plano caro reduz lucro, ruim afasta talento"</td><td>Paraná 400 com 30% copart., programas PRIORI</td></tr>
<tr><td>Empresa grande (100+)</td><td>"Reajuste virando insustentável"</td><td>Paraná 600 com coparticipação parcial, relatórios</td></tr>
<tr><td>Cliente vindo de Unimed</td><td>"E se eu perder meu médico?"</td><td>Paraná 600 (rede similar), portabilidade carência zero</td></tr>
</tbody></table></div>`},

{id:64,num:64,tempo:"5 min",titulo:"Argumentação por produto",html:`
<h3>Vender o Paraná CIM</h3>
<ul>
<li>"Mesmo no plano de entrada, você tem o Hospital Santa Cruz (60 anos de referência)"</li>
<li>"Consulta nas nossas unidades é GRÁTIS (sem coparticipação)"</li>
<li>"Telemedicina 24h sem coparticipação"</li>
<li>"Preço a partir de R$ 99,32"</li>
</ul>
<div class="callout warn"><h4>Não vender se</h4><p>cliente não aceita gatekeeper ou quer rede aberta → oferecer 400.</p></div>
<h3>Vender o Paraná 400</h3>
<ul>
<li>"Rede totalmente aberta — marca especialista sem encaminhamento"</li>
<li>"Laboratório a+ com coleta domiciliar SEM CUSTO"</li>
<li>"Frischmann em todas as unidades"</li>
<li>"Pequeno Príncipe, Erasto Gaertner, Mackenzie SEM direcionamento"</li>
<li>"Hospital das Nações no Norte"</li>
</ul>
<div class="callout warn"><h4>Não vender se</h4><p>precisa de hospitais premium → oferecer 600.</p></div>
<h3>Vender o Paraná 600</h3>
<ul>
<li>"Santa Cruz ELETIVO completo"</li>
<li>"Marcelino Champagnat, Vita Curitiba, Vita Batel, N.S. das Graças"</li>
<li>"Hospital INC (neuro), IPO (otorrino), Hospital de Olhos"</li>
<li>"Rede similar à Unimed e SulAmérica, com preço melhor"</li>
<li>"2.465 prestadores na rede"</li>
</ul>
<div class="callout warn"><h4>Não vender se</h4><p>precisa muito de cobertura nacional → cotação híbrida; orçamento limitado → começa pelo 400/CIM.</p></div>`},

],quiz:[
{pergunta:"O que diferencia a abordagem consultiva da PlaneCorp da corretora comum?",opcoes:["Oferece logo as opções de operadoras e pergunta qual o cliente quer","Faz diagnóstico primeiro (vidas, hospitais, orçamento, dor) e monta a melhor opção","Vende sempre o plano mais caro","Foca só no preço"],correta:1,explica:"PlaneCorp é consultiva: escuta ativa, diagnóstico, honestidade (aponta pontos fracos), comparação justa e pós-venda real. Orienta, não empurra."},
{pergunta:"Para um casal sênior (50+) que quer 'os melhores hospitais', qual plano indicar?",opcoes:["Paraná CIM","Paraná 400","Paraná 600 (Santa Cruz eletivo + Marcelino + Vita)","Cotação híbrida"],correta:2,explica:"O 600 é o premium, com os 5 hospitais estrela. Já a família jovem combina melhor com o 400, e o MEI/autônomo com o CIM."},
{pergunta:"Quando NÃO vender o Paraná CIM?",opcoes:["Quando o cliente busca preço","Quando o cliente não aceita gatekeeper ou quer rede aberta (→ ofereça o 400)","Quando o cliente nunca teve plano","Sempre vender CIM"],correta:1,explica:"O CIM tem gatekeeper e rede com direcionamento. Se o cliente quer marcar especialista direto, ofereça o 400 (rede aberta)."}
]},

/* ============================ PARTE 13 ============================ */
{id:13,titulo:"Técnicas de venda",desc:"Diagnóstico inicial, como montar a proposta consultiva, comparativo com concorrentes e técnicas de fechamento.",modulos:[

{id:65,num:65,tempo:"5 min",titulo:"Diagnóstico inicial",html:`
<h3>Pessoa Física / MEI</h3>
<ul>
<li>Quantas pessoas? Faixa etária de cada uma?</li>
<li>Alguém gestante ou planejando?</li>
<li>Tem plano hoje? Qual? Há quanto tempo?</li>
<li>Principal motivo da busca?</li>
<li>Quais hospitais são importantes?</li>
<li>Tem CNPJ ativo (MEI)? Há quanto tempo?</li>
<li>Qual orçamento mensal?</li>
</ul>
<h3>Empresa</h3>
<ul>
<li>Quantos colaboradores?</li>
<li>Já oferecem plano? Qual? Valor atual?</li>
<li>Principal desafio com o benefício atual?</li>
<li>Quem é o decisor (dono, RH, financeiro)?</li>
<li>Quando vence o contrato atual?</li>
<li>Paga 100% ou tem coparticipação do colaborador?</li>
<li>Interesse em odonto + seguro de vida?</li>
</ul>`},

{id:66,num:66,tempo:"5 min",titulo:"Montando a proposta",html:`
<h3>Estrutura da proposta consultiva</h3>
<ol>
<li>Resumo do diagnóstico (o que entendemos)</li>
<li>Recomendação de plano com justificativa</li>
<li>Comparativo de valores (economia vs atual)</li>
<li>Rede hospitalar destacada (hospitais relevantes para o cliente)</li>
<li>Diferenciais (programas, app, descontos)</li>
<li>Próximos passos (documentação e prazo)</li>
</ol>
<h3>Modelo de proposta</h3>
<div class="callout tip"><p>Olá [cliente], conforme conversamos, sua empresa tem 12 colaboradores e busca rede aberta, cobertura pediátrica e custo equilibrado.</p>
<p><strong>Recomendação: PARANÁ 400 com 30% coparticipação</strong></p>
<ul>
<li>Mensalidade total: R$ X.XXX (economia de Z% vs atual)</li>
<li>Coparticipação por procedimento: até R$ 100</li>
<li>Hospitais: Pequeno Príncipe (acesso direto), Angelina Caron, Santa Cruz (alta complexidade), 4 unidades próprias sem coparticipação</li>
<li>Benefícios: telemedicina 24h, lab a+ coleta domiciliar, Gestar Bem (tem 2 gestantes na equipe), 10+ vidas = carência zero inclusive parto</li>
<li>Próximos passos: documentação anexa, implantação 7-10 dias, vigência 15/06/2026</li>
</ul></div>`},

{id:67,num:67,tempo:"5 min",titulo:"Comparativo com concorrentes",html:`
<h3>Vs CLINIPAM</h3>
<p>Rede própria + credenciada (Clinipam é só verticalizada); mais hospitais (Santa Cruz, Angelina Caron); coparticipação transparente com limitador R$ 100; Pequeno Príncipe + N.S. das Graças (Clinipam tem só São Mateus); sem triagem nos CIMs.</p>
<div class="callout quote">"Clinipam é boa pra quem só quer Clinipam. Mas se você quer rede aberta, hospitais top, atendimento sem triagem — Paraná é melhor."</div>
<h3>Vs UNIMED (com o 600)</h3>
<p>Mais barato (15-25% menos); tem Santa Cruz, Marcelino, Vita, N.S. das Graças; PRIORI mais ativo; coparticipação com limitador R$ 100; 4 CIMs sem triagem.</p>
<div class="callout quote">"Unimed é sólida, mas cara. No 600 você tem 95% da rede dela, paga 80% do valor."</div>
<h3>Vs AMIL</h3>
<p>Especialista regional em Curitiba; sem triagem (19 min de espera); PRIORI ativo; Pequeno Príncipe disponível; preço competitivo.</p>
<h3>Vs SULAMÉRICA</h3>
<div class="callout tip"><p>"É nossa IRMÃ, mesmo grupo Rede D'Or. Para Curitiba, vendo Paraná. Para fora, cotação híbrida Paraná + SulAmérica. Não compete, complementa."</p></div>
<h3>Vs HAPVIDA/NOTREDAME</h3>
<p>Foco regional especialista; padrão Rede D'Or vs operadora popular; hospitais premium que eles não têm.</p>`},

{id:68,num:68,tempo:"5 min",titulo:"Técnicas de fechamento",html:`
<ul>
<li><strong>Por resumo:</strong> "Então o Paraná 400 com 30% atende perfeitamente. Posso enviar a planilha de implantação?"</li>
<li><strong>Por economia:</strong> "Você manteria os mesmos hospitais pagando 18% menos. Em 12 meses, R$ X economizados. Vamos começar?"</li>
<li><strong>Por urgência:</strong> "Carências só começam a partir da ativação. Quanto antes, antes sua equipe estará protegida."</li>
<li><strong>Por campanha:</strong> "Estamos na campanha de isenção da 2ª fatura (até 31/05). Se fecharmos esta semana, sua empresa economiza um mês."</li>
<li><strong>Por decisores:</strong> "Posso agendar reunião com você, RH e financeiro? Cada área ganha."</li>
<li><strong>Senso de urgência (sem mentir):</strong> "A nova linha lançou agora. Preços iniciais promocionais. Quanto antes se posicionar, melhor."</li>
</ul>
<div class="callout internal"><h4>O que NÃO fazer</h4><p>Falar mal de concorrente, forçar fechamento, prometer o que não pode, mentir sobre cobertura/hospital.</p></div>`},

],quiz:[
{pergunta:"Qual a estrutura correta de uma proposta consultiva PlaneCorp?",opcoes:["Só o preço final","Diagnóstico → recomendação justificada → comparativo de valores → rede destacada → diferenciais → próximos passos","Apenas a tabela de preços da operadora","Lista de todos os hospitais"],correta:1,explica:"A proposta consultiva parte do diagnóstico, justifica a recomendação, mostra economia, destaca a rede relevante, lista diferenciais e define próximos passos."},
{pergunta:"Como posicionar a SulAmérica, que é do mesmo grupo Rede D'Or?",opcoes:["Como concorrente a ser atacada","Como irmã: Paraná para Curitiba, cotação híbrida Paraná+SulAmérica para fora — complementa, não compete","Nunca mencionar","Vender sempre SulAmérica"],correta:1,explica:"SulAmérica é irmã no grupo. Para Curitiba, venda Paraná; para cobertura fora, cotação híbrida. Não compete — complementa."},
{pergunta:"O que NUNCA fazer no fechamento?",opcoes:["Usar senso de urgência verdadeiro","Falar mal de concorrente, forçar fechamento, prometer o que não pode ou mentir sobre cobertura","Apresentar economia","Citar a campanha vigente"],correta:1,explica:"Técnicas legítimas (resumo, economia, urgência real, campanha, decisores) são bem-vindas. Proibido: difamar concorrente, forçar, prometer demais ou mentir."}
]},

/* ============================ PARTE 14 ============================ */
{id:14,titulo:"Objeções e como superar",desc:"Banco completo de objeções com respostas prontas — do preço à carência, da rede regional ao gatekeeper.",modulos:[

{id:69,num:69,tempo:"10 min",titulo:"Banco completo de objeções",html:`
<p>As respostas abaixo saíram direto do treinamento. Memorize o raciocínio, não o texto — adapte ao cliente.</p>

<h3>"Plano de saúde é muito caro"</h3>
<div class="callout arg"><p>"Entendo. Por isso faço um diagnóstico personalizado para encontrar o melhor custo-benefício. O Paraná CIM começa em R$ 99,32. Muitos clientes economizam 10-20% mantendo a mesma rede. Posso fazer uma análise gratuita?"</p></div>

<h3>"Já tenho plano"</h3>
<div class="callout arg"><p>"Ótimo! E vale comparar. Posso fazer uma análise gratuita do seu contrato atual para ver se há oportunidade de melhoria ou economia? Em 30 minutos eu te trago números."</p></div>

<h3>"Não conheço a Paraná Clínicas"</h3>
<div class="callout arg"><p>"Faz sentido. A Paraná tem 55 anos, atende +92 mil vidas em Curitiba e faz parte do Grupo Rede D'Or (dona dos maiores hospitais do Brasil) e da SulAmérica. Operadora regional com força nacional. Posso mostrar a estrutura em 15 minutos?"</p></div>

<h3>"Preciso pensar"</h3>
<div class="callout arg"><p>"Claro. Posso te enviar um material com o comparativo para analisar com calma? Marcamos retorno em 2-3 dias para tirar dúvidas."</p></div>

<h3>"Plano regional é limitado"</h3>
<div class="callout arg"><p>"Para quem mora e trabalha em Curitiba e região, o regional oferece a mesma qualidade por custo menor. São 21 cidades de abrangência, com Santa Cruz, Pequeno Príncipe, Mackenzie. Para urgência fora da região, a cobertura é garantida por lei. Quantas vezes por ano você viaja por mais de 3 dias? Para esses casos, temos cotação híbrida com SulAmérica."</p></div>

<h3>"Meu corretor sumiu"</h3>
<div class="callout arg"><p>"Muito comum, infelizmente. Na PlaneCorp o diferencial é o pós-venda ATIVO. Você nunca mais lida sozinho com reajuste, operadora ou movimentação. Revisões trimestrais e suporte ativo."</p></div>

<h3>"E se eu precisar de atendimento fora de Curitiba?"</h3>
<div class="callout arg"><p>"Duas coisas: o Pronto Atendimento Digital 24h funciona de qualquer lugar, sem coparticipação. E para emergências fora da região, a cobertura é garantida por lei em qualquer plano. Se você viaja muito, fazemos cotação híbrida com SulAmérica para rede nacional."</p></div>

<h3>"A carência é muito longa"</h3>
<div class="callout arg"><p>"Se você já tem plano há mais de 12 meses, fazemos portabilidade e eliminamos todas as carências (exceto preexistentes, que são 24 meses por lei). E para grupos acima de 10 vidas, temos campanha com carência ZERO, inclusive parto."</p></div>

<h3>"A Unimed tem 5.000 médicos"</h3>
<div class="callout arg"><p>"Você não vai usar 5.000 médicos. O que importa é ter o hospital próximo e de qualidade, e o médico certo para o seu caso. Desde o plano de entrada você tem o Santa Cruz. No 600, tem Marcelino, Vita e N.S. das Graças — basicamente a mesma rede da Unimed, por preço menor."</p></div>

<h3>"Meu plano atual não tem coparticipação"</h3>
<div class="callout arg"><p>"A partir de 30 vidas, a Paraná também tem opção sem coparticipação. Abaixo disso, a coparticipação com teto de R$ 100 é muito baixa, e ainda há isenção total nas unidades próprias. Na prática, o cliente paga muito pouco e o plano fica mais sustentável (reajuste menor)."</p></div>

<h3>"Não quero passar por clínico geral toda vez (gatekeeper)"</h3>
<div class="callout arg"><p>"Esse modelo é só no Paraná CIM (o plano de entrada). No Paraná 400 e 600, a rede é totalmente ABERTA — você marca o especialista direto, sem encaminhamento. Posso te cotar o 400, que tem rede aberta e ainda coleta domiciliar de exames."</p></div>

<h3>"Tenho um caso de doença na família, vão recusar"</h3>
<div class="callout arg"><p>"Depende. Em grupos maiores, o risco se dilui e geralmente é aceito. Me passe os detalhes (quantas vidas, quais condições) que eu submeto para análise. A Paraná não diz 'não' de imediato — ela analisa caso a caso e brigamos internamente pela aprovação."</p></div>

<h3>"Plano empresarial não é pra mim, sou autônomo"</h3>
<div class="callout arg"><p>"Justamente o contrário! Com um CNPJ (MEI inclusive), você acessa valores empresariais a partir de 3 vidas — bem mais baratos que o plano individual. Você, cônjuge e um dependente já fecham as 3 vidas."</p></div>

<h3>"Achei outro plano mais barato"</h3>
<div class="callout arg"><p>"Posso ver a proposta? Muitas vezes o 'mais barato' tem rede menor, coparticipação sem teto, ou carências maiores. Vamos comparar maçã com maçã: rede, coparticipação, carência, programas. Aí você decide com clareza."</p></div>`},

],quiz:[
{pergunta:"Cliente diz: 'Não quero passar por clínico geral toda vez'. Qual a melhor resposta?",opcoes:["Insistir no CIM","Explicar que o gatekeeper é só no CIM e oferecer o 400/600, que têm rede aberta","Dizer que todos os planos têm gatekeeper","Encerrar a conversa"],correta:1,explica:"O gatekeeper só existe no CIM. No 400 e 600 a rede é aberta (especialista direto). Aproveite para oferecer o 400, que ainda tem coleta domiciliar."},
{pergunta:"Cliente: 'A Unimed tem 5.000 médicos'. O contra-argumento é:",opcoes:["A Paraná tem mais médicos","Você não usa 5.000 médicos; importa hospital próximo e de qualidade — o 600 tem rede similar à Unimed por preço menor","Concordar que a Unimed é melhor","Oferecer só o CIM"],correta:1,explica:"O que importa é a rede certa, não o número. O 600 tem basicamente a mesma rede premium da Unimed (Santa Cruz, Marcelino, Vita, Graças) por preço menor."},
{pergunta:"Cliente: 'Tenho um caso de doença na família, vão recusar'. Como agir?",opcoes:["Dizer que será recusado","Não dizer 'não' de imediato: pedir detalhes (vidas, condições) e submeter para análise — em grupos maiores o risco se dilui","Recusar a venda","Pedir para mentir na DPS"],correta:1,explica:"Nunca diga não de imediato. A Paraná analisa caso a caso e brigamos internamente. Em grupos maiores o risco se dilui. (Nunca, jamais, orientar omissão na DPS.)"}
]},

/* ============================ PARTE 15 ============================ */
{id:15,titulo:"Pós-venda e relacionamento",desc:"O fluxo pós-venda PlaneCorp, o suporte da Paraná por porte e a estratégia de indicações e cross-sell.",modulos:[

{id:70,num:70,tempo:"4 min",titulo:"Fluxo pós-venda PlaneCorp",html:`
<ol>
<li>Comercial fecha e entrega ao Administrativo</li>
<li>Administrativo valida documentos, lança nos sistemas, acompanha até a ativação</li>
<li>CX (atendimento ao cliente) faz contato de boas-vindas</li>
<li>Orientação de primeira utilização (como agendar, onde ir, como usar o app)</li>
<li>Canal aberto para dúvidas (boleto, carteirinha, reembolso)</li>
<li>Pesquisa NPS + solicitação de indicação</li>
<li>Cross-sell: odontológico, seguro de vida</li>
<li>Revisões periódicas (trimestrais) e acompanhamento de reajuste</li>
</ol>`},

{id:71,num:71,tempo:"4 min",titulo:"Suporte da Paraná por porte",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Porte</th><th>Canal de pós-venda</th><th>Prazo</th></tr></thead><tbody>
<tr><td>PME (3-29 vidas)</td><td>Somente e-mail (suporte geral)</td><td>Até 72h (na prática 24h)</td></tr>
<tr><td>PME Mais (30-99 vidas)</td><td>Consultora Priscila (telefone + WhatsApp + e-mail)</td><td>Atendimento dedicado</td></tr>
<tr><td>Empresarial (100+ vidas)</td><td>Consultor dedicado</td><td>Atendimento dedicado</td></tr>
</tbody></table></div>
<h3>Fluxo de atendimento ao corretor (com a Paraná)</h3>
<ul>
<li><strong>Lucas (gerente):</strong> atende corretores; quando está em rua, responde após 17h-18h. Nunca deixa sem retorno em 1 dia útil.</li>
<li><strong>Ariane (assistente):</strong> cobertura para urgências quando Lucas está indisponível.</li>
<li>Sempre acionar via canais oficiais, com Lucas em cópia.</li>
</ul>`},

{id:72,num:72,tempo:"4 min",titulo:"Indicações e cross-sell",html:`
<h3>Indicações (boca a boca)</h3>
<p>Cliente satisfeito = melhor fonte de novos negócios. Após a venda e ativação, peça indicação: "Conhece outro empresário que poderia se beneficiar?"</p>
<h3>Cross-sell</h3>
<ul>
<li><strong>Plano odontológico</strong> (complementar ao de saúde)</li>
<li><strong>Seguro de vida</strong> (empresarial)</li>
<li><strong>Outros benefícios</strong> que a PlaneCorp opera</li>
</ul>
<h3>Transição de carteira (regra importante de comissionamento)</h3>
<div class="callout warn"><p>"Cliente que veio da mão de outro corretor: você recebe comissão, DESDE QUE não seja CNPJ diferente. Se o cliente sai de uma empresa (onde ele era da mão de outro corretor) e te procura para um plano NOVO com CNPJ diferente, não gera repique — você manda e-mail para o Lucas avisando o caso e ele ajusta no sistema para não gerar conflito."</p></div>`},

],quiz:[
{pergunta:"Qual o canal de pós-venda para um contrato PME (3-29 vidas)?",opcoes:["Consultor dedicado","Consultora Priscila","Somente e-mail (suporte geral), retorno até 72h (na prática 24h)","WhatsApp do Lucas"],correta:2,explica:"PME (3-29) = somente e-mail. PME Mais (30-99) tem a consultora Priscila; Empresarial (100+) tem consultor dedicado."},
{pergunta:"Quando um cliente que vem da mão de outro corretor NÃO gera comissão automática (repique)?",opcoes:["Nunca recebe comissão","Quando é um plano NOVO com CNPJ diferente — aí avise o Lucas por e-mail para ajustar e evitar conflito","Sempre gera comissão","Só com 100+ vidas"],correta:1,explica:"Recebe comissão desde que não seja CNPJ diferente. Mudança no mesmo CNPJ = sem problema; CNPJ diferente = avise o Lucas antes."}
]},

/* ============================ PARTE 16 ============================ */
{id:16,titulo:"Anexos",desc:"Campanha atual, comissionamento, contatos importantes e o glossário completo do treinamento.",modulos:[

{id:73,num:73,tempo:"4 min",titulo:"Campanha atual (isenção 2ª fatura)",html:`
<h3>Detalhes da campanha</h3>
<ul>
<li><strong>Período:</strong> 28/04 a 31/05/2026</li>
<li><strong>Benefício 1:</strong> ISENÇÃO DA 2ª FATURA (a 2ª fatura cheia)</li>
<li><strong>Benefício 2:</strong> Comissão 100% GARANTIDA</li>
<li><strong>Aplicável a:</strong> Carteira Saúde PME (3 a 29 vidas)</li>
<li><strong>Condição:</strong> cotações com o novo portfólio (Paraná CIM, 400 ou 600)</li>
</ul>
<h3>Como usar na venda</h3>
<div class="callout arg"><p>"Estamos na campanha de isenção da 2ª fatura cheia. Fechando agora, sua empresa economiza um mês de plano. E a comissão do corretor é 100% garantida (não tem redução)."</p></div>
<div class="callout warn"><h4>Atenção (lembrar do Módulo 50)</h4><p>A "2ª fatura" isenta é a 2ª fatura CHEIA — que para o cliente será a 3ª (a 1ª é pro-rata). Explique sempre para não gerar confusão.</p></div>
<p>A Paraná está tentando postergar a campanha para junho, mas não há garantia.</p>`},

{id:74,num:74,tempo:"3 min",titulo:"Comissionamento",html:`
<h3>Repique e transição</h3>
<div class="callout warn"><p>"Recebe comissão de cliente que vem da mão de outro corretor, DESDE QUE não seja CNPJ diferente. Se for CNPJ diferente, avise o Lucas por e-mail antes para ele ajustar no sistema e evitar conflito de repique."</p></div>
<h3>O que NÃO gera comissão problemática</h3>
<ul>
<li>Mudança de colaboradores no mesmo CNPJ (sem problema)</li>
<li>Mudança de CNPJ (precisa avisar)</li>
</ul>`},

{id:75,num:75,tempo:"3 min",titulo:"Contatos importantes",html:`
<h3>Equipe Paraná Clínicas</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Contato</th><th>Função</th></tr></thead><tbody>
<tr><td>Lucas</td><td>Gerente Comercial (atende corretores)</td></tr>
<tr><td>Tamara</td><td>Gerente</td></tr>
<tr><td>Daiane</td><td>Superintendente Comercial</td></tr>
<tr><td>Ariane</td><td>Assistente (cobertura/urgências)</td></tr>
<tr><td>Priscila</td><td>Pós-venda PME Mais (30-99 vidas)</td></tr>
</tbody></table></div>
<h3>Canais oficiais</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Canal</th><th>Uso</th></tr></thead><tbody>
<tr><td>suportedevendas@paranaclinicas.com.br</td><td>Envio de documentação e implantação</td></tr>
<tr><td>Portal DPS — paranaclinicas.com.br/comercial</td><td>Declaração Pessoal de Saúde</td></tr>
<tr><td>@chegamaiscorretor (Instagram)</td><td>Campanhas e atualizações para corretores</td></tr>
<tr><td>App Paraná Clínicas</td><td>Beneficiário (cartão, agendamento, guias)</td></tr>
<tr><td>Pós-venda 3-29 vidas</td><td>Somente e-mail (retorno até 72h, prática 24h)</td></tr>
<tr><td>Pós-venda 30-99 vidas</td><td>Priscila (telefone + WhatsApp + e-mail)</td></tr>
</tbody></table></div>
<h3>Regras de acionamento</h3>
<ul>
<li>Sempre com Lucas em cópia nos e-mails de implantação</li>
<li>Para urgências quando Lucas estiver em rua: acionar Ariane</li>
<li>Retorno garantido em até 1 dia útil</li>
</ul>`},

{id:76,num:76,tempo:"6 min",titulo:"Glossário completo",html:`
<p>Referência rápida de todos os termos do treinamento.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Termo</th><th>Definição</th></tr></thead><tbody>
<tr><td>ANS</td><td>Agência Nacional de Saúde Suplementar (reguladora). Registro Paraná: 416428</td></tr>
<tr><td>Agenciamento</td><td>Comissão paga na implantação do contrato</td></tr>
<tr><td>Apartamento</td><td>Quarto individual em internação</td></tr>
<tr><td>Atuarial</td><td>Departamento que analisa riscos e calcula preços</td></tr>
<tr><td>Beneficiário</td><td>Pessoa coberta (titular ou dependente)</td></tr>
<tr><td>Carência</td><td>Período sem acesso a determinados serviços</td></tr>
<tr><td>CDAV</td><td>Centro Diagnóstico Água Verde (em frente ao Santa Cruz)</td></tr>
<tr><td>CIM</td><td>Centro Integrado de Medicina (unidade própria)</td></tr>
<tr><td>Coparticipação</td><td>Valor pago pelo beneficiário por procedimento (30% ou 50%, teto R$ 100)</td></tr>
<tr><td>Coparticipação parcial</td><td>Só em terapias, para 100+ vidas</td></tr>
<tr><td>CPT</td><td>Cobertura Parcial Temporária (preexistente, 24 meses)</td></tr>
<tr><td>Cross-sell</td><td>Venda de produto adicional ao mesmo cliente</td></tr>
<tr><td>Direcionamento (D)</td><td>Passar pelo CIM/generalista antes de acessar hospital</td></tr>
<tr><td>DPS / DS</td><td>Declaração Pessoal de Saúde</td></tr>
<tr><td>DS positiva</td><td>DPS com doença/condição declarada</td></tr>
<tr><td>Empresarial</td><td>Contrato de 100+ vidas</td></tr>
<tr><td>Enfermaria</td><td>Quarto compartilhado em internação</td></tr>
<tr><td>Estipulante</td><td>Empresa contratante do plano</td></tr>
<tr><td>Gatekeeper</td><td>Modelo de porta de entrada (generalista antes do especialista)</td></tr>
<tr><td>Gestar Bem</td><td>Programa de acompanhamento de gestantes</td></tr>
<tr><td>Hospital Dia</td><td>Cirurgias com alta no mesmo dia</td></tr>
<tr><td>Limitador</td><td>Teto de R$ 100 por procedimento na coparticipação</td></tr>
<tr><td>MEI</td><td>Microempreendedor Individual</td></tr>
<tr><td>NPS</td><td>Net Promoter Score (pesquisa de satisfação)</td></tr>
<tr><td>Paraná CIM</td><td>Plano de entrada (custo, só enfermaria, gatekeeper)</td></tr>
<tr><td>Paraná 400</td><td>Plano intermediário (rede aberta, mais vendido)</td></tr>
<tr><td>Paraná 600</td><td>Plano premium (hospitais top, rede aberta)</td></tr>
<tr><td>PME</td><td>3 a 29 vidas</td></tr>
<tr><td>PME Mais</td><td>30 a 99 vidas</td></tr>
<tr><td>Portabilidade</td><td>Migrar de operadora sem novas carências</td></tr>
<tr><td>PRIORI</td><td>Plataforma de programas de saúde da Paraná Clínicas</td></tr>
<tr><td>Pro-rata</td><td>Cobrança proporcional aos dias do primeiro mês</td></tr>
<tr><td>Rede credenciada</td><td>Hospitais/clínicas parceiros</td></tr>
<tr><td>Rede própria</td><td>Unidades da operadora (CIMs)</td></tr>
<tr><td>Rede D'Or</td><td>Grupo dono da Paraná Clínicas e SulAmérica</td></tr>
<tr><td>Reajuste</td><td>Aumento anual do plano</td></tr>
<tr><td>Rol de Procedimentos</td><td>Coberturas obrigatórias definidas pela ANS</td></tr>
<tr><td>Semi-verticalizada</td><td>Operadora com rede própria + credenciada</td></tr>
<tr><td>Sinistralidade</td><td>Custo dos serviços usados vs valor pago em mensalidades</td></tr>
<tr><td>Ticket médio</td><td>Valor total da fatura / número de vidas</td></tr>
<tr><td>Titular</td><td>Pessoa principal do contrato</td></tr>
<tr><td>Verticalizada</td><td>Operadora que só atende em rede própria (ex: Clinipam)</td></tr>
<tr><td>Vida</td><td>Cada pessoa coberta (1 titular ou dependente = 1 vida)</td></tr>
<tr><td>Vigência</td><td>Data de início efetivo do plano</td></tr>
<tr><td>Vitalício</td><td>Comissão recorrente mensal ao corretor</td></tr>
</tbody></table></div>
<div class="callout key"><h4>Parabéns! 🎉</h4><p>Você concluiu os 76 módulos do treinamento da Linha Paraná Clínicas. Do zero absoluto ao corretor especialista. Agora é praticar, cotar e vender com segurança. Bons negócios!</p></div>`},

],quiz:[
{pergunta:"O que significa exatamente a 'isenção da 2ª fatura' na campanha?",opcoes:["A primeira fatura é grátis","A 2ª fatura CHEIA é isenta (na prática, a 3ª que o cliente recebe, pois a 1ª é pro-rata)","Todas as faturas têm desconto","Só vale para 100+ vidas"],correta:1,explica:"A campanha (28/04 a 31/05/2026, PME 3-29) isenta a 2ª fatura cheia + comissão 100% garantida. Como a 1ª é pro-rata, a isenta é a 3ª recebida."},
{pergunta:"Qual o canal oficial para envio de documentação e implantação?",opcoes:["WhatsApp da Priscila","suportedevendas@paranaclinicas.com.br (com Lucas em cópia)","@chegamaiscorretor","O app do beneficiário"],correta:1,explica:"Documentação vai para suportedevendas@paranaclinicas.com.br, sempre com Lucas em cópia. O @chegamaiscorretor é para campanhas/atualizações."},
{pergunta:"No glossário: o que é uma operadora 'verticalizada'?",opcoes:["Que só atende em rede própria (ex.: Clinipam)","Que tem rede própria + credenciada","Que não tem unidades próprias","Que é nacional"],correta:0,explica:"Verticalizada = só rede própria (Clinipam). Credenciada = só prestadores externos (Bradesco). Semi-verticalizada = ambas (Paraná Clínicas)."}
]}

];
window.CURSO={partes:PARTES};

/* ===================== OPERADORAS (HUB) ===================== */
const OPERADORAS=[
  {id:"parana",nome:"Paraná Clínicas",sub:"Nova linha · CIM · 400 · 600",tag:"Grupo Rede D'Or",ativo:true,sigla:"PC",rede:true},
  {id:"unimed",nome:"Unimed Curitiba",sub:"Plano Empresarial (PJ)",tag:"Cooperativa médica",ativo:true,sigla:"U"},
  {id:"hapvida",nome:"Hapvida / Clinipam",sub:"Plano PF e PJ",tag:"Grupo Hapvida",ativo:true,sigla:"HC"},
  {id:"amil",nome:"Amil",sub:"Planos PJ",tag:"UnitedHealth Group",ativo:true,sigla:"A",rede:true},
  {id:"sulamerica",nome:"SulAmérica",sub:"Saúde PME e Odonto PME",tag:"Seguradora nacional",ativo:true,sigla:"SA",rede:true},
  {id:"uniad",nome:"Unimed Adesão Vital",sub:"Coletivo por Adesão · Grupo Vital",tag:"Cooperativa médica",ativo:true,sigla:"UV"}
];
window.OPERADORAS=OPERADORAS;

/* Legenda das colunas de tipo de atendimento da rede Amil (siglas K..V) */
window.REDE_LEGENDA=window.REDE_LEGENDA||{};
window.REDE_LEGENDA.amil={
  // sigla: { tipo, idade, desc }
  "H":      {tipo:"Eletivo",            idade:"Adulto",   desc:"Hospital Eletivo"},
  "H CARD": {tipo:"Eletivo",            idade:"Adulto",   desc:"Hospital Cardiológico"},
  "HD":     {tipo:"Eletivo",            idade:"Adulto",   desc:"Hospital Dia"},
  "H ORT":  {tipo:"Eletivo",            idade:"Adulto",   desc:"Hospital Cirurgia Ortopédica"},
  "M":      {tipo:"Eletivo",            idade:"Adulto",   desc:"Maternidade"},
  "HP":     {tipo:"Eletivo",            idade:"Infantil", desc:"Hospital Pediátrico"},
  "PA":     {tipo:"Pronto Atendimento", idade:"Adulto",   desc:"Pronto Atendimento"},
  "PS":     {tipo:"Pronto Socorro",     idade:"Adulto",   desc:"Pronto Socorro"},
  "PS CARD":{tipo:"Pronto Socorro",     idade:"Adulto",   desc:"Pronto Socorro Cardiológico"},
  "PS OBST":{tipo:"Pronto Socorro",     idade:"Adulto",   desc:"Pronto Socorro Obstétrico"},
  "PSI":    {tipo:"Pronto Socorro",     idade:"Infantil", desc:"Pronto Socorro Infantil"},
  "PSO":    {tipo:"Pronto Socorro",     idade:"Adulto",   desc:"Pronto Socorro Ortopédico"}
};

/* ===================== EXAME DE CERTIFICAÇÃO — PARANÁ (30 perguntas) ===================== */
const EXAME_PARANA=[
{pergunta:"Por que a cobertura mínima é praticamente igual entre todos os planos de saúde do Brasil?",opcoes:["As operadoras combinam entre si","É regulada por lei pela ANS (Rol de Procedimentos)","Todas usam a mesma rede","É definida pelo SUS"],correta:1,explica:"A cobertura mínima é o Rol de Procedimentos da ANS, obrigatório para todos. O que diferencia é rede, atendimento, programas, preço e regras comerciais."},
{pergunta:"Qual o número de registro da Paraná Clínicas na ANS?",opcoes:["416428","999961","303050","920000"],correta:0,explica:"Registro ANS 416428, atualizado na nova linha de produtos."},
{pergunta:"Com qual segmentação a Paraná Clínicas trabalha?",opcoes:["Apenas Ambulatorial","Apenas Hospitalar","Ambulatorial + Hospitalar com Obstetrícia","Referência sem obstetrícia"],correta:2,explica:"O pacote mais completo: consultas, exames, PS, cirurgias, internações, partos (recém-nascido coberto por 30 dias) e terapias. Até titular homem solteiro tem obstetrícia."},
{pergunta:"A Paraná Clínicas atende eletivamente em quantas cidades (nova grade)?",opcoes:["11 cidades","17 cidades","21 cidades","Todo o Brasil"],correta:2,explica:"A grade ampliou de 11 para 21 cidades de Curitiba e Região Metropolitana. Fora delas, só urgência/emergência (por lei)."},
{pergunta:"Qual o valor máximo (limitador) de coparticipação por procedimento?",opcoes:["R$ 50","R$ 100","R$ 200","Não há teto"],correta:1,explica:"O teto é R$ 100 por procedimento — mesmo uma ressonância cara custa no máximo R$ 100 de coparticipação."},
{pergunta:"Em qual situação NÃO há coparticipação?",opcoes:["Consultas eletivas","Exames de imagem","Internação, cirurgias com internação e partos","Terapias"],correta:2,explica:"Internação, cirurgia com internação e parto são sempre sem coparticipação. Ela incide só no ambulatorial."},
{pergunta:"Para reaproveitar carência (portabilidade), o cliente deve solicitar em até quantos dias após a exclusão?",opcoes:["30 dias","60 dias","90 dias","180 dias"],correta:1,explica:"Requisitos: 12 meses+ no plano anterior, em dia, mesmo padrão de conforto, até 60 dias após a exclusão e DPS preenchida."},
{pergunta:"A Paraná isenta TODAS as carências (exceto CPT) para grupos a partir de quantas vidas?",opcoes:["3","5","10","30"],correta:2,explica:"Grupos 10+ vidas têm carência zero, inclusive parto. Só a CPT (24 meses) permanece, por exigência legal."},
{pergunta:"Qual a hierarquia correta do grupo?",opcoes:["SulAmérica → Rede D'Or → Paraná","Rede D'Or → SulAmérica → Paraná Clínicas","Paraná → Rede D'Or → SulAmérica","Unimed → Rede D'Or → Paraná"],correta:1,explica:"Rede D'Or (dona, maior rede de hospitais do Brasil) → SulAmérica (seguradora nacional) → Paraná Clínicas (operadora regional Curitiba)."},
{pergunta:"Quantas vidas a Paraná atende e há quantos anos atua?",opcoes:["+50 mil / 30 anos","+92 mil / 55 anos","+200 mil / 55 anos","+92 mil / 25 anos"],correta:1,explica:"+92.000 vidas e 55 anos de história, nascida em Curitiba."},
{pergunta:"Qual a substituição correta de produto antigo → novo?",opcoes:["Estilo → Paraná CIM","Standard Plus (Sim) → Paraná CIM","Executivo Plus → Paraná 600","Standard → Paraná 600"],correta:1,explica:"Standard Plus (Sim) → CIM; Executivo Plus → 400; Estilo → 600."},
{pergunta:"Qual a principal característica de acomodação do Paraná CIM?",opcoes:["Somente apartamento","Somente enfermaria (sem apartamento)","Não cobre internação","Enfermaria e apartamento"],correta:1,explica:"O CIM é o plano de entrada: só enfermaria, coparticipação obrigatória e modelo gatekeeper, a partir de R$ 99,32."},
{pergunta:"No Paraná CIM, qual NÃO é uma das especialidades de porta de entrada (gatekeeper)?",opcoes:["Clínica Geral","Pediatria","Cardiologia","Ginecologia e Obstetrícia"],correta:2,explica:"As portas de entrada são: Clínica Geral, Pediatria, GO, Cirurgia Geral, Ortopedia Geral, Oftalmologia e Geriatria. Para cardiologista é preciso encaminhamento."},
{pergunta:"Qual a grande novidade do CIM Água Verde em 2026?",opcoes:["Fechou o pronto-atendimento","Inaugurou Ala de Internação (28 leitos) e virou Unidade Hospitalar","Virou só pediatria","Mudou de cidade"],correta:1,explica:"Em abril/2026 ganhou a Ala de Internação (28 leitos) e passou de Hospital Dia a Unidade Hospitalar 24h, sem triagem."},
{pergunta:"Qual CIM é o único com pronto-atendimento PEDIÁTRICO 24h?",opcoes:["Água Verde","Araucária","São José","CIC 24h"],correta:3,explica:"O CIM CIC 24h é o único com atendimento pediátrico 24h, a 12 minutos do Água Verde."},
{pergunta:"O segredo do Centro de Infusão para sustentar preços é:",opcoes:["Descontos do governo","O poder de compra Rede D'Or em escala (ex.: quimio de R$80mil por R$62-65mil)","Não atender oncologia","Terceirizar tudo"],correta:1,explica:"Comprando para todos os hospitais do grupo, a escala reduz o custo de medicamentos caros, controlando sinistralidade e reajuste."},
{pergunta:"Em PME (3-29 vidas) com caso de TEA, a coparticipação das terapias é:",opcoes:["Isenta","Obrigatória de 50%","Sempre 30%","Só na consulta"],correta:1,explica:"Consulta com neurologista é isenta, mas as terapias têm coparticipação — e em PME com TEA ela é obrigatoriamente de 50%."},
{pergunta:"O acesso ELETIVO completo ao Hospital Santa Cruz está em qual plano?",opcoes:["CIM","400","600","Todos"],correta:2,explica:"Só o 600 tem Santa Cruz eletivo. No CIM é urgência/alta complexidade; no 400 é semi-eletivo via Centro Diagnóstico Água Verde."},
{pergunta:"Qual o argumento mais forte para subir um cliente do CIM para o 400?",opcoes:["O 400 é mais barato","Rede aberta — marca especialista direto, sem direcionamento","O 400 tem apartamento de luxo","O 400 é nacional"],correta:1,explica:"O CIM tem gatekeeper/direcionamento; 400 e 600 têm rede totalmente aberta, além do lab a+ com coleta domiciliar."},
{pergunta:"Quais são os '5 hospitais estrela' do Paraná 600?",opcoes:["Santa Cruz, Marcelino, Vita Curitiba, Vita Batel e N.S. das Graças","Pequeno Príncipe, Erasto, Rocio, Caron e IPO","Santa Casa, Novo Mundo, Pilar, INC e IPO","Apenas Santa Cruz"],correta:0,explica:"Os 5 estrela: Santa Cruz (eletivo), Marcelino Champagnat, Vita Curitiba, Vita Batel e Nossa Senhora das Graças (eletivo)."},
{pergunta:"Os laboratórios Frischmann e a+ (coleta domiciliar) estão disponíveis em:",opcoes:["Todos os planos","Apenas no CIM","Apenas no 400 e 600","Apenas no 600"],correta:2,explica:"São diferenciais do 400 e 600. No CIM, os laboratórios são as unidades próprias + Santa Cruz."},
{pergunta:"Um hospital marcado com (D) significa que:",opcoes:["É descredenciado","Tem direcionamento — precisa passar pelo CIM/generalista antes","É só para diretoria","Tem desconto"],correta:1,explica:"Direcionamento (D) = passar por consulta no CIM e receber encaminhamento antes de usar o hospital. Aparece no CIM; 400 e 600 têm ZERO direcionamento."},
{pergunta:"A coparticipação parcial (só terapias) está disponível a partir de quantas vidas?",opcoes:["3 vidas","30 vidas","100 vidas (Empresarial)","Não existe"],correta:2,explica:"Novidade do portfólio para empresas 100+ vidas: sem coparticipação em consultas/exames gerais, só no grupo de terapias."},
{pergunta:"Atendimentos nas unidades próprias (CIMs) têm coparticipação?",opcoes:["Sim, 30%","Não — são isentos em todos os planos","Só no 600 são isentos","Só urgências são isentas"],correta:1,explica:"Consultas e urgências nos CIMs são isentas em todos os planos — argumento forte, principalmente no CIM."},
{pergunta:"Qual categoria exige DPS e tem coparticipação obrigatória?",opcoes:["PME (3-29)","PME Mais (30-99)","Empresarial (100+)","Nenhuma"],correta:0,explica:"Só o PME (3-29) exige DPS e coparticipação obrigatória. PME Mais e Empresarial não têm DPS e podem ser sem coparticipação."},
{pergunta:"Até que idade a Paraná aceita FILHOS como dependentes no PME (3-29)?",opcoes:["24 anos","17 anos","44 anos, 11 meses e 29 dias","Sem limite"],correta:2,explica:"Diferencial gigante: filhos até 44 anos no PME (mercado é 24). Em 30+ vidas, porém, o limite cai para menores de 24."},
{pergunta:"Qual a regra padrão de limite de PJ em relação à massa CLT?",opcoes:["Sem limite","20% da massa CLT","50% da massa CLT","100% da massa CLT"],correta:1,explica:"PJ é limitado a 20% da massa CLT. Acima disso, não recuse: envie ao Lucas para análise (24-48h)."},
{pergunta:"Por que é crítico o cliente salvar o protocolo da DPS?",opcoes:["Para ganhar desconto","Porque, se gerar CPT e perder o protocolo, precisa REFAZER toda a DPS","Para validar a carteirinha","Para a campanha"],correta:1,explica:"DPS positiva gera CPT, que precisa ser aceita reentrando com o protocolo. Sem ele, refaz tudo do zero."},
{pergunta:"Na campanha de isenção, qual fatura é de fato isentada?",opcoes:["A 1ª (pro-rata)","A 2ª fatura CHEIA (que para o cliente é a 3ª, pois a 1ª é pro-rata)","Todas","Nenhuma"],correta:1,explica:"Isenta a 2ª fatura cheia. Como a 1ª é pro-rata, na prática é a 3ª recebida. Sempre explique para não gerar confusão."},
{pergunta:"Qual a filosofia dos programas PRIORI?",opcoes:["Reativa","Ativa — identifica, liga, agenda e acompanha (reduz prematuridade de 13% para 6,57%)","Só digital","Só para 100+ vidas"],correta:1,explica:"PRIORI é ativo: a operadora procura o beneficiário. Se a gestante falta, ligam. Todos os programas são gratuitos."},
{pergunta:"O pronto atendimento digital (a+dok) tem:",opcoes:["Coparticipação de 30%","Sem coparticipação e sem carência, 24h/7 dias","Carência de 30 dias","Só no 600"],correta:1,explica:"Telemedicina 24h/7d, sem coparticipação e sem carência — reduz sinistralidade (PA presencial ~R$200 vs teleconsulta R$30-50)."},
{pergunta:"Como posicionar a SulAmérica, do mesmo grupo Rede D'Or?",opcoes:["Como concorrente a atacar","Como irmã: Paraná em Curitiba, cotação híbrida para fora — complementa","Nunca mencionar","Vender sempre SulAmérica"],correta:1,explica:"SulAmérica é irmã no grupo. Para Curitiba, venda Paraná; para cobertura nacional, cotação híbrida Paraná + SulAmérica."},
{pergunta:"Cliente diz 'não quero passar por clínico geral toda vez'. A melhor resposta é:",opcoes:["Insistir no CIM","Explicar que o gatekeeper é só no CIM e oferecer o 400/600 (rede aberta)","Dizer que todos têm gatekeeper","Encerrar a conversa"],correta:1,explica:"O gatekeeper só existe no CIM. No 400 e 600 a rede é aberta. Bom momento para oferecer o 400, que tem coleta domiciliar."},
{pergunta:"Qual o canal oficial para envio de documentação e implantação?",opcoes:["WhatsApp da Priscila","suportedevendas@paranaclinicas.com.br (com Lucas em cópia)","@chegamaiscorretor","App do beneficiário"],correta:1,explica:"Documentação vai para suportedevendas@paranaclinicas.com.br, sempre com Lucas em cópia."}
];
window.EXAME={parana:EXAME_PARANA};

/* =====================================================================
   UNIMED CURITIBA — Manual do Corretor (PJ) · Fonte: manual oficial
   ===================================================================== */
const UNIMED=[
{id:1,titulo:"A Unimed Curitiba",desc:"Quem é a operadora, números, benefícios exclusivos e por que vender.",modulos:[
{id:1,num:1,tempo:"6 min",titulo:"Quem é a Unimed Curitiba",html:`
<p>Antes de aprender a vender, você precisa conhecer profundamente a operadora que representa. A <em>Unimed Curitiba</em> é a <strong>maior operadora de saúde do Paraná</strong> e está entre as 5 melhores do Brasil, segundo a ANS. Opera no modelo de <strong>cooperativa médica</strong> (os médicos são cooperados e participam da gestão).</p>
<h3>Números da Unimed Curitiba</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Indicador</th><th>Dado</th></tr></thead><tbody>
<tr><td>Presença</td><td>24 municípios</td></tr>
<tr><td>Clientes</td><td>Mais de 670.000</td></tr>
<tr><td>Médicos cooperados</td><td>Mais de 5.000</td></tr>
<tr><td>Colaboradores</td><td>Mais de 2.000</td></tr>
<tr><td>Participação no mercado (share)</td><td>44,82%</td></tr>
<tr><td>Ranking ANS</td><td>Entre as 5 melhores do Brasil</td></tr>
<tr><td>Laboratórios próprios</td><td>24 unidades</td></tr>
<tr><td>Hospitais na rede</td><td>Mais de 50 (rede Flex/Amigo)</td></tr>
<tr><td>Unidades APS (Atenção Primária)</td><td>5 unidades</td></tr>
</tbody></table></div>
<div class="callout tip"><h4>Dica de Ouro</h4><p>Use os números na abordagem: "A Unimed Curitiba atende mais de 670 mil pessoas e tem quase 45% do mercado. Quando você escolhe Unimed, escolhe a operadora que mais gente confia no Paraná."</p></div>
<div class="callout key"><p>Quando você oferece Unimed Curitiba, você oferece a <strong>marca mais reconhecida e a maior rede credenciada do Paraná</strong>. Quase metade do mercado de saúde suplementar na região é Unimed — isso gera confiança automática no cliente.</p></div>`},
{id:2,num:2,tempo:"6 min",titulo:"Benefícios exclusivos que você precisa vender",html:`
<p>A Unimed Curitiba oferece um pacote de benefícios que vai muito além do plano básico. Conhecê-los é fundamental para agregar valor.</p>
<h3>Pacote SOS + Aeromédico + Emergência Odontológica</h3>
<p>Todas as propostas até 100 vidas já contemplam o pacote (no Plano Pleno acima de 100 vidas já é incluso automaticamente).</p>
<ul>
<li><strong>SOS Unimed:</strong> atendimento médico por telefone 24h/7 dias (0800-942-0000) e UTI Móvel em Curitiba, Pinhais, São José dos Pinhais e Araucária.</li>
<li><strong>Transporte Aeromédico:</strong> transporte entre hospitais 24h, cobertura nacional, carência de 60 dias, aeronaves com UTI adulto, geriátrico e neonatal.</li>
<li><strong>Emergência Odontológica:</strong> urgências odontológicas na clínica própria Dental Uni.</li>
</ul>
<h3>Outros benefícios</h3>
<ul>
<li><strong>Teleconsulta</strong> por vídeo com médico de família, agendada pelo Portal Unimed Curitiba.</li>
<li><strong>Programas de Saúde</strong> de prevenção e promoção (agregam valor e ajudam na retenção).</li>
<li><strong>Benefício Família:</strong> em caso de falecimento do titular, os dependentes legais têm direito ao plano por <strong>1 ano sem pagar mensalidade</strong> — diferencial fortíssimo para famílias.</li>
<li><strong>Descontos em farmácias:</strong> mínimo 23% em marca e 37–42% em genéricos (apresentando a carteirinha, sobre o PMC).</li>
<li><strong>24 laboratórios próprios</strong> com +2.300 tipos de exames e CPE próprio (um dos mais modernos do Sul).</li>
<li><strong>App "Unimed Cliente PR":</strong> carteirinha digital, agendamento, autorizações e mais.</li>
</ul>`}
],quiz:[
{pergunta:"Qual a participação de mercado (share) da Unimed Curitiba na região?",opcoes:["10%","25%","44,82%","60%"],correta:2,explica:"A Unimed Curitiba tem 44,82% de share — quase metade do mercado de saúde suplementar da região, com +670 mil clientes em 24 municípios."},
{pergunta:"O que é o 'Benefício Família' da Unimed Curitiba?",opcoes:["Desconto para famílias grandes","Em caso de falecimento do titular, dependentes ficam 1 ano no plano sem pagar mensalidade","Plano gratuito para crianças","Telemedicina familiar"],correta:1,explica:"Se o titular falece, os dependentes legais têm direito ao plano por 1 ano sem pagamento — um diferencial muito forte na venda para famílias."},
{pergunta:"Qual o modelo de atuação da Unimed Curitiba?",opcoes:["Seguradora","Cooperativa médica (médicos cooperados participam da gestão)","Verticalizada pura","Autogestão"],correta:1,explica:"É cooperativa médica, com +5.000 médicos cooperados, e está entre as 5 melhores operadoras do Brasil segundo a ANS."}
]},

{id:2,titulo:"Conceitos e Planos PJ",desc:"Os conceitos que você precisa dominar e as linhas de plano empresarial (Pleno, Flex, Amigo, Uniplan).",modulos:[
{id:3,num:3,tempo:"6 min",titulo:"Conceitos básicos que você precisa dominar",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Conceito</th><th>O que é</th></tr></thead><tbody>
<tr><td>Coparticipação</td><td>Valor que o beneficiário paga a cada uso (consultas, exames, procedimentos ambulatoriais). Quanto maior, menor a mensalidade.</td></tr>
<tr><td>Teto limitador</td><td>Valor máximo de coparticipação por procedimento. Mesmo que 30% dê um valor alto, o cliente nunca paga mais que o teto.</td></tr>
<tr><td>Acomodação</td><td>Enfermaria (quarto compartilhado, mais acessível) ou Apartamento (individual, mais conforto).</td></tr>
<tr><td>Abrangência</td><td>Regional (Curitiba + 24 cidades, com urgência nacional via Sistema Unimed) ou Nacional (todos os procedimentos em todo o Brasil).</td></tr>
<tr><td>Obstetrícia</td><td>Todos os planos das tabelas incluem cobertura obstétrica (parto, pré-natal, pós-parto).</td></tr>
<tr><td>Vidas</td><td>Cada beneficiário (titular ou dependente) = 1 vida. As tabelas usadas são para 3 a 29 vidas.</td></tr>
<tr><td>Faixa etária</td><td>A ANS define 10 faixas; a última (59+) é sempre a mais cara.</td></tr>
</tbody></table></div>
<div class="callout warn"><h4>Atenção</h4><p>A última faixa (59+) é sempre a mais cara. Empresas com muitos colaboradores nessa faixa terão custo total mais elevado — considere isso na cotação.</p></div>`},
{id:4,num:4,tempo:"8 min",titulo:"Tipos de plano PJ (Pleno, Flex, Amigo, Uniplan)",html:`
<p>A Unimed Curitiba PJ tem duas grandes categorias de tabela: <strong>Tabela 1 — Plano Pleno</strong> (SEM desconto comercial) e <strong>Tabela 2 — Flex, Amigo e Uniplan</strong> (COM até 5% de desconto comercial).</p>
<h3>Plano Pleno (Regional com APS)</h3>
<p>Modelo baseado na <strong>Atenção Primária à Saúde (APS)</strong>, com um <strong>Médico da Família</strong> como porta de entrada — cuidado contínuo, preventivo e humanizado.</p>
<ul>
<li>Abrangência regional (Curitiba + 24 cidades); urgência/emergência nacionais.</li>
<li>Coparticipação 20%, 30%, 40% ou 50%; <strong>teto limitador R$ 90,00</strong>.</li>
<li>Internações <strong>isentas</strong> de coparticipação (psiquiátrica após 30 dias: 30% sem teto).</li>
<li>Permite mesclar acomodação no mesmo grupo familiar. A partir de 3 vidas.</li>
<li><strong>5 unidades APS</strong> (Iguaçu, Pinheirinho, Pinhais, São José dos Pinhais, Araucária) — consultas e procedimentos <strong>SEM coparticipação!</strong></li>
</ul>
<div class="callout internal"><h4>O Pleno NÃO é um plano "barato"</h4><p>Não o apresente como entrada ou low cost. É um modelo de cuidado coordenado. Nunca diga "é para quem não tem dinheiro" ou "rede menorzinha" (são 20+ hospitais selecionados e 5 mil médicos). Diga: "modelo com gestão da saúde, na APS as consultas são SEM coparticipação, seu Médico da Família te encaminha de forma assertiva."</p></div>
<h3>Plano Flex (Regional)</h3>
<p>A <strong>maior rede credenciada</strong>: +50 hospitais, 270 clínicas, +90 unidades laboratoriais, +5 mil médicos. Coparticipação 20/30/40/50%, teto R$ 90, internação isenta, mescla de acomodação, a partir de 3 vidas, até 5% de desconto. <strong>Flex II 50%</strong>: coparticipação só em consultas (a partir de 10 vidas).</p>
<h3>Plano Amigo (Regional)</h3>
<p>Coparticipação de 25% ou 50%, rede Flex completa, até 5% de desconto.</p>
<h3>Plano Uniplan (Regional)</h3>
<p><strong>SEM coparticipação</strong> (mensalidade mais alta, sem custo ao usar). Exclusivo para empresas com <strong>mínimo 10 vidas</strong>, rede Flex completa, até 5% de desconto.</p>
<h3>Planos Nacionais</h3>
<p>Amigo Nacional (25% e 50%) e Uniplan Nacional (sem coparticipação, a partir de 10 vidas). Teto limitador <strong>R$ 220,00</strong>, a partir de 3 vidas.</p>
<h3>Quadro comparativo</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Característica</th><th>Pleno</th><th>Flex</th><th>Amigo</th><th>Uniplan</th></tr></thead><tbody>
<tr><td>Rede</td><td>Selecionada (20+ hosp.)</td><td>Completa (50+)</td><td>Completa (50+)</td><td>Completa (50+)</td></tr>
<tr><td>Coparticipação</td><td>20/30/40/50%</td><td>20/30/40/50%</td><td>25% ou 50%</td><td>Sem copart.</td></tr>
<tr><td>Teto limitador</td><td>R$ 90</td><td>R$ 90</td><td>R$ 90</td><td>N/A</td></tr>
<tr><td>Mínimo de vidas</td><td>3</td><td>3</td><td>3</td><td>10</td></tr>
<tr><td>APS (Médico Família)</td><td class="yes">Sim</td><td class="no">Não</td><td class="no">Não</td><td class="no">Não</td></tr>
<tr><td>Desconto comercial</td><td>Não</td><td>Até 5%</td><td>Até 5%</td><td>Até 5%</td></tr>
<tr><td>Internação</td><td>Isento copart.</td><td>Isento copart.</td><td>Isento copart.</td><td>Isento copart.</td></tr>
</tbody></table></div>
<div class="callout tip"><h4>Quando indicar cada plano?</h4><p><strong>Pleno:</strong> valoriza gestão de saúde e menor custo com qualidade. <strong>Flex:</strong> precisa de rede ampla e liberdade. <strong>Amigo:</strong> equilíbrio entre custo e liberdade. <strong>Uniplan:</strong> não quer coparticipação.</p></div>`}
],quiz:[
{pergunta:"O que é a APS no Plano Pleno?",opcoes:["Uma taxa adicional","Atenção Primária à Saúde — Médico da Família como porta de entrada; consultas/procedimentos na APS são SEM coparticipação","Um hospital","Um aplicativo"],correta:1,explica:"São 5 unidades APS com Médico da Família. Procedimentos e consultas na APS não têm coparticipação — economia real no dia a dia."},
{pergunta:"Qual plano NÃO tem coparticipação e exige no mínimo 10 vidas?",opcoes:["Pleno","Flex","Amigo","Uniplan"],correta:3,explica:"O Uniplan é sem coparticipação (mensalidade mais alta), exclusivo para empresas com mínimo de 10 vidas, com rede Flex completa."},
{pergunta:"Qual o teto limitador de coparticipação dos planos regionais (Pleno/Flex/Amigo)?",opcoes:["R$ 90,00","R$ 100,00","R$ 220,00","Não há teto"],correta:0,explica:"Planos regionais têm teto de R$ 90 por procedimento; os planos nacionais têm teto de R$ 220."}
]},

{id:3,titulo:"Cotação Passo a Passo",desc:"Que dados coletar, como montar a cotação e um exemplo prático completo.",modulos:[
{id:5,num:5,tempo:"6 min",titulo:"Como fazer uma cotação",html:`
<p>Este é o capítulo mais importante. Aqui você aprende, na prática, a montar uma cotação.</p>
<h3>Informações que você precisa coletar</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Informação</th><th>Por que é importante</th></tr></thead><tbody>
<tr><td>CNPJ da empresa</td><td>Verificar se já foi cliente Unimed e se está na área de atuação</td></tr>
<tr><td>Quantidade de vidas</td><td>Definir a faixa de tabela (3–29)</td></tr>
<tr><td>Nome + data de nascimento de cada um</td><td>Calcular a faixa etária</td></tr>
<tr><td>Já tem plano? Qual operadora?</td><td>Portabilidade e reaproveitamento de carência</td></tr>
<tr><td>Acomodação desejada</td><td>Enfermaria ou apartamento (pode mesclar)</td></tr>
<tr><td>Orçamento disponível</td><td>Orientar plano/coparticipação</td></tr>
<tr><td>Necessidades específicas</td><td>Gestantes, idosos, tratamentos em andamento</td></tr>
</tbody></table></div>
<h3>Passo a passo</h3>
<ol>
<li>Identifique a faixa etária de cada beneficiário (data de nascimento → faixa).</li>
<li>Escolha o tipo de plano (orçamento, rede ampla vs. cuidado coordenado, com/sem coparticipação).</li>
<li>Escolha a acomodação (enfermaria mais barata / apartamento mais conforto — pode mesclar).</li>
<li>Escolha o percentual de coparticipação (maior copart. = menor mensalidade).</li>
<li>Consulte a tabela de preços e localize o valor de cada faixa.</li>
<li>Some os valores individuais para o total mensal.</li>
<li>Aplique desconto (até 5%) — apenas Flex, Amigo e Uniplan. <strong>O Pleno não tem desconto.</strong></li>
</ol>`},
{id:6,num:6,tempo:"5 min",titulo:"Exemplo prático de cotação",html:`
<p><strong>Cenário:</strong> Empresa ABC Ltda, 5 vidas, quer Flex 30% em enfermaria.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Beneficiário</th><th>Idade</th><th>Faixa</th><th>Valor Flex 30% Enf.</th></tr></thead><tbody>
<tr><td>Carlos (titular)</td><td>42</td><td>39-43</td><td>R$ 424,86</td></tr>
<tr><td>Maria (cônjuge)</td><td>40</td><td>39-43</td><td>R$ 424,86</td></tr>
<tr><td>Pedro (filho)</td><td>15</td><td>00-18</td><td>R$ 229,24</td></tr>
<tr><td>Ana (colaboradora)</td><td>28</td><td>24-28</td><td>R$ 274,48</td></tr>
<tr><td>Lucas (colaborador)</td><td>33</td><td>29-33</td><td>R$ 353,53</td></tr>
</tbody></table></div>
<div class="callout key"><h4>Cálculo</h4>
<p><strong>Total mensal sem desconto:</strong> R$ 1.706,97<br>
<strong>Com 5% de desconto comercial:</strong> R$ 1.706,97 × 0,95 = <strong>R$ 1.621,62</strong><br>
<strong>Valor médio por vida:</strong> R$ 1.621,62 ÷ 5 = R$ 324,32</p></div>
<div class="callout tip"><p>Sempre apresente o total mensal, o valor médio por vida e, se possível, um comparativo com o que o cliente paga hoje. Isso facilita a decisão.</p></div>
<div class="callout warn"><h4>Preço final é sempre na plataforma</h4><p>As tabelas da campanha (Fev–Jul/2026, 3–29 vidas) são referenciais e exclusivas para empresas que nunca foram clientes Unimed Curitiba. O valor final considera o perfil etário completo do grupo.</p></div>`}
],quiz:[
{pergunta:"Em quais planos é possível aplicar o desconto comercial de até 5%?",opcoes:["Em todos","Apenas no Pleno","Flex, Amigo e Uniplan (o Pleno NÃO tem desconto)","Apenas no Uniplan"],correta:2,explica:"O desconto comercial de até 5% vale para Flex, Amigo e Uniplan. O Plano Pleno não tem possibilidade de desconto."},
{pergunta:"As tabelas promocionais (3–29 vidas) são exclusivas para:",opcoes:["Qualquer empresa","Empresas que nunca foram clientes da Unimed Curitiba","Apenas MEIs","Apenas empresas com 100+ vidas"],correta:1,explica:"Os preços de campanha são exclusivos para empresas que ainda não possuem e nunca foram clientes Unimed Curitiba, sem critérios de agravo."}
]},

{id:4,titulo:"Regras Comerciais e Carências",desc:"Abrangência, vigência, cancelamento, coparticipação, reajuste e reaproveitamento de carências.",modulos:[
{id:7,num:7,tempo:"7 min",titulo:"Regras comerciais essenciais",html:`
<h3>Área de abrangência</h3>
<ul>
<li><strong>PME (até 100 vidas):</strong> CNPJ em Curitiba/região → venda liberada, sem necessidade de 50%+1 das vidas na área. <strong>Oportunidade!</strong></li>
<li>CNPJ fora da área: precisa de documentação específica (análise pode levar +10 dias úteis).</li>
<li><strong>+100 vidas:</strong> 50%+1 das vidas devem estar na área de atuação.</li>
</ul>
<div class="callout warn"><p>O corretor NÃO pode contatar diretamente outra Unimed — sempre solicite à equipe interna.</p></div>
<h3>Cotação e fechamento</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th>Detalhe</th></tr></thead><tbody>
<tr><td>Validade da reserva</td><td>60 dias</td></tr>
<tr><td>Carta de Nomeação</td><td>Assinatura eletrônica. Análise em até 72h úteis</td></tr>
<tr><td>CNPJ fora da área</td><td>Documentação; análise +10 dias úteis</td></tr>
</tbody></table></div>
<h3>Vigência e pagamentos</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Vigência</th><th>Pagamento</th></tr></thead><tbody>
<tr><td>Dia 1º do mês</td><td>Fatura cheia no mesmo mês, na data de vencimento escolhida</td></tr>
<tr><td>Dia 2 a 15</td><td>Fatura proporcional no fim do mesmo mês</td></tr>
<tr><td>Dia 16 a 31</td><td>No mês seguinte: fatura cheia + proporcional do mês anterior (2 boletos)</td></tr>
</tbody></table></div>
<div class="callout tip"><p>Se possível, oriente o cliente a iniciar no dia 1º — é mais simples e evita confusão com boletos proporcionais.</p></div>
<h3>Cancelamento — como funciona na prática</h3>
<p>O contrato prevê fidelidade de 12 meses e multa de 50% das parcelas restantes. <strong>Na prática, a Unimed Curitiba NÃO cobra multa de rescisão.</strong></p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Solicitação</th><th>O que acontece</th></tr></thead><tbody>
<tr><td>Até o dia 20 do mês</td><td>Cancela no fim do mesmo mês (coberto até o último dia)</td></tr>
<tr><td>Após o dia 20</td><td>Cancela no fim do mês seguinte</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>Regra PlaneCorp</h4><p>Embora não haja multa na prática, nunca use isso para minimizar o compromisso do cliente. A venda consultiva prioriza o relacionamento de longo prazo — cancelamento é a última opção, sempre buscando resolver a insatisfação antes.</p></div>`},
{id:8,num:8,tempo:"6 min",titulo:"Carências e reaproveitamento",html:`
<div class="callout key"><p>A Unimed Curitiba reaproveita carências de <strong>TODAS as operadoras registradas na ANS</strong>, independente do tempo de permanência (com regras de proporção).</p></div>
<h3>Regras de tempo (vindo de outras operadoras)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tempo no plano anterior</th><th>Aproveitamento</th></tr></thead><tbody>
<tr><td>1 ano ou mais</td><td>100% (exceto parto, terapias e CPT)</td></tr>
<tr><td>180 dias a menos de 1 ano</td><td>50% do tempo</td></tr>
<tr><td>30 a 179 dias</td><td>Só consultas e exames simples</td></tr>
</tbody></table></div>
<p><strong>Período máximo de carência:</strong> 180 dias. <strong>Exceções (não reaproveitam):</strong> preexistências (CPT 24 meses), parto e terapias (exceto fisioterapia).</p>
<p>Vindo da <strong>própria Unimed Curitiba</strong>: reaproveitamento conforme o tempo, inclusive doenças preexistentes e parto.</p>
<h3>Coparticipação — o que tem e o que não tem</h3>
<ul>
<li><strong>TEM:</strong> consultas com especialistas (fora da APS), exames diagnósticos, procedimentos ambulatoriais.</li>
<li><strong>NÃO tem:</strong> internações, procedimentos nas unidades APS (Pleno), urgência e emergência.</li>
<li><strong>Teto:</strong> R$ 90 (regionais) / R$ 220 (nacionais) por procedimento.</li>
</ul>
<h3>Reajuste — RN 565</h3>
<p>Para contratos com até 29 beneficiários, o reajuste anual segue a RN 565 da ANS (percentual padronizado para todas as operadoras nesse porte).</p>
<div class="callout warn"><h4>Declaração de Saúde</h4><p>Nunca oriente o beneficiário a omitir informações. Além de antiético, pode gerar negativa de cobertura. Preexistências têm CPT de até 24 meses para procedimentos relacionados.</p></div>`}
],quiz:[
{pergunta:"Para PME (até 100 vidas) com CNPJ em Curitiba/região, é preciso ter 50%+1 das vidas na área?",opcoes:["Sim, sempre","Não — a venda é liberada (é oportunidade!)","Só para 50+ vidas","Só para o Pleno"],correta:1,explica:"Para PME até 100 vidas com CNPJ na área, não há necessidade de 50%+1. A exigência de 50%+1 vale para contratos acima de 100 vidas."},
{pergunta:"Na prática, como funciona o cancelamento na Unimed Curitiba?",opcoes:["Multa de 50% sempre","Não cobra multa; solicitando até o dia 20, cancela no fim do mesmo mês","Só cancela após 12 meses","Cancela imediatamente sem cobertura"],correta:1,explica:"Apesar de o contrato prever multa, na prática a Unimed não cobra. Até o dia 20 cancela no fim do mês; após o dia 20, no fim do mês seguinte."},
{pergunta:"Vindo de outra operadora com 1 ano ou mais, o aproveitamento de carência é:",opcoes:["Nenhum","50% do tempo","100% (exceto parto, terapias e CPT)","Só urgência"],correta:2,explica:"Com 1+ ano: 100% de aproveitamento, exceto parto, terapias e CPT. De 180 dias a <1 ano: 50%. De 30 a 179 dias: só consultas e exames simples."}
]},

{id:5,titulo:"Venda Consultiva e Comparativos",desc:"Os 7 princípios da venda consultiva, roteiro de abordagem e por que Unimed vs. concorrentes.",modulos:[
{id:9,num:9,tempo:"6 min",titulo:"Técnicas de venda consultiva",html:`
<p>A PlaneCorp pratica venda consultiva: não empurramos produtos — orientamos, educamos e acompanhamos.</p>
<h3>Os 7 princípios</h3>
<ol>
<li><strong>Venda é estratégia e ciência</strong> — use método, análise e disciplina.</li>
<li><strong>Ouça mais do que fala</strong> — perguntas certas, entenda as dores.</li>
<li><strong>Inteligência da observação</strong> — perceba sinais sutis.</li>
<li><strong>Venda benefícios, não características</strong> — "segurança de ter atendimento perto", não "50 hospitais".</li>
<li><strong>Não pressione, provoque reflexão.</strong></li>
<li><strong>Follow-up é essencial</strong> — cliente que some é dúvida, não "não".</li>
<li><strong>Planeje sua semana.</strong></li>
</ol>
<h3>Roteiro de primeiro contato (WhatsApp)</h3>
<div class="callout tip"><p>"Olá [nome], tudo bem? Sou consultor de saúde da PlaneCorp. Antes de qualquer proposta, gostaria de entender melhor a sua empresa e as necessidades da equipe. Posso te fazer algumas perguntas rápidas?"</p></div>
<p><strong>Perguntas-chave:</strong> quantas vidas (titulares + dependentes)? Já tem plano? Qual operadora? Principal motivo da busca? Necessidades específicas (gestantes, tratamentos, idosos)? Faixa de investimento por colaborador?</p>`},
{id:10,num:10,tempo:"6 min",titulo:"Comparativos de mercado — por que Unimed?",html:`
<p>Dados comparativos fecham vendas. Use os comparativos oficiais:</p>
<h3>Flex 30% vs Amil Prata 30%</h3>
<ul>
<li>3-4 vidas (demais empresas): Unimed ~12% mais barata (–R$ 66,57/vida).</li>
<li>3-4 vidas (MEI): Unimed ~22% mais barata (–R$ 153/vida); faixa 34-38 economia de 30%.</li>
<li>5-29 vidas (MEI): Unimed ~13% mais barata (–R$ 83,44/vida).</li>
</ul>
<h3>Pleno 30% vs Amil Prata 30%</h3>
<ul>
<li>3-4 vidas (demais): Pleno 27% mais barato (–R$ 158,15/vida) — nenhuma faixa da Amil é mais barata.</li>
<li>3-4 vidas (MEI): Pleno 39% mais barato (–R$ 271/vida); faixa 24-28 economia de 49%!</li>
<li>5-29 vidas (MEI): Pleno 32% mais barato (–R$ 201,45/vida).</li>
</ul>
<div class="callout arg"><h4>Argumento principal</h4><p>O Plano Pleno é o campeão de economia. Comparado à Amil Prata (principal concorrente), chega a ser até <strong>49% mais barato</strong> em algumas faixas, mantendo rede de qualidade.</p></div>
<h3>Jornada do corretor (do contato ao pós-venda)</h3>
<p>Prospecção → Primeiro contato consultivo → Diagnóstico → Cotação → Apresentação → Negociação (com dados) → Fechamento (Carta de Nomeação, vigência) → Implantação → Boas-vindas → Pós-venda (NPS, revisões, cross-sell, indicações).</p>`}
],quiz:[
{pergunta:"Segundo os comparativos, qual plano é o 'campeão de economia' vs. Amil Prata?",opcoes:["Uniplan","Flex","Pleno (até 49% mais barato em algumas faixas)","Amigo"],correta:2,explica:"O Plano Pleno chega a ser até 49% mais barato que a Amil Prata em algumas faixas (MEI), mantendo rede de qualidade."},
{pergunta:"Qual princípio da venda consultiva trata de vender 'segurança' em vez de '50 hospitais'?",opcoes:["Ouça mais do que fala","Venda benefícios, não características","Planeje sua semana","Follow-up é essencial"],correta:1,explica:"'Venda benefícios, não características' — o cliente compra a segurança de ter atendimento perto, não um número de hospitais."}
]},

{id:6,titulo:"FAQ, Glossário e Cultura",desc:"Perguntas frequentes, glossário do mercado e a cultura PlaneCorp.",modulos:[
{id:11,num:11,tempo:"5 min",titulo:"Perguntas frequentes (FAQ)",html:`
<div class="callout key"><h4>Quantas vidas para contratar?</h4><p>Mínimo 3 para Flex, Amigo e Pleno. Mínimo 10 para Uniplan e Flex II 50%.</p></div>
<div class="callout key"><h4>Posso misturar enfermaria e apartamento?</h4><p>Sim! É possível mesclar acomodação no mesmo grupo familiar.</p></div>
<div class="callout key"><h4>Posso misturar planos diferentes?</h4><p>Sim, a partir de 10 vidas.</p></div>
<div class="callout key"><h4>Tem desconto no Plano Pleno?</h4><p>Não. O Pleno não tem desconto comercial.</p></div>
<div class="callout key"><h4>Quanto dura a reserva?</h4><p>60 dias. A Carta de Nomeação tem análise de 72h úteis.</p></div>
<div class="callout key"><h4>Urgência fora de Curitiba?</h4><p>Urgência e emergência são nacionais via Sistema Unimed em todos os planos.</p></div>
<div class="callout key"><h4>Recém-nascido aproveita carência?</h4><p>Sim, pelo plano do pai ou mãe, uma única vez.</p></div>
<div class="callout key"><h4>Tem multa para cancelar?</h4><p>Na prática, não. Basta solicitar até o dia 20 do mês.</p></div>`},
{id:12,num:12,tempo:"5 min",titulo:"Glossário do mercado",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Termo</th><th>Definição</th></tr></thead><tbody>
<tr><td>ANS</td><td>Agência Nacional de Saúde Suplementar — reguladora</td></tr>
<tr><td>Agravo</td><td>Acréscimo no valor por doença preexistente</td></tr>
<tr><td>APS</td><td>Atenção Primária à Saúde — unidades do Plano Pleno</td></tr>
<tr><td>Carência</td><td>Período de espera após a contratação</td></tr>
<tr><td>Coparticipação</td><td>Percentual pago a cada utilização</td></tr>
<tr><td>CPT</td><td>Cobertura Parcial Temporária (até 24 meses para preexistências)</td></tr>
<tr><td>Cross-sell</td><td>Oferta de produtos adicionais (odonto, seguro de vida)</td></tr>
<tr><td>Faixa etária</td><td>Intervalo de idade que define o preço (10 faixas ANS)</td></tr>
<tr><td>Portabilidade</td><td>Migração entre operadoras aproveitando carências</td></tr>
<tr><td>RN 565</td><td>Resolução ANS que regula reajustes de até 29 vidas</td></tr>
<tr><td>Teto limitador</td><td>Valor máximo de coparticipação por procedimento</td></tr>
<tr><td>Vitalício</td><td>Comissão recorrente mensal enquanto o contrato está ativo</td></tr>
</tbody></table></div>`},
{id:13,num:13,tempo:"3 min",titulo:"Cultura PlaneCorp e contatos",html:`
<h3>Os 6 pilares culturais</h3>
<ol>
<li><strong>Clareza</strong> — falar a verdade com respeito, basear decisões em dados.</li>
<li><strong>Resultado com Propósito</strong> — alta performance com integridade.</li>
<li><strong>Autorresponsabilidade</strong> — dono da própria entrega.</li>
<li><strong>Aprendizado Contínuo</strong> — aprender algo novo toda semana.</li>
<li><strong>Cuidado Contínuo</strong> — acompanhar o cliente depois da venda.</li>
<li><strong>Respeito e Harmonia</strong> — gentileza e profissionalismo.</li>
</ol>
<div class="callout quote">"Somos consultivos, humanos e orientados a resultado."<span class="who">— Identidade Cultural PlaneCorp 2026</span></div>
<div class="callout key"><h4>Contatos PlaneCorp</h4><p>🌐 www.planecorp.com.br · 📷 @planecorp · 💬 (41) 9 9990-2288</p></div>`}
],quiz:[
{pergunta:"A partir de quantas vidas é possível mesclar planos diferentes?",opcoes:["3 vidas","10 vidas","30 vidas","Não é possível"],correta:1,explica:"Mesclar acomodação pode no mesmo grupo familiar; mesclar planos diferentes é possível a partir de 10 vidas."},
{pergunta:"O que significa 'vitalício' no glossário?",opcoes:["Plano sem fim","Comissão recorrente mensal ao corretor enquanto o contrato está ativo","Carência permanente","Cobertura vitalícia"],correta:1,explica:"Vitalício é a comissão recorrente que o corretor recebe mensalmente enquanto o contrato permanece ativo."}
]}
];

/* =====================================================================
   HAPVIDA / CLINIPAM — Treinamento (PF e PJ) · Fonte: manual oficial
   ===================================================================== */
const HAPVIDA=[
{id:1,titulo:"A Hapvida Clinipam (comum PF e PJ)",desc:"Fundamentos, mercado, quem é o grupo, rede própria, coparticipação, diferenciais e plataformas.",modulos:[
{id:1,num:1,tempo:"6 min",titulo:"Fundamentos e o mercado de saúde",html:`
<p>Um plano de saúde é um contrato entre o beneficiário e uma operadora, regulada pela <strong>ANS</strong> (que define o ROL de cobertura, carências máximas, reajustes e direitos). Existem três tipos de contratação:</p>
<ul>
<li><strong>Individual/Familiar (PF):</strong> 1 a 8 vidas, livre adesão, reajuste controlado pela ANS.</li>
<li><strong>Coletivo Empresarial (PJ):</strong> contratado por empresa (CNPJ), mínimo 2 vidas, <strong>~40% mais barato que PF</strong>, reajuste pela operadora.</li>
<li><strong>Coletivo por Adesão:</strong> via sindicato/associação (precisa de vínculo).</li>
</ul>
<h3>Conceitos essenciais</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Termo</th><th>O que é</th></tr></thead><tbody>
<tr><td>Coparticipação</td><td>Valor pago ao usar serviço. Parcial (só terapias) ou Total (tudo)</td></tr>
<tr><td>Carência</td><td>Tempo de espera para usar serviços (24h a 24 meses)</td></tr>
<tr><td>Portabilidade</td><td>Troca de operadora sem carência (via ANS). NÃO gera comissão</td></tr>
<tr><td>Aproveitamento de carência</td><td>Operadora reduz carências de quem vem de outro plano. Gera comissão</td></tr>
<tr><td>CPT</td><td>Cobertura Parcial Temporária — 24 meses para preexistências declaradas</td></tr>
<tr><td>PAC</td><td>Procedimentos de Alta Complexidade (tomografia, ressonância, quimio/radio)</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Argumentos</h4><p>No PF: "Mesmo que faça tratamento de câncer, seu reajuste será igual ao de todos — controlado pela ANS." No PJ: "O plano empresarial é ~40% mais barato que o individual — ideal para quem tem CNPJ."</p></div>`},
{id:2,num:2,tempo:"7 min",titulo:"Quem é a Hapvida Clinipam e a rede",html:`
<p>A Hapvida é a <strong>maior operadora de saúde do Brasil</strong> (1º lugar ANS, 8,7M clientes saúde, 16,81% do mercado) e 2ª em odontologia (7M clientes). É <strong>verticalizada</strong> — usa rede própria. Era Clinipam em Curitiba, virou Notre Dame e agora Hapvida Clinipam. O "H" é mudo: pronuncia-se "Apvida".</p>
<h3>Números (1º tri/2025)</h3>
<div class="stats">
<div class="stat"><div class="n">815</div><div class="l">unidades próprias (5 regiões)</div></div>
<div class="stat"><div class="n">87</div><div class="l">hospitais</div></div>
<div class="stat"><div class="n">78</div><div class="l">prontos-atendimentos</div></div>
<div class="stat"><div class="n">351</div><div class="l">clínicas</div></div>
<div class="stat"><div class="n">+5.900</div><div class="l">leitos</div></div>
<div class="stat"><div class="n">+28 mil</div><div class="l">médicos</div></div>
</div>
<h3>Áreas de comercialização</h3>
<p><strong>Curitiba e RM</strong> (14 cidades), <strong>Londrina</strong> (7 cidades) e <strong>Balneário Camboriú/SC</strong> (11 cidades).</p>
<div class="callout tip"><h4>Cobertura geográfica</h4><p>Quem contrata em Curitiba/Londrina usa eletivo + urgência em Balneário. Quem contrata em Balneário usa Curitiba/Londrina só para urgência (até 12h). Urgência nacional onde houver rede própria Hapvida.</p></div>
<h3>Rede própria em Curitiba</h3>
<ul>
<li><strong>Hospital Onix (Matheus Leme):</strong> PA adulto 24h + ortopedia. 62 leitos, 10 UTI, hemodinâmica, tomografia/ressonância (muitos 24h).</li>
<li><strong>Hospital Onix Batel:</strong> portas fechadas (encaminhamento), internamentos e cirurgias, internamento infantil.</li>
<li><strong>Maternidade Brígida:</strong> urgência ginecológica + partos, 16 UTI neonatal, 2 suítes de parto humanizado.</li>
<li><strong>Centro Clínico Mercês:</strong> PA infantil 24h, +15 especialidades infantis.</li>
<li>Centros clínicos: Pinheirinho, Boqueirão, São José dos Pinhais, Araucária, Pinhais, Água Verde, Centro, São Lourenço, CMD (diagnóstico), CQV, Oncológico.</li>
</ul>
<p><strong>Rede credenciada:</strong> Hospital IPO (otorrino), Médico de Olhos (oftalmo), Porto Seguro (psiquiatria). <strong>Teleconsulta:</strong> +20 especialidades, nota 4.6.</p>
<div class="callout key"><h4>Diferenciais</h4><p>72% atendidos em 15 min (se >1h, diretor médico é notificado; >2h, o presidente). Medicação em 30 min na emergência. Biometria facial no centro cirúrgico (evita erros). Programas Viver Bem, Cardio Vida, Nascer Bem, oncológico. Clube de vantagens (até 70% off) e farmácias (até 35%).</p></div>`}
],quiz:[
{pergunta:"Qual a posição da Hapvida no mercado de saúde do Brasil?",opcoes:["3º lugar","Maior operadora do Brasil (1º lugar ANS, 16,81% do mercado)","Menor operadora","Só atua no Nordeste"],correta:1,explica:"A Hapvida é a maior operadora de saúde do Brasil (1º lugar ANS), com 8,7M clientes saúde e 16,81% de mercado. É verticalizada."},
{pergunta:"O que significa a Hapvida ser 'verticalizada'?",opcoes:["Tem muitos andares","Usa rede própria de unidades (controla qualidade e velocidade)","É só credenciada","Não tem hospitais"],correta:1,explica:"Verticalizada = usa rede própria (815 unidades). Isso permite controlar qualidade e velocidade — 72% atendidos em 15 minutos."},
{pergunta:"Como funciona a cobertura para quem contrata em Curitiba e viaja para Balneário Camboriú?",opcoes:["Sem cobertura","Usa eletivo + urgência em Balneário (rede própria do grupo)","Só reembolso","Precisa pagar à parte"],correta:1,explica:"Quem contrata em Curitiba/Londrina usa eletivo + urgência em Balneário. Há urgência nacional onde houver rede própria Hapvida."}
]},

{id:2,titulo:"Pessoa Física (PF)",desc:"Regras exclusivas do plano individual/familiar: elegibilidade, carências, aproveitamento e documentação.",modulos:[
{id:3,num:3,tempo:"6 min",titulo:"Produto PF: elegibilidade e regras",html:`
<p>Livre adesão. <strong>1 a 8 vidas.</strong> Sem limite de idade. Qualquer pessoa pode contratar sem vínculo familiar na 1ª carga. Cobrança direta ao consumidor.</p>
<h3>Titulares e dependentes</h3>
<ul>
<li><strong>Titular financeiro:</strong> só paga, não entra no plano.</li>
<li><strong>Titular beneficiário:</strong> paga E usa.</li>
<li><strong>1ª carga:</strong> NÃO precisa parentesco, sem limite de idade (amigos, parentes distantes, avó+netos).</li>
<li><strong>2ª carga (posterior):</strong> OBRIGATÓRIO família — cônjuge, filhos até 21a (24a universitário), adotivos &lt;12a.</li>
</ul>
<div class="callout internal"><h4>NÃO mescla no PF</h4><p>Obstetrícia, acomodação e coparticipação são iguais para TODOS do contrato. Dependentes seguem o titular.</p></div>
<h3>Médica 1 vs Médica 2</h3>
<ul>
<li><strong>Médica 1:</strong> saúde COM odonto concomitante (~R$ 23,59/vida). Mensalidade mais barata. <strong>SEMPRE venda Médica 1.</strong></li>
<li><strong>Médica 2:</strong> saúde SEM odonto. Mais cara (diferença pode chegar a R$ 62/mês = R$ 744/ano).</li>
</ul>
<p><strong>Recém-nascido:</strong> plano com obstetrícia + carência de parto cumprida → inclui o bebê em até 30 dias sem carência. <strong>Rescisão:</strong> só por fraude ou inadimplência >60 dias; sem fidelidade e sem multa. <strong>Taxa de adesão PF:</strong> R$ 25,00 por contrato (no 1º boleto).</p>`},
{id:4,num:4,tempo:"6 min",titulo:"Carências, aproveitamento e documentação PF",html:`
<h3>Carências PF</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Prazo</th><th>O que cobre</th></tr></thead><tbody>
<tr><td>24h</td><td>Urgência e emergência</td></tr>
<tr><td>30 dias*</td><td>Consultas, exames simples, raio-X, ECG (*24h em campanha)</td></tr>
<tr><td>90 dias</td><td>Exames cardio/oftalmo/otorrino, ultrassom, mamografia, densitometria</td></tr>
<tr><td>180 dias</td><td>Internações, cirurgias, tomografia, ressonância, endoscopia, quimio/radio, terapias, PAC</td></tr>
<tr><td>300 dias</td><td>Parto a termo (com obstetrícia)</td></tr>
<tr><td>24 meses</td><td>CPT — doenças preexistentes</td></tr>
</tbody></table></div>
<h3>Aproveitamento de carências PF</h3>
<p>Operadoras aceitas: Unimeds, Bradesco, SulAmérica, Amil, Smile, e em Curitiba também Nossa Saúde, Medsênior e Paraná Clínicas. <strong>Idade máxima Curitiba:</strong> até 64a 11m 29d.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tempo anterior</th><th>Aproveitamento</th></tr></thead><tbody>
<tr><td>1 ano ou mais</td><td>100% (exceto parto, terapias, CPT)</td></tr>
<tr><td>180d a &lt;1 ano</td><td>50% do tempo</td></tr>
<tr><td>30 a 179 dias</td><td>Só consultas e exames simples</td></tr>
</tbody></table></div>
<p><strong>Hapvida → Hapvida</strong> (cancelado &lt;30 dias + adimplente): 100% de aproveitamento TOTAL (inclui parto, terapias, CPT), sem limite de idade.</p>
<h3>Documentação PF</h3>
<p>CPF + RG (ou CNH/passaporte/CTPS digital); menores: certidão de nascimento + CPF; comprovante de endereço &lt;90 dias; e-mail e telefone que receba SMS. <strong>Cônjuge PF: só certidão de casamento ou união estável</strong> (não aceita declaração de convívio). Orçamento válido 25 dias; 1º boleto em 72h.</p>`}
],quiz:[
{pergunta:"Quantas vidas tem o plano PF (individual/familiar) da Hapvida?",opcoes:["Mínimo 2","1 a 8 vidas","Mínimo 10","Sem limite"],correta:1,explica:"O PF vai de 1 a 8 vidas, livre adesão, sem limite de idade. Na 1ª carga não precisa de parentesco."},
{pergunta:"Por que vender sempre o produto 'Médica 1' no PF?",opcoes:["É sem odonto","Saúde COM odonto concomitante e mensalidade mais barata que a Médica 2","Tem mais carência","É só para idosos"],correta:1,explica:"Médica 1 é saúde com odonto incluído (~R$23,59/vida) e sai mais barata que a Médica 2 (sem odonto), que pode custar até R$744/ano a mais."},
{pergunta:"No PF, qual documento é aceito para cônjuge?",opcoes:["Declaração de convívio marital","Somente certidão de casamento ou união estável","Apenas RG","Conta de luz"],correta:1,explica:"No PF, só certidão de casamento ou união estável (a declaração de convívio marital NÃO é aceita no PF — só no PJ)."}
]},

{id:3,titulo:"Pessoa Jurídica (PJ)",desc:"Regras exclusivas do empresarial: elegibilidade, carências, fidelidade, aproveitamento e documentação.",modulos:[
{id:5,num:5,tempo:"7 min",titulo:"Produto PJ: elegibilidade e produtos",html:`
<p><strong>~40% mais barato que PF.</strong> Mínimo 2 vidas. Super Simples (2–29 vidas) e PME (30–99). Fidelidade de 12 meses.</p>
<h3>Quem pode entrar</h3>
<p>Sócios/administradores, CLT, estagiários, jovens aprendizes, afastados INSS. E a <strong>carta na manga</strong>: <em>prestadores de serviço</em> — sem vínculo CLT, comprovado por declaração (só na massa inicial), permite incluir quem normalmente não entraria.</p>
<h3>Limites de idade PJ</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tipo</th><th>Idade máxima</th></tr></thead><tbody>
<tr><td>Titulares</td><td>Até 74a 11m 29d</td></tr>
<tr><td>Cônjuge (dependente)</td><td>Até 74a 11m 29d</td></tr>
<tr><td>Demais dependentes</td><td>Até 53 anos</td></tr>
</tbody></table></div>
<div class="callout tip"><p>Dependente &gt;53 anos? Inclua como <strong>titular via prestador de serviço</strong> (aceita até 74a).</p></div>
<h3>Mescla no PJ</h3>
<p><strong>SIM</strong> mescla entre titulares: obstetrícia e acomodação (um com, outro sem). Dependentes seguem o titular. <strong>NÃO</strong> mescla coparticipação (parcial ou total para o grupo todo).</p>
<h3>Produtos PJ</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Produto</th><th>Característica</th><th>Obstetrícia</th></tr></thead><tbody>
<tr><td>Nosso Médico (novo)</td><td>Médico da família como porta de entrada. Mais acessível.</td><td>Só COM</td></tr>
<tr><td>Nosso Plano</td><td>Liberdade total — agenda direto com especialista.</td><td>Com ou sem</td></tr>
<tr><td>Pleno</td><td>Rede credenciada ampliada (ex.: Hospital São Vicente Araucária 24h).</td><td>Com ou sem</td></tr>
</tbody></table></div>
<p><strong>Taxa de adesão:</strong> R$ 15,00/vida. <strong>Odonto Premium:</strong> R$ 23,25/vida (todos ou nenhum). <strong>Odonto Urgente:</strong> gratuito (incluso). <strong>Preço base:</strong> Super Simples enfermaria copay parcial sem obstetrícia a partir de R$ 95,40/mês (0-18); Pleno a partir de R$ 165,84.</p>`},
{id:6,num:6,tempo:"7 min",titulo:"Carências, fidelidade e documentação PJ",html:`
<h3>Carências Super Simples (2–15 vidas)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Prazo</th><th>O que cobre</th></tr></thead><tbody>
<tr><td>24h</td><td>Consultas e exames simples (hemograma, raio-X, urina, ECG)</td></tr>
<tr><td>60 dias</td><td>Odonto Premium, exames média complexidade</td></tr>
<tr><td>180 dias</td><td>Internamento, cirurgias, tomografia, ressonância</td></tr>
<tr><td>300 dias</td><td>Parto</td></tr>
<tr><td>24 meses</td><td>CPT (preexistências)</td></tr>
</tbody></table></div>
<h3>Benefícios por volume</h3>
<div class="callout key"><p><strong>16–29 vidas:</strong> carências de 60d passam a 24h. <strong>30+ vidas:</strong> ISENÇÃO TOTAL — zero carência para toda a massa (inclusive gestante com parto iminente).</p></div>
<div class="callout tip"><h4>Use empresas coligadas</h4><p>Some vidas de vários CNPJs do mesmo dono (ou família) para atingir 16 ou 30 vidas e desbloquear os benefícios de carência.</p></div>
<h3>Fidelidade — 12 meses</h3>
<p>Cancelamento &lt;12 meses: multa (média das 3 últimas faturas × 2) + aviso prévio de 60 dias. Após 12 meses: sem multa, só aviso prévio. Mínimo de 2 vidas sempre.</p>
<h3>Aproveitamento de carências PJ</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tempo anterior</th><th>Aproveitamento</th></tr></thead><tbody>
<tr><td>Menos de 6 meses</td><td>Apenas 30 dias do tempo</td></tr>
<tr><td>6 meses a &lt;1 ano</td><td>50% do tempo</td></tr>
<tr><td>1 ano ou mais</td><td>100% (exceto parto, terapias, CPT)</td></tr>
</tbody></table></div>
<h3>Documentação e vigência PJ</h3>
<p>Contrato Social (ou Ata/Estatuto) + Cartão CNPJ + CNH do sócio assinante (MEI/ME/EPP: CNPJ mínimo 180 dias). Titulares: e-Social/CTPS digital (CLT), contrato social (sócio), declaração (prestador). <strong>Companheiro: declaração de convívio marital é aceita no PJ.</strong></p>
<div class="callout warn"><h4>Não mude o vencimento depois</h4><p>O PJ não cobra proporcional na mudança — o cliente recebe boleto cheio em seguida. Pergunte ANTES qual a melhor data. Repique PJ: 90 dias (exceção: contrato anterior >12 meses + adimplente vende imediato com comissão).</p></div>`}
],quiz:[
{pergunta:"A partir de quantas vidas o PJ Hapvida tem ISENÇÃO TOTAL de carência?",opcoes:["10 vidas","16 vidas","30 vidas (zero carência, inclusive parto iminente)","100 vidas"],correta:2,explica:"Com 30+ vidas há isenção total de carência para toda a massa. Com 16–29 vidas, as carências de 60 dias passam a 24h."},
{pergunta:"O que é a 'carta na manga' do PJ?",opcoes:["Um desconto","Incluir prestadores de serviço (sem CLT) via declaração, na massa inicial","Uma multa","Um plano premium"],correta:1,explica:"Prestadores de serviço (sem vínculo CLT) podem entrar via declaração — permite incluir quem normalmente não entraria. Só na massa inicial."},
{pergunta:"Dependente com mais de 53 anos no PJ — qual a solução?",opcoes:["Não pode entrar","Incluir como titular via prestador de serviço (aceita até 74a)","Pagar taxa extra","Esperar 24 meses"],correta:1,explica:"O limite de dependente é 53 anos, mas titular vai até 74a. A dica é incluir como titular via prestador de serviço."}
]},

{id:4,titulo:"Comparativo PF vs PJ",desc:"O que é igual e o que muda entre o plano individual e o empresarial.",modulos:[
{id:7,num:7,tempo:"5 min",titulo:"Comparativo completo PF vs PJ",html:`
<h3>O que é IGUAL</h3>
<p>Operadora, rede própria (Onix, Mercês, Brígida), rede credenciada (IPO, Médico de Olhos, Porto Seguro), teleconsulta, urgência nacional (até 12h), áreas de comercialização, cobertura (ROL ANS), carência de parto (300d) e CPT (24m), clube de vantagens e campanhas de bônus (somam PF+PJ).</p>
<h3>O que é DIFERENTE</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Critério</th><th>Pessoa Física</th><th>Pessoa Jurídica</th></tr></thead><tbody>
<tr><td>Vidas</td><td>1 a 8</td><td>Mínimo 2 (SS: 2-29; PME: 30-99)</td></tr>
<tr><td>Quem contrata</td><td>Qualquer pessoa (livre adesão)</td><td>Empresa (CNPJ)</td></tr>
<tr><td>Idade máx. titular</td><td>Sem limite</td><td>74a 11m 29d</td></tr>
<tr><td>Mesclar obstetrícia/acomodação</td><td>NÃO</td><td>SIM (entre titulares)</td></tr>
<tr><td>Taxa de adesão</td><td>R$ 25/contrato</td><td>R$ 15/vida</td></tr>
<tr><td>Odonto urgente gratuito</td><td>Não</td><td>SIM (incluso)</td></tr>
<tr><td>Fidelidade</td><td>Não tem</td><td>12 meses</td></tr>
<tr><td>Reajuste</td><td>ANS (controlado)</td><td>Operadora</td></tr>
<tr><td>Carência consultas</td><td>30 dias (24h camp.)</td><td>24 horas</td></tr>
<tr><td>Benefício 30+ vidas</td><td>N/A</td><td>ISENÇÃO TOTAL</td></tr>
<tr><td>Cônjuge: doc. aceito</td><td>Certidão casamento/UE</td><td>+ declaração de convívio marital</td></tr>
<tr><td>Prestador de serviço</td><td>N/A</td><td>SIM (carta na manga)</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Regra de ouro</h4><p>Se o cliente tem CNPJ (MEI 6+ meses, LTDA, etc.), <strong>SEMPRE avalie PJ primeiro</strong>: ~40% mais barato, consultas em 24h, permite mesclar. PF só quando não tem CNPJ.</p></div>`}
],quiz:[
{pergunta:"Qual a 'regra de ouro' ao atender um cliente com CNPJ?",opcoes:["Vender sempre PF","Avaliar PJ primeiro (~40% mais barato, consultas em 24h, permite mesclar)","Recusar","Vender odonto só"],correta:1,explica:"Com CNPJ (até MEI 6+ meses), avalie PJ primeiro: é ~40% mais barato, consultas em 24h e permite mesclar. PF só quando não há CNPJ."},
{pergunta:"Qual diferença de carência de consultas entre PF e PJ?",opcoes:["PF 24h, PJ 30 dias","PF 30 dias (24h em campanha), PJ 24 horas","Ambos 24h","Ambos 30 dias"],correta:1,explica:"No PF a carência de consultas é 30 dias (24h em campanha); no PJ é 24 horas desde o primeiro dia."}
]},

{id:5,titulo:"Técnicas de Venda",desc:"ICP massificado (PF), ICP empresarial (PJ), objeções, pós-venda e glossário.",modulos:[
{id:8,num:8,tempo:"6 min",titulo:"ICP PF e ICP PJ",html:`
<h3>ICP Massificado (PF)</h3>
<p>O público PF são famílias, indivíduos, autônomos e microempresas familiares. Contratam <strong>na emoção</strong> — na dor, na urgência, no medo.</p>
<ul>
<li><strong>Famílias jovens (25-40a):</strong> pediatria, PA rápido. "Cuidar da saúde da família é viver com tranquilidade."</li>
<li><strong>Gestantes:</strong> obstetrícia, maternidade. "Você cuida da nova vida — a PlaneCorp cuida do caminho."</li>
<li><strong>Autônomos e MEIs:</strong> economia. "Sua saúde é parte do sucesso do seu negócio." → <strong>avalie PJ primeiro!</strong></li>
</ul>
<p><strong>Fechamento PF:</strong> alternativa ("com ou sem obstetrícia? enfermaria ou apartamento?"), urgência ("fechando hoje, amanhã já tem urgência coberta"), facilidade ("cartão = plano ativo em 2h"), economia ("com desconto familiar de 20%, fica [valor]").</p>
<h3>ICP Empresarial (PJ)</h3>
<p>Empresas que entendem plano como estratégia. Fale com 3 decisores: o <strong>dono</strong> (lucro), o <strong>RH</strong> (engajamento) e o <strong>financeiro</strong> (eficiência).</p>
<p><strong>Fechamento PJ:</strong> economia ("criança a partir de R$ 95/mês"), velocidade ("ativa em 24h, consultas em 24h"), campanha ("15% de desconto termina este mês"), volume ("30+ vidas = zero carência"), prestador ("a diarista pode entrar como titular").</p>`},
{id:9,num:9,tempo:"5 min",titulo:"Objeções e pós-venda",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Objeção</th><th>Resposta PF</th><th>Resposta PJ</th></tr></thead><tbody>
<tr><td>"Está caro"</td><td>Médica 1 + desconto familiar. Compare com particular.</td><td>~40% mais barato que PF. Criança R$ 95/mês.</td></tr>
<tr><td>"Medo de carência"</td><td>Urgência 24h. Consultas 24h (camp.). Aproveitamento.</td><td>Consultas 24h desde o 1º dia. 30+ vidas = zero.</td></tr>
<tr><td>"Já tive Clinipam"</td><td>Rede nova, R$ 2 bi investidos, 15 min de atendimento.</td><td>Mesma resposta + preço PJ incomparável.</td></tr>
<tr><td>"Vou pensar"</td><td>WhatsApp + follow-up. Campanha pode acabar.</td><td>Programe vigência. Garanta tabela/campanha.</td></tr>
<tr><td>"Rede pequena"</td><td>87 hospitais, 351 clínicas. Urgência nacional.</td><td>Pleno: rede ampliada + credenciados.</td></tr>
<tr><td>"Não quero fidelidade"</td><td>PF não tem fidelidade.</td><td>Fidelidade permite preço 40% menor. Após 12m, livre.</td></tr>
</tbody></table></div>
<h3>Pós-venda</h3>
<ul>
<li>Contato em 30 dias: "Como está a experiência?"</li>
<li>PF: oriente app, urgência, odonto, clube de vantagens. PJ: ensine o RH a usar o portal, datas de corte, carga diária.</li>
<li>Cross-sell: PF tem CNPJ? → migre para PJ. PJ quer ampliar? → inclua consanguíneos.</li>
<li>Peça indicações — cliente satisfeito é a melhor fonte de negócios.</li>
</ul>`},
{id:10,num:10,tempo:"4 min",titulo:"Glossário e contatos",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Termo</th><th>Significado</th></tr></thead><tbody>
<tr><td>Carga diária</td><td>PJ: inclusão ativa em 3 dias úteis</td></tr>
<tr><td>Coligada</td><td>CNPJs unificados para benefício de carência</td></tr>
<tr><td>Consanguíneo</td><td>Parente com vínculo de sangue</td></tr>
<tr><td>CPT</td><td>Cobertura Parcial Temporária (24 meses)</td></tr>
<tr><td>Médica 1 / Médica 2</td><td>Saúde com odonto (mais barato) / sem odonto</td></tr>
<tr><td>Nosso Médico</td><td>Produto PJ com médico da família</td></tr>
<tr><td>PAC</td><td>Procedimentos de Alta Complexidade</td></tr>
<tr><td>Prestador de serviço</td><td>Sem CLT (carta na manga do PJ)</td></tr>
<tr><td>Repique</td><td>CPF com plano recente (&lt;90 dias)</td></tr>
<tr><td>Super Simples</td><td>Canal PJ de 2 a 29 vidas</td></tr>
<tr><td>Verticalizada</td><td>Operadora com rede própria</td></tr>
</tbody></table></div>
<div class="callout key"><h4>Contatos PlaneCorp</h4><p>🌐 www.planecorp.com.br · 📷 @planecorp · 💬 (41) 9 9990-2288</p></div>
<div class="callout quote">Cresce quem gera confiança. Permanece quem cuida. Inspira quem entrega com verdade.<span class="who">— Cultura PlaneCorp</span></div>`}
],quiz:[
{pergunta:"O cliente diz 'não quero fidelidade'. A melhor resposta no PJ é:",opcoes:["Concordar e oferecer PF","Explicar que a fidelidade permite preço 40% menor e, após 12 meses, fica livre","Dar desconto","Encerrar"],correta:1,explica:"No PJ, a fidelidade de 12 meses é o que permite o preço ~40% menor. Após 12 meses, o cliente fica livre (só aviso prévio)."},
{pergunta:"Qual a melhor prática de cross-sell no pós-venda?",opcoes:["Nada","PF que tem CNPJ → migrar para PJ; PJ que quer ampliar → incluir consanguíneos","Cancelar e revender","Só vender odonto"],correta:1,explica:"Cross-sell: cliente PF com CNPJ pode migrar para PJ (mais barato); cliente PJ pode ampliar incluindo consanguíneos. E sempre peça indicações."}
]}
];

/* =====================================================================
   AMIL — Treinamento Comercial PME (PJ) · Fonte: manual oficial v2.0
   ===================================================================== */
const AMIL=[
{id:1,titulo:"A Amil e os Planos PME",desc:"Por que vender Amil em 2026, o que é PME e os requisitos de contratação.",modulos:[
{id:1,num:1,tempo:"6 min",titulo:"Por que vender Amil em 2026",html:`
<p>A <em>Amil</em> não é mais a mesma de alguns anos atrás. Desde a aquisição por José Seripieri Filho (Junior, fundador da Qualicorp) no fim de 2024, passa por reestruturação completa: portfólio renovado, melhoria de rede, novos produtos competitivos e foco no cliente.</p>
<ul>
<li>Em 2025, cresceu <strong>15%</strong> em base de beneficiários (média do setor: 2%/ano).</li>
<li>Só no 1º bimestre de 2026: <strong>43 mil novos beneficiários</strong>.</li>
<li><strong>70% dessas vendas são PME de 2 a 99 vidas</strong> — nosso campo de atuação.</li>
<li>Voltou à liderança nacional em vendas; em mar/2026 lançou o <strong>Amil Black II</strong>.</li>
</ul>
<div class="callout key"><p>Quando uma operadora cresce com saúde financeira, os reajustes ficam mais previsíveis, a rede melhora, os processos aceleram e as comissões chegam em dia. Vender Amil hoje é apostar em uma operadora em ascensão.</p></div>
<h3>O que é um plano PME?</h3>
<p>PME = Pequenas e Médias Empresas. Na Amil, é destinado a empresas de <strong>2 a 99 beneficiários</strong>.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Termo</th><th>Significado</th></tr></thead><tbody>
<tr><td>Titular</td><td>Funcionário, sócio ou diretor que contrata</td></tr>
<tr><td>Dependente</td><td>Cônjuge, filho ou enteado do titular</td></tr>
<tr><td>Agregado</td><td>Pai, mãe, sogros, irmãos, sobrinhos, neto, genro, nora — só na implantação, exige o titular/filho no plano</td></tr>
<tr><td>Vida</td><td>Cada pessoa cadastrada (1 vida = 1 pessoa)</td></tr>
</tbody></table></div>`},
{id:2,num:2,tempo:"5 min",titulo:"Requisitos e empresas não aceitas",html:`
<h3>Requisitos mínimos</h3>
<ul>
<li>Mínimo de 2 beneficiários, sendo pelo menos 1 titular.</li>
<li>Empresa com CNPJ ativo na Receita Federal.</li>
<li>Para MEI: o sócio/proprietário OBRIGATORIAMENTE adere ao plano.</li>
<li>MEI, ME e EPP: CNPJ com mínimo de <strong>180 dias</strong>. Sociedade Limitada: mínimo <strong>60 dias</strong>.</li>
<li>Idade limite do beneficiário: <strong>69 anos, 11 meses e 29 dias</strong> (na implantação).</li>
</ul>
<div class="callout warn"><h4>Idade limite — cuidado crítico</h4><p>Se o beneficiário fizer 70 anos durante a análise da proposta, ele NÃO entra mais. Nunca deixe propostas com pendências se alguém está chegando aos 70 anos — resolva tudo antes!</p></div>
<div class="callout internal"><h4>Empresas NÃO aceitas pela Amil</h4><p>Empresa Pública, União, Estados, Municípios, Economia Mista, Autarquias, Fundações Públicas, Consórcios Públicos, Sistema "S" (SESI, SENAI, SENAC…), CAEPF sem CNPJ, Sociedade em Conta de Participação, empresas de segurança armada e de motoboy/delivery.</p></div>`}
],quiz:[
{pergunta:"Quantas vidas define um contrato PME na Amil?",opcoes:["1 a 10","2 a 99 beneficiários","30 a 99","100+"],correta:1,explica:"PME na Amil = 2 a 99 beneficiários, sendo pelo menos 1 titular. É o segmento que concentra 70% das vendas atuais."},
{pergunta:"Qual a idade limite do beneficiário na implantação?",opcoes:["59 anos","64 anos","69 anos, 11 meses e 29 dias","Sem limite"],correta:2,explica:"O limite é 69a 11m 29d. Se completar 70 anos durante a análise, não entra mais — por isso nunca deixe pendências nesse caso."},
{pergunta:"Qual o tempo mínimo de CNPJ para MEI/ME/EPP?",opcoes:["30 dias","60 dias","180 dias","1 ano"],correta:2,explica:"MEI, ME e EPP precisam de CNPJ com no mínimo 180 dias; Sociedade Empresária Limitada, mínimo 60 dias."}
]},

{id:2,titulo:"Produtos Amil",desc:"As linhas Bronze (regional), Nacional, Selecionada e Black, e a rede credenciada.",modulos:[
{id:3,num:3,tempo:"8 min",titulo:"As linhas de produtos",html:`
<h3>Linha Amil Regional (Bronze) — Entrada</h3>
<p>Planos regionais, sem reembolso, com coparticipação. No Sul, o <strong>Bronze PR</strong> cobre 14 cidades (Curitiba, RM e Litoral).</p>
<div class="callout arg"><p>O Bronze PR disputa diretamente com Clinipam, Hapvida e Paraná Clínicas. Em Curitiba atende Vita Batel, Vita BR, Erasto Gaertner, Erastinho, Hospital Pilar, Nossa Senhora das Graças e Hospital da Criança Brígida — sem encaminhamento.</p></div>
<h3>Linha Amil Nacional — Intermediária</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Produto</th><th>Acomodação</th><th>Reembolso</th><th>Destaque</th></tr></thead><tbody>
<tr><td>Prata</td><td>QC e QP</td><td class="no">Não</td><td>Entrada nacional, preço competitivo</td></tr>
<tr><td>Ouro</td><td>QC e QP</td><td>Consultas + Honorários</td><td>Primeiro com reembolso</td></tr>
<tr><td>Platinum</td><td>QP</td><td>Consultas + Honorários</td><td>Inclui Sírio-Libanês SP + Samaritanos</td></tr>
</tbody></table></div>
<h3>Linha Selecionada — Premium com reembolso amplo</h3>
<p>S380, S450, S750, S2500, S6500 Black: ~17% mais cara que a Linha Amil, mas com <strong>reembolso em tudo</strong> (exames, procedimentos, terapias). Recomendada apenas quando o cliente faz questão de reembolso amplo.</p>
<h3>Linha Amil Black — Premium absoluto</h3>
<p>Compete com Care Plus, Omint, Bradesco Náutica, SulAmérica Prestige.</p>
<ul>
<li><strong>Black I:</strong> nacional, apartamento, reembolso em 3 níveis, retaguarda Einstein/Sírio/Samaritano, telemedicina, Amil Resgate, viagem internacional 300k USD, Dental Bronze Promo grátis por 12 meses.</li>
<li><strong>Black II</strong> ("melhor plano do mundo", mar/2026): tudo do Black I + reembolso de parto até ~R$ 50.000, concierge, check-up em 1 dia, consulta domiciliar, vacinas SBIM, viagem internacional + esportes, resgate aeromédico internacional, <strong>Dental Black gratuito</strong> (com implante/ortodontia), rede Black exclusiva e andar exclusivo no Sírio-Libanês.</li>
</ul>
<div class="callout tip"><h4>Siglas</h4><p>QC = Quarto Coletivo (enfermaria); QP = Quarto Privativo (apartamento); COPART = coparticipação; TP = coparticipação parcial (só terapias); PRC = Prazo Reduzido de Carência.</p></div>`},
{id:4,num:4,tempo:"6 min",titulo:"Rede credenciada e Total Care",html:`
<h3>Total Care — a rede própria da Amil</h3>
<p>Em 2024, a Amil firmou joint venture com o Grupo DASA. Hoje a rede <strong>Total Care</strong> tem 29 hospitais próprios. É nela que o beneficiário tem <strong>isenção de coparticipação nos primeiros 12 meses</strong>.</p>
<div class="callout warn"><p>No Sul há apenas 1 hospital Total Care: Hospital Paraná, em Maringá. Em Curitiba, a unidade é o Amil Espaço Saúde de São José dos Pinhais (consultas).</p></div>
<h3>Rede em Curitiba por produto</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>A partir de…</th><th>Hospitais em Curitiba</th></tr></thead><tbody>
<tr><td>Bronze PR</td><td>Vita Batel, Vita BR, Erasto Gaertner, Erastinho, Hospital Pilar, N. S. das Graças, Pequeno Príncipe/Brígida</td></tr>
<tr><td>Prata</td><td>Tudo do Bronze + Marcelino Champagnat</td></tr>
<tr><td>Ouro</td><td>Tudo anterior + Hospital Pilar Sugisawa, Vita Curitiba</td></tr>
<tr><td>Platinum</td><td>Tudo anterior + Vita Curitiba (premium), Hospital Constantino</td></tr>
<tr><td>Black I/II</td><td>Tudo anterior + retaguarda Einstein/Sírio/Samaritano + rede Black exclusiva</td></tr>
</tbody></table></div>
<div class="callout tip"><h4>Pequeno Príncipe sem encaminhamento</h4><p>Na Amil você NÃO precisa de encaminhamento para levar a criança no Pequeno Príncipe ou no Hospital Brígida — chega direto. Diferencial para famílias com crianças.</p></div>
<div class="callout internal"><h4>Erro comum do corretor</h4><p>No app, use <strong>"Rede Credenciada"</strong> (mostra todos os prestadores), não <strong>"Agendamento"</strong> (só unidades próprias — no Sul aparece quase nada). Muitos acham que "não tem rede" por entrar na opção errada.</p></div>`}
],quiz:[
{pergunta:"O que é a rede Total Care da Amil?",opcoes:["Uma seguradora","A rede própria (29 hospitais, JV com DASA) onde há isenção de coparticipação nos 12 primeiros meses","Um plano odontológico","Um app"],correta:1,explica:"Total Care é a rede própria (29 hospitais, joint venture com o Grupo DASA). Nos primeiros 12 meses, o uso nessa rede tem isenção de coparticipação."},
{pergunta:"No app da Amil, qual opção o corretor deve orientar a usar para ver a rede?",opcoes:["Agendamento","Rede Credenciada (mostra todos os prestadores)","Telemedicina","Carteirinha"],correta:1,explica:"Use 'Rede Credenciada' (todos os prestadores). 'Agendamento' mostra só unidades próprias e, no Sul, aparece quase nada — gera a falsa impressão de 'sem rede'."},
{pergunta:"O Bronze PR concorre diretamente com quais operadoras no Sul?",opcoes:["Care Plus e Omint","Clinipam, Hapvida e Paraná Clínicas","Apenas Unimed","Bradesco Náutica"],correta:1,explica:"O Bronze PR (entrada, regional) disputa com Clinipam, Hapvida e Paraná Clínicas, com a vantagem de marca forte e hospitais como Vita e Pequeno Príncipe sem encaminhamento."}
]},

{id:3,titulo:"Coparticipação e Contratação",desc:"Os tipos de coparticipação, isenção de 12 meses, portes e coligadas.",modulos:[
{id:5,num:5,tempo:"6 min",titulo:"Coparticipação na prática",html:`
<p>Coparticipação é o valor pago a cada uso (consulta, exame, procedimento, terapia) — cobrado junto no boleto do mês seguinte, <strong>não além da mensalidade</strong>.</p>
<h3>Os 3 tipos</h3>
<ul>
<li><strong>Mista (30% a 40%):</strong> a mais comum. 30% em consultas/exames; 40% em PS e terapias. Sempre com teto (limitador).</li>
<li><strong>Total (40%):</strong> só em MG, PR, SC e RS. Cobra 40% em tudo. Mensalidade até 23% mais barata.</li>
<li><strong>Parcial em terapias (TP):</strong> sem coparticipação em consultas, exames e internações; só 40% em terapias.</li>
</ul>
<div class="callout key"><h4>Como funciona o limitador (teto)</h4><p>Ex. no Prata: consulta de PS custou R$ 500, coparticipação 40% = R$ 200, mas o teto é R$ 90 → o cliente paga só R$ 90.</p></div>
<div class="callout tip"><h4>Internação = valor fixo</h4><p>Diferente de outras operadoras (que cobram diária), na Amil a internação tem valor FIXO. Cliente Prata internou para o parto: paga R$ 220, não importa se ficou 1 dia ou 1 semana.</p></div>
<h3>Isenção de coparticipação (12 meses)</h3>
<p>Nos primeiros 12 meses, há isenção ao usar a Rede Total Care / Amil Espaço Saúde (consultas, exames, procedimentos e — a partir do Prata — internação). <strong>Terapias nunca têm isenção.</strong> Quimio, radio e diálise nunca têm coparticipação (regra ANS).</p>`},
{id:6,num:6,tempo:"6 min",titulo:"Porte e modalidade de contratação",html:`
<h3>Porte I (2 a 29 vidas)</h3>
<p>Segmento mais comum. Tem <strong>Tabela MEI</strong> (geralmente mais cara) e <strong>Tabela Demais Empresas</strong> (mais barata). Tem carência, mas pode ser reduzida via PRC.</p>
<h3>Porte II (30 a 99 vidas)</h3>
<p>Aparece o conceito <strong>Compulsório vs. Livre Adesão</strong>:</p>
<ul>
<li><strong>Compulsória (mais barata):</strong> inclusão de quase 100% do quadro (sócios + CLT do e-Social), ou via plano anterior (encampação, 12+ meses, intervalo máx. 30 dias).</li>
<li><strong>Livre Adesão (mais cara):</strong> quando não há inclusão de 100%.</li>
</ul>
<div class="callout key"><h4>Porte II = sem carência!</h4><p>Uma grande vantagem: o contrato é isento de carência na implantação. Inclusões posteriores têm 30 dias de janela após a admissão para entrar também sem carência.</p></div>
<h3>Coligadas (múltiplos CNPJs)</h3>
<p>Vários CNPJs do mesmo grupo em um contrato. Precisa de empresa "mãe" (não pode ser MEI/ME/EPP), vínculo societário/familiar/prestação de serviço, cada CNPJ com fatura individual. Pode mesclar produtos entre coligadas. Unificação de faturas só se todos os CNPJs forem do mesmo estado, após 45 dias da implantação.</p>
<div class="callout tip"><h4>Mesclagem de produtos</h4><p>Diretores no Black II, gerentes no Platinum, demais no Prata. ÚNICA REGRA: o dependente sempre segue o plano do titular.</p></div>`}
],quiz:[
{pergunta:"Na Amil, como é cobrada a coparticipação de internação?",opcoes:["Por diária","Valor FIXO total (independe dos dias internados)","40% sem teto","Não há"],correta:1,explica:"Diferente de outras operadoras, a internação tem valor FIXO. Cliente Prata paga R$ 220 para internar, fique 1 dia ou 1 semana — diferencial para gestantes e idosos."},
{pergunta:"Qual a grande vantagem do Porte II (30 a 99 vidas)?",opcoes:["Mais caro","Contrato isento de carência na implantação","Sem reembolso","Só apartamento"],correta:1,explica:"Porte II é isento de carência na implantação. Inclusões posteriores têm janela de 30 dias após a admissão para entrar sem carência."},
{pergunta:"A coparticipação Total (40% em tudo) está disponível em quais estados?",opcoes:["Todo o Brasil","Apenas MG, PR, SC e RS (mensalidade até 23% mais barata)","Só em SP","Só no Sul exceto PR"],correta:1,explica:"A coparticipação Total (40%) está disponível apenas em MG, PR, SC e RS, e costuma deixar a mensalidade até 23% mais barata."}
]},

{id:4,titulo:"Carências e PRC",desc:"As regras de carência, os 4 PRCs, congêneres e documentação para redução.",modulos:[
{id:7,num:7,tempo:"7 min",titulo:"Carência e os 4 PRCs",html:`
<h3>Regras gerais</h3>
<ul>
<li>Porte I (2-29): tem carência, reduzível via PRC. Porte II (30+): sem carência na implantação.</li>
<li>Obstetrícia/neonatologia: <strong>sempre 300 dias</strong> (mesmo com PRC). Terapias: sempre 180 dias. Urgência/emergência: 24h.</li>
</ul>
<h3>Os 4 PRCs (Prazos Reduzidos de Carência)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>PRC</th><th>Quem se enquadra</th><th>Resultado</th></tr></thead><tbody>
<tr><td>607</td><td>Sem plano anterior / não cumpriu tempo mínimo</td><td>Redução parcial</td></tr>
<tr><td>608</td><td>Não congênere 3-12 meses OU congênere 3-5 meses</td><td>Redução moderada</td></tr>
<tr><td>609</td><td>Não congênere acima de 12 meses</td><td>Carência muito reduzida</td></tr>
<tr><td>617</td><td>Congênere acima de 6 meses</td><td>Carência ZERO na maioria dos itens</td></tr>
</tbody></table></div>
<p>No <strong>PRC 617</strong> (congênere 6+ meses), as carências ficam praticamente zeradas, exceto: quimio/radio/hemodiálise não relacionadas a preexistência (90 dias), terapias (180 dias) e obstetrícia/neonatologia (300 dias).</p>
<div class="callout warn"><h4>Prazo crítico — 60 dias!</h4><p>Diferente da maioria (30 dias), a Amil aceita reaproveitamento de carência até <strong>60 dias</strong> da data de exclusão do plano anterior. O beneficiário precisa ter saído ATIVO (não por inadimplência).</p></div>
<h3>CPT</h3>
<p>Doença preexistente declarada gera CPT: suspensão de 24 meses para cirurgias, UTI e alta complexidade <em>relacionados</em> àquela doença. CPT e carência correm em paralelo.</p>`},
{id:8,num:8,tempo:"5 min",titulo:"Congêneres e documentação",html:`
<h3>Atenção à Unimed</h3>
<div class="callout internal"><p>A Unimed só é congênere da Amil em <strong>planos nacionais</strong>. Unimed Curitiba regional é congênere apenas do Bronze. Sempre confira a abrangência antes de prometer redução de carência.</p></div>
<h3>Documentação para redução de carência</h3>
<ul>
<li><strong>De plano coletivo empresarial:</strong> carta de permanência + cópia da carteirinha (titular e dependentes).</li>
<li><strong>De PF ou adesão:</strong> carta de permanência + carteirinha + 3 últimos boletos com comprovantes (ou declaração de quitação).</li>
<li><strong>De plano internacional:</strong> tradução juramentada da carta (obrigatória por lei).</li>
</ul>
<div class="callout tip"><p>Carteirinha esquecida? O cliente emite o Comprovante de Dados Cadastrais do Consumidor no site da ANS (ans.gov.br/COMPROVA).</p></div>
<h3>Inclusões após a implantação</h3>
<ul>
<li>Recém-contratado (Porte II): em até 30 dias da admissão = sem carência.</li>
<li>Recém-nascido: 30 dias do nascimento. Casamento/União Estável: 30 dias do evento.</li>
<li>O prazo conta a partir da <strong>data de vencimento</strong> do boleto, não do pagamento.</li>
</ul>
<div class="callout warn"><p>Cuidado: tentar "incluir dia 10 para não ter prorata" pode jogar a pessoa para fora dos 30 dias e gerar carência total. Oriente boleto com vencimento no dia 1º.</p></div>`}
],quiz:[
{pergunta:"Qual PRC zera a carência na maioria dos itens?",opcoes:["PRC 607","PRC 608","PRC 617 (congênere acima de 6 meses)","Nenhum zera"],correta:2,explica:"O PRC 617 (cliente vindo de operadora congênere com 6+ meses) zera a carência na maioria dos itens, exceto quimio/radio (90d), terapias (180d) e obstetrícia (300d)."},
{pergunta:"Qual o prazo da Amil para reaproveitamento de carência após a exclusão do plano anterior?",opcoes:["30 dias","60 dias (diferencial — maioria aceita 30)","90 dias","Não aceita"],correta:1,explica:"A Amil aceita até 60 dias da data de exclusão (a maioria aceita 30). O beneficiário precisa ter saído ativo, não por inadimplência."},
{pergunta:"A Unimed é congênere da Amil em quais casos?",opcoes:["Sempre","Apenas em planos NACIONAIS (a Unimed Curitiba regional só é congênere do Bronze)","Nunca","Só no Black"],correta:1,explica:"A Unimed só é congênere em planos nacionais. A Unimed Curitiba regional é congênere apenas do Bronze — confira a abrangência antes de prometer redução."}
]},

{id:5,titulo:"Cotação, Aditivos e Dental",desc:"Passo a passo da cotação, faixas etárias, aditivos para vender mais e a linha Dental.",modulos:[
{id:9,num:9,tempo:"6 min",titulo:"Cotação e faixas etárias",html:`
<p>A cotação é feita pela <strong>Plataforma Comercial</strong> (comercial.amil.com.br), só para corretores habilitados.</p>
<h3>Informações necessárias</h3>
<p>CNPJ ativo + Contrato Social; lista de beneficiários (nome, CPF, nascimento, titular/dependente); CEP da empresa; se vem de outro plano (operadora, início e último pagamento); acomodação e coparticipação desejadas.</p>
<h3>Montando a cotação</h3>
<ol>
<li>Crie a Oportunidade com o CNPJ (sistema valida natureza jurídica, tempo, CNAE).</li>
<li>Selecione o produto e o tipo de coparticipação.</li>
<li>Insira os beneficiários (CPF + nascimento) — o sistema calcula por faixa etária.</li>
<li>Inclua aditivos, gere a proposta em PDF e envie para assinatura eletrônica.</li>
</ol>
<div class="callout warn"><h4>O pulo dos 59 anos</h4><p>Na Tabela I, ao completar 59 anos o reajuste por faixa é de <strong>+75%</strong> sobre o valor anterior. Sempre alerte o cliente. Os reajustes por faixa são independentes do reajuste anual.</p></div>
<div class="callout tip"><p>O preço final é SEMPRE o gerado pela plataforma (a tabela do Kit Corretor é referencial). Em coligadas, só é calculado após inserir todas as empresas.</p></div>`},
{id:10,num:10,tempo:"6 min",titulo:"Aditivos e linha Dental",html:`
<h3>Aditivos — vender mais por contrato</h3>
<ul>
<li><strong>Atendimento Pré-Hospitalar:</strong> R$ 6,00/vida/mês (Curitiba, Araucária e SJP) — ambulância básica em casa.</li>
<li><strong>Seguro Viagem Internacional:</strong> a partir de R$ 5,00/vida/mês (carência de 10 dias). Ex.: 300k USD por R$ 24,58/vida.</li>
<li><strong>Amil Resgate Saúde:</strong> R$ 24,90/titular/mês (a partir do Prata) — transporte inter-hospitalar terrestre ou aéreo. Embutido do S2500 em diante.</li>
<li><strong>Dental Bronze Promo:</strong> grátis por 12 meses ao contratar o plano (até jun/2026); depois R$ 14,50/vida.</li>
</ul>
<div class="callout arg"><h4>Use como argumento</h4><p>A Amil não divulga publicamente que o Dental Bronze Promo é gratuito por 12 meses — é estratégico para o corretor usar como diferencial e ganhar o cliente de um concorrente.</p></div>
<h3>Linha Dental PME (5 planos)</h3>
<p>Bronze Doc (essencial), Prata Clareia (clareamento), Ouro Orto (aparelho), Ouro Prot (próteses), Platinum (combo completo). A nova grade traz próteses em material idêntico ao dente natural.</p>
<div class="callout warn"><p>A grade Dental PME não tem mais plano com implante — exceto o <strong>Dental Black</strong>, gratuito no Black II médico, que cobre implante, ortodontia e clareamento a laser.</p></div>`}
],quiz:[
{pergunta:"Qual o reajuste por faixa ao completar 59 anos na Tabela I?",opcoes:["+25%","+50%","+75% sobre o valor anterior","Não há"],correta:2,explica:"Na Tabela I, ao completar 59 anos o reajuste por faixa é de +75%. Sempre alerte o cliente — é independente do reajuste anual do contrato."},
{pergunta:"Por que o Dental Bronze Promo é um bom argumento de venda?",opcoes:["É pago","É gratuito por 12 meses (até jun/2026) e a Amil não divulga isso publicamente — diferencial do corretor","Cobre implante","É obrigatório"],correta:1,explica:"O Dental Bronze Promo vem grátis por 12 meses ao contratar o plano (campanha até jun/2026). Como não é divulgado, o corretor usa como diferencial para ganhar o cliente."},
{pergunta:"O preço final da cotação é definido por quê?",opcoes:["Pela tabela do Kit Corretor","Sempre pela Plataforma Comercial (a tabela é só referencial)","Pelo corretor","Pelo cliente"],correta:1,explica:"O preço final é sempre o gerado pela Plataforma Comercial, que considera o perfil etário completo. A tabela do Kit Corretor é apenas referencial."}
]},

{id:6,titulo:"Diferenciais, Cancelamento e Pós-Venda",desc:"Argumentos vs. concorrentes, regras de cancelamento, pós-venda e checklist.",modulos:[
{id:11,num:11,tempo:"6 min",titulo:"Diferenciais e comparativos",html:`
<h3>Diferenciais da Amil</h3>
<ul>
<li><strong>Velocidade de liberação:</strong> filosofia "liberar e depois ver" é mais barata que enfrentar NIP/judicial. Parto via PS é liberado direto pelo hospital.</li>
<li><strong>Retaguarda em hospitais premium:</strong> no Platinum+ é retaguarda COMPLETA (médico de plantão atende qualquer especialidade 24h), não só consulta de PS.</li>
<li><strong>Internação com valor fixo</strong> de coparticipação (não por diária).</li>
<li><strong>Marca em ascensão:</strong> brasileira de novo, líder em vendas em 2025/2026, cresceu 15%.</li>
</ul>
<div class="callout arg"><h4>vs. Unimed</h4><p>A Amil tem rede própria (Total Care), libera mais rápido, cresce mais e tem reembolso a partir do Ouro (a Unimed só nos planos mais altos).</p></div>
<div class="callout arg"><h4>vs. Bradesco / SulAmérica / Care Plus / Omint</h4><p>O Black II tem mais cobertura que Bradesco Náutica/SulAmérica Prestige; cliente economiza até R$ 26 mil/ano migrando da SulAmérica para o Platinum, com andar exclusivo no Sírio, concierge e check-up em 1 dia.</p></div>`},
{id:12,num:12,tempo:"5 min",titulo:"Cancelamento e situações especiais",html:`
<h3>Regras de cancelamento</h3>
<ul>
<li>Vigência mínima: 12 meses. Aviso prévio: 60 dias. Pode solicitar a partir do 10º mês (cancela no 13º).</li>
<li>Multa rescisória (antes do prazo): 3× a última fatura. Morte do titular: isento de multa.</li>
</ul>
<div class="callout internal"><h4>Garanta a aprovação no concorrente ANTES</h4><p>Nunca solicite cancelamento do contrato Amil antes da aprovação formal na nova operadora. Dependendo do score (sinistralidade), a Amil pode não reverter o cancelamento — e o cliente fica sem plano. Caso real: cliente cancelou, a outra negou, e a Amil não aceitou voltar atrás.</p></div>
<h3>Situações especiais</h3>
<ul>
<li><strong>Recém-nascido:</strong> 30 dias para inclusão sem carência (inclui adotado com guarda).</li>
<li><strong>Cônjuge:</strong> certidão de casamento, união estável (e-Notariado/cartório), filho em comum ou carta de convivência marital reconhecida. Vale para casais homossexuais.</li>
<li><strong>Fora da rede / sem rede na região:</strong> a Amil libera reembolso integral para consulta eletiva (por lei), mesmo em planos sem reembolso contratual.</li>
<li><strong>Risco de vida fora da abrangência:</strong> o procedimento é liberado (infarto, AVC, etc.).</li>
</ul>`},
{id:13,num:13,tempo:"5 min",titulo:"Pós-venda, ferramentas e checklist",html:`
<h3>Pós-venda</h3>
<ul>
<li>Prazo de implantação: até 90 dias (mínimo 8 dias úteis sem pendências; resolva pendências em 48h).</li>
<li>Boas-vindas, orientar o app (Rede Credenciada, não Agendamento), explicar telemedicina e coparticipação.</li>
<li>Crescimento Porte I → II (4+ meses acima de 30 vidas): mensalidade mais barata e sem carência para novas inclusões.</li>
<li>Follow-up em 30 dias, revisão anual antes do aniversário, solicitar indicações.</li>
</ul>
<h3>Ferramentas e canais</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Ferramenta</th><th>Para quê</th></tr></thead><tbody>
<tr><td>Plataforma Comercial</td><td>Cotações — comercial.amil.com.br</td></tr>
<tr><td>Kit Corretor</td><td>Manuais, redes, tabelas — kitcorretoramil.com.br</td></tr>
<tr><td>App Amil Cliente</td><td>Beneficiário: rede, telemedicina, carteirinha</td></tr>
<tr><td>Central Corretor</td><td>3004-1022 / 0800 721 1022</td></tr>
<tr><td>Gestora PME Sul</td><td>Thalita (PR, SC, RS)</td></tr>
</tbody></table></div>
<h3>Checklist essencial</h3>
<p><strong>Antes:</strong> CNPJ ativo, natureza jurídica e CNAE aceitos, tempo de abertura, lista completa, ninguém perto dos 70, rede na região. <strong>No fechamento:</strong> Contrato Social, carta de permanência + carteirinhas, Declaração de Saúde, assinatura eletrônica. <strong>Após:</strong> boas-vindas, app, CRM (Pipedrive), follow-up 30 dias, indicação.</p>
<div class="callout key"><h4>Contatos PlaneCorp</h4><p>🌐 www.planecorp.com.br · 📷 @planecorp · 💬 (41) 9 9990-2288</p></div>`}
],quiz:[
{pergunta:"Por que NUNCA cancelar o contrato Amil antes de ter aprovação na nova operadora?",opcoes:["Por causa da multa","Porque, dependendo do score (sinistralidade), a Amil pode não reverter e o cliente fica sem plano","Por causa do app","Não há risco"],correta:1,explica:"Dependendo do score de utilização, a Amil não volta atrás no cancelamento. Caso real: cliente cancelou, a outra negou, e ele ficou sem plano. Garanta a aprovação formal antes."},
{pergunta:"Cliente Prata se mudou para uma cidade sem rede Amil. O que acontece com consulta eletiva?",opcoes:["Fica sem cobertura","A Amil libera reembolso integral (por lei), mesmo em plano sem reembolso contratual","Tem que cancelar","Paga particular sempre"],correta:1,explica:"Sem rede na região, a Amil libera reembolso integral para consulta eletiva — é obrigatório por lei, mesmo em planos sem reembolso contratual."}
]}
];

/* ===================== CURSOS + EXAMES (multi-operadora) ===================== */
function _buildExam(curso){
  var qs=[];
  curso.partes.forEach(function(p){(p.quiz||[]).forEach(function(q){qs.push(q);});});
  return qs;
}

/* =====================================================================
   DO BÁSICO AO AVANÇADO — Formação completa do corretor
   Fontes: Manual de Treinamento PlaneCorp V2.0 (mar/2026) + Playbook do
   Corretor (abr/2026). Conteúdo mesclado e complementado, sem redução.
   ===================================================================== */
const BASICO=[

/* ===================== PARTE 1 ===================== */
{id:1,titulo:"O Mercado e os Fundamentos",desc:"O mercado brasileiro, a regulação da ANS, os tipos de contratação (PF, PJ, Adesão), segmentação e área de atendimento.",modulos:[

{id:1,num:1,tempo:"8 min",titulo:"O mercado de planos de saúde no Brasil",html:`
<p>O Brasil possui o <strong>segundo maior sistema de saúde privada do mundo</strong>. Em dezembro de 2025, o país alcançou <strong>53,18 milhões de beneficiários</strong> em planos de assistência médica e <strong>35,58 milhões</strong> em planos exclusivamente odontológicos (ANS). Isso significa que apenas <strong>25% da população</strong> tem plano de saúde — os outros 75% são o seu mercado.</p>
<div class="callout quote">"Quando comecei a trabalhar, uma amiga falou: 'coitado, quem que não tem plano de saúde hoje?' Mas tem muita gente. Você pode vender pra 3/4 do Brasil."<span class="who">— Do treinamento ao vivo</span></div>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Indicador</th><th>Dado (2025/2026)</th></tr></thead><tbody>
<tr><td>Beneficiários assistência médica</td><td>53,18 milhões (dez/2025)</td></tr>
<tr><td>Beneficiários odontológico</td><td>35,58 milhões (dez/2025)</td></tr>
<tr><td>Planos coletivos empresariais</td><td>38,3 milhões — 72% do total</td></tr>
<tr><td>Planos individuais/familiares</td><td>8,5 milhões — 16%</td></tr>
<tr><td>Reajuste PF 2025-2026 (teto ANS)</td><td>6,06%</td></tr>
<tr><td>Operadoras médico-hospitalares ativas</td><td>~665</td></tr>
</tbody></table></div>
<h3>A ANS e a Lei 9.656/98</h3>
<p>Antes de 1998, planos não eram regulamentados — você podia contratar sem cobertura para cirurgias, partos ou internações. Após a <strong>Lei 9.656/98</strong>, todos os planos, do mais barato ao mais caro, têm <em>exatamente a mesma cobertura básica obrigatória</em>: consultas, exames, terapias, cirurgias e internações. A diferença está apenas nos adicionais: rede credenciada, tipo de acomodação, reembolso e área geográfica.</p>
<p>A <strong>ANS</strong> (Agência Nacional de Saúde Suplementar) define as 10 faixas etárias de preço, os limites de reajuste para planos individuais, o Rol de Procedimentos obrigatórios e as regras de carência e portabilidade. Acompanhe sempre <a href="https://gov.br/ans" target="_blank" rel="noopener">gov.br/ans</a>.</p>
<h3>Operadora vs. Seguradora — a diferença crucial</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Operadora (ex: Unimed, Clinipam)</th><th>Seguradora (ex: SulAmérica, Bradesco Saúde)</th></tr></thead><tbody>
<tr><td>Pode ter rede própria · Pode vender diretamente · Reajuste típico: 8 a 14%</td><td>NÃO pode ter rede própria · Obrigada a ter reembolso · Por lei só vende por corretor · Reajuste típico: 18 a 23%</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Impacto comercial</h4><p>Seguradoras como SulAmérica e Bradesco SEMPRE vão incentivar muito o corretor — porque ele é o único canal de venda delas por lei. Isso significa comissões maiores e suporte prioritário.</p></div>
<h3>Titular, Titular Financeiro e Dependente</h3>
<ul>
<li><strong>Titular:</strong> quem usa o plano e tem o vínculo principal (CPF/CNPJ).</li>
<li><strong>Titular Financeiro:</strong> quem paga — pode ser a mesma pessoa ou não (ex.: pai paga o plano do filho).</li>
<li><strong>Dependente:</strong> familiar vinculado ao titular (na maioria dos casos, filhos).</li>
</ul>
<div class="callout internal"><h4>Caso real — erro que cancela plano</h4><p>Uma corretora colocou o titular financeiro como titular do plano. O contrato foi cancelado. SEMPRE verifique quem vai USAR e quem vai PAGAR — são campos diferentes no sistema.</p></div>`},

{id:2,num:2,tempo:"9 min",titulo:"Tipos de contratação: PF, PJ e Adesão",html:`
<p>As três formas de contratar têm regras completamente diferentes. Dominar isso é o primeiro passo.</p>
<h3>Pessoa Física (PF)</h3>
<p>Contrato direto entre o CPF e a operadora. Não exige vínculo com empresa. Representa <strong>~10% das vendas</strong>.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Vantagens</th><th>Desvantagens</th></tr></thead><tbody>
<tr><td>Cancelamento bilateral — operadora NÃO pode cancelar · Reajuste regulado pela ANS (6,06% em 2025-2026) · Desconto familiar progressivo</td><td>30 a 40% mais caro que PJ · Operadoras reduzindo oferta PF · Carências geralmente maiores</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Quando indicar PF — regra de ouro</h4><p>PF é a escolha certa para <strong>idosos e pessoas com tratamentos contínuos</strong>. A proteção contra cancelamento unilateral vale muito mais que a diferença de preço. Ex.: MediSênior — fatura iniciando em R$500-800, sem coparticipação.</p></div>
<h3>Pessoa Jurídica (PJ) — Empresarial</h3>
<p>Contrato entre um CNPJ ativo e a operadora. Mínimo de 2 vidas. Qualquer pessoa com CNPJ pode contratar. Representa <strong>~80% das vendas</strong>.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Vantagens</th><th>Desvantagens</th></tr></thead><tbody>
<tr><td>30–40% mais barato que PF · Muito mais opções de operadoras · Carências reduzidas/zeradas em campanhas · Maior flexibilidade (mix de produtos)</td><td>Operadora PODE cancelar após 12 meses (60 dias de aviso) · Sem teto de reajuste (sinistralidade) · Contrato mínimo 12 meses · Multa rescisória: 50% das parcelas restantes</td></tr>
</tbody></table></div>
<div class="callout warn"><h4>Alerta — reajuste PJ sem teto</h4><p>Diferente de PF, NÃO existe teto para reajuste empresarial. O aumento é baseado em quanto o grupo usou o plano. Já houve casos de 30%, 50% e até 90%. Isso é a principal porta de entrada para novos negócios — empresas insatisfeitas com reajuste abusivo.</p></div>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Faixa de vidas</th><th>Modelo de reajuste</th><th>Risco</th></tr></thead><tbody>
<tr><td>2 a 29 vidas</td><td>Guarda-chuva (pool nacional) — sinistro diluído entre todos os contratos do Brasil</td><td>Baixo — reajuste tende a ser menor</td></tr>
<tr><td>30 a 99 vidas</td><td>Sinistralidade da própria empresa</td><td>Médio — se o grupo usar muito, reajuste sobe</td></tr>
<tr><td>100+ vidas</td><td>Sinistralidade individual da empresa</td><td>Alto — totalmente baseado no uso do grupo</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Argumento comercial</h4><p>"Mesmo que o reajuste anual seja maior, você está pagando 30–40% menos por mês. Na linha do tempo, vai demorar MUITOS anos para que o custo acumulado do PJ alcance o do PF. Até lá, você já economizou uma fortuna."</p></div>
<h3>Coletivo por Adesão</h3>
<p>Contrato via administradora de benefícios (Vital, Extramed, Supermed, Qualicorp) vinculada a entidade de classe (OAB, CRM, CREA, sindicatos). Representa <strong>~10% das vendas</strong>.</p>
<p><strong>Cadeia:</strong> Pessoa → Administradora → Operadora. A administradora negocia tabela com a operadora, adiciona sua margem e oferece ao cliente.</p>
<div class="callout warn"><h4>Armadilha do reajuste por adesão</h4><p>O reajuste NÃO é na data que você entrou — é na data do contrato entre a administradora e a operadora. Ex.: administradora fechou contrato em 01/02. Você entrou em 01/12. Em fevereiro seguinte — apenas 2 meses depois — já vem o reajuste! Sempre avise o cliente.</p></div>
<div class="callout quote">"O único de adesão que é muito bom historicamente é a Vital (Unimed), porque eles têm um bom controle de sinistralidade. Os outros, dá 2-3 anos e vem um ajuste gigantesco. O adesão é bom no começo e horrível depois."<span class="who">— Do treinamento</span></div>
<h3>Comparativo completo</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Característica</th><th>Pessoa Física</th><th>Pessoa Jurídica</th><th>Adesão</th></tr></thead><tbody>
<tr><td>Vínculo</td><td>CPF direto c/ operadora</td><td>CNPJ direto c/ operadora</td><td>Via administradora/entidade</td></tr>
<tr><td>Preço</td><td>Mais alto (+30–40%)</td><td>Mais baixo</td><td>Intermediário</td></tr>
<tr><td>Reajuste</td><td>ANS — 6,06% (2025-2026)</td><td>Sinistralidade — sem teto!</td><td>20–25%/ano</td></tr>
<tr><td>Cancelamento</td><td>Bilateral — operadora NÃO pode</td><td>PODE após 12 meses</td><td>Operadora pode cancelar</td></tr>
<tr><td>Carências</td><td>Maiores</td><td>Reduzidas/zeradas</td><td>Variável</td></tr>
<tr><td>Taxa de adesão</td><td>Não tem</td><td>Não tem</td><td>Obrigatória</td></tr>
<tr><td>% das vendas</td><td>~10%</td><td>~80%</td><td>~10%</td></tr>
<tr><td>Ideal para</td><td>Idosos, tratamentos contínuos</td><td>Empresas, funcionários</td><td>Profissionais sem CNPJ</td></tr>
</tbody></table></div>`},

{id:3,num:3,tempo:"6 min",titulo:"Segmentação — o que o plano cobre",html:`
<p>Segmentação define <em>o QUE</em> o plano cobre. Você vai ver isso escrito nas tabelas de preço e precisa saber identificar para não vender o produto errado.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Segmentação</th><th>O que cobre</th><th>Cuidado</th></tr></thead><tbody>
<tr><td>Ambulatorial</td><td>Consultas médicas e exames</td><td>Raramente vendido sozinho — diferença de preço ~2% apenas</td></tr>
<tr><td>Hospitalar</td><td>Urgência, emergência, cirurgias, internação</td><td>Existe na SulAmérica — cliente SÓ tem hospital</td></tr>
<tr><td>Amb. + Hosp.</td><td>Consultas, exames, urgência, emergência, cirurgias</td><td>PADRÃO — o que você vende 99% das vezes</td></tr>
<tr><td>Obstétrica</td><td>Parto (normal/cesárea) + pré-natal + inclusão RN</td><td>Carência 300 dias. Parto urgência: 24h. RN: 30 dias sem carência</td></tr>
<tr><td>Odontológico</td><td>Limpeza, restauração, extração, canal, prótese</td><td>Pode ser contratado junto ou separado do saúde</td></tr>
</tbody></table></div>
<div class="callout warn"><h4>Armadilha da tabela de preços</h4><p>Quando você abrir uma tabela, vai ver "Ambulatorial + Hospitalar" ou apenas "Hospitalar". Se vender um plano "Hospitalar" achando que é completo, o cliente descobrirá que NÃO tem consultas nem exames. Isso gera processo, reclamação e perda total de credibilidade. SEMPRE confirme a segmentação antes de vender.</p></div>
<div class="callout key"><h4>Cenário de venda para gestantes</h4><p>1) Parto de urgência pode colocar mãe e bebê em risco — sem plano, depende do SUS. 2) Se o bebê nascer com complicações e precisar de UTI neonatal, tendo plano você inclui o bebê sem carência em até 30 dias. 3) Se a mãe não tem obstetrícia mas o pai tem, o bebê pode ser incluído no plano do pai sem carência.</p></div>`},

{id:4,num:4,tempo:"6 min",titulo:"Área de atendimento",html:`
<p>A área de atendimento define ONDE o plano funciona. Direciona operadoras completamente diferentes.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tipo</th><th>Cobertura</th><th>Preço</th><th>Quando indicar</th></tr></thead><tbody>
<tr><td>Regional</td><td>Curitiba e região metropolitana</td><td>Mais barato</td><td>Mora, trabalha e não viaja frequentemente</td></tr>
<tr><td>Estadual</td><td>Todo o estado (ex: Paraná)</td><td>Intermediário</td><td>Trabalha em várias cidades do mesmo estado</td></tr>
<tr><td>Multirregional</td><td>Vários estados (ex: PR+SC+SP+RJ)</td><td>Alto</td><td>Atividade em estados específicos</td></tr>
<tr><td>Nacional</td><td>Todo o território brasileiro</td><td>Mais caro</td><td>Viaja frequentemente ou tem residência em outro estado</td></tr>
</tbody></table></div>
<div class="callout warn"><h4>Pegadinha: "Nacional" que não é nacional</h4><p>Amil Prata Adesão — é classificada como "categoria nacional" mas a rede real é só Curitiba. Leia sempre as especificações de cada produto. Não prometa o que não existe. Esta armadilha já prejudicou vários corretores.</p></div>
<div class="callout key"><h4>Urgência nacional em planos regionais</h4><p>A maioria dos planos regionais oferece cobertura de urgência/emergência a nível nacional via rede Abrangente, mas limitada a <strong>12 horas</strong> de atendimento ambulatorial. Se o paciente for internado (risco de vida), a operadora DEVE cobrir integralmente. Nem todos os planos regionais têm isso — sempre confirme antes de vender.</p></div>`}

],quiz:[
{pergunta:"Após a Lei 9.656/98, qual a relação entre a cobertura do plano mais barato e do mais caro?",opcoes:["O mais caro cobre muito mais procedimentos","Têm exatamente a mesma cobertura básica obrigatória; muda rede, acomodação, reembolso e área","O mais barato não cobre cirurgias","Depende da operadora"],correta:1,explica:"Por lei, todos os planos têm a mesma cobertura básica obrigatória. A diferença está nos adicionais: rede credenciada, acomodação, reembolso e área geográfica."},
{pergunta:"Por que toda seguradora (SulAmérica, Bradesco) incentiva fortemente o corretor?",opcoes:["Porque paga menos imposto","Porque, por lei, o corretor é o único canal de venda dela","Porque tem rede própria","Porque não tem reembolso"],correta:1,explica:"Seguradora não pode vender direto — por lei só vende por corretor. Por isso oferece comissões maiores e suporte prioritário. Também é obrigada a ter reembolso."},
{pergunta:"Qual tipo de contratação representa ~80% das vendas e por quê?",opcoes:["PF — proteção contra cancelamento","PJ — 30-40% mais barato e mais opções","Adesão — preço intermediário","Todos empatados"],correta:1,explica:"PJ representa ~80% das vendas: é 30-40% mais barato que PF, tem mais opções de operadora e campanhas de carência zero. PF e Adesão ~10% cada."},
{pergunta:"A 'armadilha do reajuste por adesão' é:",opcoes:["O reajuste é sempre 6,06%","O reajuste cai na data do contrato administradora-operadora, não na data que o cliente entrou","Não existe reajuste em adesão","O reajuste é mensal"],correta:1,explica:"O reajuste do adesão não é no aniversário do cliente, mas na data do contrato entre administradora e operadora — o cliente pode pegar reajuste poucos meses após entrar."},
{pergunta:"Um cliente quer vender um plano só 'Hospitalar'. Qual o cuidado?",opcoes:["É o padrão, pode vender","Hospitalar NÃO inclui consultas nem exames — confirme sempre a segmentação","Hospitalar é mais completo","É igual a Amb.+Hosp."],correta:1,explica:"O plano só Hospitalar cobre internação/urgência, mas NÃO consultas nem exames. Vender achando que é completo gera processo. O padrão é Ambulatorial + Hospitalar."}
]},

/* ===================== PARTE 2 ===================== */
{id:2,titulo:"Coparticipação, Acomodação e Modalidades",desc:"Como a coparticipação funciona e onde incide, enfermaria vs. apartamento e a diferença entre compulsório e flex nos planos empresariais.",modulos:[

{id:5,num:5,tempo:"8 min",titulo:"Coparticipação — tudo que você precisa saber",html:`
<p>Coparticipação é o valor que o beneficiário paga <em>a cada vez que UTILIZA</em> o plano, além da mensalidade fixa. Funciona como uma franquia: mensalidade menor, mas você paga uma parte quando usa.</p>
<h3>Onde incide</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th>Como funciona</th><th>Exemplo prático</th></tr></thead><tbody>
<tr><td>Consultas</td><td>Valor fixo por consulta</td><td>R$ 40 a R$ 80 por consulta</td></tr>
<tr><td>Exames</td><td>Porcentagem (20–50%) com teto máximo</td><td>30% de um exame de R$ 200 = R$ 60 (teto R$ 220 Unimed PF)</td></tr>
<tr><td>Internamento</td><td>Valor fixo por evento OU por diária limitada</td><td>Bradesco: R$ 500 fixo — ficou 1 dia ou 1 ano</td></tr>
<tr><td>Terapias convencionais</td><td>% ou valor fixo por sessão</td><td>Fisioterapia, fonoaudiologia, psicologia</td></tr>
<tr><td>Terapias especiais</td><td>% ou fixo — geralmente mais caro</td><td>Terapias de alta complexidade</td></tr>
</tbody></table></div>
<h3>Modalidades de coparticipação</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Sem coparticipação</th><th>Parcial</th><th>Total</th></tr></thead><tbody>
<tr><td>Mensalidade mais alta. Zero custo adicional. Ideal para quem usa muito: idosos, famílias com crianças, crônicos.</td><td>Incide APENAS em terapias. Consultas, exames e internação são livres. Mais comum hoje.</td><td>Incide em consultas + exames + terapias + internamento. Mensalidade menor. Ideal para quem usa pouco.</td></tr>
</tbody></table></div>
<div class="callout warn"><h4>Cuidado extremo com a nomenclatura</h4><p>Cada operadora usa termos diferentes. "Coparticipação parcial" no Bradesco pode significar algo diferente na Clinipam. Quando ver "parcial", leia as regras específicas. Explicite ao cliente EXATAMENTE o que tem e o que não tem coparticipação.</p></div>
<div class="callout key"><h4>Pegadinha da urgência com coparticipação</h4><p>Urgência/emergência NÃO tem coparticipação por lei. Porém, na prática, o atendimento no pronto-socorro sem internação é classificado como "consulta ambulatorial" e TEM coparticipação. A coparticipação só cessa quando o paciente é efetivamente internado. Caso real: paciente com infarto fez consulta + exames — pagou coparticipação. Quando internado para cateterismo, cessou.</p></div>
<div class="callout arg"><h4>Script de diagnóstico</h4><p>"Você busca o plano para algum tratamento específico ou para prevenção?" Se prevenção/uso raro → coparticipação (economia na mensalidade). "Quantas consultas você fez no último ano?" — a maioria hesita e descobre: foi 2–3 vezes. Para esse perfil, a economia mensal compensa.</p></div>`},

{id:6,num:6,tempo:"5 min",titulo:"Acomodação — enfermaria vs. apartamento",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Característica</th><th>Enfermaria</th><th>Apartamento</th></tr></thead><tbody>
<tr><td>Quarto</td><td>Compartilhado (até 4 pacientes, na prática 2)</td><td>Individual privativo</td></tr>
<tr><td>Preço</td><td>Mais barato</td><td>Mais caro</td></tr>
<tr><td>Acompanhante</td><td>Obrigatório se menor de 18 ou maior de 60 anos (LEI)</td><td>Obrigatório se menor de 18 ou maior de 60 anos (LEI)</td></tr>
<tr><td>Demais adultos</td><td>Não tem direito garantido a acompanhante</td><td>Tem direito a acompanhante</td></tr>
</tbody></table></div>
<div class="callout key"><h4>Upgrade para apartamento — cálculo para gestantes</h4><p>É possível fazer upgrade a qualquer momento com <strong>6 meses de carência</strong> para usar. Para gestantes: diferença mensal × 10 meses = custo do upgrade via plano. Upgrade particular no hospital custa em média R$ 2.000–3.500. Na maioria dos casos, mudar o plano antes compensa.</p></div>
<div class="callout tip"><h4>Regra de mescla PJ</h4><p>Pessoa Física: não permite mescla — todos na mesma acomodação. Pessoa Jurídica: em alguns casos é possível mix — sócios com apartamento e funcionários com enfermaria. Verifique com a operadora caso a caso.</p></div>`},

{id:7,num:7,tempo:"6 min",titulo:"Compulsório vs. Flex (planos empresariais)",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Característica</th><th>Compulsório</th><th>Não-compulsório (Flex/Opcional)</th></tr></thead><tbody>
<tr><td>Quem entra</td><td>100% da massa elegível (todos)</td><td>Empresa escolhe quem entra</td></tr>
<tr><td>Preço</td><td>~10% mais barato</td><td>~10% mais caro</td></tr>
<tr><td>Risco operadora</td><td>Diluído — todo mundo entra (saudáveis + doentes)</td><td>Maior — seleção adversa (quem precisa mais, entra)</td></tr>
<tr><td>Nomenclatura</td><td>Amil / SulAmérica / Bradesco: "Compulsório"</td><td>SulAmérica: "Flex" · Bradesco: "Opcional" · Amil: "Adesão"</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Diferencial competitivo</h4><p>"Fique atento às campanhas! Operadoras como a Amil consideram tudo como compulsório em certas campanhas. Outras aceitam 80% da massa. Conhecer a campanha vigente evita perder venda. Se você não souber, apresenta preço de adesão. O concorrente apresenta compulsório. O cliente fecha com ele."</p></div>
<div class="callout warn"><h4>Confusão comum</h4><p>"Compulsório" NÃO significa que a empresa é obrigada a ter plano — significa que <strong>todos os elegíveis entram</strong>. É o que dilui o risco e barateia o preço.</p></div>`}

],quiz:[
{pergunta:"Na modalidade de coparticipação PARCIAL, onde incide a cobrança?",opcoes:["Em tudo (consultas, exames, internação)","Apenas em terapias — consultas, exames e internação são livres","Só em consultas","Em nada"],correta:1,explica:"Parcial = incide apenas em terapias. Total = incide em tudo. Sem coparticipação = mensalidade mais alta, zero custo ao usar."},
{pergunta:"A 'pegadinha da urgência com coparticipação' diz que:",opcoes:["Urgência nunca tem coparticipação","O PS sem internação é cobrado como consulta ambulatorial (tem coparticipação); só cessa ao internar","Urgência tem coparticipação dobrada","Só idosos pagam"],correta:1,explica:"Por lei urgência não tem coparticipação, mas o atendimento de PS sem internação é classificado como consulta ambulatorial e é cobrado. A coparticipação cessa quando o paciente é efetivamente internado."},
{pergunta:"O upgrade de enfermaria para apartamento tem qual carência para uso?",opcoes:["Imediato","30 dias","6 meses","300 dias"],correta:2,explica:"O upgrade pode ser feito a qualquer momento, mas tem 6 meses de carência para usar. Para gestantes, vale calcular: diferença mensal × 10 meses vs. upgrade particular (R$2.000-3.500)."},
{pergunta:"Por que o plano compulsório é ~10% mais barato que o flex?",opcoes:["Tem menos cobertura","Todos os elegíveis entram (saudáveis + doentes), diluindo o risco da operadora","É só para empresas grandes","Não tem carência"],correta:1,explica:"No compulsório 100% da massa entra, diluindo o risco (sem seleção adversa). No flex a empresa escolhe quem entra, gerando seleção adversa — por isso ~10% mais caro."}
]},

/* ===================== PARTE 3 ===================== */
{id:3,titulo:"Datas, Transição e Cancelamento",desc:"As 4 datas críticas de todo contrato, como conduzir uma transição sem deixar o cliente descoberto e as regras de cancelamento e exclusão.",modulos:[

{id:8,num:8,tempo:"6 min",titulo:"As 4 datas críticas",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Data</th><th>O que é</th><th>Atenção</th></tr></thead><tbody>
<tr><td>Assinatura</td><td>Quando o cliente assina/aceita o contrato</td><td>NÃO significa que está coberto! Depende da operadora.</td></tr>
<tr><td>Vigência</td><td>Quando a cobertura EFETIVAMENTE começa</td><td>Esta é a data que importa. Verifique para cada operadora.</td></tr>
<tr><td>Pagamento</td><td>Quando o cliente efetua o pagamento</td><td>Em Amil/SulAmérica/Bradesco PJ: vigência só inicia APÓS pagar</td></tr>
<tr><td>Vencimento</td><td>Dia fixo mensal para pagamento recorrente</td><td>Unimed PJ: escolhe entre dias 15, 20 ou 25</td></tr>
</tbody></table></div>
<div class="callout key"><h4>Regras por operadora — impacto direto</h4><p><strong>Unimed PF:</strong> assinou = vigência imediata. <strong>Unimed PJ:</strong> vigência na data escolhida. <strong>Amil / SulAmérica / Bradesco:</strong> assinou → boleto → pagou → vigência inicia só depois do pagamento. <strong>Clinipam / Paraná Clínicas:</strong> assinou, contrato já está ativo, cobrança vem depois.</p></div>`},

{id:9,num:9,tempo:"7 min",titulo:"Transição de planos — sem pagar dobrado e sem ficar descoberto",html:`
<p>A transição é o momento mais delicado da venda. O objetivo: trocar o plano sem que o cliente pague dois ao mesmo tempo ou fique sem cobertura nem por um dia.</p>
<div class="callout tip"><h4>Passo a passo da transição — caso real</h4>
<p><strong>Cenário:</strong> Cliente tem Amil PJ (vencimento dia 15). Quer ir para Unimed PJ.</p>
<ol>
<li>Levante as 4 datas do plano atual.</li>
<li>Levante as 4 datas do plano novo.</li>
<li>Solicite cotação/proposta do novo plano.</li>
<li>AGUARDE aprovação confirmada.</li>
<li>Só aí cancele o plano antigo.</li>
<li>Alinhe datas: vigência do novo começa antes ou no mesmo dia que o antigo termina.</li>
</ol>
<p>Hoje é 30/03 → cancelo Amil → cobertura até 30/05 → escolho vigência Unimed para 28/05 → 2 dias de sobreposição, zero dias descoberto.</p></div>
<div class="callout internal"><h4>Regra de ouro — nunca viole isso</h4><p>Só cancela o plano antigo APÓS ter certeza que a operadora nova aceitou o contrato. Nunca ao contrário! Já houve caso de corretora que orientou cancelar antes, operadora nova negou, e o cliente ficou sem plano. Formalize TUDO por escrito e guarde histórico. WhatsApp conta como documento.</p></div>
<div class="callout arg"><h4>Flexibilidade de datas</h4><p>Se o cliente não quiser sobreposição exata: "Posso agendar para 10/04, mas aí você paga dois planos por 20 dias. Ou para 10/05, mas fica 10 dias sem cobertura. Qual prefere?" Deixe o cliente escolher e documente a decisão por escrito.</p></div>`},

{id:10,num:10,tempo:"6 min",titulo:"Cancelamento e exclusão de beneficiários",html:`
<h3>Cancelamento de contrato</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tipo de plano</th><th>Pode cancelar imediatamente?</th><th>Aviso prévio</th><th>Multa</th></tr></thead><tbody>
<tr><td>Pessoa Física</td><td>SIM — liga e cancela no mesmo dia</td><td>Nenhum</td><td>Sem multa (bilateral)</td></tr>
<tr><td>Adesão</td><td>SIM — cancela de imediato</td><td>Nenhum</td><td>Variável (taxa de saída)</td></tr>
<tr><td>Pessoa Jurídica</td><td>NÃO — tem aviso prévio</td><td>2 meses</td><td>50% das parcelas restantes</td></tr>
</tbody></table></div>
<div class="callout warn"><h4>Multa PJ — alta</h4><p>A multa rescisória de PJ é 50% da soma das parcelas restantes para fechar o ano. Se faltam 8 meses e a mensalidade é R$2.000, a multa pode ser R$8.000. Isso é um argumento importante na hora de negociar a renovação ou a troca.</p></div>
<h3>Exclusão de beneficiário — diferente de cancelamento</h3>
<p>Exclusão é retirar UMA pessoa do plano sem cancelar o contrato inteiro. NÃO segue a regra dos 2 meses. Cada operadora tem seu prazo e ciclo:</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Amil</th><th>Hapvida</th><th>Unimed</th></tr></thead><tbody>
<tr><td>Exclusão imediata, sem data específica de corte</td><td>Conforme data de ciclo — exclusão vale até o final do mês</td><td>Sistema fecha no dia 26. Solicitação após dia 26 = exclusão só no mês seguinte</td></tr>
</tbody></table></div>
<div class="callout key"><h4>Regra prática da PlaneCorp</h4><p>Sempre verifique o ciclo de exclusão da operadora ANTES de orientar o cliente. Uma exclusão fora do prazo pode gerar cobrança extra de um mês. O beneficiário excluído mantém cobertura até o fim do mês — informe sempre isso ao cliente.</p></div>`}

],quiz:[
{pergunta:"Qual das 4 datas é a que realmente importa para saber quando a cobertura começa?",opcoes:["Assinatura","Vigência","Pagamento","Vencimento"],correta:1,explica:"A vigência é quando a cobertura efetivamente começa. Assinatura não significa estar coberto. Em Amil/SulAmérica/Bradesco PJ a vigência só inicia após o pagamento."},
{pergunta:"Qual a regra de ouro da transição entre planos?",opcoes:["Cancelar o antigo primeiro para economizar","Só cancelar o plano antigo APÓS a operadora nova aceitar o contrato","Manter os dois para sempre","Nunca documentar nada"],correta:1,explica:"Nunca cancele o antigo antes da aprovação do novo — já houve cliente que ficou sem plano porque a nova operadora negou. Formalize tudo por escrito (WhatsApp conta)."},
{pergunta:"Qual a multa rescisória de um contrato PJ cancelado antes dos 12 meses?",opcoes:["Sem multa","Uma mensalidade","50% das parcelas restantes para fechar o ano","100% do contrato"],correta:2,explica:"PJ tem aviso prévio de 2 meses e multa de 50% da soma das parcelas restantes. Se faltam 8 meses a R$2.000, a multa é R$8.000."},
{pergunta:"Na Unimed, até que dia o sistema aceita movimentações (exclusões)?",opcoes:["Dia 5","Dia 15","Dia 26","Último dia do mês"],correta:2,explica:"A Unimed fecha movimentações no dia 26. Solicitação após o dia 26 = exclusão só no mês seguinte. O beneficiário excluído mantém cobertura até o fim do mês."}
]},

/* ===================== PARTE 4 ===================== */
{id:4,titulo:"Carências e Legislação",desc:"Carências da ANS, contratual e promocional; portabilidade vs. aproveitamento; CPT e declaração de saúde; reajustes e a Lei 9.656/98.",modulos:[

{id:11,num:11,tempo:"7 min",titulo:"Carências — ANS, contratual e promocional",html:`
<p>Carência é o tempo de espera entre a contratação e o início da cobertura para determinados procedimentos. NÃO confunda com tempo de contrato! A maioria esmagadora das vendas é feita com carência promocional ativa.</p>
<h3>Carências máximas da ANS (lei)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Procedimento</th><th>Prazo máximo (lei)</th></tr></thead><tbody>
<tr><td>Urgência e emergência</td><td>24 horas</td></tr>
<tr><td>Demais procedimentos (consultas, exames, cirurgias, terapias)</td><td>180 dias (6 meses)</td></tr>
<tr><td>Parto</td><td>300 dias (10 meses)</td></tr>
<tr><td>Doença preexistente (CPT)</td><td>24 meses (2 anos)</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>Regra absoluta — nunca muda</h4><p>O que NUNCA reduz carência, independente de portabilidade, aproveitamento ou campanha: <strong>Parto (300 dias), Doença Preexistente — CPT (24 meses)</strong> e, tendência recente, <strong>Terapias</strong>. Esses 3 itens são fixos sempre.</p></div>
<h3>Carência contratual vs. promocional</h3>
<p>Carência contratual aparece no contrato assinado e serve para quem entra depois no plano (novas inclusões). Mesmo que você tenha negociado carência zero no fechamento, o contrato mostra a carência padrão — porque é um contrato de adesão, igual para todos.</p>
<div class="callout warn"><h4>Erro clássico — confundir promocional com contratual</h4><p>A carência promocional vale APENAS para quem contrata durante a campanha. Se o cliente incluir um dependente DEPOIS, esse dependente segue a carência CONTRATUAL. Sempre explique: "A carência zero é para quem entra agora. Inclusões futuras seguem a carência do contrato."</p></div>
<h3>Estratégias para carência zero</h3>
<ul>
<li><strong>PJ com 30+ vidas:</strong> por lei, contratos empresariais com 30 ou mais beneficiários têm carência ZERO obrigatória em todos os procedimentos.</li>
<li><strong>Campanhas PJ:</strong> muitas operadoras oferecem carência zero para qualquer PJ durante campanhas. Monitore sempre.</li>
<li><strong>Estratégia MediSênior:</strong> se a pessoa tiver pelo menos 1 mês de plano ativo em qualquer operadora, entra no MediSênior com carência zero.</li>
<li><strong>Aproveitamento padrão:</strong> se o cliente já tem plano, aproveite as carências cumpridas (exceto parto, CPT e terapias).</li>
</ul>
<div class="callout arg"><h4>Como comunicar carência com entusiasmo</h4><p>"Fulano, o que eu consigo fazer pra você é te encaixar na tabela promocional — você já vai conseguir fazer consultas e exames simples." Ao invés de falar que ele não vai aproveitar, fale o que ele está ganhando. A mesma informação com viés positivo muda tudo.</p></div>`},

{id:12,num:12,tempo:"7 min",titulo:"Portabilidade vs. aproveitamento de carências",html:`
<p>Esta é uma das áreas que mais gera problemas quando mal comunicada. Saiba exatamente o que cada uma é.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Aspecto</th><th>Portabilidade</th><th>Aproveitamento de carências</th></tr></thead><tbody>
<tr><td>O que é</td><td>Transferência TOTAL de carências, inclusive parto e CPT</td><td>Redução PARCIAL de carências. NÃO inclui parto, CPT e terapias</td></tr>
<tr><td>Base legal</td><td>Direito do consumidor por lei</td><td>Política comercial da operadora (não é obrigatório)</td></tr>
<tr><td>Comissão corretor</td><td>NÃO paga comissão</td><td>Paga comissão normal</td></tr>
<tr><td>Como funciona</td><td>Assessoria jurídica — corretor não consegue lançar no sistema</td><td>Processo normal de venda — tabela de aproveitamento da operadora</td></tr>
<tr><td>Frequência de uso</td><td>~1% dos casos (casos graves específicos)</td><td>~99% dos casos</td></tr>
<tr><td>Quando usar</td><td>Doenças graves, câncer, criança precisando de transplante</td><td>Trocas normais entre operadoras</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>NUNCA diga "não dá para fazer portabilidade"</h4><p>O cliente tem esse direito por lei. O que você deve dizer: "Vamos fazer o aproveitamento de carências, que vai reduzir a maioria. As que não reduzem são: parto, CPT e terapias." Se ele insistir em portabilidade total, ofereça assessoria jurídica (cobrada à parte). Mas NUNCA bloqueie — o corretor que nega portabilidade pode ser processado.</p></div>
<h3>O que NUNCA é reduzido por aproveitamento</h3>
<ul>
<li><strong>Parto:</strong> carência de 300 dias NUNCA é reduzida por aproveitamento — em nenhuma operadora.</li>
<li><strong>CPT (preexistente):</strong> se declarou doença preexistente, os 24 meses de CPT não são reduzidos.</li>
<li><strong>Terapias:</strong> tendência recente — antes aproveitavam, agora a maioria não aproveita mais.</li>
</ul>
<h3>Operadora congênere</h3>
<p>Congênere = mesmo tipo/segmento. Quando o cliente vem de operadora do mesmo tipo da de destino (ambas operadoras ou ambas seguradoras), o aproveitamento tende a ser máximo (total). Quando não é congênere, algumas fazem aproveitamento reduzido. Sempre consulte a tabela de aproveitamento da operadora destino.</p>
<div class="callout quote">"As palavras são muito importantes. Se o cliente fala 'portabilidade' e você não deixar claro que vai fazer aproveitamento, ele depois pode reclamar que parto e CPT não foram transferidos. Seja claro sempre."<span class="who">— Do treinamento</span></div>`},

{id:13,num:13,tempo:"7 min",titulo:"CPT e Declaração de Saúde",html:`
<p>O tema mais delicado do mercado: ética, risco e decisões difíceis.</p>
<h3>Declaração de Saúde</h3>
<p>Todo plano exige preenchimento de uma declaração de saúde na contratação. O beneficiário informa: peso, altura, doenças, síndromes, lesões e tratamentos que tem ou já teve. Pode ser feita pelo próprio cliente, com auxílio, ou via entrevista médica. Os melhores cenários são quando a operadora faz a entrevista diretamente com o cliente — assim a operadora assume a responsabilidade.</p>
<h3>CPT — Cobertura Parcial Temporária</h3>
<p>Quando o beneficiário declara uma doença preexistente, entra em CPT por <strong>24 meses</strong>. Durante esse período, procedimentos de alta complexidade e cirurgias relacionados àquela doença ficam sem cobertura. Consultas, exames simples e acompanhamento estão liberados normalmente.</p>
<div class="callout key"><h4>O que é exame de alto custo (PAC)</h4><p>Acesse o Rol da ANS e procure "Procedimento de Alta Complexidade". Se estiver escrito PAC na lista, é alto custo. Ex.: ressonância magnética é PAC. Fisioterapia NÃO é PAC. Uma hérnia de disco → CPT afeta ressonância e cirurgia, mas NÃO fisioterapia.</p></div>
<div class="callout quote">"Você é condutor de um trem com 1000 pessoas. De um lado, se continuar, mata 2. Do outro, se desviar, mata 1000. O que faz? Esse dilema se encaixa no plano: você tem uma pessoa que precisa de plano e tem uma doença que, se declarar, a operadora não aceita. Nosso papel: explicar o que acontece em cada cenário e deixar o cliente decidir."<span class="who">— Dilema ético do treinamento</span></div>
<div class="callout internal"><h4>Regra ética absoluta — nunca negocie isso</h4><p>NUNCA oriente o cliente a omitir informações na declaração de saúde <strong>por escrito</strong>. Jamais. Por WhatsApp, e-mail ou qualquer texto — isso pode gerar processo criminal. O que você pode fazer: explicar por telefone os cenários ("se declarar, acontece X; se não declarar, acontece Y") e deixar o cliente decidir. Nunca por escrito.</p></div>
<div class="callout warn"><h4>Caso real — R$ 200.000 em 1 mês</h4><p>Uma criança foi incluída num plano. A corretora declarou apenas 10% das doenças que a criança tinha. Primeiro mês: R$ 200.000 de custo hospitalar. A operadora deu duas opções: 1) cancelar o plano e cobrar todos os custos da família, ou 2) retificar a declaração com CPT de 24 meses. A família surtou. A corretora ficou exposta. Sempre documente suas orientações. Sempre.</p></div>
<h3>Urgência em CPT — direito do beneficiário</h3>
<p>Se a pessoa com CPT entra em urgência/emergência, a operadora tem obrigação de dar 12 horas de atendimento ambulatorial. Após isso, se não houver internação, pode direcionar ao SUS. Se houver internação (risco de vida), a operadora DEVE cobrir integralmente, mesmo em CPT.</p>`},

{id:14,num:14,tempo:"5 min",titulo:"Reajustes — como funcionam",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tipo de plano</th><th>Tipo de reajuste</th><th>Índice / faixa</th><th>Previsibilidade</th></tr></thead><tbody>
<tr><td>Pessoa Física</td><td>Anual pela ANS (teto máximo)</td><td>6,06% (2025-2026) · Histórico: 8–10%</td><td>Alta</td></tr>
<tr><td>PJ (2–29 vidas)</td><td>Sinistralidade do pool (guarda-chuva)</td><td>8–14% típico — sem teto legal</td><td>Média–baixa</td></tr>
<tr><td>PJ (30+ vidas)</td><td>Sinistralidade da empresa</td><td>Sem teto — pode ser 30%, 50%+</td><td>Baixa</td></tr>
<tr><td>Adesão</td><td>Definido pela administradora/operadora</td><td>20–25% típico — sem teto</td><td>Baixa</td></tr>
<tr><td>Seguradoras</td><td>Sinistralidade + custos administrativos</td><td>18–23% típico</td><td>Baixa</td></tr>
<tr><td>Faixa etária (todos)</td><td>Automático ao mudar de faixa</td><td>10 faixas ANS — última faixa: até 6x a primeira</td><td>Previsível</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>O reajuste como porta de entrada</h4><p>O reajuste abusivo é a principal razão de clientes buscarem novo plano — e portanto a principal oportunidade de venda. Empresas com reajuste de 30%+ estão motivadas a trocar. Chegue com uma cotação comparativa na mão.</p></div>`},

{id:15,num:15,tempo:"5 min",titulo:"Legislação essencial — Lei 9.656/98",html:`
<p>Os 5 pontos da Lei 9.656/98 que afetam seu dia a dia:</p>
<ol>
<li><strong>Faixas etárias:</strong> 10 faixas ANS — valor da última (59+) não pode superar 6x a primeira (0–18).</li>
<li><strong>Carências máximas:</strong> 24h urgência · 180 dias demais · 300 dias parto · 24 meses preexistentes.</li>
<li><strong>Cancelamento:</strong> PF = bilateral (operadora NÃO pode) · PJ = possível após 12 meses com 60 dias de aviso.</li>
<li><strong>Urgência/emergência:</strong> coberta após 24h de contrato, mesmo em carência. 12h de suporte obrigatório. Não pode negar atendimento inicial — pode cobrar depois se em carência.</li>
<li><strong>Rol de Procedimentos ANS:</strong> lista obrigatória. Desde 2022 (STF): o Rol é <strong>exemplificativo</strong> — planos devem cobrir procedimentos não listados se houver justificativa médica.</li>
</ol>
<h3>As 10 faixas etárias da ANS</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Faixa</th><th>Idade</th><th>Comportamento do preço</th></tr></thead><tbody>
<tr><td>Faixa 1</td><td>0–18 anos</td><td>Mais barata (base)</td></tr>
<tr><td>Faixas 2–5</td><td>19–38 anos</td><td>Progressivo</td></tr>
<tr><td>Faixas 6–8</td><td>39–53 anos</td><td>Crescente</td></tr>
<tr><td>Faixa 9</td><td>54–58 anos</td><td>Alto</td></tr>
<tr><td>Faixa 10</td><td>59+ anos</td><td>Máximo: até 6x a faixa 1</td></tr>
</tbody></table></div>`}

],quiz:[
{pergunta:"Quais são os 3 itens que NUNCA reduzem carência (nem por portabilidade ou campanha)?",opcoes:["Consultas, exames e cirurgias","Parto (300 dias), CPT/preexistente (24 meses) e terapias","Urgência, consultas e internação","Nenhum"],correta:1,explica:"Parto, CPT (doença preexistente) e terapias são fixos sempre. O resto pode ser reduzido por aproveitamento, campanha ou regra de 30+ vidas."},
{pergunta:"Qual a diferença central entre portabilidade e aproveitamento de carências?",opcoes:["São a mesma coisa","Portabilidade = direito legal, transfere TUDO (inclusive parto/CPT), corretor não lança e não recebe comissão; aproveitamento = comercial, reduz a maioria","Aproveitamento transfere tudo","Portabilidade não existe"],correta:1,explica:"Portabilidade é direito do consumidor (via assessoria jurídica, sem comissão, ~1% dos casos). Aproveitamento é política comercial, paga comissão, usado em ~99% das trocas — mas não reduz parto, CPT e terapias."},
{pergunta:"Qual a regra ética ABSOLUTA da declaração de saúde?",opcoes:["Pode orientar a omitir por WhatsApp","Nunca orientar a omitir POR ESCRITO — explicar cenários só por telefone e deixar o cliente decidir","Sempre preencher pelo cliente","Omitir 10% é aceitável"],correta:1,explica:"Jamais oriente omissão por escrito (gera processo criminal). Você pode explicar os cenários por telefone e deixar o cliente decidir. Documente suas orientações sempre — o caso dos R$200 mil mostra o risco."},
{pergunta:"Contratos PJ com quantas vidas têm carência ZERO obrigatória por lei?",opcoes:["2 vidas","10 vidas","30 ou mais vidas","100 vidas"],correta:2,explica:"Por lei, contratos empresariais com 30+ vidas têm carência zero obrigatória em todos os procedimentos."},
{pergunta:"Desde 2022 (decisão do STF), o Rol de Procedimentos da ANS é:",opcoes:["Taxativo (só cobre o que está na lista)","Exemplificativo — deve cobrir procedimentos não listados com justificativa médica","Opcional","Inexistente"],correta:1,explica:"Desde 2022 o Rol é exemplificativo, não taxativo: os planos devem cobrir procedimentos fora da lista quando há justificativa médica."}
]},

/* ===================== PARTE 5 ===================== */
{id:5,titulo:"A Cultura PlaneCorp",desc:"O Código de Cultura 2026: a essência, os 6 pilares culturais, o Código de Honra e os comportamentos que fortalecem ou rompem.",modulos:[

{id:16,num:16,tempo:"5 min",titulo:"Código de Cultura 2026 — essência e 6 pilares",html:`
<div class="callout quote">A PlaneCorp é feita de pessoas que acreditam que <strong>clareza gera confiança, cuidado gera valor e resultado gera impacto</strong>. Cuidamos de pessoas e empresas ouvindo, explicando, acompanhando e entregando mais do que prometemos. Cultura não é discurso — é critério. Ela define quem cresce, quem lidera e quem permanece.</div>
<h3>Os 6 pilares culturais</h3>
<ol>
<li><strong>CLAREZA</strong> — Falar a verdade com respeito e agir com propósito. Explico o "porquê" de cada ação, deixo combinados documentados, prefiro diálogo franco à suposição, baseio decisões em dados.</li>
<li><strong>RESULTADO COM PROPÓSITO</strong> — Alta performance com integridade e impacto real. Entrego mais do que prometo, meço performance pelo impacto, comemoro vitórias com humildade.</li>
<li><strong>AUTORRESPONSABILIDADE</strong> — O que eu não faço, ninguém faz por mim. Cumpro prazos sem depender de cobrança, busco solução antes de justificar, assumo de ponta a ponta.</li>
<li><strong>APRENDIZADO CONTÍNUO</strong> — Aprender, aplicar e ensinar todos os dias. Busco aprender algo novo toda semana, compartilho com o time, transformo experiência em melhoria de processo.</li>
<li><strong>CUIDADO CONTÍNUO</strong> — Atender é fácil. Cuidar é diferente. Acompanho o cliente após a venda, dou retorno mesmo sem novidade, tenho empatia antes de responder.</li>
<li><strong>RESPEITO E HARMONIA</strong> — Gentileza e profissionalismo geram força coletiva. Cumpro combinados e horários, escuto com atenção, incentivo o time, resolvo conflitos com maturidade.</li>
</ol>`},

{id:17,num:17,tempo:"5 min",titulo:"Código de Honra e comportamentos",html:`
<div class="callout key"><h4>Código de Honra PlaneCorp 2026 — 12 princípios</h4>
<ol>
<li>Todo contato é uma oportunidade de gerar valor.</li>
<li>O aprendizado nunca acaba.</li>
<li>O cliente está no centro.</li>
<li>Todo mundo gera valor.</li>
<li>Foco na solução, não no problema.</li>
<li>Comemoramos todas as vitórias.</li>
<li>Seus resultados são proporcionais a quem você é.</li>
<li>Saber e não aplicar é o mesmo que não saber.</li>
<li>Excelência é um hábito, não um acaso.</li>
<li>O óbvio precisa ser dito e o dado precisa ser visto.</li>
<li>Relacionamento é construção contínua.</li>
<li>Feedback é livre, real e construtivo, e deve incluir conversas difíceis.</li>
</ol></div>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Comportamentos que FORTALECEM</th><th>Comportamentos que ROMPEM</th></tr></thead><tbody>
<tr><td>Assume responsabilidade total — age como dono</td><td>Terceiriza responsabilidades e busca culpados</td></tr>
<tr><td>Comunica com clareza e intenção</td><td>Fala pela metade, omite ou distorce informações</td></tr>
<tr><td>Entrega com excelência e constância</td><td>Entrega o mínimo e evita comprometimento</td></tr>
<tr><td>Gera valor real ao cliente — ouve, orienta, cuida</td><td>Age de forma reativa e desatenta com o cliente</td></tr>
<tr><td>Aprende, aplica e compartilha</td><td>Resiste a aprender ou aplicar feedbacks</td></tr>
<tr><td>Coopera genuinamente com o time</td><td>Age de forma individualista e competitiva</td></tr>
<tr><td>Mantém o ambiente leve e respeitoso</td><td>Espalha negatividade, ironia ou desânimo</td></tr>
<tr><td>Age com integridade e verdade</td><td>Falta com integridade e manipula informações</td></tr>
</tbody></table></div>
<div class="callout quote">Somos consultivos, humanos e orientados a resultado. Trabalhamos com clareza, cuidamos com intenção e entregamos com excelência. Cresce quem gera confiança. Permanece quem cuida. Inspira quem entrega com verdade.<span class="who">— Identidade Cultural PlaneCorp 2026</span></div>`}

],quiz:[
{pergunta:"Qual é a essência da cultura PlaneCorp?",opcoes:["Vender o máximo possível","Clareza gera confiança, cuidado gera valor e resultado gera impacto","Preço sempre em primeiro lugar","Trabalhar sozinho"],correta:1,explica:"A essência: clareza gera confiança, cuidado gera valor e resultado gera impacto. Cultura não é discurso — é critério, e define quem cresce, lidera e permanece."},
{pergunta:"O pilar 'Autorresponsabilidade' significa:",opcoes:["Esperar ser cobrado","O que eu não faço, ninguém faz por mim — cumprir prazos sem depender de cobrança e assumir de ponta a ponta","Terceirizar tarefas","Focar só em números"],correta:1,explica:"Autorresponsabilidade = agir como dono, cumprir prazos sem cobrança, buscar solução antes de justificar e assumir de ponta a ponta."},
{pergunta:"Segundo o Código de Honra, 'saber e não aplicar' é o mesmo que:",opcoes:["Sucesso","Não saber","Aprender","Ensinar"],correta:1,explica:"Princípio 8: 'Saber e não aplicar é o mesmo que não saber.' A cultura valoriza a aplicação prática do conhecimento."}
]},

/* ===================== PARTE 6 ===================== */
{id:6,titulo:"Venda Consultiva",desc:"O processo de venda completo, os princípios fundamentais, as objeções, o roteiro de anamnese e o perfil do cliente ideal (ICP).",modulos:[

{id:18,num:18,tempo:"7 min",titulo:"Técnicas de venda consultiva",html:`
<h3>O processo de venda completo (7 passos)</h3>
<ol>
<li><strong>Captação</strong> — identifique potenciais clientes (networking, indicações, tráfego pago).</li>
<li><strong>Levantamento</strong> — roteiro de anamnese (as perguntas certas).</li>
<li><strong>Cotação</strong> — monte proposta personalizada com comparativos.</li>
<li><strong>Apresentação</strong> — reunião consultiva, explique com clareza.</li>
<li><strong>Acompanhamento</strong> — 8 a 9 contact points, feche o circuito.</li>
<li><strong>Fechamento</strong> — alinhe documentos, Carta de Nomeação, vigência.</li>
<li><strong>Pós-venda</strong> — boas-vindas, NPS, revisões, cross-sell, indicações.</li>
</ol>
<div class="callout arg"><h4>Princípios fundamentais</h4>
<p><strong>"Quem responde, perde. Quem pergunta, controla."</strong> Quanto mais você pergunta, mais elementos o cliente te dá para trabalhar — até o ponto que a pessoa vende para ela mesma.</p>
<p><strong>"Conte as coisas ruins com entusiasmo."</strong> "O plano tem carência de 6 meses, mas a boa notícia é que consultas e exames simples já estão liberados de imediato!"</p>
<p><strong>Velocidade:</strong> não segure proposta. Mande o mais rápido possível. O cliente pronto fecha com quem melhor e mais rápido atendeu.</p>
<p><strong>Canal do cliente:</strong> pergunte se prefere áudio, vídeo ou escrito. Responda no canal DELE, não no seu.</p></div>
<h3>Média de 8–9 contact points</h3>
<p>O fechamento raramente acontece no primeiro contato. A média é de 8 a 9 pontos de contato. Use perguntas que fechem o circuito: "As propostas ficaram claras?", "Ficou alguma dúvida?", "O que achou dos valores?"</p>
<h3>Objeções mais comuns — respostas</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Objeção</th><th>Resposta sugerida</th></tr></thead><tbody>
<tr><td>"Tá muito caro"</td><td>"Entendo. Me conta quanto você investe hoje? Vou comparar com o mercado e ver se conseguimos algo melhor."</td></tr>
<tr><td>"Quero um plano completo"</td><td>"Todos os planos são completos por lei: consultas, exames, cirurgias, internação. A diferença está na rede e no conforto."</td></tr>
<tr><td>"Meu plano é ruim"</td><td>"O que especificamente te incomodou? Foi a rede? O atendimento? O preço?" (descubra a dor real)</td></tr>
<tr><td>"Não preciso de plano"</td><td>"Você usa o SUS hoje? Se precisar de uma consulta urgente ou exame, como funciona pra você?" (mostre a dor)</td></tr>
<tr><td>"Outro corretor é mais barato"</td><td>"Pode me mostrar a cotação? Às vezes a diferença está no produto. A PlaneCorp tem 11 anos de mercado e suporte contínuo."</td></tr>
<tr><td>"Vou pensar"</td><td>"Claro! Ficou alguma dúvida que eu possa esclarecer? As propostas ficaram claras?" (feche o circuito)</td></tr>
<tr><td>"Tenho doença preexistente"</td><td>"Vamos tratar com transparência. A Declaração de Saúde é obrigatória e pode haver CPT de 24 meses, mas você terá acesso a consultas, exames e tudo mais desde o primeiro dia."</td></tr>
</tbody></table></div>`},

{id:19,num:19,tempo:"7 min",titulo:"As perguntas que você sempre deve fazer (anamnese)",html:`
<p>Este é seu roteiro padrão. Use em TODA primeira interação. Por ligação você faz tudo em 5–10 minutos; por WhatsApp pode levar dias.</p>
<div class="callout key"><h4>Roteiro completo de anamnese comercial</h4>
<ol>
<li>"Você busca o plano para você, família ou empresa?" — Descobre quantas pessoas e se tem CNPJ.</li>
<li>"Quais são as idades de todos que vão entrar?" — Essencial para cotar. Peça o vínculo (pai, filho, cônjuge).</li>
<li>"Você tem CNPJ?" — Se sim, já pede o número. Define PF ou PJ. MEI ou empresa? Há quanto tempo aberto? (MEI precisa de 6 meses na maioria.)</li>
<li>"Você busca o plano para algum tratamento específico ou para prevenção?" — Descobre doenças, gravidez, síndrome. Define coparticipação.</li>
<li>"Você usa mais em Curitiba/região ou precisa de cobertura nacional?" — Define área de atendimento.</li>
<li>"Você já tem plano hoje? Qual? Quanto paga?" — Define se é troca ou nova aquisição. Contexto de preço. Se tem: peça carta de permanência.</li>
<li>"O que motivou você a buscar um novo plano?" — Descobre a DOR: preço? qualidade? perda do plano?</li>
<li>"Tem preferência por algum hospital ou médico?" — Direciona operadora e rede credenciada.</li>
<li>"Qual faixa de investimento está considerando?" — Ancora o orçamento. Se não sabe, apresente 3 cenários.</li>
<li>"Quantas consultas você fez no último ano?" — A maioria descobre: foi 2–3 vezes. Direciona coparticipação.</li>
</ol></div>
<div class="callout arg"><h4>A pergunta que descobre tudo</h4><p>"Quando a pessoa já tem plano, eu pergunto: 'O que mais te incomoda hoje no plano?' Eu estou querendo que ela me diga a dor. Mesmo que ela não tenha dor, ela começa a lançar. Quando falo de troca, tenho 2 caminhos: preço ou qualidade. Preciso descobrir qual dos 2 pra direcionar o produto certo."</p></div>
<h3>Perguntas extras para empresas (PJ)</h3>
<ul>
<li>Total de funcionários + sócios elegíveis</li>
<li>Todos vão entrar? (compulsório vs. flex — compulsório ~10% mais barato)</li>
<li>É MEI? (tabela e campanhas diferenciadas)</li>
<li>Tem plano hoje? Qual o aniversário do contrato?</li>
<li>A empresa paga 100% ou há coparticipação do colaborador?</li>
<li>Quem é o decisor? (dono, RH, financeiro)</li>
</ul>
<div class="callout tip"><h4>Pergunta extra — obstetrícia</h4><p>Quando a pessoa menciona gravidez: "Já está grávida? Há quanto tempo? Tem preferência por alguma maternidade?" Isso define urgência na contratação e qual produto direcionar.</p></div>`},

{id:20,num:20,tempo:"6 min",titulo:"Perfil do Cliente Ideal (ICP)",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Perfil</th><th>Principal dor</th><th>Produto recomendado</th></tr></thead><tbody>
<tr><td>Famílias Jovens (casal c/ filhos)</td><td>Custo-benefício · Rede pediátrica</td><td>PJ com coparticipação · Regional · Enfermaria</td></tr>
<tr><td>Gestantes</td><td>Carência de parto · UTI neonatal</td><td>PJ ou PF com obstetrícia · Apartamento recomendado</td></tr>
<tr><td>Idosos (60+)</td><td>Reajuste alto · Risco de cancelamento</td><td>PF obrigatório (proteção) · MediSênior</td></tr>
<tr><td>Saindo de empresa</td><td>Estar sem cobertura · Urgência</td><td>PJ (se tem CNPJ) ou PF · Carência zero se possível</td></tr>
<tr><td>Empresas com reajuste alto</td><td>Custo crescente · Reajuste injusto</td><td>PJ concorrente · Cotação comparativa</td></tr>
<tr><td>Pequenas empresas (MEI/ME)</td><td>Preço · Campanhas</td><td>PJ compulsório · Regional · Coparticipação</td></tr>
<tr><td>Empresa premium</td><td>Manter rede · Reajuste controlado</td><td>SulAmérica · Bradesco · Amil Ouro/Platina</td></tr>
<tr><td>Empresa multi-estado</td><td>Cobertura em várias praças</td><td>Amil (mais flexível) · SulAmérica · Bradesco</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>O idoso como venda</h4><p>"Idosos são uma venda muito boa porque a fatura inicia em R$500. Com 10 clientes a uma média de R$800, você vende R$8.000 em 10 clientes. Normalmente o idoso até faz o plano, mas quem vai realmente atrás é o filho. Esse é o perfil mais comum."</p></div>
<div class="callout arg"><h4>A maior porta de entrada</h4><p>Empresas com reajuste abusivo são a principal oportunidade. Elas já estão motivadas a trocar — você não precisa criar necessidade, só apresentar uma solução melhor. Fique atento a qualquer cliente reclamando de aumento e abra uma cotação comparativa.</p></div>
<div class="callout key"><h4>Sequência de triagem rápida — identifique o ICP em 2 minutos</h4>
<ul>
<li>Tem CNPJ? → PJ (80% das vendas). Não tem? → PF ou Adesão</li>
<li>Tem 60+? → PF obrigatório (proteção contra cancelamento) · MediSênior</li>
<li>Está grávida ou quer engravidar? → Obstetrícia, urgência na contratação, apartamento</li>
<li>Perdeu o plano da empresa? → Cliente pronto, precisa urgente, carência zero</li>
<li>Reclamando de reajuste? → Porta de entrada, cotação comparativa, troca motivada</li>
</ul></div>`}

],quiz:[
{pergunta:"O princípio fundamental da venda consultiva é:",opcoes:["Quem fala mais, vende mais","Quem responde, perde. Quem pergunta, controla","O preço é o mais importante","Nunca acompanhar o cliente"],correta:1,explica:"'Quem responde, perde. Quem pergunta, controla.' Quanto mais você pergunta, mais elementos o cliente te dá — até vender para si mesmo."},
{pergunta:"Qual a média de pontos de contato (contact points) até o fechamento?",opcoes:["1 contato","2 a 3","8 a 9","20+"],correta:2,explica:"A média é de 8 a 9 contact points. O fechamento raramente acontece no primeiro contato — feche o circuito com perguntas a cada acompanhamento."},
{pergunta:"Para um idoso (60+), qual o produto recomendado e por quê?",opcoes:["PJ, porque é mais barato","PF obrigatório (proteção contra cancelamento) e MediSênior","Adesão sempre","Qualquer um"],correta:1,explica:"Idoso = PF obrigatório pela proteção contra cancelamento unilateral; MediSênior é a especialidade. Alto ticket (fatura R$500-800) e quem busca costuma ser o filho."},
{pergunta:"Qual é considerada 'a maior porta de entrada' para novos negócios?",opcoes:["Clientes sem plano","Empresas com reajuste abusivo (já motivadas a trocar)","Idosos","Gestantes"],correta:1,explica:"Empresas insatisfeitas com reajuste abusivo já estão motivadas — você só apresenta uma solução melhor com cotação comparativa. Não precisa criar a necessidade."},
{pergunta:"'Conte as coisas ruins com entusiasmo' significa:",opcoes:["Esconder a carência do cliente","Apresentar o lado positivo: 'tem carência de 6 meses, mas consultas e exames já liberam de imediato!'","Mentir sobre a cobertura","Nunca falar de carência"],correta:1,explica:"Apresente a mesma informação com viés positivo — destaque o que o cliente ganha (o que já está liberado), em vez de só o que falta. Sem mentir."}
]},

/* ===================== PARTE 7 ===================== */
{id:7,titulo:"Guia de Operadoras",desc:"Fichas completas de cada operadora — posicionamento, produtos, pontos fortes/fracos e quando vender: Hapvida, Amil, Paraná Clínicas, Unimed, SulAmérica, Bradesco, MediSênior e complementares.",modulos:[

{id:21,num:21,tempo:"4 min",titulo:"Como usar o guia e a árvore de decisão",html:`
<p>Este guia é o seu mapa de campo. Ele permite identificar rapidamente o melhor produto para cada cliente — e entender <em>por que</em> aquela é a melhor solução.</p>
<div class="callout key"><h4>Objetivo</h4><p>Dominar o básico de cada operadora, saber quando usar uma ou outra, fazer as perguntas certas e montar a proposta ideal em menos de 15 minutos.</p></div>
<h3>Árvore de decisão — Passo 1: Tipo de contratação</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Resposta do cliente</th><th>Direcionamento</th></tr></thead><tbody>
<tr><td>Tem CNPJ ativo</td><td>PJ (80% das vendas) — 30-40% mais barato, mais opções, campanhas de carência zero</td></tr>
<tr><td>Não tem CNPJ</td><td>PF ou Adesão (PF dá proteção contra cancelamento; Adesão se tiver sindicato)</td></tr>
<tr><td>Tem 60+ anos</td><td>PF obrigatório — proteção contra cancelamento. MediSênior como opção principal</td></tr>
</tbody></table></div>
<h3>Passo 2: Abrangência</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Cliente</th><th>Mesa recomendada</th></tr></thead><tbody>
<tr><td>Só Curitiba e região</td><td>Unimed Flex + Amil Bronze + PR Clínicas + Hapvida</td></tr>
<tr><td>Precisa de nacional</td><td>Amil Prata + SulAmérica + Bradesco</td></tr>
<tr><td>Empresa multi-estado</td><td>Amil (prioritário) — mescla regiões e produtos</td></tr>
<tr><td>SP ou RJ</td><td>SulAmérica / Amil / Bradesco. NUNCA Unimed CWB</td></tr>
</tbody></table></div>
<h3>Passo 3: Orçamento</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Cliente diz</th><th>Direcionamento</th></tr></thead><tbody>
<tr><td>"Quero o mais barato"</td><td>Hapvida Nosso Plano + Amil Bronze + PR Clínicas Standard</td></tr>
<tr><td>"Bom custo-benefício"</td><td>Unimed Flex 50 + Amil Bronze + SulAmérica (se nacional)</td></tr>
<tr><td>"Quero o melhor"</td><td>Bradesco Top Nacional + SulAmérica Especial Sem</td></tr>
<tr><td>Não sabe / não quer falar</td><td>Montar 3 cenários (econômico, intermediário, premium). "Não veja o cliente com o seu bolso."</td></tr>
</tbody></table></div>`},

{id:22,num:22,tempo:"5 min",titulo:"Hapvida (Clinipam)",html:`
<div class="callout key"><p><strong>Posicionamento:</strong> Menor custo do mercado. Rede própria regional em Curitiba. Urgência e emergência nacional pela rede Hapvida. Representa <strong>60–70% das vendas</strong> da corretora pelo volume. Após a fusão, é a maior operadora do Brasil em número de beneficiários.</p></div>
<h3>Produtos principais</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Produto</th><th>Rede</th><th>Copart.</th><th>Obs.</th></tr></thead><tbody>
<tr><td>Nosso Plano</td><td>Rede própria (Pinheirinho, Mercês, Boqueirão, Hospital Hapvida CWB)</td><td>Com e Sem</td><td>Foco do corretor — PF e PJ</td></tr>
<tr><td>Pleno</td><td>Rede própria + credenciadas</td><td>Com e Sem</td><td>Rede mal definida — evitar</td></tr>
</tbody></table></div>
<p><strong>Contratação:</strong> PF e PJ. PJ aceita a partir de 2 vidas. <strong>Cobertura nacional:</strong> urgência e emergência em toda a rede Hapvida pelo Brasil.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Pontos fortes</th><th>Pontos fracos</th></tr></thead><tbody>
<tr><td>Menor custo de todas · Argumento imbatível vs. SUS · Aceita PJ a partir de 2 vidas · Rede própria em expansão · 60-70% do volume</td><td>Imagem negativa na mídia · Rede própria limitada a certos bairros · Experiência pode variar · Alguns cancelarão em até 1 ano</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Quando vender</h4><p>Em TODA proposta como a opção de menor preço. Especialmente quando o cliente diz "preciso de algo barato" ou "minha empresa nunca teve plano". O argumento de comparação com o SUS é o mais forte.</p></div>
<div class="callout arg"><h4>Script de objeção: "Hapvida é ruim"</h4><p>"Entendo, e concordo que houve problemas no passado. A situação mudou depois da fusão — hoje a Hapvida é a maior operadora do Brasil. O que importa é o atendimento que você recebe na prática."</p></div>`},

{id:23,num:23,tempo:"5 min",titulo:"Amil",html:`
<div class="callout key"><p><strong>Posicionamento:</strong> Melhor custo-benefício entre as operadoras nacionais. Após retomada pelo antigo dono da Qualicorp, os produtos foram reorganizados, a rede melhorou e os preços ficaram mais competitivos.</p></div>
<h3>Produtos principais</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Produto</th><th>Abrangência</th><th>Hospitais CWB / Destaque</th></tr></thead><tbody>
<tr><td>Bronze</td><td>Regional</td><td>N.S. das Graças, Vita, Rocio, Angelina Caron (UE). Produto-estrela: mais barato que Unimed, mais rede que PR Clínicas</td></tr>
<tr><td>Prata</td><td>Nacional</td><td>+ Cruz Vermelha, Marcelino Champagnat. Quando precisa de nacional ou hospitais premium</td></tr>
<tr><td>Ouro</td><td>Nacional</td><td>Rede ampliada — premium intermediário</td></tr>
<tr><td>Platina</td><td>Nacional</td><td>Rede completa — mais completo</td></tr>
</tbody></table></div>
<p><strong>Coparticipação:</strong> Parcial (só terapias — 30% ou 50%), Mista (30/40% em tudo) e Total (40% em tudo). <strong>Contratação:</strong> PJ com mínimo de 2 vidas — a mais flexível do mercado. Também por adesão (Qualicorp/Supermédica).</p>
<div class="callout arg"><h4>Maior diferencial: flexibilidade de CNPJ</h4><p>A Amil permite juntar 2 pessoas com 2 CNPJs diferentes, cada uma com uma pessoa, e fechar um plano. Também permite mesclar unidades em diferentes estados e trabalhar com produtos diferentes dentro do mesmo contrato.</p></div>
<div class="callout warn"><h4>Cuidado: hospitais no Bronze</h4><p>N.S. das Graças, Vita e Rocio no Bronze são para urgência e emergência. NÃO é possível agendar consulta com médico desses hospitais pelo Bronze. Para consultas, o beneficiário usa a rede de médicos credenciados.</p></div>
<div class="callout arg"><h4>Quando vender</h4><p>O Bronze deve estar na mesa de toda proposta regional de Curitiba. O Prata entra quando o cliente precisa de nacional ou quer Cruz Vermelha e Marcelino Champagnat. Usar sempre que o cenário envolva poucos CNPJs, necessidade de unir empresas ou flexibilidade. Isenção de copart. na Rede Total Care (12 meses).</p></div>`},

{id:24,num:24,tempo:"4 min",titulo:"Paraná Clínicas",html:`
<div class="callout key"><p><strong>Posicionamento:</strong> Operadora regional com forte presença em Curitiba. Destaque pelas unidades próprias sem coparticipação em consulta e pronto atendimento.</p></div>
<h3>Produtos principais</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Produto</th><th>Rede hospitalar</th><th>Copart.</th><th>Obs.</th></tr></thead><tbody>
<tr><td>Standard</td><td>Cruz Vermelha (OD) + Unidades próprias</td><td>30% ou 50%</td><td>Mais barato e estratégico — sem copart. nas unidades próprias para consulta e PA</td></tr>
<tr><td>Executivo Plus</td><td>Cruz Vermelha + rede ampliada</td><td>30% ou 50%</td><td>Rede intermediária</td></tr>
<tr><td>Estilo</td><td>Cruz Vermelha, Angelina Caron, N.S. das Graças e mais</td><td>30% ou 50%</td><td>Compete com Unimed em rede</td></tr>
</tbody></table></div>
<p><strong>Contratação:</strong> PJ, mínimo de 3 vidas. MEI precisa de 6 meses de abertura. Aceita unir CNPJs de prestadores de serviço (com contrato entre as empresas).</p>
<div class="callout tip"><h4>Diferencial das unidades próprias</h4><p>Água Verde (Logo Verde), CIC, Araucária e São José dos Pinhais — sem coparticipação em consultas e pronto atendimento. Ensine o colaborador a usar nessas unidades.</p></div>
<div class="callout arg"><h4>Quando vender</h4><p>O Standard entra como opção abaixo do Unimed Flex em preço. Usar quando o cliente quer o mais barato possível com rede mínima aceitável. Ideal para clientes perto de unidades próprias (CIC, São José, Araucária).</p></div>
<p><em>Obs.: a nova linha (Paraná CIM · 400 · 600) tem treinamento próprio e completo na seção de Operadoras.</em></p>`},

{id:25,num:25,tempo:"4 min",titulo:"Unimed Curitiba",html:`
<div class="callout key"><p><strong>Posicionamento:</strong> A marca mais forte de Curitiba. Mais de 5.000 médicos credenciados. Quase todos os hospitais da região, incluindo Marcelino Champagnat e Constantini. Muitas vezes a venda acontece pela marca antes do preço.</p></div>
<h3>Produtos PJ</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Produto</th><th>Copart.</th><th>Abrangência</th><th>Obs.</th></tr></thead><tbody>
<tr><td>Flex 20</td><td>20%</td><td>Regional</td><td>Carro-chefe para quem quer pouca copart.</td></tr>
<tr><td>Flex 50</td><td>50%</td><td>Regional</td><td>Carro-chefe para quem aceita mais copart. por menor preço</td></tr>
<tr><td>Amigo</td><td>50%</td><td>Nacional</td><td>Nacional, mas apartamento é muito caro</td></tr>
<tr><td>Pleno</td><td>—</td><td>Regional</td><td>Médico de família. Último recurso (burocracia)</td></tr>
</tbody></table></div>
<h3>Produtos PF</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Produto</th><th>Copart.</th><th>Obs.</th></tr></thead><tbody>
<tr><td>Flex 30</td><td>30%</td><td>Menos coparticipação</td></tr>
<tr><td>Flex Smart 50</td><td>50%</td><td>Preço mais acessível</td></tr>
<tr><td>Smart</td><td>—</td><td>Mais barato PF. Limite de 10 dias de internação</td></tr>
</tbody></table></div>
<p><strong>Contratação:</strong> PJ mínimo 3 vidas. Tabela ACP para 2 vidas, mas sem comissão para o corretor (último recurso).</p>
<div class="callout warn"><h4>Cuidado com Unimed fora de Curitiba</h4><p>A Unimed NÃO funciona bem em São Paulo e Rio. Para essas praças, direcione para SulAmérica, Amil ou Bradesco. O produto Amigo em apartamento é muito caro e perde competitividade nacional.</p></div>
<div class="callout arg"><h4>Quando vender</h4><p>É o produto padrão para Curitiba na maioria das propostas PJ (Flex 20 e Flex 50) e PF (Flex 30 e Flex Smart 50). Sempre incluir na mesa como referência de rede. Evitar para necessidades nacionais (SP e RJ).</p></div>
<p><em>Obs.: a Unimed Curitiba PJ tem treinamento próprio e completo na seção de Operadoras.</em></p>`},

{id:26,num:26,tempo:"4 min",titulo:"SulAmérica",html:`
<div class="callout key"><p><strong>Posicionamento:</strong> Seguradora financeiramente sólida que vendeu todas as outras linhas para focar exclusivamente em saúde, odonto e vida. Por ser seguradora, é obrigada a oferecer rede credenciada E reembolso (com teto). Hospital Santa Cruz é próprio.</p></div>
<h3>Produtos principais</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Produto</th><th>Acomodação</th><th>Reembolso</th><th>Obs.</th></tr></thead><tbody>
<tr><td>Clássico 100 Sem</td><td>Enfermaria</td><td>Básico</td><td>Produto de entrada</td></tr>
<tr><td>Especial Sem</td><td>Apartamento</td><td>Básico</td><td>Carro-chefe — ~90% das vendas</td></tr>
<tr><td>Especial RC</td><td>Apartamento</td><td>Melhor</td><td>Mesmo produto com reembolso superior</td></tr>
<tr><td>R1 / R2 / R3</td><td>Apartamento</td><td>Progressivo</td><td>Para quem usa reembolso intensivamente</td></tr>
</tbody></table></div>
<p><strong>Coparticipação:</strong> versões com 30% (com teto) e versões sem coparticipação nenhuma — nem para terapias. <strong>Contratação:</strong> somente PJ, mínimo 3 vidas. <strong>Aproveitamento de carência:</strong> exige produto do mesmo porte — nacional com nacional, mesma acomodação, mesma coparticipação.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Pontos fortes</th><th>Pontos fracos</th></tr></thead><tbody>
<tr><td>Consolidada e sólida · Hospital Santa Cruz próprio · Opção totalmente sem coparticipação · Excelente custo-benefício no Especial Sem · Reembolso</td><td>Movimentações de rede podem gerar insatisfação · Reembolso possui teto · Estorno de comissão rígido (até 2 anos) · Aproveitamento de carência restrito</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Quando vender</h4><p>Sempre que o cliente pedir atendimento nacional com boa rede. Funciona como alternativa ao Bradesco (mais barata) ou upgrade da Amil. Ótima para migração de quem vem de Bradesco, Amil linha alta ou Porto Seguro.</p></div>`},

{id:27,num:27,tempo:"4 min",titulo:"Bradesco Saúde",html:`
<div class="callout key"><p><strong>Posicionamento:</strong> O produto com maior tradição e confiabilidade do mercado. Clientes que entram raramente querem sair. Rede hospitalar premium e completa em todo o Brasil, especialmente forte em São Paulo.</p></div>
<h3>Produto principal</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Produto</th><th>Abrangência</th><th>Copart.</th><th>Hospitais CWB</th></tr></thead><tbody>
<tr><td>Top Nacional</td><td>Nacional</td><td>30% ou Sem</td><td>Constantini, Marcelino Champagnat, Santa Cruz</td></tr>
</tbody></table></div>
<p><strong>Contratação:</strong> PJ, mínimo 3 vidas. Use sempre o simulador oficial do Bradesco para preços atualizados. <strong>Aproveitamento de carência:</strong> mesma regra rígida da SulAmérica — mesmo porte obrigatório.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Pontos fortes</th><th>Pontos fracos</th></tr></thead><tbody>
<tr><td>Maior tradição e confiabilidade · Rede premium e completa em todo o Brasil · Clientes raramente querem sair · Reembolso · Estabilidade de produto</td><td>Preço mais alto do mercado · Reajustes de 20–25% ao ano · Muitos migram após ~3 anos · Aproveitamento de carência restrito</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Quando vender</h4><p>Apresentar junto com SulAmérica quando o cliente já tem perfil premium. Funciona muito bem a transição SulAmérica → Bradesco. Trazer à mesa quando o cliente diz "quero o melhor, preço não é prioridade".</p></div>`},

{id:28,num:28,tempo:"4 min",titulo:"MediSênior",html:`
<div class="callout key"><p><strong>Posicionamento:</strong> Único produto realmente focado na terceira idade. Ticket médio alto (ótimo para o corretor). Zero coparticipação. Transformou o público que ninguém queria em oportunidade.</p></div>
<h3>Produtos</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Produto</th><th>Acomodação</th><th>Abrangência</th><th>Obs.</th></tr></thead><tbody>
<tr><td>PR-3</td><td>Enfermaria</td><td>Curitiba</td><td>Exclusivo Curitiba</td></tr>
<tr><td>PR-4</td><td>Apartamento</td><td>Curitiba</td><td>Exclusivo Curitiba</td></tr>
<tr><td>Black</td><td>Apartamento</td><td>Multirregional</td><td>Inclui Hospital Santa Cruz</td></tr>
<tr><td>Acima do Black</td><td>Apartamento</td><td>Nacional</td><td>Rede completa nacional</td></tr>
</tbody></table></div>
<p><strong>Idade mínima:</strong> PF a partir de 49 anos. PJ a partir de 44 anos (preço competitivo). Zero coparticipação. Zero carência no PJ com CNPJ.</p>
<div class="callout arg"><h4>Estratégia MediSênior — carência zero</h4><p>Se a pessoa tiver pelo menos 1 mês de plano ativo em qualquer operadora, entra no MediSênior com carência zero. Estratégia: feche 1 mês de Unimed PF (sem multa para cancelar), cancele, e migre para MediSênior sem carência.</p></div>
<div class="callout arg"><h4>Quando vender</h4><p>Sempre que houver um cliente idoso (44+ PJ, 49+ PF) na mesa. É a solução quando Amil ou outra operadora recusa por idade. Combina como produto complementar em empresas que fecham com outra operadora mas têm funcionários idosos não aceitos. Alto ticket = boa comissão.</p></div>`},

{id:29,num:29,tempo:"3 min",titulo:"Operadoras complementares",html:`
<h3>Nossa Saúde</h3>
<p>Operadora regional. Não é foco do corretor, mas cobre regiões onde nenhuma outra atende: <strong>Fazenda Rio Grande, Paranaguá, Rio Branco do Sul</strong>. Produtos: Vida Leve (escolhe especialista) e Vida Care (médico de família). Usar somente quando não há alternativa para a região.</p>
<h3>Select</h3>
<p>Regional com foco em Santa Catarina (Florianópolis, Blumenau). Boa rede credenciada, mas preço alto. Quando colocada ao lado da Amil, perde em preço e marca. Usar somente quando os produtos principais não funcionam para SC.</p>
<h3>MedSul (Médico Evangélico)</h3>
<p>Regional. Não é foco da corretora por decisão estratégica — são muitas linhas e geram excesso de opções na mesa.</p>
<div class="callout key"><h4>Regra rápida de direcionamento</h4><p>Cliente quer <strong>barato</strong> → Hapvida. <strong>Intermediário</strong> → Amil Bronze ou PR Clínicas Standard. <strong>Top</strong> → Unimed, SulAmérica ou Bradesco.</p></div>`}

],quiz:[
{pergunta:"Qual operadora representa 60-70% do volume de vendas e é a opção de MENOR preço?",opcoes:["Bradesco","Hapvida (Clinipam)","SulAmérica","Unimed"],correta:1,explica:"A Hapvida tem o menor custo do mercado e o argumento imbatível vs. SUS. Deve estar em TODA proposta como a opção mais barata. É a maior operadora do Brasil após a fusão."},
{pergunta:"Qual o maior diferencial da Amil?",opcoes:["Ser a mais cara","Flexibilidade de CNPJ — junta CNPJs diferentes, mescla estados e produtos, aceita 2 vidas","Só vender PF","Não ter rede nacional"],correta:1,explica:"A Amil é a mais flexível: une CNPJs diferentes, mescla unidades em estados diferentes e produtos no mesmo contrato, e aceita a partir de 2 vidas. O Bronze é o produto-estrela regional."},
{pergunta:"Para SP ou RJ, qual operadora NUNCA deve ser indicada?",opcoes:["SulAmérica","Amil","Unimed Curitiba","Bradesco"],correta:2,explica:"A Unimed Curitiba não funciona bem em SP e RJ. Para essas praças, direcione SulAmérica, Amil ou Bradesco."},
{pergunta:"O MediSênior atende a partir de que idade e qual sua principal vantagem?",opcoes:["18 anos, mais barato","PF 49+ / PJ 44+, zero coparticipação e aceita quem outras recusam por idade","60 anos, com coparticipação","Só nacional"],correta:1,explica:"MediSênior: PF a partir de 49, PJ a partir de 44, zero coparticipação, alto ticket. É a solução quando outra operadora recusa o idoso por idade."},
{pergunta:"Cliente em Fazenda Rio Grande ou Paranaguá — qual operadora costuma ser a única viável?",opcoes:["Bradesco","Nossa Saúde (e PR Clínicas)","SulAmérica","Unimed"],correta:1,explica:"A Nossa Saúde cobre regiões onde nenhuma outra atende (Fazenda Rio Grande, Paranaguá, Rio Branco do Sul). Use só quando não há alternativa."}
]},

/* ===================== PARTE 8 ===================== */
{id:8,titulo:"Mesas, Comparativos e Regras",desc:"Mesas padrão prontas (PF e PJ), a tabela comparativa geral de todas as operadoras, as regras de CNPJ e carência e as dicas essenciais para o iniciante.",modulos:[

{id:30,num:30,tempo:"5 min",titulo:"Mesas padrão — PF e PJ",html:`
<p>Configurações prontas para as situações mais comuns. Monte 2–3 opções em faixas de preço diferentes.</p>
<h3>Mesa padrão — Pessoa Física</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Cenário</th><th>Produto 1</th><th>Produto 2</th><th>Obs.</th></tr></thead><tbody>
<tr><td>Curitiba, boa rede</td><td>Unimed Flex 30</td><td>Unimed Flex Smart 50</td><td>Dois extremos de copart.; Hapvida quase sempre mais barata</td></tr>
<tr><td>Curitiba, preço mínimo</td><td>Hapvida Nosso Plano</td><td>Nossa Saúde Vida Leve</td><td>MediSênior sem copart.; verificar sindicato p/ adesão</td></tr>
<tr><td>Idoso (49+)</td><td>MediSênior PR-4</td><td>Unimed Flex 30</td><td>Apartamento recomendado</td></tr>
<tr><td>Nacional</td><td>Unimed Amigo 50</td><td>Amigo Supermédica (adesão)</td><td>Hapvida saiu da região</td></tr>
<tr><td>Gestante</td><td>Unimed Flex 30 c/ obst.</td><td>Amil Bronze c/ obst.</td><td>Maternidade na rede</td></tr>
<tr><td>Fazenda Rio Grande</td><td>PR Clínicas Standard</td><td>Nossa Saúde</td><td>Regiões específicas</td></tr>
</tbody></table></div>
<h3>Mesa padrão — Pessoa Jurídica (Regional Curitiba)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Cenário</th><th>Produtos</th><th>Obs.</th></tr></thead><tbody>
<tr><td>Padrão</td><td>Unimed Flex 20 + Flex 50 + Amil Bronze + Hapvida Nosso Plano</td><td>Incluir PR Clínicas Standard se relevante</td></tr>
<tr><td>Preço mínimo</td><td>Hapvida Nosso Plano + PR Clínicas Standard + Amil Bronze</td><td>Três opções de menor custo</td></tr>
<tr><td>Com idosos</td><td>MediSênior (idosos) + Amil Bronze (demais)</td><td>Estratégia de split</td></tr>
<tr><td>Apenas 2 vidas</td><td>Amil Bronze + Hapvida + Select</td><td>Poucas operadoras aceitam 2 vidas</td></tr>
</tbody></table></div>
<h3>Mesa padrão — Pessoa Jurídica (Nacional)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Cenário</th><th>Produtos</th><th>Obs.</th></tr></thead><tbody>
<tr><td>Custo-benefício</td><td>Amil Prata + SulAmérica Especial Sem</td><td>Amil geralmente mais barata</td></tr>
<tr><td>Premium</td><td>Bradesco Top + SulAmérica Especial</td><td>Cliente que já paga caro</td></tr>
<tr><td>SP / RJ</td><td>Bradesco Top Nacional + SulAmérica Especial Sem</td><td>NUNCA Unimed para SP/RJ</td></tr>
<tr><td>Multi-estado</td><td>Amil (prioritário) + SulAmérica</td><td>Amil mescla regiões e produtos</td></tr>
</tbody></table></div>`},

{id:31,num:31,tempo:"5 min",titulo:"Tabela comparativa geral e regras de CNPJ",html:`
<h3>Visão consolidada de todas as operadoras</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Operadora</th><th>Abrangência</th><th>Contratação</th><th>Mín. PJ</th><th>Reembolso</th><th>Hospital destaque (CWB)</th></tr></thead><tbody>
<tr><td>Hapvida</td><td>Regional (rede própria) + UE nacional</td><td>PF e PJ</td><td>2</td><td>Não</td><td>Rede própria (Pinheirinho, Mercês, Boqueirão)</td></tr>
<tr><td>Amil</td><td>Nacional (rede parceira)</td><td>PJ e Adesão</td><td>2</td><td>Não</td><td>Graças, Vita, Angelina Caron, Rocio</td></tr>
<tr><td>PR Clínicas</td><td>Regional</td><td>PJ</td><td>3</td><td>Não</td><td>Cruz Vermelha, Angelina Caron, Graças</td></tr>
<tr><td>Unimed CWB</td><td>Reg. + Nacional (Amigo)</td><td>PF e PJ</td><td>3 (ou 2 s/ comissão)</td><td>Não</td><td>Marcelino Champagnat, Constantini</td></tr>
<tr><td>SulAmérica</td><td>Nacional</td><td>PJ</td><td>3</td><td>Sim</td><td>Santa Cruz, Marcelino Champagnat</td></tr>
<tr><td>Bradesco</td><td>Nacional</td><td>PJ</td><td>3</td><td>Sim</td><td>Constantini, Marcelino, Santa Cruz</td></tr>
<tr><td>MediSênior</td><td>Reg. (Black multirregional)</td><td>PF (49+) e PJ (44+)</td><td>1</td><td>Não</td><td>Santa Cruz (Black), rede credenciada</td></tr>
<tr><td>Nossa Saúde</td><td>Regional</td><td>PF e PJ</td><td>2</td><td>Não</td><td>Rede limitada a regiões específicas</td></tr>
<tr><td>Select</td><td>Regional (SC)</td><td>PF e PJ</td><td>2</td><td>Não</td><td>Rede credenciada SC</td></tr>
</tbody></table></div>
<h3>Regras de CNPJ e carência</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Operadora</th><th>MEI (tempo mín.)</th><th>Aproveitamento de carência</th></tr></thead><tbody>
<tr><td>SulAmérica</td><td>6 meses</td><td>Mesmo porte (acomodação, abrangência, copart.) — rígido</td></tr>
<tr><td>PR Clínicas</td><td>6 meses</td><td>Mais flexível · Sistema PRC com 4 níveis</td></tr>
<tr><td>Unimed</td><td>6 meses</td><td>Consultar regras</td></tr>
<tr><td>Amil</td><td>6 meses</td><td>Consultar regras (intervalo máx. 60 dias!)</td></tr>
<tr><td>Bradesco</td><td>6 meses</td><td>Mesmo porte (regra rígida como SulAmérica)</td></tr>
<tr><td>Hapvida</td><td>6 meses</td><td>Consultar regras</td></tr>
<tr><td>MediSênior</td><td>Consultar</td><td>PJ 1 vida com CNPJ = zero carência · PF com 1 mês de plano</td></tr>
</tbody></table></div>
<div class="callout warn"><h4>Prazo crítico — Amil</h4><p>O intervalo entre a rescisão do plano anterior e a vigência do novo contrato Amil NÃO pode ultrapassar <strong>60 dias</strong>. Passou disso, o beneficiário perde o direito à redução de carência. Peça a carta de permanência o quanto antes.</p></div>
<div class="callout internal"><h4>O que NUNCA reduz carência — em nenhuma operadora</h4><p>Parto: 300 dias (sempre). Doença Preexistente (CPT): 24 meses (sempre). Terapias: 180 dias (tendência recente de manter fixo).</p></div>`},

{id:32,num:32,tempo:"6 min",titulo:"Objeções e dicas essenciais para o iniciante",html:`
<h3>Scripts prontos de objeções</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Objeção</th><th>Resposta sugerida</th></tr></thead><tbody>
<tr><td>"Tá muito caro"</td><td>"Me conta quanto você investe hoje? Vou comparar com o mercado e ver se conseguimos algo melhor."</td></tr>
<tr><td>"Quero um plano completo"</td><td>"Todos os planos são completos por lei. A diferença está na rede e no conforto."</td></tr>
<tr><td>"Meu plano é ruim"</td><td>"O que especificamente te incomodou? A rede? O atendimento? O preço?"</td></tr>
<tr><td>"Não preciso de plano"</td><td>"Você usa o SUS hoje? Se precisar de consulta urgente ou exame, como funciona?"</td></tr>
<tr><td>"Outro corretor é mais barato"</td><td>"Pode me mostrar a cotação? Às vezes a diferença está no produto. A PlaneCorp tem 11 anos de mercado."</td></tr>
<tr><td>"Hapvida é ruim"</td><td>"Houve problemas no passado, mas mudou. Hoje é a maior operadora do Brasil — o que importa é o atendimento na prática."</td></tr>
<tr><td>"Vou pensar"</td><td>"Claro! Ficou alguma dúvida? As propostas ficaram claras?" (feche o circuito)</td></tr>
<tr><td>"Tenho doença preexistente"</td><td>"Vamos tratar com transparência. Pode haver CPT de 24 meses, mas você terá consultas e exames desde o 1º dia."</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Princípio de ouro das objeções</h4><p>"Conte as coisas ruins com entusiasmo." Ex.: "O plano tem carência de 6 meses, mas a boa notícia é que consultas e exames simples já estão liberados de imediato!"</p></div>
<h3>Dicas essenciais para o corretor iniciante</h3>
<ul>
<li><strong>"Não veja o cliente com o seu bolso."</strong> Nunca presuma o poder aquisitivo. Apresente as opções e deixe o cliente decidir. Quem limita a oferta perde vendas todos os dias.</li>
<li><strong>"Preço é o quinto elemento."</strong> Antes do preço vêm: (1) a dor, (2) a necessidade específica, (3) a experiência prévia e (4) o perfil de uso.</li>
<li><strong>Acompanhe o cliente após a venda.</strong> No mês seguinte, confirme que o pagamento está em dia, o cartão chegou e que consegue usar o plano. Previne cancelamentos.</li>
<li><strong>Velocidade é tudo.</strong> Não segure proposta. Pergunte se prefere áudio, vídeo ou escrito e responda no canal DELE.</li>
<li><strong>Sobre estornos de comissão:</strong> não se preocupe excessivamente. Uma venda bem feita raramente cancela. A melhor proteção é a qualidade da venda.</li>
</ul>`}

],quiz:[
{pergunta:"Na mesa PJ padrão para Curitiba, quais produtos entram?",opcoes:["Só Bradesco","Unimed Flex 20 + Flex 50 + Amil Bronze + Hapvida Nosso Plano","Só SulAmérica","Só MediSênior"],correta:1,explica:"A mesa PJ padrão de Curitiba combina Unimed Flex (20 e 50), Amil Bronze e Hapvida Nosso Plano — cobrindo da rede premium ao menor preço. Inclua PR Clínicas Standard se relevante."},
{pergunta:"Qual o prazo crítico da Amil para aproveitamento de carência?",opcoes:["30 dias","60 dias entre rescisão do anterior e vigência do novo","90 dias","Sem prazo"],correta:1,explica:"O intervalo entre a rescisão do plano anterior e a vigência do novo na Amil não pode passar de 60 dias, ou o cliente perde a redução de carência. Peça a carta de permanência cedo."},
{pergunta:"O que significa 'preço é o quinto elemento'?",opcoes:["Preço é o mais importante","Antes do preço vêm a dor, a necessidade, a experiência prévia e o perfil de uso","Nunca falar de preço","Preço não importa"],correta:1,explica:"Antes de falar de preço, descubra: (1) a dor, (2) a necessidade específica, (3) a experiência prévia e (4) o perfil de uso. O preço vem por último."},
{pergunta:"'Não veja o cliente com o seu bolso' quer dizer:",opcoes:["Cobrar mais caro","Nunca presumir o poder aquisitivo — apresentar as opções e deixar o cliente decidir","Só vender o mais barato","Esconder os preços altos"],correta:1,explica:"O corretor que limita a oferta achando que 'o cliente não vai pagar' perde vendas. Apresente as opções (3 cenários se necessário) e deixe o cliente decidir."}
]},

/* ===================== PARTE 9 ===================== */
{id:9,titulo:"Glossário e Checklist",desc:"Todos os termos técnicos em linguagem simples, as 6 confusões mais comuns do mercado e o checklist completo do corretor.",modulos:[

{id:33,num:33,tempo:"6 min",titulo:"Glossário de A a Z",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Termo</th><th>Definição</th></tr></thead><tbody>
<tr><td>Abrangente</td><td>Rede de hospitais parceiros para urgência/emergência nacional em planos regionais</td></tr>
<tr><td>Acomodação</td><td>Tipo de quarto na internação: enfermaria (compartilhado) ou apartamento (individual)</td></tr>
<tr><td>Administradora</td><td>Empresa que intermedia planos por adesão (Vital, Extramed, Supermed)</td></tr>
<tr><td>Adesão</td><td>Contratação via administradora/entidade de classe — NÃO é PF, mesmo que seja 1 pessoa</td></tr>
<tr><td>Ambulatorial</td><td>Segmentação que cobre consultas e exames (sem internação)</td></tr>
<tr><td>ANS</td><td>Agência Nacional de Saúde Suplementar — reguladora federal (gov.br/ans)</td></tr>
<tr><td>Aproveitamento de carência</td><td>Redução de carências para quem já tem plano. Não inclui parto, CPT e terapias</td></tr>
<tr><td>Beneficiário</td><td>Pessoa coberta pelo plano (titular, titular financeiro ou dependente)</td></tr>
<tr><td>Carência</td><td>Período de espera após contratar antes de poder usar determinados procedimentos</td></tr>
<tr><td>CID</td><td>Classificação Internacional de Doenças — código que identifica cada condição</td></tr>
<tr><td>Compulsório</td><td>Modalidade onde TODOS os elegíveis aderem — preço ~10% menor que flex</td></tr>
<tr><td>Congênere</td><td>Operadora do mesmo tipo da anterior — afeta o nível de aproveitamento</td></tr>
<tr><td>Coparticipação</td><td>Valor pago pelo beneficiário a cada uso do plano, além da mensalidade</td></tr>
<tr><td>CPT</td><td>Cobertura Parcial Temporária — 24 meses de restrição para preexistentes declaradas</td></tr>
<tr><td>Declaração de Saúde</td><td>Formulário obrigatório na contratação informando condições preexistentes</td></tr>
<tr><td>Dependente</td><td>Familiar vinculado ao titular (cônjuge, filhos)</td></tr>
<tr><td>Enfermaria</td><td>Quarto compartilhado na internação — mais barato que apartamento</td></tr>
<tr><td>Faixa etária</td><td>10 classificações de idade da ANS que determinam o preço</td></tr>
<tr><td>Flex</td><td>Modalidade não-compulsória em PJ — preço ~10% maior (nomenclatura SulAmérica)</td></tr>
<tr><td>Guarda-chuva (pool)</td><td>Sinistralidade compartilhada para contratos de 2 a 29 vidas — diluído pelo Brasil</td></tr>
<tr><td>Hospitalar</td><td>Segmentação que cobre APENAS internações e emergências — sem consultas</td></tr>
<tr><td>IOF</td><td>Imposto sobre Operações Financeiras — incide sobre seguradoras</td></tr>
<tr><td>MEI</td><td>Microempreendedor Individual — CNPJ com tabelas e campanhas diferenciadas</td></tr>
<tr><td>Obstetrícia</td><td>Cobertura para parto (normal e cesárea) e pré-natal — 300 dias de carência</td></tr>
<tr><td>Opcional</td><td>Sinônimo de Flex — nomenclatura do Bradesco para planos não-compulsórios</td></tr>
<tr><td>Operadora</td><td>Empresa que presta o serviço de saúde — pode ter rede própria (Unimed, Clinipam, Amil)</td></tr>
<tr><td>PAC</td><td>Procedimento de Alta Complexidade — os que entram na regra de CPT</td></tr>
<tr><td>PME</td><td>Pequenas e Médias Empresas — geralmente 2 a 29/30 vidas</td></tr>
<tr><td>Portabilidade</td><td>Direito LEGAL de trocar plano com transferência TOTAL de carências (inclusive parto e CPT)</td></tr>
<tr><td>Reajuste anual</td><td>Aumento periódico da mensalidade — regulado (PF) ou por sinistralidade (PJ/Adesão)</td></tr>
<tr><td>Reajuste faixa etária</td><td>Aumento automático ao mudar de faixa etária — independente do reajuste anual</td></tr>
<tr><td>Rede credenciada</td><td>Hospitais, clínicas e laboratórios que atendem pelo plano</td></tr>
<tr><td>Regional</td><td>Plano com cobertura geográfica limitada (ex.: Curitiba e RM)</td></tr>
<tr><td>Rol de Procedimentos</td><td>Lista da ANS de procedimentos cobertos. Desde 2022: exemplificativo (não taxativo)</td></tr>
<tr><td>Seguradora</td><td>Empresa SEM rede própria — obrigada a ter reembolso e vender por corretor</td></tr>
<tr><td>Sinistralidade</td><td>Índice de utilização que determina o reajuste de PJ — sem teto</td></tr>
<tr><td>Titular</td><td>Pessoa principal do contrato — quem usa o plano e tem o vínculo</td></tr>
<tr><td>Titular Financeiro</td><td>Quem paga o plano — pode ser diferente do titular</td></tr>
<tr><td>Vida</td><td>Cada pessoa incluída no contrato — sinônimo de beneficiário</td></tr>
<tr><td>Vigência</td><td>Data em que a cobertura começa a valer — diferente da assinatura</td></tr>
</tbody></table></div>`},

{id:34,num:34,tempo:"4 min",titulo:"As 6 confusões mais comuns do mercado",html:`
<p>Estas 6 confusões custam vendas e geram processos. Memorize.</p>
<div class="callout internal"><h4>6 confusões que custam vendas</h4>
<ol>
<li><strong>Adesão ≠ Pessoa Física</strong> — se tem administradora no meio, é adesão, mesmo que seja só 1 pessoa.</li>
<li><strong>Portabilidade ≠ Aproveitamento</strong> — portabilidade é lei e transfere tudo (inclusive parto/CPT); aproveitamento é benevolência comercial e não transfere os 3.</li>
<li><strong>"Nacional" ≠ Atende em todo lugar</strong> — Amil Prata Adesão é "categoria nacional" mas rede real só em Curitiba.</li>
<li><strong>Compulsório ≠ Obrigatório para a empresa</strong> — significa que todos os elegíveis entram, não que a empresa é forçada a ter plano.</li>
<li><strong>Carência promocional ≠ Carência contratual</strong> — inclusões futuras seguem o contrato, não a promoção da campanha.</li>
<li><strong>Titular ≠ Titular Financeiro</strong> — confundir esses campos no cadastro pode cancelar o contrato.</li>
</ol></div>`},

{id:35,num:35,tempo:"5 min",titulo:"Checklist do corretor",html:`
<p>Use em toda interação com cliente novo. Sem exceção.</p>
<h3>Levantamento de dados</h3>
<ul>
<li>Idades exatas (data de nascimento) de TODOS</li>
<li>Tem CNPJ? É MEI? Quantos funcionários/sócios?</li>
<li>Já tem plano? Qual? Quanto paga? Problema?</li>
<li>Faz tratamento ou tem condição de saúde?</li>
<li>Qual a motivação para buscar plano agora?</li>
<li>Regional ou nacional? Enfermaria ou apartamento?</li>
<li>Precisa de médico ou hospital específico?</li>
<li>Orçamento máximo por pessoa?</li>
</ul>
<h3>Análise e cotação</h3>
<ul>
<li>Definido: PF, PJ ou Adesão?</li>
<li>Se PJ: compulsório ou flex? Campanhas vigentes?</li>
<li>Segmentação confirmada: amb. + hospitalar?</li>
<li>Área de atendimento adequada ao perfil?</li>
<li>Coparticipação adequada ao uso?</li>
<li>Acomodação definida?</li>
<li>Carências verificadas (contratual e promocional)?</li>
<li>Aproveitamento ou portabilidade avaliado?</li>
</ul>
<h3>Apresentação ao cliente</h3>
<ul>
<li>2–3 opções em faixas de preço diferentes</li>
<li>Proposta personalizada com nome do cliente</li>
<li>Rede verificada para médico/hospital desejado</li>
<li>Coparticipação explicada (o que tem e o que não)</li>
<li>Carências explicadas antes do fechamento</li>
<li>Datas alinhadas: assinatura, vigência e pagamento</li>
</ul>
<h3>Transição (se tem plano anterior)</h3>
<ul>
<li>Regra de cancelamento do plano atual verificada</li>
<li>Vigência do novo plano confirmada</li>
<li>Datas alinhadas — sem ficar descoberto</li>
<li>Cliente informado e decisão documentada por escrito</li>
</ul>
<h3>Pós-venda</h3>
<ul>
<li>Cliente recebeu carteirinha / acesso ao app</li>
<li>Orientado sobre como usar o plano</li>
<li>Plano anterior cancelado na data correta</li>
<li>Acompanhamento agendado em 30 dias</li>
</ul>
<div class="callout key"><h4>Identidade PlaneCorp — o que nos diferencia</h4><p>Somos consultivos, humanos e orientados a resultado. Trabalhamos com clareza, cuidamos com intenção e entregamos com excelência. <strong>"O corretor que mais estuda é o que mais vende."</strong> — Bons estudos, boas vendas e sucesso na sua carreira!</p></div>`}

],quiz:[
{pergunta:"Por que 'Adesão' nunca deve ser confundida com 'Pessoa Física'?",opcoes:["São idênticas","Se há administradora no meio, é adesão — mesmo que seja só 1 pessoa (regras de reajuste e cancelamento diferentes)","PF é mais cara","Adesão não existe"],correta:1,explica:"Tendo administradora (Vital, Qualicorp...) no meio, é adesão — com reajuste 20-25% e cancelamento pela operadora — mesmo para 1 pessoa. PF é contrato direto com a operadora."},
{pergunta:"Confundir 'Titular' com 'Titular Financeiro' no cadastro pode causar:",opcoes:["Desconto","Cancelamento do contrato","Carência zero","Reembolso maior"],correta:1,explica:"São campos diferentes (quem USA vs. quem PAGA). Trocá-los pode cancelar o contrato — foi um dos casos reais citados no treinamento."},
{pergunta:"Qual frase resume a identidade do corretor PlaneCorp?",opcoes:["O corretor que mais desconto dá é o que mais vende","O corretor que mais estuda é o que mais vende","Preço acima de tudo","Venda rápido e esqueça o cliente"],correta:1,explica:"'O corretor que mais estuda é o que mais vende.' A PlaneCorp é consultiva, humana e orientada a resultado — clareza, cuidado e excelência."}
]}

];

/* ===================== EXAME DE CERTIFICAÇÃO — DO BÁSICO AO AVANÇADO (80 perguntas) ===================== */
const EXAME_BASICO=[
{pergunta:"Quantos brasileiros têm plano de saúde (assistência médica) em dez/2025?",opcoes:["Cerca de 10 milhões","53,18 milhões (≈25% da população)","100 milhões","Toda a população"],correta:1,explica:"São 53,18 milhões de beneficiários (≈25% da população). Os outros 75% são o seu mercado."},
{pergunta:"O que mudou com a Lei 9.656/98?",opcoes:["Acabou com os planos","Todos os planos passaram a ter a mesma cobertura básica obrigatória","Liberou planos sem cobertura de parto","Criou o SUS"],correta:1,explica:"Antes de 1998 não havia regulação. Depois, todos os planos têm a mesma cobertura básica obrigatória; muda só rede, acomodação, reembolso e área."},
{pergunta:"Qual a diferença legal entre operadora e seguradora?",opcoes:["Nenhuma","Seguradora NÃO pode ter rede própria, é obrigada a ter reembolso e só vende por corretor","Operadora só vende online","Seguradora é mais barata"],correta:1,explica:"Seguradora (SulAmérica, Bradesco) não tem rede própria, é obrigada a reembolso e por lei só vende por corretor (comissões maiores). Operadora pode ter rede própria e vender direto."},
{pergunta:"Reajuste típico de uma seguradora vs. operadora:",opcoes:["Ambos 6%","Seguradora 18-23%; operadora 8-14%","Seguradora 5%","Operadora 30%"],correta:1,explica:"Seguradoras reajustam tipicamente 18-23%; operadoras 8-14%."},
{pergunta:"O que é o 'titular financeiro'?",opcoes:["Quem usa o plano","Quem paga o plano (pode ser diferente do titular)","O corretor","A operadora"],correta:1,explica:"Titular financeiro é quem paga (ex.: pai paga o plano do filho). Confundir com titular pode cancelar o contrato."},
{pergunta:"Quanto a PF é mais cara que a PJ, em média?",opcoes:["São iguais","30 a 40% mais cara","10% mais barata","O dobro"],correta:1,explica:"PF custa 30-40% mais que PJ. Em compensação, tem proteção contra cancelamento e reajuste regulado pela ANS."},
{pergunta:"Por que PF é obrigatória para idosos, segundo a regra de ouro?",opcoes:["É mais barata","Proteção contra cancelamento unilateral — a operadora NÃO pode cancelar","Tem mais rede","Não tem carência"],correta:1,explica:"Em PF o cancelamento é bilateral: a operadora não pode cancelar. Essa proteção vale mais que a diferença de preço para idosos e tratamentos contínuos."},
{pergunta:"Qual o teto de reajuste de um contrato PJ?",opcoes:["6,06%","10%","Não há teto — é por sinistralidade (já houve 30%, 50%, 90%)","20%"],correta:2,explica:"PJ não tem teto: o reajuste é por sinistralidade (uso do grupo). Isso é a principal porta de entrada para novos negócios."},
{pergunta:"Como funciona o reajuste de PJ com 2 a 29 vidas?",opcoes:["Sinistralidade da própria empresa","Pool nacional (guarda-chuva) — risco diluído entre contratos do Brasil","Teto da ANS","Não tem reajuste"],correta:1,explica:"De 2 a 29 vidas o reajuste vem do pool nacional (guarda-chuva), diluído — tende a ser menor. De 30+ vidas é pela sinistralidade da própria empresa."},
{pergunta:"O que é a 'armadilha do reajuste por adesão'?",opcoes:["Não tem reajuste","O reajuste cai na data do contrato administradora-operadora, não quando o cliente entrou","É sempre 6%","O reajuste é mensal"],correta:1,explica:"O cliente pode entrar e pegar reajuste poucos meses depois, porque a data segue o contrato entre administradora e operadora, não o aniversário do cliente."},
{pergunta:"Qual administradora de adesão é citada como 'historicamente boa'?",opcoes:["Qualicorp","Vital (Unimed) — bom controle de sinistralidade","Extramed","Supermed"],correta:1,explica:"A Vital (Unimed) é citada como a única de adesão historicamente boa pelo controle de sinistralidade; as outras tendem a um reajuste gigantesco após 2-3 anos."},
{pergunta:"Qual segmentação você vende 99% das vezes?",opcoes:["Ambulatorial","Hospitalar","Ambulatorial + Hospitalar","Só odontológico"],correta:2,explica:"Ambulatorial + Hospitalar é o padrão (consultas, exames, urgência, cirurgias). Vender só 'Hospitalar' deixa o cliente sem consultas/exames."},
{pergunta:"Qual a carência e a regra do recém-nascido na obstetrícia?",opcoes:["Carência 24h","Parto: 300 dias; RN incluído sem carência em até 30 dias","Sem carência","Parto: 180 dias"],correta:1,explica:"Obstetrícia tem 300 dias de carência para parto a termo; o RN pode ser incluído sem carência em até 30 dias após o nascimento."},
{pergunta:"O que é a pegadinha do '\"Nacional\" que não é nacional'?",opcoes:["Não existe plano nacional","Amil Prata Adesão é 'categoria nacional' mas a rede real é só Curitiba","Todo nacional cobre o mundo","Nacional é mais barato"],correta:1,explica:"Alguns produtos são classificados como 'nacional' mas têm rede real restrita. Leia as especificações e não prometa o que não existe."},
{pergunta:"Em planos regionais, a urgência nacional é limitada a quanto tempo de atendimento ambulatorial?",opcoes:["24 horas","12 horas (depois, se não internar, pode direcionar ao SUS)","48 horas","Ilimitado"],correta:1,explica:"A urgência nacional via rede Abrangente é limitada a 12h de atendimento ambulatorial. Se houver internação (risco de vida), a cobertura é integral."},
{pergunta:"Como incide a coparticipação em exames?",opcoes:["Valor fixo","Porcentagem (20-50%) com teto máximo","Sempre R$10","Não incide"],correta:1,explica:"Exames: porcentagem (20-50%) com teto. Ex.: 30% de um exame de R$200 = R$60 (teto R$220 na Unimed PF). Consultas costumam ser valor fixo."},
{pergunta:"A coparticipação TOTAL incide sobre o quê?",opcoes:["Só terapias","Consultas + exames + terapias + internamento","Nada","Só consultas"],correta:1,explica:"Total = incide em tudo (mensalidade menor, ideal p/ quem usa pouco). Parcial = só terapias. Sem coparticipação = mensalidade maior."},
{pergunta:"No PS, quando a coparticipação cessa?",opcoes:["Nunca cessa","Quando o paciente é efetivamente internado","Após 1 hora","Sempre é isenta"],correta:1,explica:"O atendimento de PS sem internação é cobrado como consulta ambulatorial (tem coparticipação). Só cessa quando o paciente é efetivamente internado."},
{pergunta:"Em internação, quem é obrigatoriamente acompanhado por lei?",opcoes:["Todos os adultos","Menores de 18 e maiores de 60 anos","Ninguém","Só gestantes"],correta:1,explica:"Por lei, menores de 18 e maiores de 60 têm direito a acompanhante, tanto em enfermaria quanto apartamento."},
{pergunta:"Qual a carência para usar um upgrade de enfermaria para apartamento?",opcoes:["Imediato","6 meses","30 dias","300 dias"],correta:1,explica:"O upgrade pode ser feito a qualquer momento, mas tem 6 meses de carência para uso. Para gestantes, compare: diferença mensal × 10 meses vs. upgrade particular."},
{pergunta:"Por que o plano compulsório é ~10% mais barato que o flex?",opcoes:["Tem menos cobertura","Todos os elegíveis entram, diluindo o risco (sem seleção adversa)","É só para grandes empresas","Não tem rede"],correta:1,explica:"No compulsório 100% da massa entra (saudáveis + doentes), diluindo o risco. No flex há seleção adversa, por isso ~10% mais caro."},
{pergunta:"Qual operadora chama o flex de 'Opcional'?",opcoes:["Amil","SulAmérica","Bradesco","Unimed"],correta:2,explica:"Bradesco usa 'Opcional'; SulAmérica usa 'Flex'; Amil usa 'Adesão' para o não-compulsório. Compulsório é termo comum a todas."},
{pergunta:"Qual das 4 datas indica quando a cobertura realmente começa?",opcoes:["Assinatura","Vigência","Pagamento","Vencimento"],correta:1,explica:"A vigência é quando a cobertura começa. A assinatura não garante cobertura. Em Amil/SulAmérica/Bradesco PJ, a vigência só inicia após o pagamento."},
{pergunta:"Em quais operadoras a vigência só inicia APÓS o pagamento?",opcoes:["Unimed PF","Amil, SulAmérica e Bradesco (PJ)","Clinipam","Paraná Clínicas"],correta:1,explica:"Em Amil/SulAmérica/Bradesco PJ: assinou → boleto → pagou → só então a vigência inicia. Clinipam/Paraná já ativam ao assinar."},
{pergunta:"Na transição entre planos, qual a regra de ouro?",opcoes:["Cancelar o antigo primeiro","Só cancelar o antigo APÓS a nova operadora aceitar o contrato","Manter os dois","Não documentar"],correta:1,explica:"Nunca cancele o antigo antes da aprovação do novo — risco de o cliente ficar sem plano. Documente tudo por escrito."},
{pergunta:"Qual a multa de cancelamento de um PJ antes dos 12 meses?",opcoes:["Sem multa","50% das parcelas restantes + aviso de 2 meses","100% do contrato","Uma mensalidade"],correta:1,explica:"PJ: aviso prévio de 2 meses + multa de 50% das parcelas restantes. PF não tem multa (bilateral)."},
{pergunta:"Qual a diferença entre cancelamento e exclusão?",opcoes:["São iguais","Exclusão retira UMA pessoa sem cancelar o contrato; não segue a regra dos 2 meses","Exclusão é mais cara","Cancelamento é por pessoa"],correta:1,explica:"Exclusão = tirar um beneficiário mantendo o contrato. Cada operadora tem seu ciclo (Unimed fecha dia 26). O excluído mantém cobertura até o fim do mês."},
{pergunta:"Até que dia a Unimed aceita movimentações no sistema?",opcoes:["Dia 5","Dia 15","Dia 26","Último dia"],correta:2,explica:"A Unimed fecha movimentações no dia 26; após isso, a exclusão vale só no mês seguinte."},
{pergunta:"Quais as 4 carências máximas da ANS?",opcoes:["Todas 180 dias","24h urgência / 180 dias demais / 300 dias parto / 24 meses preexistente","Todas zero","30 dias tudo"],correta:1,explica:"Urgência/emergência 24h; demais procedimentos 180 dias; parto 300 dias; doença preexistente (CPT) 24 meses."},
{pergunta:"Quais 3 carências NUNCA reduzem (nem por campanha ou aproveitamento)?",opcoes:["Consultas, exames, cirurgias","Parto, CPT (preexistente) e terapias","Urgência, internação, consultas","Nenhuma"],correta:1,explica:"Parto (300d), CPT (24m) e terapias (tendência recente) são fixos sempre — independem de aproveitamento, portabilidade ou campanha."},
{pergunta:"A carência promocional vale para quem?",opcoes:["Para qualquer inclusão futura","Apenas para quem contrata durante a campanha — inclusões futuras seguem a contratual","Para sempre","Só para idosos"],correta:1,explica:"A promocional vale só na campanha. Dependentes incluídos depois seguem a carência CONTRATUAL. Explique sempre isso ao cliente."},
{pergunta:"Qual a diferença essencial entre portabilidade e aproveitamento?",opcoes:["São iguais","Portabilidade (lei) transfere TUDO inclusive parto/CPT, sem comissão; aproveitamento (comercial) reduz a maioria, paga comissão","Aproveitamento transfere tudo","Portabilidade não existe"],correta:1,explica:"Portabilidade = direito legal, transfere tudo (via assessoria jurídica, sem comissão, ~1% dos casos). Aproveitamento = comercial, ~99% dos casos, não inclui parto/CPT/terapias."},
{pergunta:"Por que NUNCA dizer 'não dá para fazer portabilidade'?",opcoes:["Porque é mentira útil","É direito do consumidor por lei — negar pode gerar processo; explique que fará aproveitamento","Porque dá comissão","Porque é proibido falar"],correta:1,explica:"Portabilidade é direito por lei. O corretor que nega pode ser processado. Diga que fará o aproveitamento (reduz a maioria) e ofereça assessoria jurídica se ele insistir na total."},
{pergunta:"O que é uma operadora 'congênere'?",opcoes:["Operadora falida","Operadora do mesmo tipo/segmento da anterior — afeta o nível de aproveitamento","Operadora nacional","Operadora regional"],correta:1,explica:"Congênere = mesmo tipo (ambas operadoras ou ambas seguradoras). Quando congênere, o aproveitamento tende a ser máximo."},
{pergunta:"Quanto tempo dura a CPT para uma doença preexistente declarada?",opcoes:["6 meses","12 meses","24 meses","Permanente"],correta:2,explica:"CPT = 24 meses de restrição para procedimentos de alta complexidade e cirurgias relacionados à doença preexistente. Consultas e exames simples ficam liberados."},
{pergunta:"O que é um PAC?",opcoes:["Plano de Acompanhamento","Procedimento de Alta Complexidade — os que entram na regra de CPT","Pagamento Antecipado","Plano Adicional de Cobertura"],correta:1,explica:"PAC = Procedimento de Alta Complexidade (ex.: ressonância). Fisioterapia NÃO é PAC. Numa hérnia, a CPT afeta ressonância/cirurgia mas não a fisioterapia."},
{pergunta:"Qual a regra ética absoluta sobre a Declaração de Saúde?",opcoes:["Pode orientar omissão por telefone e por escrito","Nunca orientar omissão POR ESCRITO; explicar cenários por telefone e o cliente decide","Sempre omitir","Preencher pelo cliente sem perguntar"],correta:1,explica:"Jamais oriente omissão por escrito (processo criminal). Você pode explicar os cenários por telefone. Documente suas orientações sempre."},
{pergunta:"Pessoa com CPT que entra em urgência tem direito a:",opcoes:["Nada","12h de atendimento ambulatorial; se internar (risco de vida), cobertura integral mesmo em CPT","Só consulta","Reembolso"],correta:1,explica:"Mesmo em CPT, a operadora deve dar 12h de atendimento de urgência; havendo internação por risco de vida, cobre integralmente."},
{pergunta:"Qual o teto de reajuste PF em 2025-2026 (ANS)?",opcoes:["6,06%","10%","Sem teto","18%"],correta:0,explica:"O teto ANS para PF em 2025-2026 é 6,06%. PJ e adesão não têm teto."},
{pergunta:"Pela ANS, a última faixa etária (59+) não pode custar mais que quantas vezes a primeira?",opcoes:["2x","6x","10x","Sem limite"],correta:1,explica:"A faixa 10 (59+) não pode superar 6x a faixa 1 (0-18). São 10 faixas etárias definidas pela ANS."},
{pergunta:"Desde 2022 (STF), o Rol de Procedimentos da ANS é:",opcoes:["Taxativo","Exemplificativo — cobre não listados com justificativa médica","Opcional","Foi extinto"],correta:1,explica:"Desde 2022 o Rol é exemplificativo: os planos devem cobrir procedimentos fora da lista quando há justificativa médica."},
{pergunta:"Quais são os 6 pilares culturais da PlaneCorp?",opcoes:["Preço, Rede, Rapidez, Lucro, Volume, Marca","Clareza, Resultado com Propósito, Autorresponsabilidade, Aprendizado Contínuo, Cuidado Contínuo, Respeito e Harmonia","Só vender","Não há pilares"],correta:1,explica:"Os 6 pilares: Clareza, Resultado com Propósito, Autorresponsabilidade, Aprendizado Contínuo, Cuidado Contínuo, Respeito e Harmonia."},
{pergunta:"Segundo o Código de Honra, 'saber e não aplicar' equivale a:",opcoes:["Sucesso","Não saber","Aprender","Liderar"],correta:1,explica:"'Saber e não aplicar é o mesmo que não saber' — a cultura valoriza a aplicação prática."},
{pergunta:"Qual a essência cultural da PlaneCorp?",opcoes:["Lucro acima de tudo","Clareza gera confiança, cuidado gera valor, resultado gera impacto","Vender rápido","Trabalhar sozinho"],correta:1,explica:"Clareza gera confiança, cuidado gera valor e resultado gera impacto — somos consultivos, humanos e orientados a resultado."},
{pergunta:"Quais são, em ordem, os 7 passos do processo de venda?",opcoes:["Cotação, captação, venda","Captação, Levantamento, Cotação, Apresentação, Acompanhamento, Fechamento, Pós-venda","Só fechamento","Pós-venda primeiro"],correta:1,explica:"Captação → Levantamento → Cotação → Apresentação → Acompanhamento → Fechamento → Pós-venda."},
{pergunta:"Qual o princípio fundamental da venda consultiva?",opcoes:["Falar muito","Quem responde, perde. Quem pergunta, controla","Baixar o preço","Fechar no 1º contato"],correta:1,explica:"Quanto mais você pergunta, mais elementos o cliente te dá — até vender para si mesmo."},
{pergunta:"Qual a média de pontos de contato até o fechamento?",opcoes:["1","2-3","8-9","30"],correta:2,explica:"A média é 8-9 contact points. Feche o circuito com perguntas a cada acompanhamento."},
{pergunta:"Quantas perguntas tem o roteiro de anamnese comercial?",opcoes:["3","5","10","20"],correta:2,explica:"São 10 perguntas no roteiro de anamnese — de 'para você, família ou empresa?' a 'quantas consultas fez no último ano?'."},
{pergunta:"Qual pergunta 'descobre tudo' quando o cliente já tem plano?",opcoes:["Quanto você ganha?","O que mais te incomoda hoje no plano? (revela a dor: preço ou qualidade)","Qual seu CPF?","Você gosta de mim?"],correta:1,explica:"'O que mais te incomoda hoje no plano?' faz o cliente revelar a dor. Há 2 caminhos na troca: preço ou qualidade — você precisa descobrir qual."},
{pergunta:"Para um cliente idoso (60+), o produto recomendado é:",opcoes:["PJ barato","PF obrigatório (proteção) + MediSênior","Adesão","Qualquer um"],correta:1,explica:"Idoso = PF obrigatório (proteção contra cancelamento) e MediSênior. Alto ticket; quem busca costuma ser o filho."},
{pergunta:"Qual é considerada 'a maior porta de entrada' para novos negócios?",opcoes:["Clientes sem plano","Empresas com reajuste abusivo — já motivadas a trocar","Gestantes","Crianças"],correta:1,explica:"Empresas com reajuste abusivo já estão motivadas; você só apresenta uma solução melhor com cotação comparativa."},
{pergunta:"Qual operadora tem o menor custo e representa 60-70% do volume?",opcoes:["Bradesco","Hapvida (Clinipam)","SulAmérica","Unimed"],correta:1,explica:"Hapvida: menor custo, argumento vs. SUS, maior operadora do Brasil após a fusão. Em toda proposta como a opção mais barata."},
{pergunta:"Qual o maior diferencial da Amil?",opcoes:["Ser a mais cara","Flexibilidade de CNPJ — une CNPJs, mescla estados/produtos, aceita 2 vidas","Só PF","Sem rede nacional"],correta:1,explica:"A Amil é a mais flexível para unir CNPJs diferentes, mesclar estados e produtos, e aceita a partir de 2 vidas. O Bronze é o produto-estrela regional."},
{pergunta:"No Amil Bronze, os hospitais N.S. das Graças, Vita e Rocio servem para:",opcoes:["Consultas eletivas","Apenas urgência e emergência (consulta é pela rede de médicos credenciados)","Cirurgia plástica","Nada"],correta:1,explica:"No Bronze esses hospitais são só para UE. Para consultas, o beneficiário usa a rede de médicos credenciados."},
{pergunta:"Qual o diferencial da Paraná Clínicas (linha antiga Standard)?",opcoes:["Cobertura nacional","Unidades próprias sem coparticipação em consulta e PA","Reembolso","Mais barata que Hapvida"],correta:1,explica:"As unidades próprias (Água Verde, CIC, Araucária, São José) não cobram coparticipação em consulta e pronto atendimento — ensine o cliente a usá-las."},
{pergunta:"Qual operadora NÃO deve ser indicada para SP ou RJ?",opcoes:["SulAmérica","Amil","Unimed Curitiba","Bradesco"],correta:2,explica:"A Unimed Curitiba não funciona bem em SP/RJ. Use SulAmérica, Amil ou Bradesco nessas praças."},
{pergunta:"Quantos médicos credenciados a Unimed Curitiba tem (marca mais forte da cidade)?",opcoes:["500","Mais de 5.000","100","50.000"],correta:1,explica:"A Unimed Curitiba tem +5.000 médicos credenciados e quase todos os hospitais da região (Marcelino, Constantini). Muitas vendas acontecem pela marca."},
{pergunta:"A SulAmérica e o Bradesco são seguradoras — o que isso implica?",opcoes:["Não têm rede","São obrigadas a oferecer reembolso (com teto) e vender por corretor","São mais baratas","Só vendem PF"],correta:1,explica:"Por serem seguradoras, oferecem reembolso (com teto) e só vendem por corretor. SulAmérica tem o Hospital Santa Cruz próprio; Bradesco é o mais premium/tradicional."},
{pergunta:"O MediSênior atende a partir de que idade?",opcoes:["18 anos","PF 49+ / PJ 44+","60 anos","65 anos"],correta:1,explica:"MediSênior: PF a partir de 49, PJ a partir de 44. Zero coparticipação, alto ticket — aceita quem outras recusam por idade."},
{pergunta:"A estratégia MediSênior de carência zero consiste em:",opcoes:["Esperar 24 meses","Ter pelo menos 1 mês de plano ativo em qualquer operadora antes de migrar","Pagar uma taxa","Não tem"],correta:1,explica:"Com 1 mês de plano ativo (ex.: Unimed PF, sem multa para cancelar), a pessoa migra para o MediSênior com carência zero."},
{pergunta:"Cliente em Fazenda Rio Grande/Paranaguá — qual operadora costuma cobrir?",opcoes:["Bradesco","Nossa Saúde (e PR Clínicas)","SulAmérica","Unimed"],correta:1,explica:"A Nossa Saúde cobre regiões que nenhuma outra atende. Use só quando não há alternativa para a localidade."},
{pergunta:"Na mesa PJ padrão de Curitiba, o que entra?",opcoes:["Só Bradesco","Unimed Flex 20 + Flex 50 + Amil Bronze + Hapvida Nosso Plano","Só Hapvida","Só MediSênior"],correta:1,explica:"Mesa PJ padrão Curitiba: Unimed Flex (20 e 50), Amil Bronze e Hapvida Nosso Plano — da rede premium ao menor preço."},
{pergunta:"Quantas vidas a Hapvida e a Amil aceitam no mínimo (PJ)?",opcoes:["10","2 vidas","30","100"],correta:1,explica:"Hapvida e Amil aceitam a partir de 2 vidas. PR Clínicas, Unimed, SulAmérica e Bradesco exigem 3 (Unimed tem ACP p/ 2 sem comissão)."},
{pergunta:"Qual o prazo crítico da Amil para aproveitamento de carência?",opcoes:["30 dias","60 dias entre rescisão do anterior e vigência do novo","90 dias","Sem prazo"],correta:1,explica:"Na Amil, o intervalo entre rescisão do anterior e vigência do novo não pode passar de 60 dias, ou perde a redução de carência."},
{pergunta:"Tempo mínimo de CNPJ MEI exigido pela maioria das operadoras:",opcoes:["1 mês","6 meses","12 meses","Não exige"],correta:1,explica:"A maioria (SulAmérica, PR Clínicas, Unimed, Amil, Bradesco, Hapvida) exige 6 meses de abertura para MEI."},
{pergunta:"O aproveitamento de carência da SulAmérica e do Bradesco exige:",opcoes:["Qualquer plano anterior","Produto do MESMO porte (nacional com nacional, mesma acomodação, mesma copart.)","Nenhum plano","1 mês de plano"],correta:1,explica:"SulAmérica e Bradesco têm regra rígida: aproveitamento só com produto do mesmo porte. A Amil/PR Clínicas são mais flexíveis."},
{pergunta:"Diante de 'tá muito caro', a melhor resposta é:",opcoes:["Baixar o preço na hora","'Me conta quanto você investe hoje? Vou comparar com o mercado'","Encerrar","Oferecer o mais caro"],correta:1,explica:"Descubra o valor atual para comparar e mostrar o ganho. Lembre: 'preço é o quinto elemento' — antes vêm dor, necessidade, experiência e perfil de uso."},
{pergunta:"Diante de 'Hapvida é ruim', o melhor argumento é:",opcoes:["Concordar e desistir","'Houve problemas no passado, mas mudou. Hoje é a maior do Brasil — o que importa é o atendimento na prática'","Falar mal da Hapvida","Oferecer só Bradesco"],correta:1,explica:"Reconheça o passado, mostre a mudança pós-fusão e foque no atendimento prático. A Hapvida é a opção de menor preço em toda proposta."},
{pergunta:"'Conte as coisas ruins com entusiasmo' significa:",opcoes:["Mentir","Apresentar o lado positivo: 'tem carência, mas consultas e exames já liberam de imediato!'","Esconder a carência","Não falar nada"],correta:1,explica:"Apresente a mesma informação com viés positivo, destacando o que o cliente ganha — sem mentir."},
{pergunta:"'Não veja o cliente com o seu bolso' quer dizer:",opcoes:["Cobrar caro","Nunca presumir o poder aquisitivo — apresentar as opções e deixar o cliente decidir","Vender o mais barato","Esconder preços"],correta:1,explica:"Quem limita a oferta achando que o cliente 'não vai pagar' perde vendas. Apresente as opções (3 cenários) e deixe-o decidir."},
{pergunta:"Por que 'Adesão' nunca é 'Pessoa Física'?",opcoes:["São iguais","Se há administradora no meio, é adesão (reajuste 20-25%, operadora pode cancelar) — mesmo p/ 1 pessoa","PF é mais cara","Adesão não existe"],correta:1,explica:"Tendo administradora, é adesão — com reajuste e cancelamento diferentes — mesmo para uma única pessoa."},
{pergunta:"Confundir 'Titular' com 'Titular Financeiro' no cadastro pode:",opcoes:["Dar desconto","Cancelar o contrato","Zerar carência","Aumentar comissão"],correta:1,explica:"São campos diferentes (quem usa vs. quem paga). Trocá-los pode cancelar o contrato — caso real do treinamento."},
{pergunta:"'Compulsório' significa que:",opcoes:["A empresa é obrigada a ter plano","TODOS os elegíveis entram (dilui risco, ~10% mais barato)","Só o dono entra","É proibido","É proibido"],correta:1,explica:"Compulsório = todos os elegíveis aderem (não que a empresa é forçada a ter plano). Isso dilui o risco e baixa o preço ~10%."},
{pergunta:"Velocidade na venda — qual a orientação?",opcoes:["Segurar a proposta para criar desejo","Não segurar proposta; responder no canal que o cliente prefere (áudio/vídeo/texto)","Só atender por e-mail","Demorar 1 semana"],correta:1,explica:"O cliente pronto fecha com quem atendeu melhor e mais rápido. Pergunte o canal preferido e responda nele."},
{pergunta:"Sobre estornos de comissão, a orientação é:",opcoes:["Pânico total","Não se preocupar excessivamente — venda bem feita raramente cancela; a melhor proteção é a qualidade","Nunca vender","Cobrar o cliente"],correta:1,explica:"Uma venda bem feita (produto certo p/ necessidade certa) raramente resulta em cancelamento. A qualidade da venda é a melhor proteção contra estorno."},
{pergunta:"Qual ferramenta a PlaneCorp usa como CRM no processo de venda?",opcoes:["Excel","Pipedrive","Caderno","Nenhuma"],correta:1,explica:"O CRM citado nos 7 passos é o Pipedrive, usado da captação ao pós-venda."},
{pergunta:"Para gestante, qual o direcionamento correto?",opcoes:["Plano sem obstetrícia","Com obstetrícia + apartamento recomendado + contratação urgente (300 dias de carência de parto)","Adiar a contratação","Só PF"],correta:1,explica:"Gestante: com obstetrícia, apartamento recomendado e contratação urgente — o parto tem 300 dias de carência e a maternidade precisa estar na rede."},
{pergunta:"Cliente quer o Hospital Marcelino Champagnat. Qual NÃO inclui?",opcoes:["Unimed","Amil Prata+","SulAmérica/Bradesco","Amil Bronze"],correta:3,explica:"Marcelino Champagnat está em Unimed, Amil Prata+, SulAmérica e Bradesco — NÃO no Amil Bronze. Verifique a rede antes de prometer."},
{pergunta:"Para apenas 2 vidas, quais operadoras são as melhores opções?",opcoes:["Bradesco e SulAmérica","Amil (mais flexível), Hapvida e Select","Unimed e PR Clínicas","Nenhuma aceita"],correta:1,explica:"Poucas operadoras aceitam 2 vidas. Amil é a mais flexível; Hapvida e Select também aceitam. Unimed/PR Clínicas exigem 3."},
{pergunta:"Para um cliente que diz 'quero o melhor, preço não é prioridade':",opcoes:["Hapvida","Bradesco Top Nacional + SulAmérica Especial Sem","Amil Bronze","PR Clínicas Standard"],correta:1,explica:"Perfil premium: Bradesco Top Nacional (mais tradicional) + SulAmérica Especial Sem. Rede premium, tradição e reembolso."},
{pergunta:"O que o checklist manda fazer no pós-venda?",opcoes:["Nada","Confirmar carteirinha/app, orientar uso, cancelar plano anterior na data e agendar acompanhamento em 30 dias","Cobrar o cliente","Vender outro plano"],correta:1,explica:"Pós-venda: cliente recebeu carteirinha/app, foi orientado sobre o uso, o plano anterior foi cancelado na data certa e há acompanhamento em 30 dias."},
{pergunta:"Qual a frase que resume o corretor PlaneCorp?",opcoes:["Quem dá mais desconto vende mais","O corretor que mais estuda é o que mais vende","Preço acima de tudo","Venda e esqueça"],correta:1,explica:"'O corretor que mais estuda é o que mais vende.' A PlaneCorp é consultiva, humana e orientada a resultado."},
{pergunta:"Quantas faixas etárias a ANS define para precificação?",opcoes:["5","8","10","12"],correta:2,explica:"São 10 faixas etárias (de 0-18 até 59+). A última não pode custar mais que 6x a primeira."},
{pergunta:"O reembolso é uma obrigação de qual tipo de empresa?",opcoes:["Operadora","Seguradora (SulAmérica, Bradesco)","Administradora","MEI"],correta:1,explica:"Por não terem rede própria, as seguradoras são obrigadas por lei a oferecer reembolso (com teto)."},
{pergunta:"O documento essencial para aproveitar carência de um plano anterior é:",opcoes:["RG","Carta de permanência (peça o quanto antes)","CNH","Comprovante de renda"],correta:1,explica:"A carta de permanência comprova o tempo de plano anterior. Peça cedo — na Amil o intervalo até a nova vigência não pode passar de 60 dias."},
{pergunta:"Qual o melhor resumo da árvore de decisão por orçamento?",opcoes:["Tudo Bradesco","Barato → Hapvida; intermediário → Amil Bronze/PR Standard; top → Unimed/SulAmérica/Bradesco","Tudo Hapvida","Só nacional"],correta:1,explica:"Barato → Hapvida; intermediário → Amil Bronze ou PR Clínicas Standard; top → Unimed, SulAmérica ou Bradesco. Se não sabe, monte 3 cenários."}
];

/* =====================================================================
   SULAMÉRICA SAÚDE PME e ODONTO PME — Treinamento (PJ)
   Fonte: Manual de Treinamento SulAmérica PME (Folheto Maio/2026 +
   Tabela de Coparticipação PME I + referências ANS). Sem redução.
   ===================================================================== */
const SULA=[

/* ===================== PARTE 1 ===================== */
{id:1,titulo:"Fundamentos da Saúde Suplementar",desc:"O sistema regulado pela ANS, o Rol, segmentação, coletivo empresarial, rede, reembolso e o vocabulário essencial do consultor.",modulos:[
{id:1,num:1,tempo:"8 min",titulo:"ANS, Rol e segmentação",html:`
<p>Um consultor especialista não começa decorando tabelas — começa entendendo o sistema. Plano de saúde privado no Brasil é regulado pela <strong>ANS</strong>, tem cobertura mínima vinculada ao <strong>Rol de Procedimentos e Eventos em Saúde</strong>, respeita a <strong>segmentação</strong> contratada e funciona com regras próprias para contratação, carência, reajuste, rede, reembolso e movimentação cadastral.</p>
<div class="callout key"><h4>Onde a ANS aparece na venda</h4><p><strong>Antes</strong> da venda (define conceitos e limites), <strong>durante</strong> (o cliente pergunta sobre cobertura, carência, rede e reajuste) e <strong>depois</strong> (o contrato e a operação precisam respeitar obrigações cadastrais e assistenciais).</p></div>
<ul>
<li>O <strong>Rol</strong> é a lista-base de cobertura obrigatória, respeitada a segmentação contratada.</li>
<li>A <strong>segmentação assistencial</strong> define o tipo de cobertura: ambulatorial, hospitalar com ou sem obstetrícia, odontológica ou referência.</li>
<li>O <strong>plano coletivo empresarial</strong> exige vínculo com pessoa jurídica; no PME isso precisa estar documentado e coerente.</li>
<li><strong>Carência e CPT não são a mesma coisa:</strong> carência é espera por cobertura; CPT restringe eventos relacionados a doença/lesão preexistente declarada.</li>
<li>Reajuste de planos coletivos segue regras próprias; contratos de pequeno porte entram em lógica de <strong>agrupamento de contratos</strong> conforme norma da ANS.</li>
</ul>
<h3>Segmentação: a base para não vender errado</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Segmentação</th><th>O que envolve</th><th>Cuidado de venda</th></tr></thead><tbody>
<tr><td>Ambulatorial + Hospitalar com Obstetrícia</td><td>Consultas, exames, terapias, procedimentos ambulatoriais, cirurgias, internações e partos conforme contrato</td><td>É a opção mais completa do escopo médico-hospitalar usual do PME</td></tr>
<tr><td>Hospitalar com Obstetrícia</td><td>Urgência/emergência, pré-natal, cirurgias, internações e parto conforme material</td><td>Não vender como plano de rotina ambulatorial; validar cobertura de consultas e exames</td></tr>
<tr><td>Odontológica</td><td>Procedimentos odontológicos conforme plano, Rol e serviços extras</td><td>Não confundir rede, carência e reembolso odontológico com regras do plano de saúde</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Mentalidade de especialista</h4><p>O consultor iniciante tenta vender pelo preço. O especialista vende por <strong>aderência</strong>: quem é o CNPJ, quem são as vidas, qual risco de carência/CPT, qual rede resolve a rotina da empresa, qual plano cabe no orçamento e quais promessas precisam ficar escritas no contrato.</p></div>`},
{id:2,num:2,tempo:"6 min",titulo:"Vocabulário essencial do consultor",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Termo</th><th>Definição prática</th><th>Como explicar ao cliente</th></tr></thead><tbody>
<tr><td>Operadora/seguradora</td><td>Empresa responsável pela assistência ou cobertura</td><td>É quem administra rede, autorizações, reembolso, atendimento e contrato</td></tr>
<tr><td>Titular</td><td>Pessoa vinculada à empresa que dá origem à elegibilidade</td><td>Funcionário, sócio, administrador ou categoria aceita que entra como principal</td></tr>
<tr><td>Dependente</td><td>Pessoa vinculada ao titular por relação aceita em contrato</td><td>Cônjuge, companheiro, filhos, enteados e outras hipóteses conforme regra</td></tr>
<tr><td>Agregado</td><td>Familiar aceito em condições específicas, não equivalente ao dependente padrão</td><td>Não é automático; precisa cumprir idade, vínculo, plano anterior e regra de implantação</td></tr>
<tr><td>Rede referenciada</td><td>Prestadores credenciados ao plano</td><td>É onde o segurado consegue atendimento direto, conforme plano e região</td></tr>
<tr><td>Reembolso</td><td>Devolução parcial/total conforme limite contratual para atendimento fora da rede</td><td>Não é cheque em branco; depende de tabela, plano, procedimento e documentação</td></tr>
<tr><td>Coparticipação</td><td>Valor pago pelo segurado quando usa determinados serviços</td><td>No PME I, regra de 30% com limite por evento ou valor fixo em internação</td></tr>
<tr><td>Carência</td><td>Prazo de espera para usar certas coberturas</td><td>O relógio começa na vigência; algumas situações têm prazos menores ou podem ter redução</td></tr>
<tr><td>CPT</td><td>Cobertura Parcial Temporária para doença/lesão preexistente</td><td>Por até 24 meses, limita eventos cirúrgicos, leitos de alta tecnologia e PAC relacionados à condição</td></tr>
<tr><td>Vigência</td><td>Data em que o contrato começa a valer</td><td>No PME, inicia à zero hora do dia subsequente à quitação do boleto</td></tr>
</tbody></table></div>
<div class="callout warn"><h4>Coletivo empresarial PME</h4><p>A venda nasce de três validações: o <strong>CNPJ pode contratar</strong>, a <strong>massa elegível está correta</strong> e <strong>cada pessoa incluída tem documentação compatível</strong> com a categoria informada. O material SulAmérica PME trabalha empresas de 3 a 29 vidas, mínimo de 1 titular.</p></div>`}
],quiz:[
{pergunta:"Qual a diferença entre carência e CPT?",opcoes:["São sinônimos","Carência é prazo de espera por cobertura; CPT restringe por até 24 meses eventos ligados a doença/lesão preexistente declarada","CPT é mais curta que a carência","Carência só vale para parto"],correta:1,explica:"Carência = espera por cobertura. CPT = Cobertura Parcial Temporária, até 24 meses, restringindo eventos cirúrgicos, leitos de alta tecnologia e PAC relacionados à condição preexistente declarada."},
{pergunta:"O Rol de Procedimentos da ANS é:",opcoes:["Uma tabela de preços","A lista-base de cobertura obrigatória, respeitada a segmentação contratada","Exclusivo do odonto","Opcional"],correta:1,explica:"O Rol é a cobertura mínima obrigatória, sempre respeitando a segmentação contratada (ambulatorial, hospitalar c/ ou s/ obstetrícia, odontológica ou referência)."},
{pergunta:"Qual a faixa de vidas do Saúde PME no material SulAmérica?",opcoes:["1 a 2 vidas","3 a 29 vidas, mínimo de 1 titular","30 a 99 vidas","100+ vidas"],correta:1,explica:"O material trabalha empresas de 3 a 29 vidas com mínimo de 1 titular. Dependente não substitui titular."}
]},

/* ===================== PARTE 2 ===================== */
{id:2,titulo:"Visão SulAmérica e Portfólio",desc:"Como o portfólio se organiza (Direto e nacionais), os benefícios adicionais, a régua de valor e o aprofundamento dos planos.",modulos:[
{id:3,num:3,tempo:"7 min",titulo:"Como o portfólio se organiza",html:`
<p>Não existe uma única venda SulAmérica: existe a escolha da <strong>linha certa</strong> para o perfil de uso, orçamento, região, expectativa de rede e maturidade do RH. O material divide a oferta médica em planos <strong>Direto</strong> (regional/estadual e Direto Nacional) e planos nacionais como <strong>Exato, Clássico, Especial 100, Especial Mais, Executivo e Prestige</strong>.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Linha</th><th>Posicionamento</th><th>Cliente típico</th><th>Risco de explicação</th></tr></thead><tbody>
<tr><td>Direto regional/estadual</td><td>Custo-benefício com rede qualificada por região, abrangência delimitada</td><td>Empresa concentrada em uma praça, prioridade em preço e rede local</td><td>Não vender como nacional; conferir município e rede</td></tr>
<tr><td>Direto Nacional</td><td>Alternativa nacional da linha Direto, apelo de custo-benefício</td><td>Empresa com deslocamentos/filiais, ainda sensível a preço</td><td>Checar rede e reembolso; não equiparar a linhas executivas</td></tr>
<tr><td>Exato</td><td>Entrada nacional com rede, acomodação e reembolso conforme plano</td><td>Quer abrangência nacional com custo controlado</td><td>Explicar diferença para Clássico e Direto Nacional</td></tr>
<tr><td>Clássico / 100 / Vital</td><td>Faixa intermediária nacional, variações de rede e benefícios</td><td>Busca equilíbrio entre rede e preço</td><td>Não presumir todos os benefícios em todas as variações</td></tr>
<tr><td>Especial 100 / Vital</td><td>Degrau superior, rede e reembolso mais competitivos</td><td>Profissionais, sócios e equipes que valorizam acesso e reembolso</td><td>Validar padrão RC/RM/R1/R2 quando aplicável</td></tr>
<tr><td>Especial Mais / Vital</td><td>Maior valor agregado, rede nacional e benefícios relevantes</td><td>Cliente que compara experiência, rede e diferenciais</td><td>Confirmar elegibilidade de benefícios por plano e região</td></tr>
<tr><td>Executivo</td><td>Público de maior exigência, reembolso e atendimento robustos</td><td>Diretores, sócios, empresas premium</td><td>Alinhar preço e expectativa de hospitais premium</td></tr>
<tr><td>Prestige</td><td>Topo de linha, benefícios e atendimento diferenciados</td><td>Executivos e alta renda que esperam serviço premium</td><td>Não prometer disponibilidade fora das condições contratuais</td></tr>
</tbody></table></div>`},
{id:4,num:4,tempo:"6 min",titulo:"Benefícios adicionais e a régua de valor",html:`
<p>Além da cobertura legal e contratual, o segurado SulAmérica pode contar com serviços cuja elegibilidade depende do plano, região, rede e regras. Use-os para aumentar a percepção de valor — sempre com a frase de segurança: <em>"vou confirmar a regra vigente para este plano e esta praça no material oficial antes de colocar na proposta"</em>.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Benefício</th><th>Em linguagem de cliente</th><th>Quando vira argumento forte</th></tr></thead><tbody>
<tr><td>Médico na Tela</td><td>Teleconsulta com especialistas / pronto atendimento digital</td><td>Funcionários remotos, pais com crianças, equipes que querem agilidade</td></tr>
<tr><td>Psicólogo na Tela</td><td>Sessões de psicoterapia por vídeo, agendamento pelo app</td><td>Clientes sensíveis a saúde mental e bem-estar</td></tr>
<tr><td>App SulAmérica Saúde</td><td>Carteirinha digital, rede, extrato, status de autorizações e reembolso</td><td>RH que quer reduzir atrito operacional</td></tr>
<tr><td>Descontos SulA Mais</td><td>Descontos em farmácias, vacinas, materiais e serviços</td><td>Cliente que valoriza benefício tangível no dia a dia</td></tr>
<tr><td>Check-up</td><td>Utilização anual para titulares em planos elegíveis</td><td>Sócios, executivos e empresas com foco em prevenção</td></tr>
<tr><td>Coleta domiciliar</td><td>Coleta de exames em casa/escritório, conforme rede/região/plano</td><td>Clientes que prezam conveniência</td></tr>
<tr><td>Seguro/assistência viagem</td><td>Serviços em viagens nacionais/internacionais em planos elegíveis</td><td>Equipes comerciais, executivos e viajantes</td></tr>
<tr><td>Central exclusiva / Prestige</td><td>Atendimento diferenciado e benefícios de alto padrão</td><td>Cliente premium que compra experiência</td></tr>
</tbody></table></div>
<div class="callout key"><h4>A régua de valor (5 dimensões)</h4><p><strong>1. Abrangência</strong> (onde será atendido) · <strong>2. Rede</strong> (quais hospitais/labs importam) · <strong>3. Reembolso</strong> (se usa médico particular) · <strong>4. Conforto</strong> (enfermaria ou apartamento) · <strong>5. Operação</strong> (app, autorizações, faturamento, movimentação). Sempre confirme rede e reembolso na fonte oficial, nunca por memória ou print antigo.</p></div>`},
{id:5,num:5,tempo:"7 min",titulo:"Planos em profundidade: Direto e nacionais",html:`
<h3>Linha Direto: regionais, estadual e Direto Nacional</h3>
<p>É o ponto de entrada para empresas que buscam custo-benefício com rede qualificada. Exemplos citados: Direto Aracaju, Salvador, Paraíba, BH, BSB, Rio II, SP, Campinas, Recife, João Pessoa, Uberlândia e <strong>Direto Nacional</strong>.</p>
<div class="callout warn"><h4>Cuidado com abrangência</h4><p>"Minha empresa fica em São Paulo" não basta. Pergunte onde moram os funcionários, onde trabalham, quais hospitais usam e se há viagens ou filiais. Abrangência errada vira problema de utilização, reclamação e cancelamento.</p></div>
<h3>Planos nacionais: a escada</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Plano</th><th>Leitura comercial</th><th>Pergunta decisiva</th></tr></thead><tbody>
<tr><td>Exato</td><td>Entrada nacional com foco em equilíbrio econômico</td><td>A rede mínima desejada está atendida?</td></tr>
<tr><td>Clássico</td><td>Intermediário com mais robustez de rede</td><td>Qual hospital/laboratório precisa estar no pacote?</td></tr>
<tr><td>Especial 100</td><td>Faixa superior, relevante para quem valoriza rede e reembolso</td><td>Quanto de reembolso o cliente espera por consulta?</td></tr>
<tr><td>Especial Mais</td><td>Maior valor agregado e percepção de experiência</td><td>O cliente valoriza benefícios ou só preço?</td></tr>
<tr><td>Executivo</td><td>Produto para público executivo e exigente</td><td>O orçamento permite proteger experiência e retenção?</td></tr>
<tr><td>Prestige</td><td>Topo do portfólio, atendimento e benefícios premium</td><td>A decisão é preço ou tranquilidade premium?</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>Rede referenciada: o que fecha ou derruba a venda</h4><p>Trabalhe com a rede oficial e atualizada, nunca por memória. A rede varia por plano, praça, acomodação e credenciamento. Frase correta: <em>"vou consultar a rede vigente para este plano e este município"</em>. Frase perigosa: <em>"tem tal hospital, eu lembro"</em>. Peça ao cliente a lista de hospitais/labs/médicos indispensáveis e classifique como obrigatório, desejável ou indiferente.</p></div>
<div class="callout tip"><h4>Acomodação</h4><p>Acomodação é o tipo de quarto em internação (enfermaria/coletivo ou apartamento/privativo), <strong>não</strong> a qualidade médica do atendimento. Pesa menos na rotina e muito no momento de internação, parto ou cirurgia.</p></div>`}
],quiz:[
{pergunta:"A linha Direto regional deve ser vendida como:",opcoes:["Plano nacional amplo","Custo-benefício com rede qualificada por região — conferir município e rede","O mais caro do portfólio","Igual ao Prestige"],correta:1,explica:"O Direto regional/estadual é custo-benefício com abrangência delimitada. Nunca venda como nacional; confira o município e a rede. Para abrangência nacional há o Direto Nacional e os planos nacionais."},
{pergunta:"Qual a frase correta ao falar de rede?",opcoes:["'Tem esse hospital, eu lembro'","'Vou consultar a rede oficial vigente para este plano e este município'","'Todos os planos têm todos os hospitais'","'Rede nunca muda'"],correta:1,explica:"Rede varia por plano, praça, acomodação e credenciamento. Sempre valide na fonte oficial; nunca prometa por memória."},
{pergunta:"O que é acomodação?",opcoes:["A qualidade médica do atendimento","O tipo de quarto na internação: enfermaria/coletivo ou apartamento/privativo","O valor do reembolso","A abrangência do plano"],correta:1,explica:"Acomodação é o tipo de quarto na internação — não a qualidade médica. Pesa principalmente em internação, parto e cirurgia."}
]},

/* ===================== PARTE 3 ===================== */
{id:3,titulo:"Contratação PME, Elegibilidade e Documentos",desc:"Condições de contratação, quem pode entrar, agregados, Regra Flex, Cuidado 360º, MEI e o checklist de proposta.",modulos:[
{id:6,num:6,tempo:"7 min",titulo:"Condições de contratação e PJ/MEI",html:`
<p>A venda PME é uma <strong>venda documental</strong>. Quem fecha sem validar elegibilidade cria retrabalho, atraso e risco de recusa. O material indica empresas de 3 a 29 vidas, mínimo de 1 titular, e adesão obrigatória de 100% de uma ou mais categorias, salvo regras específicas como a Regra Flex.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Regra</th><th>Resumo operacional</th><th>Atenção do consultor</th></tr></thead><tbody>
<tr><td>3 a 29 vidas</td><td>O total considera titulares e dependentes elegíveis</td><td>Não cotar PME com massa fora do intervalo sem validar produto</td></tr>
<tr><td>Mínimo de 1 titular</td><td>A contratação precisa de pelo menos uma vida titular</td><td>Dependente não substitui titular</td></tr>
<tr><td>Categorias elegíveis</td><td>Sócios, administradores/diretores, empregados, aprendizes, estagiários, expatriados, demitidos e aposentados conforme regra</td><td>Cada categoria tem documento próprio</td></tr>
<tr><td>Regra compulsória</td><td>Adesão de 100% de uma ou mais categorias escolhidas</td><td>Não selecionar categoria se não pretende incluir todos os elegíveis dela</td></tr>
<tr><td>Regra CBO</td><td>Contratação exclusiva para 100% de categorias CBO (diretores, gerentes, supervisores, coordenadores)</td><td>Análise usa família ocupacional no FGTS/CTPS; comprovar com FGTS + CTPS</td></tr>
<tr><td>CPF obrigatório</td><td>CPF de todos os beneficiários, inclusive menores de 18</td><td>Dado cadastral incompleto trava implantação e SIB</td></tr>
</tbody></table></div>
<div class="callout warn"><h4>Pessoa Jurídica e MEI</h4><p>Empresário Individual (natureza 213-5) é aceito somente após <strong>6 meses de constituição</strong>. Não são aceitas naturezas jurídicas de pessoa física (faixa 400-0 a 499-9). MEI exige documentação específica: matrícula MEI, declaração de autenticidade e comprovante de residência do titular dentro do prazo. Ex-cliente SulAmérica: novo contrato sujeito a análise após 6 meses do cancelamento e sem débitos.</p></div>`},
{id:7,num:7,tempo:"7 min",titulo:"Quem pode entrar e agregados",html:`
<p>A elegibilidade é uma árvore de decisão: identifique se é titular ou dependente, valide a categoria, verifique idade/vínculo/documentação e confirme se a opção de plano do dependente segue o titular.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Categoria</th><th>Critério resumido</th><th>Documento-chave</th></tr></thead><tbody>
<tr><td>Sócios</td><td>Constar em contrato social; regras de tempo quando houver vínculo familiar; adesão no CNPJ matriz salvo exceção</td><td>Contrato social registrado e alteração de inclusão</td></tr>
<tr><td>Administradores/diretores</td><td>Nomeados no contrato social por período mínimo, assinando como tal</td><td>Contrato social ou ata atualizada (S.A.)</td></tr>
<tr><td>Empregados</td><td>Comprovar vínculo empregatício</td><td>Relação do FGTS, eSocial ou CTPS</td></tr>
<tr><td>Dependentes</td><td>Cônjuge/companheiro, filhos/enteados até 44 anos, netos até 17 com regra de plano anterior, tutela e adoção</td><td>Certidões, declaração de união estável, termo de guarda, IR quando aplicável</td></tr>
<tr><td>Aprendizes</td><td>Maiores de 14 e menores de 24 anos</td><td>FGTS ou contrato de aprendiz/CTPS</td></tr>
<tr><td>Estagiários</td><td>Sem limite de idade</td><td>Contrato de estágio assinado</td></tr>
<tr><td>Expatriados/estrangeiros</td><td>Comprovar vínculo e permanência</td><td>Identidade/passaporte/visto/carta da empresa</td></tr>
<tr><td>Demitidos/aposentados</td><td>Somente com extensão de benefício legal concedida pela empresa</td><td>Carta padrão, comprovante do plano anterior, rescisão/aposentadoria</td></tr>
<tr><td>Prestadores de serviços</td><td>NÃO aceitos conforme material</td><td>Não se aplica</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>Agregados — redobre a atenção</h4><p>No Saúde PME, agregados são aceitos <strong>exclusivamente na implantação</strong> e com condições restritivas: idade máxima, plano anterior de 12 meses, sem declaração de saúde positiva, grupo acima de 5 vidas, e <strong>não válido para MEI</strong>. Pai, mãe, padrasto, madrasta, irmãos, genro e nora têm critérios próprios. O erro grave é tratar agregado como dependente automático.</p></div>`},
{id:8,num:8,tempo:"6 min",titulo:"Regra Flex, Cuidado 360º e checklist",html:`
<h3>Regra Flex (Saúde + Odonto)</h3>
<p>Permite condições mais flexíveis quando Saúde e Odonto são vendidos para a mesma empresa/CNPJ. Citada para empresas de 3 a 199 vidas no FGTS, com contratação sem exigência de 100% da empresa, grupos de cada produto podendo ser diferentes e demais critérios mantidos.</p>
<ul><li>Vendas para a mesma empresa/CNPJ.</li><li>Os grupos de Saúde e Odonto podem ser diferentes.</li><li>Não confundir flexibilização de massa com dispensa de documentação.</li><li>Critérios de aceitação, carência e elegibilidade permanecem.</li></ul>
<h3>Cuidado 360º</h3>
<p>Subsidia integralmente os prêmios de <strong>Odonto e Vida</strong> durante a vigência inicial do contrato de Saúde, limitado ao período previsto e às condições do contrato. Cancelar qualquer apólice da oferta pode descontinuar o conjunto. A implantação de Odonto e Vida ocorre em até 7 dias úteis após a do Saúde; o certificado de Vida pode ser liberado em até 30 dias.</p>
<div class="callout warn"><p>Não apresente o Cuidado 360º como "brinde eterno" — é uma oferta <strong>condicionada</strong> às regras, prazo e manutenção do contrato. O Odonto, mesmo na oferta, segue carências próprias por grupo.</p></div>
<div class="callout key"><h4>Checklist de proposta antes de transmitir</h4>
<ul style="margin:0">
<li>CNPJ, natureza jurídica e tempo de constituição validados</li>
<li>Total de vidas dentro do produto cotado</li>
<li>Categorias escolhidas e compulsoriedade conferidas</li>
<li>Lista de titulares, dependentes e agregados compatível com a regra</li>
<li>CPF de todos os beneficiários, inclusive menores</li>
<li>Documentos de empresa, vínculo e dependência legíveis e atualizados</li>
<li>Declaração de Saúde preenchida e assinada quando aplicável</li>
<li>Rede/reembolso/benefícios confirmados no material vigente</li>
<li>Carências e CPT explicadas por escrito</li>
<li>Vigência condicionada à aceitação e quitação do boleto comunicada ao cliente</li>
</ul></div>`}
],quiz:[
{pergunta:"Prestador de serviço PJ pode entrar como titular no Saúde PME?",opcoes:["Sim, sempre","Não — o material informa que prestadores de serviços não são aceitos","Sim, com 6 meses","Apenas como dependente"],correta:1,explica:"O material é explícito: prestadores de serviços não são aceitos no Saúde PME. Não construa a venda com base nessa massa."},
{pergunta:"MEI é aceito imediatamente após a abertura?",opcoes:["Sim","Não — somente após 6 meses de constituição, com documentação específica","Só com 12 meses","Nunca é aceito"],correta:1,explica:"O Empresário Individual (213-5) é aceito após 6 meses de constituição, com matrícula MEI, declaração de autenticidade e comprovante de residência do titular."},
{pergunta:"O que caracteriza um 'agregado' no Saúde PME?",opcoes:["É igual a dependente","Aceito só na implantação, com idade máxima, plano anterior de 12 meses, sem DS positiva, grupo acima de 5 vidas e não para MEI","Entra a qualquer tempo sem regra","É o titular"],correta:1,explica:"Agregado tem condições restritivas e só entra na implantação. O erro grave é tratá-lo como dependente automático. Pai/mãe/irmãos/genro/nora seguem essa regra."},
{pergunta:"O que é a Regra Flex?",opcoes:["Desconto no preço","Condição para Saúde + Odonto na mesma empresa/CNPJ, com flexibilização da exigência de 100%","Isenção de carência","Um plano premium"],correta:1,explica:"A Regra Flex flexibiliza a exigência de 100% quando Saúde e Odonto são vendidos para a mesma empresa, mantendo critérios de aceitação, carência e documentação."}
]},

/* ===================== PARTE 4 ===================== */
{id:4,titulo:"Carência, Redução e CPT",desc:"Prazos regulatórios, a tabela de carências SulAmérica PME, redução por plano anterior e a Cobertura Parcial Temporária.",modulos:[
{id:9,num:9,tempo:"7 min",titulo:"Carências: ANS e a tabela SulAmérica PME",html:`
<p>Carência derruba confiança quando explicada tarde. O especialista fala de carência <strong>antes</strong> do fechamento, não depois da primeira negativa.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Situação ANS</th><th>Prazo máximo geral</th></tr></thead><tbody>
<tr><td>Urgência e emergência</td><td>24 horas</td></tr>
<tr><td>Parto a termo</td><td>300 dias</td></tr>
<tr><td>Demais situações</td><td>180 dias</td></tr>
<tr><td>Coletivo 30+ com ingresso em até 30 dias</td><td>Pode dispensar carência e CPT (não aplicar automaticamente ao PME 3-29)</td></tr>
</tbody></table></div>
<h3>Tabela de carências Saúde PME (SulAmérica)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Grupo / Procedimentos</th><th>Contratual</th><th>Plano ant. 3-12 meses</th><th>Plano ant. +12 meses</th></tr></thead><tbody>
<tr><td>0 · Urgência e emergência</td><td>24h</td><td>24h</td><td>24h</td></tr>
<tr><td>1 · Consultas, cirurgias ambulatoriais sem anestesia geral, exames laboratoriais, RX simples, US sem doppler, acupuntura</td><td>15 dias</td><td>24h</td><td>24h</td></tr>
<tr><td>2 · Internações clínicas/cirúrgicas, hospital dia, doppler, tomografia, ressonância, medicina nuclear, endoscopia, laparoscopia, quimio, radio, diálises, imunobiológicos</td><td>180 dias</td><td>60 dias</td><td>24h</td></tr>
<tr><td>3 · Parto a termo</td><td>300 dias</td><td>300 dias</td><td>300 dias</td></tr>
<tr><td>4 · Transplantes de órgãos/tecidos e cirurgias com OPME/DMI</td><td>180 dias</td><td>180 dias</td><td>180 dias</td></tr>
<tr><td>5 · Internações psiquiátricas (incl. hospital dia)</td><td>180 dias</td><td>180 dias</td><td>120 dias</td></tr>
<tr><td>6 · Fisioterapia, psicologia, fonoaudiologia, terapia ocupacional e nutrição</td><td>180 dias</td><td>180 dias</td><td>180 dias</td></tr>
</tbody></table></div>`},
{id:10,num:10,tempo:"6 min",titulo:"Redução de carência e CPT",html:`
<h3>Redução por plano anterior</h3>
<p>Não é promessa genérica. Depende de plano anterior em congênere aceita, prazo entre saída e nova proposta, idade, quantidade de vidas, documentação e análise.</p>
<ul>
<li>Proposta transmitida em até <strong>60 dias</strong> do vencimento da última fatura paga.</li>
<li>Idade limite até <strong>64 anos, 11 meses e 29 dias</strong>.</li>
<li>Inclusões após 30 dias do evento (admissão, casamento, nascimento, adoção) não são elegíveis à redução.</li>
<li>Propostas com Declaração de Saúde positiva podem ter CPT de até 24 meses.</li>
<li>Há isenção de carência para grupos acima de 10 vidas, <strong>exceto</strong> parto, terapias não médicas e CPT.</li>
<li>A <strong>Carta de Permanência</strong> deve trazer titular/dependentes, empresa, congênere, acomodação e datas de início/fim.</li>
</ul>
<h3>Cobertura Parcial Temporária (CPT)</h3>
<p>Suspensão de cobertura, por até <strong>24 meses</strong>, para doenças/lesões preexistentes informadas na Declaração de Saúde — limitada a eventos cirúrgicos, leitos de alta tecnologia e PAC relacionados à condição. A pessoa pode ter cobertura para várias outras situações; só certos eventos ligados à doença declarada ficam restritos.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Condição declarada</th><th>Documentação comum</th></tr></thead><tbody>
<tr><td>Doença do coração / diabetes / pressão alta / renais</td><td>Relatório médico com estado atual e últimos exames de controle</td></tr>
<tr><td>Câncer</td><td>Relatório com evolução, procedimentos e laudo anatomopatológico</td></tr>
<tr><td>Doenças da coluna</td><td>Laudo de ressonância ou tomografia</td></tr>
<tr><td>Cirurgia / internação recente +5 dias</td><td>Relatório médico do procedimento/motivo e tratamento</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>Regra ética absoluta</h4><p>Nunca incentive omissão na Declaração de Saúde. Informação verdadeira protege o contrato, evita fraude e permite análise correta de carência/CPT.</p></div>`}
],quiz:[
{pergunta:"Na tabela SulAmérica PME, qual a carência de internações/exames complexos (grupo 2) para quem tem plano anterior acima de 12 meses?",opcoes:["180 dias","60 dias","24 horas","300 dias"],correta:2,explica:"Com plano anterior +12 meses, o grupo 2 cai para 24h. Contratual é 180 dias; com 3-12 meses de plano anterior, 60 dias."},
{pergunta:"Qual o prazo para transmitir a proposta e ter direito à redução de carência por plano anterior?",opcoes:["Até 30 dias do vencimento da última fatura","Até 60 dias do vencimento da última fatura paga","Até 90 dias","Não há prazo"],correta:1,explica:"A proposta deve ser transmitida em até 60 dias do vencimento da última fatura paga, com idade limite de 64a11m29d e congênere aceita, mediante análise."},
{pergunta:"O que é a CPT?",opcoes:["Carência comum de 24h","Suspensão de até 24 meses para eventos cirúrgicos/alta complexidade ligados a doença preexistente declarada","Cobertura total","Um desconto"],correta:1,explica:"CPT restringe por até 24 meses apenas os eventos de alta complexidade/cirúrgicos relacionados à doença preexistente declarada — o resto da cobertura segue normal."},
{pergunta:"Para grupos acima de 10 vidas há isenção de carência, exceto:",opcoes:["Consultas","Parto, terapias não médicas e CPT","Urgência","Exames"],correta:1,explica:"A isenção para 10+ vidas não cobre parto, terapias não médicas e CPT, que mantêm seus prazos."}
]},

/* ===================== PARTE 5 ===================== */
{id:5,titulo:"Coparticipação PME I",desc:"A regra dos 30% com limite por evento, a tabela completa por plano, exemplos de cálculo e como vender coparticipação com segurança.",modulos:[
{id:11,num:11,tempo:"7 min",titulo:"A regra e a tabela de limites",html:`
<p>Coparticipação reduz o prêmio, aumenta a percepção de responsabilidade no uso e pode ajudar a empresa a manter o benefício. A Tabela PME I combina <strong>30%</strong> com <strong>limites máximos por evento</strong> e <strong>valor fixo</strong> para internação não psiquiátrica.</p>
<div class="callout key"><h4>Fórmula prática</h4><p>Coparticipação ambulatorial = <strong>menor valor</strong> entre 30% do valor pago à rede/reembolso e o limite por evento do plano. Em internação hospitalar não psiquiátrica, aplica-se <strong>valor fixo por evento</strong>, independente da quantidade de dias.</p></div>
<ul>
<li>Incide sobre consultas, pronto-socorro, exames, terapias, procedimentos ambulatoriais e insumos decorrentes.</li>
<li>Em reembolso, o valor da coparticipação é descontado do valor a reembolsar ao titular.</li>
<li>Valores limites/fixos podem ser reajustados em maio de cada ano, conforme contrato.</li>
<li>Internações psiquiátricas têm condições próprias nas Condições Gerais.</li>
</ul>
<h3>Tabela de limites por evento (PME I, a partir de 30/05/2023)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Evento</th><th>Direto Reg/Nac</th><th>Exato</th><th>Clássico/100/Vital</th><th>Especial 100/Vital</th></tr></thead><tbody>
<tr><td>Consultas médicas</td><td>R$ 36,61</td><td>R$ 48,81</td><td>R$ 48,81</td><td>R$ 91,52</td></tr>
<tr><td>Pronto-socorro</td><td>R$ 109,83</td><td>R$ 152,54</td><td>R$ 152,54</td><td>R$ 170,84</td></tr>
<tr><td>Exames compl. A</td><td>R$ 61,02</td><td>R$ 73,22</td><td>R$ 73,22</td><td>R$ 85,42</td></tr>
<tr><td>Exames compl. B</td><td>R$ 146,44</td><td>R$ 183,05</td><td>R$ 183,05</td><td>R$ 207,45</td></tr>
<tr><td>Procedimentos ambulatoriais</td><td>R$ 183,05</td><td>R$ 195,25</td><td>R$ 195,25</td><td>R$ 244,06</td></tr>
<tr><td>Terapias</td><td>R$ 61,02</td><td>R$ 73,22</td><td>R$ 73,22</td><td>R$ 85,42</td></tr>
<tr><td>Internação não psiquiátrica</td><td>R$ 329,49</td><td>R$ 390,50</td><td>R$ 390,50</td><td>R$ 610,16</td></tr>
</tbody></table></div>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Evento</th><th>Especial Mais/Vital</th><th>Executivo R1-R3</th><th>Prestige</th></tr></thead><tbody>
<tr><td>Consultas médicas</td><td>R$ 91,52</td><td>R$ 183,05</td><td>R$ 207,45</td></tr>
<tr><td>Pronto-socorro</td><td>R$ 170,84</td><td>R$ 390,50</td><td>R$ 427,11</td></tr>
<tr><td>Exames compl. A</td><td>R$ 85,42</td><td>R$ 97,63</td><td>R$ 109,83</td></tr>
<tr><td>Exames compl. B</td><td>R$ 207,45</td><td>R$ 244,06</td><td>R$ 427,11</td></tr>
<tr><td>Procedimentos ambulatoriais</td><td>R$ 244,06</td><td>R$ 305,08</td><td>R$ 488,13</td></tr>
<tr><td>Terapias</td><td>R$ 85,42</td><td>R$ 109,83</td><td>R$ 183,05</td></tr>
<tr><td>Internação não psiquiátrica</td><td>R$ 610,16</td><td>R$ 695,58</td><td>R$ 854,22</td></tr>
</tbody></table></div>`},
{id:12,num:12,tempo:"6 min",titulo:"Exemplos de cálculo e como vender",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Exemplo</th><th>Cálculo</th><th>Resultado</th></tr></thead><tbody>
<tr><td>Consulta no Exato, custo R$ 120</td><td>30% × 120 = R$ 36; limite Exato = R$ 48,81</td><td>Cobra R$ 36 (menor que o limite)</td></tr>
<tr><td>Consulta no Exato, custo R$ 300</td><td>30% × 300 = R$ 90; limite Exato = R$ 48,81</td><td>Cobra R$ 48,81 (o limite trava)</td></tr>
<tr><td>Terapia no Executivo, custo R$ 500</td><td>30% × 500 = R$ 150; limite terapias = R$ 109,83</td><td>Cobra R$ 109,83</td></tr>
<tr><td>Internação não psiquiátrica no Prestige</td><td>Valor fixo por evento</td><td>Cobra R$ 854,22, independente dos dias</td></tr>
<tr><td>Reembolso com copart</td><td>O valor da coparticipação é abatido do reembolso devido</td><td>Cliente recebe reembolso líquido do desconto</td></tr>
</tbody></table></div>
<div class="callout key"><h4>Exames A, Exames B, procedimentos e terapias</h4><p>A tabela tem uma lista extensa de procedimentos classificados por categoria. Você não precisa decorar 70 páginas: saiba que a classificação existe, pode ser atualizada no site, e que o enquadramento define o limite aplicável. Na dúvida, consulte a tabela vigente — não tente adivinhar se um exame é A ou B.</p></div>
<div class="callout arg"><h4>Como vender coparticipação com segurança</h4>
<ul style="margin:0">
<li>Comece pela vantagem: prêmio menor e maior previsibilidade por limites máximos.</li>
<li>Explique o desconforto: quem usa paga uma parte; não é plano sem custo de utilização.</li>
<li>Mostre exemplos com números simples e com o limite aplicado.</li>
<li>Diga que os valores podem ser reajustados em maio conforme contrato.</li>
<li>Para empresas com alto uso de terapias, crônicos ou gestantes, simule cenários antes de recomendar.</li>
<li>Nunca prometa que a coparticipação será sempre baixa; ela depende do evento e da tabela vigente.</li>
</ul></div>`}
],quiz:[
{pergunta:"Qual o fator de coparticipação da Tabela PME I?",opcoes:["20%","30% com limite por evento e valor fixo de internação","50%","Valor fixo em tudo"],correta:1,explica:"PME I = 30% sobre o valor pago à rede/reembolso, limitado ao teto por evento do plano. Internação não psiquiátrica tem valor fixo por evento."},
{pergunta:"Consulta no plano Exato custou R$ 300. Quanto o segurado paga de coparticipação? (limite Exato consulta = R$ 48,81)",opcoes:["R$ 90","R$ 48,81 (o limite trava)","R$ 300","R$ 30"],correta:1,explica:"30% de R$ 300 = R$ 90, mas o limite por evento do Exato para consulta é R$ 48,81 — cobra-se o menor valor, R$ 48,81."},
{pergunta:"Como a coparticipação interage com o reembolso?",opcoes:["Não interage","O valor da coparticipação é descontado do valor a ser reembolsado ao titular","Dobra o reembolso","Anula o reembolso"],correta:1,explica:"Em reembolso, a coparticipação calculada é abatida do valor devido — o cliente recebe o reembolso líquido do desconto."},
{pergunta:"Internação não psiquiátrica no Prestige custa quanto de coparticipação?",opcoes:["30% do total","R$ 854,22 por evento, independente dos dias","R$ 100 por dia","Isento"],correta:1,explica:"Internação não psiquiátrica tem valor fixo por evento — no Prestige, R$ 854,22, não importa quantos dias durou a internação."}
]},

/* ===================== PARTE 6 ===================== */
{id:6,titulo:"Odonto PME",desc:"Os planos Mais, DOC, Clarear, Orto, Pro e Amplo; contratação, carências e argumentos da venda combinada.",modulos:[
{id:13,num:13,tempo:"6 min",titulo:"Planos, contratação e carências Odonto",html:`
<p>Odonto PME é mais do que complemento de preço: aumenta valor percebido, retenção e fechamento combinado com Saúde. Oferece rede nacional, reembolso no Brasil e exterior conforme plano, e opções com Rol Ampliado, ortodontia, prótese, clareamento e documentação ortodôntica.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Plano</th><th>Cobertura descrita</th><th>Múltiplo de reembolso</th></tr></thead><tbody>
<tr><td>Mais</td><td>Rol Ampliado</td><td>1</td></tr>
<tr><td>Mais DOC</td><td>Rol Ampliado + Documentação Ortodôntica</td><td>1</td></tr>
<tr><td>Mais Clarear</td><td>Rol Ampliado + Clareamento dentário caseiro</td><td>1</td></tr>
<tr><td>Mais Orto</td><td>Rol Ampliado + Ortodontia</td><td>1</td></tr>
<tr><td>Mais Pro</td><td>Rol Ampliado + Prótese</td><td>1</td></tr>
<tr><td>Mais Amplo</td><td>Rol Ampliado + Ortodontia + Prótese</td><td>3</td></tr>
</tbody></table></div>
<h3>Contratação Odonto</h3>
<p>Empresas de 3 a 29 vidas, mínimo de 1 titular, <strong>contratação livre sem necessidade de 100% da empresa</strong>, livre escolha de planos pelo titular e vigência a partir da zero hora do dia subsequente à quitação. Quando vendido junto com Saúde, a Regra Flex pode criar condições especiais.</p>
<h3>Carências Odonto (novas vendas produto 430 a partir de 24/04/2025)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Grupo</th><th>Prazo</th><th>Serviços</th></tr></thead><tbody>
<tr><td>0</td><td>24 horas</td><td>Urgências</td></tr>
<tr><td>1</td><td>30 dias</td><td>Diagnóstico, radiologia, odontopediatria e prevenção</td></tr>
<tr><td>2</td><td>90 dias</td><td>Periodontia e dentística</td></tr>
<tr><td>3</td><td>180 dias</td><td>Endodontia, cirurgia, próteses do Rol e DTM</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Argumentos da venda combinada</h4><p>Benefício de uso frequente e fácil percepção; reduz objeção de preço quando combinado com Saúde (Regra Flex/Cuidado 360º); RH entrega pacote mais completo; rede nacional com consulta por app. Planos com ortodontia, prótese e clareamento exigem explicação clara de carência, cobertura e limites.</p></div>`}
],quiz:[
{pergunta:"Qual plano Odonto tem múltiplo de reembolso 3 (e cobre ortodontia + prótese)?",opcoes:["Mais","Mais Orto","Mais Amplo","Mais DOC"],correta:2,explica:"O Mais Amplo = Rol Ampliado + Ortodontia + Prótese, com múltiplo de reembolso 3. Os demais têm múltiplo 1."},
{pergunta:"O Odonto PME exige 100% da empresa?",opcoes:["Sim, sempre","Não — contratação livre, sem necessidade de 100% da empresa","Só acima de 10 vidas","Igual ao Saúde"],correta:1,explica:"O Odonto PME tem contratação livre (sem 100%), livre escolha de planos pelo titular, para empresas de 3 a 29 vidas. Difere da regra compulsória do Saúde."},
{pergunta:"Qual a carência de endodontia (canal) e próteses no Odonto (novas vendas)?",opcoes:["24 horas","30 dias","90 dias","180 dias"],correta:3,explica:"Grupo 3 (endodontia, cirurgia, próteses do Rol e DTM) = 180 dias. Urgências 24h; diagnóstico/prevenção 30 dias; periodontia/dentística 90 dias."}
]},

/* ===================== PARTE 7 ===================== */
{id:7,titulo:"Venda Consultiva",desc:"Diagnóstico, fluxo de venda, apresentação da proposta, objeções e scripts de conversa.",modulos:[
{id:14,num:14,tempo:"7 min",titulo:"Diagnóstico e fluxo de venda",html:`
<p>A venda SulAmérica PME não começa no preço — começa no diagnóstico. O cliente compra acesso, previsibilidade, proteção para pessoas, retenção de talentos e tranquilidade operacional.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Bloco</th><th>Perguntas essenciais</th></tr></thead><tbody>
<tr><td>Empresa</td><td>Qual CNPJ? Há quanto tempo existe? MEI, LTDA, S.A.? Quantas vidas totais?</td></tr>
<tr><td>Massa</td><td>Quem entrará? Sócios, CLT, diretores, dependentes, agregados? Demitidos/aposentados?</td></tr>
<tr><td>Localização</td><td>Onde ficam empresa, colaboradores e famílias? Há filiais? Há viagens?</td></tr>
<tr><td>Rede desejada</td><td>Quais hospitais, laboratórios, clínicas e médicos são indispensáveis?</td></tr>
<tr><td>Uso atual</td><td>Há plano anterior? Qual operadora? Há quanto tempo? Gestantes, terapias, crônicos, cirurgias previstas?</td></tr>
<tr><td>Financeiro</td><td>Orçamento por vida? Subsídio 100%? Contribuição do colaborador? Aceita coparticipação?</td></tr>
<tr><td>Prioridade</td><td>O mais importante é preço, rede, reembolso, acomodação, imagem ou facilidade operacional?</td></tr>
<tr><td>Prazo</td><td>Quando precisa iniciar? Documentação disponível? Quem assina? Quem paga o boleto?</td></tr>
</tbody></table></div>
<h3>Fluxo de venda recomendado</h3>
<ol>
<li>Pré-qualificar CNPJ, porte e região.</li>
<li>Mapear vidas, categorias, dependentes e agregados.</li>
<li>Levantar plano anterior, carências, condições de saúde e documentos.</li>
<li>Validar rede desejada e necessidade de reembolso.</li>
<li>Escolher 2-3 alternativas: econômica, equilibrada e premium.</li>
<li>Simular com e sem coparticipação quando fizer sentido.</li>
<li>Explicar carência, CPT, documentação e vigência antes do preço final.</li>
<li>Emitir cotação pelo Cotador SulAmérica Saúde e Odonto.</li>
<li>Enviar proposta clara com premissas, validade, ressalvas e próximos passos.</li>
<li>Acompanhar transmissão, exigências, aceite, boleto, quitação, vigência e onboarding.</li>
</ol>`},
{id:15,num:15,tempo:"7 min",titulo:"Proposta, objeções e scripts",html:`
<p>Uma boa proposta PME é autoexplicativa. Não pode ter só tabela de preço: mostra cenário do cliente, premissas, vidas, plano recomendado e alternativo, benefícios, rede crítica validada, carência, coparticipação, documentação pendente e cronograma de implantação.</p>
<h3>Objeções frequentes</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Objeção</th><th>Resposta técnica e comercial</th></tr></thead><tbody>
<tr><td>Está caro</td><td>Comparar preço com rede, reembolso, acomodação e risco de uso; apresentar opção com coparticipação se adequada</td></tr>
<tr><td>Tenho medo da coparticipação</td><td>Mostrar fórmula, limites por evento e simular três utilizações reais</td></tr>
<tr><td>Quero sem carência</td><td>Verificar plano anterior, vidas, prazo de saída, carta de permanência e regras; não prometer isenção sem análise</td></tr>
<tr><td>Preciso do hospital X</td><td>Validar no canal oficial para o plano cotado; se não tiver, trocar plano ou ajustar expectativa</td></tr>
<tr><td>Concorrente falou que cobre tudo</td><td>Explicar Rol, segmentação, contrato, rede e carência; cobertura total sem regra não existe</td></tr>
<tr><td>Vou incluir meus pais</td><td>No Saúde, tratar como agregado com regras restritivas; no Odonto há regras diferentes; validar caso</td></tr>
<tr><td>Quero começar amanhã</td><td>Vigência depende de transmissão, análise, aceitação e quitação do boleto</td></tr>
<tr><td>Não quero mandar tantos documentos</td><td>Documentação reduz risco de recusa, fraude, atraso e inconsistência cadastral</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Frases que o consultor deve substituir</h4>
<p>"Com certeza cobre" → <em>"Vou validar a cobertura e a rede do plano exato antes de confirmar."</em><br>
"Sem carência" → <em>"Existe possibilidade de redução/isenção conforme regra e análise; preciso dos documentos."</em><br>
"Esse hospital tem" → <em>"Vamos consultar a rede oficial vigente para o plano e município."</em><br>
"Reembolsa tudo" → <em>"Reembolso segue tabela e documentação do plano contratado."</em><br>
"Cuidado 360 é grátis" → <em>"É uma oferta subsidiada com condições, prazo e regras de manutenção."</em></p></div>`}
],quiz:[
{pergunta:"Por onde a venda SulAmérica PME deve começar?",opcoes:["Pelo preço por vida","Pelo diagnóstico (empresa, massa, localização, rede, uso, financeiro, prioridade, prazo)","Pela assinatura","Pela rede"],correta:1,explica:"A venda começa no diagnóstico, não no preço. O cliente compra acesso, previsibilidade e proteção — explique carência, CPT, copart e vigência antes do preço final."},
{pergunta:"Diante de 'quero sem carência', a conduta correta é:",opcoes:["Prometer isenção total","Verificar plano anterior, vidas, prazo, carta de permanência e regras — sem prometer isenção sem análise","Dizer que não existe redução","Fechar mesmo assim"],correta:1,explica:"Redução/isenção depende de congênere, prazo (60 dias), idade, vidas e documentação. Nunca prometa isenção sem análise formal."},
{pergunta:"Qual frase o consultor deve substituir por 'vou validar a rede oficial vigente'?",opcoes:["'Bom dia'","'Esse hospital tem, eu lembro'","'Qual seu CNPJ?'","'Vamos ao diagnóstico'"],correta:1,explica:"Nunca prometa rede por memória. 'Esse hospital tem' deve virar 'vamos consultar a rede oficial vigente para o plano e município'."}
]},

/* ===================== PARTE 8 ===================== */
{id:8,titulo:"Operação, Pós-venda e Especialização",desc:"Implantação, SIB, ferramentas, fraude, reajuste, matriz de recomendação por perfil e a avaliação de certificação.",modulos:[
{id:16,num:16,tempo:"7 min",titulo:"Implantação, SIB e ferramentas",html:`
<p>O especialista não desaparece depois da assinatura. A análise do contrato é feita em até <strong>10 dias</strong> da transmissão + documentação, os boletos vencem em <strong>65 dias</strong> contados da aceitação, e a vigência inicia no dia subsequente à quitação.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Etapa</th><th>Risco</th><th>Boa prática</th></tr></thead><tbody>
<tr><td>Cotação</td><td>Premissas erradas</td><td>Conferir vidas, região, plano e copart antes de enviar</td></tr>
<tr><td>Documentos</td><td>Pendência/ilegibilidade</td><td>Checklist por categoria e conferência antes da transmissão</td></tr>
<tr><td>Transmissão</td><td>Dados divergentes</td><td>Revisar CPF, CNS, datas, vínculos e nomes</td></tr>
<tr><td>Análise</td><td>Exigência documental</td><td>Acompanhar status e responder rápido</td></tr>
<tr><td>Aceitação</td><td>Boleto não pago</td><td>Orientar prazo de vencimento e impacto na vigência</td></tr>
<tr><td>Vigência/Onboarding</td><td>Segurado não sabe usar</td><td>Ensinar app, rede, reembolso, autorizações e canais</td></tr>
</tbody></table></div>
<h3>SIB e ferramentas</h3>
<p>O <strong>SIB</strong> (Sistema de Informação de Beneficiários) exige dados que identificam titulares, dependentes e planos: CPF, nome completo da mãe ou PIS/PASEP, endereço completo e CNS conforme idade/tipo. Trate dado cadastral como parte da venda, não como burocracia final.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Ferramenta</th><th>Uso principal</th></tr></thead><tbody>
<tr><td>Cotador SulAmérica</td><td>Cotação, emissão de proposta, envio, status e histórico</td></tr>
<tr><td>MECSAS Web</td><td>Movimentações cadastrais: inclusão, exclusão, alteração, plano, documentos</td></tr>
<tr><td>SulAmérica Saúde Online</td><td>Rede, coberturas, carências, extrato, reembolso, VPP, IR</td></tr>
<tr><td>App SulAmérica Saúde/Odonto</td><td>Carteirinha digital, rede por geolocalização, autorizações, reembolso</td></tr>
<tr><td>Portal do Corretor</td><td>Tabelas, rede, cotadores, manuais, status, boleto, relatórios</td></tr>
<tr><td>PRASaber</td><td>Plataforma de capacitação SulAmérica</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>Fraude e conduta ética</h4><p>Nunca orientar omissão de doença, incluir pessoa sem vínculo, prometer reembolso indevido ou sugerir recibo artificial/duplicado. Em suspeita, canais oficiais: 0800 512 7713 ou contatoseguro.com.br/sulamerica.</p></div>`},
{id:17,num:17,tempo:"6 min",titulo:"Reajuste, pós-venda e matriz por perfil",html:`
<p>Contratos coletivos com menos de 30 beneficiários são reunidos em <strong>agrupamento de contratos</strong> para aplicação de percentual único divulgado pela operadora em maio, vigente até abril, aplicado no aniversário de cada contrato. Como o PME 3-29 está nessa faixa, prepare o cliente para o reajuste anual e por faixa etária. Falar disso no início evita a sensação de surpresa.</p>
<div class="callout tip"><h4>Pós-venda que retém</h4><p>Agende contato com o RH no 1º mês, no 3º mês, 60 dias antes do aniversário e após qualquer grande uso. Quem acompanha utilização e dúvidas reduz cancelamento por fricção operacional.</p></div>
<h3>Matriz de recomendação por perfil</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Perfil</th><th>Caminho provável</th><th>Cuidado</th></tr></thead><tbody>
<tr><td>Microempresa regional sensível a preço</td><td>Direto regional/estadual com ou sem coparticipação</td><td>Confirmar município, rede e dependentes</td></tr>
<tr><td>PME com equipe espalhada</td><td>Direto Nacional ou planos nacionais</td><td>Não subestimar urgência fora da praça</td></tr>
<tr><td>Empresa com sócios exigentes</td><td>Especial, Especial Mais, Executivo ou Prestige para sócios; segmentar por categorias</td><td>Cuidado com regra compulsória/CBO e reembolso</td></tr>
<tr><td>Empresa com alto uso de terapias</td><td>Plano com rede forte; cuidado ao simular coparticipação</td><td>Copart pode pesar; carência grupo 6 é crítica</td></tr>
<tr><td>Gestantes / planejamento familiar</td><td>Validar carência de 300 dias, rede obstétrica e acomodação</td><td>Não prometer parto sem carência cumprida</td></tr>
<tr><td>Cliente que quer pacote completo</td><td>Saúde + Odonto, Regra Flex ou Cuidado 360º se elegível</td><td>Explicar condicionantes e prazos</td></tr>
<tr><td>Cliente premium</td><td>Executivo/Prestige e validação de rede premium</td><td>Expectativa alta; documentar tudo</td></tr>
</tbody></table></div>
<div class="callout warn"><h4>Erros de especialista iniciante</h4><p>Cotar antes de entender vínculo/documentos; prometer rede sem validar; confundir dependente com agregado; aplicar regra de 30+ vidas em PME 3-29; tratar redução de carência como automática; explicar coparticipação só depois da cobrança; não registrar premissas da proposta.</p></div>`}
],quiz:[
{pergunta:"Quando inicia a vigência, segundo o material?",opcoes:["Na data da assinatura","À zero hora do dia subsequente à quitação do boleto","No dia do aceite","Em 65 dias"],correta:1,explica:"A vigência inicia no dia subsequente à quitação do boleto. A análise ocorre em até 10 dias da transmissão+documentos; o boleto vence em 65 dias da aceitação."},
{pergunta:"Como funciona o reajuste de um PME 3-29 vidas?",opcoes:["Teto fixo de 6%","Agrupamento de contratos: percentual único divulgado em maio, aplicado no aniversário de cada contrato","Sem reajuste","Mensal"],correta:1,explica:"Contratos coletivos com menos de 30 vidas entram em agrupamento de contratos, com percentual único da operadora (divulgado em maio), além de reajuste por faixa etária quando previsto."},
{pergunta:"O que é o MECSAS Web?",opcoes:["O app do segurado","A ferramenta de movimentações cadastrais (inclusão, exclusão, alteração, documentos)","O cotador","A central de fraude"],correta:1,explica:"O MECSAS Web gerencia movimentações cadastrais. O Cotador emite propostas; o Saúde Online/App atende o segurado; o Portal do Corretor concentra materiais."},
{pergunta:"Em caso de suspeita de fraude, o consultor deve:",opcoes:["Ignorar","Orientar os canais oficiais (0800 512 7713 ou contatoseguro.com.br/sulamerica)","Resolver sozinho","Avisar o cliente para esconder"],correta:1,explica:"Fraude encarece o plano e prejudica a carteira. Nunca orientar omissão/recibo artificial; em suspeita, usar os canais oficiais indicados no material."}
]}

];

/* ===================== EXAME DE CERTIFICAÇÃO — SULAMÉRICA PME (30 perguntas) ===================== */
const EXAME_SULA=[
{pergunta:"Qual a faixa de vidas do Saúde PME no material SulAmérica?",opcoes:["1 a 2","3 a 29 vidas, mínimo de 1 titular","30 a 99","100+"],correta:1,explica:"O material trabalha empresas de 3 a 29 vidas, com mínimo de 1 titular. Dependente não substitui titular."},
{pergunta:"Qual a diferença entre carência e CPT?",opcoes:["São iguais","Carência é espera por cobertura; CPT restringe por até 24 meses eventos ligados a doença/lesão preexistente declarada","CPT é mais curta","Carência só vale parto"],correta:1,explica:"Carência = prazo de espera. CPT = restrição de até 24 meses para eventos cirúrgicos/alta complexidade ligados à preexistência declarada."},
{pergunta:"O Rol de Procedimentos da ANS é:",opcoes:["Tabela de preços","Lista-base de cobertura obrigatória, respeitada a segmentação","Exclusivo do odonto","Opcional"],correta:1,explica:"O Rol é a cobertura mínima obrigatória, respeitada a segmentação contratada."},
{pergunta:"Prestador de serviço PJ pode entrar como titular no Saúde PME?",opcoes:["Sim","Não — o material informa que prestadores de serviços não são aceitos","Só com 6 meses","Como dependente"],correta:1,explica:"Prestadores de serviços não são aceitos no Saúde PME."},
{pergunta:"MEI é aceito após quanto tempo de constituição?",opcoes:["Imediato","6 meses, com documentação específica","12 meses","Nunca"],correta:1,explica:"O EI (213-5) é aceito após 6 meses de constituição, com matrícula MEI, declaração de autenticidade e comprovante de residência do titular."},
{pergunta:"O que significa 'regra compulsória'?",opcoes:["Empresa obrigada a ter plano","Adesão de 100% de uma ou mais categorias elegíveis escolhidas","Todos os funcionários do Brasil","Sem regra"],correta:1,explica:"Regra compulsória = adesão de 100% de uma ou mais categorias escolhidas (sócios, CLT, diretores, etc.)."},
{pergunta:"O que é a regra CBO?",opcoes:["Um plano","Contratação exclusiva para 100% de categorias CBO (diretores, gerentes, supervisores, coordenadores), comprovada por FGTS+CTPS","Um desconto","Uma carência"],correta:1,explica:"A regra CBO permite contratar 100% de categorias por família ocupacional (FGTS/CTPS) — diretores, superintendentes, gerentes, supervisores e coordenadores."},
{pergunta:"O que caracteriza um agregado no Saúde PME?",opcoes:["É igual a dependente","Aceito só na implantação, idade máxima, plano anterior 12 meses, sem DS positiva, grupo acima de 5 vidas, não para MEI","Entra a qualquer tempo","É o titular"],correta:1,explica:"Agregado tem regras restritivas e só entra na implantação — nunca o trate como dependente automático."},
{pergunta:"Até que idade os filhos são aceitos como dependentes (material)?",opcoes:["18 anos","24 anos","44 anos","Sem limite"],correta:2,explica:"Filhos/enteados até 44 anos; netos até 17 anos com regra de plano anterior. Cada vínculo tem documento-chave."},
{pergunta:"O que é a Regra Flex?",opcoes:["Desconto","Condição para Saúde + Odonto na mesma empresa/CNPJ, flexibilizando a exigência de 100%","Isenção de carência","Plano premium"],correta:1,explica:"A Regra Flex (3 a 199 vidas no FGTS) flexibiliza a exigência de 100% quando Saúde e Odonto são vendidos juntos, mantendo critérios de aceitação e carência."},
{pergunta:"O Cuidado 360º é grátis para sempre?",opcoes:["Sim","Não — subsidia Odonto e Vida por período inicial, condicionado a regras, prazo e manutenção","Sim, mas só Vida","Não existe"],correta:1,explica:"O Cuidado 360º subsidia Odonto e Vida na vigência inicial do Saúde, com limite e condições. Cancelar qualquer apólice pode descontinuar a oferta."},
{pergunta:"Qual a carência geral da ANS para parto a termo?",opcoes:["24h","180 dias","300 dias","24 meses"],correta:2,explica:"Parto a termo: 300 dias. Urgência/emergência 24h; demais situações 180 dias (regra geral ANS)."},
{pergunta:"Na tabela SulAmérica PME, qual a carência do grupo 2 (internações/exames complexos) com plano anterior +12 meses?",opcoes:["180 dias","60 dias","24 horas","300 dias"],correta:2,explica:"Com plano anterior +12 meses, o grupo 2 cai para 24h. Contratual 180 dias; 3-12 meses, 60 dias."},
{pergunta:"Qual a carência das terapias (grupo 6: fisio, psico, fono, TO, nutrição)?",opcoes:["24h","30 dias","180 dias em todos os cenários","Sem carência"],correta:2,explica:"O grupo 6 mantém 180 dias mesmo com plano anterior — é uma carência crítica para empresas com alto uso de terapias."},
{pergunta:"Qual o prazo para transmitir a proposta e ter redução de carência por plano anterior?",opcoes:["30 dias","Até 60 dias do vencimento da última fatura paga","90 dias","Sem prazo"],correta:1,explica:"Proposta em até 60 dias do vencimento da última fatura paga, idade até 64a11m29d, congênere aceita, mediante análise e carta de permanência."},
{pergunta:"Para grupos acima de 10 vidas, a isenção de carência NÃO cobre:",opcoes:["Consultas","Parto, terapias não médicas e CPT","Urgência","Exames simples"],correta:1,explica:"A isenção para 10+ vidas exclui parto, terapias não médicas e CPT, que mantêm seus prazos."},
{pergunta:"Qual o fator de coparticipação da Tabela PME I?",opcoes:["20%","30% com limite por evento e valor fixo de internação não psiquiátrica","50%","Valor fixo em tudo"],correta:1,explica:"PME I = 30% sobre o valor pago à rede/reembolso, limitado ao teto por evento; internação não psiquiátrica tem valor fixo por evento."},
{pergunta:"Consulta no Exato custou R$ 300 (limite consulta = R$ 48,81). Quanto o segurado paga?",opcoes:["R$ 90","R$ 48,81","R$ 300","R$ 30"],correta:1,explica:"30% de R$ 300 = R$ 90, mas o limite por evento (R$ 48,81) trava — cobra-se o menor valor."},
{pergunta:"Internação não psiquiátrica tem coparticipação:",opcoes:["De 30% por dia","Valor fixo por evento, independente dos dias","Isenta","R$ 100/dia"],correta:1,explica:"Internação não psiquiátrica = valor fixo por evento (ex.: Prestige R$ 854,22), não importa quantos dias."},
{pergunta:"Como a coparticipação interage com o reembolso?",opcoes:["Não interage","É descontada do valor a reembolsar ao titular","Dobra o reembolso","Anula"],correta:1,explica:"A coparticipação calculada é abatida do reembolso — o segurado recebe o valor líquido do desconto."},
{pergunta:"Os valores limites de coparticipação podem ser reajustados:",opcoes:["Nunca","Em maio de cada ano, conforme cláusula contratual","Mensalmente","Só por lei"],correta:1,explica:"Os limites e valores fixos podem ser reajustados em maio de cada ano, conforme contrato."},
{pergunta:"O Odonto PME exige 100% da empresa?",opcoes:["Sim","Não — contratação livre, sem necessidade de 100%","Acima de 10 vidas","Igual ao Saúde"],correta:1,explica:"O Odonto PME tem contratação livre, livre escolha de planos pelo titular, para 3 a 29 vidas."},
{pergunta:"Qual plano Odonto cobre Ortodontia + Prótese (múltiplo de reembolso 3)?",opcoes:["Mais","Mais Orto","Mais Amplo","Mais Pro"],correta:2,explica:"Mais Amplo = Rol Ampliado + Ortodontia + Prótese, com múltiplo de reembolso 3."},
{pergunta:"Qual a carência de endodontia/próteses no Odonto (novas vendas)?",opcoes:["24h","30 dias","90 dias","180 dias"],correta:3,explica:"Grupo 3 (endodontia, cirurgia, próteses do Rol e DTM) = 180 dias."},
{pergunta:"Por onde a venda consultiva deve começar?",opcoes:["Pelo preço","Pelo diagnóstico (empresa, massa, rede, uso, financeiro, prioridade, prazo)","Pela assinatura","Pela rede"],correta:1,explica:"Começa no diagnóstico. Explique carência, CPT, copart e vigência antes do preço final."},
{pergunta:"Diante de 'quero o hospital X', a conduta é:",opcoes:["Prometer que tem","Validar no canal oficial para o plano cotado; se não tiver, trocar plano ou ajustar expectativa","Dizer que não tem","Ignorar"],correta:1,explica:"Rede varia por plano/praça. Valide na fonte oficial; nunca prometa por memória."},
{pergunta:"Quando inicia a vigência?",opcoes:["Na assinatura","À zero hora do dia subsequente à quitação do boleto","No aceite","Em 65 dias"],correta:1,explica:"A vigência inicia no dia subsequente à quitação. Boleto vence em 65 dias da aceitação; análise em até 10 dias."},
{pergunta:"O que é o SIB?",opcoes:["Um plano","Sistema de Informação de Beneficiários — exige dados cadastrais (CPF, nome da mãe/PIS, endereço, CNS)","O cotador","A central de fraude"],correta:1,explica:"O SIB exige dados cadastrais dos segurados. Trate dado cadastral como parte da venda, não burocracia final."},
{pergunta:"Como funciona o reajuste de um PME 3-29 vidas?",opcoes:["Teto fixo","Agrupamento de contratos: percentual único divulgado em maio, aplicado no aniversário","Sem reajuste","Mensal"],correta:1,explica:"Coletivos com menos de 30 vidas entram em agrupamento de contratos, com percentual único da operadora, além de reajuste por faixa etária quando previsto."},
{pergunta:"Em suspeita de fraude, o consultor deve:",opcoes:["Ignorar","Orientar canais oficiais (0800 512 7713 / contatoseguro.com.br/sulamerica)","Resolver sozinho","Esconder do cliente"],correta:1,explica:"Nunca orientar omissão/recibo artificial. Em suspeita, usar os canais oficiais. Fraude encarece o plano e prejudica a carteira."}
];

/* =====================================================================
   SISTEMA DE CRM — Pipedrive (O Guia Definitivo do Corretor PlaneCorp)
   Fonte: Treinamento Completo CRM Pipedrive PlaneCorp v2.0 (2026).
   Conteúdo integral; estrutura didática + quizzes adicionados.
   ===================================================================== */
const CRM=[

/* ===================== PARTE 1 ===================== */
{id:1,titulo:"Por que o CRM é inegociável",desc:"O verdadeiro motivo pelo qual perdemos vendas, o que é um CRM e por que o conceito importa mais que a ferramenta.",modulos:[
{id:1,num:1,tempo:"6 min",titulo:"O motivo nº 1 de perder vendas",html:`
<p>Antes de aprender a clicar em qualquer botão, você precisa entender o problema que o CRM resolve. Sem isso, nenhuma ferramenta funciona.</p>
<div class="callout key"><p>Existe um único motivo que mais faz a PlaneCorp perder vendas hoje, e ele <strong>não é preço, não é concorrente e não é produto</strong>. É a <em>falta de acompanhamento do cliente</em>.</p></div>
<p>A venda de um plano de saúde não acontece em um único contato. Ela acontece ao longo de uma jornada: você agenda uma prospecção, faz o contato inicial, solicita os dados, faz a cotação, apresenta a proposta, acompanha a decisão, confere a documentação e leva o processo até a emissão do contrato. Em cada etapa existe uma ação que precisa ser feita — e feita no tempo certo.</p>
<div class="callout tip"><h4>A matemática que ninguém vence</h4><p>É praticamente impossível um corretor lembrar de cabeça de todos os clientes, todas as tarefas e tudo o que precisa ser feito a cada dia. Por isso a humanidade inventou a agenda — justamente para lembrar o que precisa ser feito. O CRM é a sua <strong>agenda comercial turbinada</strong>: ele organiza isso para você e garante que nenhum cliente seja esquecido no meio do caminho.</p></div>`},
{id:2,num:2,tempo:"6 min",titulo:"O que é um CRM e o que ele resolve",html:`
<p>CRM significa <strong>Customer Relationship Management</strong> — Sistema de Relacionamento com o Cliente. Na prática, é o sistema que organiza todo o seu relacionamento comercial: com quem você está falando, o que já foi negociado, o que falta fazer e quando.</p>
<h3>Um bom CRM responde, a qualquer momento:</h3>
<ul>
<li>Onde parei com este cliente?</li>
<li>Qual proposta eu enviei e por qual valor?</li>
<li>Qual era a principal dúvida dele?</li>
<li>Quando foi meu último contato e qual é o próximo passo?</li>
<li>Por que perdi as últimas oportunidades?</li>
</ul>
<p>E ele também resgata aquele cliente que sumiu e voltou meses depois: em vez de começar do zero, você abre o card e vê exatamente onde a conversa parou.</p>
<h3>Ferramenta x conceito: o que realmente importa</h3>
<p>Na PlaneCorp usamos o <strong>Pipedrive</strong>. Mas atenção: o conceito de CRM não depende da ferramenta. O Pipedrive poderia ser substituído por outro sistema, por um Trello, ou até por uma agenda física — o conceito é exatamente o mesmo. O que não pode faltar é o <em>controle em cima do relacionamento com o cliente</em>.</p>
<p>O Pipedrive foi escolhido porque é um CRM criado por vendedores, para vendedores: visual, simples e focado em fechar negócios em vez de gerar burocracia. Mas o que você vai aprender aqui — as 4 esferas, as etapas, a disciplina de acompanhamento — vale para qualquer sistema, hoje e no futuro.</p>
<div class="callout arg"><h4>O princípio que rege tudo</h4><p><strong>Resultado a gente não controla. A gente controla apenas a execução.</strong> Quantos contatos iniciais você fez hoje? Quantas cotações enviou? Quantos acompanhamentos estão em dia? O CRM existe para que você execute com consistência — e a consistência é o que gera o resultado.</p></div>`}
],quiz:[
{pergunta:"Qual é o principal motivo pelo qual a PlaneCorp perde vendas?",opcoes:["Preço alto","Falta de acompanhamento do cliente","Concorrência","Produto ruim"],correta:1,explica:"O nº 1 não é preço, concorrente nem produto — é a falta de acompanhamento. A venda acontece ao longo de uma jornada com ações no tempo certo."},
{pergunta:"O que significa CRM?",opcoes:["Controle de Receita Mensal","Customer Relationship Management — Sistema de Relacionamento com o Cliente","Cadastro de Renovação de Mercado","Central de Resgate de Mensagens"],correta:1,explica:"CRM = Customer Relationship Management. Organiza com quem você fala, o que foi negociado, o que falta fazer e quando."},
{pergunta:"Segundo 'o princípio que rege tudo', o que você controla?",opcoes:["O resultado","Apenas a execução (contatos, cotações, acompanhamentos)","O cliente","O concorrente"],correta:1,explica:"'Resultado a gente não controla; a gente controla apenas a execução.' A consistência na execução é o que gera o resultado."}
]},

/* ===================== PARTE 2 ===================== */
{id:2,titulo:"As 4 Esferas do CRM",desc:"Pessoa, Empresa, Negócio e Atividade — as 4 entidades de qualquer CRM, a regra absoluta e a regra de propriedade PlaneCorp.",modulos:[
{id:3,num:3,tempo:"7 min",titulo:"Pessoa, Empresa, Negócio e Atividade",html:`
<p>Independente da ferramenta, todo CRM se organiza em torno de <strong>4 esferas</strong> — 4 chaves principais. Elas se conectam entre si e formam a base de tudo que você vai fazer no Pipedrive.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Esfera</th><th>O que é</th><th>Obrigatório</th></tr></thead><tbody>
<tr><td>1 · Pessoa</td><td>Com quem você se relaciona naquele negócio — o decisor, o contato atual. Pode mudar ao longo da negociação.</td><td>Nome · Telefone · E-mail</td></tr>
<tr><td>2 · Empresa</td><td>A organização / responsável financeiro do negócio. Em plano empresarial é a empresa; em PF, vinculada à própria pessoa.</td><td>Nome da empresa · CNPJ</td></tr>
<tr><td>3 · Negócio</td><td>A venda que está acontecendo naquele momento. Um mesmo cliente pode ter vários negócios (saúde, dental…).</td><td>Um negócio por venda feita</td></tr>
<tr><td>4 · Atividade</td><td>A ação que você precisa fazer naquele negócio: cobrar documentos, fazer acompanhamento, retornar contato.</td><td>Todo negócio SEMPRE tem uma atividade</td></tr>
</tbody></table></div>
<h3>Esfera 1 — Pessoa (contato)</h3>
<p>A Pessoa é com quem você está conversando — quem é o decisor daquele negócio. Se você fala com uma família, é o membro que está negociando e decidindo. Se fala com uma empresa, é o interlocutor atual. <strong>A pessoa de contato pode mudar</strong>: você pode começar falando com um dono e depois ser direcionado ao RH — quando isso acontece, atualize a pessoa de contato. Pergunta-chave: <em>"com quem eu estou me relacionando neste negócio agora?"</em></p>
<h3>Esfera 2 — Empresa (organização)</h3>
<p>É o nome da organização. Em plano empresarial, é o CNPJ que está contratando. Representa o responsável financeiro do negócio.</p>
<h3>Esfera 3 — Negócio</h3>
<p>É a venda que está acontecendo naquele momento. A regra é simples: <strong>um negócio por venda feita.</strong></p>
<div class="callout tip"><h4>Exemplo — um cliente, dois negócios</h4><p>Você vende um plano de saúde da Unimed para um cliente — isso é um negócio. Para o mesmo cliente, também monta um plano dental da Amil — isso é outro negócio. São dois cards distintos no funil, vinculados à mesma pessoa e (se houver) à mesma empresa.</p></div>
<h3>Esfera 4 — Atividade</h3>
<p>Atividade é <em>o que você precisa fazer de ação</em> em cima daquele negócio. Exemplos reais: já mandei a cotação e preciso acompanhar → atividade de acompanhamento; o cliente decidiu fechar e preciso reunir os documentos → atividade de cobrar documentos.</p>
<p>Quando o corretor senta para trabalhar, ele não abre os 40 negócios um por um — isso seria impossível e ainda o impediria de prospectar. Ele abre o <strong>calendário de atividades</strong> e olha apenas: <em>o que eu preciso fazer hoje?</em> Executa as atividades do dia e, ao terminar, parte para novos clientes.</p>
<div class="callout internal"><h4>Regra absoluta</h4><p>Todo negócio obrigatoriamente tem que ter uma <strong>pessoa</strong>, tem que ter um <strong>negócio</strong> e sempre tem que ter uma <strong>atividade</strong>. Nunca pode existir negócio sem atividade — nunca. (A empresa depende: se o cliente tem CNPJ ou não.) Negócio sem atividade = você perdeu o controle daquele cliente.</p></div>`},
{id:4,num:4,tempo:"4 min",titulo:"A regra de propriedade PlaneCorp",html:`
<p>Esta regra existe para o dia em que surgir um embate sobre "de quem é esse cliente". A resposta é definida e não se discute:</p>
<div class="callout key"><h4>Regra de Propriedade</h4>
<ul style="margin:0">
<li>O <strong>cliente (Pessoa)</strong> é da PlaneCorp.</li>
<li>A <strong>empresa (Organização)</strong> é da PlaneCorp.</li>
<li>O <strong>negócio</strong> é do vendedor.</li>
</ul></div>
<p>A base de clientes pertence à corretora; a performance daquela negociação específica é atribuída ao corretor que a trabalhou. Esse é o grande ponto principal da estrutura.</p>`}
],quiz:[
{pergunta:"Quais são as 4 esferas de qualquer CRM?",opcoes:["Lead, Venda, Meta, Comissão","Pessoa, Empresa, Negócio e Atividade","Contato, Telefone, E-mail, CNPJ","Funil, Etapa, Etiqueta, Valor"],correta:1,explica:"As 4 esferas: Pessoa (com quem fala), Empresa (organização/responsável financeiro), Negócio (a venda) e Atividade (a ação a fazer)."},
{pergunta:"Qual a regra absoluta sobre atividades?",opcoes:["Toda atividade é opcional","Nunca pode existir negócio sem atividade — negócio sem atividade = perda de controle","Só negócios grandes precisam de atividade","Atividade só na etapa final"],correta:1,explica:"Todo negócio tem que ter pessoa, negócio e SEMPRE uma atividade. Negócio sem atividade significa que você perdeu o controle do cliente."},
{pergunta:"Segundo a Regra de Propriedade PlaneCorp:",opcoes:["Tudo é do vendedor","O cliente e a empresa são da PlaneCorp; o negócio é do vendedor","Tudo é da PlaneCorp","O cliente é do vendedor"],correta:1,explica:"A base de clientes (Pessoa e Organização) é da corretora; a performance da negociação específica (o Negócio) é atribuída ao corretor que a trabalhou."},
{pergunta:"Um cliente fecha plano de saúde e também um dental. No CRM isso é:",opcoes:["Um único negócio","Dois negócios (cards) distintos, vinculados à mesma pessoa","Uma atividade","Duas pessoas"],correta:1,explica:"Regra: um negócio por venda feita. Saúde e dental são dois negócios distintos, vinculados à mesma pessoa e (se houver) mesma empresa."}
]},

/* ===================== PARTE 3 ===================== */
{id:3,titulo:"Preenchendo cada campo corretamente",desc:"Campos obrigatórios de Pessoa e Empresa, o título do negócio, os papéis (titular/dependente/financeiro) e a regra do valor.",modulos:[
{id:5,num:5,tempo:"6 min",titulo:"Campos obrigatórios de Pessoa e Empresa",html:`
<p>Um cadastro bem feito permite que qualquer pessoa abra o negócio e entenda na hora o que está acontecendo.</p>
<h3>Campos obrigatórios da Pessoa</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Campo</th><th>Obrigatoriedade</th><th>Detalhe</th></tr></thead><tbody>
<tr><td>Nome</td><td>Sempre</td><td>Na etapa inicial não precisa ser completo. Para finalizar o processo, precisa ser o nome completo.</td></tr>
<tr><td>Telefone</td><td>Sempre</td><td>Sem telefone não há como falar com a pessoa. É o mínimo absoluto para existir contato.</td></tr>
<tr><td>E-mail</td><td>Até o fechamento</td><td>Necessário para emissão de proposta e contrato.</td></tr>
<tr><td>Organização</td><td>Se houver</td><td>Vincular a pessoa à empresa, quando ela trabalha para uma.</td></tr>
</tbody></table></div>
<div class="callout tip"><h4>Como funciona na prática</h4><p>O telefone é obrigatório desde o início. O nome pode começar incompleto (às vezes você só tem o primeiro nome), mas você não pode finalizar o processo sem o nome completo. Quando o negócio chega na etapa de <em>aguardando documentos</em>, você já tem o documento do cliente em mãos — é nesse momento que completa nome completo, telefone e e-mail.</p></div>
<h3>Campos obrigatórios da Empresa</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Campo</th><th>Obrigatoriedade</th></tr></thead><tbody>
<tr><td>Nome da empresa</td><td>Obrigatório</td></tr>
<tr><td>CNPJ</td><td>Obrigatório</td></tr>
<tr><td>Telefone</td><td>Recomendado</td></tr>
<tr><td>Endereço</td><td>Recomendado</td></tr>
</tbody></table></div>
<div class="callout warn"><h4>Pessoa física não tem organização</h4><p>Se o cliente é PF (não tem CNPJ), não existe organização a vincular — o negócio fica ligado diretamente à pessoa. Atenção: as telas de Pessoa, Empresa e Negócio no Pipedrive são muito parecidas — olhe sempre no canto da tela para saber onde você está.</p></div>`},
{id:6,num:6,tempo:"6 min",titulo:"Título do negócio e a regra do valor",html:`
<h3>Título do negócio: a regra de ouro</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tipo de plano</th><th>O título do negócio deve ser…</th></tr></thead><tbody>
<tr><td>Plano empresarial</td><td>O nome da empresa</td></tr>
<tr><td>Plano pessoa física</td><td>O nome do titular do plano</td></tr>
</tbody></table></div>
<h3>Titular x dependente x titular financeiro</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Papel</th><th>O que é</th></tr></thead><tbody>
<tr><td>Titular</td><td>Quem usa o plano (o beneficiário principal)</td></tr>
<tr><td>Dependente</td><td>Quem usa o plano vinculado a um titular (ex.: filhos)</td></tr>
<tr><td>Titular financeiro</td><td>Quem paga o plano. Pode ser a mesma pessoa que usa, ou não.</td></tr>
</tbody></table></div>
<div class="callout tip"><h4>Exemplo — quem vai no título e quem vai na pessoa</h4><p>Uma mãe contrata e paga o plano para a filha. A mãe é a <strong>titular financeira</strong> (quem paga) e está negociando com você. A filha é a <strong>titular</strong> (quem usa). Os filhos da filha são dependentes.<br>Nesse caso: na <strong>Pessoa</strong> vai o nome da mãe (é quem fala com você). No <strong>título do negócio</strong> vai o nome da filha (é quem usa o plano). Se fosse empresarial, no título iria o nome da empresa.</p></div>
<h3>A regra do valor: sempre a menor proposta</h3>
<p>Quando você negocia, geralmente enviou várias cotações de operadoras diferentes, com valores diferentes. Qual valor colocar no campo do negócio?</p>
<div class="callout internal"><h4>Regra PlaneCorp — o valor é sempre o da MENOR proposta enviada</h4><p>Se você enviou 5 cotações e a mais barata foi a Clinipam a R$ 100, o valor do negócio é R$ 100. O raciocínio: no mínimo, se o negócio fechar pela proposta mais barata, aquele é o valor que entra. Depois que o cliente decidir, você adiciona o produto e ajusta o valor para o real. <strong>Nunca infle o valor com a proposta mais cara.</strong></p></div>`}
],quiz:[
{pergunta:"Em um plano pessoa física, o título do negócio deve ser:",opcoes:["O nome de quem paga","O nome do titular do plano (quem usa)","O nome do corretor","O nome da operadora"],correta:1,explica:"PF: título = nome do titular do plano (quem usa). Empresarial: título = nome da empresa. No exemplo da mãe que paga para a filha, o título leva o nome da filha."},
{pergunta:"Qual valor colocar no campo do negócio quando há várias cotações?",opcoes:["A proposta mais cara","Sempre a MENOR proposta enviada","A média","O valor que o cliente pediu"],correta:1,explica:"Regra PlaneCorp: o valor é sempre o da menor proposta enviada. Nunca infle com a mais cara — depois ajusta para o valor real quando o cliente decidir."},
{pergunta:"Qual a diferença entre titular e titular financeiro?",opcoes:["São iguais","Titular usa o plano; titular financeiro paga (podem ser pessoas diferentes)","Titular paga; financeiro usa","Ambos são dependentes"],correta:1,explica:"Titular = quem usa (beneficiário principal). Titular financeiro = quem paga (pode não ser quem usa). Dependente = quem usa vinculado a um titular."},
{pergunta:"O cliente é pessoa física, sem CNPJ. O que acontece com a esfera Empresa?",opcoes:["É obrigatória mesmo assim","Não existe organização — o negócio fica ligado diretamente à pessoa","Usa o CPF como CNPJ","Cria uma empresa fictícia"],correta:1,explica:"PF não tem organização; o negócio fica vinculado diretamente à pessoa. Cuidado: as telas de Pessoa/Empresa/Negócio são parecidas — confira no canto da tela onde você está."}
]},

/* ===================== PARTE 4 ===================== */
{id:4,titulo:"Os funis e as etiquetas de origem",desc:"O conceito de funil, a regra Massificado x Corporativo (pelo potencial), os outros funis e o catálogo completo de etiquetas.",modulos:[
{id:7,num:7,tempo:"6 min",titulo:"Os funis da PlaneCorp",html:`
<p>Funil é uma sequência de passos/etapas pelos quais você acompanha o cliente, do primeiro contato até o fechamento. Empresas usam funis de formas diferentes (por produto, por segmento). Na PlaneCorp, adaptamos por <strong>segmento de produto e de cliente</strong>. Em saúde, há a separação entre Massificado e Corporativo.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Funil</th><th>Perfil</th><th>Por que separado</th></tr></thead><tbody>
<tr><td>Massificado</td><td>Pessoa física, plano familiar, bebê, idoso, empresas até ~30 colaboradores</td><td>Precisa de volume e velocidade no atendimento</td></tr>
<tr><td>Corporativo</td><td>Empresas com mais de 30 colaboradores (potencial)</td><td>Exige acompanhamento maior, mais pontos de relacionamento, cuidado redobrado</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>A pegadinha: o que define o funil é o POTENCIAL, não as vidas vendidas</h4><p>A escolha do funil não tem a ver com quantas vidas você negocia agora — tem a ver com o <strong>potencial da empresa</strong>. Ex.: uma empresa tem 200 colaboradores, mas nesta negociação você vai fechar só 10 vidas. Parece massificado (poucas vidas), mas o potencial é corporativo → o negócio entra no funil corporativo. <strong>Regra prática: empresa com mais de 30 colaboradores é corporativa</strong>, mesmo que você feche um plano de uma vida só.</p></div>
<h3>Outros funis</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Funil</th><th>Para que serve</th></tr></thead><tbody>
<tr><td>VR Benefícios</td><td>Vale-refeição e vale-alimentação (ponto eletrônico / benefícios)</td></tr>
<tr><td>Assessoria / Jurídico</td><td>Segmentação da parte jurídica</td></tr>
<tr><td>Seguro de Vida / Portabilidade</td><td>Segmentação de seguros</td></tr>
<tr><td>Prospecção</td><td>Pessoas no radar que ainda não levantaram a mão pedindo plano (ex.: contatos de eventos de networking)</td></tr>
</tbody></table></div>
<div class="callout tip"><h4>O funil de Prospecção e por que ele existe</h4><p>Em eventos de networking você conhece muita gente. Sem um lugar para registrar, esses contatos se perdem — você diz "depois retorno com ela" e nunca retorna. O funil de prospecção existe para isso: assim que uma pessoa entra no seu radar, você a joga nele para não esquecer. Puxar gente para dentro do processo é um dos principais pontos para ter cliente.</p></div>`},
{id:8,num:8,tempo:"7 min",titulo:"As etiquetas de origem",html:`
<p>A etiqueta é a <strong>origem do cliente</strong>: de onde aquela oportunidade surgiu. É um campo <strong>obrigatório</strong> porque ajuda a desenhar estratégias de onde buscar mais clientes.</p>
<div class="callout arg"><h4>Por que isso vira dinheiro</h4><p>Se ao olhar os dados você percebe que "indicação de cliente" representa 60% das vendas, faz todo sentido criar uma campanha focada em pedir indicações. A etiqueta transforma a intuição em estratégia baseada em dados.</p></div>
<h3>Catálogo completo de etiquetas</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Etiqueta</th><th>O que significa</th></tr></thead><tbody>
<tr><td>Indicação de cliente</td><td>Um cliente que já fechou contrato indicou outra pessoa</td></tr>
<tr><td>Indicação (rede de contato)</td><td>Indicação vinda da sua rede de contatos pessoal</td></tr>
<tr><td>Experiência do cliente</td><td>Lead gerado pelo trabalho da área de experiência do cliente (CX)</td></tr>
<tr><td>Networking</td><td>Comunidades pagas de negócios com reuniões periódicas (ex.: BNI, Lead Paraná, MasterBoard, Resenha)</td></tr>
<tr><td>Parceria</td><td>Empresas parceiras que indicam (ex.: parceria de troca/indicação)</td></tr>
<tr><td>Finder</td><td>Indicação remunerada — você paga comissão a quem indicou se o negócio fechar</td></tr>
<tr><td>Lead (operadora)</td><td>Lista de leads de campanha de tráfego pago feita pela própria operadora e repassada à corretora</td></tr>
<tr><td>Tráfego pago</td><td>Lead vindo de campanha paga da PlaneCorp</td></tr>
<tr><td>Orgânico</td><td>Veio espontaneamente (ex.: por treinamentos/conteúdo)</td></tr>
<tr><td>Potencial Plena / Intencional</td><td>Quando a Potencial Plena fez um movimento intencional para trazer o cliente</td></tr>
<tr><td>Patrocínio</td><td>Cliente vindo de patrocínio de evento</td></tr>
<tr><td>Prospecção ativa</td><td>Você pegou o telefone e ligou ativamente oferecendo (prospecção "à moda antiga")</td></tr>
<tr><td>Recompra</td><td>Cliente que comprou e, depois de um tempo (reajuste, etc.), voltou e está recomprando</td></tr>
<tr><td>Plantão</td><td>A operadora libera um espaço onde você fica e atende pessoas que chegam para comprar (ex.: plantão Unimed)</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>Regra PlaneCorp — a etiqueta é a origem da ÚLTIMA venda, não da primeira</h4><p>A etiqueta não registra "de onde veio o cliente lá no começo" — registra como foi a origem <strong>daquela venda específica</strong>. Ex.: veio um cliente do BNI e você fechou → origem "Networking — BNI". Agora esse cliente indica outra pessoa → a nova venda é "Indicação de cliente", não BNI, porque essa nova oportunidade veio de uma indicação.</p></div>
<div class="callout tip"><h4>Como registrar uma prospecção rápida</h4><p>Ao conhecer alguém num evento, basta mandar uma mensagem interna no Slack com: nome da pessoa + etiqueta (ex.: "Prospecção / Evento") + funil de prospecção. Assim a oportunidade entra no radar sem você perder o contato.</p></div>`}
],quiz:[
{pergunta:"O que define se um negócio entra no funil Massificado ou Corporativo?",opcoes:["O número de vidas que você vai fechar agora","O POTENCIAL da empresa (mais de 30 colaboradores = corporativo)","O valor do plano","A operadora"],correta:1,explica:"A pegadinha: é o potencial, não as vidas vendidas. Empresa de 200 colaboradores em que você fecha 10 vidas continua corporativa. 30+ colaboradores = corporativo."},
{pergunta:"Por que o funil de Prospecção existe?",opcoes:["Para guardar contratos fechados","Para registrar pessoas que entraram no seu radar (ex.: networking) e não perdê-las","Para emitir boletos","Para calcular comissão"],correta:1,explica:"Em eventos você conhece muita gente; sem registrar, os contatos se perdem. A prospecção captura quem entrou no radar antes de levantar a mão pedindo plano."},
{pergunta:"A etiqueta de origem registra a origem de qual venda?",opcoes:["Da primeira venda do cliente","Da ÚLTIMA venda (aquela venda específica)","Da venda mais cara","De todas juntas"],correta:1,explica:"A etiqueta é da última venda. Cliente que veio do BNI e depois indica alguém: a nova venda é 'Indicação de cliente', não 'Networking'."},
{pergunta:"O que é a etiqueta 'Finder'?",opcoes:["Lead orgânico","Indicação remunerada — paga-se comissão a quem indicou se o negócio fechar","Plantão na operadora","Tráfego pago"],correta:1,explica:"Finder é a indicação remunerada: você paga comissão a quem indicou caso o negócio feche. Diferente de 'Indicação de cliente' (sem remuneração)."}
]},

/* ===================== PARTE 5 ===================== */
{id:5,titulo:"As etapas do funil, uma a uma",desc:"O que entra no CRM, cada etapa do funil de saúde, a velocidade inicial, a regra dos 8 contatos e a etapa mais crítica.",modulos:[
{id:9,num:9,tempo:"7 min",titulo:"As 6 etapas do funil de saúde",html:`
<div class="callout key"><h4>Antes de tudo: o que entra no CRM</h4><p>Entra no CRM o cliente que <strong>levantou a mão</strong> e demonstrou interesse no plano. Uma lista de convidados de um evento que ainda nem foi contatada não entra como negócio no funil de vendas — é trabalho de prospecção. Só quando o contato diz "quero o plano" é que vira negócio.</p></div>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>#</th><th>Etapa</th><th>O que acontece</th></tr></thead><tbody>
<tr><td>1</td><td>Fazer contato inicial</td><td>Cliente demonstrou interesse mas ninguém falou com ele. O corretor faz o primeiro contato: "bom dia, entendi que você está buscando um plano…"</td></tr>
<tr><td>2</td><td>Solicitar dados</td><td>Levantar as informações para a cotação: idade, cônjuge, dependentes, anamnese (doenças)</td></tr>
<tr><td>3</td><td>Apresentar proposta</td><td>Com os dados, você monta e apresenta a cotação. O cliente entendeu as opções</td></tr>
<tr><td>4</td><td>Fazer acompanhamento</td><td>O cliente está decidindo. Aqui mora a maior parte do trabalho: manter os pontos de contato até ele fechar</td></tr>
<tr><td>5</td><td>Solicitar documentos</td><td>Cliente disse "vou fechar". Você reúne e confere os documentos. A etapa mais crítica de todas</td></tr>
<tr><td>6</td><td>Acompanhar fechamento</td><td>Cobrar o ADM/fluxo, acompanhar a emissão do contrato e a análise da operadora até a finalização</td></tr>
</tbody></table></div>
<h3>Etapas 1 e 2 — a velocidade é tudo</h3>
<p>As primeiras etapas precisam acontecer em <strong>minutos, não em dias</strong>. O contato inicial é urgente: esse cliente está cotando com vários corretores ao mesmo tempo — <em>quem responde primeiro larga na frente</em>. Solicitar dados é fazer o cliente passar as informações para você voltar com a proposta.</p>`},
{id:10,num:10,tempo:"6 min",titulo:"A regra dos 8 contatos e a etapa crítica",html:`
<h3>Etapa 4 — Fazer acompanhamento (a regra dos 8 contatos)</h3>
<div class="callout internal"><h4>Regra PlaneCorp — em média o cliente fecha no 8º ao 9º ponto de contato</h4><p>O erro clássico é mandar a cotação, dizer "qualquer coisa estou à disposição" e nunca mais falar. Para fechar venda, você precisa manter cerca de <strong>8 pontos de contato</strong>, em dias diferentes e por canais diferentes: um dia uma mensagem no WhatsApp, outro dia uma ligação, outro dia uma chamada de vídeo. Por quê? O cliente quase sempre quer o produto — o que falta é o tempo dele de decidir priorizar a compra. Os pontos de contato mantêm você presente até o momento de compra dele chegar.</p></div>
<p>A preocupação nesta etapa é com <strong>atividades atrasadas</strong> ou <strong>negócios sem atividade</strong>. É aqui que o controle do calendário de atividades garante que ninguém seja esquecido.</p>
<h3>Etapa 5 — Solicitar documentos (a etapa mais crítica)</h3>
<div class="callout warn"><h4>Atenção máxima: é aqui que mais se perde (e se resgata) negócio</h4><p>Entre o cliente dizer "fechei" e o contrato estar realmente assinado existe um buraco enorme. Se você manda os documentos e some, perde o negócio. Sua interação ativa nesta etapa é primordial.</p></div>
<p><strong>Casos reais que acontecem aqui:</strong></p>
<ul>
<li>O cliente "fechou", mas como você demorou no acompanhamento, ele já estava conversando com outro corretor que avançou a documentação primeiro.</li>
<li>O processo estava em fechamento, mas a esposa do cliente tinha uma amiga que virou corretora e fechou com ela.</li>
<li>A operadora atual (ao receber o pedido de cancelamento) liga oferecendo proposta para reter o cliente — e, se você não estiver presente, o cliente recua.</li>
</ul>
<p><strong>O que você faz nesta etapa:</strong> pede a carta de aproveitamento de carência, pede os documentos da empresa à contabilidade, tira as últimas dúvidas — ou seja, conduz ativamente até o contrato assinado.</p>
<div class="callout tip"><h4>O custo da lentidão na documentação</h4><p>Documentação não conferida derruba o ritmo. Ex.: o cliente começou no dia 1º, mandou a documentação no dia 15, a conferência demora, surge uma pendência, ele reenvia no dia 23, mais 3 dias para conferir… Na cabeça dele, queria fechar no começo do mês e "não conseguiu". Cada dia de atraso aumenta a chance de desistência. Agilidade aqui é decisiva.</p></div>
<h3>Etapa 6 — Acompanhar fechamento</h3>
<p>Você cobra o ADM, acompanha a emissão do contrato e a análise da operadora. O negócio já está praticamente fechado; falta finalizar.</p>
<div class="callout internal"><h4>Regra: nesta etapa o negócio tem que estar 100% atualizado</h4><p>Quando o negócio chega aqui, você já sabe qual plano, qual valor, já tem o nome completo da pessoa — está tudo definido. Mantenha <strong>valor, produto, etiqueta, CNPJ e número de vidas</strong> todos preenchidos.</p></div>`}
],quiz:[
{pergunta:"O que entra no CRM como negócio?",opcoes:["Toda a lista de convidados de um evento","Apenas o cliente que levantou a mão e demonstrou interesse no plano","Qualquer contato do celular","Somente quem já assinou"],correta:1,explica:"Só vira negócio quando o contato diz 'quero o plano'. Lista de evento não contatada é trabalho de prospecção, não negócio no funil de vendas."},
{pergunta:"Em média, em qual ponto de contato o cliente fecha?",opcoes:["No 1º","No 8º ao 9º ponto de contato","No 3º","No 20º"],correta:1,explica:"A regra dos 8 contatos: o cliente fecha em média no 8º-9º ponto de contato, em dias e canais diferentes. O erro clássico é mandar a cotação e nunca mais falar."},
{pergunta:"Qual a etapa mais crítica do funil?",opcoes:["Fazer contato inicial","Solicitar documentos — entre o 'fechei' e o contrato assinado há um buraco enorme","Apresentar proposta","Pós-venda"],correta:1,explica:"Solicitar documentos é onde mais se perde (e resgata) negócio. Se você manda os documentos e some, o cliente pode fechar com outro corretor ou ser retido pela operadora atual."},
{pergunta:"Nas etapas 1 e 2 (contato inicial e dados), o que mais importa?",opcoes:["O preço","A velocidade — acontecer em minutos, pois o cliente cota com vários corretores","O número de vidas","A documentação"],correta:1,explica:"Velocidade é tudo: quem responde primeiro larga na frente. O cliente está cotando com vários corretores ao mesmo tempo."}
]},

/* ===================== PARTE 6 ===================== */
{id:6,titulo:"Atividades: o coração da operação",desc:"As cores das atividades, as 6 classificações, a rotina do calendário e a etiqueta de reajuste.",modulos:[
{id:11,num:11,tempo:"6 min",titulo:"As cores e as 6 classificações de atividade",html:`
<p>Se você dominar só uma coisa deste treinamento, que seja esta: a disciplina com as atividades. É ela que mantém o controle de cada cliente. Quando o vendedor chega de manhã, vai ao calendário de atividades e lê tudo o que precisa fazer hoje. Finaliza essas atividades e só depois parte para clientes novos.</p>
<h3>As cores das atividades</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Indicador</th><th>Significado</th><th>O que fazer</th></tr></thead><tbody>
<tr><td>🟢 Verde</td><td>Atividade que tem que ser feita hoje</td><td>Executar ainda hoje</td></tr>
<tr><td>⚪ Cinza</td><td>Atividade para frente (futuro)</td><td>Está agendada, tranquilo</td></tr>
<tr><td>🔴 Vermelho</td><td>Atividade atrasada</td><td>Resolver com urgência</td></tr>
<tr><td>❗ Exclamação</td><td>Não tem atividade — proibido!</td><td>Criar uma atividade imediatamente</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>Negócio sem atividade é proibido</h4><p>Quando o negócio aparece com o sinal de exclamação (sem atividade), você perdeu o controle daquele cliente. Um funil saudável não tem negócios sem atividade nem atividades atrasadas acumuladas.</p></div>
<h3>As 6 classificações de atividade</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>#</th><th>Classificação</th><th>Quando usar</th></tr></thead><tbody>
<tr><td>1</td><td>Prospecção</td><td>Ir atrás do cliente e levantar o negócio</td></tr>
<tr><td>2</td><td>Acompanhamento</td><td>Acompanhar — seja para mandar cotação, seja até o cliente decidir fechar</td></tr>
<tr><td>3</td><td>Documentação</td><td>Quando já está na etapa de pedir e conferir documentos</td></tr>
<tr><td>4</td><td>Fechamento</td><td>Já está no fechamento, aguardando o contrato para emitir</td></tr>
<tr><td>5</td><td>Pós-venda</td><td>Tudo emitido e pronto — fazer um contato de relacionamento</td></tr>
<tr><td>6</td><td>Reajuste</td><td>Atividade futura para renegociar no aniversário do contrato</td></tr>
</tbody></table></div>`},
{id:12,num:12,tempo:"5 min",titulo:"O calendário e a etiqueta de reajuste",html:`
<h3>A rotina do calendário de atividades</h3>
<p>Você pode ver as atividades de uma pessoa só ou de todas, e filtrar por tipo. Exemplo prático: filtrar todas as atividades de <strong>documentação</strong> que existem hoje permite saber exatamente quais negócios estão girando com documentação no momento. Isso só funciona se o vendedor tiver classificado a atividade com a etiqueta certa.</p>
<h3>A etiqueta de reajuste</h3>
<div class="callout tip"><h4>Exemplo — gerando a atividade de reajuste</h4><p>Você fechou um contrato com vigência de 29/05/2026. O próximo reajuste será em 29/05/2027. Assim que fecha, você já cria uma atividade de reajuste agendada para um ano à frente. Quando a data chegar, você terá um lembrete: "deixa eu ver quanto foi o reajuste para ver o que conseguimos negociar". Isso transforma a renovação em oportunidade — e em retenção.</p></div>
<p>Tarefa recorrente do corretor: pegar a lista de negócios fechados, localizar cada cliente e criar as atividades de reajuste, para que, quando a data chegar, exista um ponto de contato pronto.</p>
<div class="callout key"><h4>Anexe sempre a proposta ao negócio</h4><p>Sempre anexe no negócio a proposta que você enviou. Assim, qualquer pessoa que abrir o card consegue saber o que foi negociado e com quais valores. Mesmo que outra pessoa monte a proposta, seu papel é abrir o Pipedrive, cadastrar a pessoa com os dados, colocar a cotação na etapa específica e gerar uma atividade de acompanhamento.</p></div>`}
],quiz:[
{pergunta:"O que significa a 'bolinha' VERMELHA numa atividade?",opcoes:["Atividade de hoje","Atividade futura","Atividade atrasada — resolver com urgência","Sem atividade"],correta:2,explica:"Verde = hoje; Cinza = futuro; Vermelho = atrasada (resolver urgente); Exclamação = sem atividade (proibido — criar uma imediatamente)."},
{pergunta:"Quando um negócio mostra o sinal de exclamação (❗):",opcoes:["Está tudo certo","Você perdeu o controle do cliente — é negócio sem atividade, proibido","É um negócio ganho","É um lembrete de reajuste"],correta:1,explica:"Exclamação = sem atividade. Um funil saudável não tem negócios sem atividade nem atrasos acumulados. Crie uma atividade imediatamente."},
{pergunta:"Quantas classificações de atividade existem e qual é futura por natureza?",opcoes:["3, sendo Prospecção","6, sendo Reajuste (no aniversário do contrato)","4, sendo Pós-venda","10, sendo Documentação"],correta:1,explica:"São 6: Prospecção, Acompanhamento, Documentação, Fechamento, Pós-venda e Reajuste. A de Reajuste é agendada para um ano à frente, no aniversário do contrato."},
{pergunta:"Por que anexar sempre a proposta ao negócio?",opcoes:["É obrigatório por lei","Para que qualquer pessoa que abrir o card saiba o que foi negociado e com quais valores","Para aumentar o valor","Para gerar comissão"],correta:1,explica:"Anexar a proposta deixa o histórico claro: qualquer um abre o card e entende o que foi negociado, mesmo que outra pessoa tenha montado a cotação."}
]},

/* ===================== PARTE 7 ===================== */
{id:7,titulo:"Ganho, Perdido e os motivos de perda",desc:"Marcar Ganho (e o trabalho que continua), marcar Perdido e os 7 motivos de perda com a lição de cada um.",modulos:[
{id:13,num:13,tempo:"6 min",titulo:"Ganho, Perdido e os 7 motivos",html:`
<p>Encerrar o negócio corretamente é o que mantém seus dados confiáveis. E cada motivo de perda carrega uma lição.</p>
<h3>Marcar como Ganho (e por que ainda há trabalho)</h3>
<p>O negócio sai da tela do funil quando você clica em <strong>Ganho</strong>. Ganho, para o vendedor, é quando o cliente assina o contrato. Ao clicar, o negócio sobe daquela tela de controle.</p>
<div class="callout warn"><h4>Ganho não significa "acabou"</h4><p>Mesmo após dar Ganho, você ainda precisa manter uma atividade de acompanhamento. Por quê? O cliente assinou, mas há o tempo de emitir o boleto, fazer o onboarding e finalizar o processo. Mesmo fora da tela do funil, vá às atividades para concluir o que falta.</p></div>
<h3>Marcar como Perdido</h3>
<p>Por algum motivo, em alguma hora, um negócio será dado como perdido. Ao dar perdido, você é <strong>obrigado a colocar o motivo</strong>. Isso não é burocracia: é o que permite à corretora entender onde e por que está perdendo.</p>
<h3>Os 7 motivos de perda e o que cada um ensina</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Motivo de perda</th><th>O que significa</th><th>A lição</th></tr></thead><tbody>
<tr><td>Achou valor alto</td><td>Queria reduzir o valor e não havia produto mais barato disponível</td><td>O cliente não tem capital hoje para pagar; rever cenários de produto</td></tr>
<tr><td>Fechou com outro corretor</td><td>Fechou o mesmo tipo de plano com um concorrente</td><td>Algo no seu processo falhou — encantamento ou confiança insuficientes</td></tr>
<tr><td>Não consegui contato</td><td>Tentou vários contatos e o cliente não retornou / sumiu</td><td>Trabalhar mais para reencontrar o contato (indicação, outras fontes)</td></tr>
<tr><td>Sem interesse no plano</td><td>O cliente disse que não quer mais o plano</td><td>Talvez você não entendeu a real dor que motivou o cliente</td></tr>
<tr><td>Vai continuar com o plano atual</td><td>O plano atual dele está bom de preço e cobertura</td><td>Acontece; registrar e eventualmente retomar no reajuste dele</td></tr>
<tr><td>Sem produto disponível</td><td>Não há produto adequado para o perfil do cliente no momento</td><td>Buscar alternativas (ex.: pessoa física, outros cenários)</td></tr>
<tr><td>Operadora declinou o contrato</td><td>A operadora recusou (ex.: declaração de saúde / análise)</td><td>Buscar alternativa com outra operadora ou outro produto</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>Por que registrar o motivo certo muda o jogo</h4><p>Cada motivo aponta para uma ação diferente. "Fechou com outro corretor" indica falha de processo que você precisa corrigir. "Sem interesse" sugere que você não capturou a dor real. "Não consegui contato" pede mais esforço de reativação. O motivo de perda não é sobre culpa — é o seu <strong>mapa de melhoria</strong>.</p></div>`}
],quiz:[
{pergunta:"Depois de marcar um negócio como Ganho, o trabalho:",opcoes:["Acaba totalmente","Continua — manter atividade de acompanhamento até emitir boleto, onboarding e finalizar","Passa para o financeiro e some","Vira Perdido"],correta:1,explica:"Ganho ≠ acabou. O cliente assinou, mas há boleto, onboarding e finalização — mantenha uma atividade de acompanhamento mesmo fora da tela do funil."},
{pergunta:"Ao marcar um negócio como Perdido, o que é obrigatório?",opcoes:["Nada","Informar o motivo de perda","Pagar uma taxa","Avisar o cliente"],correta:1,explica:"O motivo de perda é obrigatório. Não é burocracia: permite à corretora entender onde e por que perde — é o mapa de melhoria."},
{pergunta:"O motivo 'Fechou com outro corretor' ensina que:",opcoes:["O preço estava alto","Algo no seu processo falhou — encantamento ou confiança insuficientes","A operadora recusou","O cliente sumiu"],correta:1,explica:"Cada motivo aponta uma ação. 'Fechou com outro corretor' indica falha de processo (encantamento/confiança) que você precisa corrigir."}
]},

/* ===================== PARTE 8 ===================== */
{id:8,titulo:"Configuração, Rotina e Cultura",desc:"Configuração inicial, integrações (e-mail, agenda, Meet), automações e relatórios, a rotina diária, o checklist e os erros que custam vendas.",modulos:[
{id:14,num:14,tempo:"6 min",titulo:"Configuração e integrações",html:`
<p>Uma conta bem configurada faz o CRM trabalhar a seu favor.</p>
<h3>Configuração inicial obrigatória</h3>
<ol>
<li><strong>Entre pelo convite da PlaneCorp.</strong> Você receberá um convite por e-mail para a conta corporativa. Não crie conta por conta própria.</li>
<li><strong>Mude o idioma para Português.</strong> Inicial do seu nome → Preferências Pessoais → Linguagem → Português. Evita ter que traduzir mentalmente os campos.</li>
<li><strong>Complete seu perfil.</strong> Nome completo, foto e telefone — importante para identificação interna e para os e-mails que saem do sistema.</li>
<li><strong>Organize seu menu.</strong> Em Preferências de Interface você reordena os itens (Negócios, E-mail, Contatos, Atividades, Insights). Cada usuário ajusta o seu.</li>
</ol>
<h3>E-mail, agenda e Google Meet</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Integração</th><th>O que faz</th><th>Prioridade</th></tr></thead><tbody>
<tr><td>Gmail / Outlook</td><td>Registra automaticamente os e-mails trocados com clientes dentro do negócio. Você pode mandar e-mail de dentro do Pipedrive.</td><td>Alta</td></tr>
<tr><td>Google Calendar</td><td>Sincroniza atividades com sua agenda. Recomendado bidirecional (o que cria no Pipedrive vai pro Google e vice-versa).</td><td>Alta</td></tr>
<tr><td>Google Meet</td><td>Gera o link da reunião automaticamente ao criar uma atividade de reunião.</td><td>Média</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>O erro que distorce todas as métricas</h4><p>O erro mais comum é fazer tudo pelo WhatsApp e só cadastrar no CRM na hora de fechar. Isso destrói dois dados essenciais: a <strong>taxa de conversão por etapa</strong> (parece que você converte 100%, porque só entra o que já está vendido) e o <strong>ciclo de venda</strong> (você não sabe quanto tempo leva para fechar). Sem esses dados, é impossível otimizar. <em>Crie o negócio no primeiro contato, sempre.</em></p></div>
<h3>Automações, filtros e relatórios</h3>
<ul>
<li><strong>Automações:</strong> o Pipedrive cria atividades automaticamente conforme o negócio avança, dispara follow-ups quando um e-mail fica sem resposta e notifica o gestor em eventos-chave. A automação cria o próximo passo; executá-lo com qualidade é com você.</li>
<li><strong>Filtros:</strong> ver apenas os negócios de uma origem, etapa, cidade, ou negócios sem atividade. Use-os para montar estratégias e encontrar o que precisa de atenção.</li>
<li><strong>Insights (relatórios):</strong> mostram geração de leads, taxa de conversão, duração das oportunidades, ticket médio e atividades em atraso. É onde o gestor acompanha a saúde do time e cada corretor acompanha suas metas.</li>
<li><strong>Produtos:</strong> ao definir o plano escolhido, adicione o produto ao negócio e ajuste o valor para o valor real do contrato.</li>
<li><strong>Anexos:</strong> a proposta enviada e demais documentos ficam anexados dentro do negócio.</li>
</ul>`},
{id:15,num:15,tempo:"6 min",titulo:"Rotina diária, erros e cultura",html:`
<p>Consistência vence talento. O corretor com rotina diária bem estruturada supera qualquer outro que age por impulso.</p>
<h3>A abertura do dia</h3>
<p>Todo dia começa abrindo o Pipedrive e indo direto ao calendário de atividades. A pergunta única da manhã é: <em>o que eu preciso fazer hoje?</em> Você não abre os 40 negócios — executa as atividades do dia e só então busca clientes novos.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Passo</th><th>Ação</th></tr></thead><tbody>
<tr><td>Ler as atividades de hoje</td><td>Abrir o calendário e organizar o dia em torno das atividades verdes</td></tr>
<tr><td>Zerar atrasos</td><td>Toda atividade vermelha (atrasada) é resolvida ou reprogramada na hora</td></tr>
<tr><td>Caçar negócios sem atividade</td><td>Nenhum negócio pode ficar com o sinal de exclamação. Criar o próximo passo</td></tr>
</tbody></table></div>
<h3>Checklist diário do corretor</h3>
<ul>
<li>Abri o Pipedrive e li as atividades de hoje no calendário</li>
<li>Resolvi ou reprogramei todas as atividades atrasadas (vermelhas)</li>
<li>Nenhum negócio ativo está sem atividade futura (sem exclamação)</li>
<li>Criei negócio para cada cliente novo que levantou a mão hoje</li>
<li>Cada negócio está na etapa que reflete a realidade da conversa</li>
<li>Registrei a etiqueta de origem em cada novo negócio</li>
<li>Anexei a proposta enviada dentro do negócio</li>
<li>Mantive o ritmo de acompanhamento (rumo aos 8 pontos de contato)</li>
<li>Negócios encerrados receberam Ganho ou Perdido (com motivo)</li>
</ul>
<h3>Erros mais comuns</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Erro</th><th>Consequência</th><th>Como evitar</th></tr></thead><tbody>
<tr><td>Fazer tudo no WhatsApp e só lançar no CRM ao fechar</td><td>Conversão falsa de 100% e ciclo de venda invisível</td><td>Criar o negócio no primeiro contato</td></tr>
<tr><td>Deixar negócio sem atividade</td><td>Perde o controle do cliente; ele esfria e some</td><td>Nunca fechar o card sem criar o próximo passo</td></tr>
<tr><td>Mandar a cotação e parar de acompanhar</td><td>Perde a venda no meio (a maioria fecha no 8º contato)</td><td>Manter pontos de contato em canais variados</td></tr>
<tr><td>Demorar na conferência de documentos</td><td>O cliente desanima ou é fisgado por concorrente</td><td>Agilidade total na etapa de documentos</td></tr>
<tr><td>Não preencher o motivo de perda</td><td>A corretora não consegue identificar padrões e melhorar</td><td>Sempre registrar o motivo mais preciso</td></tr>
<tr><td>Inflar o valor com a proposta mais cara</td><td>Previsão de receita distorcida</td><td>Valor sempre = a menor proposta enviada</td></tr>
<tr><td>Escolher o funil pelas vidas vendidas</td><td>Empresa com potencial corporativo no funil errado</td><td>Funil pelo potencial (30+ colaboradores = corporativo)</td></tr>
</tbody></table></div>
<div class="callout quote">É impossível ser bom em algo que você faz de vez em quando. O CRM só funciona se for usado todos os dias, sem exceção.<span class="who">— O mantra do corretor PlaneCorp</span></div>
<div class="callout key"><p>Clareza gera confiança. Cuidado gera valor. Resultado gera impacto. O acompanhamento diário do cliente é o que transforma cotação em contrato — e é a única parte do jogo que está <strong>100% nas suas mãos</strong>.</p></div>`}
],quiz:[
{pergunta:"Qual o 'erro que distorce todas as métricas'?",opcoes:["Usar o Pipedrive em inglês","Fazer tudo no WhatsApp e só cadastrar no CRM na hora de fechar","Anexar a proposta","Criar muitas atividades"],correta:1,explica:"Cadastrar só ao fechar dá conversão falsa de 100% e esconde o ciclo de venda. Crie o negócio no primeiro contato, sempre."},
{pergunta:"Como deve começar o dia do corretor?",opcoes:["Abrindo os 40 negócios um a um","Abrindo o calendário de atividades e perguntando 'o que eu preciso fazer hoje?'","Ligando para o gestor","Conferindo comissões"],correta:1,explica:"A abertura do dia: ir direto ao calendário, executar as atividades do dia (verdes), zerar atrasos (vermelhas) e caçar negócios sem atividade — só depois buscar clientes novos."},
{pergunta:"Qual a forma correta de entrar no Pipedrive?",opcoes:["Criar conta própria","Pelo convite da PlaneCorp para a conta corporativa","Usar a conta de um colega","Pelo app na loja"],correta:1,explica:"Entre pelo convite da PlaneCorp (conta corporativa); não crie conta por conta própria. Depois mude o idioma para Português e complete o perfil."},
{pergunta:"Qual o mantra do corretor PlaneCorp sobre o CRM?",opcoes:["Usar quando der tempo","É impossível ser bom em algo que se faz de vez em quando — o CRM só funciona se usado todos os dias","Só usar para fechar","O CRM é opcional"],correta:1,explica:"Consistência vence talento. O acompanhamento diário é o que transforma cotação em contrato — e é a única parte 100% nas suas mãos."}
]}

];

/* ===================== EXAME DE CERTIFICAÇÃO — CRM PIPEDRIVE (30 perguntas) ===================== */
const EXAME_CRM=[
{pergunta:"Qual o principal motivo de a PlaneCorp perder vendas?",opcoes:["Preço","Falta de acompanhamento do cliente","Concorrência","Produto"],correta:1,explica:"Não é preço, concorrente nem produto — é a falta de acompanhamento ao longo da jornada da venda."},
{pergunta:"O que significa CRM?",opcoes:["Controle de Renda Mensal","Customer Relationship Management (Sistema de Relacionamento com o Cliente)","Cadastro Rápido de Mercado","Central de Relatórios Mensais"],correta:1,explica:"CRM = Customer Relationship Management; organiza pessoas, empresas, negócios e atividades."},
{pergunta:"Segundo o princípio que rege tudo, você controla:",opcoes:["O resultado","Apenas a execução","O cliente","O mercado"],correta:1,explica:"'Resultado a gente não controla; controla apenas a execução.' A consistência na execução gera o resultado."},
{pergunta:"Quais são as 4 esferas do CRM?",opcoes:["Lead, Venda, Meta e Comissão","Pessoa, Empresa, Negócio e Atividade","Funil, Etapa, Valor e Etiqueta","CPF, CNPJ, Telefone e E-mail"],correta:1,explica:"Pessoa, Empresa, Negócio e Atividade são as 4 esferas de qualquer CRM."},
{pergunta:"Quais são os campos obrigatórios da Pessoa?",opcoes:["CPF e RG","Nome, Telefone e E-mail (e-mail até o fechamento)","Apenas o nome","CNPJ"],correta:1,explica:"Nome (completo até finalizar), Telefone (sempre) e E-mail (até o fechamento). Organização, se houver."},
{pergunta:"Quais são os campos obrigatórios da Empresa?",opcoes:["Nome e telefone","Nome da empresa e CNPJ","Apenas CNPJ","Endereço"],correta:1,explica:"Nome da empresa e CNPJ são obrigatórios. Telefone e endereço são recomendados."},
{pergunta:"Qual a regra absoluta sobre negócio e atividade?",opcoes:["Atividade é opcional","Nunca pode existir negócio sem atividade","Só 1 atividade por dia","Atividade só no fechamento"],correta:1,explica:"Todo negócio tem que ter pessoa, negócio e SEMPRE uma atividade. Negócio sem atividade = perda de controle."},
{pergunta:"Pela Regra de Propriedade, o negócio é de quem?",opcoes:["Da PlaneCorp","Do vendedor","Do cliente","Da operadora"],correta:1,explica:"O cliente (Pessoa) e a empresa (Organização) são da PlaneCorp; o negócio (a performance da negociação) é do vendedor."},
{pergunta:"A pessoa de contato de um negócio pode mudar?",opcoes:["Nunca","Sim — ex.: começa com o dono e passa ao RH; você atualiza a pessoa de contato","Só com aprovação","Só em PF"],correta:1,explica:"A pessoa de contato pode mudar ao longo da negociação. Pergunte sempre: 'com quem eu me relaciono neste negócio agora?'"},
{pergunta:"Em um plano empresarial, o título do negócio deve ser:",opcoes:["O nome do titular","O nome da empresa","O nome do corretor","O CNPJ"],correta:1,explica:"Empresarial: título = nome da empresa. PF: título = nome do titular do plano (quem usa)."},
{pergunta:"Mãe paga o plano da filha. Quem vai no título do negócio (PF)?",opcoes:["A mãe","A filha (quem usa o plano)","O corretor","Os netos"],correta:1,explica:"A mãe é titular financeira (vai na Pessoa, é quem negocia). A filha é a titular (vai no título, é quem usa)."},
{pergunta:"Qual valor entra no campo do negócio com várias cotações?",opcoes:["A mais cara","Sempre a menor proposta enviada","A média","O que o cliente sugerir"],correta:1,explica:"Valor = sempre a menor proposta. Nunca infle com a mais cara; ajuste para o real quando o cliente decidir."},
{pergunta:"O que define o funil Massificado x Corporativo?",opcoes:["As vidas vendidas agora","O potencial da empresa (30+ colaboradores = corporativo)","O valor","A cidade"],correta:1,explica:"É o potencial, não as vidas vendidas. Empresa de 200 colaboradores fechando 10 vidas continua corporativa."},
{pergunta:"Para que serve o funil de Prospecção?",opcoes:["Guardar contratos","Registrar contatos no radar (ex.: networking) antes de pedirem plano","Emitir boletos","Calcular metas"],correta:1,explica:"A prospecção captura quem entrou no radar para não se perder, antes de levantar a mão pedindo plano."},
{pergunta:"A etiqueta de origem é obrigatória porque:",opcoes:["É lei","Ajuda a desenhar estratégias de onde buscar mais clientes (dados)","Aumenta a comissão","Define o preço"],correta:1,explica:"A etiqueta transforma intuição em estratégia baseada em dados — ex.: se indicação é 60% das vendas, crie campanha de indicação."},
{pergunta:"A etiqueta registra a origem de qual venda?",opcoes:["Da primeira","Da última (aquela venda específica)","Da maior","De todas"],correta:1,explica:"É a origem da última venda. Cliente que veio do BNI e depois indica alguém: a nova venda é 'Indicação de cliente'."},
{pergunta:"O que é a etiqueta 'Finder'?",opcoes:["Lead orgânico","Indicação remunerada (paga comissão a quem indicou se fechar)","Plantão","Patrocínio"],correta:1,explica:"Finder é indicação remunerada. Diferente de 'Indicação de cliente', que não tem remuneração."},
{pergunta:"O que entra no CRM como negócio?",opcoes:["Toda lista de evento","Só o cliente que levantou a mão e demonstrou interesse","Qualquer contato","Só quem assinou"],correta:1,explica:"Vira negócio quando o contato diz 'quero o plano'. Lista de evento não contatada é prospecção, não negócio."},
{pergunta:"Em média, em qual contato o cliente fecha?",opcoes:["1º","8º ao 9º","3º","15º"],correta:1,explica:"A regra dos 8 contatos: em média o cliente fecha no 8º-9º ponto de contato, em dias e canais diferentes."},
{pergunta:"Qual a etapa mais crítica do funil?",opcoes:["Contato inicial","Solicitar documentos","Apresentar proposta","Pós-venda"],correta:1,explica:"Solicitar documentos é onde mais se perde (e resgata) negócio — entre o 'fechei' e o contrato assinado há um buraco enorme."},
{pergunta:"Nas etapas 1 e 2, o que mais importa?",opcoes:["O preço","A velocidade (minutos, não dias) — quem responde primeiro larga na frente","A rede","A documentação"],correta:1,explica:"O cliente cota com vários corretores ao mesmo tempo; velocidade é tudo."},
{pergunta:"O que significa a bolinha VERMELHA?",opcoes:["Hoje","Futuro","Atividade atrasada (urgente)","Sem atividade"],correta:2,explica:"Verde = hoje; Cinza = futuro; Vermelho = atrasada; Exclamação = sem atividade (proibido)."},
{pergunta:"Negócio com sinal de exclamação significa:",opcoes:["Está ótimo","Sem atividade — você perdeu o controle, crie uma imediatamente","É ganho","É reajuste"],correta:1,explica:"Exclamação = negócio sem atividade, proibido. Um funil saudável não tem isso nem atrasos acumulados."},
{pergunta:"Quantas classificações de atividade existem?",opcoes:["3","6 (Prospecção, Acompanhamento, Documentação, Fechamento, Pós-venda, Reajuste)","4","10"],correta:1,explica:"São 6 classificações, espelhando o momento do negócio. A de Reajuste é futura (aniversário do contrato)."},
{pergunta:"Depois de marcar Ganho, o trabalho:",opcoes:["Acaba","Continua (boleto, onboarding, finalização) — manter atividade de acompanhamento","Vira Perdido","Some"],correta:1,explica:"Ganho ≠ acabou. Há boleto, onboarding e finalização — mantenha uma atividade de acompanhamento."},
{pergunta:"Ao marcar Perdido, o que é obrigatório?",opcoes:["Nada","Informar o motivo de perda","Pagar taxa","Avisar a operadora"],correta:1,explica:"O motivo de perda é obrigatório — é o mapa de melhoria da corretora, não burocracia."},
{pergunta:"O motivo 'Fechou com outro corretor' ensina que:",opcoes:["O preço estava alto","Algo no seu processo falhou (encantamento/confiança)","A operadora recusou","O cliente sumiu"],correta:1,explica:"Cada motivo aponta uma ação. 'Fechou com outro' = falha de processo a corrigir."},
{pergunta:"Por que criar o negócio no primeiro contato?",opcoes:["Por estética","Para não distorcer a taxa de conversão e o ciclo de venda","Para ganhar comissão antes","Não precisa"],correta:1,explica:"Cadastrar só ao fechar dá conversão falsa de 100% e esconde o ciclo de venda. Crie no primeiro contato, sempre."},
{pergunta:"Como gerar a atividade de reajuste?",opcoes:["No dia do reajuste","Ao fechar, já criar uma atividade agendada para 1 ano à frente (aniversário do contrato)","Nunca","Só se o cliente pedir"],correta:1,explica:"Ao fechar com vigência 29/05/2026, crie a atividade de reajuste para 29/05/2027 — transforma renovação em oportunidade e retenção."},
{pergunta:"Qual o mantra do corretor PlaneCorp sobre o CRM?",opcoes:["Usar de vez em quando","É impossível ser bom em algo que se faz de vez em quando — usar todos os dias","O CRM é opcional","Só para fechar"],correta:1,explica:"Consistência vence talento. O CRM só funciona se usado todos os dias; o acompanhamento diário transforma cotação em contrato."}
];

/* =====================================================================
   UNIMED ADESÃO VITAL — Unimed Curitiba · Coletivo por Adesão (Grupo Vital)
   Fonte: Manual do Consultor Unimed Adesão Vital v2.0 (jun/2026). Sem redução.
   ===================================================================== */
const UNIAD=[

/* ===================== PARTE 1 ===================== */
{id:1,titulo:"Fundamentos do Mercado",desc:"O que é plano de saúde, sinistralidade, a ANS, as três modalidades de contratação, os conceitos centrais e a jornada do beneficiário.",modulos:[
{id:1,num:1,tempo:"8 min",titulo:"O que é plano de saúde e como o mercado funciona",html:`
<p>Antes de vender qualquer produto, você precisa entender o que está vendendo. Plano de saúde não é serviço médico — é um <strong>contrato de intermediação de risco</strong>. Quem vende plano é uma <em>operadora</em>: ela coleta mensalidades de muitas pessoas, monta uma rede de médicos, hospitais, clínicas e laboratórios, e quando alguém adoece, a operadora paga por aquele atendimento.</p>
<p>A lógica funciona porque a maioria paga e usa pouco. A minoria que precisa de tratamento caro é coberta com o dinheiro de todos. Por isso a operadora se preocupa com <strong>quem entra na carteira</strong>: se entra muita gente doente de uma vez, o equilíbrio quebra e a mensalidade dispara para todos.</p>
<div class="callout key"><h4>Sinistralidade — a chave de tudo</h4><p>O equilíbrio entre o que entra de mensalidade e o que sai de procedimento se chama <strong>sinistralidade</strong>. Sinistralidade alta = reajuste maior no ano seguinte. Sinistralidade controlada = reajuste menor. Por isso a Unimed faz análise rigorosa antes de aceitar cliente novo — e por isso o reajuste do Adesão Unimed gira em torno de <strong>8% a 10,5%</strong> enquanto outros contratos estouram 20% ou 30%.</p></div>
<div class="callout arg"><h4>Aplicação</h4><p>Quando o cliente reclamar do reajuste de um plano antigo: <em>"O seu plano teve 38% de reajuste porque a carteira ficou desequilibrada — não foi a operadora te roubando, foi a matemática do contrato."</em> Aí você apresenta o histórico controlado da Unimed.</p></div>
<h3>O ecossistema da venda</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Camada</th><th>O que faz</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Operadora</td><td>Cria o produto, monta a rede, assume o risco</td><td>Unimed Curitiba, Hapvida, Bradesco Saúde</td></tr>
<tr><td>Administradora / Plataforma de vendas</td><td>Intermedia o Adesão entre a operadora e a entidade de classe</td><td>Grupo Vital, Qualicorp, Aliança</td></tr>
<tr><td>Corretora / Corretor</td><td>Vende, faz pós-venda, cuida do cliente</td><td>PlaneCorp, você</td></tr>
</tbody></table></div>
<div class="callout tip"><p>No Adesão da Unimed Curitiba, a <strong>Unimed</strong> é a operadora e o <strong>Grupo Vital</strong> é uma das cinco plataformas autorizadas a vender o produto. Você, corretor PlaneCorp, atua junto ao Grupo Vital, que faz toda a interface administrativa com a Unimed.</p></div>`},
{id:2,num:2,tempo:"6 min",titulo:"A ANS e as três modalidades de contratação",html:`
<p>A <strong>ANS (Agência Nacional de Saúde Suplementar)</strong> é a reguladora federal que define todas as regras do mercado. Ela determina: o <strong>rol mínimo de cobertura</strong> (procedimentos que todo plano deve cobrir), os <strong>prazos máximos de carência</strong>, as regras de portabilidade, os percentuais máximos de reajuste de planos individuais e as <strong>três modalidades</strong> de contratação.</p>
<div class="callout internal"><h4>Regra absoluta</h4><p>Todo plano que você compara com a Unimed precisa ter <strong>registro na ANS</strong>. É isso que garante o direito ao aproveitamento de carência. Plano sem registro ANS não vale para redução de carência — é cartão de desconto, não plano de saúde.</p></div>
<h3>3.1 Plano Individual / Familiar (Pessoa Física)</h3>
<p>Contratado direto com a operadora, sem vínculo com empresa ou entidade. É o formato mais protegido pela ANS (reajuste limitado, cancelamento mais rígido a favor do beneficiário) e por isso o <strong>mais caro</strong>. A maioria das operadoras (incluindo a Unimed Curitiba) já não comercializa PF para novos clientes, ou comercializa a preços muito altos.</p>
<h3>3.2 Plano Coletivo Empresarial (PME)</h3>
<p>Contratado por uma empresa (CNPJ) para funcionários e dependentes. A partir de <strong>3 vidas</strong> na maioria das operadoras. Como é coletivo, a operadora dilui o risco e o preço cai bastante. O reajuste é negociado a cada aniversário, com base na sinistralidade do grupo.</p>
<h3>3.3 Plano Coletivo por Adesão</h3>
<p>O foco deste manual. O cliente é uma <strong>pessoa física vinculada a uma entidade de classe</strong> (sindicato, conselho profissional ou associação). A entidade contrata o plano com a operadora, e o profissional adere por meio dela. A partir de <strong>1 vida</strong> (o titular). O preço é até <strong>40% mais barato</strong> que o PF, com o mesmo padrão de cobertura.</p>
<div class="callout arg"><h4>Aplicação</h4><p>Quando o cliente disser "quero um plano para mim e minha família", <strong>não saia oferecendo PME ou PF de cara</strong>. A primeira pergunta é: <em>"Você tem registro em algum conselho de classe ou é servidor público?"</em> Se sim, o Adesão resolve a vida dele 40% mais barato.</p></div>`},
{id:3,num:3,tempo:"8 min",titulo:"Conceitos centrais que todo corretor domina",html:`
<p>Domine cada termo em três camadas: <strong>técnica</strong>, <strong>tradução para o leigo</strong> e <strong>impacto comercial</strong>.</p>
<h3>Carência</h3>
<p><strong>Técnica:</strong> período após a vigência em que o beneficiário ainda não tem direito a determinados procedimentos. <strong>Leigo:</strong> "É o tempo que você espera para usar o plano para certas coisas." <strong>Comercial:</strong> a maior fonte de objeção e a maior arma de fechamento — se o cliente vem de outra operadora, você reduz grande parte da carência.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Procedimento</th><th>Carência (contratual padrão Unimed)</th></tr></thead><tbody>
<tr><td>Urgência e Emergência</td><td>24 horas</td></tr>
<tr><td>Consultas e Exames Laboratoriais</td><td>30 dias</td></tr>
<tr><td>Exames Simples</td><td>30 dias</td></tr>
<tr><td>Exames de Diagnose e Fisioterapia</td><td>90 dias</td></tr>
<tr><td>Exames de Alta Complexidade e Internações</td><td>180 dias</td></tr>
<tr><td>Acomodação Apartamento (vindo de Enfermaria)</td><td>180 dias</td></tr>
<tr><td>Terapias</td><td>180 dias</td></tr>
<tr><td>Parto Normal ou Cesariana</td><td>300 dias</td></tr>
<tr><td>Doenças Preexistentes (CPT)</td><td>24 meses</td></tr>
</tbody></table></div>
<h3>CPT — Cobertura Parcial Temporária</h3>
<p>Período de até <strong>24 meses</strong> sem cobertura para procedimentos de <strong>alta complexidade</strong> relacionados a uma <strong>doença preexistente declarada</strong>. Não impede o cliente de entrar — apenas restringe procedimentos específicos. Tranquilize: consulta, exame, urgência, internação por outra causa, tudo continua coberto. <em>CPT só vale para doenças que o cliente declarou na DPS. Mentir é fraude e pode dar rescisão.</em></p>
<h3>Coparticipação</h3>
<p>Percentual do valor do procedimento que o beneficiário paga junto com a mensalidade quando usa o plano. Quanto maior a coparticipação, mais barata a mensalidade. <strong>Plano Amigo:</strong> 25% (teto R$ 241,30). <strong>Plano Flex:</strong> 50% (teto R$ 119,31). <strong>Plano Pleno:</strong> 50% (teto R$ 122,04) — <em>isenta dentro das Unidades APS</em>.</p>
<h3>Sinistralidade e Reajuste</h3>
<p>Sinistralidade alta = reajuste alto. Existe o <strong>reajuste anual</strong> (aniversário do contrato, por sinistralidade) e o <strong>reajuste por mudança de faixa etária</strong> (10 faixas ANS).</p>
<div class="callout internal"><h4>Portabilidade x Aproveitamento de carência</h4><p><strong>Portabilidade:</strong> mudança garantida por lei (ANS), com regras estritas; mantém integralmente carências cumpridas. <strong>Aproveitamento:</strong> negociação comercial entre operadora e cliente, reduz carências sem cumprir todos os critérios da portabilidade. <strong>No Coletivo por Adesão NÃO existe portabilidade</strong> — o que a Unimed oferece é redução/aproveitamento de carência. Não prometa o que o produto não entrega.</p></div>
<h3>Acomodação e tipos de rede</h3>
<p><strong>Enfermaria</strong> (quarto coletivo) ou <strong>Apartamento</strong> (privativo, com acompanhante). A Unimed permite o titular ter Enfermaria e os dependentes Apartamento no mesmo contrato — raro no mercado. <strong>Rede credenciada</strong> (terceiros), <strong>rede própria</strong> (da operadora) e <strong>rede verticalizada</strong> (porta de entrada via médico de família — o Pleno/APS).</p>`},
{id:4,num:4,tempo:"4 min",titulo:"A jornada do beneficiário",html:`
<p>Da cotação à carteirinha, em 8 etapas:</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Etapa</th><th>O que acontece</th><th>Tempo médio</th></tr></thead><tbody>
<tr><td>1. Cotação</td><td>Você levanta perfil, faz a tabela, apresenta opções</td><td>Mesmo dia</td></tr>
<tr><td>2. Aceite</td><td>Cliente assina a FIC e envia documentos</td><td>1-3 dias</td></tr>
<tr><td>3. Entrevista qualificada</td><td>Cliente preenche a Declaração de Saúde com colaborador do Grupo Vital</td><td>1-5 dias</td></tr>
<tr><td>4. Análise documental</td><td>Grupo Vital valida documentos</td><td>2-5 dias</td></tr>
<tr><td>5. Proposta em andamento / Cadastro</td><td>Documentos vão para a Unimed</td><td>5-10 dias</td></tr>
<tr><td>6. ADMEX (entrevista CPT)</td><td>Se houver, segunda entrevista com médico da Unimed para emitir CPT</td><td>3-7 dias</td></tr>
<tr><td>7. Vigência</td><td>Plano entra em vigor</td><td>Conforme escolha</td></tr>
<tr><td>8. Carteirinha</td><td>Cliente recebe carteirinha física e/ou digital</td><td>Após vigência</td></tr>
</tbody></table></div>
<div class="callout internal"><p>O contrato <strong>só está realmente vigente quando sai a carteirinha</strong>. Até lá, é apenas uma intenção de compra. Nunca diga "está tudo certo, pode usar" antes da carteirinha sair.</p></div>`}
],quiz:[
{pergunta:"O que é sinistralidade e por que importa?",opcoes:["O número de clientes","A razão entre o que a operadora paga em procedimentos e o que recebe em mensalidades — define o reajuste do ano seguinte","O valor da comissão","O teto de coparticipação"],correta:1,explica:"Sinistralidade alta = reajuste alto. Por isso a Unimed seleciona quem entra, mantendo o reajuste do Adesão em ~8% a 10,5%."},
{pergunta:"No Coletivo por Adesão, o vínculo do cliente é com:",opcoes:["Uma empresa (CNPJ)","Uma entidade de classe (sindicato, conselho profissional ou associação)","Nenhum vínculo","A própria operadora"],correta:1,explica:"No Adesão o cliente é PF vinculada a uma entidade de classe. A partir de 1 vida, até 40% mais barato que o PF, com a mesma cobertura."},
{pergunta:"No Coletivo por Adesão da Unimed Curitiba existe portabilidade?",opcoes:["Sim, sempre","NÃO existe portabilidade — o que há é redução/aproveitamento de carência (negociação comercial)","Só para médicos","Apenas no Pleno"],correta:1,explica:"No Adesão não há portabilidade da ANS. A Unimed oferece aproveitamento de carência. Não prometa portabilidade que o produto não entrega."},
{pergunta:"Quando o contrato está realmente vigente?",opcoes:["Na assinatura da FIC","Quando sai a carteirinha","No pagamento da taxa","Na entrevista de saúde"],correta:1,explica:"Até a carteirinha sair, é apenas intenção de compra. Nunca diga ao cliente 'pode usar' antes da emissão da carteirinha."}
]},

/* ===================== PARTE 2 ===================== */
{id:2,titulo:"A Modalidade Coletivo por Adesão",desc:"O que é, por que você deve vender, por que o cliente compra e o comparativo definitivo Adesão x PME x Pessoa Física.",modulos:[
{id:5,num:5,tempo:"5 min",titulo:"O que é e por que vender Adesão",html:`
<p>É uma modalidade de contratação que atende um grupo de pessoas vinculadas a uma associação, conselho profissional ou sindicato. É um plano <strong>coletivo</strong> (logo, mais barato), só que o vínculo, em vez de empresa (CNPJ), é uma <strong>entidade de classe</strong>: o conselho profissional (OAB, CRM, CRO, CRC, CRA, CREA, CRP, CREF…), o sindicato (Simepar, Sindifar, ASPP…) ou uma associação parceira.</p>
<p>A operadora firma contrato com a entidade. A entidade abre a possibilidade de adesão aos filiados. O <strong>Grupo Vital</strong> é a plataforma que opera isso na prática. <strong>Você, corretor PlaneCorp:</strong> identifica o cliente elegível, monta a proposta, faz a venda e acompanha o pós-venda.</p>
<div class="callout tip"><h4>Exemplo</h4><p>João Silva, 35, advogado em Curitiba com registro na OAB-PR, é elegível à entidade Genesis (Profissionais Liberais), que comercializa Flex e Pleno. Você oferece um plano com 40% de desconto em relação ao PF, com a mesma rede credenciada.</p></div>
<h3>Por que VOCÊ deve vender Adesão — 4 pilares</h3>
<ol>
<li><strong>Qualidade da marca Unimed:</strong> o cliente já chega procurando Unimed. Você não precisa convencer da credibilidade. "Nossa, eu queria a Unimed mesmo, achei que era mais cara" é o que você vai ouvir.</li>
<li><strong>Menor pós-venda:</strong> médico para atender, comunicação fácil com a operadora, sinistralidade controlada = menos atrito. Você passa mais tempo vendendo, menos tempo apagando incêndio.</li>
<li><strong>Facilidade na adesão:</strong> o cliente paga apenas a primeira mensalidade, que vence entre 30 e 60 dias após a adesão. Sem o impacto do "primeiro mês caro". Em transição, ele não paga dois planos no mesmo mês.</li>
<li><strong>Novas indicações:</strong> "médico anda com médico, dentista anda com dentista". Cada venda é potencialmente 2-3 leads dentro do mesmo conselho. A carteira de Adesão se expande sozinha quando bem cuidada.</li>
</ol>
<div class="callout arg"><p>Ao entregar a carteirinha, peça indicações de cara. O momento de mais alta conversão de indicação é nos primeiros 30 dias após o cliente receber a carteirinha.</p></div>`},
{id:6,num:6,tempo:"5 min",titulo:"Por que o cliente compra e o comparativo definitivo",html:`
<h3>Por que o CLIENTE compra Adesão — 4 pilares</h3>
<ol>
<li><strong>Custo-benefício:</strong> chega a ser <strong>40% mais barato</strong> que o PF com a <em>mesma cobertura e rede</em>. Não é plano inferior — é o mesmo produto por um caminho diferente. (Ex.: dentista, apartamento — PF R$ 850/mês vs. Adesão Flex R$ 510/mês = R$ 4.080/ano de economia.)</li>
<li><strong>Rede de atendimento:</strong> a maior do Paraná — +5.000 médicos cooperados, ~53 hospitais, ~250 clínicas, +80 laboratórios. Mais de 47% da população de plano da região é Unimed.</li>
<li><strong>Suporte Unimed/Vital:</strong> o Grupo Vital faz suporte contínuo; a Unimed tem central, app e portal funcionais.</li>
<li><strong>Restituição no IRPF:</strong> no PME o titular não deduz a mensalidade (a empresa paga). No PF e no <strong>Adesão</strong>, o titular <strong>deduz integralmente</strong>. <em>"Você paga menos por mês E ainda recebe parte de volta na restituição — isso o PME não consegue."</em></li>
</ol>
<h3>Adesão x PME x Pessoa Física</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Critério</th><th>Pessoa Física</th><th>PME (Empresarial)</th><th>Coletivo por Adesão</th></tr></thead><tbody>
<tr><td>Quem contrata</td><td>Pessoa direto c/ operadora</td><td>Empresa (CNPJ)</td><td>Entidade de classe</td></tr>
<tr><td>Vidas mínimas</td><td>1</td><td>3 (maioria)</td><td>1</td></tr>
<tr><td>Vínculo necessário</td><td>Nenhum</td><td>CNPJ ativo + funcionário</td><td>Registro em conselho/sindicato/servidor/professor</td></tr>
<tr><td>Preço relativo</td><td>Mais alto (100%)</td><td>Médio (~70% do PF)</td><td>Mais baixo (~60% do PF)</td></tr>
<tr><td>Reajuste</td><td>Limitado pela ANS</td><td>Por sinistralidade</td><td>Por sinistralidade</td></tr>
<tr><td>Restituição IRPF</td><td>Sim</td><td>Não</td><td>Sim</td></tr>
<tr><td>Unimed Curitiba hoje</td><td>Praticamente fechado p/ novos</td><td>Aberto</td><td>Aberto</td></tr>
</tbody></table></div>
<div class="callout internal"><p>Cliente oriundo do <strong>Pessoa Física da Unimed Curitiba NÃO pode migrar para o Adesão</strong> da Unimed Curitiba (o PF tem custo maior; migrar internamente faz a operadora perder rentabilidade). Já o cliente do <strong>PME Unimed pode</strong> migrar para o Adesão Unimed sem problema.</p></div>`}
],quiz:[
{pergunta:"Quanto mais barato o Adesão é em relação ao Pessoa Física?",opcoes:["10%","Até 40% mais barato, com a mesma cobertura e rede","O dobro do preço","Igual"],correta:1,explica:"O Adesão chega a ser 40% mais barato que o PF, com a mesma rede e cobertura — é o mesmo produto por um canal diferente."},
{pergunta:"Qual diferencial de IRPF o Adesão tem sobre o PME?",opcoes:["Nenhum","No Adesão o titular deduz integralmente a mensalidade no IRPF; no PME não (a empresa paga)","O PME deduz mais","Ambos não deduzem"],correta:1,explica:"No PME quem paga é a empresa, então o titular não deduz. No PF e no Adesão o titular deduz integralmente — argumento forte de venda."},
{pergunta:"Cliente do Pessoa Física da Unimed Curitiba pode migrar para o Adesão Unimed?",opcoes:["Sim","NÃO pode migrar do PF Unimed para o Adesão Unimed (o do PME Unimed pode)","Só médicos","Sempre"],correta:1,explica:"O PF Unimed não migra para o Adesão Unimed (perda de rentabilidade). O cliente do PME Unimed, sim, pode migrar para o Adesão."},
{pergunta:"Por que a facilidade na adesão ajuda o cliente em transição?",opcoes:["Tem desconto na taxa","A primeira mensalidade vence 30-60 dias após a adesão — ele não paga dois planos no mesmo mês","Não paga nada","O plano é grátis"],correta:1,explica:"O cliente paga só a primeira mensalidade, que vence 30-60 dias depois — evita o impacto do 'primeiro mês caro' e o pagamento de dois planos na transição."}
]},

/* ===================== PARTE 3 ===================== */
{id:3,titulo:"Unimed Curitiba e Grupo Vital",desc:"A Unimed Curitiba, o papel do Grupo Vital e a região de atuação do produto.",modulos:[
{id:7,num:7,tempo:"5 min",titulo:"A Unimed, o Grupo Vital e a região",html:`
<h3>A Unimed Curitiba</h3>
<ul>
<li><strong>54 anos</strong> de mercado</li>
<li>Faz parte do <strong>Sistema Unimed</strong>, a maior rede de atendimento de saúde do Brasil (117.000 médicos cooperados, 3.596 hospitais nacionalmente)</li>
<li>Está entre as <strong>3 melhores Unimeds do país</strong></li>
<li>A maior rede credenciada do Paraná — +5.000 médicos cooperados, ~53 hospitais, ~250 clínicas, +80 unidades laboratoriais (24 próprias da Unimed Laboratório)</li>
<li>Mais de <strong>47,74%</strong> da população com plano de saúde na região é cliente Unimed</li>
</ul>
<h3>O Grupo Vital</h3>
<p>É uma <strong>plataforma de vendas</strong> autorizada pela Unimed Curitiba para comercializar o Coletivo por Adesão. Existem <strong>5 plataformas autorizadas</strong> no total — o Grupo Vital é uma delas e é a parceira da PlaneCorp.</p>
<ul>
<li><strong>Operação:</strong> recebe a FIC, faz a entrevista de saúde, monta o processo, envia à Unimed, acompanha cada etapa.</li>
<li><strong>Suporte ao corretor:</strong> consultora dedicada (Glória), grupos de WhatsApp, materiais de marketing, treinamentos mensais (incluindo visita às unidades APS de Araucária).</li>
<li><strong>Suporte ao cliente:</strong> portal grupovital.com.br para 2ª via de boleto, cópia da proposta, demonstrativo de IRRF, cancelamento.</li>
<li><strong>Pós-venda:</strong> atendimento contínuo, acompanhamento de inclusões, intermediação com a Unimed.</li>
</ul>
<div class="callout tip"><p>Ao falar "Grupo Vital" para o cliente, diga "<strong>a administradora do plano</strong>" ou "a plataforma que cuida do contrato". Não confunda o cliente apresentando como operadora paralela.</p></div>
<h3>Região de atuação</h3>
<p>Pode ser comercializado em: Curitiba · São José dos Pinhais · Campo Largo · Colombo · Balsa Nova · Araucária · Quatro Barras · Almirante Tamandaré · Piraquara · Contenda · Mandirituba · Bocaiuva do Sul · Campina Grande do Sul · Rio Branco do Sul · Pinhais · Fazenda Rio Grande · Lapa · São Mateus do Sul · Campo Magro · Itaperuçu · Adrianópolis · Cerro Azul · Doutor Ulysses · Tunas do Paraná · Porto Amazonas.</p>
<div class="callout warn"><p>A área de atendimento do <strong>SOS Unimed (ambulância)</strong> é mais restrita: apenas <strong>Curitiba, Araucária, Pinhais e São José dos Pinhais</strong>. Para clientes fora dessa área, o SOS não é vantajoso.</p></div>`}
],quiz:[
{pergunta:"O que é o Grupo Vital?",opcoes:["Uma operadora concorrente da Unimed","Uma das 5 plataformas autorizadas a comercializar o Adesão da Unimed Curitiba (parceira da PlaneCorp)","Um hospital","Um conselho de classe"],correta:1,explica:"O Grupo Vital é a plataforma/administradora que opera o Adesão Unimed. Apresente ao cliente como 'a administradora do plano', não como operadora paralela."},
{pergunta:"Em quais cidades o SOS Unimed (ambulância) tem cobertura?",opcoes:["Em toda a região metropolitana","Apenas Curitiba, Araucária, Pinhais e São José dos Pinhais","Em todo o Paraná","Nacional"],correta:1,explica:"O SOS é restrito a 4 cidades. Para clientes fora dessas, não venda o adicional SOS — não é vantajoso."},
{pergunta:"Quantos médicos cooperados a Unimed Curitiba tem no PR?",opcoes:["500","Mais de 5.000 (a maior rede credenciada do Paraná)","100.000","50"],correta:1,explica:"+5.000 médicos cooperados, ~53 hospitais, ~250 clínicas, +80 laboratórios. Mais de 47,74% da população com plano da região é Unimed."}
]},

/* ===================== PARTE 4 ===================== */
{id:4,titulo:"Os Produtos: Pleno, Flex, Amigo e Dental Uni",desc:"Os três planos de saúde do Adesão e o odontológico — conceito, características, diferenciais e comparativo.",modulos:[
{id:8,num:8,tempo:"8 min",titulo:"Plano Pleno (verticalizado / APS)",html:`
<p>O Pleno é um plano com <strong>rede verticalizada</strong>. Funciona com porta de entrada via <strong>médico de família</strong> em unidades exclusivas (as APS — Atenção Primária à Saúde) e libera especialidades conforme a necessidade.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th>Detalhe</th></tr></thead><tbody>
<tr><td>Acomodação</td><td>Somente Enfermaria</td></tr>
<tr><td>Coparticipação</td><td>50% em todos os procedimentos ambulatoriais — <strong>isenta dentro das APS</strong></td></tr>
<tr><td>Teto de coparticipação</td><td>R$ 122,04 por procedimento</td></tr>
<tr><td>Rede credenciada</td><td>A maior do Paraná — 5.000 médicos cooperados</td></tr>
<tr><td>Hospitais credenciados</td><td>23+ hospitais (rede ampla, não restrita)</td></tr>
<tr><td>APS</td><td>5 unidades exclusivas</td></tr>
<tr><td>SOS Unimed</td><td>Incluso (sem custo adicional)</td></tr>
<tr><td>Aero Unimed</td><td>Opcional — R$ 2,50/mês</td></tr>
<tr><td>Urgência/emergência</td><td>Nacional, pela rede Unimed</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>A grande sacada do Pleno</h4><p>A maioria dos planos de "médico de família" (como o Hapvida Clinipam) usa o médico de família como porta única — a especialidade só é liberada se ele autorizar. O Pleno é diferente: mesmo com a porta de entrada, <strong>três especialidades podem ser acessadas direto</strong> com qualquer médico da rede de 5.000 profissionais: <strong>Pediatria, Oftalmologia e Ginecologia</strong>.</p>
<p>Isso mata a objeção do "não quero ficar preso à porta de entrada": <em>"O Pleno tem porta de entrada para acolhimento, mas pediatra, oftalmo e ginecologista o cliente marca direto. É o melhor dos dois mundos."</em></p></div>
<h3>As 5 unidades APS</h3>
<p>Atendimento seg-sex 8h-20h, sáb 8h-12h (exceto feriados). Acesso pela central <strong>3021-6250</strong>.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Unidade</th><th>Endereço</th></tr></thead><tbody>
<tr><td>APS Iguaçu</td><td>Av. Iguaçu, 2180 - Rebouças</td></tr>
<tr><td>APS Araucária</td><td>Rua Miguel Bertolino Pizato, 1901 - Jardim Iguaçu, Araucária</td></tr>
<tr><td>APS Pinheirinho</td><td>Av. Winston Churchill, 1824 - Capão Raso</td></tr>
<tr><td>APS Pinhais</td><td>Av. Jacob Macanhan, 611 - Centro, Pinhais</td></tr>
<tr><td>APS São José dos Pinhais</td><td>Rua Barão do Cerro Azul, 1571 - São Pedro, SJP</td></tr>
</tbody></table></div>
<p>Equipe multidisciplinar: médico de família, pediatra, enfermeiro com especialidade em medicina familiar.</p>
<div class="callout key"><h4>Procedimentos isentos de coparticipação dentro das APS</h4><p>Consultas, fisioterapia, calosidade, sutura, exérese, cantoplastia (unha encravada), curativos, infiltração de corticoide, desbridamento, drenagem de hematoma, remoção de cerúmen, retirada de corpo estranho, tamponamento de epistaxe, imobilização temporária, ECG (urgência). <strong>Exceções (cobram copart. mesmo na APS):</strong> biópsia/punção de tumores de pele e papanicolau (a análise externa tem coparticipação).</p></div>
<div class="callout tip"><h4>Pleno é certo para quem…</h4><p>Sai do Hapvida Clinipam, Nossa Saúde, Paraná Clínicas, Clínico Infano e quer upgrade de qualidade sem upgrade gigante de preço · mora/trabalha perto de uma APS · tem orçamento mais apertado mas quer a marca Unimed · valoriza medicina preventiva · tem filhos pequenos (pediatria direta + Pequeno Príncipe credenciado).</p></div>
<p><strong>Hospitais credenciados Pleno:</strong> Maternidade N.S. de Fátima (própria), Maternidade Curitiba, Hospital da Visão, IOC, Clínica Heidelberg, São Vicente, Santa Madalena Sofia, Hospital do Rocio, Vita, Pequeno Príncipe, Santa Casa, Evangélico Mackenzie, Instituto da Criança, Angelina Caron, IPO, Menino Deus, Sugisawa, Hospital de Olhos do Paraná, Novaclínica, Cruz Vermelha, das Nações, Hospital XV, São Lucas. <em>A unidade de Araucária é um complexo integrado (APS + Pronto Socorro que atende todos os planos Unimed + Laboratório Unimed).</em></p>`},
{id:9,num:9,tempo:"6 min",titulo:"Plano Flex (livre acesso / carro-chefe)",html:`
<p>O Flex é o <strong>carro-chefe</strong> do Adesão Unimed. Plano de <strong>livre acesso</strong> — o cliente vai direto onde quiser na rede credenciada (a maior do Paraná), sem porta de entrada, sem médico de família. Substitui sem perda o Bradesco Saúde, SulAmérica, Amil e outros planos de livre escolha.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th>Detalhe</th></tr></thead><tbody>
<tr><td>Acomodação</td><td>Enfermaria ou Apartamento (mesclar é permitido)</td></tr>
<tr><td>Coparticipação</td><td>50% em procedimentos ambulatoriais (não cobra em regime hospitalar)</td></tr>
<tr><td>Teto de coparticipação</td><td>R$ 119,31 por procedimento</td></tr>
<tr><td>Valor mínimo de consulta com copay</td><td>A partir de R$ 67,50</td></tr>
<tr><td>Rede credenciada</td><td>A maior do PR — +5.000 médicos, ~53 hospitais, ~250 clínicas, +80 laboratórios</td></tr>
<tr><td>Urgência/emergência</td><td>Nacional, pela rede Unimed</td></tr>
<tr><td>SOS Unimed</td><td>Opcional — R$ 8,19/mês*</td></tr>
<tr><td>Aero Unimed</td><td>Opcional — R$ 2,50/mês*</td></tr>
</tbody></table></div>
<p style="font-size:13px;color:var(--muted)">*Valores conforme tabela de Adesão vigente; confirmar no momento da venda.</p>
<div class="callout arg"><h4>Por que o Flex é o mais vendido</h4><p>Cliente de Bradesco/SulAmérica/Amil/Cassi/ICS acha a rede compatível ou melhor. Cliente do PF Unimed antigo pode indicar o Flex para familiares. Cliente saindo do PME Unimed migra naturalmente para o Flex Adesão. <em>"O Flex tem a mesma rede do PF da Unimed — os mesmos 5.000 médicos, os mesmos 53 hospitais, os mesmos 80 laboratórios. A diferença é que pelo Adesão você paga até 40% menos."</em></p></div>
<div class="callout key"><h4>Reajuste do Flex — diferencial de venda</h4><p>A tabela do Flex tinha aniversário em outubro. <strong>Em 2026 passa a aniversariar em janeiro de 2027</strong> — ou seja, <strong>2026 não terá reajuste</strong> dessa tabela. <em>"Esse plano tem reajuste só em janeiro de 2027. Você fica praticamente um ano e meio sem reajuste."</em></p></div>`},
{id:10,num:10,tempo:"5 min",titulo:"Plano Amigo (nacional) e Dental Uni",html:`
<h3>Plano Amigo</h3>
<p>O Amigo é o <strong>plano nacional</strong>. A maior diferença: permite <strong>atendimento eletivo (consultas, exames, internações programadas) em qualquer unidade Unimed do Brasil</strong> — não só em Curitiba.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th>Detalhe</th></tr></thead><tbody>
<tr><td>Abrangência</td><td>Nacional — 117.000 médicos cooperados, 3.596 hospitais</td></tr>
<tr><td>Acomodação</td><td>Enfermaria ou Apartamento</td></tr>
<tr><td>Coparticipação</td><td>25% em consultas e procedimentos</td></tr>
<tr><td>Teto de coparticipação</td><td>R$ 241,30 por procedimento</td></tr>
<tr><td>A partir de</td><td>1 vida</td></tr>
<tr><td>Entidade comercializadora</td><td>Simepar (Sindicato dos Médicos do Paraná)</td></tr>
<tr><td>Elegibilidade</td><td>Médicos e Acadêmicos de Medicina</td></tr>
<tr><td>SOS Unimed</td><td>Opcional — R$ 10,36/mês</td></tr>
<tr><td>Aero Unimed</td><td>Opcional — R$ 2,50/mês</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>Atenção</h4><p>O Amigo é restrito a <strong>Médicos e Acadêmicos de Medicina</strong> (registro no CRM ou matrícula em curso de medicina). Para outros profissionais liberais, o produto não pode ser comercializado.</p></div>
<h3>Dental Uni</h3>
<p>Plano odontológico <strong>exclusivo do Adesão</strong>. Cobertura para urgência/emergência e procedimentos eletivos (Plano Essencial). <strong>Custo: R$ 19,90 por vida/mês.</strong> Rede: toda a rede credenciada Dental Uni.</p>
<div class="callout arg"><p>Em toda venda do plano de saúde, ofereça o Dental como adicional. Por R$ 19,90 a mais por vida, o cliente leva cobertura odontológica completa — é o ticket complementar mais fácil de vender.</p></div>
<h3>Comparativo dos produtos</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Critério</th><th>Pleno</th><th>Flex</th><th>Amigo</th></tr></thead><tbody>
<tr><td>Acomodação</td><td>Só Enfermaria</td><td>Enfermaria ou Apartamento</td><td>Enfermaria ou Apartamento</td></tr>
<tr><td>Coparticipação</td><td>50% (isenta na APS)</td><td>50%</td><td>25%</td></tr>
<tr><td>Teto de copay</td><td>R$ 122,04</td><td>R$ 119,31</td><td>R$ 241,30</td></tr>
<tr><td>Abrangência</td><td>Curitiba e RM</td><td>Curitiba e RM</td><td>Nacional</td></tr>
<tr><td>Atendimento eletivo nacional</td><td class="no">Não</td><td class="no">Não</td><td class="yes">Sim</td></tr>
<tr><td>Modelo</td><td>Verticalizado (porta APS)</td><td>Livre acesso</td><td>Livre acesso nacional</td></tr>
<tr><td>Pediatria/Oftalmo/Gineco direto</td><td class="yes">Sim</td><td class="yes">Sim (todo livre acesso)</td><td class="yes">Sim</td></tr>
<tr><td>Rede de hospitais</td><td>23+ no PR</td><td>53 no PR</td><td>53 no PR + nacional</td></tr>
<tr><td>SOS Unimed</td><td>Incluso</td><td>R$ 8,19 opcional</td><td>R$ 10,36 opcional</td></tr>
<tr><td>Quem pode contratar</td><td>Conselhos parceiros, professores, servidores SJP</td><td>Conselhos, servidores, liberais</td><td>Médicos e Acadêmicos de Medicina</td></tr>
<tr><td>Posicionamento</td><td>Custo-benefício + preventivo</td><td>Carro-chefe, livre acesso</td><td>Nacional, premium</td></tr>
</tbody></table></div>`}
],quiz:[
{pergunta:"Qual a 'grande sacada' do Plano Pleno em relação a outros planos de médico de família?",opcoes:["Não tem porta de entrada","Pediatria, Oftalmologia e Ginecologia podem ser acessadas direto com qualquer médico da rede, mesmo com a porta de entrada das APS","É mais caro","Cobre nacional"],correta:1,explica:"Diferente do Hapvida Clinipam (porta única), o Pleno libera 3 especialidades direto: pediatria, oftalmo e ginecologia — mata a objeção de 'ficar preso à porta de entrada'."},
{pergunta:"Qual é o carro-chefe do Adesão e por quê?",opcoes:["O Pleno, por ser barato","O Flex, por ser livre acesso na maior rede do PR, com a mesma rede do PF Unimed por até 40% menos","O Amigo, por ser nacional","O Dental Uni"],correta:1,explica:"O Flex é livre acesso (sem porta de entrada), com a maior rede do PR — substitui Bradesco/SulAmérica/Amil. Mesma rede do PF Unimed por até 40% menos."},
{pergunta:"Quem pode contratar o Plano Amigo?",opcoes:["Qualquer profissional liberal","Apenas Médicos e Acadêmicos de Medicina (via Simepar)","Servidores públicos","Professores"],correta:1,explica:"O Amigo (nacional, 25% copart.) é restrito a médicos e acadêmicos de medicina, via Simepar. Para outros profissionais, não pode ser comercializado."},
{pergunta:"Dentro das Unidades APS do Pleno, a coparticipação é:",opcoes:["50%","Isenta para a maioria dos procedimentos (exceto biópsia/punção de pele e papanicolau, cuja análise externa cobra)","25%","Sempre cobrada"],correta:1,explica:"Procedimentos dentro das APS são isentos de coparticipação (consultas, fisio, sutura, ECG urgência…). As exceções são análises externas (biópsia de pele, papanicolau)."},
{pergunta:"Qual o custo do Dental Uni por vida/mês?",opcoes:["R$ 50,00","R$ 19,90","R$ 100,00","Grátis"],correta:1,explica:"Dental Uni custa R$ 19,90 por vida/mês, é exclusivo do Adesão e deve ser oferecido como adicional em toda venda — o ticket complementar mais fácil."}
]},

/* ===================== PARTE 5 ===================== */
{id:5,titulo:"Rede, APS e Serviços",desc:"A rede credenciada por produto, as unidades APS, SOS e Aero Unimed, teleconsulta e canais digitais.",modulos:[
{id:11,num:11,tempo:"6 min",titulo:"Rede credenciada por produto",html:`
<p>A rede é o principal argumento técnico depois do preço.</p>
<h3>Números totais (Flex e Pleno)</h3>
<div class="stats">
<div class="stat"><div class="n">+5.000</div><div class="l">médicos cooperados</div></div>
<div class="stat"><div class="n">53</div><div class="l">hospitais</div></div>
<div class="stat"><div class="n">250</div><div class="l">clínicas</div></div>
<div class="stat"><div class="n">+80</div><div class="l">laboratórios (24 próprios)</div></div>
</div>
<h3>Hospitais adultos — destaques na rede Flex</h3>
<p>Hospital XV · Vita · Marcelino Champagnat · INC (Instituto de Neurologia e Cardiologia) · Nossa Senhora das Graças · Sugisawa · Santa Casa · Evangélico Mackenzie · São Vicente · Cruz Vermelha · das Nações · Angelina Caron · São Lucas · Hospital do Rocio (Campo Largo).</p>
<h3>Hospitais infantis</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Hospital</th><th>Posicionamento</th></tr></thead><tbody>
<tr><td>Pequeno Príncipe</td><td>Maior hospital pediátrico exclusivo da América Latina</td></tr>
<tr><td>Nossa Senhora das Graças</td><td>Pediatria 24h</td></tr>
<tr><td>Menino Deus</td><td>Pediatria 24h</td></tr>
<tr><td>Instituto da Criança</td><td>Pediatria especializada</td></tr>
<tr><td>Hospital Erastinho</td><td>Oncologia pediátrica</td></tr>
</tbody></table></div>
<p><strong>Maternidades:</strong> Maternidade N.S. de Fátima (própria da Unimed), Maternidade Curitiba. <strong>Laboratórios próprios:</strong> Unimed Laboratório (24 unidades) — não cobra coparticipação quando feito em laboratório próprio (varia por produto, confirmar no Pleno), estrutura padronizada, resultado integrado ao app. <strong>Clínicas:</strong> CETAC, Artro Ortopedia, Clínica Capão Raso, Clínica Santa Cruz, DAPI, Frischmann Aisengart, A+ Medicina Diagnóstica, LANAC, Unimed Laboratório.</p>
<div class="callout warn"><p>A rede do <strong>Pleno é menor</strong> que a do Flex (rede focada em verticalização). Antes de oferecer Pleno, confirme se o hospital ou médico de preferência do cliente está na rede do Pleno especificamente, não só na rede Unimed geral. Consulte sempre a rede no app Unimed Curitiba ou no site, por escrito, antes de prometer.</p></div>`},
{id:12,num:12,tempo:"5 min",titulo:"SOS, Aero Unimed e canais digitais",html:`
<h3>SOS Unimed</h3>
<p>Serviço de <strong>ambulância e atendimento médico domiciliar</strong>, 24h, acesso 0800 942 0000, médicos especializados de plantão. Evita o deslocamento ao PS em ocorrências resolvíveis em casa. <strong>Área:</strong> apenas Curitiba, Araucária, Pinhais e SJP. <strong>Inclusão:</strong> gratuito no Pleno · opcional (com custo) no Flex e Amigo.</p>
<div class="callout internal"><p>Cliente fora dessas 4 cidades <strong>não tem cobertura SOS</strong>, mesmo que pague. Não venda o adicional para clientes em Colombo, Pinhais não-central, Araucária zona rural, etc.</p></div>
<h3>Aero Unimed</h3>
<p>Transporte aéreo médico (UTI aérea), 24h, qualquer lugar do Brasil. Aeronaves equipadas como UTI adulto, geriátrico e neonatal. <strong>Custo: R$ 2,50/mês por vida</strong> (em todos os produtos).</p>
<div class="callout arg"><p>O Aero é barato e gera tranquilidade. Sempre ofereça: <em>"Por dois reais e cinquenta no mês, você está coberto para um translado aéreo de UTI em qualquer lugar do Brasil. Vale só pelo seguro mental."</em></p></div>
<h3>Teleconsulta e App Unimed Curitiba</h3>
<p><strong>Teleconsulta:</strong> consulta online com médico via app, agendamento direto. No Pleno, confirmar se cobra copart. (varia); no Flex e Amigo, cobra copart. conforme tabela.</p>
<p><strong>App Unimed Curitiba</strong> (na palma da mão): liberação de guias de exame, rede credenciada (guia médico), extrato de coparticipações, cartão virtual (titular e dependentes), central via chat, Pronto Atendimento Virtual, agendamento de teleconsultas, notícias.</p>
<div class="callout tip"><p>No dia da entrega da carteirinha, ajude o cliente a baixar e ativar o app. Cliente com app instalado resolve sozinho 80% das demandas operacionais — menos pós-venda.</p></div>`}
],quiz:[
{pergunta:"Qual hospital infantil é o destaque da rede Unimed?",opcoes:["Hospital Vita","Pequeno Príncipe — maior hospital pediátrico exclusivo da América Latina","Santa Casa","Hospital XV"],correta:1,explica:"Para crianças: Pequeno Príncipe (referência da América Latina), N.S. das Graças e Menino Deus (pediatria 24h), Instituto da Criança e Erastinho (oncologia pediátrica)."},
{pergunta:"O SOS Unimed é gratuito em qual produto?",opcoes:["Em todos","No Pleno (incluso); opcional com custo no Flex e Amigo","Só no Amigo","Em nenhum"],correta:1,explica:"O SOS é incluso no Pleno. No Flex (R$8,19) e Amigo (R$10,36) é opcional. E só funciona em Curitiba, Araucária, Pinhais e SJP."},
{pergunta:"Por que sempre oferecer o Aero Unimed?",opcoes:["É obrigatório","Por R$ 2,50/mês cobre translado aéreo de UTI em qualquer lugar do Brasil — barato e gera tranquilidade","Substitui o SOS","É grátis"],correta:1,explica:"O Aero custa R$ 2,50/mês por vida (todos os produtos), cobre UTI aérea nacional. É barato e gera tranquilidade — sempre ofereça."},
{pergunta:"Por que ajudar o cliente a instalar o app na entrega da carteirinha?",opcoes:["É obrigatório","Cliente com app resolve sozinho ~80% das demandas operacionais — gera menos pós-venda","Aumenta a comissão","Para vender o Dental"],correta:1,explica:"O app traz guias, rede, extrato de copart., cartão virtual, chat e teleconsulta. Cliente que sabe usar reclama menos e te liga menos."}
]},

/* ===================== PARTE 6 ===================== */
{id:6,titulo:"Entidades, Elegibilidade e Dependentes",desc:"As 8 entidades parceiras, o custo associativo, a matriz profissão x entidade x produto e as regras de dependentes.",modulos:[
{id:13,num:13,tempo:"6 min",titulo:"Entidades parceiras e custo associativo",html:`
<p>O Adesão Unimed Curitiba via Grupo Vital tem <strong>8 entidades parceiras ativas</strong>, mais o Sinsep para o Pleno em SJP.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Entidade</th><th>Foco</th></tr></thead><tbody>
<tr><td>Simepar (Sindicato dos Médicos do PR)</td><td>Médicos e Acadêmicos de Medicina</td></tr>
<tr><td>Genesis (Profissionais Liberais)</td><td>Profissionais com registro em conselho de classe</td></tr>
<tr><td>Genesis (Professores)</td><td>Professores com diploma em Licenciatura ou holerite de escola</td></tr>
<tr><td>Sindifar (Sindicato dos Farmacêuticos)</td><td>Farmacêuticos e Técnicos em Farmácia (CRF)</td></tr>
<tr><td>Cref (Conselho Regional de Educação Física)</td><td>Educadores físicos com registro no CREF</td></tr>
<tr><td>ASPP (Sindicato dos Servidores Públicos do PR)</td><td>Servidor público (municipal, estadual e federal) — exceto polícia e bombeiro</td></tr>
<tr><td>Sindimóveis (Sindicato dos Corretores de Imóveis)</td><td>Corretores com registro no CRECI</td></tr>
<tr><td>Sinfopar</td><td>(ver tabela vigente — confirmar profissões elegíveis)</td></tr>
<tr><td>Sinsep (Servidores Municipais de SJP)</td><td>Funcionário Público de São José dos Pinhais</td></tr>
</tbody></table></div>
<h3>Custo associativo</h3>
<p>Algumas entidades cobram mensalidade associativa ou contribuição anual para o vínculo. Esse valor é <strong>pago à entidade</strong>, não à Unimed nem ao Grupo Vital — e precisa entrar no cálculo total.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Entidade</th><th>Custo associativo</th></tr></thead><tbody>
<tr><td>Simepar (Médicos)</td><td>R$ 84,16 mensal · Estudantes R$ 25,25 mensal</td></tr>
<tr><td>Sindifar</td><td>R$ 189,00 anual (até 03/26 — reconfirmar)</td></tr>
<tr><td>ASPP</td><td>R$ 68,00 mensal (cobrado pela própria associação)</td></tr>
<tr><td>Sindimóveis</td><td>R$ 21,00 mensal (cobrado em boleto)</td></tr>
<tr><td>Genesis (Profissionais e Professores)</td><td>Não tem custo associativo</td></tr>
<tr><td>Cref</td><td>Não tem custo associativo</td></tr>
</tbody></table></div>
<div class="callout internal"><p>Sempre informe o <strong>valor total mensal</strong> ao cliente: mensalidade do plano + custo associativo (quando houver) + adicionais opcionais (SOS, Aero) + Dental (se contratado). Não esconda nada da composição.</p></div>`},
{id:14,num:14,tempo:"6 min",titulo:"Matriz profissão x entidade x produto",html:`
<p>Esta é a tabela mais importante do treinamento. Decore ou consulte sempre.</p>
<h3>Genesis — Flex e Pleno (registro em conselho de classe)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Profissão</th><th>Conselho</th></tr></thead><tbody>
<tr><td>Administrador e Téc. Administrativo</td><td>CRA</td></tr>
<tr><td>Advogado</td><td>OAB</td></tr>
<tr><td>Arquiteto</td><td>CAU</td></tr>
<tr><td>Biólogo</td><td>CRBio</td></tr>
<tr><td>Biomédico</td><td>CRMB</td></tr>
<tr><td>Contador e Téc. em Contabilidade</td><td>CRC</td></tr>
<tr><td>Dentista e Téc. em Saúde Bucal</td><td>CRO</td></tr>
<tr><td>Enfermeiro e Téc. de Enfermagem</td><td>COREN</td></tr>
<tr><td>Engenheiro e Téc. em Edificações</td><td>CREA</td></tr>
<tr><td>Fisioterapeuta</td><td>CREFITO</td></tr>
<tr><td>Nutricionista</td><td>CRN</td></tr>
<tr><td>Psicólogo</td><td>CRP</td></tr>
<tr><td>Médico Veterinário</td><td>CRMV</td></tr>
</tbody></table></div>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Entidade / Produto</th><th>Categoria — Comprovação</th></tr></thead><tbody>
<tr><td>Sindimóveis — Flex e Pleno</td><td>Corretor de Imóveis — CRECI</td></tr>
<tr><td>Cref — Flex</td><td>Educador Físico — CREF</td></tr>
<tr><td>Sindifar — Flex</td><td>Farmacêutico e Téc. em Farmácia — CRF</td></tr>
<tr><td>Genesis Professores — Pleno</td><td>Professor (holerite de escola); com graduação (holerite ou diploma de Licenciatura)</td></tr>
<tr><td>ASPP — Flex</td><td>Funcionário Público (holerite); PSS (contrato/holerite); aposentado; cargo comissionado (documento da função)</td></tr>
<tr><td>Simepar — Amigo e Flex</td><td>Médico (CRM); Estudante de Medicina (comprovante de matrícula)</td></tr>
<tr><td>Sinsep — Pleno</td><td>Funcionário Público de SJP (holerite municipal)</td></tr>
</tbody></table></div>
<div class="callout warn"><h4>Exceção ASPP</h4><p>Policial e bombeiro <strong>não são elegíveis</strong> ao ASPP (têm sindicato próprio com plano específico).</p></div>`},
{id:15,num:15,tempo:"5 min",titulo:"Dependentes — quem entra e quem não",html:`
<h3>Quem PODE entrar como dependente</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Vínculo</th><th>Limite de idade</th></tr></thead><tbody>
<tr><td>Cônjuge ou convivente (união estável)</td><td>59 anos completos</td></tr>
<tr><td>Filho solteiro</td><td>Até 42 anos incompletos (no Adesão Vital)</td></tr>
<tr><td>Enteado, tutelado, curatelado</td><td>Até 42 anos</td></tr>
<tr><td>Filho comprovadamente inválido</td><td>Sem limite, enquanto durar a invalidez</td></tr>
<tr><td>Neto solteiro (consanguíneo do titular)</td><td>Até 42 anos incompletos</td></tr>
<tr><td>Sobrinho solteiro (consanguíneo do titular)</td><td>Até 42 anos incompletos</td></tr>
<tr><td>Irmão do titular</td><td>Até 42 anos</td></tr>
<tr><td>Cunhado do titular (irmão do cônjuge do titular)</td><td>Até 42 anos</td></tr>
</tbody></table></div>
<div class="callout internal"><h4>Quem NÃO pode entrar</h4><p>Os irmãos do cônjuge do titular (que seriam cunhados pela ótica do cônjuge) e os cunhados do cônjuge do titular <strong>NÃO</strong> podem ser incluídos. A regra é sempre o <strong>laço consanguíneo direto com o TITULAR</strong> ou com o cônjuge do titular já incluído.</p></div>
<div class="callout arg"><h4>A inclusão de novo dependente é uma VENDA</h4><p>Quando o cliente já fechado, meses depois, casa, tem filho ou inclui um irmão — essa inclusão é uma <strong>venda comercial</strong>, não administrativa. Você ganha a <strong>taxa de adesão</strong> do dependente novo. Mantenha contato nos primeiros 12 meses. Ex.: fechou com Pedro em janeiro; em julho ele casa — você liga: <em>"Pedro, parabéns! Vamos incluir sua esposa? Você tem direito e o processo é rápido."</em></p></div>
<p><strong>Documentos para inclusão:</strong> Cônjuge (certidão de casamento ou união estável); Filho (certidão de nascimento + CPF); Enteado (nascimento + guarda); Tutelado/curatelado (termo judicial); Neto/sobrinho (certidão do laço com o titular); Irmão/cunhado (certidão do vínculo + CPF).</p>`}
],quiz:[
{pergunta:"O custo associativo da entidade é pago a quem?",opcoes:["À Unimed","À entidade de classe (não à Unimed nem ao Grupo Vital) — e entra no cálculo total ao cliente","Ao Grupo Vital","Ao corretor"],correta:1,explica:"O custo associativo é pago à entidade. Sempre informe o valor total: mensalidade + associativo + adicionais (SOS/Aero) + Dental, sem esconder nada."},
{pergunta:"Um advogado (OAB) é elegível por qual entidade, e a quais planos?",opcoes:["Simepar / Amigo","Genesis Profissionais Liberais / Flex e Pleno","ASPP / Flex","Cref / Flex"],correta:1,explica:"Profissionais com registro em conselho (OAB, CRA, CRO, CREA…) entram pela Genesis Profissionais Liberais, com acesso ao Flex e ao Pleno."},
{pergunta:"Policial e bombeiro podem entrar pelo ASPP?",opcoes:["Sim","Não — têm sindicato próprio com plano específico","Só policiais","Só bombeiros"],correta:1,explica:"Exceção ASPP: policial e bombeiro não são elegíveis (têm sindicato próprio). O ASPP atende servidor municipal, estadual e federal exceto esses."},
{pergunta:"Por que a inclusão de um novo dependente é importante para o corretor?",opcoes:["É só burocracia","É uma VENDA comercial — você ganha a taxa de adesão do novo dependente","Não gera nada","Reduz a comissão"],correta:1,explica:"Casamento, filho ou inclusão de irmão geram nova taxa de adesão para o corretor. Mantenha contato nos 12 primeiros meses para captar essas inclusões."},
{pergunta:"Até que idade um filho solteiro entra como dependente no Adesão Vital?",opcoes:["18 anos","24 anos","Até 42 anos incompletos","Sem limite"],correta:2,explica:"Filho solteiro: até 42 anos incompletos. Cônjuge: até 59 anos completos. Filho inválido: sem limite enquanto durar a invalidez."}
]},

/* ===================== PARTE 7 ===================== */
{id:7,titulo:"Regras Comerciais",desc:"Vendas vetadas, taxa de adesão, vigência (programada e antecipada), reajustes, acomodação personalizada e Benefício Família.",modulos:[
{id:16,num:16,tempo:"6 min",titulo:"Vendas vetadas, taxa de adesão e vigência",html:`
<div class="callout internal"><h4>Vendas vetadas — não pode</h4>
<ol style="margin:0">
<li><strong>Vidas acima de 59 anos completos</strong> — não vende (acima de 60 = veto).</li>
<li><strong>Gestantes</strong> — não vende (a gestante precisa entrar antes de engravidar).</li>
<li><strong>Cliente oriundo do PF Unimed Curitiba</strong> — não migra para Adesão.</li>
<li><strong>Migração entre contratos do próprio Adesão</strong> (a chamada "Campeã") — não fazemos.</li>
</ol></div>
<h3>Taxa de adesão</h3>
<p>Valor cobrado <strong>uma única vez</strong> no início do contrato, equivalente a até <strong>90% da primeira mensalidade</strong> (não pode cobrar mais que 90%). Ex.: mensalidade R$ 500 → taxa até R$ 450.</p>
<div class="callout warn"><p>A taxa de adesão é <strong>distinta da primeira mensalidade</strong>. O cliente paga a taxa na contratação, e a primeira mensalidade vence entre 30 e 60 dias depois. Os dois pagamentos não coincidem — justamente para não impactar o orçamento do cliente em transição.</p></div>
<h3>Vigência — programada e antecipada</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th></th><th>Vigência Programada</th><th>Vigência Antecipada</th></tr></thead><tbody>
<tr><td>Quando começa</td><td>Sempre no dia 1º de cada mês</td><td>A qualquer tempo (10-15 dias úteis após recepção)</td></tr>
<tr><td>Boleto</td><td>Cheio (sem pro-rata)</td><td>Pro-rata (proporcional) + 30 dias do mês posterior</td></tr>
<tr><td>Recepção do processo</td><td>Até dia 15 do mês anterior</td><td>Até dia 19 do mês vigente</td></tr>
<tr><td>Quando usar</td><td>Cliente saindo de outro plano com data certa de fim (ex.: empresa acaba 31/05 → vigência 01/06, sem dia descoberto)</td><td>Cliente sem cobertura atual ou com urgência de entrar logo</td></tr>
</tbody></table></div>
<div class="callout internal"><p>As <strong>datas de vencimento dos boletos NÃO podem ser alteradas</strong> — são fixas, definidas pela entidade/operadora. Não prometa boleto no dia 25 se a regra é dia 5. Valide a data e alinhe expectativa antes de fechar.</p></div>`},
{id:17,num:17,tempo:"6 min",titulo:"Reajustes, acomodação e Benefício Família",html:`
<h3>Reajustes — histórico e argumentação</h3>
<p>O reajuste anual é função da sinistralidade. No Adesão Unimed, a operadora seleciona quem entra (DPS, CPT, veto >59 anos e gestantes), mantém médico cooperado e rede própria (controla custo), e a entidade negocia em bloco. Por isso fica controlado em ~8% a 10,5%.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Entidade</th><th>2026</th><th>2025</th><th>2024</th><th>2023</th><th>Aniversário</th></tr></thead><tbody>
<tr><td>Genesis Profissionais Liberais</td><td>-</td><td>10,30%</td><td>9,63%</td><td>-</td><td>Outubro</td></tr>
<tr><td>Genesis Professores</td><td>8,50%</td><td>-</td><td>9,93%</td><td>12,00%</td><td>Janeiro</td></tr>
<tr><td>Simepar</td><td>-</td><td>6,50%</td><td>9,80%</td><td>11,80%</td><td>Junho</td></tr>
<tr><td>ASPP</td><td>-</td><td>10,30%</td><td>9,63%</td><td>-</td><td>Outubro</td></tr>
<tr><td>Cref / Sindifar / Sindimóveis</td><td>-</td><td>10,30%</td><td>-</td><td>-</td><td>Outubro</td></tr>
</tbody></table></div>
<div class="callout arg"><p><em>"Olha esse histórico de 4 anos: nunca passou de 12%. Compare com Adesão concorrente que estourou 38%. Por quê? Porque a Unimed cuida da carteira, a entidade negocia em bloco, e o reajuste é matemático — não arbitrário."</em></p></div>
<div class="callout internal"><p>Nunca prometa que o reajuste do próximo ano será X%. Reajuste é variável. Mostre histórico e diga "média de 8% a 10,5%", mas <strong>não crave número futuro</strong>. Promessa quebrada = perda de cliente e reputação.</p></div>
<h3>Acomodação personalizada — o "você sabia?"</h3>
<p>Nos planos Unimed é possível ter <strong>diferentes acomodações no mesmo contrato</strong>: titular Enfermaria (mais barato) e dependentes Apartamento, ou o contrário. <em>"Se você ficar com Enfermaria e sua esposa com Apartamento, a economia é de R$ X. A operadora libera essa mistura no mesmo contrato."</em> Encaixa o orçamento em situações apertadas.</p>
<h3>Benefício Família — a remissão por morte do titular</h3>
<div class="callout key"><p>Ocorrendo o falecimento do titular com <strong>idade inferior a 70 anos</strong> no momento da adesão e vinculado há <strong>mais de 6 meses</strong> ao plano, o dependente legal terá direito aos serviços médico-hospitalares <strong>isentos de mensalidades e coparticipações pelo prazo de 1 ano</strong>. Dependentes inclusos após a adesão do titular têm 12 meses para acessar o benefício.</p></div>
<p><strong>Quem se enquadra:</strong> cônjuge/companheiro(a); filho natural, enteado ou adotivo solteiro até 21 anos incompletos (ou até 24 se universitário); enteados (equiparados); filho inválido (sem limite, enquanto durar a invalidez). Os filhos, ao completar a idade limite, são excluídos automaticamente.</p>
<div class="callout arg"><p><em>"Se algo acontecer com o titular, antes dos 70 anos, e ele estava no plano há mais de 6 meses, sua família continua com o plano por 1 ano inteiro, sem pagar mensalidade nem coparticipação. É como um seguro de vida embutido no plano — tranquilidade para sua família no pior momento."</em></p></div>`}
],quiz:[
{pergunta:"Quais são vendas vetadas no Adesão Vital?",opcoes:["Apenas idosos","Vidas acima de 59 anos completos, gestantes, oriundo do PF Unimed e migração entre contratos do próprio Adesão","Só gestantes","Nenhuma"],correta:1,explica:"As 4 vedações: 60+ anos, gestantes, cliente do PF Unimed Curitiba e migração interna entre contratos do Adesão (a 'Campeã')."},
{pergunta:"Quanto pode ser a taxa de adesão e quando vence a 1ª mensalidade?",opcoes:["100% da mensalidade, vence junto","Até 90% da 1ª mensalidade (única vez); a 1ª mensalidade vence 30-60 dias depois, sem coincidir","50%, no mesmo dia","Não há taxa"],correta:1,explica:"A taxa é até 90% da 1ª mensalidade, paga na contratação. A 1ª mensalidade vence 30-60 dias depois — os pagamentos não coincidem, para não pesar na transição."},
{pergunta:"Na vigência PROGRAMADA, quando o plano começa?",opcoes:["A qualquer dia","Sempre no dia 1º do mês, com boleto cheio (recepção até dia 15 do mês anterior)","No dia 19","Imediatamente"],correta:1,explica:"Programada = dia 1º, boleto cheio, recepção até dia 15. Antecipada = a qualquer tempo (10-15 dias úteis), boleto pro-rata + 30 dias, recepção até dia 19."},
{pergunta:"O que é o Benefício Família?",opcoes:["Desconto para famílias","Remissão por morte do titular: falecendo o titular (com <70 anos na adesão e +6 meses no plano), os dependentes ficam 1 ano isentos de mensalidade e coparticipação","Plano para crianças","Um adicional pago"],correta:1,explica:"É um 'seguro de vida embutido': morte do titular (<70 anos, +6 meses no plano) garante 1 ano de plano gratuito aos dependentes legais. Pouco explorado no mercado."},
{pergunta:"Sobre o reajuste do próximo ano, o que o corretor deve fazer?",opcoes:["Prometer um percentual exato","Mostrar o histórico (média 8%-10,5%) mas NÃO cravar número futuro","Garantir 0% de reajuste","Não falar de reajuste"],correta:1,explica:"Reajuste é variável. Mostre o histórico controlado (nunca passou de 12%) mas nunca prometa um percentual futuro — promessa quebrada custa cliente e reputação."}
]},

/* ===================== PARTE 8 ===================== */
{id:8,titulo:"Carências, Aproveitamento e CPT",desc:"As carências contratuais, a redução por plano congênere, a campanha vigente e a Cobertura Parcial Temporária.",modulos:[
{id:18,num:18,tempo:"6 min",titulo:"Carências e redução por congênere",html:`
<h3>Carências contratuais (cliente do zero)</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Procedimento</th><th>Carência</th></tr></thead><tbody>
<tr><td>Urgência e Emergência</td><td>24 horas</td></tr>
<tr><td>Consultas e Exames Laboratoriais</td><td>30 dias</td></tr>
<tr><td>Exames Simples</td><td>30 dias</td></tr>
<tr><td>Exames de Diagnose</td><td>90 dias</td></tr>
<tr><td>Fisioterapia</td><td>90 dias</td></tr>
<tr><td>Exames de Alta Complexidade</td><td>180 dias</td></tr>
<tr><td>Internação Clínica e Cirúrgica</td><td>180 dias</td></tr>
<tr><td>Acomodação Apartamento (vindo de Enfermaria)</td><td>180 dias</td></tr>
<tr><td>Terapias</td><td>180 dias</td></tr>
<tr><td>Parto Normal ou Cesariana</td><td>300 dias</td></tr>
<tr><td>Doenças Preexistentes (CPT)</td><td>24 meses</td></tr>
</tbody></table></div>
<div class="callout key"><h4>Redução por plano congênere — o que reduz e o que não</h4><p>Reduz <strong>até 180 dias</strong> (urgência, consultas, exames laboratoriais, diagnose, fisioterapia, internação, alta complexidade) para cliente vindo de plano congênere. <strong>NÃO reduz:</strong> Terapias (180 dias mantidos), Parto (300 dias mantidos), Doenças Preexistentes/CPT (24 meses mantidos).</p></div>
<div class="callout warn"><h4>Campanha de carência (abr–jun/2026)</h4><p>Está rodando uma campanha especial de isenção: Consultas 30 dias (entra e em ~7 dias já marca) e Exames laboratoriais 30 dias. Para os demais procedimentos, se o cliente trouxer plano anterior, mantém-se a regra padrão de redução. Sem plano anterior, cumpre a carência contratual.</p></div>
<h3>Tempo mínimo e documentação</h3>
<p>Para haver redução, o cliente precisa ter ficado <strong>no mínimo 6 meses</strong> no plano anterior, <strong>sem inadimplência</strong> no momento do cancelamento. <em>Cliente inadimplente NÃO reduz carência</em> — mesmo com 5 anos de plano anterior. Documentos: cópia da carteirinha do plano anterior, carta de permanência (últimos 30 dias) e 3 últimos boletos pagos. (Se vem direto de outro plano sem ter cancelado, os 3 boletos não são exigidos — basta a carta atual.)</p>
<p><strong>Congêneres aceitos</strong> (qualquer plano com registro ANS): Clinipam/Hapvida, SulAmérica, Bradesco Saúde, Paraná Clínicas, Medsul, Amil, Nossa Saúde, outras Unimeds, Qualicorp/Extramed (Adesão), ICS, Cassi, etc.</p>
<div class="callout arg"><p><em>"Você está há quanto tempo no seu plano atual? Se for mais de 6 meses, eu trago todo seu tempo de plano para a Unimed e você praticamente não tem carência — só fica terapia, parto e CPT, que são por lei."</em></p></div>`},
{id:19,num:19,tempo:"5 min",titulo:"CPT e doenças preexistentes",html:`
<p><strong>Doença preexistente:</strong> toda doença, lesão ou condição que o cliente sabia ter antes da contratação e precisa declarar na DPS. <strong>CPT:</strong> por <strong>24 meses</strong>, a operadora restringe procedimentos de <strong>alta complexidade</strong> ligados àquela doença específica.</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>O que a CPT restringe (24 meses)</th><th>O que a CPT NÃO restringe</th></tr></thead><tbody>
<tr><td>Cirurgias de alta complexidade ligadas à doença declarada</td><td>Consultas (incluindo da especialidade da doença)</td></tr>
<tr><td>Internações em UTI ligadas à doença declarada</td><td>Exames de rotina</td></tr>
<tr><td>Procedimentos da lista ANS de alta complexidade</td><td>Internação por outra causa; urgência/emergência (após 24h); baixa e média complexidade</td></tr>
</tbody></table></div>
<div class="callout arg"><h4>Como explicar sem assustar</h4><p><em>"Você tem hipertensão. Vou declarar na DPS. Por 2 anos, se precisar de uma cirurgia cardíaca de alta complexidade, o plano não cobre. Mas a consulta com cardiologista, o eletro, o holter, o exame de sangue, o medicamento na receita — tudo coberto normalmente desde o primeiro dia. CPT é só para alta complexidade ligada à doença, e só por 2 anos."</em></p></div>
<div class="callout internal"><p>Mentir na DPS é <strong>fraude contratual</strong> e dá rescisão com perdas e danos. Sempre oriente: <em>"Declare tudo o que você sabe. CPT por 2 anos é melhor que ter o plano cancelado depois."</em></p></div>
<h3>Como funciona operacionalmente</h3>
<ol>
<li>Cliente preenche a DPS <strong>online</strong>, com colaborador do Grupo Vital.</li>
<li>Documentação vai para a Unimed.</li>
<li>Se houver condição relevante, o cliente é chamado para a <strong>segunda entrevista com médico da Unimed (via ADMEX)</strong> — etapa final antes da emissão das carteirinhas.</li>
<li>O médico avalia, emite ou não a CPT, e o cliente assina.</li>
</ol>
<p>Nem todo cliente vai à ADMEX. Se a DPS não levantou nenhuma condição relevante, o processo segue direto para cadastro e carteirinha.</p>`}
],quiz:[
{pergunta:"Quais carências NÃO reduzem por aproveitamento de plano congênere?",opcoes:["Consultas e exames","Terapias (180d), Parto (300d) e CPT/preexistentes (24 meses)","Urgência","Todas reduzem"],correta:1,explica:"Reduz até 180 dias na maioria. Não reduzem: terapias, parto e CPT — são por lei. A redução exige 6 meses+ no plano anterior, sem inadimplência."},
{pergunta:"Cliente inadimplente no plano anterior consegue redução de carência?",opcoes:["Sim","Não — mesmo com 5 anos de plano anterior, se saiu inadimplente, perde o direito ao aproveitamento","Só metade","Depende da operadora"],correta:1,explica:"Inadimplência no momento do cancelamento elimina o direito à redução. Por isso pede-se os 3 últimos boletos pagos como comprovação."},
{pergunta:"A CPT restringe o quê?",opcoes:["Tudo ligado à doença","Apenas procedimentos de ALTA complexidade ligados à doença declarada, por 24 meses","Consultas e exames","Urgência"],correta:1,explica:"CPT = só alta complexidade ligada à doença declarada, por 24 meses. Consultas, exames, medicamentos e internação por outra causa seguem cobertos desde o dia 1."},
{pergunta:"O que é a ADMEX?",opcoes:["Um plano","A segunda entrevista (com médico da Unimed) que avalia a DPS e emite a CPT, quando há condição relevante declarada","O app","A taxa de adesão"],correta:1,explica:"A ADMEX (Administradora Médica Externa) é a tele-entrevista com médico da Unimed, etapa final antes da carteirinha. Só ocorre quando a DPS levanta condição relevante."},
{pergunta:"Mentir na Declaração de Saúde (DPS) gera o quê?",opcoes:["Desconto","Fraude contratual e rescisão com perdas e danos","Carência menor","Nada"],correta:1,explica:"Omitir/mentir na DPS é fraude e pode dar rescisão. Oriente sempre: 'declare tudo — CPT por 2 anos é melhor que ter o plano cancelado depois'."}
]},

/* ===================== PARTE 9 ===================== */
{id:9,titulo:"Processo de Implantação",desc:"A FIC (Ficha de Intenção de Compra), as etapas do processo no Grupo Vital, a Declaração de Saúde digital e a ADMEX.",modulos:[
{id:20,num:20,tempo:"6 min",titulo:"A FIC e as etapas do processo",html:`
<p>A FIC (Ficha de Intenção de Compra) é o documento que <strong>inicia o processo</strong>. É preenchida pelo corretor (ou back office PlaneCorp) com os dados do cliente.</p>
<h3>Informações obrigatórias na FIC</h3>
<ul>
<li>Nome completo do titular e dependentes (sem abreviações) · CPF de todos · Data de nascimento</li>
<li><strong>E-mail e WhatsApp do TITULAR</strong> (do cliente, nunca do corretor)</li>
<li>Entidade de adesão correta · Plano escolhido (Pleno, Flex, Amigo) · Acomodação por beneficiário</li>
<li>Adicionais (Dental, SOS, Aero) · Tipo de vigência (programada ou antecipada)</li>
<li>Valores (mensalidade total + taxa de adesão) · Documentos anexados (RG, CPF, comprovante de residência, comprovante de elegibilidade e, se houver, documentos para redução de carência)</li>
</ul>
<div class="callout internal"><h4>Regras críticas na FIC</h4>
<ol style="margin:0">
<li>É proibido agendar a videochamada da Declaração de Saúde em nome do cliente — ele agenda direto pelo link do Grupo Vital.</li>
<li>E-mail e WhatsApp são do cliente, sempre (se colocar o seu, você recebe a comunicação e o cliente fica sem informação).</li>
<li>Indique a entidade correta — errar trava o processo.</li>
<li>Documentos vão nos campos corretos (carteirinha do plano anterior no campo de carteirinha, holerite no de elegibilidade, etc.).</li>
</ol></div>
<h3>Etapas do processo no Grupo Vital</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>#</th><th>Etapa</th><th>O que acontece</th></tr></thead><tbody>
<tr><td>1</td><td>Nova Intenção</td><td>FIC criada e enviada ao Grupo Vital</td></tr>
<tr><td>2</td><td>Enviado para Entrevista</td><td>Link de agendamento enviado ao cliente</td></tr>
<tr><td>3</td><td>Aguardando Agendamento</td><td>Cliente ainda não escolheu data/horário</td></tr>
<tr><td>4</td><td>Agendado</td><td>Cliente escolheu data e horário</td></tr>
<tr><td>5</td><td>Entrevista Finalizada</td><td>DPS preenchida</td></tr>
<tr><td>6</td><td>Envio de Documentação</td><td>Documentos sendo recebidos</td></tr>
<tr><td>7</td><td>Analisando Documentação</td><td>Grupo Vital validando documentos</td></tr>
<tr><td>8</td><td>Proposta em Andamento</td><td>Documentação foi para a Unimed</td></tr>
<tr><td>9</td><td>Cadastro</td><td>Unimed cadastrando o beneficiário</td></tr>
<tr><td>10</td><td>Finalizado</td><td>Carteirinhas emitidas</td></tr>
<tr><td>11</td><td>Documento Declinado</td><td>Algum documento rejeitado, precisa correção</td></tr>
</tbody></table></div>
<div class="callout tip"><p>Pelo menos uma vez por semana, peça o status dos processos em andamento dos seus clientes. Cliente ansioso reclama; cliente informado é tranquilo.</p></div>`},
{id:21,num:21,tempo:"5 min",titulo:"Declaração de Saúde digital e ADMEX",html:`
<h3>Declaração de Saúde Digital</h3>
<p>Hoje a DPS é <strong>online</strong>:</p>
<ol>
<li>Cliente recebe um WhatsApp do Grupo Vital com link para agendar.</li>
<li>Cliente escolhe data/horário.</li>
<li>Na hora marcada, recebe o link da videochamada.</li>
<li>Colaborador do Grupo Vital conduz o preenchimento da DPS digital pelo celular do cliente.</li>
<li>Cliente responde sim/não a cada pergunta sobre histórico de saúde.</li>
<li>DPS finalizada e enviada ao processo.</li>
</ol>
<p>Antigamente (até 2024) era em planilha Excel preenchida pelo cliente sozinho. Agora é online e com auxílio — reduziu erros e fraudes.</p>
<div class="callout tip"><h4>O que orientar o cliente antes da entrevista</h4><p><em>"Você vai receber um WhatsApp do Grupo Vital com link para agendar uma videochamada — essa é a Declaração de Saúde, dura uns 15 minutos. Na chamada, um colaborador te ajuda a preencher um formulário online sobre seu histórico. Declare tudo o que for verdade. Depois, a Unimed pode te chamar para uma segunda entrevista — com médico, para definir CPT (se houver). Aí o contrato é assinado e em até 15 dias úteis as carteirinhas saem. Pode confiar: o Grupo Vital cuida disso, e eu acompanho cada etapa."</em></p></div>
<h3>ADMEX — a segunda entrevista</h3>
<p>Se a DPS levantou alguma condição que requer avaliação médica para CPT, o cliente é convocado para a <strong>ADMEX</strong> (Administradora Médica Externa).</p>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Item</th><th>Detalhe</th></tr></thead><tbody>
<tr><td>Quem conduz</td><td>Médico contratado pela Unimed</td></tr>
<tr><td>Onde</td><td>Tele-entrevista pelo portal teleentrevista.admex.com.br</td></tr>
<tr><td>Como agendar</td><td>E-mail da Unimed com token único + link</td></tr>
<tr><td>Validade do token</td><td>Limitado (geralmente 30 a 90 dias)</td></tr>
<tr><td>O que acontece</td><td>Médico revisa a DPS, faz perguntas, emite CPT (se aplicável), cliente assina</td></tr>
</tbody></table></div>
<div class="callout internal"><p>A ADMEX é a <strong>última etapa antes da emissão das carteirinhas</strong>. Se o cliente não agendar dentro do prazo do token, o processo trava. Oriente o cliente a agendar assim que receber o e-mail.</p></div>`}
],quiz:[
{pergunta:"Na FIC, de quem devem ser o e-mail e o WhatsApp?",opcoes:["Do corretor","Sempre do TITULAR (cliente) — se colocar o seu, o cliente fica sem a comunicação","Do Grupo Vital","Tanto faz"],correta:1,explica:"E-mail e WhatsApp são sempre do cliente. Além disso, é proibido agendar a videochamada da DPS em nome do cliente — ele agenda pelo link do Grupo Vital."},
{pergunta:"Qual o último status do processo, indicando carteirinhas emitidas?",opcoes:["Cadastro","Finalizado","Proposta em Andamento","Documento Declinado"],correta:1,explica:"'Finalizado' = carteirinhas emitidas. 'Documento Declinado' indica rejeição que precisa correção. Acompanhe o status semanalmente."},
{pergunta:"Quando o cliente é convocado para a ADMEX?",opcoes:["Sempre","Apenas quando a DPS levanta uma condição que requer avaliação médica para definir CPT","Nunca","Só médicos"],correta:1,explica:"Se a DPS não levanta condição relevante, segue direto para cadastro/carteirinha. A ADMEX (tele-entrevista) só ocorre quando há doença declarada a avaliar."},
{pergunta:"O que acontece se o cliente não agendar a ADMEX dentro do prazo do token?",opcoes:["Nada","O processo trava (a ADMEX é a última etapa antes da carteirinha) — oriente a agendar assim que receber o e-mail","Ganha desconto","O plano ativa sozinho"],correta:1,explica:"O token tem validade limitada (30-90 dias). Sem o agendamento, o processo para. Oriente o cliente a agendar logo que receber o e-mail da Unimed."}
]},

/* ===================== PARTE 10 ===================== */
{id:10,titulo:"Prospecção, Venda e Pós-Venda",desc:"Quem é o cliente, onde encontrá-lo, a argumentação por perfil, a quebra de objeções, o fechamento e o pós-venda.",modulos:[
{id:22,num:22,tempo:"6 min",titulo:"Quem é o cliente e onde encontrá-lo",html:`
<p>O cliente do Adesão é qualquer pessoa com registro em conselho de classe na região. Só o <strong>CREF</strong> tem ~25 mil profissionais em Curitiba. Somando advogados, médicos, dentistas, psicólogos, educadores físicos, nutricionistas, arquitetos, engenheiros, fisioterapeutas, enfermeiros, contadores, biólogos, biomédicos, veterinários, corretores, farmacêuticos, professores e servidores — você chega facilmente a <strong>200 mil pessoas</strong>. Esse mercado não está saturado: muitos nem sabem que o Adesão Unimed existe.</p>
<div class="callout tip"><p>Glória relatou: corretor da Vital atendeu cliente que chegou via outra plataforma porque "ouviu falar do produto e o corretor original não tinha". <strong>O cliente já conhece o Adesão. O corretor que não oferece, perde para o concorrente.</strong></p></div>
<h3>Seis canais práticos (trabalhe pelo menos três)</h3>
<ul>
<li><strong>Redes sociais:</strong> Instagram (posts/stories "você é da área de saúde/educação/direito? tem desconto"), Facebook (grupos por especialidade), LinkedIn (advogados, médicos, professores, servidores). Use as skills instagram-carousel e linkedin-post da PlaneCorp.</li>
<li><strong>Identificação proativa:</strong> em todo lead PME ou PF, pergunte: <em>"Você ou o titular tem registro em algum conselho de classe? É professor? Servidor público?"</em> — 20% a 30% dos leads PME poderiam estar no Adesão (mais barato).</li>
<li><strong>Material impresso:</strong> folders e cartões com a tabela em consultórios, escritórios, escolas, prefeituras (peça à Glória).</li>
<li><strong>Grupos de WhatsApp profissionais:</strong> enfermagem, fisioterapia, educação física, OAB, CRO, professores, servidores. Respeite as regras de cada grupo — se apresente, contribua com conteúdo e responda em DM quando pedirem orçamento.</li>
<li><strong>Indicações:</strong> a maior alavanca. <em>"João, agora que você está seguro com o plano, posso te pedir um favor? Conhece duas ou três pessoas da sua profissão que poderiam se beneficiar?"</em></li>
<li><strong>Carteira existente:</strong> ligue para clientes antigos uma vez por ano — satisfação, troca de produto, indicações. É mina de ouro subutilizada.</li>
</ul>`},
{id:23,num:23,tempo:"6 min",titulo:"Argumentação por perfil e quebra de objeções",html:`
<h3>Argumentação por perfil</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Perfil</th><th>Argumento principal</th></tr></thead><tbody>
<tr><td>Comparador de Preço</td><td>"40% mais barato que PF com a mesma rede. Reajuste histórico de 8% a 10,5% — compare com concorrente que estourou 38%. E você restitui no IRPF."</td></tr>
<tr><td>Família com Filhos Pequenos</td><td>"Pequeno Príncipe, Erastinho, Menino Deus na rede. No Pleno você marca pediatra direto. Filha passou mal à noite? Liga no SOS e o médico vai até sua casa (gratuito no Pleno)."</td></tr>
<tr><td>Profissional 45+ com condição prévia</td><td>"54 anos de Unimed. 5.000 médicos. Hospital INC, Marcelino, Vita, Sugisawa. A CPT, se houver, é só para alta complexidade da condição declarada — o resto é coberto desde o dia 1."</td></tr>
<tr><td>Empreendedor / PJ unipessoal</td><td>"Você tem registro em conselho? Então não precisa de 3 vidas — no Adesão entra com 1 vida, e ainda restitui no IRPF (o PME não permite)."</td></tr>
<tr><td>Servidor Público</td><td>"Pelo ASPP ou Genesis Professores, você tem o Adesão. R$ 68/mês de associação no ASPP, e a partir daí o plano Unimed mais barato. Servidor raramente sabe disso."</td></tr>
<tr><td>Vindo de plano verticalizado (Hapvida/Nossa Saúde/PR Clínicas)</td><td>"O Pleno faz upgrade sem subir muito o preço: mantém a estrutura de médico de família nas APS próprias da Unimed e ganha pediatra, oftalmo e gineco direto. 23 hospitais credenciados, incluindo Pequeno Príncipe e Vita."</td></tr>
</tbody></table></div>
<h3>Quebra de objeções</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Objeção</th><th>Resposta</th></tr></thead><tbody>
<tr><td>"Está caro"</td><td>"Vou te mostrar 3 cenários. Talvez você não precise de Apartamento, ou o titular fica Enfermaria e a esposa Apartamento. Vamos personalizar."</td></tr>
<tr><td>"O reajuste vai estourar"</td><td>(Histórico) "Olha esses 4 anos — nunca passou de 12%. Porque a operadora cuida da carteira."</td></tr>
<tr><td>"Tem coparticipação, não gosto"</td><td>"Prefere plano sem copart. que custa 60% a mais? A copart. é o que mantém o produto barato. Em laboratório próprio Unimed parte é zerada; no Pleno, dentro das APS, tudo isento."</td></tr>
<tr><td>"E se eu adoecer e perder o plano?"</td><td>"Você não pode ser cancelado por adoecer — é proibido pela ANS. Só por inadimplência ou fraude na DPS."</td></tr>
<tr><td>"Carência é muito longa"</td><td>"De qual plano você vem? Quanto tempo? Trago todo seu histórico para a Unimed e reduzo até 180 dias. Só fica terapia, parto e CPT (por lei)."</td></tr>
<tr><td>"Médico de família eu não quero"</td><td>"No Pleno é diferente: você marca pediatra, oftalmo e gineco DIRETO com qualquer médico dos 5.000. A porta de entrada é para acolhimento."</td></tr>
<tr><td>"É plano de associação, é golpe?"</td><td>"Não — é uma modalidade reconhecida pela ANS chamada Coletivo por Adesão. Existem 3 modalidades (Individual, Empresarial e Adesão), reguladas pela mesma agência do seu plano antigo."</td></tr>
<tr><td>"Vou pensar"</td><td>(Vigência) "A vigência programada é dia 1º. Se fechar até dia 15, entra dia 1º do próximo mês. Se passar, fica mais um mês sem cobertura. O que está te impedindo agora?"</td></tr>
<tr><td>"Quero comparar com o PF Unimed"</td><td>"Ótimo. Mas o PF da Unimed praticamente não vende mais para novos, e o produto é o mesmo — a diferença é o canal. Você pagaria 40% a mais pela MESMA rede."</td></tr>
</tbody></table></div>`},
{id:24,num:24,tempo:"5 min",titulo:"Fechamento e pós-venda",html:`
<h3>O fechamento</h3>
<p>Quando o cliente entendeu o produto, viu o preço, fez perguntas e parou de objetar — feche:</p>
<ul>
<li><strong>Por escolha:</strong> "Você prefere começar dia 1º ou já antecipar a vigência? Cartão ou boleto?" (Não pergunta SE compra. Pergunta COMO.)</li>
<li><strong>Por prazo:</strong> "Para entrar dia 1º, preciso da sua FIC até dia 15. Pode ser hoje?"</li>
<li><strong>Por urgência justa:</strong> "Você está sem plano hoje. Cada dia sem cobertura é risco. Vamos antecipar a vigência?"</li>
</ul>
<h3>O onboarding nos primeiros 30 dias</h3>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Quando</th><th>Ação</th></tr></thead><tbody>
<tr><td>Dia 0</td><td>Envio FIC e oriento sobre as próximas etapas</td></tr>
<tr><td>Dia 1-3</td><td>Verifico se o cliente já agendou a Declaração de Saúde</td></tr>
<tr><td>Dia 5-7</td><td>Confirmo se a entrevista aconteceu</td></tr>
<tr><td>Dia 10</td><td>Atualizo o cliente sobre o status (em análise, em CPT, em cadastro)</td></tr>
<tr><td>Dia 15-20</td><td>Carteirinhas saem — mando mensagem antes do cliente perguntar</td></tr>
<tr><td>Dia 20</td><td>Ajudo o cliente a baixar o app, ativo o cartão virtual</td></tr>
<tr><td>Dia 30</td><td>Ligo perguntando se está tudo ok, se já usou — e peço indicação</td></tr>
</tbody></table></div>
<h3>Pós-venda contínuo</h3>
<ul>
<li><strong>3 meses:</strong> ligação rápida ("tudo ok?")</li>
<li><strong>6 meses:</strong> "alguém da família vai querer entrar?" (lembrete de inclusão de cônjuge/filho)</li>
<li><strong>11 meses</strong> (1 mês antes do aniversário): aviso sobre o reajuste com base no histórico, para o cliente já estar preparado</li>
<li><strong>Aniversário:</strong> parabenização + confirmação de dados atualizados</li>
</ul>
<div class="callout key"><p>Cliente do Adesão não é venda única — é <strong>relacionamento de 5 a 15 anos</strong>. Cada cliente bem cuidado vale 3 a 5 indicações ao longo do tempo. Sua carteira é seu maior ativo — invista 20% do seu tempo nela e você nunca mais vai depender só de lead novo.</p></div>`}
],quiz:[
{pergunta:"Qual a pergunta-chave para identificar proativamente um lead de Adesão?",opcoes:["Quanto você ganha?","'Você ou o titular tem registro em algum conselho de classe? É professor? Servidor público?'","Qual sua idade?","Você tem CNPJ?"],correta:1,explica:"20% a 30% dos leads PME poderiam estar no Adesão (mais barato). Sempre pergunte sobre conselho de classe, professor ou servidor público."},
{pergunta:"Diante de 'é plano de associação, é golpe?', a resposta correta é:",opcoes:["Concordar","'É uma modalidade reconhecida pela ANS chamada Coletivo por Adesão — uma das 3 modalidades, regulada pela mesma agência do seu plano antigo'","Mudar de assunto","Oferecer PF"],correta:1,explica:"O Adesão é uma das 3 modalidades oficiais da ANS (Individual, Empresarial, Adesão). Está tudo regulado — não é golpe; o preço bom vem do modelo coletivo."},
{pergunta:"Qual a melhor forma de fechar (técnica por escolha)?",opcoes:["'Você quer comprar?'","'Você prefere começar dia 1º ou antecipar a vigência? Cartão ou boleto?' (pergunta COMO, não SE)","'Pensa e me retorna'","'Tem certeza?'"],correta:1,explica:"O fechamento por escolha pergunta COMO compra, não SE compra. Combine com fechamento por prazo (FIC até dia 15) e por urgência justa (dia sem cobertura é risco)."},
{pergunta:"Por que o cliente do Adesão é um relacionamento de longo prazo?",opcoes:["É venda única","É relacionamento de 5 a 15 anos; cada cliente bem cuidado vale 3 a 5 indicações — invista 20% do tempo na carteira","Não há pós-venda","Some após 1 ano"],correta:1,explica:"A carteira é o maior ativo do corretor. Pós-venda estruturado (30 dias, 3/6/11 meses, aniversário) gera indicações e inclusões, reduzindo a dependência de lead novo."}
]},

/* ===================== PARTE 11 ===================== */
{id:11,titulo:"Ferramentas, Glossário e Cultura",desc:"O portal Grupo Vital e o app Unimed, o glossário A-Z e os 6 pilares da cultura PlaneCorp.",modulos:[
{id:25,num:25,tempo:"4 min",titulo:"Portal Grupo Vital, app e materiais",html:`
<h3>Portal do Cliente Grupo Vital</h3>
<p>Site grupovital.com.br → "Acessar Conta". Acesso por <strong>número da carteirinha + CPF do titular</strong> (não precisa de senha). Funcionalidades: 2ª via de boleto, cópia da proposta (contrato), demonstrativo de IRRF (para o imposto de renda), cancelamento de plano, outras solicitações administrativas.</p>
<div class="callout tip"><p>No dia da entrega da carteirinha, mostre ao cliente como acessar o portal. Cliente que sabe tirar 2ª via sozinho não te liga 8h da noite pedindo boleto.</p></div>
<h3>App Unimed Curitiba</h3>
<p>Disponível na Apple Store e Google Play: liberação de guias, rede credenciada, extrato de coparticipações, cartão virtual, chat, Pronto Atendimento Virtual, teleconsultas, notícias.</p>
<h3>Materiais de marketing</h3>
<p>Materiais oficiais do Grupo Vital + brandeados PlaneCorp: folders impressos, posts de Instagram (skill instagram-carousel), posts de LinkedIn (skill linkedin-post), tabelas de preço atualizadas, comparativos com concorrentes.</p>
<div class="callout internal"><p>Sempre use a <strong>tabela de preço vigente</strong>. Tabela vencida gera reclamação e perda de credibilidade. Verifique com Débora ou Eduarda na PlaneCorp antes de mandar para o cliente.</p></div>
<div class="callout warn"><h4>Alerta de tabela (jun/2026)</h4><p>As validades diferem por produto: <strong>Flex</strong> válida até 30/09/2026, <strong>Pleno</strong> até 31/12/2026 e <strong>Amigo Nacional</strong> até 31/05/2026. Como o material é de junho/2026, valores do Amigo devem ser reconfirmados com o Grupo Vital antes de qualquer cotação.</p></div>`},
{id:26,num:26,tempo:"5 min",titulo:"Glossário e Cultura PlaneCorp",html:`
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Termo</th><th>Definição</th></tr></thead><tbody>
<tr><td>ADMEX</td><td>Administradora Médica Externa — conduz a 2ª entrevista (após a DPS) para emitir CPT. Acesso por teleentrevista.admex.com.br com token único</td></tr>
<tr><td>Adesão (Coletivo por Adesão)</td><td>Modalidade ANS em que o cliente é vinculado a uma entidade de classe</td></tr>
<tr><td>Aero Unimed</td><td>Transporte aéreo médico (UTI aérea), 24h, Brasil. R$ 2,50/mês</td></tr>
<tr><td>ANS</td><td>Agência Nacional de Saúde Suplementar — reguladora federal</td></tr>
<tr><td>APS</td><td>Atenção Primária à Saúde — unidades exclusivas do Pleno (porta de entrada com médico de família)</td></tr>
<tr><td>Aproveitamento de Carência</td><td>Negociação comercial que reduz carências para cliente vindo de congênere ANS, 6 meses+, sem inadimplência</td></tr>
<tr><td>Benefício Família</td><td>Remissão por morte do titular (<70 anos na adesão, +6 meses): dependentes ficam 1 ano isentos de mensalidade e copart.</td></tr>
<tr><td>Carência</td><td>Período após a vigência sem direito a certos procedimentos</td></tr>
<tr><td>Carteirinha</td><td>Documento que identifica o beneficiário. O contrato só está vigente após sua emissão</td></tr>
<tr><td>Coparticipação</td><td>Percentual do procedimento pago no momento do uso, junto da mensalidade</td></tr>
<tr><td>CPT</td><td>Cobertura Parcial Temporária — 24 meses de restrição para alta complexidade ligada a preexistência declarada</td></tr>
<tr><td>DPS</td><td>Declaração Pessoal de Saúde, no momento da contratação</td></tr>
<tr><td>FIC</td><td>Ficha de Intenção de Compra — inicia o processo no Grupo Vital</td></tr>
<tr><td>Grupo Vital</td><td>Plataforma autorizada a comercializar o Adesão da Unimed Curitiba (parceira da PlaneCorp)</td></tr>
<tr><td>Plano Congênere</td><td>Plano de outra operadora com registro ANS, aceito para aproveitamento de carência</td></tr>
<tr><td>Pleno / Flex / Amigo</td><td>Verticalizado (APS) / livre acesso (carro-chefe) / nacional (médicos via Simepar)</td></tr>
<tr><td>Sinistralidade</td><td>Razão entre o pago em procedimentos e o recebido em mensalidades — determina o reajuste</td></tr>
<tr><td>SOS Unimed</td><td>Ambulância e atendimento domiciliar 24h, restrito a Curitiba/Araucária/Pinhais/SJP. Grátis no Pleno</td></tr>
<tr><td>Taxa de Adesão</td><td>Valor único no início, até 90% da 1ª mensalidade</td></tr>
<tr><td>Vigência Programada / Antecipada</td><td>Dia 1º, boleto cheio / a qualquer tempo, boleto pro-rata + 30 dias</td></tr>
</tbody></table></div>
<h3>Cultura PlaneCorp — os 6 pilares</h3>
<div class="callout key"><ul style="margin:0">
<li><strong>Clareza</strong> — a verdade ao cliente sobre cobertura, reajuste e carência. Cliente confiando vale mais que venda por engano.</li>
<li><strong>Cuidado</strong> — cada cliente é uma família, cada FIC é uma vida. Trate o processo com a atenção que você gostaria no seu.</li>
<li><strong>Conhecimento</strong> — você é o especialista. Saiba o produto melhor que o cliente e que o concorrente. Atualize-se sempre.</li>
<li><strong>Consistência</strong> — faça o seguimento dos processos toda semana. Cliente esquecido vai embora — e leva 3 indicações junto.</li>
<li><strong>Compromisso</strong> — prazo dado é prazo cumprido. Se prometeu carteirinha em 15 dias, fale com o cliente em 15 dias, mesmo que seja para dizer que atrasou. Silêncio mata a relação.</li>
<li><strong>Crescimento</strong> — carteira crescendo, indicações chegando, conhecimento aumentando. A PlaneCorp não vende plano — constrói relacionamento de longo prazo.</li>
</ul></div>
<div class="callout internal"><p>Este treinamento ensina o consultor a vender com segurança, mas <strong>não substitui</strong> a tabela vigente, o contrato, os comunicados do Grupo Vital e a validação operacional no momento da proposta.</p></div>`}
],quiz:[
{pergunta:"Como o cliente acessa o portal do Grupo Vital?",opcoes:["Com login e senha","Por número da carteirinha + CPF do titular (não precisa de senha) — para 2ª via de boleto, cópia da proposta, demonstrativo de IRRF e cancelamento","Pelo app da Unimed","Só pelo corretor"],correta:1,explica:"O portal grupovital.com.br usa carteirinha + CPF do titular, sem senha. Mostre ao cliente na entrega da carteirinha para reduzir o pós-venda."},
{pergunta:"Qual o alerta de tabela de junho/2026?",opcoes:["Tudo válido para sempre","O Amigo Nacional estava válido até 31/05/2026 — reconfirmar valores com o Grupo Vital antes de cotar","Só o Flex mudou","Não há alerta"],correta:1,explica:"Flex válida até 30/09/2026, Pleno até 31/12/2026, Amigo até 31/05/2026. Em junho/2026, os valores do Amigo precisam ser reconfirmados antes da cotação."},
{pergunta:"Qual pilar da cultura PlaneCorp trata de cumprir prazos e nunca deixar o cliente no silêncio?",opcoes:["Clareza","Compromisso — prazo dado é prazo cumprido; fale com o cliente mesmo que seja para dizer que atrasou","Crescimento","Conhecimento"],correta:1,explica:"Compromisso: 'silêncio é o que mata a relação'. Se prometeu carteirinha em 15 dias, em 15 dias você fala com o cliente — mesmo para informar atraso."}
]}

];

/* ===================== EXAME DE CERTIFICAÇÃO — UNIMED ADESÃO VITAL (30 perguntas) ===================== */
const EXAME_UNIAD=[
{pergunta:"O que é sinistralidade?",opcoes:["O número de clientes","A razão entre o que a operadora paga em procedimentos e recebe em mensalidades — define o reajuste do ano seguinte","O valor da taxa de adesão","O teto de copart."],correta:1,explica:"Sinistralidade alta = reajuste alto. Por isso a Unimed seleciona quem entra, mantendo o reajuste do Adesão em ~8% a 10,5%."},
{pergunta:"No Coletivo por Adesão, o vínculo do cliente é com:",opcoes:["Uma empresa (CNPJ)","Uma entidade de classe (sindicato, conselho ou associação)","Nenhum","A operadora direto"],correta:1,explica:"O Adesão é PF vinculada a entidade de classe, a partir de 1 vida, até 40% mais barato que o PF."},
{pergunta:"Existe portabilidade no Adesão Unimed Curitiba?",opcoes:["Sim","NÃO — há redução/aproveitamento de carência (negociação comercial), não portabilidade ANS","Só no Amigo","Sempre"],correta:1,explica:"No Adesão não há portabilidade. A Unimed oferece aproveitamento de carência. Não prometa portabilidade."},
{pergunta:"Quando o contrato está realmente vigente?",opcoes:["Na FIC","Quando sai a carteirinha","No pagamento da taxa","Na DPS"],correta:1,explica:"Até a carteirinha sair é apenas intenção de compra. Nunca diga 'pode usar' antes da emissão."},
{pergunta:"Quanto mais barato o Adesão é vs. o Pessoa Física?",opcoes:["10%","Até 40%, com a mesma cobertura e rede","O dobro","Igual"],correta:1,explica:"Até 40% mais barato que o PF — mesmo produto, canal diferente."},
{pergunta:"Qual o diferencial de IRPF do Adesão sobre o PME?",opcoes:["Nenhum","No Adesão o titular deduz integralmente a mensalidade no IRPF; no PME não","O PME deduz mais","Ambos deduzem"],correta:1,explica:"No PME quem paga é a empresa; no Adesão (como no PF) o titular deduz integralmente — argumento forte."},
{pergunta:"Cliente do PF Unimed Curitiba pode migrar para o Adesão Unimed?",opcoes:["Sim","Não (o do PME Unimed pode)","Só médicos","Sempre"],correta:1,explica:"O PF Unimed não migra para o Adesão Unimed. O cliente do PME Unimed, sim."},
{pergunta:"O que é o Grupo Vital?",opcoes:["Uma operadora","Uma das 5 plataformas autorizadas a comercializar o Adesão da Unimed Curitiba (parceira da PlaneCorp)","Um hospital","Um conselho"],correta:1,explica:"O Grupo Vital é a administradora/plataforma. Apresente ao cliente como 'a administradora do plano'."},
{pergunta:"Em quais cidades o SOS Unimed tem cobertura?",opcoes:["Toda a RM","Apenas Curitiba, Araucária, Pinhais e São José dos Pinhais","Todo o PR","Nacional"],correta:1,explica:"SOS restrito a 4 cidades. Não venda o adicional para clientes fora dessa área."},
{pergunta:"Qual a 'grande sacada' do Plano Pleno?",opcoes:["Não tem porta de entrada","Pediatria, Oftalmologia e Ginecologia acessadas direto com qualquer médico, mesmo com a porta APS","É nacional","Não tem copart."],correta:1,explica:"Diferente do Hapvida Clinipam (porta única), o Pleno libera 3 especialidades direto — mata a objeção de 'ficar preso à porta de entrada'."},
{pergunta:"Qual é o carro-chefe do Adesão?",opcoes:["Pleno","Flex (livre acesso, maior rede do PR, mesma do PF Unimed por até 40% menos)","Amigo","Dental Uni"],correta:1,explica:"O Flex é livre acesso na maior rede do PR — substitui Bradesco/SulAmérica/Amil."},
{pergunta:"Quem pode contratar o Plano Amigo?",opcoes:["Qualquer liberal","Apenas Médicos e Acadêmicos de Medicina (via Simepar)","Servidores","Professores"],correta:1,explica:"O Amigo (nacional, 25% copart.) é restrito a médicos e acadêmicos de medicina."},
{pergunta:"Dentro das APS do Pleno, a coparticipação é:",opcoes:["50%","Isenta na maioria (exceto biópsia/punção de pele e papanicolau, cuja análise externa cobra)","25%","Sempre cobrada"],correta:1,explica:"Procedimentos dentro das APS são isentos. Exceções: análises externas (biópsia de pele, papanicolau)."},
{pergunta:"Qual o custo do Dental Uni?",opcoes:["R$ 50/vida","R$ 19,90 por vida/mês — exclusivo do Adesão","R$ 100","Grátis"],correta:1,explica:"Dental Uni: R$ 19,90/vida/mês, exclusivo do Adesão. Ofereça em toda venda."},
{pergunta:"Qual hospital infantil é o destaque da rede?",opcoes:["Vita","Pequeno Príncipe — maior pediátrico exclusivo da América Latina","Santa Casa","XV"],correta:1,explica:"Pequeno Príncipe (referência da América Latina), N.S. das Graças e Menino Deus (24h), Instituto da Criança e Erastinho."},
{pergunta:"O Aero Unimed custa quanto e cobre o quê?",opcoes:["R$ 50, regional","R$ 2,50/mês, UTI aérea em qualquer lugar do Brasil","Grátis em tudo","Só Curitiba"],correta:1,explica:"R$ 2,50/mês por vida (todos os produtos), translado aéreo de UTI nacional. Barato e gera tranquilidade — sempre ofereça."},
{pergunta:"Um advogado (OAB) entra por qual entidade e a quais planos?",opcoes:["Simepar / Amigo","Genesis Profissionais Liberais / Flex e Pleno","ASPP / Flex","Cref"],correta:1,explica:"Profissionais com registro em conselho entram pela Genesis Profissionais Liberais, com Flex e Pleno."},
{pergunta:"Policial e bombeiro são elegíveis pelo ASPP?",opcoes:["Sim","Não — têm sindicato próprio com plano específico","Só policiais","Só bombeiros"],correta:1,explica:"Exceção ASPP: policial e bombeiro não são elegíveis. O ASPP atende servidor municipal, estadual e federal exceto esses."},
{pergunta:"Até que idade um filho solteiro entra como dependente?",opcoes:["18","24","Até 42 anos incompletos","Sem limite"],correta:2,explica:"Filho solteiro: até 42 anos incompletos (Adesão Vital). Cônjuge: até 59 completos. Filho inválido: sem limite."},
{pergunta:"Quais são vendas vetadas?",opcoes:["Só idosos","Vidas acima de 59 anos completos, gestantes, oriundo do PF Unimed e migração interna do Adesão","Só gestantes","Nenhuma"],correta:1,explica:"As 4 vedações: 60+ anos, gestantes, cliente do PF Unimed e migração entre contratos do próprio Adesão."},
{pergunta:"Quanto pode ser a taxa de adesão?",opcoes:["100% da mensalidade","Até 90% da 1ª mensalidade (única vez); a 1ª mensalidade vence 30-60 dias depois","50%","Não há"],correta:1,explica:"Taxa até 90% da 1ª mensalidade, na contratação. A 1ª mensalidade vence 30-60 dias depois, sem coincidir."},
{pergunta:"Na vigência PROGRAMADA, quando o plano começa?",opcoes:["Qualquer dia","Sempre dia 1º, boleto cheio (recepção até dia 15 do mês anterior)","Dia 19","Imediato"],correta:1,explica:"Programada = dia 1º, boleto cheio. Antecipada = a qualquer tempo (10-15 dias úteis), boleto pro-rata + 30 dias."},
{pergunta:"O que é o Benefício Família?",opcoes:["Desconto familiar","Morte do titular (<70 anos na adesão, +6 meses no plano): dependentes ficam 1 ano isentos de mensalidade e copart.","Plano infantil","Adicional pago"],correta:1,explica:"É um 'seguro de vida embutido': 1 ano de plano gratuito aos dependentes legais em caso de morte do titular."},
{pergunta:"Quais carências NÃO reduzem por congênere?",opcoes:["Consultas","Terapias (180d), Parto (300d) e CPT (24 meses)","Urgência","Todas reduzem"],correta:1,explica:"Reduz até 180 dias na maioria. Não reduzem: terapias, parto e CPT. Exige 6 meses+ no plano anterior, sem inadimplência."},
{pergunta:"Cliente inadimplente no plano anterior reduz carência?",opcoes:["Sim","Não — mesmo com anos de plano, se saiu inadimplente perde o aproveitamento","Metade","Depende"],correta:1,explica:"Inadimplência elimina o direito à redução. Pede-se os 3 últimos boletos pagos como prova."},
{pergunta:"A CPT restringe o quê?",opcoes:["Tudo da doença","Apenas alta complexidade ligada à doença declarada, por 24 meses","Consultas","Urgência"],correta:1,explica:"CPT = só alta complexidade ligada à doença declarada, por 24 meses. Consultas, exames e medicamentos seguem cobertos desde o dia 1."},
{pergunta:"O que é a ADMEX?",opcoes:["Um plano","A 2ª entrevista (médico da Unimed) que avalia a DPS e emite a CPT — última etapa antes da carteirinha","O app","A taxa"],correta:1,explica:"A ADMEX é a tele-entrevista por token, só quando a DPS levanta condição relevante. Sem agendamento no prazo, o processo trava."},
{pergunta:"Na FIC, de quem são o e-mail e o WhatsApp?",opcoes:["Do corretor","Sempre do TITULAR (cliente)","Do Grupo Vital","Tanto faz"],correta:1,explica:"E-mail e WhatsApp do cliente, sempre. E é proibido agendar a videochamada da DPS em nome do cliente."},
{pergunta:"Qual a pergunta-chave para identificar um lead de Adesão?",opcoes:["Quanto ganha?","'Você ou o titular tem registro em conselho de classe? É professor? Servidor público?'","Sua idade?","Tem CNPJ?"],correta:1,explica:"20-30% dos leads PME poderiam estar no Adesão (mais barato). Sempre pergunte sobre conselho, professor ou servidor."},
{pergunta:"Sobre o reajuste futuro, o corretor deve:",opcoes:["Prometer um percentual","Mostrar o histórico (média 8%-10,5%) sem cravar número futuro","Garantir 0%","Não falar"],correta:1,explica:"Reajuste é variável. Mostre o histórico controlado (nunca passou de 12%) mas nunca prometa percentual futuro."}
];
window.CURSOS={
  basico:{partes:BASICO},
  parana:{partes:PARTES},
  unimed:{partes:UNIMED},
  hapvida:{partes:HAPVIDA},
  amil:{partes:AMIL},
  sulamerica:{partes:SULA},
  uniad:{partes:UNIAD},
  crm:{partes:CRM}
};
window.CURSO=window.CURSOS.parana; /* compat */
window.EXAME={
  basico:EXAME_BASICO,
  parana:EXAME_PARANA,
  unimed:_buildExam(window.CURSOS.unimed),
  hapvida:_buildExam(window.CURSOS.hapvida),
  amil:_buildExam(window.CURSOS.amil),
  sulamerica:EXAME_SULA,
  uniad:EXAME_UNIAD,
  crm:EXAME_CRM
};

/* ===================== SEGMENTAÇÃO: DO ZERO AO AVANÇADO ===================== */
/* trilhas que não são operadoras: aparecem como botões na home (hub) */
const TRILHAS=[
  {id:"basico",nome:"Do básico ao avançado",sub:"Formação completa do consultor",tag:"Do zero ao avançado",ativo:true,sigla:"BA",curso:true},
  {id:"crm",nome:"Sistema de CRM",sub:"Pipedrive · do zero ao domínio",tag:"Do zero ao avançado",ativo:true,sigla:"CRM",curso:true},
  {id:"transicao",nome:"Transição entre operadoras",sub:"Em breve",tag:"Do zero ao avançado",ativo:false,sigla:"TR"}
];
window.TRILHAS=TRILHAS;
