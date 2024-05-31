import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from "hono";
import { createBlog,updateBlog,getBlog } from '@rudra_mittal/input-validation';
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
        prisma: PrismaClient
    }
}>();

blogRouter.use("*",async(c,next)=>{
    const prisma = await new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    // @ts-ignore
    c.set("prisma",prisma);
   return  next();
  })

blogRouter.use("/",async (c, next) => {
    const jwt = c.req.header('Authorization');
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}

	const payload = await verify(jwt, c.env.JWT_SECRET);
	if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
    // @ts-ignore
	c.set('userId', payload.id);
	return  next()
});

blogRouter.get('/', async (c) => {
    const prisma = c.get("prisma");
    const posts = await prisma.post.findMany(
        {
            where:{
                authorId:c.get('userId')
            
            }
        }
    );
    return c.json(posts);
})
blogRouter.post('/', async (c) => {
	const userId = c.get('userId');
	const prisma = c.get("prisma");
    const {error}= createBlog.safeParse(await c.req.json());
    if(error){
        c.status(400);
        return c.json({error:error.message});
    }
	const body = await c.req.json();
	try{
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        });
        return c.json({
            id: post.id
        });
    }catch(error){
        c.status(400);
        return c.json({error:error});
    
    }
	
})

blogRouter.put('/', async (c) => {
    const {error}= updateBlog.safeParse(await c.req.json());
    if(error){
        c.status(400);
        return c.json({error:error.message});
    }
    const userId = c.get('userId');
	const prisma = c.get("prisma");
	const body = await c.req.json();
	await prisma.post.update({
		where: {
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

	return c.text('post updated');
});
blogRouter.post("/bulk", async (c) => {
    const {error}= getBlog.safeParse(await c.req.json());
    if(error){
        c.status(400);
        return c.json({error:error.message});
    }
    const prisma = c.get("prisma");
    const body = await c.req.json();
    const posts = await prisma.post.findMany({
       take: body.take,
       skip:body.skip,
    });
    return c.json(posts);
})
blogRouter.get('/:id', async (c) => {
	const id = c.req.param('id');
	const prisma = c.get("prisma");

	const post = await prisma.post.findUnique({
		where: {
			id: id
		}
	});
    if(!post){
        c.status(404);
        return c.json({error:"post not found"});
    }
	return c.json(post);
})