import IProduct from "../../interfaces/Product.interface";
import Product from "../../models/Product";

export default {
    createProduct(newProduct: IProduct) {
        const product = new Product({
            ...newProduct
        })
        return product.save();
    },
    getAllProducts() {
        return Product.find();
    },
    getProductById(_id: string) {
        return Product.findById(_id)
    },
    async editProduct(_id: string, dataToUpdate: any) {
        const product = await Product.findById(_id);
        if (!product) return;

        for (let key in dataToUpdate) {
            // @ts-ignore
            product[key] = dataToUpdate[key];
        }
        return product.save();
    },
    async deleteProduct(_id: string) {
        let product = await Product.findById(_id);
        if (!product || !Boolean(product)) return;
        return product.delete({_id});
    },
}
