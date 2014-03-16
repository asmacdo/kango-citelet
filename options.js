var citeletOptions = {

    init: function() {
        $('#storage-get').click(function(event) {
            citeletOptions.getAffiliation();
        });

        $('#storage-set').click(function(event) {
            citeletOptions.setAffiliation();
        });

        // Display current affiliation
        citeletOptions.getAffiliation();
    },

    getAffiliation: function() {
        kango.invokeAsync('kango.storage.getItem', "affiliation", function(value) {
            $('#storage-val').text('Current Affiliation: ' + value);
        });
    },

    setAffiliation: function() {
        kango.invokeAsync('kango.storage.setItem', "affiliation", $('#selectSchool').val());
    citeletOptions.getAffiliation();
    },
};

KangoAPI.onReady(function() {

    $('#close').click(function(event) {
        KangoAPI.closeWindow()
    });

    citeletOptions.init();

    getOptions('selectSchool');

    function getOptions(ddId) {
        var dd = $('#' + ddId);

        $.getJSON("http://echo.jsontest.com/key/value/one/two", function(opts) {
            if(opts) {
                $.each(opts, function(schoolId, name) {
                    dd.append($('<option/>').val(schoolId).text(schoolId));
                });
            }
        });
    }

});
