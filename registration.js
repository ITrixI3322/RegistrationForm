function save(){
	let chengeLogin = $('#login').val().replace(/\w{5,20}/, '25');
	let chengePassword = $('#password').val().replace(/\w{6,16}/, '25');
	if(chengeLogin != 25 && $('#login').val() != 0 ){
		alert('login is missing');
	}; 
	if($('#login').val() == 0){
		alert('Enter login');
	};
	if(chengePassword != 25 && $('#password').val() != 0 ){
		alert('password is missing');
	};
	if($('#password').val() == 0 ){
		alert('Enter password');
	};
	if($('#password').val() != $('#repeatPassword').val() ){
		alert('Passwords do not match');
	};
	if($(':checkbox').prop('checked') != true){
		alert('tick please');
	};
	if(chengeLogin == 25 && chengePassword == 25 && $('#password').val() == $('#repeatPassword').val() && $(':checkbox').prop('checked') == true){
		alert('user saved ' + '"' + $('#login').val() + '"' );
	}
	
};