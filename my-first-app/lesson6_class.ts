class Userr{
    protected name: string;
    private age: number;
    private status: boolean;

    constructor(name: string,age: number,status: boolean){
        this.name = name;
        this.age = age;
        this.status = status;
    }
     getName():string{
      return this.name
     }
}

const userr = new Userr('Kokos', 22, true);

// console.log(userr.getName());

class Child extends Userr {

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(name: string, age:number, status:boolean){
        super(name,age,status);
    }

    getParentName():string{
       return this.name
    }
}

const userChild = new Child('Vira', 22, true);

userChild.getParentName();