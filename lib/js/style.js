$(document).ready(function(){
   	$('#login').on('click', function(){
   		window.location.replace("../../public/view/loginScreen.html");
   	});

   	if ($('.containerLogin').length > 0) {
   		$('.pesquisar').hide();
   	}

   	$('.pesquisarChamado').on('click', function(){
   		$('.logarSistema').hide();
   		$('.pesquisar').show();
   		$('.pesquisarChamado').addClass('active');
   		$('.logar').removeClass('active');
   	});

   	$('.logar').on('click', function(){
   		$('.pesquisar').hide();
   		$('.logarSistema').show();
   		$('.pesquisarChamado').removeClass('active');
   		$('.logar').addClass('active');
   	});

   	if ($('.logarCpf').length > 0 || $('.cadastrarCpf').length > 0) {
 		$('#cpf').mask('000.000.000-00', {reverse: true});
 		$('.cpfInvalido').hide();
 		$('.senhaInvalida').hide();
   	}

   	$('#confirmSenha').on('blur', function(){
   		var senha = $('#senha').val();
   		var confirmar = $('#confirmSenha').val();
   		if (senha != confirmar) {
   			$('#confirmSenha').addClass("is-invalid");
   			$('#senha').addClass("is-invalid");
   			$('.senhaInvalida').show();
   		} else {
   			$('#confirmSenha').removeClass("is-invalid");
   			$('#senha').removeClass("is-invalid");
   			$('.senhaInvalida').hide();
   		}
   	});
   	
});