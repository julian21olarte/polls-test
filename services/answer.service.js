'use strict';
const answerModel = require('../models').Answer;


function get(id) {
    return answerModel.findOne({where: {id}});
}


function getByQuestionId(questionId) {
    return answerModel.findAll({where: {questionId}});
}


function saveMany(answers) {
    return answerModel.bulkCreate(answers);
}

function deleteByQuestionId(questionId) {
    return answerModel.destroy({where: {questionId}});
}


function addIdToAnswersArray(answers, id) {
    return answers.map(function(answer) {
        answer.questionId = id;
        return answer;
    });
}

module.exports = {
    get,
    saveMany,
    deleteByQuestionId,
    addIdToAnswersArray,
    getByQuestionId
}