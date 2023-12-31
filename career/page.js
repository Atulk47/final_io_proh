import React from 'react'
import OPPimage_2 from './../../public/img/oppenheimer_career.jpg'
import Image from 'next/image'

export default function page() {
  return (
    <div className='header'>
        <h1 className='text-center justify-center mt-5 text-slate-500 text-8xl text font-serif'>CAREER</h1>
    <div className='body flex flex-row flex-initial mt-5 '>
    <div className='w-1/4'><Image className='mt-2' src={OPPimage_2} width={450} height={300} ></Image>
    <p className='text-xs' >(University of California Radiation Laboratory staff (including Robert R. Wilson and Nobel prize winners Ernest Lawrence, Edwin McMillan, and Luis Alvarez) on the magnet yoke for the 60-inch (152 cm) cyclotron, 1938. Oppenheimer is the tall figure holding a pipe in the top row, just right of center.)</p></div>
    
    <div className='text flex-column ml-5 w-3/4'>
    
    <p className=' text-slate-200 tracking-widest'>Oppenheimer was awarded a <snap className='text-blue-500'>United States National Research Council fellowship</snap> to the <snap className='text-blue-500'>California Institute of Technology</snap> (Caltech) in September 1927. Bridgman also wanted him at Harvard, so a compromise was reached whereby he split his fellowship for the 1927–28 academic year between Harvard in 1927 and Caltech in 1928. At Caltech, he struck up a close friendship with <snap className='text-blue-500'>Linus Pauling</snap>; they planned to mount a joint attack on the nature of the chemical bond, a field in which Pauling was a pioneer, with Oppenheimer supplying the mathematics and Pauling interpreting the results. The collaboration, and their friendship, ended after Oppenheimer invited Pauling's wife, <snap className='text-blue-500'>Ava Helen Pauling</snap>, to join him on a tryst in Mexico. Oppenheimer later invited Pauling to be head of the Chemistry Division of the <snap className='text-blue-500'>Manhattan Project</snap>, but Pauling refused, saying he was a pacifist.</p>
    <br></br>
    <p className='text-slate-200 tracking-widest'>In the autumn of 1928, Oppenheimer visited <snap className='text-blue-500'>Paul Ehrenfest's institute at the University of Leiden</snap>, the Netherlands, where he impressed by giving lectures in Dutch, despite having little experience with the language. There, he was given the nickname of Opje, later anglicized by his students as "Oppie". From Leiden, he continued on to the <snap className='text-blue-500'>Swiss Federal Institute of Technology (ETH)</snap> in Zurich to work with Wolfgang Pauli on quantum mechanics and the continuous spectrum. Oppenheimer respected and liked Pauli and may have emulated his personal style as well as his critical approach to problems.</p>
    <br></br>
    <p className='text-slate-200 tracking-widest'>Before he began his Berkeley professorship, Oppenheimer was diagnosed with a mild case of <snap className='text-blue-500'>tuberculosis</snap> and spent some weeks with his brother Frank at a New Mexico ranch, which he leased and eventually purchased. When he heard the ranch was available for lease, he exclaimed, "Hot dog!", and he later called it Perro Caliente ("hot dog" in Spanish). Later, he used to say that "physics and desert country" were his "two great loves". He recovered from tuberculosis and returned to Berkeley, where he prospered as an advisor and collaborator to a generation of physicists who admired him for his intellectual virtuosity and broad interests. His students and colleagues saw him as mesmerizing: hypnotic in private interaction, but often frigid in more public settings. His associates fell into two camps: one saw him as an aloof and impressive genius and aesthete, the other as a pretentious and insecure poseur. His students almost always fell into the former category, adopting his walk, speech, and other mannerisms, and even his inclination for reading entire texts in their original languages</p>
    <br></br>
    <p className='text-slate-200 tracking-widest'>Oppenheimer worked closely with Nobel Prize-winning experimental physicist <snap className='text-blue-500'>Ernest O. Lawrence</snap> and his cyclotron pioneers, helping them understand the data that their machines were producing at <snap className='text-blue-500'>Berkeley's Radiation Laboratory</snap>, which eventually developed into today's <snap className='text-blue-500'>Lawrence Berkeley National Laboratory</snap>.[43] In 1936, Berkeley promoted him to full professor at an annual salary of $3,300 (equivalent to $70,000 in 2022). In return, he was asked to curtail his teaching at Caltech, so a compromise was reached whereby Berkeley released him for six weeks each year, enough to teach one term at Caltech</p>
    <br></br>
    <p className='text-slate-200 tracking-widest'>Oppenheimer did important research in <snap className='text-blue-500'>theoretical astronomy</snap> (especially as related to general relativity and nuclear theory), <snap className='text-blue-500'>nuclear physics, spectroscopy</snap>, and <span className='text-blue-500'>quantum field theory</span>, including its extension into <span className='text-blue-500'>quantum electrodynamics</span>. The formal mathematics of relativistic quantum mechanics also attracted his attention, although he doubted its validity. His work predicted many later finds, including the neutron, meson and neutron star.

Initially, his major interest was the theory of the continuous spectrum. His first published paper, in 1926, concerned the quantum theory of <span className='text-blue-500'>molecular band spectra</span>. He developed a method to carry out calculations of its transition probabilities. He calculated the photoelectric effect for <snap className='text-blue-500'>hydrogen and X-rays</snap>, obtaining the absorption coefficient at the K-edge. His calculations accorded with observations of the X-ray absorption of the Sun, but not helium. Years later, it was realized that the Sun was largely composed of hydrogen and that his calculations were correct.

Oppenheimer made important contributions to the theory of <snap className='text-blue-500'>cosmic ray showers</snap>. He also worked on the problem of field electron emission. This work contributed to the development of the concept of <snap className='text-blue-500'>quantum tunneling</snap>. In 1931, he co-wrote a paper, <snap className='text-blue-500'>"Relativistic Theory of the Photoelectric Effect"</snap>, with his student Harvey Hall, in which, based on empirical evidence, he correctly disputed Dirac's assertion that two of the energy levels of the hydrogen atom have the same energy. Subsequently, one of his doctoral students, Willis Lamb, determined that this was a consequence of what became known as the Lamb shift, for which Lamb was awarded the Nobel Prize in physics in 1955.</p>
    <br></br>
    </div>
    
        
    </div>
    </div>
  )
}
