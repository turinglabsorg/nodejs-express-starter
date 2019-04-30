import express = require("express")
import * as Utilities from '../libs/Utilities'

export function info(req, res) {
    res.json({status: "ONLINE"})
};