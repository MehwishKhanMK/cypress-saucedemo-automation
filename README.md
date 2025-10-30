# Cypress SauceDemo Automation

##  Project Overview
This project automates UI testing for the SauceDemo website using Cypress.

###  Objectives
- Automate login success and failure scenarios  
- Validate product listing and navigation  
- Implement Page Object Model (POM)  
- Create reusable test steps  

###  Folder Structure
cypress/
├── integration/
│ ├── examples/
│ │ ├── login.cy.js
│ │ ├── product.cy.js
│ │ └── pages/
│ │ └── LoginPage.js
| | |___ProductPage.js
├── support/
│ └── commands.js
package.json

markdown
Copy code

###  Tools Used
- Cypress  
- JavaScript (POM structure)  
- SauceDemo test environment  

###  Test Cases Automated
1. Login failure validation  
2. Login success flow  
3. Product listing validation  
4. Product detail navigation  

###  Run Tests
To run tests locally:
```bash
npx cypress open

### ***Author***

Mehwish Khan
Quality Assurance Automation – 10Pearls
