const hq = 42
function distanceFromHqInBlocks(pickup) {
   if(pickup>hq){
       return pickup-hq
   }
   else {
       return hq-pickup 
   }
        
  }

function distanceFromHqInFeet(pickup) {
    distanceFromHqInBlocks(pickup);
  if(pickup>hq){
  return (pickup-hq)*264
    
  }
  else { 
      return(hq-pickup)*264
  }
  }

function distanceTravelledInFeet(start, destination) {
    if(destination>start){
        return (destination-start)*264
    }
    else{
        return (start-destination)*264
    }
  }
 
let charges
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination)<=400){
        return 0
    }
    else if (distanceTravelledInFeet(start, destination)>400 && distanceTravelledInFeet(start, destination)<2000){
        return (distanceTravelledInFeet(start, destination)- 400)*0.02
    }
    else if (distanceTravelledInFeet(start, destination)>2000 && distanceTravelledInFeet(start, destination)<=2500){
        return 25
    }
    else if (distanceTravelledInFeet(start, destination)>2500){
         return 'cannot travel that far'
    }
    
    }


  