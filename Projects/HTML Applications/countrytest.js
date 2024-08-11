//API: https://restcountries.com/v3.1/all

async function fetchData() {
    const responce = await fetch("https://restcountries.com/v3.1/all");
    const data = await responce.json();
    
    console.log(data);
}