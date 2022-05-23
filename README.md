# brightHRTest
The application works with the Filtering function. Also it has been programmed to sorting the array object based off of the File name alphabetically. As regards to the Details Page, it was not completed (React Router bugs), Hence the data does not get displayed as the state passed into the Details page returns "null". I did some digging as to why and it turns out React Router v 6.x.x and higher has been changed a little bit. I downgraded the version of React and React-router-dom but was still having the same issue.
TO START APP: 
1) cd into test-app 
2) npm i react-scripts (if error says : react-scripts: command not found)
3) run 'npm start'
