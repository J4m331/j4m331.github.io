//API: https://restcountries.com/v3.1/all

async function fetchData(string) {
    var responce = await fetch("https://restcountries.com/v3.1/all");
    var data = await responce.json();
    
    //console.log(data);
    search(data,string);
}

function search(data,string){
    for(d of data){
        string = string.toUpperCase()
        if(d.cca2 == string){
            console.log(d.flag);
        }
    }
}


fetchData("dz");