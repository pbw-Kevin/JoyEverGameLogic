import * as BasicLibrary from './BasicLibrary';
import * as SupportLibrary from './SupportLibrary';

export class MultipleClone extends BasicLibrary.ISkill {
  constructor (
    public owner: BasicLibrary.Player | null = null,
    public cloneCount: number = 2,
  ) {
    if (cloneCount == 2) { 
      super(owner, 'Double Clone', 2);
    } else if (cloneCount == 3) {
      super(owner, 'Triple Clone', 3);
    } else {
      super(owner, `${cloneCount} Clones`, cloneCount);
    }
  }

  execute(round: BasicLibrary.RoundInfo) {
  }
  skillType = ['Defense' as const];
}

export class MultipleGun extends BasicLibrary.ISkill {
  constructor (
    public owner: BasicLibrary.Player | null = null,
    public gunCount: number = 1,
  ) {
    if (gunCount == 1) {
      super(owner, 'Single Gun');
    } else if (gunCount == 2) { 
      super(owner, 'Double Gun');
    } else if (gunCount == 3) {
      super(owner, 'Triple Gun');
    } else {
      super(owner, `${gunCount} Guns`);
    }
  }

  execute(round: BasicLibrary.RoundInfo) {
    const targets = SupportLibrary.getTarget(round, this.gunCount);
    // Logic to handle multiple targets
  }
  skillType = ['Attack' as const];
  attackType = 'Physical' as const;
}