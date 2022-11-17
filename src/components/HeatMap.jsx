import { useTheme } from '@emotion/react'
import { ResponsiveHeatMap } from '@nivo/heatmap'
import { heatMap } from '../data/mockData'
import { tokens } from '../theme'


 const MyResponsiveHeatMap = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 return (
	<ResponsiveHeatMap
	data={heatMap}
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
	margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
	valueFormat=">-.2s"
	axisTop={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: -90,
			legend: '',
			legendOffset: 46
	}}
	axisRight={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'country',
			legendPosition: 'middle',
			legendOffset: 70
	}}
	axisLeft={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'country',
			legendPosition: 'middle',
			legendOffset: -72
	}}
	colors={{
			type: 'diverging',
			scheme: 'red_yellow_blue',
			divergeAt: 0.5,
			minValue: -100000,
			maxValue: 100000
	}}
	emptyColor="#555555"
	legends={[
			{
					anchor: 'bottom',
					translateX: 0,
					translateY: 30,
					length: 400,
					thickness: 8,
					direction: 'row',
					tickPosition: 'after',
					tickSize: 3,
					tickSpacing: 4,
					tickOverlap: false,
					tickFormat: '>-.2s',
					title: 'Value →',
					titleAlign: 'start',
					titleOffset: 4
			}
	]}
/>)
 }

export default MyResponsiveHeatMap