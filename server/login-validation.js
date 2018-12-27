exports.loginVerify = function (result, socket, userdata) {
  var response = false;
  for (var i = 0; i < result.length; i++) {
    if (userdata.userName === result[i].email && userdata.userPassword === result[i].userPwd) {
      data = {
        "userEmail": result[i].email,
        "userId": result[i].id,
        "success": true,
        "userName": result[i].fName + " " + result[i].lName
      };
      response = data;
      break;
    }
  }
  return response;
};
