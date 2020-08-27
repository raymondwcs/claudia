#Claudia
##Preparation
1. Obtain an **access key** (AWS Access Key ID and AWS Seret Access Key) for the *root* user.  Follow the instructions at the URL below.
https://www.techrepublic.com/article/how-to-create-an-access-key-for-the-root-user-in-aws/
1. Add the keys to your `~/.aws/credentials` file
```
[claudia]
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_ACCESS_SECRET
```
1. Change the acess rights of `~/.aws/credentials`
```
chmod 600 ~/.aws/credentials
```
1. Install Claudia
```
sudo npm install claudia -g
npm install claudia-api-builder
```
##Steps
1. Create and deploy the sample `gender` API endpoint as Lambda Function
```
./node_modules/.bin/claudia create --region us-east-1 --api-module app
```
Wait for the completion of the deployment.
```
packaging files	npm install -q --no-audit --production
npm WARN gender@0.0.1 No repository field.
npm WARN gender@0.0.1 No license field.

initialising IAM role	iam.putRolePolicy	PolicyName=log-writer	RoleName
creating version alias	lambda.updateAlias	FunctionName=gender	Name=lat
creating version alias	lambda.createAlias	FunctionName=gender	Name=lat
creating REST API	apigateway.createResource	parentId=woarc1fra0	p
creating REST API	apigateway.putMethod	authorizerId=undefined	resource
creating REST API	apigateway.putIntegration	resourceId=7e0nqo	r
creating REST API	apigateway.putMethodResponse	resourceId=7e0nqo	r
creating REST API	apigateway.putIntegrationResponse	resourceId=7e0nq
creating REST API	apigateway.putMethod	resourceId=7e0nqo	restApiI
creating REST API	apigateway.putIntegration	resourceId=7e0nqo	r
creating REST API	apigateway.putMethodResponse	resourceId=7e0nqo	r
creating REST API	apigateway.putIntegrationResponse	resourceId=7e0nq
creating REST API	apigateway.putMethod	authorizerId=undefined	resource
creating REST API	apigateway.putIntegration	resourceId=woarc1fra0	r
creating REST API	apigateway.putMethodResponse	resourceId=woarc1fra0	r
creating REST API	apigateway.putIntegrationResponse	resourceId=woarc
creating REST API	apigateway.putMethod	resourceId=woarc1fra0	restApiI
creating REST API	apigateway.putIntegration	resourceId=woarc1fra0	r
creating REST API	apigateway.putMethodResponse	resourceId=woarc1fra0	r
creating REST API	apigateway.putIntegrationResponse	resourceId=woarc
creating REST API	apigateway.createDeployment	restApiId=5wjm8iz1e3	ssaving configuration
{
  "lambda": {
    "role": "gender-executor",
    "name": "gender",
    "region": "us-east-1"
  },
  "api": {
    "id": "5wjm8iz1e3",
    "id": "xxxxxxxxxx",

    "module": "app",
    "url": "https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/latest"
  }
}
```
1. Upon successful deployment, an URL of your Lambda function will be given to you.
###Run your Lambda function
```
https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/latest?name=raymomnd
```