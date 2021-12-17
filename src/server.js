import express from 'express';
import http from 'http';
import { Server as ioServer } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';

import { questions, studentAnswer } from './database/db.js';


const app = express();
const server = http.createServer(app);


export const io = new ioServer(server, {
    cors: {
        origin: process.env.ORIGIN_CORS_URL,
        methods: ['GET', 'POST']
    }
});

io.on('connection', socket => {
    console.log(`Socket connected with ${socket.id}`);

    socket.emit('storageQuestions', questions);

    socket.on('createQuestion', question => {
        if(question !== null){
            const keys = Object.keys(question);

            for (let key of keys) {
                if (question[key] == "") {
                    return
                }
            }

            const newQuestion = {
                id: uuidv4(),
                ...question
            }

            questions.push(newQuestion);

            socket.broadcast.emit('receivedQuestions',newQuestion);
        }
    });

    socket.on('sendAnswerData', answerData => {
        const data = {
            id: answerData.id,
            question_about: answerData.question_about,
            isCorrectAnswer: answerData.isCorrectAnswer
        }

        if(studentAnswer[answerData.student_name]){
            let isAnswered = false;

            const newData = [];

            for( let answer of studentAnswer[answerData.student_name]){
                if(answer.id === answerData.id) {
                    isAnswered = true;
                } else {
                    newData.push(answer);
                }
            }

            if(isAnswered){
                newData.push(data);
                studentAnswer[answerData.student_name] = newData;
            } else {
                studentAnswer[answerData.student_name].push(data);
            }
        } else {
            studentAnswer[answerData.student_name] = [data];
        }
        socket.broadcast.emit('sendAnswersToTeacher',studentAnswer);
    });

});

const port = process.env.PORT || 3333;

server.listen(port, () => console.log('Node Server is connected on port:',port))
