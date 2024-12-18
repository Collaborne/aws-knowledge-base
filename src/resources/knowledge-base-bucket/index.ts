const NAME = 'KnowledgeBaseBucket';

const resources = {
	[NAME]: {
		Type: 'AWS::S3::Bucket',
	},
};

export default {
	resources,
	name: NAME,
};
