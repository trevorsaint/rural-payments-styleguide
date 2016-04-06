var permissions = [
  
  
  {
    
    "id": 1,
    
    "name": "Bill John Smith",
    
    "email": "bill.john.smith@gmail.com",
    
    "access": [
    
      {
        
        "level": "Business details",
        
        "actions": [
          
          {
            "title": "Can view people associated with the business"
          }
          
        ]
        
      },
      
      {
        
        "level": "Land details",
        
        "actions": [
          
          {
            "title": "Can view land, features and covers"
          },
          
          {
            "title": "Can&rsquo;t make changes to land, features and covers"
          }
          
        ]
        
      },
      
      {
        
        "level": "Basic payment scheme",
        
        "actions": [
          
          {
            "title": "No access"
          }
          
        ]
        
      },
      
    ]
    
  },
  
  
  {
    
    "id": 2,
    
    "name": "Strutt &amp; Parker Newbury",
    
    "email": "strutt-and-parker@gmail.com",
    
    "agency": 1,
    
    "access": [ 
    
      {
        
        "level": "Business details",
        
        "actions": [
          
          {
            "title": "Can edit business contact details"
          },
          
          {
            "title": "Can&rsquo;t make legal changes to the business"
          }
          
        ]
        
      },
      
      {
        
        "level": "Land details",
        
        "actions": [
          
          {
            "title": "Can view land, features and covers"
          }
          
        ]
        
      },
      
      {
        
        "level": "Basic payment scheme",
        
        "actions": [
          
          {
            "title": "No access"
          }
          
        ]
        
      },
      
    ]
    
  },
  
  
  {
    
    "id": 3,
    
    "name": "Sidney Bechet",
    
    "email": "sidney.bechet@gmail.com",
    
    "agent": 1,
    
    "agencyName": "Strutt &amp; Parker Newbury",
    
    "access": [ 
    
      {
        
        "level": "Business details",
        
        "actions": [
          
          {
            "title": "Can edit business contact details"
          },
          
          {
            "title": "Can&rsquo;t make legal changes to the business"
          }
          
        ]
        
      },
      
      {
        
        "level": "Land details",
        
        "actions": [
          
          {
            "title": "Can edit land, features and covers"
          },
          
          {
            "title": "Can transfer land"
          }
          
        ]
        
      },
      
      {
        
        "level": "Basic payment scheme",
        
        "actions": [
          
          {
            "title": "No access"
          }
          
        ]
        
      }
      
    ]
    
  },
  
  
  {
    
    "id": 4,
    
    "name": "Nina Anne Gallop",
    
    "email": "nina.anne.gallop@gmail.com",
    
    "access": [
    
      {
        
        "level": "Business details",
        
        "actions": [
          
          {
            "title": "Can edit business contact details"
          },
          
          {
            "title": "Can&rsquo;t make legal changes to the business"
          }
          
        ]
        
      },
      
      {
        
        "level": "Land details",
        
        "actions": [
          
          {
            "title": "No access"
          }
          
        ]
        
      },
      
      {
        
        "level": "Basic payment scheme",
        
        "actions": [
          
          {
            "title": "No access"
          }
          
        ]
        
      }
      
    ]
    
  },
  
    
];
  
 
exports.getPermissionsEntries = function() {
  return permissions;
}
 
 
exports.getPermissionsEntry = function(id) {
  for(var i=0; i < permissions.length; i++) {
    if(permissions[i].id == id) return permissions[i];
  }
}
