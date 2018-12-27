exports.searchUser = function (dbData,searchData, users){
  var searchResult = [];
  var searchString = searchData.searchString;
  for (var i = 0; i < dbData.length; i++) {
    if (dbData[i].fName.toLowerCase() == searchString.toLowerCase() ||
      dbData[i].lName.toLowerCase() == searchString.toLowerCase() ||
      dbData[i].email.toLowerCase() == searchString.toLowerCase()) {
      var dataToSend = {
        'responseType' : 'searchedUser',
        'name': dbData[i].fName + " " + dbData[i].lName,
        'email': dbData[i].email,
        'gender': dbData[i].gender,
        'friendId': dbData[i].id,
        'isFriend': false,
        'isOnline': (dbData[i].id in users) ? true : false
      };
      searchResult.push(dataToSend);
    }
  }
  return searchResult;
};
