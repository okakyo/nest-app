import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export const main = async ()=>{
    const user = await prisma.user.upsert({
        where:{
            id:1
        },
        update:{},
        create:{
            name:"user1",
            type:0,
            introduction:{
                create:{
                    email:"test@example.com",
                    fullName:"山田　ハナコ",
                    bio:"ユーザー１です。よろしくお願いします。"
                }
            },
            articles:{
                create:[
                    {
                        title:"サンプル１",
                        isPublshed:true,
                        content:"これはサンプルで用意した記事です。"
                    },
                    {
                        title:"サンプル２",
                        isPublshed:true,
                        content:"これはサンプルで用意した記事です。"
                    },
                    {
                        title:"サンプル３",
                        isPublshed:false,
                        content:"これはサンプルで用意した記事です。"
                    },
                ]
            }
        }
    })

    console.log(user)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })