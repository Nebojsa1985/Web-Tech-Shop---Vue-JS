const app = new Vue({
    el: '#app',
    data() {
       return{
          products: [
             {
                id: 1,
                name: 'Lenovo IdeaPad 3 Laptop',
                description: 'Lenovo IdeaPad 3 Laptop, 15.6", Intel Core i3-1115G4, Windows 11, 20GB RAM | 1TB SSD)',
                quantity: 0,
                img: 'img/laptop.png',
                price: '480'
             },
             {
                id: 2,
                name: 'TV GRUNDIG 43-inch',
                description: 'GRUNDIG 43 VLE 6910 BP Smart Full HD TV + POKLON MC 6840 trimer',
                quantity: 0,
                img: 'img/tv.png',
                price: '250'

             },
             {
                id: 3,
                name: 'Mobile Phone Nokia G20',
                description: 'NOKIA G20 4GB/64GB/black, 32GB - Black - Sim Card Included',
                quantity: 0,
                img: 'img/mobilni.png',
                price: '150'
             },
             {
                id: 4,
                name: 'Samsung Tablet',
                description: 'All-new Fire HD 8 tablet, 8” HD Display, 32 GB, 30% faster processor, Black',
                quantity: 0,
                img: 'img/tablet.png',
                price: '190'
             },
             {
                id: 5,
                name: 'Frigidaire EFR756-Cream EFR756',
                description: 'Frigidaire EFR756-Cream EFR756, 2 Door Apartment Size, Chrome Handles, 7.5 ft',
                quantity: 0,
                img: 'img/frizider.png',
                price: '250'
             },
             {
                id: 6,
                name: 'Dual Fuel Range Cosmo',
                description: 'COSMO COS-F965NF 36 in. Dual Fuel Range with 5 Gas Burners, 8 Functions',
                quantity: 0,
                img: 'img/sporet.png',
                price: '210'
             },
             {
                id: 7,
                name: 'Farberware Dishwasher',
                description: 'Farberware 5-Liter Water Tank, 5 Programs, Baby Care, Glass & Fruit Wash',
                quantity: 0,
                img: 'img/dishwasher.png',
                price: '235'
             },
             {
                id: 8,
                name: 'Water Heater Metalac',
                description: 'Metalac Water Heater, Thermomate 5L with Overheating Protection',
                quantity: 0,
                img: 'img/bojler.png',
                price: '110'
             },
             {
                id: 9,
                name: 'Tefal Steam Iron',
                description: 'Tefal Basics Teflon Soleplate Steam Iron, 1200-Watt',
                quantity: 0,
                img: 'img/pegla.png',
                price: '80'
             }
          ],
          //showCart: false,
          showFactureQuery: false,
          showProducts: true,
          showCartBtn: true,
          showBackBtn: false
       }
    },
    computed: {
        cart() {
            const x = this.products.filter(product => product.quantity > 0)
            return x
        },
        totalQuantity() {
            return this.products.reduce(
                (total, product) => total + product.quantity,
                0
                )
        },
        totalPrice() {
            const prices = this.products.map(x => x.quantity * x.price)
            const pricesSum = prices.reduce((x,y) => x + y, 0)
            return pricesSum
        }
    },
    methods: { 
       updateCart(product, updateType) {
           for (let i=0; i< this.products.length; i++) {
               if(this.products[i].id === product.id) {
                   if (updateType === 'subtract') {
                       if (this.products[i].quantity !==0) {
                           this.products[i].quantity--;
                       }
                   } else {
                    this.products[i].quantity++;
                   }
                   break
               }
           }
       } ,
       factureAlert() {
          const fname = document.querySelector('#firstName');
          const lname = document.querySelector('#lastName');
          const email = document.querySelector('#email');
          const idNumber = document.querySelector('#idNumber');
          const address = document.querySelector('#address');
            
         function validateEmail(email) {
               const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               return emailregex.test(String(email).toLowerCase());
         }

         if (fname.value == '') {
               alert('You must enter your first name')               
               fname.style.borderLeft = '12px solid red'
               setTimeout(() => {fname.style.border = '0px solid rgb(169,148,148)'}, 2000)
         } else if (lname.value == '') {
               alert('You must enter your last name')
               lname.style.borderLeft = '12px solid red'
               setTimeout(() => {lname.style.border = '0px solid rgb(169,148,148)'}, 2000)
         } else if (!validateEmail(email.value)) {
               alert('You must enter valid email format (example: name@gmail.com)')
               email.style.borderLeft = '12px solid red'
               setTimeout(() => {email.style.border = '0px solid rgb(169,148,148)'}, 2000)
         } else if (idNumber.value == '') {
               alert('You must enter your ID number')
               idNumber.style.borderLeft = '12px solid red'
               setTimeout(() => {idNumber.style.border = '0px solid rgb(169,148,148)'}, 2000)
         } else if (address.value == '') {
               alert('You must enter your address')
               address.style.borderLeft = '12px solid red'
               setTimeout(() => {address.style.border = '0px solid rgb(169,148,148)'}, 2000)
         } else {
               alert('The invoice has been sent to your email address. When you make the payment, the products will be sent to the specified address')
      }
       } 
    }
 })
