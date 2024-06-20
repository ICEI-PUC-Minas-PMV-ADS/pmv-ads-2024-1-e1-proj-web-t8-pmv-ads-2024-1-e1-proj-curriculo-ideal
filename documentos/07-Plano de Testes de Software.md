# Plano de Testes de Software

Utilizando os navegadores Chrome, Firefox ou Opera, os testes funcionais a serem realizados na aplicação são descritos a seguir. 

<table>
 <tr>
  <th>Caso de Teste</th>
   <th>CT-001 – Teste de Funcionamento da página Crie Seu Currículo</th>
 </tr>
        <tr>
            <td>Requisitos Associados</td>
            <td>
                <ul>
                    <li>RF-02 - O sistema deve apresentar um questionário para o preenchimento de informações pessoais</li>
                    <li>RF-03 O sistema deve oferecer um botão para o download do currículo em PDF</li>
                    <li>RF-06 - O sistema deve oferecer opções de templates para que o usuário faça as alterações que desejar</li>
                    <li>RF-10 - O sistema deve ter um botão na parte de templates para aplicação das informações do usuário, caso ele queira.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar o correto funcionamento da página Crie.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
              <ol>
                <li>Acessar o website no navegador;</li> 
                <li>Entrar na página CRIE;</li> 
                <li>Preencher formulário;</li> 
                <li>Escolher template.</li> 
                <li>Clicar no botão de download.</li>
                </ol>  
            </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>O usuário deve ser capaz de preencher o formulário em etapas, acompanhando o progresso por meio de uma barra de progresso. Se desejar voltar a uma etapa anterior, pode fazê-lo clicando no botão "voltar". Caso não preencha os campos obrigatórios, um alerta será exibido. Ao final, o usuário poderá fazer o download do currículo no formato escolhido.</td>
        </tr>
        <tr>
            <td>Responsável pela elaboração do caso de Teste</td>
            <td>Alycia Oliveira</td>
        </tr>
    </table>

<table>
        <tr>
            <th>Caso de Teste</th>
            <th>CT-002 – Teste de funcionamento da página Sign up</th>
        </tr>
        <tr>
            <td>Requisitos Associados</td>
            <td>
                <ul>
                    <li>RF-05 O sistema deve permitir ao usuário fazer login e logout.</li>
                    <li>RF-09 O sistema deve apresentar mensagens de erro, caso o usuário não consiga usar alguma função.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Permitir que o usuário crie uma conta para navegar pelo site.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
              <ol>
                <li>Acessar o website no navegador;</li> 
                <li>Entrar na página Sign up;</li> 
                <li>Preencher o formulário com nome, sobrenome, e-mail e senha;</li> 
                <li>Apertar no botão de Crie sua conta após finalizar o preenchimento.</li>
              </ol>
              </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>Para que o usuário crie uma conta é necessário que ele preencha corretamente todos os campos do formulário, assim ele ganhará acesso à parte de Criar para criar seu currículo.</td>
        </tr>
        <tr>
            <td>Responsável pela elaboração do caso de Teste</td>
            <td>Enrique Alves</td>
        </tr>
    </table>

<table>
        <tr>
            <th>Caso de Teste</th>
            <th>CT-003 – Teste de funcionamento da página Login</th>
        </tr>
        <tr>
            <td>Requisitos Associados</td>
            <td>
                <ul>
                    <li>RF-05 O sistema deve permitir ao usuário fazer login e logout.</li>
                    <li>RF-09 O sistema deve apresentar mensagens de erro, caso o usuário não consiga usar alguma função.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Permitir que o usuário use uma conta para entrar no site.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
              <ol>
                <li>Acessar o website no navegador;</li> 
                <li>Entrar na página Login;</li> 
                <li>Preencher o formulário com senha e e-mail caso já tenha uma conta no site;</li>
                <li>Apertar no botão de Login após finalizar o preenchimento.</li>
              </ol>
              </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>Para que possa ser feito um login na página de Login é primeiro preciso ter uma conta feita na página de Sign up e a partir do momento que o usuário estiver logado ele pode navegar pelo site ou também dar logoff.</td>
        </tr>
        <tr>
            <td>Responsável pela elaboração do caso de Teste</td>
            <td>Enrique Alves</td>
        </tr>
    </table>

