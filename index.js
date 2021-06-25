const inuirer = require('inquirer');
const fs = require('fs');

//importing constructor functinos 
const Employee = require('./lib/Employee');
const Employee = require('./lib/Engineer');
const Employee = require('./lib/Intern');
const Employee = require('./lib/Manager');

//importing questions
const EngineerQuestions = require('./lib/EngineerQuestions');
const ManagerQuestions = require('./lib/EngineerQuestions');
const InternQuestions = require('./lib/EngineerQuestions');



const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What is the employee\'s role?',
        choices: // function to allow only one manager to be created
            () => {
            if (allEmployees.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']    
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        }
    },
    {
        
    }