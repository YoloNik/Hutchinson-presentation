import { ResponsiveRadar } from '@nivo/radar';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

const MyResponsiveRadar = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveRadar
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
      keys={['chardonay', 'carmenere', 'syrah']}
      indexBy="taste"
      valueFormat=">-.2f"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: 'color' }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      colors={{ scheme: 'category10' }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};

export default MyResponsiveRadar;
