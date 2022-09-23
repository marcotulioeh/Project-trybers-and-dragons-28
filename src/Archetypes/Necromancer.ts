import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static _amount = 0;
  private _ability: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._amount += 1;
    this._ability = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return this._amount;
  }

  get energyType(): EnergyType {
    return this._ability;
  }
}

export default Necromancer;