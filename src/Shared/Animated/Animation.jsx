import svg from '../../assets/images/logo/undraw_home_run_acyh.svg'
import svg2 from '../../assets/images/logo/undraw_ready_for_waves_vlke.svg'
import svg3 from '../../assets/images/logo/undraw_personal_trainer_re_cnua.svg'
import svg4 from '../../assets/images/logo/undraw_basketball_re_7701.svg'
const Animation = () => {
    return (
        <section>

            <h3 className='font-extrabold my-12 text-6xl text-center mx-auto text-green-700 uppercase'>Keep Your Body 
           <br /> fit </h3>

           <div className='h-1/2 flex'>
            <div>
            <img className='h-1/2 w-1/2' src={svg} alt="" />

            </div>
            <div>
            <img className='h-1/2 w-1/2' src={svg2} alt="" />

            </div>
            <div>
            <img className='h-1/2 w-1/2' src={svg3} alt="" />

            </div>
            <div>
            <img className='h-1/2 w-1/2' src={svg4} alt="" />

            </div>
           </div>
          
        </section>
    );
};

export default Animation;