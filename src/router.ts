import { Router } from "express";
import { body, oneOf, check } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
  createProduct,
  getProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} from "./handlers/product";
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from "./handlers/update";
import { log } from "console";

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

router.get("/update", getUpdates);
router.get("/update/:id", getOneUpdate);
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
  updateUpdate
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  createUpdate
);
router.delete("/update/:id", deleteUpdate);

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

router.use((err, req, res, next) => {
  console.log(err);
  res.json({message: "error from router"})
})

export default router;
