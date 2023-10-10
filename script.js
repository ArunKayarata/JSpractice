const replybtn=document.querySelector(".reply");
const commentcont=document.querySelector(".comment-container");
commentcont.addEventListener("click",function(event){
    let repltbtnclicked=event.target.classList.contains("reply");
    let submitbtnclicked=event.target.classList.contains("submit");
    let closestcard=event.target.closest(".comment-box");
    // console.log(closestcard);
    if(repltbtnclicked==true){
        closestcard.append(createreplybox());
    }
    if(submitbtnclicked==true){
        let commentclosed=event.target.closest(".reply-box");
        // console.log(commentclosed);
        if(commentclosed.children[0].value){
            closestcard.append(addcommentbox(commentclosed.children[0].value));
            commentclosed.remove();
        }


    }
})
function createreplybox(){
    const div=document.createElement("div");
    div.setAttribute("class","reply-box");
    div.innerHTML=`  <input type="text" class="input" placeholder="Enter your reply">
    <button class="submit"> submit</button>`

    return div;
}
function addcommentbox(text){
    const div=document.createElement("div");
    div.setAttribute("class","comment-box");
    div.innerHTML=`<div class="card">
    <span class="text">${text} </span>
    <span class="reply"> Add reply</span>
</div>`
return div;

}