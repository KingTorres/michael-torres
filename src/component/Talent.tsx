import { RadarChart } from '@mui/x-charts/RadarChart';
export function MultiSeriesRadar() {
  return (
        <RadarChart
        series={[{ 
            data: [95, 90, 98, 87, 83],
            color: '#71c6ff',
        }]}
        radar={{
            max: 100,
            metrics: ['Responsiveness', 'UI', 'Layout', 'UX', 'Graphics']
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
    <div className='flex flex-col md:grid md:grid-cols-[max-content_1fr] gap-2'>
        <div className='w-[80vw] h-[60vw] m-auto md:w-[40em] md:h-[30em] border border-red-500'>
            {MultiSeriesRadar()}
        </div>
        <div>asdasdsd</div>
    </div>
  )
}

export default Talent
