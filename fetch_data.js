const url = "https://fakestoreapi.com/products?limit=20";

const root = document.getElementById('root');
const search = document.getElementById("search");
const btnSeach = document.querySelector("#btn-search");
const form = document.getElementById("form")


form.onsubmit = async (e) => {
    const data = await getAPIdata();
    const searchValue = search.value.toLowerCase();
    console.log(searchValue);

    const filterData = data.filter( e => e.title.toLowerCase().includes(searchValue))
    const element = filterData.map( e => 
        `<div class="col" data-aos="zoom-out-down">
                <div class="card" style="width: 18rem;" >
                    <img src="${e.image}"  class="thumbnail card-img-top" alt="thumbnial">
                    <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <p class="card-text badge bg-success text-light fs-4">${e.price}$</p>
                        <p class="card-text text">${e.description}</p>
                        <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>
        </div>`
     );
    root.innerHTML = element;
    e.preventDefault();
}

const getAPIdata = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}



btnSeach.addEventListener('click', async () => {
    const data = await getAPIdata();
    const searchValue = search.value.toLowerCase();
    console.log(searchValue);

    const filterData = data.filter( e => e.title.toLowerCase().includes(searchValue))
    const element = filterData.map( e => 
        `<div class="col" data-aos="zoom-out-down">
                <div class="card" style="width: 18rem;" >
                    <img src="${e.image}"  class="thumbnail card-img-top" alt="thumbnial">
                    <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <p class="card-text badge bg-success text-light fs-4">${e.price}$</p>
                        <p class="card-text text">${e.description}</p>
                        <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>
        </div>`
     );
    root.innerHTML = element;
    
})




const fetchData = async () => {
    const data = await getAPIdata();

    const element = data.map( e => 
        `<div class="col" data-aos="zoom-out-down">
                <div class="card" style="width: 18rem;" >
                    <img src="${e.image}"  class="thumbnail card-img-top" alt="thumbnial">
                    <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <p class="card-text badge bg-success text-light fs-4">${e.price}$</p>
                        <p class="card-text text">${e.description}</p>
                        <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>
        </div>`
     )
     element.forEach(e => {
        root.innerHTML += e;
     });  

}


fetchData();