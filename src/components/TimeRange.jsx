import { timeRange } from '../data/mockData';
import { ResponsiveTimeRange } from '@nivo/calendar';
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';

const MyResponsiveTimeRange = data => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveTimeRange
      data={timeRange}
      theme={{
        textColor: colors.grey[100],
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
      from="2018-04-01"
      to="2018-08-12"
      emptyColor="#eeeeee"
      colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
      margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          justify: false,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: 'right-to-left',
          translateX: -60,
          translateY: -60,
          symbolSize: 20,
        },
      ]}
    />
  );
};
export default MyResponsiveTimeRange;
