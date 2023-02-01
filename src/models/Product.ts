import mongoose, {Document, Schema} from 'mongoose';
import IProduct from "../interfaces/Product.interface";

export interface IProductSchema extends IProduct, Document {
}

const ProductSchema: Schema<IProductSchema> = new Schema(
    {
        image1: {type: String, required: true},
        image2: {type: String},
        image3: {type: String},
        title: {type: String, required: true},
        oldPrice: {type: String},
        price: {type: String, required: true},
        count: {type: String},
        totalPrice: {type: String},
        xs: { xs:Boolean, quantity: String },
        s: { s: Boolean, quantity: String },
        m: { m: Boolean, quantity: String },
        l: { l: Boolean, quantity: String },
        xl: { xl: Boolean, quantity: String },
        xxl: { xxl: Boolean, quantity: String },
        description: {type: {}},
        category: {type: String},
        sales: {type: Boolean}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IProductSchema>('Product', ProductSchema);
