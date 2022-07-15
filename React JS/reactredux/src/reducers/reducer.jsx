const blogState = [];
const reducer = (state = blogState,action)=>{
    switch(action.type){
        case "Add_blog":
             return[...state,action.blog];
        case "Remove_blog":
             return state.filter(({id})=>{
                return id!= action.id;
             });
        case "Edit_blog":
             return state.map((blog)=>{
               if (blog.id == action.id){
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