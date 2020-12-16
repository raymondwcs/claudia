# Making your Express.js app serverless
This tutorial demonstrates how to use [Claudia's Lambda proxy wrapper](https://claudiajs.com/tutorials/serverless-express.html) to deploy Express apps to AWS Lambda and API Gateway, with minimal changes.

This example implements one RESTful API, which returns the *roman representation* of some given number, at the following endpoint  
```
/roman-numeral/{number}
```
## Deploying the Express app to AWS Lambda and API Gateway
1. Prepare `~/.aws/credentials` by following steps 1 to 5 described in this [document](../gender/README.md).
2. Generate **AWS Lambda wrapper** for the Express app
```
./node_modules/.bin/claudia generate-serverless-express-proxy --express-module app
```
3. Deploy to AWS Lambda and API Gateway
```
./node_modules/.bin/claudia create --handler lambda.handler --deploy-proxy-api --region us-east-1
```
You'll see the following messages in the output. Wait for depolyment to complete.
```
packaging files	npm install -q --no-audit --production
npm WARN roman-numeral@0.0.1 No repository field.
npm WARN roman-numeral@0.0.1 No license field.

initialising IAM role	iam.putRolePolicy	PolicyName=log-writer	RoleNamecreating version alias	lambda.updateAlias	FunctionName=roman-numeral	Ncreating version alias	lambda.createAlias	FunctionName=roman-numeral	Ncreating REST API	apigateway.createResource	parentId=79rz3n1n7f	pcreating REST API	apigateway.putMethod	authorizerId=undefined	resourcecreating REST API	apigateway.putIntegration	resourceId=11n3zm	rcreating REST API	apigateway.putMethodResponse	resourceId=11n3zm	rcreating REST API	apigateway.putIntegrationResponse	resourceId=11n3zcreating REST API	apigateway.putMethod	resourceId=11n3zm	restApiIcreating REST API	apigateway.putIntegration	resourceId=11n3zm	rcreating REST API	apigateway.putMethodResponse	resourceId=11n3zm	rcreating REST API	apigateway.putIntegrationResponse	resourceId=11n3zcreating REST API	apigateway.putMethod	authorizerId=undefined	resourcecreating REST API	apigateway.putIntegration	resourceId=79rz3n1n7f	rcreating REST API	apigateway.putMethodResponse	resourceId=79rz3n1n7f	rcreating REST API	apigateway.putIntegrationResponse	resourceId=79rz3creating REST API	apigateway.putMethod	resourceId=79rz3n1n7f	restApiIcreating REST API	apigateway.putIntegration	resourceId=79rz3n1n7f	rcreating REST API	apigateway.putMethodResponse	resourceId=79rz3n1n7f	rcreating REST API	apigateway.putIntegrationResponse	resourceId=79rz3creating REST API	apigateway.createDeployment	restApiId=rolcc1v4o5	ssaving configuration
{
  "lambda": {
    "role": "roman-numeral-executor",
    "name": "roman-numeral",
    "region": "us-east-1"
  },
  "api": {
    "id": "rolcc1v4o5",
    "url": "https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/latest"
  }
}

```
3. Locate the endpoint's URL that appears at the end of the output of the deploy command.
4. Submit a RESTful request to AWS to return the roman representation of 2020.
```
curl -X GET "https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/latest/roman-numeral/2020"
```
## Updating and Destroying Lambda Functions
1. Issue the following command to redeploy a new version
```
./node_modules/.bin/claudia update
```
2. Issue the following command to destroy (remove) the deployed Lambda function(s)
```
./node_modules/.bin/claudia destroy
```