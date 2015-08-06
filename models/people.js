var people = [
  
  {
    "id": 1, 
    "firstname": "Sydney",
    "lastname": "Bechett",
    "role": "Business owner",
    "ni": "RP 65 94 23 D",
    "email": "defra-user-1@kainos.com",
    "share": 60,
    "rights": 10,
    "farming": true
  },
  
  {
    "id": 2, 
    "firstname": "Trevor",
    "lastname": "Saint",
    "role": "Creative director",
    "ni": "RP 65 94 23 D",
    "email": "t.saint@kainos.com",
    "share": 10,
    "rights": "",
    "farming": false
  },
  
  {
    "id": 3, 
    "firstname": "Shirley",
    "lastname": "Dick",
    "role": "Partner",
    "ni": "RP 65 94 23 D",
    "email": "s.dick@kainos.com",
    "share": 10,
    "rights": 25,
    "farming": ""
  }
    
];
  
 
exports.getPeopleEntries = function() {
  return people;
}
 
 
exports.getPeopleEntry = function(id) {
  for(var i=0; i < people.length; i++) {
    if(people[i].id == id) return people[i];
  }
}