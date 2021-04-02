import React, { useEffect, useState } from "react";
import "../styles/termos.css";

function Termos() {
    return (
        <div>
           <div class="title-termos"> 
               <h2>Termos de uso</h2>
            </div> 
            <div class="subtitle-termos"> 
                Por favor, leia com atenção os Termos de Uso.
                <br />Ao se cadastrar como Usuário na <span style={{color:"rgb(237,125,49)"}}>onservicebr.com</span>, você <span style={{color:"rgb(237,125,49)"}}>ESTÁ DE ACORDO COM OS TERMOS DE USO</span>.
                <br />A recusa destes Termos de Uso impedirá que você seja divulgado ou contrate Serviços pelo nosso Website. 
                <br /> <br />
            </div>
            <div class="paragrafos-termos">
                &emsp;&emsp;Ao assinar eletronicamente o presente documento ou clicar em “Eu aceito” durante o cadastro como Usuário, o(a) Usuário(a) atesta que:
                <div class="row itens-termos">
                    <div class="column item-termos">
                        i.
                    </div>
                    <div class="column text-item-termos">
                        Leu e compreendeu todos os campos abaixo;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        ii.
                    </div>
                    <div class="column text-item-termos">
                        Lhe foi dada a oportunidade de, se necessário, consultar terceiros, como um advogado, para aconselhamento ou esclarecimento dos presentes termos;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        iii.
                    </div>
                    <div class="column text-item-termos">
                    Está judicialmente capaz de concordar e cumprir com todos os termos deste documento.
                    </div>
                </div>
                <p></p>
                <p>&emsp;&emsp;As diretrizes abaixo apresentam condutas e circunstâncias que podem ocasionar sanções, incluindo a perda de acesso à plataforma da OnService. Recomendamos uma leitura completa deste documento. Sempre haverá eventos imprevistos que também poderão levar à aplicação de sanções, de modo que tais diretrizes serão atualizadas frequentemente.</p>
                <p>&emsp;&emsp;No presente documento, o termo “<span style={{color:"rgb(237,125,49)"}}>Profissional Parceiro</span>” refere-se a pessoa que divulga seu contato e seu trabalho, denominado como “<span style={{color:"rgb(237,125,49)"}}>Serviço</span>”, na plataforma da OnService. “<span style={{color:"rgb(237,125,49)"}}>Contratante</span>” é uma pessoa cadastrada na plataforma que possui intuito de contratar um Serviços. “<span style={{color:"rgb(237,125,49)"}}>Usuário</span>” é o termo utilizado para referir-se à uma pessoa que usa a plataforma, seja para anunciar ou contratar um Serviços. Os Termos de uso são subdivididos em “<span style={{color:"rgb(237,125,49)"}}>Cláusulas</span>”.</p>
                <p><br /><span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>1. INTRODUÇÃO E DISPOSIÇÕES GERAIS</span></p>
                <p>1.1. Bem-vindo à OnService! Estes são os Termos de Uso, os quais regem o acesso e uso, dentro do Brasil, dos Serviços prestados através de aplicação tecnológica, sítios da Internet e conteúdos relacionados aos Usuários que decidam anunciar ou contratar os Serviços da OnService, disponibilizados pela OnService Ltda. (“OnService”), inscrita no CNPJ/MF sob o nº 18.033.552/0001-61, com sede na Rua Sansão Alves dos Santos, nº 400, Bairro Cidade Monções, CEP 04571-090, Cidade e Estado de São Paulo, ou por qualquer de suas afiliadas. A OnService é proprietária da plataforma OnService e de todo o conteúdo hospedado sob o domínio  <span style={{color:"rgb(237,125,49)"}}>onservicebr.com.</span> Todos os direitos reservados.</p>
                <div class="sub-clausulas-termos">
                    <p>1.1.1. POR FAVOR, LEIA COM ATENÇÃO TODAS AS CLÁUSULAS ANTES DE ANUNCIAR OU CONTRATAR OS SERVIÇOS.</p>
                </div>
                <p>1.2. ACEITAÇÃO DOS TERMOS DE USO. AO SE CADASTRAR E UTILIZAR CONTINUAMENTE OS SERVIÇOS, O USUÁRIO DECLARARÁ TER LIDO, ENTENDIDO E ACEITO OS TERMOS DE USO. CASO, A QUALQUER TEMPO, O USUÁRIO NÃO CONCORDE COM OS TERMOS DE USO, DEVERÁ CESSAR IMEDIATAMENTE A UTILIZAÇÃO DA PLATAFORMA DIGITAL DA ONSERVICE.</p>
                <div class="sub-clausulas-termos">
                    <p>1.2.1. Cláusulas adicionais poderão se aplicar a determinados Serviços, tais como condições para categorias específicas, eventos, regulamentos, atividades, promoções em particular ou ações de recompensas, e essas Cláusulas adicionais serão divulgadas em relação aos respectivos Serviços. As Cláusulas adicionais são complementares e consideradas partes integrante destas Cláusulas para os efeitos dos respectivos Serviços. As Cláusulas adicionais prevalecerão sobre estas Cláusulas em caso de conflito somente com relação àquilo que forem específicas.</p> </div>
                <p>1.3. O Profissional Parceiro autoriza a OnService a enviar notificações administrativas no aplicativo, por ligação telefônica, E-mail, SMS, WhatsApp, em uma publicação em seu site ou por qualquer outro meio de comunicação disponível com conteúdo de natureza informativa e promocional relacionado aos Serviços.</p>
                <p>1.4. A OnService reserva o direito de realizar alterações e atualizações nas Cláusulas do Código de Conduta, a qualquer momento, sem a necessidade de aviso prévio. Em caso de alterações de Cláusulas que restrinjam direitos dos Profissionais Parceiros, a OnService poderá comunicar tal alteração, ao seu critério, através dos meios de comunicação. Todavia, esta liberalidade não afasta a responsabilidade do Profissional Parceiro de verificar periodicamente o Código de Conduta. Caso o Profissional Parceiro não concorde com as alterações das Cláusulas, deverá cancelar sua conta e cessar toda e qualquer utilização dos Serviços. O fato de o Profissional Parceiro continuar a acessar ou usar os Serviços após essa postagem representa seu consentimento em vincular-se às Cláusulas alteradas.</p>
                <p><br /><span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>2. OBRIGAÇÕES E NORMAS PARA BOA CONVIVÊNCIA</span></p>
                <p>2.1. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Trate todas as pessoas com respeito.</span> Nossa comunidade é de ampla diversidade e, certamente, você encontrará pessoas diferentes e/ou com crenças não semelhantes às suas. As diretrizes desta seção auxiliam na promoção de interações positivas em todas as experiências.</p>
                <div class="sub-clausulas-termos">   
                    <p>2.1.1. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Respeito ao próximo.</span> Trate todos os usuários das plataformas da OnService do mesmo modo como você gostaria de ser tratado: com respeito. A forma como você usa as plataformas da OnService faz toda a diferença na segurança e no conforto das outras pessoas. Acima de tudo, lembre-se de que, ao usar as plataformas da OnService, você encontrará pessoas diferentes, tanto na aparência como no modo de pensar. Respeite essas diferenças. Nosso objetivo é que todos se sintam acolhidos e tenham uma experiência tranquila ao usar a plataforma da OnService.</p>
                    <p>Para isso, criamos normas que tratam de contato físico, violência e assédio, comportamento grosseiro e ameaçador, contato indesejado, discriminação e danos à propriedade. Nós analisaremos todos os relatórios de erro de execução e abuso que possam ter ocorrido durante a prestação de um Serviço, assim como outros relatos que possam indicar negligência, truculência ou algum tipo de desconforto e/ou constrangimento durante o uso das plataformas da OnService.</p>
                    <p>2.1.2. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Pontualidade e cordialidade.</span> Seja pontual ao agendar um Serviço ou orçamento, pois o tempo de todos tem o mesmo valor. A cordialidade também é essencial. Por isso, esperamos que você tenha sempre bom senso e consideração com os outros ao utilizar as plataformas da OnService, utilizando a mesma conduta que você teria em um espaço público.</p>
                    <p>2.1.3. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Contato físico.</span> Evite o contato físico de qualquer espécie durante um Serviço agendado a partir da visualização do profissional nas plataformas da OnService. Ferir ou tentar ferir outra pessoa não é permitido sob nenhuma hipótese.</p>
                    <p>2.1.4. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Contato posterior indesejado.</span> A comunicação deve terminar quando o Serviço contratado for concluído, a menos que haja um motivo legítimo, como para devolver um objeto perdido. Não é permitido enviar mensagens, entrar em contato por redes sociais, ligar, visitar ou tentar visitar uma pessoa após a conclusão de um Serviço contratado, salvo haja nova contratação.</p>
                    <p>2.1.5. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Violência e assédio.</span> Todos nós gostamos que nosso espaço pessoal e nossa privacidade sejam respeitados, e esse respeito é essencial. É permitido conversar. Porém, evite comentários sobre a aparência ou perguntas de cunho pessoal, identidade de gênero e orientação sexual. Condutas e comentários que possam causar desconforto são estritamente proibidos e podem levar ao banimento do Usuário. A OnService proíbe qualquer tipo de violência e assédio, que englobam contato físico ou verbal indesejado ou ainda o comportamento sexual sem consentimento explícito da outra pessoa. A lista a seguir apresenta alguns exemplos de condutas impróprias:</p>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        i.
                </div>
                    <div class="column text-item-termos">
                    	Empurrões ou contato físico indesejado;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        ii.
                    </div>
                    <div class="column text-item-termos">
                    	Assobios e piscadelas;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        iii.
                    </div>
                    <div class="column text-item-termos">
                    	Perguntas fora de contexto, como, por exemplo, as que envolvem o status de relacionamento;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        iv.
                    </div>
                    <div class="column text-item-termos">
                    	Discussões relacionadas à vida sexual;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        v.
                    </div>
                    <div class="column text-item-termos">
                    	Uso de linguagem explícita;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        vi.
                    </div>
                    <div class="column text-item-termos">
                    	Flertes de qualquer espécie.
                    </div>
                </div>
                <p></p>
                    <p>2.1.6. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Ameaças e comportamento grosseiro.</span> A OnService proíbe comportamentos agressivos, conflituosos e assediantes. Não use palavras ou gestos desrespeitosos, ameaçadores ou impróprios. Recomendamos evitar opiniões pessoais potencialmente polêmicas, como as relacionadas à religião e política.</p>
                    <p>2.1.7. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Discriminação.</span> Todas as experiências na plataforma da OnService devem transmitir tranquilidade e segurança. Não toleramos qualquer tipo de conduta discriminatória, especialmente com base em características como idade, cor da pele, deficiência, identidade de gênero, estado civil, nacionalidade, cor/raça, religião, orientação sexual ou outra característica que seja protegida por lei. É inaceitável se recusar a prestar Serviços ou avaliar outro usuário com base nessas características. Sabemos que é importante poder decidir quando e onde prestar Serviços. No entanto, exceto por motivos de segurança, é proibido recusar ou cancelar solicitações intencionalmente por discriminação.</p>
                    <p>2.1.8. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Danos à propriedade.</span> Danos à propriedade são sempre inaceitáveis. É proibido danificar a residência na qual o Serviço está sendo prestado, quebrar ou vandalizar propriedade privada, executar propositalmente um Serviço mal feito, ou danificar alguma ferramenta que não te pertence por negligência. O Usuário é responsável pelo custo de reparo caso cause danos a alguma propriedade de outro Usuário.</p>
                </div> 
                <p>2.2. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>contribua com a segurança de todos.</span> Somos uma equipe extremamente empenhada em ajudar a criar experiências mais seguras para todos e, pela sua segurança, criamos este documento Termos de Uso. Um ambiente seguro requer a colaboração de todos. Por isso, temos normas para compartilhamento de contas, idade mínima de titulares de conta e muito mais.</p>
                <div class="sub-clausulas-termos">    
                    <p>2.2.1. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Seus comentários são importantes.</span> Teve uma experiência ruim? Quer fazer um elogio? Compartilhe com a gente. Trabalhamos constantemente para aprimorar nossos padrões, e cada comentário é muito importante para mantermos tais padrões à medida que nossa tecnologia evolui. Ao final de cada Serviço contratado, avalie sua experiência como Contratante. Comentários honestos ajudam a garantir que todos se responsabilizem por suas próprias condutas. Tal responsabilidade ajuda a criar um ambiente respeitoso e seguro. Se algo acontecer e você sentir a necessidade de reportar, relate na aba “CONTATO” para que nossa equipe de suporte possa entrar em contato com você. Em caso de emergência ou perigo imediato, alerte o serviço de emergência ou as autoridades locais antes de avisar a OnService.</p>
                    <p>2.2.2. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Compartilhamento de conta.</span> É proibido compartilhar contas da OnService. Para usar qualquer plataforma da OnService, você precisa se registrar e manter a conta ativa. Por motivos de segurança, não deixe que outra pessoa use sua conta e nunca compartilhe informações pessoais, como nome de usuário, senha e dados biométricos. Caso o Usuário tenha solicitado um Serviço para outra pessoa através da sua conta nas plataformas da OnService, o Usuário será responsável pelo comportamento do terceiro durante a execução do Serviço.</p>
                    <p>2.2.3. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Menores de 18 anos.</span> É necessário ter 18 anos completos para ter uma conta da OnService. Titulares de conta não podem solicitar Serviços para menores de 18 anos que não estarão acompanhados de um adulto durante o ato do Serviço. Esta seção se aplica a todos os casos, a menos que haja uma divergência expressa nas Cláusulas dos Termos de Uso ou em outras políticas da OnService.</p>
                    <p>2.2.4. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Profissionais Parceiros extras.</span> Nos Serviços encontrados pelas plataformas da OnService, apenas o Profissional Parceiro contatado deverá se apresentar no local combinado, a menos que seja previamente acordado e registrado em conversa, entre as partes, a presença de terceiros para auxiliar na execução dos Serviços. Em Serviços contratados pela plataforma da OnService, o Profissional Parceiro será responsável pelo comportamento e Serviço de qualquer terceiro que compareça para auxiliar na realização do Serviço contratado.</p>
                    <p>2.2.5. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Câmeras e outros aparelhos de gravação de vídeo e áudio.</span> Todos os usuários das plataformas da OnService podem gravar vídeos e imagens durante a prestação do Serviço solicitado, integralmente ou em parte, na medida estipulada pela lei para documentar problemas que desejam relatar à OnService ou às autoridades, desde que haja o consentimento e/ou a notificação de todos os presentes na gravação. É proibido transmitir imagens, áudios ou vídeos de outras pessoas.</p>
                    <p>2.2.6. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Ferramentas e equipamentos adequados.</span> Por motivos de segurança, todos os Profissionais Parceiros deverão utilizar equipamentos de segurança e ferramentas capacitadas para realizar cada Serviço necessário sem nenhum tipo de problema ou dano a qualquer pessoa ou propriedade privada, sempre cumprindo com as normas legais de segurança e manutenção do setor.</p>
                    <p>2.2.7. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Emergências públicas.</span> A OnService pode tomar medidas adicionais a fim de preservar a segurança da nossa plataforma durante emergências públicas, o que inclui, entre outros incidentes, catástrofes naturais, emergências de saúde e crises públicas. Se uma autoridade notificar a OnService sobre alguém que representa uma ameaça à saúde pública, a conta deste individuo poderá ser desativada até que seja comprovadamente seguro permitir que esta pessoa volte a usar o nosso site e aplicativo. Da mesma forma, podemos impedir indivíduos em uma cidade ou região inteira de usar a plataforma parcial ou integralmente para cumprir toda e qualquer orientação de autoridades competentes durante um período de emergência de saúde pública, desastre natural ou outra situação de crise pública, ou quando a disponibilidade continuada da plataforma da OnService puder representar um perigo claro e evidente.</p>
                    <p></p>
                </div>
                <p>2.3. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Cumpra as leis.</span> Temos como compromisso o cumprimento de todas as leis e normas aplicáveis, com a finalidade de respeitar o ordenamento jurídico e de conquistar a sua confiança. Assim, esperamos que cada Usuário da nossa plataforma faça a sua parte e cumpra, também, com as leis e normas aplicáveis, as quais são baseadas em leis e regulamentações que todos os Usuários precisam seguir. É estritamente proibido usar as plataformas da OnService para cometer ou incitar o cometimento de qualquer tipo de crime, como transporte de drogas, lavagem de dinheiro, tráfico humano ou de drogas ou exploração sexual de crianças, ou para violar toda e qualquer outra lei. Ao usar as plataformas da OnService, todos serão responsáveis por conhecer e seguir o ordenamento jurídico nacional.</p>
                <div class="sub-clausulas-termos">
                    <p>2.3.1. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Drogas e bebidas alcoólicas.</span> O Profissional Parceiro é estritamente proibido de realizar Serviços sob o efeito de qualquer tipo de droga, seja ela lícita ou ilícita. É proibido o consumo de drogas e o porte de bebidas alcoólicas abertas durante a execução de um Serviço. Se um Profissional Parceiro encontrar o Contratante embriagado ou fora de si, ele poderá recusar a prestação do Serviço para sua própria segurança, devendo se comunicar com a OnService para esclarecer o ocorrido. Caso você seja um Contratante e identifique que o Profissional Parceiro contratado se encontra em estado de embriaguez ou sob efeito de drogas, interrompa a realização do Serviço imediatamente e relate sua experiência à OnService.</p>
                    <p>2.3.2. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Proibição de armas.</span> Além de Profissionais Parceiros e seus acompanhantes, usuários e seus acompanhantes são proibidos de portar armas de fogo ou qualquer outro tipo de arma (ex.: facas e tasers) durante a execução de um Serviço, conforme a Lei Aplicável.</p>
                    <p>2.3.3. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Fraudes e atividades ilegítimas.</span> Além de serem perigosas, fraudes podem prejudicar a confiança. É proibido falsificar informações ou assumir a identidade de outra pessoa durante o cadastro ou a checagem de antecedentes. É fundamental apresentar informações corretas ao relatar incidentes, criar e acessar suas contas da OnService e contestar alguma ação da empresa. Exemplos de atividades fraudulentas:</p>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        i.
                </div>
                    <div class="column text-item-termos">
                    	Enviar documentos adulterados ou modificados;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        ii.
                    </div>
                    <div class="column text-item-termos">
                        Reportar Serviços fantasmas que nunca foram realizados;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        iii.
                    </div>
                    <div class="column text-item-termos">
                    	Agendar um Serviço sem a intenção de realizá-lo;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        iv.
                    </div>
                    <div class="column text-item-termos">
                    	Agendar um Serviço sem a intenção de realizá-lo;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        v.
                    </div>
                    <div class="column text-item-termos">
                    	Auto avaliar-se;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        vi.
                    </div>
                    <div class="column text-item-termos">
                        Solicitar ou agendar propositalmente Serviços fraudulentos ou falsificados;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        vii.
                </div>
                    <div class="column text-item-termos">
                    	Declarar que executou um Serviço sem tê-lo feito;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        viii.
                    </div>
                    <div class="column text-item-termos">
                    	Cobrar mais caro pelo mesmo Serviço que o combinado previamente;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        ix.
                    </div>
                    <div class="column text-item-termos">
                    	Agir com intenção de prejudicar ou manipular o funcionamento normal das plataformas da OnService;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        x.
                </div>
                    <div class="column text-item-termos">
                    	Criar contas duplicadas indevidas;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        xi.
                    </div>
                    <div class="column text-item-termos">
                    	Falsificar documentos, registros ou outros dados com propósitos fraudulentos.
                    </div>
                </div>
                <p></p>
                <p>2.3.4. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Solicitação de Serviços fora da plataforma e outras recomendações.</span> Para maior segurança nas execuções de Serviços, é aconselhável, sempre que um Contratante precisar de um Serviço, entrar em contato através das plataformas da OnService, pois o site contabiliza seu contato com o Profissional Parceiro e isso poderá ajudar em problemas futuros. Por isso, recomendamos que o Contratante nunca solicite um Serviço sem antes utilizar a plataforma como meio de redirecionamento para o contato do Profissional Parceiro, bem como exija a apresentação de documento pessoal (RG e CPF) do Profissional Parceiro quando na execução do Serviço. Aos Profissionais Parceiros, atentem-se se o Contratante entra em contato utilizando a mensagem pronta utilizada em nossas plataformas como forma de identificação da origem do contato. Jamais use a marca registrada nem a propriedade intelectual da OnService sem permissão, pois isso poderá prejudicar a empresa e a marca. </p>
                <p>2.3.5. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Avaliações.</span> Na nossa plataforma, nossos Profissionais Parceiros poderão receber avaliações que, em conjunto, são representadas por uma nota de 0 a 5 estrelas, sendo 0 (zero) como péssimo atendimento e 5 (cinco) excelente. Esse sistema de avaliações colabora para aumentar a responsabilidade e gerar um ambiente respeitoso, seguro e transparente para todos. Profissionais Parceiros poderão ver as avaliações e comentários de seus Contratantes, os quais podem escolher seus nomes públicos, sendo responsáveis por revelar ou não suas identidades na plataforma. Profissionais Parceiros com nota abaixo de 3 durante 2 meses consecutivos serão banidos da plataforma da OnService. Informaremos se sua avaliação estiver abaixo dessa média ou se ela estiver se aproximando desse limite, com informações que te ajudem a melhorá-la.</p>
                <p>A avaliação dos Profissionais Parceiros será feita através da média aritmética de notas que esse Profissional Parceiro receber pelos Serviços prestados. Para que seja mantida uma boa avaliação, recomendamos tratar todas as pessoas com o devido respeito e educação. Nossos Profissionais Parceiros normalmente prestam um atendimento de excelência aos Usuários da plataforma da OnService, sendo a maioria desses Usuários pessoas educadas e respeitosas, tornando assim, a maior parte dos Serviços prestados isentos de problemas. Porém, sabemos que algumas vezes acontecem contratempos. Por isso, levamos em consideração uma média das suas avaliações.</p>
                <p>Caso um Profissional Parceiro identifique que um erro ocasionou a perda de acesso a sua conta, entre em contato imediatamente com a equipe de suporte da OnService através da aba “<span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>CONTATO.</span>”. Caso um Profissional Parceiro perca o acesso a sua conta da OnService, ele não poderá se recadastrar em uma nova conta, pois seu CPF será bloqueado. Vale ressaltar que é explicitamente proibido se cadastrar com dados de outra pessoa, resultando em banimento imediato da plataforma.</p>
                <p>2.3.6. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Aceitação de solicitações.</span> Caso você seja um Profissional Parceiro e não quiser aceitar solicitações de Serviços, basta negar educadamente e expor o motivo ao Contratante. Isso ajudará a manter o bom funcionamento do sistema para todos os usuários e um clima amigável entre os Contratantes e os Profissionais Parceiros.</p>
                </div>
            <p>2.4 <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Uso da plataforma.</span> Perder o acesso às plataformas da OnService pode atrapalhar sua vida e seus negócios. Por isso, acreditamos ser importante ter normas claras que exponham as circunstâncias que possam levar à perda do acesso às plataformas da OnService. A OnService recebe comentários por vários canais, examina os relatos de violação dos Termos de Uso enviados à nossa equipe de suporte e pode iniciar uma investigação com uma equipe especializada. No caso de informações sobre algum comportamento considerado problemático, poderemos entrar em contato com o Usuário a fim de analisar o caso. Poderemos, a nosso critério, desativar a conta desse Usuário durante essa análise e sempre que houver indicações de possíveis violações aos nossos Termos de Uso.</p>
            <p>O Usuário poderá perder o acesso à sua conta da OnService caso não siga qualquer uma de nossas diretrizes. Isso poderá incluir certas ações fora da plataforma, se determinarmos que elas são uma ameaça à segurança da comunidade da OnService, aos nossos Profissionais Parceiros e aos Contratantes, ou prejudicam a marca, a reputação ou os negócios da OnService. Todo e qualquer comportamento que envolva violência, assédio, discriminação ou atividade ilegal ao usar as plataformas da OnService poderá resultar na perda imediata do acesso a elas. Além disso, caso haja envolvimento de autoridades policiais/jurídicas, nós cooperaremos com a investigação de acordo com nossas diretrizes para atendimento a exigências de autoridades policiais/jurídicas.</p>
            <p>Finalmente, por motivos de segurança, todo e qualquer Profissional Parceiro que quiser usar as plataformas da OnService terá que passar por um processo de cadastro, que inclui a checagem de antecedentes criminais. Um Profissional Parceiro perderá o direito de se promover nas plataformas da OnService se a checagem de antecedentes ou outra verificação revelar uma violação dos Termos de Uso da OnService ou de outros critérios exigidos pelos reguladores locais.</p>
            <div class="sub-clausulas-termos">
                <p>2.4.1. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Serviços.</span> Você reconhece que a OnService não fornece bens. Seu Serviço se limita a divulgação de Profissionais Parceiros, previamente selecionados, para desburocratizar, disseminar e facilitar a contratação. A OnService não possui nenhum vínculo empregatício com nenhuma das partes, não sendo, então, responsável por qualquer comunicação direta entre as partes. Sendo assim, a OnService é apenas um canal de aproximação entre as partes, sem ter nenhuma responsabilidade em relação ao acordo de prestação de Serviços que pode vir a ser realizado. É de conhecimento dos Usuários que a relação entre a OnService e os Usuários se encera quando o Profissional Parceiro é contatado pelo Contratante. Além disso, os dados que serão disponibilizados pelo Profissional Parceiro serão de acesso do Contratante, o qual tem a responsabilidade e o dever de verificar se o Profissional Parceiro é, de fato, a pessoa que foi anunciada na plataforma e contratada. O Profissional Parceiro também tem o direito de solicitar a comprovação da identidade do Contratante. Se alguma das partes se negar a comprovar a identidade, o Serviço poderá ser cancelado.</p>
                <p>É de responsabilidade do Contratante e do Profissional Parceiro acertarem os detalhes da contratação, como dia, horário, local e preço.  O site, bem como o aplicativo, foi desenvolvido para tratar de questões anteriores e posteriores ao atendimento, não garantindo que os Serviços serão livres de erros ou ininterruptos. Ao contratar um Serviço pela plataforma, todo risco será do Usuário dentro da Lei brasileira. A qualidade dos Serviços (em todos os aspectos, desde o tempo gasto, o material utilizado, a organização do local ao final do Serviço, dentre outros, quando aplicáveis) e dos anúncios presentes na plataforma são de inteira responsabilidade do Profissional Parceiro. Poderão ser disponibilizados links para outros sites, mas a OnService não tem qualquer vínculo com eles. A OnService ressalva que é apenas plataforma para intermédio dos Serviços.</p>
                <p>Quando e/ou se achar necessário, a OnService pode, a qualquer momento, momentaneamente ou permanentemente, modificar ou encerrar o funcionamento da plataforma, sem ter qualquer responsabilidade ou obrigação para com os Usuários.</p>
                <p>2.4.2. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Uso dos Serviços.</span> Para fazer uso da plataforma, será necessário fazer uma conta pessoal, para a qual será necessário fornecer dados pessoais. Esses dados devem ser verdadeiros, atuais e completos. Estes serão exclusivamente utilizados para finalidades da plataforma. É obrigatório que o Usuário tenha idade igual ou superior a 18 anos e CPF válido. É dever do Usuário manter os dados atualizados, completos e corretos, bem como manter a confidencialidade do nome de usuário e senha. Ao criar uma conta, o Usuário é responsável por toda atividade realizada nela e é totalmente responsável por todo conteúdo que inserir na plataforma.</p>
                <p>Para fazer uso da plataforma, será necessário fazer uma conta pessoal, para a qual será necessário fornecer dados pessoais. Esses dados devem ser verdadeiros, atuais e completos. Estes serão exclusivamente utilizados para finalidades da plataforma. É obrigatório que o Usuário tenha idade igual ou superior a 18 anos e CPF válido. É dever do Usuário manter os dados atualizados, completos e corretos, bem como manter a confidencialidade do nome de usuário e senha. Ao criar uma conta, o Usuário é responsável por toda atividade realizada nela e é totalmente responsável por todo conteúdo que inserir na plataforma.</p>
                <p>O Usuário atesta que é detentor e produtor de todo o conteúdo que é disponibilizado por ele e detém todos os direitos, autorizações, permissões e licenças para compartilhá-lo. Ao disponibilizar conteúdo na plataforma da OnService, o Usuário fornece a licença dos direito autorais sobre o material em nível mundial, perpétua, irrevogável, transferível, isenta de royalties, e com direito a sublicenciar, usar, copiar, modificar, criar obras derivadas, distribuir, publicar, exibir, executar em público e, de qualquer outro modo, explorar esse conteúdo do Usuário em todos os formatos e canais de distribuição hoje conhecidos ou desenvolvidos no futuro, sem ulterior aviso ou consentimento, e sem necessidade de pagamento ao Usuário ou a qualquer outra pessoa ou entidade. Para fazer uso da plataforma, é necessário possuir um aparelho compatível, bem como uma rede de dados. Ambos são de responsabilidade do Usuário e a OnService não assumirá nenhum custo associado a nenhum deles.</p>
                <p>A OnService não permite, em hipótese nenhuma, que seja divulgado na plataforma qualquer material de cunho preconceituoso, desrespeitoso, discriminatório, injurioso, calunioso, difamatório ou que infrinja a dignidade, honra, moral, integridade, imagem ou qualquer outro direito de outra pessoa, grupo, etnia ou grupo religioso. A plataforma repudia qualquer reprodução de ódio, abuso, ameaça e obscenidade, proibindo que os Usuários a utilizem para esses tipos de comportamento. A OnService também proíbe a disseminação de vírus, ferramenta ou recurso que possa comprometer o funcionamento da plataforma ou compartilhamento de spam ou mensagens eletrônicas em massa (como correntes, por exemplo).</p>
                <p>A plataforma não pode ser utilizada em discordância ou conflito com nenhuma lei ou jurisdição. Ao concordar com esses Termos de Uso e ao utilizar a plataforma, está firmado o acordo de que você agirá conforme a lei e de boa fé. Caso o Usuário utilize de algum recurso que comprometa a tecnologia, operação ou o funcionamento do aplicativo, ele será responsabilizado e deverá arcar legalmente e financeiramente para corrigir os danos, sejam morais, sejam materiais ou de qualquer outro tipo.</p>
                <p>A OnService reserva-se também o direito de banir qualquer Usuário, sem aviso prévio e sem justificar-se, se interpretar que tal medida deve ser tomada. A OnService não tem o objetivo de não assumir responsabilidades ou excluir direitos do consumidor, uma vez que, de acordo com a Lei Aplicável, não podem ser limitados ou alterados. Para fazer qualquer tipo de contato com a OnService, deve-se utilizar canal de contato oficial (endereço de correio eletrônico) ou a aba “<span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>CONTATO</span>” presente no site e aplicativo. Se feito de outra forma, a mensagem será considerada inválida e ineficaz.</p>
                <p>2.4.3. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Pagamento pelos Serviços.</span> O valor cobrado é estipulado e estabelecido inteiramente por parte do Profissional Parceiro. O Profissional Parceiro tem o direito de estabelecer, remover e/ou revisar o custo relativo ao Serviço realizado, e pode incluir cobranças, tarifas, taxas, impostos e/ou contribuições governamentais. A OnService não exerce nenhum tipo de influência no preço. Após a realização do Serviço combinado pelas partes, o pagamento deve ser realizado diretamente ao Profissional Parceiro, conforme opções disponibilizadas por ele no ato da contratação. Esse valor é final e não reembolsável, a menos que venha a ser determinado posteriormente pela OnService devido a alguma adversidade. Indicamos que os valores sobre a contratação de qualquer Serviço sejam negociados por meio do WhatsApp, para que não restem dúvidas na hora do pagamento.</p>
                <p>Quaisquer reclamações ou questionamentos são de responsabilidade legal e processual do Usuário. A OnService, nesses casos, não irá se opor a denunciar qualquer infringência da lei praticada por terceiros, disponibilizando todo tipo de material a qual for solicitada, de modo a não ser mais parte de lide, litígio ou disputa.</p>
                <p>2.4.4. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Indenização e resolução de adversidades.</span> Se o Usuário violar ou descumprir qualquer obrigatoriedade, disposição ou responsabilidade deste Termo, consente que arcará financeiramente (incluindo honorários advocatícios) com as despesas e responsabilidade por todos os prejuízos e reclamações.</p>
                <p>Apesar das disposições destes termos, podem haver discordâncias. Para solucionar tais casos, a OnService tem um canal de atendimento. Assim, é possível resolver essas questões sem que haja necessidade de tratamento judicial. Ao concordar com estes Termos, o Usuário garante que irá recorrer, em primeiro lugar, ao canal de atendimento da plataforma para tratar qualquer adversidade.  Há casos que também pode-se recorrer ao Serviço disponível em www.consumidor.gov.br, mantido pela Secretaria Nacional do Consumidor (SENACON) do Ministério da Justiça e Segurança Pública. É uma ferramenta gratuita, disponibilizada para prevenir e reduzir a quantidade de controvérsias que se tornam judiciais. A plataforma da OnService é regida pelas leis da República Federativa do Brasil.</p>
                <p>2.4.5. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Propriedade intelectual.</span> Todos os nomes, logotipos, sinais, artes, desenhos, layout e todo conteúdo publicado na plataforma são de propriedade exclusiva da OnService. É expressamente proibido copiar, utilizar, copiar, reproduzir, distribuir, transformar ou modificar o material da plataforma, a menos que lhe seja cedida a utilização, de forma legítima, legal ou contratualmente facultada e/ou permitida. O mesmo vale para uso comercial do conteúdo da OnService. Também é proibido induzir terceiros a erros de violação de direitos.</p>
            </div>
            <p><span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>3. DADOS DO USUÁRIO E PRIVACIDADE</span></p>
            <p>3.1. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>A ONSERVICE POSSUI UMA POLÍTICA EXPRESSA SOBRE PRIVACIDADE.</span> AS INFORMAÇÕES DE REGISTRO E OUTRAS INFORMAÇÕES SOBRE O USUÁRIO ESTÃO SUJEITAS AO TRATAMENTO REFERIDO EM TAL POLÍTICA DE PRIVACIDADE. O USUÁRIO ENTENDE E CONCORDA QUE O SEU USO E A PRESTAÇÃO DO SERVIÇO ENVOLVEM A COLETA E UTILIZAÇÃO DE INFORMAÇÕES E DADOS SOBRE O USUÁRIO (CONFORME DEFINIDO NA POLÍTICA DE PRIVACIDADE APLICÁVEL), INCLUINDO A TRANSFERÊNCIA DESTAS INFORMAÇÕES E DADOS PARA OUTROS TERRITÓRIOS, PARA FINS DE ARMAZENAMENTO, PROCESSAMENTO E UTILIZAÇÃO PELA ONSERVICE, SUA CONTROLADORA E DEMAIS EMPRESAS DO MESMO GRUPO ECONÔMICO, PARA ENVIO ÀS AUTORIDADES COMPETENTES PARA FINS DE REALIZAÇÃO DE CADASTRAMENTO DOS USUÁRIOS, PARA AS FINALIDADES DA PRESTAÇÃO DO SERVIÇO E DEMAIS PREVISTAS NA POLÍTICA DE PRIVACIDADE. FAVOR CONSULTAR A POLÍTICA DE PRIVACIDADE DA ONSERVICE NO SEGUINTE LINK: <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>https://onservicebr.com/politica_de_privacidade</span>. A POLÍTICA DE PRIVACIDADE DA ONSERVICE CONSTITUI PARTE INTEGRANTE DOS TERMOS DE USO.</p>
            <p><span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>4. RESPONSABILIDADES</span></p>
            <p>4.1. A OnService não se responsabiliza por nenhum tipo de transação financeira entre Contratantes e Profissionais Parceiros, podendo oferecer, ou não, algum tipo de suporte e/ou auxílio para que o Usuário prejudicado encontre seus direitos legais e aplique as medidas cabíveis legalmente.</p>
            <p>4.2. A OnService não se responsabiliza pela qualidade do Serviço prestado, sendo de responsabilidade única e exclusiva do Profissional Parceiro apresentar um bom trabalho. A OnService tem o direito de oferecer, ou não, algum tipo de suporte e/ou auxílio para que o Contratante prejudicado encontre seus direitos legais e aplique as medidas cabíveis legalmente.</p>
            <p>4.3. INEXISTÊNCIA DE RELAÇÃO DE TRABALHO, VÍNCULO DE EMPREGO E OUTROS. NÃO SE ESTABELECE ENTRE O PROFISSIONAL PARCEIRO E A ONSERVICE QUALQUER VÍNCULO DE NATUREZA SOCIETÁRIA, EMPREGATÍCIA E/OU ECONÔMICA, SENDO CERTO QUE O PROFISSIONAL PARCEIRO É LIVRE PARA REALIZAR SERVIÇOS QUANDO QUISER, BEM COMO PARA CESSAR A UTILIZAÇÃO DA PLATAFORMA A QUALQUER MOMENTO, AO SEU LIVRE E EXCLUSIVO CRITÉRIO. A ONSERVICE NÃO POSSUI UMA EQUIPE DE PROFISSIONAIS PARCEIROS CONTRATADOS, PRESTANDO EXCLUSIVAMENTE OS SERVIÇOS DE VITRINE E PROMOÇÃO VOLTADOS À FACILITAÇÃO DA CONTRATAÇÃO DE SERVIÇOS VARIADOS PERANTE UM PROFISSIONAL PARCEIRO AUTÔNOMO CADASTRADO NA PLATAFORMA.</p>
            <p>4.4. A OnService não assume a responsabilidade por nenhum problema técnico no decorrer da execução do Serviço solicitado, nem se responsabiliza pela qualidade do Serviço, a qual fica a critério do Contratante ao avaliar o Profissional Parceiro pela nota em seu perfil. A OnService deverá ainda manter o bom funcionamento da plataforma na maior medida possível e disponibilizar canais de atendimento para ajudar a solucionar dúvidas e problemas dos Usuários da plataforma.</p>
            <p>4.5. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>RESPONSABILIDADE PELOS SERVIÇOS PRESTADOS.</span> A CONTRATAÇÃO DOS SERVIÇOS DE VARIADOS É FEITA DIRETAMENTE ENTRE OS CONTRATANTES E OS PROFISSIONAIS PARCEIROS. A ONSERVICE NÃO SE RESPONSABILIZA POR QUAISQUER PERDAS, PREJUÍZOS OU DANOS DE QUALQUER NATUREZA QUE SEJAM DECORRENTES DA RELAÇÃO ENTRE CONTRATANTE E PROFISSIONAL PARCEIRO. O PROFISSIONAL PARCEIRO ENTENDE E CONCORDA QUE A ONSERVICE NÃO SERÁ RESPONSÁVEL POR QUAISQUER DANOS OU PREJUÍZOS QUE VENHAM A SER CAUSADOS POR UM CONTRATANTE E AO RESPECTIVO PROFISSIONAL PARCEIRO. O CONTRATANTE ENTENDE E CONCORDA QUE A ONSERVICE NÃO SERÁ RESPONSÁVEL POR QUAISQUER DANOS OU PREJUÍZOS QUE VENHAM A SER CAUSADOS POR UM PROFISSIONAL PARCEIRO AO RESPECTIVO CONTRATANTE.</p>
            <div class="sub-clausulas-termos">    
                <p>4.5.1. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Danos e prejuízos causados por Profissionais Parceiros.</span> O Profissional Parceiro será responsável por quaisquer danos ou prejuízos que causar ao(s) Contratante(s) e concorda em indenizar e manter a OnService indene em relação a quaisquer demandas, perdas, prejuízos ou danos direta ou indiretamente relacionados a atos ou fatos causados pelo Profissional Parceiro. O Profissional Parceiro é o único e exclusivo responsável por todos e quaisquer problemas relativos ao Serviço que prestar, bem como por quaisquer condutas indevidas ou ilegais que pratique.</p>
            </div>
            <p>4.6. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Modificação ou cancelamento dos serviços.</span> A OnService se reserva o direito de, a qualquer tempo, modificar ou descontinuar, temporariamente ou permanentemente, o Serviço ou parte dele, com ou sem notificação. O Usuário concorda que a OnService não será responsabilizada, nem terá qualquer obrigação adicional, implícita ou explícita, para com o Usuário ou terceiros em razão de qualquer modificação, suspensão ou desativação do Serviço.</p>
            <p>4.7. <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>Pagamento pelos serviços.</span> O pagamento do Serviços prestado é feito diretamente pelo Contratante ao Profissional Parceiro, a combinar diretamente entre si. O Profissional Parceiro pode optar por receber pagamentos da forma que bem entender, sendo obrigatória a estipulação prévia por E-mail, SMS, WhatsApp ou outra forma escrita, a fim de proteger a integridade financeira de ambas as partes. </p>
            <div class="sub-clausulas-termos">    
                <p>4.7.1. O valor a ser pago pelo Contratante ao Profissional Parceiro deve ser informado por E-mail, SMS, WhatsApp ou outra forma escrita, antes da realização do Serviços, para que fique registrado e não haja nenhum tipo de divergência entre ambas as partes.</p>
                <p>4.7.2. A OnService não se responsabiliza por pagamentos acordados única e exclusivamente pessoalmente, sendo de total risco e responsabilidade dos Usuários.</p>
                <p>4.7.3. A OnService não se responsabiliza pela indenização ou ressarcimento do valor atribuído ao Serviço. Porém, serão analisadas denúncias com provas escritas enviadas à OnService de incongruência da forma ou valor entre o pagamento acordado de forma escrita e o pagamento exigido pessoalmente. Caso a denúncia seja considerada válida, a OnService, à sua livre discrição, poderá suspender ou banir a conta do Usuário acusado de uso inadequado ou abusivo da plataforma.</p>
            </div>
            <p><span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>5. MANUTENÇÃO DO PADRÃO DE QUALIDADE ONSERVICE</span></p>
            <p>5.1. Os Contratantes têm o direito e dever de avaliar os Profissionais Parceiros segundo a qualidade dos Serviços prestados e seu comportamento durante o Serviço.</p>
            <p>5.2. Os Contratantes têm o direito e dever de avaliar os Profissionais Parceiros segundo a qualidade dos Serviços prestados e seu comportamento durante o Serviço.</p>
            <p>5.3. Periodicamente, o Profissional Parceiro será informado sobre alterações em sua avaliação, que consistirá em uma nota de 0 (zero) a 5 (cinco), que leva em consideração a avaliação e comentários dos Contratantes e da OnService, conforme os critérios estabelecidos na Cláusula 6.1., bem como outros critérios pertinentes.</p>
            <p><span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>6. SUSPEITA DE FRAUDE</span></p>
            <p>6.1. A OnService não se responsabiliza por quaisquer condutas fraudulentas por parte dos Usuários, podendo inclusive impedir, em razão delas, seu acesso à plataforma, bem como agir judicial ou extrajudicialmente contra o envolvido.</p>
            <p>6.2. A OnService analisa caso a caso as suspeitas de fraude em virtude de Serviços supostamente fraudulentos, de forma a evitar o risco de dano à OnService.</p>
            <p>6.3. A OnService se reserva ao direito de agir judicialmente e extrajudicialmente em relação ao Usuário nos casos em que forem constatadas atividades fraudulentas.</p>
            <p><span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>7. SUSPENSÃO E CANCELAMENTO DE SUA EXPOSIÇÃO NA PLATAFORMA</span></p>
            <p>7.1. O Usuário concorda que a OnService, à sua livre discrição, poderá suspender ou cancelar sua utilização do Serviço, incluindo, mas não se limitando:</p>
            <div class="row itens-termos">
                    <div class="column item-termos">
                        i.
                </div>
                    <div class="column text-item-termos">
                    	Por descumprimentos e/ou violação destas Cláusulas;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        ii.
                    </div>
                    <div class="column text-item-termos">
                    	Pelo resultado de sua avaliação pelos contratantes;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        iii.
                    </div>
                    <div class="column text-item-termos">
                    	Em função de ordem judicial ou requisição legal de autoridade pública competente;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        iv.
                    </div>
                    <div class="column text-item-termos">
                    	Por requisição do próprio Usuário;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        v.
                    </div>
                    <div class="column text-item-termos">
                    	Por desativação ou modificação do Serviço (ou de qualquer de suas partes);
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        vi.
                    </div>
                    <div class="column text-item-termos">
                    	Por caso fortuito, força maior e/ou questões de segurança;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        vii.
                </div>
                    <div class="column text-item-termos">
                    	Por inatividade da conta por um longo período de tempo;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        viii.
                    </div>
                    <div class="column text-item-termos">
                    	Pela suposta prática de qualquer ilegalidade, atividade fraudulenta ou ilegal por parte do Profissional Parceiro, a critério da OnService;
                    </div>
                </div>
                <div class="row itens-termos">
                    <div class="column item-termos">
                        ix.
                    </div>
                    <div class="column text-item-termos">
                    	Pelo uso inadequado ou abusivo da plataforma, incluindo a utilização por terceiros ou transferência de sua conta e outras hipóteses de uso indevido ou abusivo da plataforma, a critério da OnService.
                    </div>
                </div>
                <p>7.2. O USUÁRIO CONCORDA QUE O TÉRMINO DE SUA EXPOSIÇÃO NA PLATAFORMA, POR QUALQUER RAZÃO CONSTANTE DESTES TERMOS, PODE OCORRER SEM UMA NOTIFICAÇÃO PRÉVIA E TODAS AS INFORMAÇÕES E DADOS CONSTANTES PODERÃO SER PERMANENTEMENTE APAGADOS.</p>
                <p>7.3. A OnService se reserva o direito de agir judicialmente e extrajudicialmente em casos de danos sofridos pela OnService ou por terceiros, inclusive poderá entrar em contato com as autoridades e dar início à instrução de processos criminais, civis e administrativos nos casos previstos pela lei, quando julgar necessário.</p>
                <p>7.4. O Usuário não fará jus a qualquer indenização ou compensação, seja pela suspensão ou resilição destas Cláusulas pela OnService.</p>
            </div>
        </div>
    );



}
export default Termos;