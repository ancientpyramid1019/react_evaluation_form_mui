/*
 Navicat Premium Data Transfer

 Source Server         : MongoDB
 Source Server Type    : MongoDB
 Source Server Version : 60004
 Source Host           : localhost:27017
 Source Schema         : evaluation_db

 Target Server Type    : MongoDB
 Target Server Version : 60004
 File Encoding         : 65001

 Date: 29/03/2023 18:41:42
*/


// ----------------------------
// Collection structure for employees
// ----------------------------
db.getCollection("employees").drop();
db.createCollection("employees");

// ----------------------------
// Documents of employees
// ----------------------------
db.getCollection("employees").insert([ {
    _id: ObjectId("641f32c5d5504967209e057f"),
    name: "Ghost",
    "sub_dep_id": ObjectId("641f94a8a3f40f61a453b548"),
    createdAt: ISODate("2023-03-25T17:43:33.221Z"),
    updatedAt: ISODate("2023-03-25T17:43:33.221Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employees").insert([ {
    _id: ObjectId("641f32dad5504967209e0581"),
    name: "Nabaa",
    "sub_dep_id": ObjectId("641f94a8a3f40f61a453b548"),
    createdAt: ISODate("2023-03-25T17:43:54.407Z"),
    updatedAt: ISODate("2023-03-25T17:43:54.407Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employees").insert([ {
    _id: ObjectId("64218f6185f009b364530697"),
    name: "Carlos",
    "sub_dep_id": ObjectId("641f94b2a3f40f61a453b54a"),
    createdAt: ISODate("2023-03-27T12:43:13.324Z"),
    updatedAt: ISODate("2023-03-27T12:43:13.324Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employees").insert([ {
    _id: ObjectId("64219fbf54eeca88cc2cafa5"),
    name: "Carlos Var",
    "sub_dep_id": ObjectId("64219e54e101329b54b0ca5e"),
    createdAt: ISODate("2023-03-27T13:53:03.475Z"),
    updatedAt: ISODate("2023-03-27T13:53:03.475Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employees").insert([ {
    _id: ObjectId("64219fce54eeca88cc2cafa9"),
    name: "Tomas",
    "sub_dep_id": ObjectId("64219e74e101329b54b0ca66"),
    createdAt: ISODate("2023-03-27T13:53:18.738Z"),
    updatedAt: ISODate("2023-03-27T13:53:18.738Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employees").insert([ {
    _id: ObjectId("64219fd954eeca88cc2cafad"),
    name: "Anthony",
    "sub_dep_id": ObjectId("64219e4be101329b54b0ca5a"),
    createdAt: ISODate("2023-03-27T13:53:29.719Z"),
    updatedAt: ISODate("2023-03-27T13:53:29.719Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employees").insert([ {
    _id: ObjectId("64219fde54eeca88cc2cafb1"),
    name: "Jane",
    "sub_dep_id": ObjectId("64219e4be101329b54b0ca5a"),
    createdAt: ISODate("2023-03-27T13:53:34.869Z"),
    updatedAt: ISODate("2023-03-27T13:53:34.869Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employees").insert([ {
    _id: ObjectId("64219fe854eeca88cc2cafb5"),
    name: "Nabaa",
    "sub_dep_id": ObjectId("64219e54e101329b54b0ca5e"),
    createdAt: ISODate("2023-03-27T13:53:44.829Z"),
    updatedAt: ISODate("2023-03-27T13:53:44.829Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employees").insert([ {
    _id: ObjectId("64219ffb54eeca88cc2cafb9"),
    name: "Don",
    "sub_dep_id": ObjectId("64219e74e101329b54b0ca66"),
    createdAt: ISODate("2023-03-27T13:54:03.207Z"),
    updatedAt: ISODate("2023-03-27T13:54:03.207Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employees").insert([ {
    _id: ObjectId("6421a00454eeca88cc2cafbd"),
    name: "Diana",
    "sub_dep_id": ObjectId("64219e6ce101329b54b0ca62"),
    createdAt: ISODate("2023-03-27T13:54:12.791Z"),
    updatedAt: ISODate("2023-03-27T13:54:12.791Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employees").insert([ {
    _id: ObjectId("6421a164081b51b2a49a687d"),
    name: "Nabaa N",
    "sub_dep_id": ObjectId("6421a0fd081b51b2a49a6849"),
    createdAt: ISODate("2023-03-27T14:00:04.957Z"),
    updatedAt: ISODate("2023-03-27T14:00:13.219Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employees").insert([ {
    _id: ObjectId("6423d55a8b101d4234770b88"),
    name: "Carlos Rodrigo",
    "sub_dep_id": ObjectId("64219e54e101329b54b0ca5e"),
    createdAt: ISODate("2023-03-29T06:06:18.887Z"),
    updatedAt: ISODate("2023-03-29T06:06:40.331Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for maindeps
// ----------------------------
db.getCollection("maindeps").drop();
db.createCollection("maindeps");

// ----------------------------
// Documents of maindeps
// ----------------------------
db.getCollection("maindeps").insert([ {
    _id: ObjectId("641cd4a2dc58d136dc8af22f"),
    name: "Front of house",
    createdAt: ISODate("2023-03-23T22:37:22.392Z"),
    updatedAt: ISODate("2023-03-23T22:39:35.477Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("maindeps").insert([ {
    _id: ObjectId("641cd7097b01121e74a27f24"),
    name: "Back of house",
    createdAt: ISODate("2023-03-23T22:47:37.523Z"),
    updatedAt: ISODate("2023-03-23T22:47:37.523Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for roles
// ----------------------------
db.getCollection("roles").drop();
db.createCollection("roles");

// ----------------------------
// Documents of roles
// ----------------------------
db.getCollection("roles").insert([ {
    _id: ObjectId("641c61ba30ddf92ef8ae939f"),
    name: "evaluator",
    __v: NumberInt("0")
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("641c61ba30ddf92ef8ae93a0"),
    name: "admin",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for subdeps
// ----------------------------
db.getCollection("subdeps").drop();
db.createCollection("subdeps");

// ----------------------------
// Documents of subdeps
// ----------------------------
db.getCollection("subdeps").insert([ {
    _id: ObjectId("641f94a8a3f40f61a453b548"),
    name: "Waiter",
    "main_dep_id": ObjectId("641cd4a2dc58d136dc8af22f"),
    createdAt: ISODate("2023-03-26T00:41:12.451Z"),
    updatedAt: ISODate("2023-03-26T00:41:12.451Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subdeps").insert([ {
    _id: ObjectId("641f94b2a3f40f61a453b54a"),
    name: "Runner",
    "main_dep_id": ObjectId("641cd4a2dc58d136dc8af22f"),
    createdAt: ISODate("2023-03-26T00:41:22.942Z"),
    updatedAt: ISODate("2023-03-26T00:41:22.942Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subdeps").insert([ {
    _id: ObjectId("64219e4be101329b54b0ca5a"),
    name: "Host",
    "main_dep_id": ObjectId("641cd4a2dc58d136dc8af22f"),
    createdAt: ISODate("2023-03-27T13:46:51.744Z"),
    updatedAt: ISODate("2023-03-27T13:46:51.744Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subdeps").insert([ {
    _id: ObjectId("64219e54e101329b54b0ca5e"),
    name: "Cashier",
    "main_dep_id": ObjectId("641cd4a2dc58d136dc8af22f"),
    createdAt: ISODate("2023-03-27T13:47:00.78Z"),
    updatedAt: ISODate("2023-03-27T13:47:00.78Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subdeps").insert([ {
    _id: ObjectId("64219e6ce101329b54b0ca62"),
    name: "File Management",
    "main_dep_id": ObjectId("641cd7097b01121e74a27f24"),
    createdAt: ISODate("2023-03-27T13:47:24.58Z"),
    updatedAt: ISODate("2023-03-27T13:47:24.58Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subdeps").insert([ {
    _id: ObjectId("64219e74e101329b54b0ca66"),
    name: "Kitchen",
    "main_dep_id": ObjectId("641cd7097b01121e74a27f24"),
    createdAt: ISODate("2023-03-27T13:47:32.398Z"),
    updatedAt: ISODate("2023-03-27T13:47:32.398Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subdeps").insert([ {
    _id: ObjectId("6421a0fd081b51b2a49a6849"),
    name: "New Sub",
    "main_dep_id": ObjectId("641cd7097b01121e74a27f24"),
    createdAt: ISODate("2023-03-27T13:58:21.008Z"),
    updatedAt: ISODate("2023-03-29T06:04:34.184Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");
db.getCollection("users").createIndex({
    email: NumberInt("1")
}, {
    name: "email_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("641e2c79b166835ff0ab86be"),
    roles: [
        ObjectId("641c61ba30ddf92ef8ae93a0")
    ],
    username: "admin",
    email: "admin@admin.com",
    password: "$2a$08$Tf/n7UC9CRKGAxCs7RXVGOyP4BoFKfmDNXYrpmfXIWQVVhns4ePye",
    criteria: [ ],
    createdAt: ISODate("2023-03-24T23:04:25.351Z"),
    updatedAt: ISODate("2023-03-24T23:04:25.367Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("641e6428fc7cfe0d040a5f92"),
    roles: [
        ObjectId("641c61ba30ddf92ef8ae939f")
    ],
    username: "Nabaa",
    email: "Nabaa@gmail.com",
    password: "$2a$08$zeYTA7Oss/8.TNKb8wkwau/LFrdUDPWI8Lwr3NjG75/K68F1ZI8O.",
    criteria: [
        {
            title: "First Criteria",
            grade: NumberInt("4"),
            _id: ObjectId("641f4d83f8af896fa8cc1ca0"),
            "emp_id": ObjectId("641f32c5d5504967209e057f")
        },
        {
            title: "Second Criteria",
            grade: NumberInt("9"),
            _id: ObjectId("641f4d83f8af896fa8cc1ca1"),
            "emp_id": ObjectId("641f32c5d5504967209e057f")
        },
        {
            title: "qwe",
            grade: NumberInt("3"),
            _id: ObjectId("641f4ee28f61896a6408ba2e"),
            "emp_id": ObjectId("641f32dad5504967209e0581")
        },
        {
            title: "qwe",
            grade: NumberInt("3"),
            _id: ObjectId("641f4ef78f61896a6408ba31"),
            "emp_id": ObjectId("641f32c5d5504967209e057f")
        },
        {
            title: "zxc",
            grade: NumberInt("8"),
            _id: ObjectId("641f4ef78f61896a6408ba32"),
            "emp_id": ObjectId("641f32c5d5504967209e057f")
        },
        {
            title: "First Criteria",
            grade: NumberInt("8"),
            _id: ObjectId("641fb7f332544571ac644b69"),
            "emp_id": ObjectId("641f32e0d5504967209e0583")
        },
        {
            title: "Second Criteria",
            grade: NumberInt("5"),
            _id: ObjectId("641fb7f332544571ac644b6a"),
            "emp_id": ObjectId("641f32e0d5504967209e0583")
        },
        {
            title: "First",
            grade: NumberInt("5"),
            _id: ObjectId("641fb9e91b7bc61430dc6b07"),
            "emp_id": ObjectId("641f32c5d5504967209e057f")
        },
        {
            title: "Second",
            grade: NumberInt("8"),
            _id: ObjectId("641fb9e91b7bc61430dc6b08"),
            "emp_id": ObjectId("641f32c5d5504967209e057f")
        },
        {
            title: "First",
            grade: NumberInt("3"),
            _id: ObjectId("641fba561b7bc61430dc6b20"),
            "emp_id": ObjectId("641f32dad5504967209e0581")
        },
        {
            title: "Second",
            grade: NumberInt("6"),
            _id: ObjectId("641fba561b7bc61430dc6b21"),
            "emp_id": ObjectId("641f32dad5504967209e0581")
        },
        {
            title: "Nabaa test one",
            grade: NumberInt("10"),
            _id: ObjectId("6421a1c8081b51b2a49a6896"),
            "emp_id": ObjectId("6421a164081b51b2a49a687d")
        },
        {
            title: "Nabaa",
            grade: NumberInt("4"),
            _id: ObjectId("6422b748d45afc3f541e7a64"),
            "emp_id": ObjectId("6421a164081b51b2a49a687d")
        },
        {
            title: "test",
            grade: NumberInt("4"),
            _id: ObjectId("6423d935567b87311cb00ed9"),
            "emp_id": ObjectId("64219ffb54eeca88cc2cafb9")
        },
        {
            title: "test1",
            grade: NumberInt("4"),
            _id: ObjectId("6423db0a567b87311cb00ef9"),
            "emp_id": ObjectId("64219ffb54eeca88cc2cafb9")
        },
        {
            title: "test2",
            grade: NumberInt("9"),
            _id: ObjectId("6423db0a567b87311cb00efa"),
            "emp_id": ObjectId("64219ffb54eeca88cc2cafb9")
        }
    ],
    createdAt: ISODate("2023-03-25T03:02:00.709Z"),
    updatedAt: ISODate("2023-03-29T06:30:34.924Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6423d5258b101d4234770b61"),
    roles: [
        ObjectId("641c61ba30ddf92ef8ae939f")
    ],
    username: "test1",
    email: "test@test.com",
    password: "$2a$08$T13VwGaBX0cVrGwXUbgwf.XMlVVGcknpJg.8sHzScNE14avygLV9u",
    criteria: [
        {
            title: "test1",
            grade: NumberInt("5"),
            _id: ObjectId("6423d5b98b101d4234770ba1"),
            "emp_id": ObjectId("6423d55a8b101d4234770b88")
        },
        {
            title: "test3",
            grade: NumberInt("8"),
            _id: ObjectId("6423d5b98b101d4234770ba2"),
            "emp_id": ObjectId("6423d55a8b101d4234770b88")
        }
    ],
    createdAt: ISODate("2023-03-29T06:05:25.586Z"),
    updatedAt: ISODate("2023-03-29T06:07:53.96Z"),
    __v: NumberInt("1")
} ]);
