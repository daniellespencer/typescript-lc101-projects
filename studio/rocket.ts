import { Astronaut } from './astronaut';
import { Cargo } from './cargo';
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = []
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;

    } 

    sumMass( items: Payload[] ): number {        
        let itemsSum = 0;
        for(let i = 0; i < items.length; i++){
            itemsSum += items[i].massKg
        };
        
        return itemsSum;
    };

    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };

    canAdd(item: Payload): boolean{
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }
    };

    addCargo(cargo: Cargo){
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else{
            return false;
        }
    };

    addAstronaut(astronaut: Astronaut){
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else{
            return false;
        }
    };
};