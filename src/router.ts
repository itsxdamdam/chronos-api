import { Router } from "express";
import { body, oneOf, check } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { createProduct, getProducts, getOneProduct, updateProduct, deleteProduct } from "./handlers/product";

const router = Router();

/**
 * Products
 */

router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  updateProduct
);

router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);

router.delete("/product/:id", deleteProduct);

/**
 * Update
 */

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  oneOf([
    check("status").equals("IN_PROGRESS"),
    check("status").equals("SHIPPED"),
    check("status").equals("DEPRECATED"),
  ]),
  body("version").optional(),
  () => {}
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  () => {}
);
router.delete("/update/:id", () => {});

/**
 * Update Point
 */

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.post(
  "/updatepoint",
  body("name").exists().isString(),
  body("description").exists().isString(),
  body("updateId").exists().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
