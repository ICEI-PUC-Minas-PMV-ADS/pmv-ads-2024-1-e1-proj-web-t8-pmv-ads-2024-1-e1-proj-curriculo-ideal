# Plano de Testes de Software

Utilizando os navegadores Chrome, Firefox ou Opera, os testes funcionais a serem realizados na aplicação são descritos a seguir. 

|Caso de Teste    | CT-001 – Teste de Funcionamento da página Crie Seu Currículo |
|:---|:---|
| Requisitos Associados | RF-02 - O sistema deve apresentar um questionário para o preenchimento de informações pessoais RF-03 O sistema deve oferecer um botão para o download do currículo em PDF RF-06 - O sistema deve oferecer opções de templates para que o usuário faça as alterações que desejar RF-10 - O sistema deve ter um botão na parte de templates para aplicação das informações do usúario, caso ele queira. |
| Objetivo do Teste | Verificar o correto funcionamento da página Crie. |
| Passos | 1. Acessar o website no navegador; 2. Entrar na página CRIE; 3. Preencher formulário; 4. Escolher template. 5. Clicar no botão de download. |
| Critérios de êxito | O usuário deve ser capaz de preencher o formulário em etapas, acompanhando o progresso por meio de uma barra de progresso. Se desejar voltar a uma etapa anterior, pode fazê-lo clicando no botão "voltar". Caso não preencha os campos obrigatórios, um alerta será exibido. Ao final, o usuário poderá fazer o download do currículo no formato escolhido. |
| Responsável pela elaborar do caso de Teste | Alycia Oliveira |

|Caso de Teste    | CT-002 – Teste de funcionamento da página Sign up |
|:---|:---|
| Requisitos Associados | RF-05 O sistema deve permitir ao usuário fazer login e logout. RF-09 O sistema deve apresentar mensagens de erro, caso o usuário não consiga usar alguma função. |
| Objetivo do Teste | Permitir que o usuário crie uma conta para navegar pelo site. |
| Passos | 1. Acessar o website no navegador; 2. Entrar na página Sign up; 3. Preencher o formulário com nome, sobrenome, e-mail e senha; 4. Apertar no botão de Crie sua conta após finalizar o preenchimento. |
| Critérios de êxito | Para que o usuário crie uma conta é necessário que ele preencha corretamente todos os campos do formulário, assim ele ganhara acesso a parte de Criar para criar seu currículo. |
| Responsável pela elaborar do caso de Teste | Enrique Alves |

|Caso de Teste    | CT-003 – Teste de funcionamento da página Login |
|:---|:---|
| Requisitos Associados | RF-05 O sistema deve permitir ao usuário fazer login e logout. RF-09 O sistema deve apresentar mensagens de erro, caso o usuário não consiga usar alguma função. |
| Objetivo do Teste | Permitir que o usuário use uma conta para entrar no site. |
| Passos | 1. Acessar o website no navegador; 2.Entrar na página Login; 3. Preencher o formulário com senha e e-mail caso já tenha uma conta no site; 4.Apertar no botão de Login após finalizar o preenchimento. |
| Critérios de êxito | Para que possa ser feito um login na página de Login é primeiro preciso ter uma conta feita na página de Sign up e a partir do momento que o usuário estiver logado ele pode navegar pelo site ou também dar logoff. |
| Responsável pela elaborar do caso de Teste | Enrique Alves |

|Caso de Teste    | CT-004 – Verificar o funcionamento da página Aprenda |
|:---|:---|
| Requisitos Associados | RF-07 O sistema deve possuir uma página com tutorial para instruir a criar o primeiro currículo. |
| Objetivo do Teste | Verificar se a navegação na página Aprenda está funcionando corretamente, com a utilização do menu lateral. |
| Passos | 1. Acessar o navegador; 2. Informar o endereço do site; 3. Clicar no botão Aprenda; 4. Dar scroll na página e ver se o menu lateral acompanha; 5. Clicar nos itens do menu lateral e ver se a página é corretamente direcionada para a parte do texto. |
| Critérios de êxito | Todos os links da página Home devem encaminhar os usuários para as páginas descritas. |
| Responsável pela elaborar do caso de Teste | Guilherme Holanda |

|Caso de Teste    | CT-005 – Verificar o funcionamento da página Home |
|:---|:---|
| Requisitos Associados | RF-01: O sistema deve apresentar ao usuário um botão para criação do novo currículo. RF-04 O sistema deve permitir ao usuário adicionar informação sobre a vaga para a qual se candidatou. RF-07 O sistema deve possuir uma página com tutorial para instruir a criar o primeiro currículo  |
| Objetivo do Teste | Verificar se os botões da página Home estão encaminhando para as respectivas páginas corretamente. |
| Passos | 1. Acessar o navegador; 2. Informar o endereço do site; 3. Visualizar a página Home; 4. Clicar nos links da página Home. |
| Critérios de êxito | Todos os links da página Home devem encaminhar os usuários para as páginas descritas. |
| Responsável pela elaborar do caso de Teste | Guilherme Holanda |

