var businesses = [
  
  {
    "id": 1,
    "name": "Hansels Farm",
    "sbi": "SJ8063 4774"
  },
  
  {
    "id": 2,
    "name": "Beech Farm",
    "sbi": "SJ8063 4587"
  },
  
  {
    "id": 3,
    "name": "Willow Farm",
    "sbi": "SJ8063 4461"
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