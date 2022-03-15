// SERVER
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
const app = express();
const port = process.env.PORT || 8080;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
})