//API: https://restcountries.com/v3.1/all

async function fetchData() {
    const responce = await fetch("https://restcountries.com/v3.1/all");
    const data = await responce.json();
}

export function getFlag(data,code){
    for(let d of data){
        code = string.toUpperCase();
        if(d.cca2 == string){
            console.log(d.flag);
        }
    }

    return d.flag;
}


fetchData();