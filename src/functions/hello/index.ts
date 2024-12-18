import { handlerPath, makeUniqueName } from '@collaborne/starburst-utils';

import { ExampleVariables } from '../../resources/variables';

const uniqueName = makeUniqueName('hellow');
export default {
	name: uniqueName,
	handler: `${handlerPath(__dirname)}/handler.handler`,
	environment: {
		BUCKET_NAME: ExampleVariables.ExampleBucket.Name,
	},
	iamRoleStatementsName: uniqueName,
	iamRoleStatements: [
		{
			Effect: 'Allow',
			Action: ['s3:GetObject', 's3:PutObject'],
			Resource: ExampleVariables.ExampleBucket.Arn,
		},
	],
};
