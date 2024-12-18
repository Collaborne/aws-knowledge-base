import { Variables } from '@collaborne/starburst-utils';
import type { AWS } from '@serverless/typescript';

import Hello from './src/functions/hello';
import ExampleBucket from './src/resources/example-bucket';

const serverlessConfiguration: AWS = {
	service: 'serverless-project-template',
	frameworkVersion: '3',
	plugins: [
		'serverless-esbuild',
		'serverless-iam-roles-per-function',
		'serverless-plugin-required-option',
	],
	provider: {
		name: 'aws',
		runtime: 'nodejs14.x',
		region: 'eu-west-1',
		stage: Variables.STAGE,
		environment: {
			STAGE: Variables.STAGE,
			AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
		},
		stackTags: {
			Environment: Variables.ENVIRONMENT,
			Partition: Variables.PARTITION,
		},
		deploymentBucket: {
			blockPublicAccess: true,
		},
		versionFunctions: false,
	},
	package: {
		individually: true,
	},
	// import the function via paths
	functions: {
		Hello,
	},
	resources: {
		Conditions: {},
		Resources: {
			...ExampleBucket.resources,
		},
		Outputs: {},
	},
};

module.exports = serverlessConfiguration;
