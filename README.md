## To repro the user issue [#18270](https://github.com/Azure/azure-sdk-for-js/issues/18270)

This sample uses the bundling process described at [azure-sdk-for-js/Bundling.md#parcel-with-typescript](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/Bundling.md#parcel-with-typescript)

### Steps to repro

1. Install node and npm
2. Clone this project
3. `npm install` in this folder to install all the dependencies
4. Create `.env` file and populate it with `APPCONFIG_CONNECTION_STRING` in it as shown in `sample.env`
5. Install parcel globally - `npm install -g parcel-bundler`
6. Run `parcel index.html` from this folder
7. Following these steps should result in the error below
   ![image](https://user-images.githubusercontent.com/10452642/140199875-f6310586-6ecf-45cf-ba3a-31c809f1bb42.png)
