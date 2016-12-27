$(function () {

	$.validator.setDefaults({
		errorClass: 'help-block',
		highlight: function(element) {
			$(element)
				.closest('.form-group')
				.addClass('has-error');
		},

		unhighlight: function(element) {
			$(element)
				.closest('.form-group')
				.addClass('has-success')
				.removeClass('has-error');
		}
	});

	$.validator.addMethod('strongPassword', function(value, element) {
		return this.optional(element)
		|| value.length >= 6
		&& /\d/.test(value)
		&& /[a-z]/i.test(value)
	}, "Your password must be 6 characters long and must contain at least a character and a number")
	
	$('#form_one').validate({
		rules: {
			email: {
				required: true,
				email: true 
			},
			email2: {
				required: true,
				equalTo: "#exampleInputEmail1"
			},
			password: {
				required: true,
				strongPassword: true
			},
			password2: {
				required: true,
				equalTo : "#exampleInputPassword1"
			}
		},
		messages: {
			email: {
				required: "Please enter an email address",
				email: 'Please enter a valid email address'
			}
		}
	})

	$(function(){

    var requiredCheckboxes = $(':checkbox[required]');

    requiredCheckboxes.change(function(){

        if(requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');
        }

        else {
            requiredCheckboxes.attr('required', 'required');
        }
    });

});
})