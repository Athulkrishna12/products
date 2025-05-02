const products =[
    {id : 1,name : 'wireless mouse ' , price : 29.99 , category : 'electronics'},
    {id : 2,name : 'wireless keyboard ' , price : 49.99 , category : 'electronics'},
    {id : 3,name : 'wireless headphones ' , price : 99.99 , category : 'electronics'},
    {id : 4,name : 'wireless charger ' , price : 19.99 , category : 'electronics'},
    {id : 5,name : 'wireless speaker ' , price : 79.99 , category : 'electronics'},
    {id : 6,name : 'wireless printer ' , price : 199.99 , category : 'electronics'},
    {id : 7,name : 'wireless monitor ' , price : 299.99 , category : 'electronics'},
    {id : 8,name : 'wireless camera ' , price : 399.99 , category : 'electronics'},
    {id : 9,name : 'wireless router ' , price : 59.99 , category : 'electronics'},
    {id : 10,name : 'wireless tablet ' , price : 249.99 , category : 'electronics'},
    {id : 11,name : 'wireless phone ' , price : 699.99 , category : 'electronics'},
    {id : 12,name : 'wireless laptop ' , price : 999.99 , category : 'electronics'},
    {id : 13,name : 'wireless smartwatch ' , price : 199.99 , category : 'electronics'},
    {id : 14,name : 'wireless fitness tracker ' , price : 99.99 , category : 'electronics'},
    {id : 15,name : 'wireless VR headset ' , price : 499.99 , category : 'electronics'},
    {id : 16,name : 'wireless gaming console ' , price : 399.99 , category : 'electronics'},
    {id : 17,name : 'wireless gaming mouse ' , price : 79.99 , category : 'electronics'},
    {id : 18,name : 'wireless gaming keyboard ' , price : 129.99 , category : 'electronics'},
    {id : 19,name : 'wireless gaming headset ' , price : 199.99 , category : 'electronics'},
    {id : 20,name : 'wireless gaming chair ' , price : 299.99 , category : 'electronics'},

];
for ( let i = 0; i < products.length; i++) {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'green','white','cyan','magenta','lime','teal','navy','maroon','olive','silver','gold'];
   let card = document.createElement('div');
   let name = document.createElement('h1');
      let price = document.createElement('p');

      name.innerText = products[i].name;
      price.innerText = products[i].price;
        card.append(name);
        card.append(price);
        card.append('category : ' + products[i].category);
        card.colors = colors[i];
        card.style.backgroundColor = colors[i];
        
        card.className = 'card';
        root.append(card);
}