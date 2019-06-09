## Usage and command line options

Installation
First, add Serverless Offline to your project:

`npm install serverless-offline --save-dev`

Then inside your project's `serverless.yml` file add following entry to the plugins section: `serverless-offline`. If there is no plugin section you will need to add it to the file.

It should look something like this:
```
plugins:
  - serverless-offline
```
In your project root run:

`serverless offline` or `sls offline`.

to list all the options for the plugin run:

`sls offline --help`


All CLI options are optional:

```
--prefix                -p  Adds a prefix to every path, to send your requests to http://localhost:3000/[prefix]/[your_path] instead. E.g. -p dev
--location              -l  The root location of the handlers' files. Defaults to the current directory
--host                  -o  Host name to listen on. Default: localhost
--port                  -P  Port to listen on. Default: 3000
--stage                 -s  The stage used to populate your templates. Default: the first stage found in your project.
--region                -r  The region used to populate your templates. Default: the first region for the first stage found.
--noTimeout             -t  Disables the timeout feature.
--binPath               -b  Path to the Serverless binary. Default: globally-installed `sls`
--noEnvironment             Turns off loading of your environment variables from serverless.yml. Allows the usage of tools such as PM2 or docker-compose
--resourceRoutes            Turns on loading of your HTTP proxy settings from serverless.yml
--printOutput               Turns on logging of your lambda outputs in the terminal.
--httpsProtocol         -H  To enable HTTPS, specify directory (relative to your cwd, typically your project dir) for both cert.pem and key.pem files
--skipCacheInvalidation -c  Tells the plugin to skip require cache invalidation. A script reloading tool like Nodemon might then be needed
--cacheInvalidationRegex    Provide the plugin with a regexp to use for ignoring cache invalidation. Default: 'node_modules'
--useSeparateProcesses      Run handlers in separate Node processes
--corsAllowOrigin           Used as default Access-Control-Allow-Origin header value for responses. Delimit multiple values with commas. Default: '*'
--corsAllowHeaders          Used as default Access-Control-Allow-Headers header value for responses. Delimit multiple values with commas. Default: 'accept,content-type,x-api-key'
--corsExposedHeaders        Used as additional Access-Control-Exposed-Headers header value for responses. Delimit multiple values with commas. Default: 'WWW-Authenticate,Server-Authorization'
--corsDisallowCredentials   When provided, the default Access-Control-Allow-Credentials header value will be passed as 'false'. Default: true
--exec "<script>"           When provided, a shell script is executed when the server starts up, and the server will shut down after handling this command
--apiKey                    Defines the API key value to be used for endpoints marked as private Defaults to a random hash.
--noAuth                    Turns off all authorizers
--preserveTrailingSlash     Used to keep trailing slashes on the request path
--disableCookieValidation   Used to disable cookie-validation on hapi.js-server
--enforceSecureCookies      Enforce secure cookies
--providedRuntime           Sets the runtime for "provided" lambda runtimes
--disableModelValidation    Disables the model validation
--showDuration              Show the execution time duration of the lambda function.
```

Any of the CLI options can be added to your `serverless.yml`. For example:

```
custom:
  serverless-offline:
    httpsProtocol: "dev-certs"
    port: 4000
```