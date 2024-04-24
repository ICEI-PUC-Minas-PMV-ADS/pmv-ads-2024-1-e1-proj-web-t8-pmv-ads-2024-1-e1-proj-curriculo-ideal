# Especificação do Projeto

## Perfis de Usuários

O programa atende 3 perfis de usuários, que falamos mais abaixo:

<tbody>
<table> 
<tr align=center>
<th colspan="2">Perfil: Profissional </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td> 
<td width="600px"> Usuários que buscam criar currículos profissionais para aproveitar oportunidades de emprego. Conseguindo destacar suas habilidades e experiências de maneira eficaz, permitindo que se concentrem na busca por oportunidades que correspondam às suas aspirações profissionais.</td>
</tr> 
<td/> 
<a><b>Necessidades</b></td>
<td> 
 
1. Criar um currículo com seções para experiência profissional, habilidades, formação acadêmica e projetos. 

 

2. Visualizar exemplos e modelos de currículos. 

 

3. Facilitar a leitura das informações tanto para o profissional quanto para o contratante. 

 

4. Baixar o currículo no formato desejado (por exemplo, PDF). 

 

5. Ter a capacidade de acompanhar o status das candidaturas submetidas. 
 

6. Poder compartilhar o currículo em PDF via e-mail, facilitando o seu envio para vagas de emprego. </td>
</tr> 
</tbody>
</table>
  
<tbody>
<table> 
<tr align=center>
<th colspan="2"> Perfil: Estudante </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td> 
<td width="600px"> Estudantes que estão buscando criar um currículo para estágios ou para ingressar no mercado de trabalho. Buscando ferramentas e orientações necessárias para que eles possam destacar suas habilidades, experiências acadêmicas e extracurriculares de forma eficaz. Permitindo-lhes competir por oportunidades profissionais relevantes para seu campo de estudo e aspirações de carreira.</td>
</tr> 
<td/> 
<a><b>Necessidades</b></td>
<td> 
 
1. Destacar a formação acadêmica, projetos acadêmicos e experiências relevantes. 

 

2. Receber assistência, passo a passo, na construção de um perfil profissional completo, desde a escolha da foto até a redação do objetivo profissional. 

 

3. Acessar modelos específicos para estágios e programas acadêmicos. 
 

4. Personalizar facilmente o currículo para diferentes oportunidades. 

 

5. Poder monitorar o progresso das candidaturas realizadas.</td>
</tr> 
</tbody>
</table>

<tbody>
<table> 
<tr align=center>
<th colspan="2">Perfil: Executivo  </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td> 
<td width="600px"> Profissionais em cargos executivos que buscam destacar experiências de liderança e realizações significativas. Procurando por uma plataforma que permita a esses executivos criarem currículos que transmitam sua expertise, capacidade de liderança e resultados alcançados ao longo de suas carreiras. Esses profissionais poderão destacar de forma eficaz sua trajetória profissional e se posicionar de maneira competitiva no mercado de trabalho.</td>
</tr> 
<td/> 
<a><b>Necessidades</b></td>
<td> 
 
1. Criar um currículo executivo que enfatize experiências anteriores de liderança. 

 

2. Destacar conquistas estratégicas e impacto nos negócios. 

 

3. Incluir seções específicas para habilidades de gestão e liderança. 

 

4. Ter a capacidade de personalizar a aparência para uma apresentação profissional. 

 

5. Dispor de meios para acompanhar o status das candidaturas submetidas.
 
6. Poder adicionar links para portfólios profissionais online, fornecendo uma visão mais abrangente das realizações profissionais. 

 

7. Receber dicas sobre como criar um currículo eficaz.</td>
</tr> 
</tbody>
</table>

## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE`                                                 |PARA ... `PORQUE`                     |
|--------------------|---------------------------------------------------------------------------|--------------------------------------|
| Desenvolvedor JR   |Criar um currículo do zero                                                 |Conseguir meu primeiro emprego        |
| Designer           |Editar o currículo que já tenho e escolher dentre cores e fontes diferentes|Ter o visual mais agradável           | 
| Estudante          |Aprender como criar o currículo                                            |Baixar e enviar para meu orientador   |
| Executivo          |Criar um currículo a partir de um template pronto                          |Ter mais praticidade                  |
| Profissional       |Acompanhar todas as vagas as quais me candidatei                           |Não deixar passar nenhuma oportunidade|

## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                                                                                                  |  Prioridade  |
|------|------------------------------------------------------------------------------------------------------------|--------------|
|RF-01 |O sistema deve apresentar ao usuário um botão para criação do novo currículo.                               | Alta         |      
|RF-02 |O sistema deve apresentar um questionário para o preenchimento de informações pessoais                      | Alta         |      
|RF-03 |O sistema deve oferecer um botão para o download do currículo em PDF                                        | Alta         |
|RF-04 |O sistema deve permitir ao usuário adicionar informação sobre a vaga para a qual se candidatou              | Alta         |
|RF-05 |O sistema deve permitir ao usuário fazer login e logout                                                     | Alta         |
|RF-06 |O sistema deve oferecer opções de templates para que o usuário faça as alterações que desejar               | Média        |
|RF-07 |O sistema deve possuir uma página com tutorial para instruir a criar o primeiro currículo                   | Média        |
|RF-08 |O sistema deve permitir ao usuário alterar o status da sua candidatura                                      | Média        |
|RF-09 |O sistema deve apresentar mensagens de erro, caso o usuário não consiga usar alguma função                  | Baixa        | 
|RF-10 |O sistema deve ter um botão na parte de templates para aplicação das informações do usúario, caso ele queira| Baixa        |
|RF-11 |Palavras erradas devem ser grifadas em vermelho para sugestão de correção em português                      | Baixa        | 
 

### Requisitos não Funcionais

|ID      | Descrição                                                                                               |  Prioridade   |
|--------|---------------------------------------------------------------------------------------------------------|---------------|
| RNF-01 |O sistema deve ser simples e intuitivo, sem necessidade de treinamento dos usuários                      | Alta          | 
| RNF-02 |O site deve ser responsivo para tablet, celular e computado                                              | Alta          | 
| RNF-03 |As edições não devem demorar mais de 1 segundo para que sejam executadas                                 | Média         |
| RNF-04 |O site deve ser capaz de se recuperar rapidamente de qualquer falha que ocorra no seu sistema            | Média         |
| RNF-05 |O sistema deve ser capaz de ser usado por pelo menos 50 pessoas ao mesmo tempo                           | Baixa         |
| RNF-06 |O sistema deve usar até 50% da capacidade de memória do aparelho que o usuário for utilizar              | Baixa         |
| RNF-07 |O sistema deve disponibilizar o download até 10 segundos depois que o botão de download for pressionado  | Baixa         |
| RNF-08 |O sistema deve ser estável com internet a partir de 10mbps                                               | Baixa         |
 