|Caso de Teste    | CT-006 – Testando a adição de vagas |
|:---|:---|
| Requisitos Associados | RF-04 O sistema deve permitir ao usuário adicionar informação sobre a vaga para a qual se candidatou. |
| Objetivo do Teste | Verificar se as vagas estão sendo inseridas corretamente. |
| Passos | 1. Na página suas candidaturas clicar no botão adicionar vaga; 2. Preencher todos os campos que irão aparecer; 3. Clicar no botão avançar; 4. A página deve mostrar a vaga que foi adicionada. |
| Critérios de êxito | A vaga cadastrada deve aparecer na página suas candidaturas. |
| Responsável pela elaborar do caso de Teste | Alexsander Custodio |

|Caso de Teste    | CT-007 – Testando a troca de status da vaga |
|:---|:---|
| Requisitos Associados | RF-08 O sistema deve permitir ao usuário alterar o status da sua candidatura; RF-12 o usuário deve ser capaz de arrastar as vagas entre os status de candidatura. |
| Objetivo do Teste | Verificar se o status está sendo alterado. |
| Passos | 1. Na página suas candidaturas quando exibido a vaga o usuario terá um botão de editar;  2. Clicando no botão de editar ira abrir as informações para editar a vaga, incluido o seu status; 3. Clicando no card selecionado e segurando o mesmo, arrastar ele e soltar no status que você deseja sera atualizado o status. |
| Critérios de êxito | O status da vaga deve ser alterado para o desejado.|
| Responsável pela elaborar do caso de Teste | Alexsander Custodio |

|Caso de Teste    | CT-008 – Testando o filtro de busca |
|:---|:---|
| Requisitos Associados | RF-13 o usuario deve ser capaz de pesquisar as candidaturas por vaga ou empresa. |
| Objetivo do Teste | Verificar se o filtro de pesquisa está buscando as informações inseridas nos cards. |
| Passos |  1. Na pagina suas candidaturas, clicar na barra de pesquisa; 2. Inserir o nome da vaga/empresa que deseja pesquisar; 3. Deverá ser exibido todas as vagas com as informações digitadas. |
| Critérios de êxito | Deverá ser exibido somente as vagas com as informações inseridas. |
| Responsável pela elaborar do caso de Teste | Alexsander Custodio |

|Caso de Teste    | CT-009 – Testando funcionalidade de visualização |
|:---|:---|
| Requisitos Associados | RF-14 o usuário deve ser capaz de alterar a visualização da página entre lista e grade. |
| Objetivo do Teste | Verificar se a visualização está sendo alternada. |
| Passos | 1. Na página suas candidaturas, ao clicar no botão lista a visualização da página deve ser alterada para grade; 2. Ao clicar no botão grade a visualização deve ser alternada para lista. |
| Critérios de êxito | A visualização deve ser alternada quando clicar no botão lista/grade. |
| Responsável pela elaborar do caso de Teste | Alexsander Custodio |

|Caso de Teste    | CT-010 – Testando botão de excluir |
|:---|:---|
| Requisitos Associados | RF-14 o usuário deve ser capaz de alterar a visualização da página entre lista e grade. |
| Objetivo do Teste | Verificar se a vaga está sendo excluída. |
| Passos |  1. Na página suas candidaturas, o card exibe o ícone de lixeira que tem a função de excluir; 2. Ao clicar no botão o sistema retorna uma mensagem de confirmação; 3. Clicar em cancelar irá cancelar a exclusão da vaga; 4. Clicar em confirmar irá confirmar a exclusão da vaga. |
| Critérios de êxito | A vaga deve ser excluída da visualização e do local storage.  |
| Responsável pela elaborar do caso de Teste | Alexsander Custodio |

|Caso de Teste    | CT-011 – Testando gráfico de vagas |
|:---|:---|
| Requisitos Associados | RF-16 O usuário deve ser capaz de ver um gráfico com os dados das vagas cadastradas. |
| Objetivo do Teste | Verificar se o gráfico está exibindo adequadamente as vagas. |
| Passos | 1. Na página suas candidaturas ao clicar em gráfico; 2. Será exibido um gráfico com informações sobre as vagas cadastradas. |
| Critérios de êxito | O gráfico exibido deve informar dados das vagas.  |
| Responsável pela elaborar do caso de Teste | Alexsander Custodio |
