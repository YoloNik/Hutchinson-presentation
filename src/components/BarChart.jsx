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
  mockBarDataYear,
  mockBarDataMonth,
  mockBarDataWeek,
  mockBarDataDay,
} from '../data/mockData';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_FIREBASEDATA_URL;
const API_KEY = process.env.REACT_APP_FIREBASE_APIKEY;
const DATA_SEACRET = process.env.REACT_APP_FIREBASEDATA_SEACRET;

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState(mockBarDataDay);

  const handleChange = e => {
    //console.log('e.target', e.target);
    switch (e.target.value) {
      case 'Year':
        setData(mockBarDataYear);
        break;
      case 'Month':
        setData(mockBarDataMonth);
        break;
      case 'Week':
        setData(mockBarDataWeek);
        break;
      case 'Day':
        setData(mockBarDataDay);
        break;

      default:
        break;
    }
  };

  useEffect(() => {}, [data]);

  useEffect(() => {
    const data = async () => {
      return await axios.get(`${BASE_URL}/prodData.json?auth=${DATA_SEACRET}`);
      //console.log('data', data);
    };
    data();
  }, []);

  return (
    <>
      <FormControl
        sx={{ marginTop: '20px', marginLeft: '20px', marginBottom: '-40px' }}
      >
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
        keys={['FD LH', 'FD RH', 'RD LH', 'RD RH']}
        indexBy="district"
        margin={{ top: 50, right: 130, bottom: 50, left: 70 }}
        padding={0.3}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
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

export default BarChart;