<table>
        <tr>
            <th>Caso de Teste</th>
            <th>CT-004 – Verificar o funcionamento da página Aprenda</th>
        </tr>
        <tr>
            <td>Requisitos Associados</td>
            <td>
                <ul>
                    <li>RF-07 O sistema deve possuir uma página com tutorial para instruir a criar o primeiro currículo.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar se a navegação na página Aprenda está funcionando corretamente, com a utilização do menu lateral.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
              <ol>
                <li>Acessar o navegador;</li> 
                <li>Informar o endereço do site;</li>  
                <li>Clicar no botão Aprenda;</li> 
                <li>Dar scroll na página e ver se o menu lateral acompanha;</li>  
                <li>Clicar nos itens do menu lateral e ver se a página é corretamente direcionada para a parte do texto.</li> 
              </ol>
              </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
        </tr>
        <tr>
            <td>Responsável pela elaboração do caso de Teste</td>
            <td>Guilherme Holanda</td>
        </tr>
    </table>

<table>
        <tr>
            <th>Caso de Teste</th>
            <th>CT-005 – Verificar o funcionamento da página Home</th>
        </tr>
        <tr>
            <td>Requisitos Associados</td>
            <td>
                <ul>
                    <li>RF-01: O sistema deve apresentar ao usuário um botão para criação do novo currículo.</li>
                    <li>RF-04 O sistema deve permitir ao usuário adicionar informação sobre a vaga para a qual se candidatou.</li>
                    <li>RF-07 O sistema deve possuir uma página com tutorial para instruir a criar o primeiro currículo.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar se os botões da página Home estão encaminhando para as respectivas páginas corretamente.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
              <ol>
                <li>Acessar o navegador;</li> 
                <li>Informar o endereço do site;</li> 
                <li>Visualizar a página Home;</li>
                <li>Clicar nos links da página Home.</li>
              </ol>
              </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
        </tr>
        <tr>
            <td>Responsável pela elaboração do caso de Teste</td>
            <td>Guilherme Holanda</td>
        </tr>
    </table>

  <table>
        <tr>
            <th>Caso de Teste</th>
            <th>CT-006 – Testando a adição de vagas</th>
        </tr>
        <tr>
            <td>Requisitos Associados</td>
            <td>
                <ul>
                    <li>RF-04 O sistema deve permitir ao usuário adicionar informação sobre a vaga para a qual se candidatou.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar se as vagas estão sendo inseridas corretamente.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
              <ol>
                <li>Na página suas candidaturas clicar no botão adicionar vaga;</li> 
                <li>Preencher todos os campos que irão aparecer;</li> 
                <li>Clicar no botão avançar;</li> 
                <li>A página deve mostrar a vaga que foi adicionada.</li>
              </ol>
              </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>A vaga cadastrada deve aparecer na página suas candidaturas.</td>
        </tr>
        <tr>
            <td>Responsável pela elaboração do caso de Teste</td>
            <td>Alexsander Custodio</td>
        </tr>
    </table>

<table>
        <tr>
            <th>Caso de Teste</th>
            <th>CT-007 – Testando a troca de status da vaga</th>
        </tr>
        <tr>
            <td>Requisitos Associados</td>
            <td>
                <ul>
                    <li>RF-08 O sistema deve permitir ao usuário alterar o status da sua candidatura.</li>
                    <li>RF-12 O usuário deve ser capaz de arrastar as vagas entre os status de candidatura.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar se o status está sendo alterado.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
              <ol>
                <li>Na página suas candidaturas quando exibido a vaga o usuário terá um botão de editar;</li> 
                <li>Clicando no botão de editar irá abrir as informações para editar a vaga, incluindo o seu status;</li> 
                <li>Clicando no card selecionado e segurando o mesmo, arrastar e soltar no status que você deseja será atualizado o status.</li>
                </ol>
              </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>O status da vaga deve ser alterado para o desejado.</td>
        </tr>
        <tr>
            <td>Responsável pela elaboração do caso de Teste</td>
            <td>Alexsander Custodio</td>
        </tr>
    </table>

