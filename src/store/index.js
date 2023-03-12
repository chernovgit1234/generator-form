import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    schemaFields: [],
    preChemaFields: [],
    activeId: '',
    showLoader: false,
    typeCreateStructure: '',
    openStartWindow: true,
    objectForm: {},
    schemaFieldsTest2: [{"namevalue":"login","label":"логин","placeholder":"Введите логин","style":"width: 100%;","class":"null-form-input","type":"text","maxlength":30,"typeName":"FormInput","id":1678643158370},{"namevalue":"password","label":"пароль","placeholder":"Введите пароль","style":"width: 100%;","class":"null-form-input","type":"password","maxlength":null,"typeName":"FormInput","id":1678643195172},{"style":"background-color:rgb(3,71,255);color:rgb(232,232,232);","class":"null-form-btn","type":"submit","name":"Войти ","disabled":false,"typeName":"FormButton","id":1678643226163}],
    schemaFieldsTest1: [{"namevalue":"city","options":[{"id":1678641358463,"name":"Уфа"},{"id":1678641361684,"name":"Москва"},{"id":1678641368108,"name":"Казань"}],"style":"margin-right: auto;","defaultvalueid":"","label":"город","typeName":"FormDropdown","id":1678641373203},{"namevalue":"brand","label":"марка авто","placeholder":"Марка вашего авто","style":"background-color:rgb(0,0,10);width: 100%;color:rgb(255,7,41);","class":"null-form-input","type":"text","maxlength":30,"typeName":"FormInput","id":1678641514001},{"namevalue":"mileage","label":"пробег","placeholder":"Пробег ваше авто","style":"background-color:rgb(7,7,7);color:rgb(255,7,41);width: 100%;","class":"null-form-input","type":"","maxlength":null,"typeName":"FormInput","id":1678641597216},{"namevalue":"price","label":"цена","placeholder":"Цена вашего авто","style":"background-color:rgb(15,15,15)color:rgb(255,7,41);width: 100%;","class":"null-form-input","type":"","maxlength":null,"typeName":"FormInput","id":1678641644660},{"namevalue":"defect","label":"Имеются ли дефекты?","style":"margin-right: auto;","class":"null-form-checkbox","typeName":"FormCheckbox","id":1678641692154},{"namevalue":"additionally","label":"о авто","placeholder":"Дополнительная информация","style":"background-color:rgb(7,7,7);color:rgb(255,7,41);width: 100%;","class":"null-form-input","type":"","maxlength":null,"typeName":"FormTextarea","id":1678641736716},{"style":"background-color:rgb(0,2,5);color:rgb(255,7,41);width: 100%;color:rgb(234,234,234);","class":"null-form-btn","type":"submit","name":"Отправить анкету","disabled":false,"typeName":"FormButton","id":1678641769860}]
  },
  getters: {
    schemaFields: t => t.schemaFields,
    preChemaFields: t => t.preChemaFields,
    schemaFieldsTest1: t => t.schemaFieldsTest1,
    schemaFieldsTest2: t => t.schemaFieldsTest2,
    objectForm: t => t.objectForm,
    structureById: s => id => s.schemaFields.find(t => t.id === id),
    activeId: t => t.activeId,
    styleById: s  => s.schemaFields.find(t => t.id === s.activeId).style,
    typeNameById: s  => s.schemaFields.find(t => t.id === s.activeId).typeName,
    typeCreateStructure: s => s.typeCreateStructure,
    openStartWindow: t => t.openStartWindow,
    showLoader: t => t.showLoader,
    structureByNamevalue: s => namevalue => s.schemaFields.find( t => t.namevalue === namevalue)
  },
  mutations: {
    ADD_ELEMENT(state, structureElement) {
      this.state.schemaFields.push(structureElement)
    },
    SET_ACTIVE_ID(state, id) {
      this.state.activeId = id
    },
    SAVE_STRUCTURE(state, styles) {
      const schemaFields = state.schemaFields.concat()
      const idx = schemaFields.findIndex(t => t.id === state.activeId)
      const fieldStructure = schemaFields[idx]
      schemaFields[idx] = {...fieldStructure, style: styles}
      state.schemaFields = schemaFields
    },
    DELETE_STRUCTURE(state) {
      state.schemaFields = [...state.schemaFields.filter(t => t.id !== state.activeId)]
      state.activeId = ''
    },
    UPDATE_STRUCTURE(state, structure) {
      state.preChemaFields = [...structure]
    },
    CLOSE_START_WINDOW(state) {
      state.openStartWindow = false
    },
    UPDATE_STRUCTURE_BY_SERVER_SCHEMA(state) {
      state.openStartWindow = false
      state.schemaFields = [...state.preChemaFields]
    },
    CREATE_OBJECT_FORM(state) {
      const objectForm = {}
      const structure = [...state.schemaFields]
      structure.forEach(el => {
        if (el.namevalue === undefined) return 
        let namevalue = el.namevalue
        objectForm[namevalue] = ''
      })
      state.objectForm = objectForm
    },
    CREATE_OBJECT_FORM_TEST1(state) {
      const objectForm = {}
      const structure = [...state.schemaFieldsTest1]
      structure.forEach(el => {
        if (el.namevalue === undefined) return 
        let namevalue = el.namevalue
        objectForm[namevalue] = ''
      })
      state.objectForm = objectForm
    },
    CREATE_OBJECT_FORM_TEST2(state) {
      const objectForm = {}
      const structure = [...state.schemaFieldsTest2]
      structure.forEach(el => {
        if (el.namevalue === undefined) return 
        let namevalue = el.namevalue
        objectForm[namevalue] = ''
      })
      state.objectForm = objectForm
    },
    MODIFY_FORM(state, {namevalue, value}) {
      state.objectForm[namevalue] = value
    },
    CHANHE_LOADER_STATUS(state) {
      state.showLoader = !state.showLoader
    }
  },
  actions: {
    addElement({commit}, structureElement) {
      const structure = {...structureElement}
      structure.id = Date.now()
      commit('ADD_ELEMENT', structure)
    },
    setActiveId({commit}, id) {
      commit('SET_ACTIVE_ID', id)
    },
    saveStructure({commit}, styles) {
      commit('SAVE_STRUCTURE', styles)
    },
    deleteStructure({commit}) {
      commit('DELETE_STRUCTURE')
    },
    generateFields({commit}) {
      commit('UPDATE_STRUCTURE_BY_SERVER_SCHEMA')
    },
    manuallyCreate({commit}) {
      commit('CLOSE_START_WINDOW')
    },
    createObjectForm({commit}) {
      commit('CREATE_OBJECT_FORM')
    },
    modifyForm({commit}, objValue) {
      commit('MODIFY_FORM', objValue)
    },
    createFormForTest1({commit}) {
      commit('CREATE_OBJECT_FORM_TEST1')
    },
    createFormForTest2({commit}) {
      commit('CREATE_OBJECT_FORM_TEST2')
    },
    loadStructure({ commit }) {
      let promise = new Promise((resolve) => {
        commit('CHANHE_LOADER_STATUS')
        setTimeout(() => {
          resolve("result");
        }, 500);
      });
      
      promise
        .then(
          result => {
            
            commit('UPDATE_STRUCTURE', 
            [
              {
                  "label":"имя",
                  "namevalue":"name",
                  "placeholder":"Введи имя",
                  "style":"width: 100%;",
                  "class":"null-form-input",
                  "type":"text",
                  "maxlength":30,
                  "typeName":"FormInput",
                  "id":1678567009794
              },
              {
                  "label":"фамилия",
                  "namevalue":"surname",
                  "placeholder":"Введи фамилию",
                  "style":"width: 100%;",
                  "class":"null-form-input",
                  "type":"",
                  "maxlength":null,
                  "typeName":"FormInput",
                  "id":1678567057024
              },
              {
                  "options":[
                      {
                          "id":1678567079160,
                          "name":"муж"
                      },
                      {
                          "id":1678567082368,
                          "name":"жен"
                      }],
                  "style":"margin-right: auto;",
                  "label":"пол",
                  "namevalue":"gender",
                  "typeName":"FormDropdown",
                  "id":1678567087910}
              ,
              {
                  "label":"О себе",
                  "namevalue":"aboutme",
                  "placeholder":"Напиши о себе",
                  "style":"width: 100%;",
                  "class":"null-form-textarea",
                  "maxlength":50,
                  "typeName":"FormTextarea",
                  "id":1678567134071
              },
              {
                  "label":"Я даю согласие на обработку своих персональных данных",
                  "style":"",
                  "namevalue":"check",
                  "class":"null-form-checkbox",
                  "typeName":"FormCheckbox",
                  "id":1678567171852
              },
              {
                  "style":"background-color:rgb(32,125,207);width: 100%;color:rgb(247,247,247);border-color:rgb(234,234,234);",
                  "class":"null-form-btn",
                  "type":"submit",
                  "name":"Отправить",
                  "disabled":false,
                  "typeName":"FormButton",
                  "id":1678567192480
              }
            ])
            commit('CHANHE_LOADER_STATUS')
            console.log('result', result)
          },
          error => {
            alert("Rejected: " + error); 
          }
        )
    }
  }
})
