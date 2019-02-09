export default {
    Mutation: {
        signupUser: async (_, {username,email,password}, {User}) => {
            const user=await User.findOne({username})
            if(user){
                throw new Error("user already exist")
            }
            const newUser=await new User({username,email,password}).save()
            return newUser
        },
        addPost:async (_,{title,imageUrl,categories,description,creatorId},{Post})=>{
            const newPost=new Post({
                title,
                imageUrl,
                description,
                categories,
                createdBy:creatorId
            }).save()
            return newPost
        }
    },
    Query:{
        getPosts:async (_,args,{Post})=> {
            const posts=await Post.find({}).sort({createdDate:"desc"}).populate({
                path:"createdBy",
                ref:"User"
            })
            return posts 
        },
        getUser:()=>null
    }
}