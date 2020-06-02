const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  
    const queryText = `SELECT * FROM "languages";`;
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            }).catch((error) => {
                console.log('Error in getting languages', error);
                res.sendStatus(500);
            });
   
});

router.get('/islands', (req, res) => {
  
    const queryText = `SELECT * FROM "island";`;
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            }).catch((error) => {
                console.log('Error in getting islands', error);
                res.sendStatus(500);
            });
   
});

router.get('/specialty', (req, res) => {
  
    const queryText = `SELECT * FROM "specialty";`;
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            }).catch((error) => {
                console.log('Error in getting specialty', error);
                res.sendStatus(500);
            });
   
});

router.get('/insurance', (req, res) => {
  
    const queryText = `SELECT * FROM "insurance_type";`;
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            }).catch((error) => {
                console.log('Error in getting insurance taken', error);
                res.sendStatus(500);
            });
   
});

router.get('/license', (req, res) => {
  
    const queryText = `SELECT * FROM "license_type";`;
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            }).catch((error) => {
                console.log('Error in getting license type', error);
                res.sendStatus(500);
            });
   
});

router.get('/treatment', (req, res) => {
  
    const queryText = `SELECT * FROM "treatment_preferences";`;
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            }).catch((error) => {
                console.log('Error in getting treatment approaches', error);
                res.sendStatus(500);
            });
   
});

router.get('/demographics', (req, res) => {
  
    const queryText = `SELECT * FROM "client_focus";`;
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            }).catch((error) => {
                console.log('Error in getting demographics', error);
                res.sendStatus(500);
            });
   
});

router.get('/age', (req, res) => {
  
    const queryText = `SELECT * FROM "age_groups_served";`;
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            }).catch((error) => {
                console.log('Error in getting age groups served', error);
                res.sendStatus(500);
            });
   
});

router.get('/session', (req, res) => {
  
    const queryText = `SELECT * FROM "session_format";`;
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            }).catch((error) => {
                console.log('Error in getting session format', error);
                res.sendStatus(500);
            });
   
});


/**
// Handles POST request with new member data
 */
router.post('/', (req, res) => {
    //define the queries
    console.log('this is the data in req.body',req.body);
    const id = req.body.id;
    const zip_code = req.body.zip_code;
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const prefix = req.body.prefix
    const age = req.body.age
    const license_state = req.body.license_state
    const license_expiration = req.body.license_expiration
    const hiamft_member_account_info = req.body.hiamft_member_account_info
    const supervision_status = req.body.supervision_status
    const fees= req.body.fees
    
   
         const queryText = `INSERT INTO "members" 
         ("id","zip_code","first_name", "last_name", "prefix", "age","license_state", "license_expiration", "hiamft_member_account_info", "supervision_status","fees")
     VALUES($1,$2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;
        pool.query(queryText, [id,zip_code, first_name, last_name, prefix, age, license_state, license_expiration, hiamft_member_account_info, supervision_status, fees])
          .then((result) => res.sendStatus(200))
          .catch((error) => {console.log(error);
             res.sendStatus(500)});
  

});

module.exports = router;

