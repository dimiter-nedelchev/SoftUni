class Triathlon {
    constructor(competitionName){
        this.competitionName= competitionName,
        this.participants= {},
        this.listOfFinalists= []
    }
    
    addParticipant(participantName, participantGender) {
        if(!this.participants.hasOwnProperty(participantName)){
            this.participants[participantName]= participantGender;
            return `A new participant has been added - ${participantName}`
        }
            return `${participantName} has already been added to the list`;
    }

    completeness (participantName, condition) {
        if(!this.participants.hasOwnProperty(participantName)){
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if(condition < 30){
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        let completedCount= Math.round(condition/30);

        if(completedCount < 3) {
            return `${participantName} could only complete ${completedCount} of the disciplines`
        }
        else{
            this.listOfFinalists.push({name: participantName, gender: this.participants[participantName]})
            return `Congratulations, ${participantName} finished the whole competition`
        }
    }

    rewarding (participantName) {
        let isFound= this.listOfFinalists.find((p) => p.name == participantName);

        if(isFound){
            return `${participantName} was rewarded with a trophy for his performance`
        }
        else{
            return `${participantName} is not in the current finalists list`;
        }
    }

    showRecord (criteria) {
        if(this.listOfFinalists.length < 1){
            return `There are no finalists in this competition`
        }

        if(criteria == 'all'){
            let finalists= [];

            this.listOfFinalists.forEach(finalist => {
                finalists.push(finalist.name);
            });

            let sortedFinalists= finalists.sort((a,b) => a.localeCompare(b));

            return `List of all ${this.competitionName} finalists:\n${sortedFinalists.join('\n')}`
        }

        else {
            let winner= this.listOfFinalists.find((f) => f.gender == criteria);

            if(!winner){
                return `There are no ${criteria}'s that finished the competition`
            }
            else{
                return `${winner.name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }
        }
    }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));



