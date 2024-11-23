const url = "https://fakestoreapi.com/products?limit=20";

const root = document.getElementById('root');

const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const element = data.map( e => 
        `<div class="col" data-aos="zoom-out-down">
                <div class="card" style="width: 18rem;" >
                    <img src="${e.image}"  class="thumbnail card-img-top" alt="thumbnial">
                    <div class="card-body">
                        <h5 class="card-title">${e.name}</h5>
                        <p class="card-text badge bg-success text-light fs-4">${e.price}$</p>
                        <p class="card-text text">${e.description}</p>
                        <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>
        </div>`
     )

     element.forEach(element => {
        root.innerHTML += element;
     });
     

}

fetchData();