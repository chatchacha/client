# Chatchacha

Chatchacha is yet another live chat service that you can install and host on your own webservers!

## 1. Client

### Usage

#### // Dependencies
First of all, you must have installed a Chatchacha server before going through these steps. Please look at https://github.com/chatchacha/server for instructions on how to install your own Chatchacha server.

Please not you will also need any web server (apache, nginx, ...) in order to make this client accessible to your users.

#### // Instructions

Ready to setup the client? Here we go:

* Download the latest version of the client at http://chatchacha.fr/download/latest
* Unzip it somewhere that can be reached through your webserver
* Create a file `js/config.js` by copying `js/config.dist.js`
* Edit your configuration with your chatchacha server information

That's all, you are ready!

Now, simply open `http://myhost/path/to/my/client/index.php` with a web browser, and enjoy Chatchacha! :)

### Development
If you are willing to contribute to the development of this client, or just want to be able to customize it for your own needs, then here is the development process:

* Clone this repository anywhere you fancy
* Install dependencies with `npm install`
* Start making your changes inside the folder `src`
* Create a new build by running `gulp build`
* That's it, you've just created a better version of Chatchacha in the folder `build`

Please note you might want to learn how to use [Gulp](http://gulpjs.com/) in order to improve the build.


## 2. Server
Please look at the following repository: https://github.com/chatchacha/server
