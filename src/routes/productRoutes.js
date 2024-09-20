import { Router } from "express";
import { getProducts, createProductController, getProduct} from "../controllers/productController.js";

const router = new Router();

router.get("/products", getProducts);
router.get("/products", createProductController)
router.get("/products/:id", getProduct);

export default router;