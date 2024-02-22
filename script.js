onst req = new XMLHttpRequest();
  
  req.open("GET", "http://restcountries.com/v3.1/all");
  req.send();
  req.onload = function(){
   const obj(JSON.parse(this.response)); 
   }
  
  then(response => response.json())
  then(data => {
    
    data.forEach(country => {
    
      const name = country.name.common;
      const region = country.region;
      const subregion = country.subregion;
      const population = country.population;

      // Print the information
      console.log(`Name: ${name}`);
      console.log(`Region: ${region}`);
      console.log(`Subregion: ${subregion}`);
      console.log(`Population: ${population}`);
      console.log('------------------------');
    });
  
  