(function () {
    'use strict';   
    var configMap = {
        'access_token': 'p5lg4ta40yigmmp91mbmfgbt'
    };
    var stateMap = {
        experienceCount: 1,
        skillCount: 1
    };

    var applyFormSubmit = function(){
        if(!$('#applyform').length) {
            return;
        }
        var form_id_js = "applyform";

        var data_js = {
            "access_token": configMap.access_token
        };

        function js_onSuccess() {
            // remove this to avoid redirect
            // window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
            alert('Message successfully sent!');
        }

        function js_onError(error) {
            // remove this to avoid redirect
            // window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
            alert('Message not sent! Try again later.');
        }

        var sendButton = document.getElementById("send-application");

        function js_send() {
            sendButton.value='Sending…';
            sendButton.disabled=true;
            var request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == 200) {
                    js_onSuccess();
                } else
                if(request.readyState == 4) {
                    js_onError(request.response);
                }
            };
            // var userType = $('#usertype').val();

            var firstName = $('#firstname').val();
            firstName = firstName.substr(0,1).toUpperCase() + firstName.substr(1).toLowerCase();
            var lastName = $('#lastname').val();
            lastName = lastName.substr(0,1).toUpperCase() + lastName.substr(1).toLowerCase();
            var middleName = $('#middlename').val();
            middleName = middleName.substr(0,1).toUpperCase() + middleName.substr(1).toLowerCase();
            var fullName = firstName + ' ' + middleName + ' ' + lastName;

            var desiredPosition = $('#desired-position').val();
            var email = $('#email').val();
            var phone = $('#phone').val();
            var landline = $('#landline').val();
            var skypeid = $('#skypeid').val();
            var address = $('#address').val();

            var educationalAttainment = $('#educattainment').val();
            var yearGraduated = $('#educattainment-year').val();
            var degree = $('#educattainment-degree').val();
            
            var workExperience = '';
            $('.exp-container').each(function(e){
                var $field = $(this).find('.field');
                $field.each(function(i){
                    workExperience += $(this).find('label').html() + ': ' + $(this).find('input').val() + '\n';
                });
                workExperience += '\n';
            });

            var skillSet = '';
            $('.skills-container').each(function(e){
                var $field = $(this).find('.field');
                $field.each(function(i){
                    skillSet += $(this).find('label').html() + ': ' + $(this).find('input').val() + '\n';
                });
                skillSet += '\n';
            });
           
            var subject = 'IMS - Application ['+fullName+']';
            // var message = document.querySelector("#" + form_id_js + " [name='text']").value;
            data_js['subject'] = subject;
            data_js['text'] = 'FullName: '+ fullName +'\n'+
                            'Desired Position: ' + desiredPosition + '\n'+
                            'Phone: ' + phone + '\n' +
                            'Email: ' + email + '\n' +
                            'Landline: ' + landline + '\n' +
                            'Skype ID: ' + skypeid + '\n' +
                            'Address: ' + address + '\n\n' +
                            'Highest Education Attained: ' + educationalAttainment + '\n' +
                            'Year Graduated: ' + yearGraduated + '\n' +
                            'Degree: ' + degree + '\n\n' +
                            'Work Experince(s): \n' +
                            workExperience + '\n' +
                            'Skill(s): \n' +
                            skillSet + '\n' ;
            var params = toParams(data_js);
        
            request.open("POST", "https://postmail.invotes.com/send", true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            request.send(params);

            return false;
        }

        // sendButton.onclick = js_send;

        function toParams(data_js) {
            var form_data = [];
            for ( var key in data_js ) {
                form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
            }

            return form_data.join("&");
        }

        var js_form = document.getElementById(form_id_js);
        js_form.addEventListener("submit", function (e) {
            e.preventDefault();
        });

        $('#send-application').on('click', function(e){
            e.preventDefault();
            js_send();
        });
    };

    var contactFormSubmit = function(){
        if(!$('#main-contact-form').length) {
            return;
        }
        var form_id_js = "main-contact-form";

        var data_js = {
            "access_token": "p5lg4ta40yigmmp91mbmfgbt"
        };

        function js_onSuccess() {
            // remove this to avoid redirect
            // window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
            alert('Message successfully sent!');
        }

        function js_onError(error) {
            // remove this to avoid redirect
            // window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
            alert('Message not sent! Try again later.');
        }

        var sendButton = document.getElementById("send-inquiry");

        function js_send() {
            sendButton.value='Sending…';
            sendButton.disabled=true;
            var request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == 200) {
                    js_onSuccess();
                } else
                if(request.readyState == 4) {
                    js_onError(request.response);
                }
            };
            var userType = $('.user-type.active').data('value');
            var subject = 'IMS - Inquiry ['+userType+']';
            var message = $('#message').val();

            // var firstName = $('#firstname').val();
            // var lastName = $('#lastname').val();
            var name = $('#name').val();
            var email = $('#email').val();
            var phone = $('#phone').val();

            data_js['subject'] = subject;

            data_js['text'] = 'Name: '+ name + '\n'+
                            'Email: ' + email + '\n'+
                            'Message: ' + message;
            var params = toParams(data_js);
        
            request.open("POST", "https://postmail.invotes.com/send", true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            request.send(params);

            return false;
        }

        // sendButton.onclick = js_send;

        function toParams(data_js) {
            var form_data = [];
            for ( var key in data_js ) {
                form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
            }

            return form_data.join("&");
        }

        var js_form = document.getElementById(form_id_js);
        js_form.addEventListener("submit", function (e) {
            e.preventDefault();
        });

        $('#send-inquiry').on('click', function(e){
            e.preventDefault();
            js_send();
            // $(this).addClass('')
            var $this = $(this);
              $this.button('loading');
               //  setTimeout(function() {
               //     $this.button('reset');
               // }, 8000);
            var $form = $('#main-contact-form');
            var $form_status = $('<div class="form_status"></div>');
            $form.prepend( $form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
        });
        // });
    };

    var bind = function() {
        $('.add-experience').on('click', function(e) {
            stateMap.experienceCount += 1;
            renderWorkExperienceForm();
        })
        $('.minus-experience').on('click', function(e) {
            if(stateMap.experienceCount === 1) {
                return;
            }
            stateMap.experienceCount -= 1;
            $('.exp-container.count-'+(stateMap.experienceCount+1)).remove();
        })

        $('.add-skill').on('click', function(e) {
            stateMap.skillCount += 1;
            renderSkillsForm();
        })
        $('.minus-skill').on('click', function(e) {
            if(stateMap.skillCount === 1) {
                return;
            }
            stateMap.skillCount -= 1;
            $('.skills-container.count-'+(stateMap.skillCount+1)).remove();
        })
    };

    var renderWorkExperienceForm = function() {
        var template =  '<div class="exp-container count-'+stateMap.experienceCount+'">'+
                        '<div class="col-md-6 field">'+
                            '<label for="educattainment-'+stateMap.experienceCount+'">Company Name</label>'+
                            '<input type="text" name="educattainment-'+stateMap.experienceCount+'" id="educattainment-'+stateMap.experienceCount+'" class="form-control" required>'+
                        '</div>'+
                        '<div class="col-md-6 field">'+
                            '<label for="educattainment-'+stateMap.experienceCount+'-year">Duration</label>'+
                            '<input type="text" name="educattainment-'+stateMap.experienceCount+'-year" id="educattainment-'+stateMap.experienceCount+'-year" class="form-control" required >'+
                        '</div>'+
                        '<div class="col-md-12 field">'+
                            '<label for="educattainment-'+stateMap.experienceCount+'-degree">Work Description</label>'+
                            '<input type="text" name="educattainment-'+stateMap.experienceCount+'-degree" id="educattainment-'+stateMap.experienceCount+'-degree" class="form-control" >'+
                        '</div>'+
                        '</div>';
        // console.log(stateMap.experienceCount);s
        // for (var i = 0; i < stateMap.experienceCount; i++) {
            $('#work-experience').append(template);
        // };
    };

    var renderSkillsForm = function() {
        var template =  '<div class="skills-container count-'+stateMap.skillCount+'">'+
                        '<div class="col-md-6 field">'+
                            '<label for="skill-'+stateMap.skillCount+'">Skill</label>'+
                            '<input type="text" name="skill-'+stateMap.skillCount+'" id="skill-'+stateMap.skillCount+'" class="form-control" required>'+
                        '</div>'+
                        '<div class="col-md-6 field">'+
                            '<label for="skill-'+stateMap.skillCount+'-year">Rating (5 Being the Highest)</label>'+
                            '<input type="text" name="skill-'+stateMap.skillCount+'-year" id="skill-'+stateMap.skillCount+'-year" class="form-control" required >'+
                        '</div>'+
                        // '<div class="col-md-12 field">'+
                        //  '<label for="skill-'+stateMap.skillCount+'-degree">Work Description</label>'+
                        //  '<input type="text" name="skill-'+stateMap.skillCount+'-degree" id="skill-'+stateMap.skillCount+'-degree" class="form-control" >'+
                        // '</div>'+
                        '</div>';
        $('#skills').append(template);
    };

    var getFormJSON = function() {
        console.log(positionJSON);
        $.each(positionJSON, function(key,val){
            console.log(key);
        });
    };


    $(function(){
        applyFormSubmit();
        contactFormSubmit();
        bind();
        renderWorkExperienceForm();
        renderSkillsForm();
        getFormJSON();
    });


}());