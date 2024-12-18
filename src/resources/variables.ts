import KnowledgeBaseBucket from './knowledge-base-bucket';

export const Variables = {
	KnowledgeBaseBucket: {
		Name: { Ref: KnowledgeBaseBucket.name },
		Arn: { 'Fn::GetAtt': [KnowledgeBaseBucket.name, 'Arn'] },
	},
};
