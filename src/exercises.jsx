import { exerciseDict } from "./Pages/exerciseDict";

export function getWorkout(height, weight, days) {
  //weight (lb) / h^2 (in)
  // if below 16
  //elif 17-30 medium
  //else height
  const exersisesPerDay = 4;
  let baseReps = 10; //reps per set
  let baseSets = 3; // # of total sets
  let baseCardio = 0;
  let obesityLevel = "";
  let bmi = weight / height ** 2;

  if (bmi <= 16) {
    obesityLevel = "LOW";
    baseReps -= 3;
    baseSets -= 1;
  } else if (bmi > 16 && bmi < 30) {
    obesityLevel = "MEDIUM";
  } else {
    obesityLevel = "HIGH";
    baseSets += 3;
    baseCardio += 1;
    //{target : [exercises]} -- exercise list
  }

  let target_by_day =[[],[],[],[],[],[],[]];
  switch (days) {
    case 1:
      target_by_day[0] = ['chest', 'arm', 'leg','back','abs', 'cardio'];
      break;
    case 2:
      target_by_day[0] = ['chest', 'arm', 'back']
      target_by_day[3] = ['leg', 'abs']
      break;
    case 3:
      target_by_day[0] = ['chest', 'arm', 'back']
      target_by_day[2] = ['leg', 'abs']
      target_by_day[4] = ['cardio']
      break;
    case 4:
      target_by_day[0] = ['arm']
      target_by_day[2] = ['chest']
      target_by_day[4] = ['back']
      target_by_day[6] = ['leg']
      break;
    case 5:
      break;
    case 6:
      break;
  }
  
  let collapsedTargetByDay = [[],[],[],[],[],[],[]]
  let workout = [[],[],[],[],[],[],[]]
  for (let day = 0; day < target_by_day.length; day++) {
    for (let e = 0; e < exersisesPerDay; e++) {
      const targetCount = target_by_day[day].length;
      const target = target_by_day[day][Math.floor(Math.random() * targetCount)]
      
      if (target) {
        const exerciseInTargetCount = Object.keys(exerciseDict[target]).length
        const exerciseInTargetIndex = Math.floor(Math.random() * exerciseInTargetCount)
        collapsedTargetByDay[day].push(target)
        
        const exerciseToDo = exerciseDict[target][Object.keys(exerciseDict[target])[exerciseInTargetIndex]]
        workout[day].push(exerciseToDo.slice().concat([baseSets, baseReps]))
        // workout[day].push(exerciseToDo.slice().concat([1,2]))
      }
      
    }
  }
  return {workout: workout, target: collapsedTargetByDay}
}
