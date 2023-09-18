import { useState,useEffect } from 'react';
import grushko from '../img/grushko.jpeg'

import paper1 from '../pdf/u1t1p1.pdf'
import paper2 from '../pdf/u1t1p2.pdf'
import paper3 from '../pdf/u1t1p3.pdf'
import paper4 from '../pdf/paper2.pdf'
import paper5 from '../pdf/paper1.pdf'
import paper6 from '../pdf/paper4.pdf'
import paper7 from '../pdf/paper3.pdf'
import paper8 from '../pdf/u1r3p2.pdf'
import paper9 from '../pdf/u1r3p3.pdf'
import paper10 from '../pdf/u1r3p5.pdf'
import paper11 from '../pdf/u1r3p4.pdf'
import paper12 from '../pdf/p12.pdf'
import paper13 from '../pdf/p13.pdf'
import paper14 from '../pdf/p14.pdf'
import paper15 from '../pdf/p9.pdf'
import paper16 from '../pdf/p15.pdf'
import paper17 from '../pdf/p11.pdf'
import paper18 from '../pdf/p17.pdf'

export const About = ()=>{
    const [ind,setInd] = useState(0);
    useEffect(() => {
        var parsed = JSON.parse(window.localStorage.getItem('indA'));
        setInd(parsed?parsed:0);
      }, []);
    
    useEffect(() => {
        window.localStorage.setItem('indA', ind);
      }, [ind]);

    function handleButtonClick(index) {
        window.scrollTo(0, 0)
        setInd(index);
    }
    return(
        <>
        <div className='unit-buttons'>
            <button className={ind===0?'unit-button-active unit-button':'unit-button'} onClick={()=>handleButtonClick(0)}>Об учебном ресурсе</button>
            <button className={ind===1?'unit-button-active unit-button':'unit-button'} onClick={()=>handleButtonClick(1)}>Об авторе</button>
            <button className={ind===2?'unit-button-active unit-button':'unit-button'} onClick={()=>handleButtonClick(2)}>Перечень использованных интернет-ресурсов</button>
        </div>
        <div className="page">
            <div className={ind===0?'unit-task-active':'unit-task-unactive'}>
                <h1 className="page-title">
                    Об учебном ресурсе
                </h1>
                <p>
                Данное учебное пособие реализовано в форме Web-сайта. 
                Учебное пособие “English for Science Communication” предназначено для бакалавров 3-4 курсов,
                магистров и аспирантов университетов. Его целью является формирование иноязычной коммуникативной
                компетенции в сфере учебной и научной деятельности студентов, что предполагает успешное овладение 
                английским языком как средством их дальнейшего профессионального развития.
                </p>
                <p>
                Предлагаемое учебное пособие ориентированно на создание условий для приобретения студентами опыта работы
                с научными статьями на английском языке, а также, возможно, написания собственных научных статей
                на старших курсах бакалавриата, в магистратуре и аспирантуре. Также работа с материалами 
                двух разделов пособия нацелена на развитие и совершенствование навыков публичного 
                выступления в сфере профессиональной и научной коммуникации.
                </p>
                <p className="page-table">
                Данное учебное пособие включает 4 раздела:
                <ol>
                    <ul>• Unit 1 – What is the structure of a scientific paper?</ul>
                    <ul>• Unit 2 – How to read a scientific paper?</ul>
                    <ul>• Unit 3 – Improving Power Point Presentations</ul>
                    <ul>• Unit 4 – Why Don’t the Mathematicians Learn to Speak?</ul> 
                </ol>
                </p>
                <p>
                Каждый раздел содержит материалы для развития навыков чтения, аудирования и говорения, а также различные упражнения, направленные на введение, отработку и закрепление ключевой лексики по тематике раздела. Развитие навыков аудирования строится на основе работы с тематическими видео, что является существенным преимуществом, поскольку создает полезное и облегчающее понимание визуальное подкрепление для вербального контента.
                </p>
            </div>
            <div className={ind===1?'unit-task-active author':'unit-task-unactive'}>
            <h1 className="page-title">
                        Об авторе
                    </h1>
                     
                    <p className="about-title">
                        Грушко Елена Ивановна
                    </p>
                    <img className='portret' src={grushko}/>
                    <p>
                    работает на кафедре английского языка естественных факультетов ЮФУ с 1991 г., в должности старшего преподавателя с 1996 г.
                    </p>
                    <h1 className="about-title">
                        Преподаваемые дисциплины:
                    </h1>
                    <ol>
                        <ul>• английский язык для бакалавров естественно-научных направлений подготовки</ul>
                        <ul>• английский язык для профессиональных и научных целей (для магистров естественно-научных направлений подготовки )</ul>
                    </ol>
                    <h1 className="about-title">
                        Научные интересы:
                    </h1>
                    <p>
                    методика обучения английскому языку студентов неязыковых специальностей; ИКТ в обучении английскому языку (смешанное обучение, перевернутый класс, цифровой рассказ (Digital Storytelling)); социолингвистика и прикладная лингвистика (English as a Lingua Franca)
                    </p>
                    <h1 className="about-title">
                        Профессиональные достижения:
                    </h1>
                    <ol>
                        <ul>
                        • Кембриджский сертификат Certificate of Proficiency in English (СРЕ) с 2010 года
                        </ul>
                        <ul>• Стажировки в Великобритании и Нидерландах</ul>
                        <ul>• 10 научных и 15 учебно-методических публикаций</ul>
                    </ol>
                
            

               {/* <div className='author-eng'>
                    <p className="about-title">
                    Elena I. Grushko
                    </p>
                    <p>
                    has been working at the Department of English for Sciences in Southern Federal University (SFedU) since 1991, as a Senior lecturer since 1996
                    </p>
                    <h1 className="about-title">
                    Teaching areas:
                    </h1>
                    <ol>
                        <ul>• General English & English for Academic purposes (EAP)for undergraduate students in sciences</ul>
                        <ul>• English for Specific Purposes (ESP) for graduate and postgraduate students in sciences )</ul>
                    </ol>
                    <h1 className="about-title">
                    Areas of research interest:
                    </h1>
                    <p>
                    English Language Teaching (ELT)methodology; Innovative computer-based technologies in ELT (Blended Learning, Flipped classroom, Digital Storytelling); Applied Linguistics ( English as a Lingua franca, impact of electronically mediated communication on English)
                    </p>
                    <h1 className="about-title">
                    Professional achievements:
                    </h1>
                    <ol>
                        <ul>
                        • Certificate of Proficiency in English (СРЕ) с 2010 года
                        </ul>
                        <ul>• Professional development in the UK and the Netherlands</ul>
                        <ul>• 25 publications ( 10 papers and 15 for classroom teaching )</ul>
                    </ol>
                    
    </div> */}
    <h1 className="about-title">
                    Контакты:
                    </h1>
                    <p><a href='elena.i.grushko@gmail.com'>elena.i.grushko@gmail.com</a></p>
                    <p><a href='egrushko@sfedu.ru'>egrushko@sfedu.ru</a></p>
            </div>
            <div className={ind===2?'unit-task-active':'unit-task-unactive'}>
            <h1 className="page-title">
                Перечень использованных интернет-ресурсов
            </h1>
            <p className="about-title">
                Research papers
            </p>
            <ol>
                <ul><a href={paper1} target='_blank' rel='noopener noreferrer'>[1] Zhenpeng Zhou, Xiaocheng Li, and Richard N. Zare, Optimizing Chemical Reactions with Deep Reinforcement Learning: ACS Cent. Sci. 2017, 3, 1337−1344</a></ul>
                <ul><a href={paper2} target='_blank' rel='noopener noreferrer'>[2] Linda J. Graham, Sonia L.J. White, Kathy Cologon, Robert C. Pianta Do teachers’ years of experience make a difference in the quality of teaching?, Teaching and Teacher Education 96 (2020) 103190</a></ul>
                <ul><a href={paper3} target='_blank' rel='noopener noreferrer'>[3] Trevor Thomas Stewart, Timothy A. Jansky Novice teachers and embracing struggle: Dialogue and reflection in professional development, Teaching and Teacher Education: Leadership and Professional Development 1 (2022) 100002</a></ul>
                <ul><a href={paper4} target='_blank' rel='noopener noreferrer'>[4] R. Picelli, S. Townsend, C. Brampton, J. Norato, H.A. Kim, Stress-based shape and topology optimization with the level set method, Computer Methods in Applied Mechanics and Engineering, Volume 329, 2018, Pages 1-23, ISSN 0045-7825</a></ul>
                <ul><a href={paper5} target='_blank' rel='noopener noreferrer'>[5] W. Pazner, N. Trask, P.J. Atzberger, Stochastic Discontinuous Galerkin Methods (SDGM) based on fluctuation-dissipation balance, Results in Applied Mathematics, Volume 4, 2019, 100068, ISSN 2590-0374</a></ul>
                <ul><a href={paper6} target='_blank' rel='noopener noreferrer'>[6] Laura Rebollo-Neira, Daniel Whitehouse, Sparse representation of 3D images for piecewise dimensionality reduction with high quality reconstruction, Array, Volumes 1-2, 2019, 100001, ISSN 2590-0056</a></ul>
                <ul><a href={paper7} target='_blank' rel='noopener noreferrer'>[7] Torrey Trust, Daniel G. Krutka, Jeffrey Paul Carpenter, “Together we are better”: Professional learning networks for teachers, Computers & Education, Volume 102, 2016, Pages 15-34, ISSN 0360-1315</a></ul>
                <ul><a href={paper8} target='_blank' rel='noopener noreferrer'>[8] Bryan Ek, Caitlin VerSchneider, Darren A. Narayan, Global efficiency of graphs, AKCE International Journal of Graphs and Combinatorics, Volume 12, Issue 1, 2015, Pages 1-13, ISSN 0972-8600</a></ul>
                <ul><a href={paper9} target='_blank' rel='noopener noreferrer'>[9] Walt Scacchi, Free/Open Source Software Development: Recent Research Results and Methods, Editor(s): Marvin V. Zelkowitz, Advances in Computers, Elsevier, Volume 69, 2007, Pages 243-295, ISSN 0065-2458, ISBN 9780123737458</a></ul>
                <ul><a href={paper10} target='_blank' rel='noopener noreferrer'>[10] Konrad Werys, Iulius Dragonu, Qiang Zhang, Iulia Popescu, Evan Hann, Henrike Puchta, Agata Kubik, Dogan Polat, Cody Wu, Niall O. Moon, Ahmet Barutcu, Vanessa M. Ferreira, Stefan K. Piechnik, Total Mapping Toolbox (TOMATO): An open source library for cardiac magnetic resonance parametric mapping, SoftwareX, Volume 11, 2020, 100369, ISSN 2352-7110</a></ul>
                <ul><a href={paper11} target='_blank' rel='noopener noreferrer'>[11] Michael Coblenz, Jonathan Aldrich, Brad A. Myers, and Joshua Sunshine, Interdisciplinary programming language design. In Proceedings of the 2018 ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward! 2018). ACM, New York, NY, USA, 133-146</a></ul>
                <ul><a href={paper12} target='_blank' rel='noopener noreferrer'>[12] Ivor Grattan-Guinness A Sideways Look at Hilbert’s Twenty-three Problems of 1900, Notices of the AMS, volume 47, number 7, August 2000</a></ul>
                <ul><a href={paper13} target='_blank' rel='noopener noreferrer'>[13] Cameron Fabbri Conditional Wasserstein Generative Adversarial Networks University of Minnesota, Computer Science and Engineering</a></ul>
                <ul><a href={paper14} target='_blank' rel='noopener noreferrer'>[14] Carina Curto What can topology tell us about the neural code? Bulletin (New Series) of the American Mathematical Society Volume 54, Number 1, January 2017, Pages 63–78</a></ul>
                <ul><a href={paper15} target='_blank' rel='noopener noreferrer'>[15] Antonia Creswell, Tom White, Vincent Dumoulin, Kai Arulkumaran, Biswa Sengupta and Anil A Bharath Generative Adversarial Networks: An Overview submitted to IEEE-SPM, April 2017</a></ul>
                <ul><a href={paper16} target='_blank' rel='noopener noreferrer'>[16] A.B. Kudimova, D.K. Nadolin, A.V. Nasedkin, P.A. Oganesyan, A.N. Soloviev Finite element homogenization models of bulk mixed piezocomposites with granular elastic inclusions in ACELAN package, Materials Physics and Mechanics 37 (2018) 25-3 3</a></ul>
                <ul><a href={paper17} target='_blank' rel='noopener noreferrer'>[17] Bryan Ek, Caitlin VerSchneider, Darren A. Narayan Global efficiency of graphs, AKCE International Journal of Graphs and Combinatorics 12 (2015) 1–13</a></ul>
                <ul><a href={paper18} target='_blank' rel='noopener noreferrer'>[18] Fan Chung Graph Theory in the Information Age Notices of the AMS Volume 57, Number 6 pp.726-732</a></ul>
            </ol>
            <p className="about-title">
               Internet resources
            </p>
            <ol>
                <ul><a href="https://medium.com/my-learning-essentials/present-like-a-pro-visual-victory-957aa611c4d">Designing visual aids for your presentation</a></ul>
                <ul><a href="https://towardsdatascience.com/language-translation-with-rnns-d84d43b40571">Language Translation with RNNs</a></ul>
                <ul><a href="https://yandex.com/dev/translate/doc/dg/concepts/how-works-machine-translation.html/">About machine translation</a></ul>
            </ol>
            <p className="about-title">
                Video links
            </p>
            <ol>
                <ul><a href="https://www.youtube.com/watch?v=BAS9I4tFgV8">The Structure of Scientific Research Papers                       </a></ul>
                <ul><a href="https://www.youtube.com/watch?v=M3aZNaPY88Y">Efficient reading strategies</a></ul>
                <ul><a href="https://www.youtube.com/watch?v=MjcO2ExtHso">Life After Death by PowerPoint (Corporate Comedy Video) </a></ul>
                <ul><a href="https://www.youtube.com/watch?v=BuB7IhWZnJs">31 Creative Presentation Ideas to Delight Your Audience </a></ul>
                <ul><a href="https://www.youtube.com/watch?v=TmbQFWBvTtY">Body Language for Presentations  </a></ul>
                <ul><a href="https://www.youtube.com/watch?v=Q5WT2vweFRY">Presenting and Public Speaking Tips - how to improve skills & confidence  </a></ul>
            </ol>

            <p className="about-title">
                Illustrations
            </p>
            <ol>
                <ul><a href="https://undraw.co/search">from Open-source illustrations</a></ul>
            </ol>
            </div>
        </div>
        </>
    )
}