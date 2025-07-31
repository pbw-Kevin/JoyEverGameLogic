import * as BasicLibrary from './BasicLibrary.ts';
import * as SupportLibrary from './SupportLibrary.ts';
import * as GeneralLibrary from './GeneralLibrary.ts';

export class Eric extends BasicLibrary.ISkill {
  constructor(
    public owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 'Eric');
  }
}

export class Steal extends BasicLibrary.ISkill {
  constructor(
    public owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 'Steal');
  }
  execute(round: BasicLibrary.RoundInfo) {
    const target = SupportLibrary.getTarget(round, 1);
  }
}

export class Scissors extends BasicLibrary.ISkill {
  constructor(
    public owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 'Cut');
  }
  execute(round: BasicLibrary.RoundInfo) {
  }
}

export class Shelf extends BasicLibrary.ISkill {
  constructor(
    public owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 'Shelf');
  }
  execute(round: BasicLibrary.RoundInfo) {
  }
  skillType = ['Defense' as const];
}

export class DoubleClone extends GeneralLibrary.MultipleClone {
  constructor(
    owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 2);
  }
}

export class SingleGun extends GeneralLibrary.MultipleGun {
  constructor(
    owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 1);
  }
}

export class DoubleGun extends GeneralLibrary.MultipleGun {
  constructor(
    owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 2);
  }
}

export class BilibiliFuckingMan extends BasicLibrary.ISkill {
  constructor(
    public owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 'Bilibili Fucking Man', 5);
  }
  skillType = ['Attack' as const, 'Neutral' as const];
  attackType = 'Mental' as const;
}

export class Baishi extends BasicLibrary.ISkill {
  constructor(
    public owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 'Baishi', 5);
  }
  skillType = ['Attack' as const];
  attackType = 'Mental' as const;
}

export class Radar extends BasicLibrary.ISkill {
  constructor(
    public owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 'Radar', 3);
  }
  skillType = ['Defense' as const];
}

export class Exchange extends BasicLibrary.ISkill {
  constructor(
    public owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 'Exchange', 2, 3);
  }
  skillType = ['Defense' as const]; 
}

export class CommonPeople extends BasicLibrary.IRole {
  constructor() {
    super('Common People', [])
  }
  isCommonPeople: boolean = true;
  bulletCount: number = 0
}