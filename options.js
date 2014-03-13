var StorageTest = {

    init: function() {
        $('#storage-get').click(function(event) {
            StorageTest.getAffiliation();
        });

        $('#storage-set').click(function(event) {
            StorageTest.setAffiliation();
        });
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

    StorageTest.init();
});

