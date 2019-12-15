
import db from '../../firebase'

const state = {
    timesheet: []
}

const getters = {
    allData: (state) => state.timesheet
}

const actions = {
    /**
     * This action would retrieve all the data from the timetable and query it for limited documents
     * 
     * if this can be refactored in a simpler way do so
    */
    retrieveData(context){
        db.collection('Timesheet').orderBy('Timein', 'desc').get()
        .then(querySnapshot => {
            let tempData = []
            querySnapshot.forEach(doc =>{
                
                const timestamp1 = doc.data().Timein
                const timestamp = doc.data().Timeout
                /**
                 * timestamp checker if has no value further refactoring is needed on this scale of update
                 */
                if(timestamp == ''){
                    let timeinDate = new Date(timestamp1.seconds * 1000).toLocaleDateString()
                    let timeinHrs = new Date(timestamp1.seconds * 1000).toLocaleTimeString()
                    const data = {
                        id: doc.id,
                        Name: doc.data().Name,
                        Timein: timeinDate + ' ' + timeinHrs,
                        // Timeout: timeoutDate + ' ' + timeoutHrs,
                        NightDiff: doc.data().NightDiff, 
                        TotalHours: doc.data().TotalHours,
                       // Overtime: doc.data().Overtime,
                        // WFH: doc.data().WFH,
                        Remarks: doc.data().Remarks
                    }
                    
                    tempData.push(data)

                }else{

                    let timeinDate = new Date(timestamp1.seconds * 1000).toLocaleDateString()
                    let timeinHrs = new Date(timestamp1.seconds * 1000).toLocaleTimeString()
                    let timeoutDate = new Date(timestamp.seconds * 1000).toLocaleDateString()
                    let timeoutHrs  = new Date(timestamp.seconds * 1000).toLocaleTimeString()
                    
                    const data = {
                        id: doc.id,
                        Name: doc.data().Name,
                        Timein: timeinDate + ' ' + timeinHrs,
                        Timeout: timeoutDate + ' ' + timeoutHrs,
                        NightDiff: doc.data().NightDiff, 
                        TotalHours: doc.data().TotalHours,
                        //Overtime: doc.data().Overtime,
                        // WFH: doc.data().WFH,
                        Remarks: doc.data().Remarks
                    }
                 
                    tempData.push(data)
                }
            })
            context.commit('retrieveData', tempData)
        })
 
    },

}

const mutations = {
    retrieveData(state, timesheet){
        state.timesheet = timesheet
    },

}


export default{
    state,
    getters,
    actions,
    mutations
};