// Code your solution here
function findMatching(names, str){
    return( names.filter(function(name){
         return name.toLowerCase() === str.toLowerCase()
     }))
 }
 
 function fuzzyMatch(names, str){
     return(
         names.filter(function(name){
             return name[0] === str[0]
         })
     )
 }
 
 function matchName(names, str){
     return(
         names.filter(function(name){
             return name.name === str
         })
     )
 }