# Paginate Cache

This repository is the solution for the technical test from Accenture. The goal is to build a cache of items on the front-end to achieve instant pagination.

## 1. How to start

### 1.1 General

- set up all dependencies `$ npm run build`
- start the project `$ npm run dev`

### 1.2 Docker

- You can also run the docker image <br> `$ sudo docker image build -t paginate_cache .`
- Then <br> `$ docker run -it -p 3000:3000 paginate_cache`
- Manually go to `localhost:3000`.

### 1.3 Bash Script

- Alternatively, run bash script <br> `$ ./bash.sh` <br>
- Hint : The bash script has been change mod by <br> `$ chmod 755 bash.sh`

## 2. Intro

- No responsive design at the moment, so please use the desktop browser.
- Using **_Node.js_** to build API for retrieving tickets by page, which is running on port 5000.
- Using **_React_** and **_Redux_** for front-end development, which is running on port 3000.
- Using **_Redux-saga_** for side effect handling
- Using **_Material-UI_** for front end components.
- Using **_Testing-library/React_** (used to be **_react-testing-library_**) for the unit test.

## 3. New feature - React Hooks

Hooks are a new addition in React **_16.8_**, which is the latest version. They let us use state and other React features without writing a class. <br><br>
Functional components do not have state and cannot access to life cycle methods when React Version is lower than **_16.7_**. Otherwise, you must make components to be class-based. <br><br> As we know, the elegance and simplicity of functional components make it easier for performance optimization of React under-the-hood. In addition, class components are much more complex than functional components because of the lifecycle methods. And those lifecycle methods will make the development tend to lifecycle-driven rather than logic-driven. <br><br>
As functional components supporting state and covering nearly all lifecycle methods, react hooks is more efficient, more understandable and more maintainable than old school class-based components.

## 4. Code Structure

![](https://raw.githubusercontent.com/WrynnWang/paginate_cache/master/pictures/treestructure.png)

## 5. Cache Degisn
![](https://raw.githubusercontent.com/WrynnWang/paginate_cache/master/pictures/algo.png)

1.  Only two async actions in the whole design, which are ***GET_DEFAULT_TICKETS*** and ***LOAD_TICKETS***. We need to check the payload count. For example, we requested 8 pages of tickets, if the payload including less than 8 * 12 tickets, there are no more tickets in the backend. (If not reach the end)
2.  Assume there are 12 pages in the cache, if user click button to quickly and leaving from 11 to 12 page, show indication that there are loading more data from the backend.
3.  Assume there are 12 pages in the cache, is user click next button and enter page 11, call ***LOAD_TICKETS***. (If not reach the end)


## 6. Unit Test.

Using **_Testing-library/React_** (used to be **_react-testing-library_**) for unit test.

- `$cd client`
- `$npm run test`

And test result shows below. <br>
![](https://raw.githubusercontent.com/WrynnWang/paginate_cache/master/pictures/testResult.png)

## 7. Docker

Docker is really powerful to automate the deployment of software applications inside containers. The very beginning use of Docker makes me believe it is helpful in daily development. <br>
As this project is not a pure react project. The client(React) directory is based inside the server(Node.js) directory, it was more difficult to apply docker.<br>
Still utilize the scripts in **_package.json_** in dockerfile, and ignore node_modules for both React and Node to enhance the speed when making a image.

## 8. Bash Script

Spent a few minutes reviewing bash. Put all compiling command and docker commands together.
<br> Simply run `$ ./bash.sh` <br>
Hint : The bash script has been changed mod by `$ chmod 755 bash.sh`

## 9. Raw Time Consumption

1.  6th/July/2019 04:10 PM : Start
2.  6th/July/2019 04:44 PM : First commit, Set Up, node part finished
3.  7th/July/2019 06:13 PM : Development stage ends.
4.  8th/July/2019 03:28 PM : All unit tests done.
5.  8th/July/2019 10:24 PM : Dockerfile and bash script finished.

- Spent a lot of time learning react-testing-library and docker.

## 10. To Do List.

-   Could not find a few data need to display in the ticket data structure. ***Approval***, etc. 