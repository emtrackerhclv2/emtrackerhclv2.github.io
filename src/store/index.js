import Vue from 'vue'
import Vuex from 'vuex'


import timesheet from './modules/timesheet'

Vue.use(Vuex)

export default new Vuex.Store({

    modules:{
        timesheet
    }
})


// export const store = new Vuex.Store ({
    
//     state:{

//         timesheet: []

//     },

//     getters: {
//         // allSWES: (state) => state.timesheet
//     },

//     actions:{
//         retrieveData(context){
//             db.collection('Timsheet').get()
//             .then(querySnapshot => {
//                 let tempSheet = []
//                 querySnapshot.forEach(doc =>{
                    // console.log(doc.data())
                    // const data = {
                    //     id: doc.id,
                    //     Name: doc.data().Name,
                    //     Timein: doc.data().Timein,
                    //     Timeout: doc.data().Timeout,
                    //     NightDiff: doc.data().NigthDiff, 
                    //     TotalHours: doc.data().TotalHours,
                    //     Overtime: doc.data().Overtime,
                    //     WFH: doc.data().WFH,
                    //     Remarks: doc.data().Remarks
                    // }
                    // tempSheet.push(data)
//                 })
//                 context.commit('retrieveData', tempSheet)
//             })
//         }

//     },

//     mutations:{
//         retrieveData(state, timesheet){
//             state.timesheet = timesheet
//         }
//     }
// })