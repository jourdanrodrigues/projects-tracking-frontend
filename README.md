# Projects Tracking Frontend App

## Development

### Setting up environment and running the app

First of all:

- Duplicate the file `.env.example`, renaming it to `.env`;
- Fill the placeholders that are between curly brackets (removing the curly brackets as well);
- Uncomment (remove the "#" and the space char right after it from) the variables you want to use. 

#### Docker

Make sure you have [Docker](https://store.docker.com/search?type=edition&offering=community) installed on your machine.

1. Run `docker-compose up` (might take a few minutes to end);

#### Manually

Make sure you have [NodeJS v9.2](https://nodejs.org/en/download/) and Yarn v1.3.2 installed on your machine.

1. Run `yarn install` (might take a couple of minutes to end);

2. Run `yarn start dev`;


#### That's it!
Open [`http://localhost:3000/`](http://localhost:3000/) (or the port you used in the `.env`).
