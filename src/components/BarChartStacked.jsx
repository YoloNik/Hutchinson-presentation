import {
  useTheme,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import { tokens } from '../theme';
import { useState, useEffect } from 'react';
import {
  mockBarDataStackedYear,
  mockBarDataStackedMonth,
  mockBarDataStackedWeek,
  mockBarDataStackedDay,
} from '../data/mockData';

const BarChartStacked = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState(mockBarDataStackedYear);

  const handleChange = e => {
    switch (e.target.value) {
      case 'Year':
        setData(mockBarDataStackedYear);
        break;
      case 'Month':
        setData(mockBarDataStackedMonth);
        break;
      case 'Week':
        setData(mockBarDataStackedWeek);
        break;
      case 'Day':
        setData(mockBarDataStackedDay);
        break;

      default:
        break;
    }
  };

  useEffect(() => {}, [data]);

  return (
    <>
      <FormControl
        sx={{ marginTop: '20px', marginLeft: '20px', marginBottom: '-40px' }}
      >
        <RadioGroup
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

      <ResponsiveBar
        data={data}
        theme={{
          // added
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
        keys={['Ok', 'Nok']}
        indexBy="district"
        margin={{ top: 50, right: 130, bottom: 50, left: 70 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'category10' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'fries',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'sandwich',
            },
            id: 'lines',
          },
        ]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'district',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'quantity',
          legendPosition: 'middle',
          legendOffset: -55,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        displayName="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return (
            e.id + ': ' + e.formattedValue + ' in district: ' + e.indexValue
          );
        }}
      />
    </>
  );
};

export default BarChartStacked;
