$(document).ready(function () {

    // ip validation
    $.validator.addMethod(
        "IpValidator",
        function (value, element, args) {
            return /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(value);
        }, "invalid Ip Address");
    
        // email validation
    $.validator.addMethod(
        "EmailDomain",
        function (value, element, args) {
            return (value.indexOf("example.com") != -1);
        }, "email should be example.com");

    // alphanumeric validaton
    // $.validator.addMethod( "alphanumeric", function( value, element ) {
    //     return this.optional( element ) || /^\w+$/i.test( value );
    // }, "Letters, numbers, and underscores only please" );

    // strongPassword validation
    $.validator.addMethod(
        "strongPassword",
        function (value, element, args) {
            // Password must contain at least one uppercase letter, one digit, and one special character
            // It should be 6 to 12 characters long and not contain three repeated characters consecutively
            return /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[a-zA-Z0-9@#$%^&*!]{6,12}$/.test(value);
        },
        "Password must contain one uppercase letter, one digit, and one special character, and be 6 to 12 characters long without three repeated characters consecutively."
    );
    
    //  less then validate
    $.validator.addMethod(
        "LessThen",
        function (value, element, phara) {
            return parseInt(value) < parseInt(phara);
        }, "the value must be less then {0}");

    //  greater then validate
    $.validator.addMethod(
        "GreaterThen",
        function (value, element, phara) {
            return parseInt(value) > parseInt(phara);
        }, "the value must be greater then {0}");

    //  less then equal to  validate
    $.validator.addMethod(
        "LessTheneq",
        function (value, element, phara) {
            return parseInt(value) <= parseInt(phara);
        }, "the value must be less then equal to{0}");

    //  greater then equal to  validate
    $.validator.addMethod(
        "GreaterTheneq",
        function (value, element, phara) {
            return parseInt(value) >= parseInt(phara);
        }, "the value must be greater then equal to {0}");

    // drop down list 
    $.validator.addMethod(
        "selectSubject",
        function (value, element, sub) {
            return value != 0;
        }, "select any subject");

// Date ITA validation method
$.validator.addMethod( "dateITA", function( value, element ) {
	var check = false,
		re = /^\d{1,2}\-\d{1,2}\-\d{4}$/,
		adata, gg, mm, aaaa, xdata;
	if ( re.test( value ) ) {
		adata = value.split( "-" );
		gg = parseInt( adata[ 0 ], 10 );
		mm = parseInt( adata[ 1 ], 10 );
		aaaa = parseInt( adata[ 2 ], 10 );
		xdata = new Date( Date.UTC( aaaa, mm - 1, gg, 12, 0, 0, 0 ) );
		if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth() === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
			check = true;
		} else {
			check = false;
		}
	} else {
		check = false;
	}
	return this.optional( element ) || check;
}, $.validator.messages.date );

// id card CNIC number validation ``
$.validator.addMethod('cnicFormat', function(value, element) {
    return /^\d{5}-\d{7}-\d{1}$/.test(value);
  }, 'Invalid CNIC format. Use the format: 12345-6789012-3');

//   calidation fron phone number
  $.validator.addMethod('phoneFormat', function(value, element) {
    return /^\+\d{12,}$/.test(value);
  }, 'Invalid phone number format. Use a valid format like +1234567890');

    $("#myform").validate({
        rules: {
            fname: {
                required: true,
                minlength: 2,
            },
            lname: {
                required: true,
                minlength: 2,
            },
            phone: {
                // number: true,
                phoneFormat:true,
                // minlength: 11,
                // maxlength: 11,
            },
            email: {
                required: true,
                email: true,
                EmailDomain: true,
            },
            digits: {
                required: true,
                digits: true,
            },
            password: {
                required: true,
                strongPassword: true,

            },
            Cpassword: {
                required: true,
                // strongPassword:true,
                equalTo: '#password',
            },
            ipaddress: {
                required: true,
                IpValidator: true,
            },
            alphanumeric: {
                required: true,
                alphanumeric: true,
            },

            nowhitespace: {
                required: true,
                nowhitespace: true,
            },
            lettesonly: {
                required: true,
                lettersonly: true,

            },
            url: {
                required: true,
                url: true,
            },
            lessthen: {
                required: true,
                LessThen: '100',
            },
            greaterthen: {
                required: true,
                GreaterThen: '100',
            },
            lesstheneq: {
                required: true,
                LessTheneq: '100',
            },
            greatertheneq: {
                required: true,
                GreaterTheneq: '1000',
            },
            subject: {
                required: true,
                selectSubject: true,
            },
            dateiso: {
                required: true,
                dateISO: true,
            },
            dateita: {
                required: true,
                dateITA: true,
            },
            cnic:{
                required:true,
                cnicFormat:true,
            },

            address: {
                required: true,
                minlength: 10,
            },

        },

        messages: {
            fname: {
                required: 'please Enter your name',
                minlenght: 'Name must has atleast 2 character',
            },
            lname: {
                required: 'please Enter your name',
                minlenght: 'Name must has atleast 2 character',
            },
            email: {
                required: 'please Enter your vailed email',
            },
            // phone: {
            //     required: 'please Enter correct phone no',
            // },
            digits: {
                required: 'Please Fill this Field',
                digits: "Enter only Digit numbers",
            },
            password: {
                required: "Enter password",
            },
            Cpassword: {
                required: 'enter confirm password',
                equalTo: 'password should be same',
            },
            dateiso: {
                dateISO: "date in yyyy-mm-dd",
            },
            dateita: {
                dateITA: 'date in dd-mm-yyyy',
            },
            cnic:{
                required:'Enter Your Cnic Number',
                cnicFormat:'Enter a Valid CNIC Number',
            },

            address: {
                minlength: "must has atleast 10  character",
            },
        },


        submitHandler: function (form) {
            form.submit();
        }

    });

      



    // only chect that fromis submitted or not
    $('#submit-btn').on('click', function () {
        console.log($('#myform').valid());
    });

    // endline dont delete 
});



// abusiveWords validation================================================================
// ========================================================================================
 $(document).ready(function() {
    // List of abusive words (you can extend this list)
    var abusiveWords = ["killer", "murder", "shit",
    "bitch", "Bastard", "Fool","stupid", "loser", "idiot",
    "damn", "fuck", "ass"];

    // Event handler for form submission
    $("#myform").submit(function(event) {
      // Check each input field for abusive words
      var isAbusive = false;
      $("input[type='text']").each(function() {
        var inputValue = $(this).val().toLowerCase();
        for (var i = 0; i < abusiveWords.length; i++) {
          if (inputValue.includes(abusiveWords[i])) {
            isAbusive = true;
            break;
          }
        }
      });

      // If abusive words are found, prevent form submission
      if (isAbusive) {
        alert("Please refrain from using abusive language.");
        event.preventDefault();
      }
    });
    });

// $(document).ready(function(){

//     var abuseword=["kill",'murder'];

// $('#myform').submit(function(event){

// var isabuive= false;

// $('input[type=text]').each(function(){

//     var inputwords = $(this).val().toLowerCase();
//     for (let i = 0; i < abuseword.length; i++){ 
//         if (inputwords.includes(abuseword[i])){
//             isabuive=true
//             break;
//         }
//        }

// })
// if(isabuive){
//     alert('please do not enter the abusive words');
//     event.preventDefault();
// }

// });
// =============================================================================
// =============================================================================



// });