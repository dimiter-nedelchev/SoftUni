function constructionCrew(worker){

    if(worker.dizziness){
        worker.levelOfHydrated+= (0.1 * worker.weight) * worker.experience;
        worker.dizziness= false;
    }
    return worker
}
constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  
  
  );