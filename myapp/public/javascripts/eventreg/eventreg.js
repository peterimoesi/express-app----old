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
	
	$('#form_one').validate({
		rules: {
			email: {
				required: true,
				email: true 
			},
			firstname: {
				required: true
			},
			lastname: {
				required: true
			},
		},
		messages: {
			email: {
				required: "Please enter an email address",
				email: 'Please enter a valid email address'
			}
		},
		submitHandler: function(form) {
    		form.submit();
    		$("#myModal").modal();
    	}

	})

})

$('#closeModal').click(function(){
	$('#form_one').trigger("reset");
});


$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

/*

$('#form_one').on('submit', function(){

	var current = $(this);
	url = current.attr('action'),
	method = current.attr('method'),
	data = {};

	current.find('[name]').each(function(index, value){
		
		var that = $(this),
		name = that.attr('name'),
		value = that.val();
		console.log(value)
		data[name] = value;
	})
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response){
			console.log(response);
		}
	})
	return false;
})*/
/*
alldata = [];
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
$(function() {
    $('form').submit(function() {
        alldata.push(JSON.stringify($('form').serializeObject()))
        return false;
    });
});
var submitbutton = document.getElementById('submitbutton');

submitbutton.onclick = function(){
	result = {"alldata" : [alldata]}

	console.log(result)}
	*/