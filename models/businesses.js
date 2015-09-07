var businesses = [
  
  {
    "id": 1,
    "name": "Beech Farm",
    "sbi": "SJ8063 4587",
    "address": {
      "address1": "Beech Farm",
      "address2": "Pooley Bridge",
      "town":     "Penrith",
      "postcode": "CA10 2NP",
      "country":  "United Kingdom",
      "email":    "contact@beechfarm.co.uk",
      "landline": "0147 9643 7770",
      "mobile":   "07231 839 187"
    }
  },
  
  {
    "id": 2,
    "name": "Willow Farm",
    "sbi": "SJ8063 4774",
    "address": {
      "address1": "Willow Farm",
      "address2": "Green Lane",
      "town":     "Wilmslow",
      "postcode": "SK9 1LD",
      "country":  "United Kingdom",
      "email":    "contact@willowfarm.co.uk",
      "landline": "0147 9643 7770",
      "mobile":   "07231 839 187"
    }
  },
  
  {
    "id": 3,
    "name": "Red Farm",
    "sbi": "SJ8063 4461",
    "address": {
      "address1": "Red Farm",
      "address2": "Helpston Road",
      "town":     "Peterborough",
      "postcode": "PE6 7DU",
      "country":  "United Kingdom",
      "email":    "contact@redfarm.co.uk",
      "landline": "0147 9643 7770",
      "mobile":   "07231 839 187"
    }
  },
  
  {
    "id": 4,
    "name": "Bodmin Agr Ltd",
    "sbi": "SJ8063 4781",
    "address": {
      "address1": "Bodmin Agr Ltd",
      "address2": "Unit 5, St. Mabyn Industrial Estate",
      "town":     "Bodmin",
      "postcode": "PL30 5EX",
      "country":  "United Kingdom",
      "email":    "contact@bodminagrltd.co.uk",
      "landline": "0147 9643 7770",
      "mobile":   "07231 839 187"
    }
  },
  
  {
    "id": 5,
    "name": "B &amp; G Farms",
    "sbi": "SJ8063 4381",
    "address": {
      "address1": "B &amp; G Farms",
      "address2": "9 Huels Parkways",
      "town":     "Lancaster",
      "postcode": "CO00 L48",
      "country":  "United Kingdom",
      "email":    "contact@bandgfarms.co.uk",
      "landline": "0147 9643 7770",
      "mobile":   "07231 839 187"
    }
  }

];
  
 
exports.getBusinessEntries = function() {
  return businesses;
}
 
 
exports.getBusinessEntry = function(id) {
  for(var i=0; i < businesses.length; i++) {
    if(businesses[i].id == id) return businesses[i];
  }
}