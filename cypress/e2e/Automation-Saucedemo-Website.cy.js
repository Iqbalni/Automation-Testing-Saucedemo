/// <reference types="cypress" />
describe('Login / Logout Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
    })
    it('Login using registered username & password 1.',()=>{
       cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
            
            cy.loginsauce(username, password)

            cy.url().should('include', 'inventory.html')
            })
        })
        it('Login using registered username & password 2.',()=>{
            cy.fixture("sauce").then(sauce => {
            const username = sauce.username2
            const password = sauce.password1
            
            cy.loginsauce(username, password)

            cy.get("h3[data-test='error']").contains('Epic sadface: Sorry, this user has been locked out.')
            })
        })
        it('Login using registered username & password 3.',()=>{
            cy.fixture("sauce").then(sauce => {
            const username = sauce.username3
            const password = sauce.password1
            
            cy.loginsauce(username, password)

            cy.url().should('include', 'inventory.html')
        })
         })

         it('Login using registered username & password 4.',()=>{
            cy.fixture('sauce').then(sauce=>{
                const username = sauce.username4
                const password = sauce.password1

                cy.loginsauce(username,password)

                cy.url().should('include', 'inventory.html')
            })
         })

         it('Login using unregistered username & registered password.',()=> {
             cy.fixture('sauce').then(sauce=>{
                const username = sauce.username5
                const password = sauce.password1

                cy.loginsauce(username,password)

                cy.get("h3[data-test='error']").contains('Epic sadface: Username and password do not match any user in this service')
         })
         })
         it('Login using registered username & unregistered password.',() => {
            cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password2
            
            cy.loginsauce(username, password)

            cy.get("h3[data-test='error']").contains('Epic sadface: Username and password do not match any user in this service')
        })
        })
         it('Login using registered username & unregistered password.',() => {
       
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username5
            const password = sauce.password2
            
            cy.loginsauce(username, password)

            cy.get('h3[data-test="error"')
            .should('be.visible')
            .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        })
        })
        
        it('Sort products by price from high to low.', () => {
        cy.fixture("sauce").then(sauce => {
          const username = sauce.username1
          const password = sauce.password1
          
          cy.loginsauce(username, password)
          cy.url().should('include', 'inventory.html')
        })
        cy.get('.product_sort_container').select('Price (high to low)')
        cy.get('option[value="hilo"]').should('have.value','hilo')
         })

         it('Sort products by price from low to high.',()=>{
          cy.fixture("sauce").then(sauce => {
          const username = sauce.username1
          const password = sauce.password1
          
          cy.loginsauce(username, password)
          cy.url().should('include', 'inventory.html')
        })
            cy.get('.product_sort_container').select('Price (low to high)')
            cy.get('option[value="lohi"]').should('have.value','lohi')
         })

         it('Sort products by price Name (A to Z)',()=>{
          cy.fixture("sauce").then(sauce => {
          const username = sauce.username1
          const password = sauce.password1
          
          cy.loginsauce(username, password)
          cy.url().should('include', 'inventory.html')
        })
            cy.get('.product_sort_container').select('Name (A to Z)')
            cy.get('option[value="az"]').should('have.value','az')
         })

         it('Sort products by price Name (Z to A)',()=>{
          cy.fixture("sauce").then(sauce => {
          const username = sauce.username1
          const password = sauce.password1
          
          cy.loginsauce(username, password)
          cy.url().should('include', 'inventory.html')
        })
            cy.get('.product_sort_container').select('Name (Z to A)')
            cy.get('option[value="za"]').should('have.value','za')
         })

         
    it('Cheking out the cart that contains item.',() => {
      
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
        
            cy.loginsauce(username, password)
            cy.url().should('include', 'inventory.html')
        })
        cy.cartsauce()
        cy.url().should('include', 'one.html')
    })

    it('Checking out the empty cart.',()=>{
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
        
            cy.loginsauce(username, password)
            cy.url().should('include', 'inventory.html')
         })
         cy.get('[data-test="shopping-cart-link"]').click()
         cy.url().should('include', 'cart.html')
         cy.get('#checkout').click()
         cy.url().should('include', 'one.html')
         })

         it('Filling out all the information for shipping.',()=>{
            cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
        
            cy.loginsauce(username, password)
            cy.url().should('include', 'inventory.html')
          })
           cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
            const firstname = sauce.first
            const lastname = sauce.last
            const postalcode = sauce.postal

            cy.loginsauce(username, password)
            cy.url().should('include', 'inventory.html')
            cy.wait(2000)
            cy.cartsauce()
            cy.url().should('include', 'one.html')
            cy.wait(2000)
            cy.get('#first-name').clear()
            cy.get('#first-name').type(firstname)
            cy.get('#last-name').clear()
            cy.get('#last-name').type(lastname)
            cy.get('#postal-code').clear()
            cy.get('#postal-code').type(postalcode)
            cy.get('#continue').click()
            cy.url().should('include', 'checkout-step-two.html') 
            })
        })

        
         it('Not filling out the postal code.',()=>{
            cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
        
            cy.loginsauce(username, password)
            cy.url().should('include', 'inventory.html')
          })
           cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
            const firstname = sauce.first
            const lastname = sauce.last
            

            cy.loginsauce(username, password)
            cy.url().should('include', 'inventory.html')
            cy.wait(2000)
            cy.cartsauce()
            cy.url().should('include', 'one.html')
            cy.wait(2000)
            cy.get('#first-name').clear()
            cy.get('#first-name').type(firstname)
            cy.get('#last-name').clear()
            cy.get('#last-name').type(lastname)
            cy.get('#postal-code').clear()
            cy.get('#continue').click()
            cy.get("h3[data-test='error']").contains('Error: Postal Code is required')
      })
      })

         it('Not filling out the first name.',()=>{
            cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
        
            cy.loginsauce(username, password)
            cy.url().should('include', 'inventory.html')
          })
           cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
            const lastname = sauce.last
            const postalcode = sauce.postal
            

            cy.loginsauce(username, password)
            cy.url().should('include', 'inventory.html')
            cy.wait(2000)

            cy.cartsauce()
            cy.url().should('include', 'one.html')
            cy.wait(2000)

            cy.get('#first-name').clear()
            cy.get('#last-name').clear()
            cy.get('#last-name').type(lastname)
            cy.get('#postal-code').clear()
            cy.get('#postal-code').type(postalcode)
            cy.get('#continue').click()
            cy.get("h3[data-test='error']").contains('Error: First Name is required')
      })
      })
       it('Not filling out the lastname.',()=>{
            cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
        
            cy.loginsauce(username, password)
            cy.url().should('include', 'inventory.html')
          })
           cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
            const firstname = sauce.first
            const postalcode = sauce.postal
            
            

            cy.loginsauce(username, password)
            cy.url().should('include', 'inventory.html')

            cy.cartsauce()
            cy.url().should('include', 'one.html')

            cy.get('#first-name').clear()
            cy.get('#first-name').type(firstname)
            cy.get('#last-name').clear()
            cy.get('#postal-code').clear()
            cy.get('#postal-code').clear(postalcode)
            cy.get('#continue').click()
            cy.get("h3[data-test='error']").contains('Error: Last Name is required')
     })
       })
    it.only('Logout from the website.', () => {
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1

            cy.loginsauce(username, password)
            cy.url().should('include', 'inventory.html')
        })
        
        cy.get('.bm-burger-button').click()
        cy.get('#logout_sidebar_link').click()
        cy.url().should('include', 'saucedemo.com')
        })
    })
   
      