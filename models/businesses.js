var people = [
  
  {
    "id": 1,
    "business-name": "Hansels Farm",
    "sbi": "SJ8063_4774"
  },
  
  {
    "id": 2,
    "business-name": "Willow Farm",
    "sbi": "SJ8063_4461"
  }
    
];
  
 
exports.getBusinessEntries = function() {
  return businesses;
}
 
 
exports.getBusinesseEntry = function(id) {
  for(var i=0; i < businesses.length; i++) {
    if(businesses[i].id == id) return businesses[i];
  }
}