import { createPutObject, PutObject } from '@collaborne/starburst-aws/s3';
import type { Handler } from 'aws-lambda';
import { S3 } from 'aws-sdk';

const { BUCKET_NAME } = process.env as Record<string, string>;

export type AWSClient = PutObject;

export type HandlerEvent = {
	key: string;
};

const s3 = new S3();

export function createHandler(awsClient: AWSClient): Handler<HandlerEvent> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return async (event: { key: any }) => {
		const { key } = event;
		await awsClient.putObject({
			key,
			body: 'Hello world!',
			contentType: 'text/plain',
		});
	};
}

export const handler = createHandler({
	...createPutObject(s3, BUCKET_NAME),
});
