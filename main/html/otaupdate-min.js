R"=====(function sub(t){var e=t.value.split("\\\\");document.getElementById("file-input").innerHTML="   "+e[e.length-1]}$("form").submit((function(t){t.preventDefault();var e=$("#upload_form")[0],n=new FormData(e);$.ajax({url:"/update",type:"POST",data:n,contentType:!1,processData:!1,xhr:function(){var t=new window.XMLHttpRequest;return t.upload.addEventListener("progress",(function(t){if(t.lengthComputable){var e=t.loaded/t.total;$("#prg").html("progress: "+Math.round(100*e)+"%"),$("#bar").css("width",Math.round(100*e)+"%")}}),!1),t},success:function(t,e){},error:function(t,e,n){}})}));)====="