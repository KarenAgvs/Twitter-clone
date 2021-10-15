let user_name=document.querySelector('#name')
let user_comment=document.querySelector('#comment')
let user_initial=document.querySelector('#initial_name')
let user_characters=document.querySelector('#number_characters')
let user_post=document.querySelector('#comment_sended')
let user_btn=document.querySelector('#btn_send')

user_name.addEventListener('keypress', show_letter)
function show_letter(){
    let letter=user_name.value.charAt(0)
    user_initial.textContent=letter.toUperCase()
}

/*user_comment.addEventListener('keypress', valid_characters)
let max_char='200'
let user_characters.textcontent=max_char*/
    
function valid_characters() {
    let character_long=user_comment.length
    let rest_char=max_char-character_long
    user_characters.textContent=rest_char
    if (rest_char>=50){
        user_characters.style.color="red"
    }
       
}

user_comment.addEventListener('keyup', black_characters)
 function black_characters() {
    let character_long=user_comment.length
    let rest_char=max_char-character_long
    let sum_char=rest_char+character_long
    if(rest_char<=50){
        user_characters.style.color="black"
    }
    user_characters.textContent=rest_char 
}

user_btn.addEventListener('click', posting)
function posting() {
    user_post.textContent=user_comment.value
}

