import {Router} from "express";
import products from "../controllers/products";

const router = Router();

router.get("/all", products.getAllProducts);
router.get("/:id", products.getProductById);
router.post("/create", products.createProduct);
router.patch("/edit/:id", products.editProduct);
router.delete("/delete/:id", products.deleteProduct);
router.get("/hello", products.hello);

export default router;
