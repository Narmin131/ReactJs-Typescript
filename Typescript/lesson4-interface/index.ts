// let a:number = 5;
// console.log(a);

// add, get, update, delete

// interface IDatabase {
//   add();
//   get();
//   update();
//   delete();
// }

// class MySql implements IDatabase {
//   add() {
//     console.log("MySql Add");
//   }
//   get() {
//     console.log("MySql get");
//   }
//   update() {
//     console.log("MySql update");
//   }
//   delete() {
//     console.log("MySql delete");
//   }
// }

// class MongoDB implements IDatabase {
//     add() {
//       console.log("MongoDB Add");
//     }
//     get() {
//       console.log("MongoDB get");
//     }
//     update() {
//       console.log("MongoDB update");
//     }
//     delete() {
//       console.log("MongoDB delete");
//     }
//   }

// function AddDatabase(database:IDatabase){
//         database.add();
// }
// function DeleteDatabase(database:IDatabase){
//     database.delete();
// }

// AddDatabase(new MySql());
// AddDatabase(new MongoDB());
// DeleteDatabase(new MySql());

// abstract class Database {
//     add(){
//         console.log('add database');
        
//     }
//     get(){
//         console.log('get database');

//     }
//    abstract update();
//    abstract delete();
// }

// class MySql extends Database{
//     add(){
//         console.log('add mysql');
        
//     }
//     update() {
//         console.log("update mysql");
        
//     }
//     delete() {
//         console.log('delete mysql');
        
//     }
// }

// function addDatabase(database:Database){
//     database.add();
// }
// addDatabase(new MySql());