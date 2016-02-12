comicServices.factory("ComicDetail", ComicDetailFactory);
function ComicDetailFactory(){
    console.log("in the ComicDetail factory");
    var imageLocation = "img/comicStrips";
    var newComicId = "BC";
    //newComicId=myComicId;
    //this.setComicId = function (comicID) {
    //    newComicId = comicID;
    //}
    this.setComicId = function (comicID) {
        newComicId = comicID;
    }


    return {
        all: function() {
            var returnValue = [];

            var strtDate = new Date();
            var toDay = strtDate;
            for (var days = 0; days < 14; days++) {
                var strYear = toDay.getFullYear();
                var strMon = ( "0" + (toDay.getMonth() + 1)).slice(-2);
                var strDay = ( "0" + toDay.getDate()).slice(-2);
                //returnValue[days] = ComicKey+strYear+strMon+strDay;
                var imageId = newComicId + strYear + strMon + strDay + ".jpg";
                returnValue[days] = imageLocation + "/" + newComicId + "/" + imageId;

                toDay.setDate(toDay.getDate() - 1);
            }

            return returnValue;

        }
    }
};
