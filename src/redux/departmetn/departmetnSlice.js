import { createSlice } from '@reduxjs/toolkit'

const initialState = {
name:'',
shift:{
	id:1,
	leader:{
		avatar:'',
		name:''
	},
	place:{
		cut:{
			id:'',
			quontity:{
				sum:'',
				ok:'',
				nok:'',
				rework:'',
			},
		},
		form:{
			id:'',
			quontity:{
				sum:'',
				ok:'',
				nok:'',
				rework:'',
			},
		},
		finish:{
			id:'',
			quontity:{
				sum:'',
				ok:'',
				nok:'',
				rework:'',
			},
		}
	},
	productions:{
		sum:'',
		ok:'',
		nok:'',
		rework:'',
		quote:'',
	},
	malfunction:{
		id:'',
		time:{
			start:'',
			end:'',
			sum:''
		},
		accidentPlace:'',
		title:'',
		discription:'',
		repairsBy:'',
		status:'',
		prioriteit:'',
		foto:{
			befor:'',
			after:'',
		}
	}
}
}

export const departmentSlice = createSlice({
  name: 'department',
  initialState: initialState,
  reducers: {
		testDepartmentSlice: () => {}
	},
})

// Action creators are generated for each case reducer function
export const {testDepartmentSlice} = departmentSlice.actions

export default departmentSlice.reducer