const express = require("express");
const axios = require("axios");
const router = express.Router();

const token = require("../config/config").token;
const baseUrl = require("../config/config").baseUrl;

// @route   GET api/tickets/
// @desc    Tests users route
// @access  Public
router.get("/", (req, res) => res.json({ msg: "this one Works" }));

// @route   GET api/tickets/:page_num
// @desc    Get tickets by page number
// @access  Public
router.get("/:page/:perPage", (req, res) => {
  axios
    .get(baseUrl + `${req.params.page}&perPage=${req.params.perPage}`, {
      headers: {
        apiToken: token
      }
    })
    .then(response => {
      res.json({ data: response.data, headers: response.headers });
    })
    .catch(err => res.status(400).json({ err: err }));
});

module.exports = router;
