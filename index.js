// 1-ExpressJS View
// View ใน Express เป็นตัวกำหนดว่าจะใช้ HTML engine อันไหน ซึ่ง HTML engine
// เป็นเหมือนตัวช่วยในการเขียน html โดยมี engine ดังๆ เช่น Jade, EJS, Handlebars, Pug เป็นต้น
// กำหนด engine โดยใช้ app.set()
// app.set() ตัวที่ 1 - name พารามิเตอร์ตัวแรก ให้ชื่อ "views" และ value ให้เป็นชื่อของ โฟลเดอร์ที่จะใช้เก็บไฟล์ template
// app.set() ตัวที่ 2 - name พารามิเตอร์ตัวแรก ให้ชื่อ "view engine" และ value ให้เป็นชื่อของ engine

// // 1-1 ตัวอย่างการใช้ pug เป็น engine
// var path = require("path");
// var express = require("express");
// var app = express();
// app.set("views", path.resolve("view-pug")); //คือ การระบุว่าจะใช้โฟลเดอร์ใด เป็นโฟลเดอร์ที่จะใช้ engine ในที่นี้คือ โฟลเดอร์ view-pug
// app.set("view engine", "pug"); //คือ การระบุว่าจะใช้ engine ใด ในที่นี้คือ pug
// app.get("/", function (req, res) {
//   res.render("home", {
//     //res.render('home')คือ การระบุว่าจะใช้ ไฟล์ในโฟลเดอร์ view-pug อันไหนที่จะส่ง response ซึ่งในตัวอย่างนี้คือ home.pug (ไม่ต้องใส่นามสกุลไฟล์)
//     message: "Some text!", //เพิ่ม object ขึ้นมา เป็นเหมือนการส่งตัวแปรให้กับ home.pug
//     //โดยมีชื่อตัวแปรเป็น property และ value เป็นค่าของตัวแปรนั้นๆ ในตัวอย่างส่งตัวแปร message ที่มีค่า "Some text!" ไปให้ home.pug
//   });
// });
// app.listen(3000);
