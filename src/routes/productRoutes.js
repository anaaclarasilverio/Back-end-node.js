import { Router } from "express";
import { getProducts, createProductController, getProduct, updateProductController, deleteProductController} from "../controllers/productController.js";

const router = new Router();

router.get("/products", getProducts);
router.post("/products", createProductController)
router.get("/products/:id", getProduct);
router.patch("/products/:id", updateProductController);
router.delete("/products/:id", deleteProductController);

export default router;