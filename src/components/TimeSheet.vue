<template>
    <div class="manger-view">
        <h3>Employee TimeTable</h3>
            <div class="container">
                <input type="text" placeholder="Search" v-model="search">
            </div>
            <FilterSwes />
        <div id="timesheet">
            <div class="timetable">
                <table class="highlight" id="swe-table">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Time In</td>
                            <td>Time Out</td>
                            <td>Total Hours Worked</td>
                            <td>Night Differential</td>
                            <td>Remarks</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="timesheet in filterData" :key="timesheet.id">
                            <td>  {{ timesheet.Name }} </td>
                            <td>  {{ timesheet.Timein }} </td>
                            <td>  {{ timesheet.Timeout }} </td>
                            <td>  {{ timesheet.TotalHours }} </td>
                            <td>  {{ timesheet.NightDiff }} </td>
                            <td>  {{ timesheet.Remarks }} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <br>
        <div>
            <export-excel
                class   = "btn btn-default"
                :data   = "filterData"
                :fields = "json_fields"
                worksheet = "SWE TimeTable"
                name    = "timereports.xls">
            
                Download Excel 
            
            </export-excel>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import {mapGetters, mapActions} from 'vuex'
import excel from 'vue-excel-export'
import FilterSwes from './FilterSwes'

export default {
    name: 'manager-view',
    components: {
        FilterSwes
    },
    methods: {
        ...mapActions(['retrieveData']),
    },
    computed: {
        ...mapGetters(['allData']),
        /**
         * search filter for the timetable, filter for per team is needed
         * TODO: update for team search and update
         */
        filterData: function(){
            return this.allData.filter((timesheet) => {
                return timesheet.Name.match(this.search)
            })
            }
        },

    created(){
        this.retrieveData()
    },

    data(){
        
        return {
            search: '',
            json_fields:{
                'Name': "Name",
                'Time in': "Timein",
                'Time out': "Timeout",
                'Total Hours': "TotalHours",
                'Night Diff': "NightDiff",
                'Remarks': "Remarks",
                'Additional Remarks': '' 
            },
            json_meta:[
                [
                    {
                        'key' : 'charset',
                        'value' : 'utf-8'
                    }
                ]
            ]
        }
    }
}
</script>

<style scoped>

</style>
