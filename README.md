# metricsConverter

* Published Package - https://www.npmjs.com/package/metric_converter_5j5?activeTab=readme

## Playbook

- Login to your npmjs.com profile
- The names of Github Repository, Local Folder and name and main fields in the package.json should be same
- Also, the github url should be copied from the code section of the repository!!!
- No upper case letters should be used!!!!
- Upload the module file and package.json in the github repository
- Open the folder in cmd and the enter the following commands
  *     npm pack
- Upload the zip file added from the local folder in the github repository
  *     npm adduser
- Finish the Authentication
  *     npm publish
- Verify if your package is published in your npm profile.

- Create a `html file` and write the following code to test your published package
-     <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test</title>
      </head>
      <body>
            <script src="metric_converter.js"></script> <!-- Replace 'your-bundled-package.js' with the actual name of your bundled package -->
            <script>
                 // Test cases
                 console.log(lengthConverter("meters", "kilometers", 1000)); // Expected output: 1
                 console.log(lengthConverter("meters", "centimeters", 1)); // Expected output: 100
                 console.log(lengthConverter("meters", "millimeters", 1)); // Expected output: ~1760
           </script>
      </body>
      </html>