<table>
        <tr>
            <th>Caso de Teste</th>
            <th>CT-008 – Testando o filtro de busca</th>
        </tr>
        <tr>
            <td>Requisitos Associados</td>
            <td>
                <ul>
                    <li>RF-13 O usuário deve ser capaz de pesquisar as candidaturas por vaga ou empresa.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar se o filtro de pesquisa está buscando as informações inseridas nos cards.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
              <ol>
                <li>Na página suas candidaturas, clicar na barra de pesquisa;</li> 
                <li>Inserir o nome da vaga/empresa que deseja pesquisar;</li> 
                <li>Deverá ser exibido todas as vagas com as informações digitadas.</li>
              </ol>
              </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>Deverá ser exibido somente as vagas com as informações inseridas.</td>
        </tr>
        <tr>
            <td>Responsável pela elaboração do caso de Teste</td>
            <td>Alexsander Custodio</td>
        </tr>
    </table>

<table>
        <tr>
            <th>Caso de Teste</th>
            <th>CT-009 – Testando funcionalidade de visualização</th>
        </tr>
        <tr>
            <td>Requisitos Associados</td>
            <td>
                <ul>
                    <li>RF-14 O usuário deve ser capaz de alterar a visualização da página entre lista e grade.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar se a visualização está sendo alternada.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
              <ol>
               <li>Na página suas candidaturas, ao clicar no botão lista a visualização da página deve ser alterada para grade;</li> 
              <li>Ao clicar no botão grade a visualização deve ser alternada para lista.</li>
              </ol>  
            </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>A visualização deve ser alternada quando clicar no botão lista/grade.</td>
        </tr>
        <tr>
            <td>Responsável pela elaboração do caso de Teste</td>
            <td>Alexsander Custodio</td>
        </tr>
    </table>

<table>
        <tr>
            <th>Caso de Teste</th>
            <th>CT-010 – Testando botão de excluir</th>
        </tr>
        <tr>
            <td>Requisitos Associados</td>
            <td>
                <ul>
                    <li>RF-14 O usuário deve ser capaz de alterar a visualização da página entre lista e grade.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar se a vaga está sendo excluída.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
              <ol>
                <li>Na página suas candidaturas, o card exibe o ícone de lixeira que tem a função de excluir;</li> 
                <li>Ao clicar no botão o sistema retorna uma mensagem de confirmação;</li> 
                <li>Clicar em cancelar irá cancelar a exclusão da vaga;</li>
                <li>Clicar em confirmar irá confirmar a exclusão da vaga.</li>
              </ol>  
            </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>A vaga deve ser excluída da visualização e do local storage.</td>
        </tr>
        <tr>
            <td>Responsável pela elaboração do caso de Teste</td>
            <td>Alexsander Custodio</td>
        </tr>
    </table>

<table>
        <tr>
            <th>Caso de Teste</th>
            <th>CT-011 – Testando gráfico de vagas</th>
        </tr>
        <tr>
            <td>Requisitos Associados</td>
            <td>
                <ul>
                    <li>RF-16 O usuário deve ser capaz de ver um gráfico com os dados das vagas cadastradas.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar se o gráfico está exibindo adequadamente as vagas.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
              <ol>
                <li>Na página suas candidaturas ao clicar em gráfico;</li>
                <li>Será exibido um gráfico com informações sobre as vagas cadastradas.</li>
              </ol>  
            </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>O gráfico exibido deve informar dados das vagas.</td>
        </tr>
        <tr>
            <td>Responsável pela elaboração do caso de Teste</td>
            <td>Alexsander Custodio</td>
        </tr>
    </table>
