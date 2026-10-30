import { RadarChart } from '@mui/x-charts/RadarChart';
export function MultiSeriesRadar() {
  return (
        <RadarChart
        series={[{ 
            data: [95, 95, 98, 87, 83],
            color: '#71c6ff',
            valueFormatter: (value) => `${value}%`,
        }]}
        radar={{
            max: 100,
            metrics: ['Responsiveness', 'UX', 'Layout', 'Graphics', 'UI']
        }}
        sx={{
        '& text, & .MuiChartsRadar-metricLabel': {
          fill: '#ffffffd7 !important'
        },
        '& .MuiRadarChart-gridDivider': {
            stroke: 'rgba(255, 255, 255, 0.74) !important'
        },
        '& .MuiRadarChart-seriesArea': {
            fill: '#4da0e8 !important',
            fillOpacity: '0.15 !important',
            stroke: '#71c6ff'
        },
      }}
    />
  );
}
const Talent = () => {
  return (
    <div className='flex flex-col'>
        <div className='w-[100vw] h-[90vw] m-auto md:w-[40em] md:h-[30em]'>
            {MultiSeriesRadar()}
        </div>
    </div>
  )
}

export default Talent
