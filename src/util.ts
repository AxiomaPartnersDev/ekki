import mongoose from "mongoose";
import db from "./services/db";
import config from "./config";

const createProducts = async () => {
    for (let i = 0; i < 30; i++) {
        await db.products.createProduct({
            image1: "https://www.chihuadog.ru/a/86675/",
            image2: "https://www.chihuadog.ru/a/86675/",
            image3: "https://www.chihuadog.ru/a/86675/",
            title: "toy",
            // oldPrice: "49" + i,
            price: "4" + i,
            count: "1",
            totalPrice: "4" + i,
            sizes: ["s", "m"],
            description: {
                title: "title",
                text1: "text1",
                subtitle: "subtitle",
                text2: "text2",
            },
            category: "clothes"
        })
    }
}


const util = async () => {
    mongoose.set('strictQuery', true);
    await mongoose.connect(config.dbConnectLink);

    await createProducts()
};
util().then(() => {
    console.log("util finished");
    process.exit(0);
}).catch((e) => {
    console.error("error", e);
    process.exit(1);
})
