# meteorS3
Meteor 'hello world' with AWS S3 upload functionality.
The IP address of a client is logged with a timestamp, by making use of x-forwarded-for.

#### This project is made to be deployed to Modulus
This project is set up in a straightforward way to easily deploy to the Modulus platform.

### Sign up on Modulus
1. Sign up on Modulus at my.modulus.io/register
2. Create a 'meteor' project 
3. Create a mongodb 

#### Download the zip file from this GitHub Repository
Download the zip from this repo and upload it within the newly created project.

#### Make sure your S3 bucket has the CORS HEADERS and bucket policy set up
CORS HEADERS:
```
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>PUT</AllowedMethod>
        <AllowedMethod>POST</AllowedMethod>
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>HEAD</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
```

bucket policy:
```
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Sid": "AllowPublicRead",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::mod.support/*"
        }
    ]
}
```

#### Set up your environment variables
Once you have a mongodb and meteor project created you will need to add your env vars (environment variables) to your project. This can be done through the web dashboard by going to the 'administration' section of your project dashboard.

1. Scroll down to the bottom of your 'administration' section of your project dashboard
2. Enter the following environment variable: ROOT_URL  
3. Copy the URL / endpoint for your project (listed at the top of the administration page) and paste that URL into the text box next to the 'ROOT_URL' env var you just added.  Make sure to include https://  in the URL.
4. Add the env var MONGO_URL
5. Go to the administration page of your database dashboard and copy the MONGO_URI. Paste this in the corresponding text box, next to MONGO_URL.  Make sure to replace <username>:<password> with your actual username and password
6. Add the following env vars in a similar fashion and their corresponding values: S3_KEY, S3_SECRET, S3_BUCKET
7. Select the 'save' button.

#### Restart your project
Once you have added all of your env vars restart your project.  There is a button in the top-right-corner that says 'RUNNING.' Select this and a drop down will appear with the 'restart' button.

#### Check your logs for errors
If you inadvertently made any mistakes, you will want to check your logs on the project dashboard for any errors.  This will help you troubleshoot the app if you get 'Unable to connect to any application instances.' error when going to your project URL.

#### Test your application
Make sure your application shows the 'hello world' text etc., and make sure you can upload a file

1. If your application shows up and you try uploading a file but get 'NaN' then you may need to go back and check your S3 CORS HEADERS and S3 bucket policy
