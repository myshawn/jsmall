exports.SendCertCode = (phone_num, cert_code) => {
	const Core = require('@alicloud/pop-core');

  var client = new Core({
    accessKeyId: 'LTAIjIzwjbGU8oIw',
    accessKeySecret: 'Eh3WvBHlzrEWKF6TDIxsMq0zJhhs5O',
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25'
  });

  var params = {
    "RegionId": "cn-hangzhou",
    "PhoneNumbers": phone_num,
    "SignName": "大光商城",
    "TemplateCode": "SMS_165419634",
    "TemplateParam": "{\"code\":" + cert_code + "}"
  }

  var requestOption = {
    method: 'POST'
  };

  client.request('SendSms', params, requestOption).then(
      (result) => {
        console.log(result);
      }, (ex) => {
        console.log(ex);
      })
}
