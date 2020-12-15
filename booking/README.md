# Making your Express.js app serverless
This tutorial demonstrates how to use [Claudia's Lambda proxy wrapper](https://claudiajs.com/tutorials/serverless-express.html) to deploy Express apps to AWS Lambda and API Gateway, with minimal changes.

This example implements one RESTful API at the following endpoint:
```
/api/booking/{bookingid}
```
## Preparation
1. You need a collection named `bookings` in your `test` database.  You also need the following booking document in the `bookings` collection:
```
{
    bookingid: "BK002",
    mobile: "12340000"
}
```
1. Replace value of `mongourl` variable in [app.js](app.js) with your MongoDB Atlas connection url.
1. Install app dependencies: `npm install`
1. Ensure the app is working fine before deploying it to AWS.  Test the app by submiting the following RESTful request to retrieve a booking document.
```
curl -X GET localhost:8099/api/booking/BK002
```
## Deploying the Express app to AWS Lambda and API Gateway
1. Install Claudia
```
npm install claudia -D
```
1. Generate **AWS Lambda wrapper** for the Express app
```
./node_modules/.bin/claudia generate-serverless-express-proxy --express-module app
```
2. Deploy to AWS Lambda and API Gateway
```
claudia create --handler lambda.handler --deploy-proxy-api --region us-east-1
```
Wait for depolyment to complete.
```
handler --deploy-proxy-api --region us-east-1
packaging files	npm install -q --no-audit --production
npm WARN booking@0.0.1 No repository field.
npm WARN booking@0.0.1 No license field.

added 249 packages from 138 contributors in 2.243s

1 package is looking for funding
  run `npm fund` for details
initialising IAM role	iam.putRolePolicy	PolicyName=log-writer	RoleNamecreating version alias	lambda.updateAlias	FunctionName=booking	Name=latcreating version alias	lambda.createAlias	FunctionName=booking	Name=latcreating REST API	apigateway.createResource	parentId=3aov7u27bc	pcreating REST API	apigateway.putMethod	authorizerId=undefined	resourcecreating REST API	apigateway.putIntegration	resourceId=ry2iqf	rcreating REST API	apigateway.putMethodResponse	resourceId=ry2iqf	rcreating REST API	apigateway.putIntegrationResponse	resourceId=ry2iqcreating REST API	apigateway.putMethod	resourceId=ry2iqf	restApiIcreating REST API	apigateway.putIntegration	resourceId=ry2iqf	rcreating REST API	apigateway.putMethodResponse	resourceId=ry2iqf	rcreating REST API	apigateway.putIntegrationResponse	resourceId=ry2iqcreating REST API	apigateway.putMethod	authorizerId=undefined	resourcecreating REST API	apigateway.putIntegration	resourceId=3aov7u27bc	rcreating REST API	apigateway.putMethodResponse	resourceId=3aov7u27bc	rcreating REST API	apigateway.putIntegrationResponse	resourceId=3aov7creating REST API	apigateway.putMethod	resourceId=3aov7u27bc	restApiIcreating REST API	apigateway.putIntegration	resourceId=3aov7u27bc	rcreating REST API	apigateway.putMethodResponse	resourceId=3aov7u27bc	rcreating REST API	apigateway.putIntegrationResponse	resourceId=3aov7creating REST API	apigateway.createDeployment	restApiId=v4ym0lzp2g	ssaving configuration
{
  "lambda": {
    "role": "booking-executor",
    "name": "booking",
    "region": "us-east-1"
  },
  "api": {
    "id": "XXXXXXXXXX",
    "url": "https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/latest"
  }
}
```
3. Locate the endpoint's URL.
4. Submit a RESTful request to read one booking document.
```
curl -X GET "https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/latest/api/booking/BK002"
```
## Updating and Destroying Lambda Functions
1. Issue the following command to redeploy a new version
```
./node_modules/.bin/claudia update
```
2. Issue the following command to destroy (remove) the deployed Lambda functions
```
./node_modules/.bin/claudia destroy
```