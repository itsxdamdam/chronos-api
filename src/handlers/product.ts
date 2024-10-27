import prisma from "../db";

// get all products
export const getAllProducts = async (res, req) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      product: true,
    },
  });

  res.json({ data: user.product });
};

export const getOneProduct = async (res, req) => {
  const id = req.params.id
}
