exports.openLink = function(){
    var reader = new FileReader();

    reader.onload = function(e) {
        var dataURL = reader.result;
    }

    return reader.readAsDataURL("Link.txt");
}