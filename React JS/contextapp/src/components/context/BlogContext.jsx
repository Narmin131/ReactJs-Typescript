import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const BlogContext = createContext();

export const BlogProvider = props =>{

      const [blogs,setBlogs] = useState([
        {
            title: "Creating is a privilege but it’s also a gift",
            desc: 'Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo.',
            id:1,
            url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1544465544-1b71aee9dfa3%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvfGVufDB8fDB8fA%253D%253D%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fphoto&tbnid=fQvGKlmXwT0iiM&vet=12ahUKEwjMj9iZgeD4AhUFhP0HHWraAPUQMygJegUIARC-AQ..i&docid=AgAT_yR1X6xrJM&w=1000&h=1500&q=photo&ved=2ahUKEwjMj9iZgeD4AhUFhP0HHWraAPUQMygJegUIARC-AQ"
        },
        {
            title: "Being unique is better than being perfect",
            desc: 'Nam in pretium dui. Phasellus dapibus, mi at molestie cursus, neque eros aliquet nisi, non efficitur nisi est nec mi. Nullam semper, ligula a luctus ornare, leo turpis fermentu',
            id:2,
            url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fiso.500px.com%2Fwp-content%2Fuploads%2F2016%2F03%2Fstock-photo-142984111.jpg&imgrefurl=https%3A%2F%2Fiso.500px.com%2Fthe-top-20-nature-photos-on-500px-so-far-this-year%2F&tbnid=yLFkhFfvGDLi6M&vet=12ahUKEwjMj9iZgeD4AhUFhP0HHWraAPUQMygMegUIARDFAQ..i&docid=dP5KNCuNt0yjCM&w=1600&h=1184&q=photo&ved=2ahUKEwjMj9iZgeD4AhUFhP0HHWraAPUQMygMegUIARDFAQ"
        },
        {
            title: "Now we’re getting somewhere",
            desc: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec volutpat rhoncus quam, a feugiat elit gravida eget. Curabitur id',
            id:3,
            url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F550x%2F31%2F23%2F2f%2F31232fe4b51b47763282524f008d9081.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fmdshakibdhali9%2Fnew-photo-style%2F&tbnid=MnNj9Caza1IdZM&vet=12ahUKEwjMj9iZgeD4AhUFhP0HHWraAPUQMygTegUIARDTAQ..i&docid=vltbyVp8MFyOsM&w=550&h=825&q=photo&ved=2ahUKEwjMj9iZgeD4AhUFhP0HHWraAPUQMygTegUIARDTAQ"
        }
      ])
      return (
        <BlogContext.Provider value={[blogs,setBlogs]}>
            {props.children}
        </BlogContext.Provider>
      )
}