const prova = {
  data: "Outubro 2025",
  docente: "Pablo Henrique Lima dos Santos",
  curso: "Técnico em Desenvolvimento de Sistemas",
  unidade: "Testes de Software",
  turma: "Turma M2",
  itens: [
    {
      capacidade: "Identificar o propósito fundamental do menor nível de testes.",
      contexto: "Um desenvolvedor backend está criando uma nova função para calcular o imposto de vendas. Ele precisa garantir que essa função específica retorne o valor exato, testando-a isoladamente, sem depender do banco de dados ou da interface.",
      pergunta: "Qual é o tipo de teste que se concentra em verificar o correto funcionamento de módulos, classes ou funções isoladas?",
      imagem: "",
      alternativas: [
        "Teste de Integração",
        "Teste de Carga",
        "Teste de Sistema",
        "Teste Unitário"
      ]
    },
    {
      capacidade: "Avaliar a comunicação e o fluxo de dados entre diferentes componentes do sistema.",
      contexto: "Após a conclusão dos testes unitários, a equipe precisa garantir que o módulo de login consiga se comunicar e trocar dados corretamente com o serviço de autenticação (API) no backend.",
      pergunta: "Qual teste é crucial para o backend e garante que o fluxo de dados entre dois ou mais módulos ou componentes (como um serviço e um banco de dados) está correto?",
      imagem: "",
      alternativas: [
        "Teste de Regressão",
        "Teste Unitário",
        "Teste de Integração",
        "Teste de Usabilidade"
      ]
    },
    {
      capacidade: "Reconhecer o teste focado na verificação visual e interativa do software.",
      contexto: "Um designer entregou o layout final de uma página de checkout. O time de QA precisa garantir que todos os botões, campos de formulário e a disposição dos elementos visuais estejam funcionando e parecendo exatamente como no projeto.",
      pergunta: "Qual teste se concentra em verificar a aparência visual, a funcionalidade dos elementos de interação e a fidelidade do design do frontend?",
      imagem: "",
      alternativas: [
        "Teste de Sistema",
        "Teste de Integração de API",
        "Teste de Usabilidade",
        "Teste de Carga"
      ]
    },
    {
      capacidade: "Identificar o teste não-funcional que avalia o desempenho sob volume de usuários.",
      contexto: "Uma plataforma de streaming está se preparando para o lançamento de uma série muito aguardada. A equipe de infraestrutura precisa saber se os servidores aguentarão 1 milhão de requisições por minuto sem que o tempo de resposta exceda 500ms.",
      pergunta: "Qual teste avalia o desempenho do sistema sob um grande volume de usuários ou transações, medindo métricas como tempo de resposta e throughput?",
      imagem: "",
      alternativas: [
        "Teste de Stress",
        "Teste Funcional",
        "Teste de Carga",
        "Teste de Segurança"
      ]
    },
    {
      capacidade: "Compreender o papel dos testes na manutenção e garantia da qualidade após modificações.",
      contexto: "O time de desenvolvimento fez uma pequena correção de bug na funcionalidade de busca de produtos. Antes de liberar a versão, eles precisam garantir que o carrinho de compras e o processo de pagamento (funcionalidades antigas) continuem operando normalmente.",
      pergunta: "Qual teste deve ser executado após uma alteração no código para confirmar que as funcionalidades já existentes não foram quebradas ou introduziram novos defeitos?",
      imagem: "",
      alternativas: [
        "Teste Unitário",
        "Teste de Regressão",
        "Teste de Aceitação",
        "Teste Exploratório"
      ]
    },
    {
      capacidade: "Reconhecer o teste que simula o fluxo completo do usuário.",
      contexto: "Uma aplicação bancária precisa garantir que o fluxo de transferência Pix, desde o login (frontend), a consulta de saldo (backend) até a confirmação da transação (integração de serviços), funcione sem falhas do início ao fim.",
      pergunta: "Qual teste simula o fluxo completo do usuário, verificando o comportamento da aplicação de ponta a ponta, abrangendo tanto o frontend quanto o backend?",
      imagem: "",
      alternativas: [
        "Teste de Unidade",
        "Teste de Integração",
        "Teste Exploratório",
        "Teste End-to-End (E2E)"
      ]
    },
    {
      capacidade: "Identificar o teste focado na experiência humana e facilidade de uso.",
      contexto: "Uma empresa de software educacional quer saber se o layout do seu novo painel de controle é intuitivo e se os usuários conseguem encontrar a seção de relatórios facilmente.",
      pergunta: "Qual teste de frontend valida a experiência do usuário (UX), a facilidade de aprendizado e a eficácia da navegação?",
      imagem: "",
      alternativas: [
        "Teste de Fumaça",
        "Teste de Usabilidade",
        "Teste de Stress",
        "Teste de Segurança"
      ]
    },
    {
      capacidade: "Reconhecer a importância e o foco dos testes contra ataques maliciosos.",
      contexto: "Um sistema de votação eletrônica precisa de validação extrema contra fraudes. Uma equipe de 'hackers éticos' é contratada para tentar injetar código malicioso ou forçar o acesso com senhas incorretas.",
      pergunta: "Qual teste de backend tem como principal objetivo identificar e mitigar vulnerabilidades, protegendo o sistema contra ataques cibernéticos?",
      imagem: "",
      alternativas: [
        "Teste de Carga",
        "Teste Funcional",
        "Teste de Segurança",
        "Teste de Compatibilidade"
      ]
    },
    {
      capacidade: "Identificar o teste que garante a execução em múltiplos ambientes.",
      contexto: "O novo portal do governo precisa estar acessível a todos os cidadãos, independentemente de estarem usando Chrome, Safari, Firefox, ou navegando a partir de um tablet Android ou iPhone.",
      pergunta: "Qual teste garante que o frontend e suas funcionalidades operam corretamente em diferentes navegadores, sistemas operacionais e dispositivos?",
      imagem: "",
      alternativas: [
        "Teste de Stress",
        "Teste de Compatibilidade",
        "Teste de Sistema",
        "Teste E2E"
      ]
    },
    {
      capacidade: "Identificar o tipo de teste que valida o cumprimento dos requisitos de negócio sob a perspectiva do cliente.",
      contexto: "Antes do lançamento oficial, o cliente reúne seus gerentes e usuários-chave para usar o sistema por uma semana e formalmente confirmar se ele atende a todos os requisitos definidos no contrato.",
      pergunta: "Qual teste representa a validação final e formal do sistema pelo cliente ou usuário final, garantindo que os requisitos de negócio foram atendidos?",
      imagem: "",
      alternativas: [
        "Teste Beta",
        "Teste de Regressão",
        "Teste de Aceitação",
        "Teste Unitário"
      ]
    },
    {
      capacidade: "Avaliar o comportamento do sistema sob condições extremas para determinar o ponto de falha.",
      contexto: "A equipe de QA quer descobrir o ponto de ruptura de um servidor de e-mail no backend. Eles simulam um número excessivo e crescente de requisições até que o sistema falhe ou comece a apresentar erros.",
      pergunta: "Qual teste simula um número excessivo e crescente de transações até que o sistema falhe ou atinja seu limite máximo de capacidade, determinando seu ponto de ruptura?",
      imagem: "",
      alternativas: [
        "Teste de Carga",
        "Teste de Stress",
        "Teste de Integração",
        "Teste Funcional"
      ]
    },
    {
      capacidade: "Reconhecer a abordagem para encontrar falhas inesperadas de forma eficiente.",
      contexto: "Um testador experiente recebe uma nova funcionalidade no frontend e, em vez de seguir um caso de teste formal, ele decide clicar em sequências incomuns e inserir dados não esperados de forma intuitiva e imediata.",
      pergunta: "Qual teste é conduzido sem um roteiro pré-definido, onde o testador projeta e executa os testes simultaneamente, buscando falhas inesperadas?",
      imagem: "",
      alternativas: [
        "Teste Unitário",
        "Teste de Regressão",
        "Teste Exploratório",
        "Teste de Fumaça"
      ]
    },
    {
      capacidade: "Distinguir entre o propósito dos testes (o que o sistema faz).",
      contexto: "A equipe está validando o requisito: 'O usuário deve conseguir realizar o pagamento usando Pix ou Cartão de Crédito'. O foco do teste é garantir que o resultado esperado (a transação) seja concluído com sucesso.",
      pergunta: "Qual categoria de teste se concentra em verificar se as funcionalidades do sistema (as ações que ele deve executar) operam conforme as especificações dos requisitos de negócio?",
      imagem: "",
      alternativas: [
        "Teste de Sistema",
        "Teste de Usabilidade",
        "Teste de Aceitação",
        "Teste de Carga"
      ]
    }
  ]
};
