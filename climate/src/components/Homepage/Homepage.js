import React from 'react'
import './Homepage.css';

function Homepage() {
  return (
    <div>
        <div className='text'>
            <p className='tat bruh'>LEARN ABOUT THOSE POLLUTING OUR ENVIRONMENT.</p>
            <p>The Climate Polluters Index (CPI) stories all of the top energy companies contributing to the climate crisis. The database is ranked by the total greenhouse gas emissions (GHG) and the associated surface water and toxic hazard dumped into its locality. All of the data was collected from the EPA, PERI, and EWG. Click the Stories tab to read testimonials and view the top polluters below.</p>
        </div>

        <div className='video'>
          <iframe width="1200" height="750" className = "video-settings" src="https://www.youtube.com/embed/N7HWL1g1sek?si=ZdM7v5oI377vSgPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        
        </div>

        <div className='text'>
            <p className='tat'>TOP POLLUTORS</p>
            <p>The top 30 US polluters are ranked by the total greenhouse gas emissions (GHG) and the associated surface water and toxic hazard. The GHG ranking is specific to the total metric tons of carbon dioxide emissions (MTCO2e) from a company’s energy facilities, primarily oil and natural gas, coal, and electricity.</p>
        </div>

        
        <div className='cards-container'>
            <div className='card'>
                <img src={require('../Homepage/images/1_Vistra Energy_Martin Lake.jpg')} alt='Ye'/>
                <div className="card-content">
                  <h3>1. VISTRA ENERGY</h3>
                  <p>Total GHG Emissions: <em className='bloods'>112,384,781 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>612,349,897 lbs</em></p>
                </div>
            </div>

            <div className='card'>
                <img src={require('../Homepage/images/2_Southern Company.jpg')} alt='Ye'/>
                <div className = "card-content">
                  <h3>2. SOUTHERN ENERGY</h3>
                  <p>Total GHG Pollution: <em className='bloods'>82,113,848 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>163,387,853 lbs</em></p>
                </div>
            </div>

            <div className='card'>
               <img src={require('../Homepage/images/3_Duke Energy.jpg')} alt='Hoe Bitch' />
                <div className="card-content">
                <h3>3. DUKE ENERGY</h3>
                <p>Total GHG Pollution: <em className='bloods'>79,435,840 MTCO2e</em></p>
                <p>Total Surface Water & Toxic Hazard: <em className='bloods'>7,047,381,817 lbs</em></p>
                </div>
            </div>
        </div>

        <div className='cards-container'>
            <div className='card'>
                <img src={require('../Homepage/images/4_Berkshire Hathaway.jpg')} alt='Ye'/>
                <div className="card-content">
                  <h3>4. BERKSHIRE HATHAWAY</h3>
                  <p>Total GHG Pollution: <em className='bloods'>72,113,565 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>179,003,302 lbs</em></p>
                </div>
            </div>

            <div className='card'>
                <img src={require('../Homepage/images/5_American Electric Power.jpg')} alt='Ye'/>
                <div className = "card-content">
                  <h3>5. AEP</h3>
                  <p>Total GHG Pollution: <em className='bloods'>60,653,224 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>325,271,882 lbs</em></p>
                </div>
            </div>

            <div className='card'>
                <img src={require('../Homepage/images/8_Xcel Energy.jpg')} alt='Ye'/>
                <div className="card-content">
                  <h3>6. XCEL ENERGY</h3>
                  <p>Total GHG Pollution: <em className='bloods'>42,285,182 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>88,691 lbs</em></p>
                </div>
            </div>
        </div>

        <div className='cards-container'>
            <div className='card'>
                <img src={require('../Homepage/images/9_Exxon Mobil.jpg')} alt='Ye'/>
                <div className = "card-content">
                  <h3>7. EXXON MOBIL</h3>
                  <p>Total GHG Pollution: <em className='bloods'>38,121,045 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>7,168,257,220 lbs</em></p>
                </div>
            </div>

            <div className='card'>
               <img src={require('../Homepage/images/10_NextEra Energy.jpg')} alt='Hoe Bitch' />
                <div className="card-content">
                  <h3>8. NEXTERA ENERGY</h3>
                  <p>Total GHG Pollution: <em className='bloods'>38,038,319 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>390,000,000 lbs</em></p>
                </div>
            </div>

            <div className='card'>
                <img src={require('../Homepage/images/11_Entergy.jpg')} alt='Ye'/>
                <div className="card-content">
                  <h3>9. ENTERGY</h3>
                  <p>Total GHG Pollution: <em className='bloods'>37,468,076 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>3,715,261 lbs</em></p>
                </div>
            </div>
        </div>

        <div className='cards-container'>
            <div className='card'>
                <img src={require('../Homepage/images/12_Dominion Energy.jpg')} alt='Ye'/>
                <div className = "card-content">
                  <h3>10. DOMINION ENERGY</h3>
                  <p>Total GHG Pollution: <em className='bloods'>34,263,092 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>2,589,919 lbs</em></p>
                </div>
            </div>

            <div className='card'>
               <img src={require('../Homepage/images/13_NRG Energy.jpg')} alt='Hoe Bitch' />
                <div className="card-content">
                  <h3>11. NRG ENERGY</h3>
                  <p>Total GHG Pollution: <em className='bloods'>32,148,918 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>20,382,012 lbs</em></p>
                </div>
            </div>

            <div className='card'>
                <img src={require('../Homepage/images/14_DTE Energy.jpg')} alt='Ye'/>
                <div className="card-content">
                  <h3>12. DTE ENERGY</h3>
                  <p>Total GHG Pollution: <em className='bloods'>30,430,679 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>991,060,120 lbs</em></p>
                </div>
            </div>
        </div>

        <div className='cards-container'>
            <div className='card'>
                <img src={require('../Homepage/images/16_PPL Corp.jpg')} alt='Ye'/>
                <div className = "card-content">
                  <h3>13. PPL CORP.</h3>
                  <p>Total GHG Pollution: <em className='bloods'>82,113,848 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>163,387,853 lbs</em></p>
                </div>
            </div>

            <div className='card'>
               <img src={require('../Homepage/images/17_Ameren.jpg')} alt='Hoe Bitch' />
                <div className="card-content">
                  <h3>14. AMEREN</h3>
                  <p>Total GHG Pollution: <em className='bloods'>28,088,792 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>3,182,663 lbs</em></p>
                </div>
            </div>

            <div className='card'>
                <img src={require('../Homepage/images/18_Marathon Petroleum.jpg')} alt='Ye'/>
                <div className="card-content">
                  <h3>15. MARATHON</h3>
                  <p>Total GHG Pollution: <em className='bloods'>27,642,752 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>457,806,700 lbs</em></p>
                </div>
            </div>
        </div>

        <div className='cards-container'>
            <div className='card'>
                <img src={require('../Homepage/images/19_Evergy Inc.jpg')} alt='Ye'/>
                <div className = "card-content">
                  <h3>16. EVERGY INC.</h3>
                  <p>Total GHG Pollution: <em className='bloods'>27,600,757 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>662,584 lbs</em></p>
                </div>
            </div>

            <div className='card'>
               <img src={require('../Homepage/images/20_ArcLight Capital Partners.jpg')} alt='Hoe Bitch' />
                <div className="card-content">
                  <h3>17. ARCLIGHT</h3>
                  <p>Total GHG Pollution: <em className='bloods'>26,774,448 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>201,886,005 lbs</em></p>
                </div>
            </div>

            <div className='card'>
                <img src={require('../Homepage/images/21_Phillips 66.jpg')} alt='Ye'/>
                <div className="card-content">
                  <h3>18. PHILIPS 66</h3>
                  <p>Total GHG Pollution: <em className='bloods'>24,589,430 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>263,395,047 lbs</em></p>
                </div>
            </div>
        </div>

        <div className='cards-container'>
            <div className='card'>
                <img src={require('../Homepage/images/22_Koch Industries.jpg')} alt='Ye'/>
                <div className = "card-content">
                  <h3>19. KOCH INDUSTRIES</h3>
                  <p>Total GHG Pollution: <em className='bloods'>23,053,118 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>1,194,173,842 lbs</em></p>
                </div>
            </div>

            <div className='card'>
               <img src={require('../Homepage/images/23_Valero Energy.jpg')} alt='Hoe Bitch' />
                <div className="card-content">
                  <h3>20. VALERO ENERGY</h3>
                  <p>Total GHG Pollution: <em className='bloods'>22,924,979 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>200,928,682 lbs</em></p>
                </div>
            </div>

            <div className='card'>
                <img src={require('../Homepage/images/24_WEC Energy Group.jpg')} alt='Ye'/>
                <div className="card-content">
                  <h3>21. WEC ENERGY GROUP</h3>
                  <p>Total GHG Pollution: <em className='bloods'>22,000,482 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>1,812,069 lbs</em></p>
                </div>
            </div>
        </div>

        <div className='cards-container'>
            <div className='card'>
                <img src={require('../Homepage/images/25_Chevron.jpg')} alt='Ye'/>
                <div className = "card-content">
                  <h3>22. CHEVRON</h3>
                  <p>Total GHG Pollution: <em className='bloods'>21,629,203 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>348,255,376 lbs</em></p>
                </div>
            </div>

            <div className='card'>
               <img src={require('../Homepage/images/26_United States Steel.jpg')} alt='Hoe Bitch' />
                <div className="card-content">
                  <h3>23. UNITED STATES STEEL</h3>
                  <p>Total GHG Pollution: <em className='bloods'>20,099,414 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>154,131,237 lbs</em></p>
                </div>
            </div>

            <div className='card'>
                <img src={require('../Homepage/images/28_AES Corp.jpg')} alt='Ye'/>
                <div className="card-content">
                  <h3>24. AES CORP</h3>
                  <p>Total GHG Pollution: <em className='bloods'>19,500,130 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>122,684,680 lbs</em></p>
                </div>
            </div>
        </div>

        <div className='cards-container'>
            <div className='card'>
                <img src={require('../Homepage/images/29_Macquarie.jpg')} alt='Ye'/>
                <div className = "card-content">
                  <h3>25. MACQUARIE</h3>
                  <p>Total GHG Pollution: <em className='bloods'>19,042,958 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>9,629,784 lbs</em></p>
                </div>
            </div>

            <div className='card'>
               <img src={require('../Homepage/images/31_CMS Energy.jpg')} alt='Hoe Bitch' />
                <div className="card-content">
                  <h3>26. CMS ENERGY</h3>
                  <p>Total GHG Pollution: <em className='bloods'>17,897,853 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>9,794,889 lbs</em></p>
                </div>
            </div>

            <div className='card'>
                <img src={require('../Homepage/images/32_Associated Electric Cooperative Inc.jpg')} alt='Ye'/>
                <div className="card-content">
                  <h3>27. ASSOCIATED ELECTRIC</h3>
                  <p>Total GHG Pollution: <em className='bloods'>16,710,688 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>1,761,349 lbs</em></p>
                </div>
            </div>
        </div>

        <div className='cards-container final'>
            <div className='card'>
                <img src={require('../Homepage/images/33_Basin Electric Power Cooperative.jpg')} alt='Ye'/>
                <div className = "card-content">
                  <h3>28. BASIN ELECTRIC POWER</h3>
                  <p>Total GHG Pollution: <em className='bloods'>16,685,508 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>7,293,948 lbs</em></p>
                </div>
            </div>

            <div className='card'>
               <img src={require('../Homepage/images/35_Dow Inc.jpg')} alt='Hoe Bitch' />
                <div className="card-content">
                  <h3>29. DOW INC.</h3>
                  <p>Total GHG Emissions: <em className='bloods'>16,562,508 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>97,260,947,708 lbs</em></p>
                </div>
            </div>

            <div className='card'>
                <img src={require('../Homepage/images/36_Blackstone.jpg')} alt='Ye'/>
                <div className="card-content">
                  <h3>30. BLACKSTONE</h3>
                  <p>Total GHG Pollution: <em className='bloods'>15,959,323 MTCO2e</em></p>
                  <p>Total Surface Water & Toxic Hazard: <em className='bloods'>67,927,972 lbs</em></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage;