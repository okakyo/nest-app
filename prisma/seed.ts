import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export const main = async ()=>{
    const user = await prisma.user.upsert({
        where:{
           id:"sample-1"
        },
        update:{},
        create:{
            id:"sample-1",
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
                        isPublished:true,
                        description:"sample text 1",
                        content:"これはサンプルで用意した記事です。"
                    },
                    {
                        title:"サンプル２",
                        isPublished:true,
                        description:"sample text 2",
                        content:"これはサンプルで用意した記事です。"
                    },
                    {
                        title:"サンプル３",
                        isPublished:false,
                        description:"sample text 3",
                        content:"これはサンプルで用意した記事です。"
                    },
                ]
            }
        }
    })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
