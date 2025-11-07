import React from "react";
import Post from "./Post";

function Article({postType}){
    return(
        
        <form className="ques">
            <div className="heading">What do you want to ask or share</div>
            <div id="content">
                <p>This section is designed based on the type of the post. It could be developed by conditional rendering.</p>
                <p id="red"> For post an {postType}, the following section would be appeared.</p>
            </div>
            <div id="text">
                <p>Title</p>
                <input className="textBox" type="text" placeholder=" Enter a descriptive title" required  />
            </div>
            
            <div>
                <p>Abstract</p>
                <textarea id="abst" type="text" placeholder=" Enter a 1 paragraph abstract" required/>
            </div>

            <div>
                <p>Article 1</p>
                <textarea id="art1" type="text" placeholder=" Enter a 1 paragraph abstract" required minLength={5} maxLength={100}/>
            </div>

            <div id="tag">
                <p>Tags</p>
                <input className="textBox" type="text" placeholder="Please add up to 3 tags to describe your article e.g., Java" required/>
            </div>
            
            <Post/>
        </form>
    )
}

export default Article;