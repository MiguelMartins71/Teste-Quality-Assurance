//Cenário 1
//Realização da Criação de um Login de Forma automatizada, Desta Forma para realizar o teste, Solicito que preencha outro e-mail
//No Type do E-Mail
describe('Criação Da Conta', () => {
  it('Cenário 1 : Login de fomra bem-sucedida e automatizada com credenciais válidas', () => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
    cy.get("input#email_create").type("Teste123@gmail.com")
    cy.get("button#SubmitCreate").click()
    //Criação da Conta
    cy.get('input[type="radio"]').check("1")
    cy.get("input#customer_firstname").type("Miguel")
    cy.get("input#customer_lastname").type("Carvalho")
    cy.get("input#passwd").type("123teste")
    cy.get('select#days').select('7'); // Seleciona o dia de Forma Automatizada
    cy.get('select#months').select('1'); // Seleciona o Mês de Forma Automatizada
    cy.get('select#years').select('2004'); // Seleciona o Mês de Forma Automatizada
    cy.get('#newsletter').check(); // Marca a checkbox com o ID "newsletter"
    cy.get("button#submitAccount").click(); // Realiza a Criação da Conta de Forma Correta e Automatizada

     //Podemos Também Realizar um Teste Verificando se o Sistema Irá Aceitar um login com um e-mail já cadastrado


  })
})
//Cenário 2
//Realização do Login após a criação da Conta, Preenchendo as credenciais de Acesso de Forma Correta

describe('Realizando o Login na Conta', () => {
  it('Cenário 2 : Validando login Correto', () => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
    cy.get("input#email").type("Teste123@gmail.com")
    cy.get("input#passwd").type("123teste")
    cy.get("button#SubmitLogin").click()


  })
})

//Cenário 3
//Recuperação de Senha

describe('Recuperando a senha', () => {
  it('Cenário 3 : Validando a opção de esquecimento de senha', () => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=password')
    cy.get("input#email").type("Teste123@gmail.com")
    cy.get('.btn.btn-default.button.button-medium[type="submit"]').click();
  

  })
})
