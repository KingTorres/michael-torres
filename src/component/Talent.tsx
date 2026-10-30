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
    <div className='flex flex-col md:grid md:grid-cols-[max-content_1fr] md:gap-0'>
        <div className='w-[100vw] h-[90vw] m-auto md:w-[35em] md:h-[25em]'>
            {MultiSeriesRadar()}
        </div>
        <div>
            <ul className='list-disc text-left mx-[8%] md:mx-0 md:text-lg md:mr-20 text-[#a5a5a5]'>
                <li className='mb-2'>Design Vision: Translating sophisticated design concepts into exceptionally clean, responsive, and high-performance code that bridges the gap between aesthetics and seamless functionality across all modern devices.</li>
                <li className='mb-2'>Code Execution: Delivering robust, highly modular, pixel-perfect, and mobile-first code architectures designed for long-term scalability, easy maintenance, and optimal cross-browser compatibility.</li>
                <li className='mb-2'>Data Insights: Leveraging analytical thinking and quantitative data to rigorously validate design choices, track user behavior patterns, and continuously improve overall user engagement and retention.</li>
            </ul>
        </div>
    </div>
    




  )
}

export default Talent
