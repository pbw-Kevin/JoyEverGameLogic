class Main{
    constructor(){
    }
    set(info){
        this.info=info;
    }
}

export class Role1 extends Main.info{
    constructor(info){
        super(info);
    }
    log() {
        console.log(this.info);
    }
}
export function Import(main){
    Main.set(main);
    return Role1;
}