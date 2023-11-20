<a href="https://nextf0rm.vercel.app/">
  <img alt="Next.js 13 and Express.JS" src="https://socialify.git.ci/rycerzes/nextform/image?description=1&descriptionEditable=built%20with%20Next.js%2C%20Express.js%20and%20AWS&font=Inter&language=1&logo=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F93%2FAmazon_Web_Services_Logo.svg&name=1&pattern=Solid&theme=Dark">
  <h1 align="center">Next.js Forms</h1>
</a>

<p align="center">
  An open-source web-form app built with Next.js<br>
  Express.js and AWS for the REST API and database.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- [Next.js](https://nextjs.org) App Router
- [Amazon Web Services](https://docs.aws.amazon.com/) for backend functionality
- The [Amplify Framework](https://docs.amplify.aws/) for AWS integration
- Support for `REST API`, NoSQL Database `DynamoDB`, and `Lambda` functions
- Edge runtime-ready
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives
- [Cross Origin Resource Sharing ](https://aws.amazon.com/what-is/cross-origin-resource-sharing) for authentication

## Running locally

First, run the development server:

```bash
npm install
npm run dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).

## API Routing

The `REST API` is hosted on AWS using a Lambda function which deploys a `Serverless Express.js app`. Source code for lambda function is in the [`amplify/backend/function/formfunction/src/app.js`](https://github.com/rycerzes/nextform/tree/main/amplify/backend/function/formfunction/src.js)

> [!IMPORTANT]  
> The app template which is running on [localhost:3000](http://localhost:3000/) is using the `REST API` hosted on AWS. It has CORS enabled which means your app template will not be able make requests to the `REST API` hosted on AWS. 

> [!NOTE]
> To learn more about the `Serverless Express.js app` and how to deploy it, visit the [`amplify/README.md`](https://github.com/rycerzes/nextform/tree/main/amplify/README.md) 

## Authors

This project is created by [MLSA KIIT](https://mlsakiit.com) team members:

- Sourasish Basu ([@SourasishBasu](https://github.com/jaredpalmer)) - [MLSA KIIT](https://mlsakiit.com)
- Swapnil Dutta ([@rycerzes](https://github.com/shuding_)) - [MLSA KIIT](https://mlsakiit.com)
