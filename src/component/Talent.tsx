import { RadarChart } from '@mui/x-charts/RadarChart';
import ReactLogo from '../assets/img/tools/react.webp'
import ReduxLogo from '../assets/img/tools/redux.webp'
import TypescriptLogo from '../assets/img/tools/typescript.webp'
import TailwindLogo from '../assets/img/tools/tailwind.webp'
import GitLogo from '../assets/img/tools/git.webp'
import VueLogo from '../assets/img/tools/vue.webp'
import IllustratorLogo from '../assets/img/tools/illustrator.webp'
import PhotoshopLogo from '../assets/img/tools/photoshop.webp'
import FigmaLogo from '../assets/img/tools/figma.webp'
import IndesignLogo from '../assets/img/tools/indesign.webp'
import FreepikLogo from '../assets/img/tools/freepik.webp'
import DafontLogo from '../assets/img/tools/dafont.webp'
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
    <div className='flex flex-col md:grid md:grid-cols-[max-content_1fr] md:gap-0 md:px-12'>
        <div className='w-[100vw] h-[90vw] m-auto md:w-[35em] md:h-[25em]'>
            {MultiSeriesRadar()}
        </div>
        <div className='grid grid-cols-[1fr_max-content_1fr] items-center md:pb-5'>
          <div className='flex flex-col gap-3 items-center'>
            <div>Web Development</div>
            <div className='grid grid-cols-2 gap-3 w-fit'>
              <div className='p-2 h-18 w-18 flex flex-col items-center'>
                <div className='h-10 w-10'><img className='h-full w-full object-fill grayscale brightness-80' src={ReactLogo} alt="React logo" /></div>
                <div className='text-xs'>ReactJS</div>
              </div>
              <div className='p-2 h-18 w-18 flex flex-col items-center gap-1'>
                <div className='h-10 w-10'><img className='h-full w-full object-fill grayscale brightness-150' src={ReduxLogo} alt="Redux logo" /></div>
                <div className='text-xs'>Redux</div>
              </div>
              <div className='p-2 h-18 w-18 flex flex-col items-center gap-1'>
                <div className='h-10 w-10'><img className='h-full w-full object-fill grayscale brightness-125' src={TypescriptLogo} alt="Typescript logo" /></div>
                <div className='text-xs'>Typescript</div>
              </div>
              <div className='p-2 h-18 w-18 flex flex-col items-center gap-1'>
                <div className='h-10 w-10'><img className='h-full w-full object-fill grayscale brightness-125' src={GitLogo} alt="Git logo" /></div>
                <div className='text-xs'>Git</div>
              </div>
              <div className='p-2 h-18 w-18 flex flex-col items-center gap-1'>
                <div className='h-10 w-10'><img className='h-full w-full object-fill grayscale brightness-110' src={TailwindLogo} alt="Tailwind logo" /></div>
                <div className='text-xs'>Tailwind</div>
              </div>
              <div className='p-2 h-18 w-18 flex flex-col items-center gap-1'>
                <div className='h-10 w-10'><img className='h-full w-full object-fill grayscale brightness-100' src={VueLogo} alt="VueJs logo" /></div>
                <div className='text-xs'>VueJs</div>
              </div>
            </div>
          </div>
          <div className='border-l-1 opacity-20 h-55'></div>
          <div className='flex flex-col gap-3 items-center'>
            <div>Graphic Design</div>
            <div className='grid grid-cols-2 gap-3 w-fit'>
              <div className='p-2 h-18 w-18 flex flex-col items-center'>
                <div className='h-10 w-10'><img className='h-full w-full object-fill grayscale brightness-100' src={PhotoshopLogo} alt="Photoshop logo" /></div>
                <div className='text-xs'>Photoshop</div>
              </div>
              <div className='p-2 h-18 w-18 flex flex-col items-center'>
                <div className='h-10 w-10'><img className='h-full w-full object-fill grayscale brightness-100' src={FigmaLogo} alt="Figma logo" /></div>
                <div className='text-xs'>Figma</div>
              </div>
              <div className='p-2 h-18 w-18 flex flex-col items-center'>
                <div className='h-10 w-10'><img className='h-full w-full object-fill grayscale brightness-125' src={FreepikLogo} alt="Freepik logo" /></div>
                <div className='text-xs'>Freepik</div>
              </div>
              <div className='p-2 h-18 w-18 flex flex-col items-center'>
                <div className='h-10 w-10'><img className='h-full w-full object-fill grayscale brightness-70' src={DafontLogo} alt="Dafont logo" /></div>
                <div className='text-xs'>Dafont</div>
              </div>
              <div className='p-2 h-18 w-18 flex flex-col items-center'>
                <div className='h-10 w-10'><img className='h-full w-full object-fill grayscale brightness-85' src={IllustratorLogo} alt="Illustrator logo" /></div>
                <div className='text-xs'>Illustrator</div>
              </div>
              <div className='p-2 h-18 w-18 flex flex-col items-center'>
                <div className='h-10 w-10'><img className='h-full w-full object-fill grayscale brightness-115' src={IndesignLogo} alt="InDesign logo" /></div>
                <div className='text-xs'>InDesign</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Talent
