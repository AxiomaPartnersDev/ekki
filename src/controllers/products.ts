import db from "../services/db";
import {Request, Response} from "express";

export default {
    async getAllProducts(req: Request, res: Response) {
        try {
            const data = await db.products.getAllProducts();
            return res.status(200).json(data)
        } catch (e) {
            return res.status(404).json({message: "error, can not get all products" + e})
        }
    },
    async getProductById(req: Request, res: Response) {
        try {
            const productId = req.params.id;
            const data = await db.products.getProductById(productId);
            return res.status(200).json(data)
        } catch (e) {
            return res.status(404).json({message: "error, can not get product" + e})
        }
    },
    async createProduct(req: Request, res: Response) {
        try {
            const data = req.body.data;
            await db.products.createProduct(data);
            return res.status(201).json({message: "product created"})
        } catch (e) {
            return res.status(400).json({message: "error, can not create products" + e})
        }
    },
    async editProduct(req: Request, res: Response) {
        try {
            const data = req.body.data;
            const productId = req.params.id;
            await db.products.editProduct(productId, data);
            return res.status(200).json({message: "product edit"})
        } catch (e) {
            return res.status(500).json({message: "error, can not edit products" + e})
        }
    },
    async deleteProduct(req: Request, res: Response) {
        try {
            const productId = req.params.id;

            await db.products.deleteProduct(productId);
            return res.status(200).json({message: "product deleted"})
        } catch (e) {
            return res.status(500).json({message: "error, can not delete products" + e});
        }
    },
    async hello(req: Request, res: Response) {
        try {
            return res.status(200).json({message: "hello bro"})
        } catch (e) {
            return res.status(500).json({message: "error, can not delete products" + e});
        }
    }
};
