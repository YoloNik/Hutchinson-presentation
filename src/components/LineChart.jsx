import { ResponsiveLine } from '@nivo/line';
import {
  useTheme,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { tokens } from '../theme';
//import { mockLineData as data } from '../data/mockData';
import {
  mockLineDataYear,
  mockLineDataMonth,
  mockLineDataWeek,
  mockLineDataDay,
} from '../data/mockData';
import { useState, useEffect } from 'react';

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState(mockLineDataDay);

  const handleChange = e => {
    //console.log('e.target', e.target)
    switch (e.target.value) {
      case 'Year':
        setData(mockLineDataYear);
        break;
      case 'Month':
        setData(mockLineDataMonth);
        break;
      case 'Week':
        setData(mockLineDataWeek);
        break;
      case 'Day':
        setData(mockLineDataDay);
        break;

      default:
        break;
    }
  };

  useEffect(() => {}, [data]);

  return (
    <>
      <FormControl sx={{ marginTop: '20px', marginLeft: '20px' }}>
        <RadioGroup
          defaultValue="Day"
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel
            value="Year"
            control={
              <Radio
                sx={{
                  color: colors.greenAccent[400],
                  '&.Mui-checked': { color: colors.redAccent[400] },
                }}
              />
            }
            label="Year"
          />
          <FormControlLabel
            value="Month"
            control={
              <Radio
                sx={{
                  color: colors.greenAccent[400],
                  '&.Mui-checked': { color: colors.redAccent[400] },
                }}
              />
            }
            label="Month"
          />
          <FormControlLabel
            value="Week"
            control={
              <Radio
                sx={{
                  color: colors.greenAccent[400],
                  '&.Mui-checked': { color: colors.redAccent[400] },
                }}
              />
            }
            label="Week"
          />
          <FormControlLabel
            value="Day"
            control={
              <Radio
                sx={{
                  color: colors.greenAccent[400],
                  '&.Mui-checked': { color: colors.redAccent[400] },
                }}
              />
            }
            label="Day"
          />
        </RadioGroup>
      </FormControl>

      <ResponsiveLine
        data={data}
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
        margin={{ top: 10, right: 110, bottom: 50, left: 70 }}
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
          legend: 'district',
          legendOffset: 35,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'quantity',
          legendOffset: -55,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'category10' }}
        pointSize={10}
        enableSlices="x"
        //enableArea={true}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
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
    </>
  );
};

export default LineChart;
