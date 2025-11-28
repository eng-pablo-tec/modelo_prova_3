const prova = {
  data: "Outubro 2025",
  docente: "Pablo Henrique Lima dos Santos",
  curso: "Técnico em Desenvolvimento de Sistemas",
  unidade: "Testes de Software",
  turma: "Turma Senai",
  itens: [
    {
      capacidade: "Organizar o ambiente para o desenvolvimento das rotinas de testes",
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
      capacidade: "Analisar documentação de teste para planejamento da rotina",
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
      capacidade: "Identificar tipos, função, ferramentas e plano de teste de acordo com a programação de sistemas",
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
      capacidade: "Reconhecer normas, métodos e técnicas de testes para correção de falhas de sistema",
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
      capacidade: "Definir roteiro de teste para execução, conforme recomendações técnicas",
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
      capacidade: "Identificar problemas de sistemas por meio de aplicação de teste",
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
      capacidade: "Avaliar resultado obtido no teste",
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
      capacidade: "Identificar possível solução para correção de falhas de acordo com metodologia de teste",
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
      capacidade: "Empregar ferramenta de documentação de teste para registro do resultado obtido",
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

    // REPETIÇÕES PARA COMPLETAR 12 QUESTÕES

    {
      capacidade: "Organizar o ambiente para o desenvolvimento das rotinas de testes",
      contexto: "Antes de liberar uma nova versão do app, a equipe monta um ambiente isolado com dados fictícios, logs limpos e ferramentas configuradas para evitar interferência externa.",
      pergunta: "Qual etapa é essencial para garantir que os testes ocorram em um ambiente adequado, limpo e controlado?",
      imagem: "",
      alternativas: [
        "Preparação do Ambiente",
        "Teste Funcional",
        "Teste de Carga",
        "Deploy Automatizado"
      ]
    },
    {
      capacidade: "Analisar documentação de teste para planejamento da rotina",
      contexto: "O analista de testes recebe os requisitos de um módulo financeiro e precisa entender os fluxos, regras e validações antes de criar os casos de teste.",
      pergunta: "Qual ação deve ocorrer antes da criação dos casos de teste para garantir que o QA entenda completamente os requisitos?",
      imagem: "",
      alternativas: [
        "Análise da Documentação",
        "Execução de Testes",
        "Refatoração do Código",
        "Criação de Prototipagem"
      ]
    },
    {
      capacidade: "Identificar tipos, função, ferramentas e plano de teste de acordo com a programação de sistemas",
      contexto: "O time está escolhendo entre usar Cypress, Jest ou JMeter, analisando qual ferramenta melhor combina com o tipo de teste que será realizado.",
      pergunta: "Qual etapa envolve escolher corretamente o tipo de teste e a ferramenta ideal para a necessidade do sistema?",
      imagem: "",
      alternativas: [
        "Planejamento de Testes",
        "Teste Exploratória",
        "Deploy Continuo",
        "Mapeamento de Riscos"
      ]
    }
  ]
};
