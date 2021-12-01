## Serverless

This directory will contain API endpoints to support data persistence, such as comments.


### Serverless deployment steps
- Set `DATABASE_URL` in the .env file to connect to a target database.
- Create the db schema (`CREATE` entries in schema.sql)
- Run prisma commands
    - `prisma db pull` - creates the Prisma schema based on the db
    - `prisma generate` - generate Prisma client
- Setup AWS Access Key
    - `serverless config credentials --provider aws --key AWS_ACCESS_KEY_ID  --secret AWS_SECRET_ACCESS_KEY`
- Deploy
    - `serverless deploy`

