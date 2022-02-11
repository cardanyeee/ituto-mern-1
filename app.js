const express = require('express');
const app = express();

const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');


const errorHandler = require('./middleware/error');

if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: './config.env' })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

const AuthRouter = require('./routes/auth');
const MessageRouter = require('./routes/message');
const ConversationRouter = require('./routes/conversation');

const MovieRouter = require('./routes/movie');
const ActorRouter = require('./routes/actor');
const ProducerRouter = require('./routes/producer');

app.use('/api', AuthRouter);
app.use('/api', MessageRouter);
app.use('/api', ConversationRouter);


app.use('/api', MovieRouter);
app.use('/api', ActorRouter);
app.use('/api', ProducerRouter);


app.use(errorHandler);

module.exports = app;