export class Player {
  constructor(
    public name: string,
    public role: IRole,
  ){
    this.name = name;
    this.role = role;
  }
}

type Players = Player[];

export class RoundInfo {
  constructor(
    public players: Players,
  ) {
    this.players = players;
  }
  roundId: number = 1;
  nextRound() {
    this.roundId += 1;
  }
}

export class ISkill {
  constructor(
    public owner: Player | null = null,
    public name: string,
    public CD: number | string = 1,
    public startsAt: number = (typeof CD == 'string' ? 0 : CD),
  ) {
    this.owner = owner;
    this.name = name;
    this.CD = CD;
    this.startsAt = startsAt;
  }
  CDTry(round: RoundInfo) {
    if (typeof this.CD == 'string') {
      var CDGroup = { name: '', CD: 1, startsAt: 1 };
      if (this.owner) {
        var tmpCDGroup = this.owner.role.CDGroup.find((item) => {
          return item.name == this.CD;}
        )
        if (tmpCDGroup) {
          CDGroup = tmpCDGroup;
        }
      }
      return round.roundId >= CDGroup.startsAt && round.roundId >= this.startsAt;
    }
    else return round.roundId >= this.startsAt;
  }
  CDRefresh(round: RoundInfo) {
    this.startsAt = round.roundId + (typeof this.CD == 'string' ? 0 : this.CD);
    if (typeof this.CD == 'string') {
      var CDGroup = { name: '', CD: 1, startsAt: 1 };
      if (this.owner) {
        var tmpCDGroup = this.owner.role.CDGroup.find((item) => {
          return item.name == this.CD;}
        )
        if (tmpCDGroup) {
          CDGroup = tmpCDGroup;
        }
      }
      CDGroup.startsAt = round.roundId + CDGroup.CD;
    }
  }
  execute(round: RoundInfo) {
    // Default implementation does nothing
  }
  beExecuted(round: RoundInfo, src: Player) {
    // Default implementation does nothing
  }
  skillType: ('Attack' | 'Neutral' | 'Defense')[] = ['Neutral'];
  attackType: 'Mental' | 'Physical' | '' = '';
}

export type ISkills = ISkill[];

export class IRole {
  constructor(
    public name: string,
    public skills: ISkills = [],
  ) {
    this.name = name;
    this.skills = skills;
  }
  CDGroup: { name: string, CD: number, startsAt: number }[] = []
}