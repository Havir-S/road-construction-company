import React, {useRef, useEffect} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import {Gallery } from '../../components'
import './styles.scss'

gsap.registerPlugin(ScrollTrigger)

const AboutUsNew = () => {
    const cautionPaper = useRef(null);

    useEffect(() => {
        const caution = cautionPaper.current;
        const verticalShowup = document.querySelectorAll("[data-showup='vertical']")
        const horizontalShowup = document.querySelectorAll("[data-showup='horizontal']")
        const smallTrafficSigns = document.querySelectorAll(".section-icon")

        // STICKY TAPE
        gsap.to(caution, {position: 'sticky', top: `${76}px`, height: '20px'})

        //VERTICAL ITEMS SHOWING UP
        gsap.from(verticalShowup, {position: 'relative', scale: .6, bottom: '-50px', filter: 'blur(5px)', webkitFilter: 'blur(20px)', opacity: 0, autoAlpha: 0, duration: 1, stagger: .2,
        scrollTrigger: {
          trigger: '#aboutUs',
          start: 'top 80%',
        }
      })

      //HORIZONTAL ITEMS SHOWING UP
      gsap.from(horizontalShowup, {position: 'relative', left: '-100%', filter: 'blur(5px)', webkitFilter: 'blur(20px)', opacity: 0, autoAlpha: 0, duration: 1,  ease: 'Power3.easeOut', stagger: .2,
      scrollTrigger: {
        trigger: '#aboutUs',
        start: 'top 80%',
      }
    })

    //SMALL TRAFFIC SIGNS SHOWING UP
    gsap.from(smallTrafficSigns, {left: '-50%', scale: .1,  filter: 'blur(5px)', webkitFilter: 'blur(20px)', rotate: '360', opacity: 0, autoAlpha: 0, duration: 2, delay: .5,  ease: 'Power3.easeOut', stagger: .3,
    scrollTrigger: {
      trigger: '#aboutUs',
      start: 'top 80%',
    }
  })

        // RIGHT BOX SCROLL FOLLOW //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // for desktops
      const mql = window.matchMedia('screen and (min-width: 1226px)');
      // for tablets
      const mql2 = window.matchMedia('screen and (max-width: 1225px)');

      function checkResize() {
        // pc
        if(mql.matches) {
          let desktopAnim = gsap.timeline();

          desktopAnim.to('.aboutUsRightBox', {
            display: 'sticky',
            top: '705px',
            duration: 4,
            scrollTrigger: {
                trigger: '.aboutUsRightBox',
                start: '80% 60%',
                endTrigger: '#aboutUs',
                end: '30% top',
                scrub: 4,
                toggleActions: 'restart none none none',
                pin: false,
                // markers: true
            }
        })
        }
        // tablet
        else if(mql2.matches) {

        }
      }
      // slices animation  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      const slices1 = document.querySelectorAll('[data-slice-pic="1"]');
      const slices2 = document.querySelectorAll('[data-slice-pic="2"]');
      const slices3 = document.querySelectorAll('[data-slice-pic="3"]');

      let slicesAnim = gsap.timeline({paused: true, scrollTrigger: {
        trigger: '#aboutUs',
        start: 'top 60%',
    }, repeat: -1 });

    slicesAnim.set(slices1, { x: 900, display: 'inline-block', opacity: 0, autoAlpha: 0, scale: .1,})
          .to(slices1, {opacity: 1, autoAlpha: 1, scale: 1, duration: 1, stagger: 0.25,  x: 0})
          .to(slices1, {delay: 5, opacity: 0, autoAlpha: 0, scale: .2, duration: 1.4, stagger: 0.25,  x: -900})

          .set(slices2, { x: 900, display: 'inline-block', opacity: 0, autoAlpha: 0, scale: .1,})
          .to(slices2, {opacity: 1, autoAlpha: 1, scale: 1, duration: 1, stagger: 0.25,  x: 0})
          .to(slices2, {delay: 5, opacity: 0, autoAlpha: 0, scale: .2, duration: 1.4, stagger: 0.25,  x: -900})

          .set(slices3, { x: 900, display: 'inline-block', opacity: 0, autoAlpha: 0, scale: .1,})
          .to(slices3, {opacity: 1, autoAlpha: 1, scale: 1, duration: 1, stagger: 0.25,  x: 0})
          .to(slices3, {delay: 5, opacity: 0, autoAlpha: 0, scale: .2, duration: 1.4, stagger: 0.25,  x: -900})

          window.addEventListener('resize', checkResize)

          checkResize();

      }, [])

    //   const picturesGaleria=[{
    //     img: images.pdfSmall,
    //     bigImg: images.pdfBig
    //   },
    //   {
    //     img: images.pdfSmall,
    //     bigImg: images.pdfBig
    //   },
    //   {
    //     img: images.pdfSmall,
    //     bigImg: images.pdfBig
    //   },
    //   {
    //     img: images.pdfSmall,
    //     bigImg: images.pdfBig
    //   },
    //   {
    //     img: images.pdfSmall,
    //     bigImg: images.pdfBig
    //   },
    //   {
    //     img: images.pdfSmall,
    //     bigImg: images.pdfBig
    //   }
    // ]

  return (
    <div className='aboutUs__background' id='aboutUs' >
        <div className='aboutUs__cautionPaper' ref={cautionPaper}></div>
        <div className='aboutUs__mainContainer'>
          <div className='aboutUs__mainContainer_containerLeft'>
            <div className='aboutUs__mainContainer_containerLeft_holder'>

              <div className='aboutUs__mainContainer_titleHolder' data-showup='vertical'>
                <img src={process.env.PUBLIC_URL + '/officialLogoOnlyPic.png'} alt='LOGO' />
                <p>Kim jeste??my</p>
              </div>
              <div className='aboutUs__mainContainer_subTitle'  data-showup='vertical'>
                <p>
                Jeste??my firm?? zajmuj??c?? si?? projektami czasowej organizacji ruchu. 
                Posiadamy ponad 20 letnie do??wiadczenie na rynku, jako pracownicy innych firm.
                Pracujemy nad ma??ymi i du??ymi projektami. Szybki remont, a tak??e maraton.
                </p>
              </div>
              <div className='cautionPaper-small' data-showup='horizontal'/>
              <Gallery title={'Galeria'} columns={3}  trafficSign='a14' />
              <div className='cautionPaper-small'  data-showup='horizontal'/>
              <Gallery title={'Referencje'} columns={3}  trafficSign='a30' />
              <div className='cautionPaper-small'  data-showup='horizontal'/>
              <Gallery title={'Kontakt'}  trafficSign='d1' />
            </div>
          </div>
          <div className='aboutUs__mainContainer_containerRight' style={{position: 'relative'}}>
            <div className='aboutUsRightBox'>
              <div>
                <div className='aboutUs__picturesHolder'>
                  <div className='aboutUs__picturesHolder_slicesHolder'>
                    <img src={process.env.PUBLIC_URL + '/slice011b.png'} alt='slice' data-slice='1' data-slice-pic='1' />
                    <img src={process.env.PUBLIC_URL + '/slice012b.png'} alt='slice' data-slice='2' data-slice-pic='1' />
                    <img src={process.env.PUBLIC_URL + '/slice013b.png'} alt='slice' data-slice='3' data-slice-pic='1' />
                    <img src={process.env.PUBLIC_URL + '/slice014b.png'} alt='slice' data-slice='4' data-slice-pic='1' />
                    <img src={process.env.PUBLIC_URL + '/slice015b.png'} alt='slice' data-slice='5' data-slice-pic='1' />
                  </div>
                  <div className='aboutUs__picturesHolder_slicesHolder'>
                    <img src={process.env.PUBLIC_URL + '/slice021b.png'} alt='slice' data-slice='1' data-slice-pic='2' />
                    <img src={process.env.PUBLIC_URL + '/slice022b.png'} alt='slice' data-slice='2' data-slice-pic='2' />
                    <img src={process.env.PUBLIC_URL + '/slice023b.png'} alt='slice' data-slice='3' data-slice-pic='2' />
                    <img src={process.env.PUBLIC_URL + '/slice024b.png'} alt='slice' data-slice='4' data-slice-pic='2' />
                    <img src={process.env.PUBLIC_URL + '/slice025b.png'} alt='slice' data-slice='5' data-slice-pic='2' />
                  </div>
                  <div className='aboutUs__picturesHolder_slicesHolder'>
                    <img src={process.env.PUBLIC_URL + '/slice031b.png'} alt='slice' data-slice='1' data-slice-pic='3' />
                    <img src={process.env.PUBLIC_URL + '/slice032b.png'} alt='slice' data-slice='2' data-slice-pic='3' />
                    <img src={process.env.PUBLIC_URL + '/slice033b.png'} alt='slice' data-slice='3' data-slice-pic='3' />
                    <img src={process.env.PUBLIC_URL + '/slice034b.png'} alt='slice' data-slice='4' data-slice-pic='3' />
                    <img src={process.env.PUBLIC_URL + '/slice035b.png'} alt='slice' data-slice='5' data-slice-pic='3' />
                  </div>
              </div>                
              </div>
              <div className='cautionPaper-small' style={{marginTop: '-10px'}}/>
            </div>
          </div>
        </div>
        <div className='aboutUs__mainContainer_callToAction'>
          <p>ZACZNIJMY WSP????PRACOWA??</p>
          <div>
          </div>
        </div>
        <div className='aboutUs__mainContainer_cautionPaperBig'>
          <div className='caution-arrow' />
        </div>
        <div className='aboutUs__mainContainer_break'>
          <div className='content'>
            <div className='content__container'>
              <p className='content__container__text'>Projekt na</p>
              <ul className='content__container__list'>
                <li className="content__container__list__item">rozbudow?? dzia??ki.</li> 
                <li className="content__container__list__item">imprez?? sportow??.</li> 
                <li className="content__container__list__item">imprez?? masow??.</li> 
                <li className="content__container__list__item">przy????czenie pr??du.</li>
                <li className="content__container__list__item">przy????czenie do drogi.</li> 
                <li className="content__container__list__item">maraton.</li> 
                <li className="content__container__list__item">przy????czenie wody.</li>
                <li className="content__container__list__item">wydarzenie kulturowe.</li> 
                <li className="content__container__list__item">przy????czenie gazu.</li>
                <li className="content__container__list__item">obchody ??wi??ta/??wi??t.</li>      
              </ul>
            </div>
          </div>
        </div>
        <div className='aboutUs__mainContainer_cautionPaperBig' style={{marginTop: '-33px'}}>
        </div>

    </div>
    
  )

}

export default AboutUsNew