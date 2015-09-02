var businesses = [
  
  {
    "id": 1,
    "name": "Beech Farm",
    "sbi": "SJ8063 4587"
  },
  
  {
    "id": 2,
    "name": "Hansels Farm",
    "sbi": "SJ8063 4774"
  },
  
  {
    "id": 3,
    "name": "Willow Farm",
    "sbi": "SJ8063 4461"
  },
  
  {
    "id": 4,
    "name": "Tall Oaks Farm",
    "sbi": "SJ8063 4781"
  },
  
  {
    "id": 5,
    "name": "Old Stone Farm",
    "sbi": "SJ8063 4381"
  },
  
  {
    "id": 6,
    "name": "Crossroad Meadow Farm",
    "sbi": "SJ8063 4181"
  },

  {
    "id": 7,
    "name": "Hansels Farm",
    "sbi": "SJ8063 4774"
  },
  
  {
    "id": 8,
    "name": "Beech Farm",
    "sbi": "SJ8063 4587"
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