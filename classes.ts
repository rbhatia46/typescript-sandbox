interface userInterface{
    name:string;
    email:string;
    age:number;
    register();
    payInvoice();
}


 class User implements userInterface{
     private name:string;
      private email:string;
      public age:number;

     constructor(name:string,email:string,age:number){
            this.name = name; // this pretends to the current class     
             this.email = email;
            this.age =  age;
            console.log("User created: " + this.name );
     }

     private register(){
         console.log(this.name + ' is now registered');
     }

     payInvoice(){
         console.log(this.name + ' paid invoice'); 
     }
 }

 class Member extends User{             // sub extends super
     id : number;

     constructor(id:number,name:string,email:string,age:number){
        super(name,email,age); // constructor for derived class must contain a super call.
        this.id = id;
     }

     payInvoice(){
         super.payInvoice();
     }
 }

 //let john = new User('John Doe','john@gmail.com',34);

// console.log(john.age); //outputs 34
//john.register(); // error because method is private

let mike:User = new Member(1,"Mike Smith",'mike@gmail.com',19);
mike.payInvoice();