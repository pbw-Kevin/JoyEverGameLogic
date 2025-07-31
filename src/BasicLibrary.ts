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
    public CD: number = 1,
    public startsAt: number = CD,
  ) {
    this.owner = owner;
    this.name = name;
    this.CD = CD;
    this.startsAt = startsAt;
  }
  CDTry(round: RoundInfo) {
    return round.roundId >= this.startsAt;
  }
  CDRefresh(round: RoundInfo) {
    this.startsAt = round.roundId + this.CD;
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
}