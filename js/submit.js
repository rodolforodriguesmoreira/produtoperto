$(document).ready(function(){

    $("#form_produto").on("submit", function(e){

        e.preventDefault();

        var formData = new FormData(this);

        console.log(formData);


        $.ajax({
            type:'POST',
            url: 'https://mlnzw4w9sd.execute-api.us-east-1.amazonaws.com/dev/api/produtos',
            data:formData,
            cache:false,
            contentType: false,
            processData: false,
            success:function(data){
                console.log("success");
                console.log(data);
            },
            error: function(data){
                console.log("error");
                console.log(data);
            }
        });
    });

});