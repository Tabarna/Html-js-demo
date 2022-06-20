fetch('https://fakestoreapi.com/products').then((data)=>{
  // console.log(data);
    return data.json();
}).then((completedata)=>{
    console.log(completedata[2].title);
    document.getElementById
})