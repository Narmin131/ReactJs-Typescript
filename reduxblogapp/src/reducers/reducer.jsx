const blogstate = [];
const reducer = (state= blogstate,action)=>{
    switch (action.type){
        case "add_blog":
            return [...state,action.blog];
        case "remove_blog":
            return state.filter(({id})=>{
                return id != action.id;
            })
        case  "edit_blog":
            return state.map((blog)=>{
                if(blog.id == action.id){
                    return{
                        ...blog,
                        ...action.update
                    }
                }
            })
        default:
            return state;
    }
}

export default reducer