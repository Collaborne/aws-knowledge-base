# {Service Name}
{Service description}

## Deployment

Use below command to deploy:
1. Export environment variables:
  ```bash
  export AWS_SDK_LOAD_CONFIG=1
  AWS_PROFILE=development DEV_ENVIRONMENT=dev PARTITION=p1 npm run dev:prepare-env
  ```
2. Deploy service:
  ```bash
  AWS_PROFILE=development npx serverless deploy --verbose
  ```
