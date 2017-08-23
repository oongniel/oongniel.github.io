(function () {
    'use strict';   
    var configMap = {
        'access_token': 'p5lg4ta40yigmmp91mbmfgbt'
    };
    var stateMap = {
        experienceCount: 1,
        skillCount: 1
    };

    var bind = function() {
        $('.add-experience').on('click', function(e) {
            stateMap.experienceCount += 1;
            renderWorkExperienceForm();
            $('.minus-experience').removeClass('disabled');
        })
        $('.minus-experience').on('click', function(e) {
            if(stateMap.experienceCount === 1) {
                return;
            }
            stateMap.experienceCount -= 1;
            if(stateMap.skillCount === 1) {
                $(this).addClass('disabled');
            }
            $('.exp-container.count-'+(stateMap.experienceCount+1)).remove();
        })

        $('.add-skill').on('click', function(e) {
            stateMap.skillCount += 1;
            renderSkillsForm();
            $('.minus-skill').removeClass('disabled');
        })
        $('.minus-skill').on('click', function(e) {
            if(stateMap.skillCount === 1) {
                return;
            }
            stateMap.skillCount -= 1;
            if(stateMap.skillCount === 1) {
                $(this).addClass('disabled');
            }
            $('.skills-container.count-'+(stateMap.skillCount+1)).remove();
        })
    };

    var renderWorkExperienceForm = function() {
        var $form = $('#applyform');
        var template =  '<div class="exp-container count-'+stateMap.experienceCount+'">'+
                        '<div class="col-md-6 field">'+
                            '<label for="workexperience-'+stateMap.experienceCount+'">Company Name</label>'+
                            '<input type="text" name="workexperience-'+stateMap.experienceCount+'" id="workexperience-'+stateMap.experienceCount+'" class="form-control" required>'+
                        '</div>'+
                        '<div class="col-md-6 field">'+
                            '<label for="workposition-'+stateMap.experienceCount+'">Position</label>'+
                            '<input type="text" name="workposition-'+stateMap.experienceCount+'" id="workposition-'+stateMap.experienceCount+'" class="form-control" required>'+
                        '</div>'+
                        '<div class="col-md-6 col-xs-6 field">'+
                            '<label for="workstartdate-'+stateMap.experienceCount+'">From</label>'+
                            '<input type="date" name="workstartdate-'+stateMap.experienceCount+'" id="workstartdate-'+stateMap.experienceCount+'" class="form-control" required>'+
                        '</div>'+
                        '<div class="col-md-6 col-xs-6 field">'+
                            '<label for="workenddate-'+stateMap.experienceCount+'">To</label>'+
                            '<input type="date" name="workenddate-'+stateMap.experienceCount+'" id="workenddate-'+stateMap.experienceCount+'" class="form-control" required>'+
                        '</div>'+
                        '<div class="col-md-6 field">'+
                            '<label for="workleavereason-'+stateMap.experienceCount+'-year">Reason for Leaving</label>'+
                            '<input type="text" name="workleavereason-'+stateMap.experienceCount+'-year" id="workleavereason-'+stateMap.experienceCount+'-year" class="form-control" >'+
                        '</div>'+
                        '<div class="col-md-6 field">'+
                            '<label for="workexperience-'+stateMap.experienceCount+'-degree">Work Description</label>'+
                            '<input type="text" name="workexperience-'+stateMap.experienceCount+'-degree" id="workexperience-'+stateMap.experienceCount+'-degree" class="form-control" >'+
                        '</div>'+
                        '</div>';
        if( !$('#work-label').size()) {
            $form.append('<div class="form-group row" >'+
                '<h3 class="heading-label" id="work-label">Work Experience </h3>' +
                '<span class="btn btn-success add-experience">Add Experience <i class="fa fa-plus "></i></span>' +
                '<span class="btn btn-success minus-experience disabled">Remove Experience <i class="fa fa-plus "></i></span>' +
                '<div id="work-experience">' +
                '</div>' +
            '</div>');
        }
        $('#work-experience').append(template);
    };

    var renderSkillsForm = function() {
        var $form = $('#applyform');
        var template =  '<div class="skills-container count-'+stateMap.skillCount+'">'+
                        '<div class="col-md-12 field">'+
                            '<label for="skill-'+stateMap.skillCount+'">Skill</label>'+
                            '<input type="text" name="skill-'+stateMap.skillCount+'" id="skill-'+stateMap.skillCount+'" class="form-control" required>'+
                        '</div>'+
                        '<div class="col-md-6 col-xs-6 field">'+
                            '<label for="skillrating-'+stateMap.skillCount+'">Rating (5 Being the Highest)</label>'+
                            '<input type="text" name="skillrating-'+stateMap.skillCount+'" id="skillrating-'+stateMap.skillCount+'" class="form-control" required >'+
                        '</div>'+
                        '<div class="col-md-6 col-xs-6 field">'+
                            '<label for="skillyears-'+stateMap.skillCount+'">Years of Experience</label>'+
                            '<input type="text" name="skillyears-'+stateMap.skillCount+'" id="skillyears-'+stateMap.skillCount+'" class="form-control" required >'+
                        '</div>'+
                        '</div>';
        
        // $form.append(template);
        if( !$('#skill-label').size()) {
            $form.append('<div class="form-group row" >'+
                '<h3 class="heading-label" id="skill-label">Skills </h3>' +
                '<span class="btn btn-success add-skill">Add Skill <i class="fa fa-plus "></i></span>' +
                '<span class="btn btn-success minus-skill disabled">Remove Skill <i class="fa fa-minus "></i></span>' +
                '<div id="skills">' +
                '</div>' +
            '</div>');
        }
        $('#skills').append(template);
    };

    var renderApplicationForm = function() {
        // formFieldsJSON = window.formFieldsJSON
        var $form = $('#applyform');
        var template = '';
        $.each(formFieldsJSON, function(key,val){
            $form.append('<div class="form-group row" data-label="'+key+'"><h3 class="heading-label">'+key+'</h3></div>');
            $.each(val, function(key2, val2){
                $.each(val2, function(key3, val3){
                    $form.find('.form-group[data-label="'+key+'"]').append(''+
                        '<div class="'+val3.className+' field">' +
                            '<label for="'+val3.id+'">'+val3.label+
                                '<span class="required '+(val3.required ? '' : 'hide')+'">*</span>'+
                            '</label>' +
                            renderFormField(val3) +
                        '</div>');
                });
            });
        });
    };

    var renderFormField = function(data) {
        var type = data.type;
        switch(type) {
            case 'select-box':
                setTimeout(function(e){
                    $.each(data.choices, function(key,val){
                        $('#'+data.id).append('<option value="'+val+'">'+val+'</option');
                    });
                }, 300);
                return '<select class="form-control" id="'+data.id+'"></select>';
            break;
            case 'select-type1':
                setTimeout(function(e){
                    $.each(data.choices, function(key,val){
                        $.each(val[data.key], function(key2,val2){
                            $('#'+data.id).append('<option value="'+key +' - '+ val2+'">'+key +' - '+ val2+'</option');
                        });
                    });
                }, 300);
                return '<select class="form-control col-md-3" id="'+data.id+'"></select>';
            break;
            case 'select-type2':
                setTimeout(function(e){
                    $.each(data.choices, function(key,val){
                        $.each(val, function(key2,val2){
                            $('#'+data.id).append('<option value="'+key +' - '+ key2+'">'+key +' - '+ key2+'</option');
                        });
                    });
                }, 300);
                return '<select class="form-control col-md-3" id="'+data.id+'"></select>';
            break;
            default:
            return '<input type="'+data.type+'" name="'+data.id+'" id="'+data.id+'" class="form-control" required="'+data.required+'">';
        }
    };

    var renderFormSubmitButton = function() {
        var $form = $('#applyform');
        $form.append('<div class="form-group row">' +
            '<div class="col-md-12 field">' +
                '<input type="submit" id="send-application" class="btn btn-primary" value="Submit">' +
            '</div>' +
        '</div>');
    };

    var renderDesiredPositions = function() {

    };

    $(function(){
        renderApplicationForm();
        renderSkillsForm();
        renderWorkExperienceForm();
        renderFormSubmitButton();
        bind();
    });


}());