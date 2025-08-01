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
    super(owner, 'Radar', 'Radar', 3);
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

export class MultipleRadarGun extends BasicLibrary.ISkill {
  constructor(
    public owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 'Multiple Radar Gun', 'Radar', 3);
  }
  skillType = ['Attack' as const];
  attackType = 'Physical' as const;
}

export class ABomb extends BasicLibrary.ISkill {
  constructor(
    public owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 'A-Bomb');
  }
  skillType = ['Attack' as const];
  attackType = 'Physical' as const;
}

export class Plane extends BasicLibrary.ISkill {
  constructor(
    public owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 'Plane', 2, 2);
  }
  skillType = ['Defense' as const];
}

export class Rocket extends BasicLibrary.ISkill {
  constructor(
    public owner: BasicLibrary.Player | null = null,
  ) {
    super(owner, 'Rocket', 2, 2);
  }
  skillType = ['Defense' as const];
}

export class CommonPeople extends BasicLibrary.IRole {
  constructor() {
    super('Common People', [
      new Eric(), new Steal(), new Scissors(), new Shelf(),
      new DoubleClone(), new SingleGun(), new DoubleGun(),
      new BilibiliFuckingMan(), new Baishi(), new Radar(),
      new Exchange(), new MultipleRadarGun(), new ABomb(),
      new Plane(), new Rocket()
    ])
    this.CDGroup.push({ name: 'Radar', CD: 3, startsAt: 3 });
  }
  isCommonPeople: boolean = true;
  bulletCount: number = 0;
}