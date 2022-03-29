import { ADD_PERSON } from "../constant";
//创建增加人的动作对象
export const creatAddPersonAction = personObj => ({type:ADD_PERSON,data:personObj})
