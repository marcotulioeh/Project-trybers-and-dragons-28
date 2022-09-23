import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static _amount = 0;
  private _ability: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._amount += 1;
    this._ability = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    return this._amount;
  }

  get energyType(): EnergyType {
    return this._ability;
  }
}

export default Warrior;