import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    create: async function(newProduct: any, productPictures: any) {
        try {
            let product = await prisma.products.create({
                data: {
                    ...newProduct,
                    productPictures: {
                        createMany: {
                            data: [
                                ...productPictures
                            ]
                        }
                    }
                },
                include: {
                    productPictures: true
                }
            });

            return {
                status: true,
                message: "Create product ok!",
                data: product
            }
        }catch(err) {
            console.log("lỗi model", err)
            return {
                status: false,
                message: "Lỗi model",
                data: null
            }
        }
    }
}