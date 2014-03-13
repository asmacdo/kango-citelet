var citeletOptions = {

    init: function() {
        $('#storage-get').click(function(event) {
            citeletOptions.getAffiliation();
        });

        $('#storage-set').click(function(event) {
            citeletOptions.setAffiliation();
        });

        citeletOptions.getAffiliation();
    },

    getAffiliation: function() {
        kango.invokeAsync('kango.storage.getItem', "affiliation", function(value) {
            $('#storage-value').val(value || 'null');
        });
    },

    setAffiliation: function() {
        kango.invokeAsync('kango.storage.setItem', "affiliation", $('#storage-value').val());
    },
};

KangoAPI.onReady(function() {

    $('#close').click(function(event) {
        KangoAPI.closeWindow()
    });

    citeletOptions.init();
});

