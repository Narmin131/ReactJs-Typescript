import { v4 as uuidv4 } from 'uuid';

export const addBlog = ({basliq,aciqlama})=>({
    type:"Add_blog",
    blog:{
        id:uuidv4(),
        title:basliq,
        desc:aciqlama,
    },
})

export const removeBlog =({id})=>({
    type:"Remove_blog",
    id:id
})

export const editBlog =({id,update})=>({
    type:"Edit_blog",
    id,
    update
})

