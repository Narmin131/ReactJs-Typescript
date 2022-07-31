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
// var Database = /** @class */ (function () {
//     function Database() {
//     }
//     Database.prototype.add = function () {
//         console.log('add database');
//     };
//     Database.prototype.get = function () {
//         console.log('get database');
//     };
//     return Database;
// }());
// var MySql = /** @class */ (function (_super) {
//     __extends(MySql, _super);
//     function MySql() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
//     MySql.prototype.add = function () {
//         console.log('add mysql');
//     };
//     MySql.prototype.update = function () {
//         console.log("update mysql");
//     };
//     MySql.prototype["delete"] = function () {
//         console.log('delete mysql');
//     };
//     return MySql;
// }(Database));

// function addDatabase(database) {
//     database.add();
// }
// addDatabase(new MySql());