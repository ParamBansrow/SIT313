import React from "react";
import Post from "./Post";

function QuestionForm({postType}){
    return(
        <form className="ques">
            <div className="heading">What do you want to ask or share</div>
            <div id="content">
                <p>This section is designed based on the type of the post. It could be developed by conditional rendering.</p>
                <p id="red"> For post a {postType}, the following section would be appeared.</p>
            </div>
            <div id="text">
                <p>Title</p>
                <input className="textBox" type="text" placeholder="Start your question with how, what, why, etc."/>
            </div>
            
            <div>
                <p>Describe your problem</p>
                <textarea id="des" type="text" />
            </div>

            <div id="tag">
                <p>Tags</p>
                <input className="textBox" type="text" placeholder="Please add up to 3 tags to describe your question e.g., Java"/>
            </div>

            <Post/>
            
        </form>
    )
}

export default QuestionForm;