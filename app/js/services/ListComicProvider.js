//comicServices.provider('ListComic',
comicViewer.provider('ListComic',
    function ListComicProvider() {
    //function () {
        console.log("in the provider");
        var imageLocation = "img/comicStrips";
        var newComicId = "BC";
        this.setComicId = function (comicID) {
            console.log("in the setComicId function: " + comicID);
            newComicId = comicID;
        }

        this.$get = function () {
            console.log("in the ListComic Provider $get function: " + newComicId);
            //return function (newComicId) {
                console.log("in the return function: " + newComicId);
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
                console.log("before the return: " + returnValue.length);

                return returnValue;

            //}
        }
    });
