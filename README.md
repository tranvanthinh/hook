### Git Update 
    $ git add -A
    $ git commit --amend --no-edit
    $ git push -f

### Cài sass
    $ npm install --save-exact sass@1.42.1

### Cài đặt thư viện React router : 
    $ npm install --save-exact react-router-dom@5.3.0

### Cài axios
    $ npm install --save-exact axios@0.23.0
    $ npm install --save-exact moment@2.29.1

### 👉 Cài đặt thư viện: Bootstrap
    $ npm install --save-exact react-bootstrap@2.0.0
    $ npm install --save-exact bootstrap@5.1.3

    ->  import Modal from 'react-bootstrap/Modal'
        import Button from 'react-bootstrap/Button'
        @import "~bootstrap/scss/bootstrap"; => index.scss


### useState 
    - Trả ra 2 phần tử: [giá trị của biến,  function xử lý khi có sự thay đổi]
    --> Destructuring

### props
    -> Truyền từ Cha xuống con, parent => child, top => bottom

### useEffect(() => {
    console.log("TODO")
  }, [])

  => const [dataCovid, setDataCovid] = useState([])
    useEffect(() => {
        axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z').then(res => {
            let data = res && res.data ? res.data : []
            if (data && data.length > 0) {
                data.map(item => {
                    item.Date = moment(item.Date).format("DD/MM/YYYY");
                    return item
                })
            }
            setDataCovid(data)
        })
    }, [])

#### API Youtube 
    $ AIzaSyA-7AXc34C1LdkmoIN2gkckkg-kIkusdK8

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
