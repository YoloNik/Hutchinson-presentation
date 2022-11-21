import React from 'react'
import {
  Box,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListSubheader,
	useTheme,
} from '@mui/material';
import { Formik } from 'formik'
import {useMediaQuery} from '@mui/material';
import * as yup from 'yup';
import Header from '../../components/Header'
import {Typography} from '@mui/material';
import { tokens } from '../../theme';
import { ResponsiveLine } from '@nivo/line';
import { useMemo } from 'react';






export default function Dimensions() {
	const  [size, setSize] = React.useState(0)
	const [message, setMessage] = React.useState()
	const [step, setStep] = React.useState(0)

	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const isNonMobile = useMediaQuery('(min-width:600px)');

	const handleFormSubmit = (values) => {
		setSize(values.dimensions)
		setStep(prev => prev +1)

		
		

}


const dimData= useMemo(()=> { return [
		{
			id: 'data',
			color: 'hsl(25, 70%, 50%)',
			data: [
				{x:0,
					y:0
				},
			],
		},
		{
			id: 'min',
			color: 'hsl(100, 100%, 50%)',
			data: [
				{
					x:0,
					y:0
				},
			],
		},
		{
			id: 'max',
			color: 'hsl(100, 100%, 50%)',
			data: [
				{
					x:0,
					y:0
				},
			],
		},
	]
},[])

	

React.useEffect(() => {
	if (size<15 && size>10) {setMessage("OK")} else {setMessage("NOK")};
	

	const newData = {
		x:step,
		y:Number(size),
	}
	const min = {
		x:step,
		y:10 ,
	}
	const max = {
		x:step,
		y:15 ,
	}

	 console.log('first', `first`)

	dimData.forEach(el => {
		switch (el.id) {
			case "data":
				el.data.push(newData)
				if (el.data.length>5) {
					el.data.shift()
				} 
				
				break;
			case "min":
				el.data.push(min)
				if (el.data.length>5) {
					el.data.shift()
				} 
				break;
			case "max":
				
				el.data.push(max)
				if (el.data.length>5) {
					el.data.shift()
				} 
				break;
		
			default:
				break;
		}
});

	
}, [dimData, size, step])





	return (
		<Box 	m="20px" >
      <Header
        title="Dimensions"
        subtitle="Dimensions of details"
      />

				<Formik
					onSubmit={handleFormSubmit}
					initialValues={initialValues}
					validationSchema={checkoutSchema}
          >
{({
          values,
          errors,
          touched,
          id,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, 1fr)"
							gridAutoRows="55px"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
							<FormControl sx={{ m: 1, minWidth: 120, gridColumn: 'span 2' }}>
                <InputLabel htmlFor="grouped-select">Work Place</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Work Place">
                  <ListSubheader>Q3</ListSubheader>
                  <MenuItem value={1}>FD LH</MenuItem>
                  <MenuItem value={1}>FD RH</MenuItem>
                  <MenuItem value={1}>RD LH</MenuItem>
                  <MenuItem value={2}>RD RH</MenuItem>
                  <ListSubheader>Q4</ListSubheader>
                  <MenuItem value={1}>FD LH</MenuItem>
                  <MenuItem value={1}>FD RH</MenuItem>
                  <MenuItem value={1}>RD LH</MenuItem>
                  <MenuItem value={2}>RD RH</MenuItem>
                </Select>
              </FormControl>

							<FormControl sx={{ m: 1, minWidth: 120, gridColumn: 'span 2' }}>
                <InputLabel htmlFor="grouped-select">Dimensions</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Dimensions">
                  <MenuItem value={1}>From 'x' to 'y' </MenuItem>
                  <MenuItem value={2}>From 'a' to 'b'</MenuItem>
                  <MenuItem value={3}>From 'x' to 'i'</MenuItem>
                  <MenuItem value={4}>From 'n' to 'y'</MenuItem>
                </Select>
              </FormControl>

							<TextField
                fullWidth
                variant="filled"
                type="text"
                label="Dimensions"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dimensions}
                name="dimensions"
                error={!!touched.dimensions && !!errors.dimensions}
                helperText={touched.dimensions && errors.dimensions}
                sx={{ gridColumn: 'span 3' }}
              />


							<Box display="flex" justifyContent='center'>
              <Button
									name={size}
								 type="submit" 
								 color="secondary" 
								 sx={{width:"100%"}} 
								 variant="contained">
                Report
              </Button>
            </Box>

						
						<Box display="flex" justifyContent='center' alignItems="center"
						sx={message === "OK"?  { gridColumn: 'span 4', background:colors.greenAccent[800]}: 
						{ gridColumn: 'span 4', background:colors.redAccent[800]}}>
						<Typography
              variant="h2"
              color={message === "OK"? colors.greenAccent[500]: colors.redAccent[500]}
            >
              {message}
            </Typography>
							</Box>
            </Box>
            
          </form>
				)}
				</Formik>

				
          <Box height="250px" m="-20px 0 0 0">
		<ResponsiveLine
      data={dimData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'step',
        legendOffset: 35,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'size',
        legendOffset: -48,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'category10' }}
			lineWidth={5}
      pointSize={10}
      enableSlices="x"
      //enableArea={true}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={0}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
          </Box>
		</Box>
	)
}
const checkoutSchema = yup.object().shape({
  dimensions: yup.number().required('required'),
});
const initialValues = {
  dimensions: '',
}
