const allStories = [
    {
        id: 0,
        author: "Rutujaa.j",
        imageUrl: "middle section images/stories1.jpg",
    },

    {
        id: 1,
        author: "Rutujaa.j",
        imageUrl: "middle section images/stories2.jpg",
    },

    {
        id: 2,
        author: "Pratu_0316",
        imageUrl: "middle section images/stories3.jpg",
    },

    {
        id: 3,
        author: "Rutujaa.j",
        imageUrl: "middle section images/stories4.jpg",
    },

    {
        id: 4,
        author: "Harshu_10",
        imageUrl: "middle section images/stories5.jpg",
    },

    {
        id: 5,
        author: "Harshu_10",
        imageUrl: "middle section images/stories6.jpg",
    },

    {
        id: 6,
        author: "Sharvil_Dewarde",
        imageUrl: "middle section images/stories7.jpg",
    },
    {
        id: 7,
        author: "Rutujaa.j",
        imageUrl: "middle section images/stories8.jpg",
    },
    {
        id: 8,
        author: "Harshu_10",
        imageUrl: "middle section images/stories9.jpg",
    },
    {
        id: 9,
        author: "Rutujaa.j",
        imageUrl: "middle section images/stories10.jpg",
    },
    {
        id: 10,
        author: "Rutujaa.j",
        imageUrl: "middle section images/stories11.jpg",
    },
    {
        id: 11,
        author: "Pratu_0316",
        imageUrl: "middle section images/stories12.jpg",
    },
    {
        id: 12,
        author: "Harshu_10",
        imageUrl: "middle section images/stories13.jpg",
    },
    {
        id: 13,
        author: "Rutujaa.j",
        imageUrl: "middle section images/stories14.jpg",
    },
    {
        id: 14,
        author: "Pratu_0316",
        imageUrl: "middle section images/stories15.jpg",
    },
    {
        id: 15,
        author: "Sharvil_Dewarde",
        imageUrl: "middle section images/stories16.jpg",
    },
];

const stories = document.querySelector(".stories");
const storiesFullView = document.querySelector(".stories-full-view");
const closeBtn = document.querySelector(".close-btn");
const storyImageFull = document.querySelector(".stories-full-view .story img");
const storyAuthorFull = document.querySelector(".stories-full-view .story .author");
const nextBtn = document.querySelector(".stories-container .next-btn");
const previousBtn = document.querySelector(".stories-container .previous-btn");
const storiesContent = document.querySelector(".stories-container .content");
const nextBtnFull = document.querySelector(".stories-full-view .next-btn");
const previousBtnFull = document.querySelector(".stories-full-view .previous-btn");
const loggedInUSer = localStorage.getItem('LoggedInUser')
let currentActive = 0;

const createStories = () => {
    allStories.forEach((s, i) => {
       const story = document.createElement("div");
       story.classList.add("story");
       const img = document.createElement("img");
       img.src = s.imageUrl;
       const author = document.createElement("div");
       author.classList.add("author");
       author.innerHTML = s.author;

       story.appendChild(img);
       story.appendChild(author);

       stories.appendChild(story);

       story.addEventListener("click", () => {
        showFullView(i);
       });
    });
};

createStories();

const showFullView = (index) => {
    currentActive = index;
    updateFullView();
    storiesFullView.classList.add("active");
};

closeBtn.addEventListener("click", () => {
    storiesFullView.classList.remove("active");
});

const updateFullView = () => {
    storyImageFull.src = allStories[currentActive].imageUrl;
    storyAuthorFull.innerHTML = allStories[currentActive].author;
};

nextBtn.addEventListener("click", () => {
    storiesContent.scrollLeft += 300;
});

previousBtn.addEventListener("click", () => {
    storiesContent.scrollLeft -= 300;
});

storiesContent.addEventListener("scroll", () => {
    if(storiesContent.scrollLeft <= 24) {
        previousBtn.classList.remove("active");
    } else {
        previousBtn.classList.add("active");
    }

    let maxScrollValue= storiesContent.scrollWidth - storiesContent.clientWidth - 24;

    if(storiesContent.scrollLeft >= maxScrollValue) {
        nextBtn.classList.remove("active");
    } else {
        nextBtn.classList.add("active");
    }

});

nextBtnFull.addEventListener("click", () => {
    if (currentActive >= allStories.length-1){
        return;
    }
    currentActive++;
    updateFullView();
});

previousBtnFull.addEventListener("click", () => {
    if (currentActive <= 0 ){
        return;
    }
    currentActive--;
    updateFullView();
})
/* like button */
function likeButton(){
    let heart = document.querySelector(".heart");
    let likes = document.querySelector(".likes");
    if(heart.src.match("heart.png")){
        heart.src="middle section images/heart_red.png";
        likes.innerHTML = "5,490 Likes"
    } else{
        heart.src = "middle section images/heart.png";
        likes.innerHTML= "5,489 Likes"
    }
}

function likeButton1(){
    let heart = document.querySelector(".hearts");
    let like = document.querySelector(".like");
    if(heart.src.match("heart.png")){
        heart.src="middle section images/heart_red.png";
        like.innerHTML = "5,001 Likes"
    } else{
        heart.src = "middle section images/heart.png";
        like.innerHTML= "5,000 Likes"
    }
}

