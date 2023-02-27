
describe('testqastudio', function () {
    
    it('длинный автотест', function () {
        cy.visit('https://test.qa.studio/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('#cart-modal > div.cart-panel-content.panel-content > div.modal-content > div > div > p.woocommerce-mini-cart__buttons.buttons > a.button.checkout.wc-forward.razzi-button.button-outline').click({force: true});
        cy.get('#billing_first_name').type('Зинаида');
        cy.get('#billing_last_name').type('Иванова');
        cy.get('#select2-billing_country-container').click();
        cy.get('li.select2-results__option').contains('Россия').click();
        cy.get('#billing_address_1').type('28  Рублевское предместье');
        cy.get('#billing_city').type('Деревня Глухомань');
        cy.get('#billing_state').type('Москва');
        cy.get('#billing_postcode').type('123456789');
        cy.get('#billing_phone').type('123456789');
        cy.get('#billing_email').type('german@dolnikov.ru');
        cy.get('#order_comments').type('😸😺🖐');
        cy.get('#place_order').click();



  
         })


})