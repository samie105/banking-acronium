// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const Model = mongoose.Model;

//

// const PaymentAddressSchema = new Schema({
//   name: { type: String, default: "name" },
//   bitcoin: { type: String, default: "bitcoin" },
//   ethereum: { type: String, default: "ethereum" },
//   litecoin: { type: String, default: "litecoin" },
//   dogecoin: { type: String, default: "dogecoin" },
//   cashapp: { type: String, default: "cashapp" },
//   venmo: { type: String, default: "venmo" },
//   zelle: { type: String, default: "zelle" },
//   paypal: { type: String, default: "paypal" },
// });

// const Address =
//   mongoose.models.PaymentAddress ||
//   mongoose.model("PaymentAddress", PaymentAddressSchema);

// const addDefaultDocument = async () => {
//   try {
//     const defaultDocument = new Address({
//       name: "capitalnexusonline",
//       bitcoin: "bitcoin",
//       ethereum: "ethereum",
//       litecoin: "litecoin",
//       dogecoin: "dogecoin",
//       cashapp: "cashapp",
//       venmo: "venmo",
//       zelle: "zelle",
//       paypal: "paypal",
//     });
//     await defaultDocument.save();
//     console.log("Default document added to the database");
//   } catch (error) {
//     console.error("Error adding default document:", error);
//   }
// };

// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
//   addDefaultDocument();
// });

// mongoose.connection.on("error", (error) => {
//   console.error("Error connecting to MongoDB:", error);
// });
