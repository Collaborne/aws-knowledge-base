import { handlerPath, makeUniqueName } from '@collaborne/starburst-utils';

import { Variables } from '../../resources/variables';

const uniqueName = makeUniqueName('knowledge-base-test');
export default {
	name: uniqueName,
	handler: `${handlerPath(__dirname)}/handler.handler`,
	environment: {
		BUCKET_NAME: Variables.KnowledgeBaseBucket.Name,
	},
	iamRoleStatementsName: uniqueName,
	iamRoleStatements: [
		{
			Effect: 'Allow',
			Action: ['s3:GetObject', 's3:PutObject'],
			Resource: Variables.KnowledgeBaseBucket.Arn,
		},
	],
};
