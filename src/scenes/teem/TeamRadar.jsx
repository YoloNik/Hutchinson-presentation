// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/radar
import { Box } from '@mui/material';
import { ResponsiveRadar } from '@nivo/radar';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
const testData = [
  { language: 'javascript', john: 12, sarah: 32, bob: 27 },
  { language: 'golang', john: 25, sarah: 15, bob: 3 },
  { language: 'python', john: 5, sarah: 22, bob: 31 },
  { language: 'java', john: 19, sarah: 17, bob: 9 },
];
//	[
//  {
//    Sort: 8,
//    Sustain: 9,
//    Safety: 10,
//    'Set in order': 7,
//    Shine: 6,
//    Standardize: 8,
//  },
//];
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const TeamRadar = ({ data /* see data tab */ }) => (
  <ResponsiveRadar
    sx={{
      gridColumn: 'span 2',
      gridRow: 'span 2',
    }}
    data={testData}
    keys={['john', 'sarah', 'bob']}
    indexBy="language"
    valueFormat=">-.2f"
    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
    borderColor={{ from: 'color' }}
    gridLabelOffset={36}
    dotSize={10}
    dotColor={{ theme: 'background' }}
    dotBorderWidth={2}
    colors={{ scheme: 'nivo' }}
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
export default TeamRadar;
