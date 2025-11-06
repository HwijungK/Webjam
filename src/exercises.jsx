function getWorkout(height, weight, days) {
  //weight (lb) / h^2 (in)
  // if below 16
  //elif 17-30 medium
  //else height

  baseReps = 10; //reps per set
  baseSets = 3; // # of total sets
  baseCardio = 0;

  obesityLevel = "";

  bmi = weight / height ** 2;

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
}
