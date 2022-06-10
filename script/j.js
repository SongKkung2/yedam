
$(function(){
    // $("#domain").on({
    //     change:function(e){
    //         var domain = e.target.value;
    //         if(e.target.value !== '직접입력') {
    //             $("#email_addr").attr("disabled","true");
    //         } else {
    //             $("#email_addr").attr("disabled"); //직접입력 오류
    //         }
    //         $("#email_addr").val(domain);
    //     }
    // });


    $('#domain').change(function(){
        $("#domain option:selected").each(function () {
             
             if($(this).val()== '1'){ //직접입력일 경우
                  $("#email_addr").val('');                        //값 초기화
                  $("#email_addr").attr("disabled",false); //활성화
             }else{ //직접입력이 아닐경우
                  $("#email_addr").val($(this).text());      //선택값 입력
                  $("#email_addr").attr("disabled",true); //비활성화
             }
        });
     });




    $("#phone2").keyup(function(event){
        var inputVal = $(this).val();
        $(this).val(inputVal.replace(/[^0-9]/gi,''));
    });
    
    
    $("#phone3").keyup(function(event){
        var inputVal = $(this).val();
        $(this).val(inputVal.replace(/[^0-9]/gi,''));
    });
    
    
})