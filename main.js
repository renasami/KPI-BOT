var ACCESS_TOKEN = ''; 
var line_endpoint = 'https://api.line.me/v2/bot/message/reply';
var YOUR_USER_ID = '';

//トリガーを設定
function setTrigger() {
  var setTime = new Date();
  setTime.setDate(setTime.getDate() + 1);
  setTime.setHours(8);
  setTime.setMinutes(30);
  ScriptApp.newTrigger('testMethod').timeBased().at(setTime).create();  
};

function setTrigger2() {
  var setTime2 = new Date();
  setTime2.setDate(setTime2.getDate() + 1);
  setTime2.setHours(23);
  setTime2.setMinutes(00);
  ScriptApp.newTrigger('testMethod2').timeBased().at(setTime2).create();  
};

function push() {
  var url = "https://api.line.me/v2/bot/message/push";
  var headers = {
    "Content-Type" : "application/json; charset=UTF-8",
    'Authorization': 'Bearer ' + ACCESS_TOKEN,
  };
  var postData = {
    "to": '',
    "messages" :  [
        {
            type: 'text',
            text: 'KPI更新してください\nhttps '
        }, 
        {
            type: 'text',
            text: 'TwitterKPIも更新してください\n https:/'
        }, 
      ]
  };
  var options = {
    "method" : "post",
    "headers" : headers,
    "payload" : JSON.stringify(postData)
  };
  return UrlFetchApp.fetch(url, options);
};

function push2() {
  var url = "https://api.line.me/v2/bot/message/push";
  var headers = {
    "Content-Type" : "application/json; charset=UTF-8",
    'Authorization': 'Bearer ' + ACCESS_TOKEN,
  };
  var postData2 = {
  "to": '',
    "messages" :  [
        {
            type: 'text',
            text: '日報書いてください \n https:'
        }, 
       ]
    };
      var options = {
    "method" : "post",
    "headers" : headers,
    "payload" : JSON.stringify(postData2)
  };
  return UrlFetchApp.fetch(url, options);
};

function testMethod2() {
  setTrigger2();
  push2();
}

//実行
function testMethod() {
 setTrigger();
 push()
}
        

        