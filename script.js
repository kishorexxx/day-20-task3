//Promise Tas2 - Programming Quotes API

//Elements creation;
const container = document.createElement("div");
container.setAttribute("class","container");
const heading1 = document.createElement("h1");
heading1.setAttribute("class","heading");
heading1.innerHTML = "Covid19 API";
const heading2 = document.createElement("h3");
heading2.setAttribute("class","heading2");
heading2.innerHTML = "India Covid19 Details";
const row = document.createElement("div");
row.setAttribute("class","row");
const br1 = document.createElement("br");

//Appending the elements;

container.append(heading1, heading2, br1, row);
document.body.append(container);

//API Interaction;

async function task2(){
    let dta1 = await fetch("https://data.covid19india.org/v4/min/data.min.json");
    let data2 = await dta1.json();
    console.log(data2);
    for(var i in data2) {
        let columns = document.createElement("div");
        columns.setAttribute("class","col-md-12");
        columns.innerHTML = `<div class="card text-white bg-dark mb-3" style="max-width: 100%;">
        
        <div class="card-header"><h5 class="card-title">Population: ${data2[i].meta.population}</h5>
        <h6 class="card-title">Last_Updated: ${data2[i].meta.last_updated}</h6>
        </div>
        <div class="card-body">
        <p class="card-text">Confirmed: ${data2[i].total.confirmed}</p>
          <p class="card-text">Deceased: ${data2[i].total.deceased}</p>
          <p class="card-text">Recovered: ${data2[i].total.recovered}</p>
          <p class="card-text">Tested: ${data2[i].total.tested}</p>
          <p class="card-text">Vaccinated1:${data2[i].total.vaccinated1}</p>
          <p class="card-text">Vaccinated2: ${data2[i].total.vaccinated2}</p>
        </div>
      </div>`
      row.append(columns);
    }
}
task2();