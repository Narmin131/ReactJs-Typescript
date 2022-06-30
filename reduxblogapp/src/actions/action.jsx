import { v4 as uuidv4 } from "uuid";

export const addBlog = ({basliq,aciqlama}) =>({
    type:"add_blog",
    blog:{
        id:uuidv4(),
        title:basliq,
        desc:aciqlama,
    }
})

export const removeBlog = ({id})=>({
    type:"remove_blog",
    id:id
})

export const editBlog = (id,update)=>({
    type:"edit_blog",
    id,
    update
})