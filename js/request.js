$(document).ready(function(){

    $.ajax({
        type:'GET',
        url: 'https://mlnzw4w9sd.execute-api.us-east-1.amazonaws.com/dev/api/produtos',
        dataType: 'json',
        success:function(response){
            console.log("success");
            console.log(response);

            data = response.data;
            count = data.length;

            html='';

            for(i=0; i < count; i++){

                console.log(data[i]);

                
                html+='<div class="card card_margin" style="width: 18rem;">';
                html+='<img class="card-img-top" id="nome_imagem" width="200" src="https://produtoperto.s3.amazonaws.com/arquivos/'+data[i].nome_arquivo+'" alt="">';
                html+='<div class="card-body">';
                html+='<h5 class="card-title" id="nome_produto">'+data[i].nome_produto+'</h5>';
                html+='<b>Preço:</b> <span id="preco">'+data[i].preco+'</span><br>';
                html+='<b>Endereço:</b> <span id="endereco">'+data[i].endereco+'</span><br><br/>';
                html+='<a href="#" class="btn btn-primary">Detalhes</a>';
                html+='</div>';
                html+='</div>';
            }

            $("#cards").html(html)

            
        },
        error: function(data){
            console.log("error");
            console.log(data);
        }
    });

});