function likeButton2(){
    let heart1 = document.querySelector(".heart1");
    let like1 = document.querySelector(".like1");
    if(heart1.src.match("heart.png")){
        heart1.src="middle section images/heart_red.png";
        like1.innerHTML = "6,001 Likes"
    } else{
        heart1.src = "middle section images/heart.png";
        like1.innerHTML= "6,000 Likes"
    }
}

function likeButton3(){
    let heart2 = document.querySelector(".heart2");
    let like2 = document.querySelector(".like2");
    if(heart2.src.match("heart.png")){
        heart2.src="middle section images/heart_red.png";
        like2.innerHTML = "3,001 Likes"
    } else{
        heart2.src = "middle section images/heart.png";
        like2.innerHTML= "3,000 Likes"
    }
}

function likeButton4(){
    let heart3 = document.querySelector(".heart3");
    let like4 = document.querySelector(".like4");
    if(heart3.src.match("heart.png")){
        heart3.src="middle section images/heart_red.png";
        like4.innerHTML = "551 Likes"
    } else{
        heart3.src = "middle section images/heart.png";
        like4.innerHTML= "550 Likes"
    }
}

function likeButton5(){
    let heart4 = document.querySelector(".heart4");
    let like5 = document.querySelector(".like5");
    if(heart4.src.match("heart.png")){
        heart4.src="middle section images/heart_red.png";
        like5.innerHTML = "1,459 Likes"
    } else{
        heart4.src = "middle section images/heart.png";
        like5.innerHTML= "1,458 Likes"
    }
}

function likeButton6(){
    let heart5 = document.querySelector(".heart5");
    let like6 = document.querySelector(".like6");
    if(heart5.src.match("heart.png")){
        heart5.src="middle section images/heart_red.png";
        like6.innerHTML = "2,556 Likes"
    } else{
        heart5.src = "middle section images/heart.png";
        like6.innerHTML= "2,555 Likes"
    }
}

function likeButton7(){
    let heart6 = document.querySelector(".heart6");
    let like7 = document.querySelector(".like7");
    if(heart6.src.match("heart.png")){
        heart6.src="middle section images/heart_red.png";
        like7.innerHTML = "4,336 Likes"
    } else{
        heart6.src = "middle section images/heart.png";
        like7.innerHTML= "4,335 Likes"
    }
}

function likeButton8(){
    let heart7 = document.querySelector(".heart7");
    let like8 = document.querySelector(".like8");
    if(heart7.src.match("heart.png")){
        heart7.src="middle section images/heart_red.png";
        like8.innerHTML = "201 Likes"
    } else{
        heart7.src = "middle section images/heart.png";
        like8.innerHTML= "200 Likes"
    }
}





/* Comment */
var posts = document.getElementsByClassName("post");
for(var i = 0; i < posts.length; i++){
    posts[i].addEventListener("click", function(){
        var commentBoxValue = this.parentElement.getElementsByClassName("comment-box")[0].value;
        var li = document.createElement("li");
        li.style.fontSize = "1.5rem";
        li.style.marginTop = "0.5rem";
        li.style.fontStyle = "sans-serif";
        var text = document.createTextNode(commentBoxValue);
        li.appendChild(text);
        this.parentElement.getElementsByClassName("unordered")[0].appendChild(li);
        commentBox.value = "";
    });
}


window.onload=function(){
    let user_text = document.getElementById('user-text');
    let user_id = document.getElementById('username');
    let img_tag = document.getElementById('img-tag');
    let img_tag_post = document.getElementById('post-imagee');
    let link_profile = document.getElementById('link-profile');
    
    
    
    if (loggedInUSer === "Rutuja ") {
        user_text.textContent = loggedInUSer;
        user_id.innerHTML = "rutuja_goodvibes";
        img_tag.src = "./images/user_4.jpeg";
        img_tag_post.src = "./images/user_4.jpeg";
        link_profile.href="rutuja-profile.html";
    } else if (loggedInUSer === "Raj") {
        user_text.textContent = loggedInUSer;
        user_id.innerHTML =  "iits_raj";
        img_tag.src = "./images/user_2.jpg";
        img_tag_post.src = "./images/user_2.jpg";
        link_profile.href="raj-profile.html";
    } else if (loggedInUSer === "Sharvil") {
        user_text.textContent = loggedInUSer;
        user_id.innerHTML =  "kraszy";
        img_tag.src = "./images/user_1.jpg";
        img_tag_post.src = "./images/user_1.jpg";
        link_profile.href="sherwil-profile.html";
    } else if (loggedInUSer === "Harshada") {
        user_text.textContent = loggedInUSer;
        user_id.innerHTML = "harshada_MJ";
        img_tag.src = "./images/user_3.jpg";
        img_tag_post.src = "./images/user_3.jpg";
        link_profile.href="harshada-profile.html";
    } else if (loggedInUSer === "Pratiksha") {
        user_text.textContent = loggedInUSer;
        user_id.innerHTML ="marathi_mulgi";
        img_tag.src = "./images/user_5.jpg";
        img_tag_post.src = "./images/user_5.jpg";
        link_profile.href="pratiksha-profile.html";
    }
    else{
        user_text.textContent = loggedInUSer;
        user_id.innerHTML = `@` + loggedInUSer + `6645`;
        img_tag.src = "./images/s5.jpg";
        img_tag_post.src = "./images/s5.jpg";
    }
    
}
