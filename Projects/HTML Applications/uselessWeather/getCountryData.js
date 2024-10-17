//API: https://restcountries.com/v3.1/all

async function fetchData() {
    const responce = await fetch("https://restcountries.com/v3.1/all");
    const data = await responce.json();

    //for(let i = 0; i < 255; i++){
    //    console.log(i + " : " + data[i].name.official);
    //}
    console.log(getFlag(data,"tt"));
}

function getFlag(data,code){
    for(let d of data){
        code = code.toUpperCase();
        if(d.cca2 == code){
            console.log(d.flag);
            return d.flag;
        }
    }
}

fetchData();