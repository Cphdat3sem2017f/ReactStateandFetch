//Add imports here

class CountryFactory {
 
 constructor() {
    this.labels = [];
    this.countries = [];
   }

   getLabels = () => {
     return this.labels;
   }
   
   getCountries = () => {
     return this.countries;
   }
}

export default new CountryFactory();