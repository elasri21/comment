$(function() {
    $(".delete").click(function(){
        $(".panel").css({display: "block"});
        // cancel to delete your comment
        $(".no").click(function() {
            $(".panel").css({display: "none"});
        });
        //delete your comment
        $(".yes").click(function() {
            $(".my-reply").remove();
            $(".panel").css({display: "none"});
        });
    });
    // increase
    $(".plus").click(function() {
        let grad = Number($(this).next().text());
        $(this).next().text(grad + 1);
    });
    //decrease 
    $(".minus").click(function() {
        let grad = Number($(this).prev().text());
        grad > 0 ? $(this).prev().text(grad - 1) : $(this).prev().text(0) ;
    });
    // make your comment and dont be rude
    $(".reply").click(function(){
        $(this).parents(".comment").after(`<div class="comment add-comment">
        <img src="images/avatars/image-juliusomo.png" alt="">
        <textarea placeholder="add comment ..." class="type-comment"></textarea>
        <input type="submit" value="send" class="submit">
        <div/>`);

        // submit your comment
        $(".submit").click(function(){
            console.log('hello from send')
            let value = $(this).prev(".type-comment").val();
            $(this).parents(".add-comment").html(`<div class="comment reply-comment my-reply">
            <div class="upgrade">
                <span class="plus"><i class="fas fa-plus"></i></span>
                <span class="grade">2</span>
                <span class="minus"><i class="fas fa-minus"></i></span>
            </div>
            <div class="content">
                <div class="info">
                    <div class="profile">
                        <img src="images/avatars/image-juliusomo.png" alt="">
                        <span class="name">juliusomo</span>
                        <span class="you">you</span>
                        <span class="time">2 days ago</span>
                    </div>
                    <div class="delete-cancel">
                        <button class="delete"><i class="fa-solid fa-trash-can"></i>Delete</button>
                        <button class="reply-btn edit"><i class="fa-solid fa-pen"></i>Edit</button>
                    </div>
                </div>
                <div class="disc">
                    <p> <Span class="user">@ramsesmiron</Span> <span class="more-info">${value}</span></p>
                </div>
            </div>
        </div>`)
        });
    });
    $(".edit").click(function(){
        let $text = `${$(".my-reply .user").text()} ${$(".my-reply .more-info").text()}`;
        $(".my-reply").replaceWith(`<div class="comment add-comment">
        <img src="images/avatars/image-juliusomo.png" alt="">
        <textarea placeholder="add comment ..." class="type-comment">${$text}</textarea>
        <input type="submit" value="send" class="submit">
        <div/>`);

        // submit your comment
        $(".submit").click(function(){
            console.log('hello from send')
            let value = $(this).prev(".type-comment").val();
           
            $(this).parents(".add-comment").html(`<div class="comment reply-comment my-reply">
            <div class="upgrade">
                <span class="plus"><i class="fas fa-plus"></i></span>
                <span class="grade">2</span>
                <span class="minus"><i class="fas fa-minus"></i></span>
            </div>
            <div class="content">
                <div class="info">
                    <div class="profile">
                        <img src="images/avatars/image-juliusomo.png" alt="">
                        <span class="name">juliusomo</span>
                        <span class="you">you</span>
                        <span class="time">2 days ago</span>
                    </div>
                    <div class="delete-cancel">
                        <button class="delete"><i class="fa-solid fa-trash-can"></i>Delete</button>
                        <button class="reply-btn edit"><i class="fa-solid fa-pen"></i>Edit</button>
                    </div>
                </div>
                <div class="disc">
                    <p> <Span class="user">@ramsesmiron</Span> <span class="more-info">${value}</span></p>
                </div>
            </div>
        </div>`)
        })
    })
    

  
 
   
});

