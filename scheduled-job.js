require('dotenv').config();
const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');
const { ethers } = require('ethers');
// const tweet = require('./tweet');

// Read in TESTVAR:
const testVar = process.env.TESTVAR;
console.log(testVar);

/*
lastSaleTime = process.env.LAST_SALE || moment().startOf('minute').subtract(3600, "seconds").unix();
console.log(`******************** LAST SALE TIME: ${lastSaleTime}`);

       axios.get('https://testnets-api.opensea.io/api/v1/events', {
    // axios.get('https://api.opensea.io/api/v1/events', {
        // headers: {
          // 'X-API-KEY': process.env.X_API_KEY
        // },  
        params: {
            event_type: 'successful',
            only_opensea: 'false',
            // collection_slug: 'pixawizards',
            collection_slug: 'jlkcollection',
            occurred_after: lastSaleTime
          }
        }).then(response => {
            const events = _.get(response, ['data', 'asset_events']);    
            const sortedEvents = _.sortBy(events, function(event) {
              const created = _.get(event, 'created_date');
              return new Date(created);
            })
        
            console.log(`${events.length} sales since the last one...`);
        
            _.each(sortedEvents, (event) => {
                const created = _.get(event, 'created_date');
                console.log(created);
                lastSaleTime = moment(created).unix();
                console.log(lastSaleTime);
                // console.log("Sending a Tweet!");
                // console.log(event);
                // return formatAndSendTweet(event);
            });
        
        }).catch((error) => {
            console.error(error);
        });

*/