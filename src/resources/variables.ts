import ExampleBucket from './example-bucket';

export const ExampleVariables = {
	ExampleBucket: {
		Name: { Ref: ExampleBucket.name },
		Arn: { 'Fn::GetAtt': [ExampleBucket.name, 'Arn'] },
	},
};
