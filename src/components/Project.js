import Calculator_img from '../img/Calculator_img.png';
import Todo_img from '../img/Todo_img.png';
import Crud_img from '../img/Crud_img.png';
import Football_img from '../img/Football_img.png';
//import uuid from 'react-uuid';

let projects = [
    {
        imgSrc: Calculator_img,
        name: "Calculator",
        demo:  `https://jojiseb.github.io/calculator_app/`,
        desc: "A Basic Calculator App made using HTML,CSS & JAVASCRIPT"
    },

    {
        imgSrc: Todo_img,
        name: "Todo",
        demo:  `https://jojiseb.github.io/Todo_app/`,
        desc: "An Advanced Todo App made using HTML,CSS & JAVASCRIPT"
    },

    {
        imgSrc: Crud_img,
        name: "CRUD",
        demo: ``,
        desc: "A CRUD App made using React Hooks, Axios & Mock-api"
    },

    {
        imgSrc: Football_img,
        name: "Football",
        demo: ``,
        desc: "A demo website made using HTML,CSS & React JS"
    }
];

export default projects;