import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); 

import express from 'express';
import { connectDB } from './db/connectiondb.js';

const app = express();

connectDB(app);
