import {Unit} from '../Unit'
import {Task} from '../Task'
import {InlineCompareTask} from '../Tasks/InlineCompareTest'
import { TwoColumnsCompareTask } from '../Tasks/TwoColumnsCompareTask';
import {ColumnInlineCompare} from '../Tasks/ColumnInlineCompare';
import { InputCheckTask } from '../Tasks/InputCheckTask';
import {CompareTextTask} from '../Tasks/CompareTextTask';
import {TwoColumnInputTask} from '../Tasks/TwoColumnInputTask'
import {TwoColumnsTextShow} from '../Tasks/TwoColumnsTextShow'
import {VideoShow} from '../Tasks/VideoShow'
import {TextAndImageShow} from '../Tasks/TextAndImageShow'
import {TrueFalseTask} from '../Tasks/TrueFalseTask';

export const FourthUnit = () => {
    return(
        <Unit unitNum={4} unitTitle={"Why Don’t the Mathematicians Learn to Speak?"} names = {['Task 1','Task 2','Task 3','Task 4','Task 5','Task 6','Task 7','Task 8']}
            tasks= {[<Task helpText = {'Choose the best version A, B, C or D to complete each statement 1-5.'} title = {'Reading - 1'}
                        type ={[ <InlineCompareTask helpText = '' startNum={0}
                            baseText={['\t\t\t\t\t\t\t   Why Don’t the Mathematicians Learn to Speak? ','The weekly colloquium in mathematics department is an opportunity for faculty and students to learn about developments in mathematics outside of their own area. Although some colloquia succeed very well in enlightening the audience, all too many fail to do so. Why is this? The speakers are highly able mathematicians, extremely knowledgeable and enthusiastic about their subject, yet the audience leaves the lecture disappointed.\n\nThe reason is, I think, that the speaker is not addressing the real audience in the room, but an imaginary audience existing in his or her mind. The imaginary audience knows all the terminology in the field, knows all but the most recent results, remembers the meaning of all the symbols introduced (and then quickly erased) by the speaker, and can follow complicated arguments and calculations on the board with ease. The real audience is different. With luck, it has a general mathematical education (say, one or two years of graduate study in algebra, analysis, geometry, and topology). It really would like to learn something from the speaker. The speaker soon leaves it in his wake and goes steaming ahead for the rest of the hour. An Why Don’t the Mathematicians Learn to Speak? opportunity is wasted.\n\nIt does not have to be this way. The particular branch of mathematics is irrelevant to the problem. One can be incomprehensible in any field. One can also communicate successfully in any field with the real audience, sitting there in all its ignorance. Necessary conditions for success are (1) discussion of some examples, (2) some explanation of how the problem arises from the classical body of mathematics, (3) avoidance of all but a few key calculations, and (4) ruthless elimination of most details. I remember a talk I heard as a graduate student. My lack of knowledge of geometry and topology was broad and deep. The speaker was Heinz Hopf, and he was talking about the existence of an almost complex structure on certain manifolds. When he started, I didn’t know what a tensor field was, or a complex manifold, or an almost complex structure. Nonetheless, he succeeded in teaching us enough of these things during his hour that it was an exciting and delightful occasion for me.']}
                            answers = {
                                [             
                                    ['to test students’ knowledge','to educate the audience in the new fields','to network with colleagues','all the statements above'],
                                    ['the speaker is not knowledgeable','the speaker has little idea about the audience’s knowledge in the subject',
                                    'the speaker is not well prepared for the lecture','. all the statements above'],
                                    ['knows all the terminology in the field','remembers the meaning of all the symbols',
                                    'would like to learn something from the speaker','all the statements above'],
                                    ['discussion of some examples','elimination of most details','only key calculations','all the statements above'],
                                    ['the speaker succeeded in teaching the audience and made his lecture into an exciting and delightful event',
                                    'he was greatly interested in topology and geometry','the speaker was talking about the existence of an almost complex structure on certain manifolds',
                                    'all the statements above']
                                ]
                            }

                            rightAnswers = {
                                [
                                    'to educate the audience in the new fields',
                                    'the speaker has little idea about the audience’s knowledge in the subject',
                                    'would like to learn something from the speaker',
                                    'all the statements above',
                                    'the speaker succeeded in teaching the audience and made his lecture into an exciting and delightful event',
                                ]
                            }

                            toCompare={
                                [
                                    '1. The purpose of the colloquia in mathematics department is',
                                    '2. Sometimes the audience leaves the lecture disappointed because',
                                    '3. According to the author the real audience',
                                    '4. According to the author the necessary conditions for success are',
                                    '5. The author remembers the lecture by Heinz Hopf because'
                                ]
                            }/>
                            ]}
                    />,
                    <Task helpText = {''} title = {'Vocabulary - 1'}
                        type ={[ <InlineCompareTask helpText = 'Match the words from the text on the left with their definitions on the right. There is one definition which you don’t need to use.' startNum={0}
                            answers = {
                                [             
                                    'system of specialized words and expressions used in a particular science, profession, activity etc',
                                    'studies that are done at a university after one has received one’s first degree',
                                    'a group of similar subject departments in a university / in American English all the teachers and other professional workers of a school, university, or college',
                                    'any of the important divisions or branches of a government, business, college etc.',
                                    'a university course taken by a student for receiving a Bachelor’s Degree',
                                    'a letter, sign, or figure which expresses a sound, operation, number, chemical substance etc.',
                                    'removing or getting rid of completely'
                                ]
                            }

                            rightAnswers = {
                                [
                                    'any of the important divisions or branches of a government, business, college etc.',
                                    'a group of similar subject departments in a university / in American English all the teachers and other professional workers of a school, university, or college',
                                    'system of specialized words and expressions used in a particular science, profession, activity etc',
                                    'a letter, sign, or figure which expresses a sound, operation, number, chemical substance etc.',
                                    'studies that are done at a university after one has received one’s first degree',
                                    'removing or getting rid of completely'
                                ]
                            }

                            toCompare={
                                [
                                    '1. Department',
                                    '2. Faculty',
                                    '3. Terminology',
                                    '4. Symbol',
                                    '5. Graduate study',
                                    '6. Elimination'
                                ]
                            }/>
                            ]}
                    />,
                    <Task
                        helpText={'Find in the text one more synonym for each group of the words below.'}
                        title={'Vocabulary - 2'}
                        type={
                            <InputCheckTask helpText={''} startNum={0}
                                type={'text'} 
                                baseText={['\t\t\t\t\t\t\t   Why Don’t the Mathematicians Learn to Speak? ','The weekly colloquium in mathematics department is an opportunity for faculty and students to learn about developments in mathematics outside of their own area. Although some colloquia succeed very well in enlightening the audience, all too many fail to do so. Why is this? The speakers are highly able mathematicians, extremely knowledgeable and enthusiastic about their subject, yet the audience leaves the lecture disappointed.\n\nThe reason is, I think, that the speaker is not addressing the real audience in the room, but an imaginary audience existing in his or her mind. The imaginary audience knows all the terminology in the field, knows all but the most recent results, remembers the meaning of all the symbols introduced (and then quickly erased) by the speaker, and can follow complicated arguments and calculations on the board with ease. The real audience is different. With luck, it has a general mathematical education (say, one or two years of graduate study in algebra, analysis, geometry, and topology). It really would like to learn something from the speaker. The speaker soon leaves it in his wake and goes steaming ahead for the rest of the hour. An Why Don’t the Mathematicians Learn to Speak? opportunity is wasted.\n\nIt does not have to be this way. The particular branch of mathematics is irrelevant to the problem. One can be incomprehensible in any field. One can also communicate successfully in any field with the real audience, sitting there in all its ignorance. Necessary conditions for success are (1) discussion of some examples, (2) some explanation of how the problem arises from the classical body of mathematics, (3) avoidance of all but a few key calculations, and (4) ruthless elimination of most details. I remember a talk I heard as a graduate student. My lack of knowledge of geometry and topology was broad and deep. The speaker was Heinz Hopf, and he was talking about the existence of an almost complex structure on certain manifolds. When he started, I didn’t know what a tensor field was, or a complex manifold, or an almost complex structure. Nonetheless, he succeeded in teaching us enough of these things during his hour that it was an exciting and delightful occasion for me.']}
                                text={
                                    [
                                        'achievement, advancement, progress, {inputs[0]}',
                                        'to teach, to educate, to inform, {inputs[1]}',
                                        'well-informed, educated, expert, {inputs[2]}',
                                        'not real, untrue, {inputs[3]}',
                                        'complex, difficult, hard, {inputs[4]}',
                                        'unrelated, inapplicable, not connected with, {inputs[5]}',
                                        'unclear, illogical, difficult for understanding, {inputs[6]}',
                                        'lack of information, lack of knowledge, unawareness,  {inputs[7]}',
                                        'event, experience, case, {inputs[8]}',
                                    ]
                                }
                                values={['development','to enlighten','knowledgeable','imaginary','complicated','irrelevant','incomprehensible','ignorance','occasion']}
                            />
                        }
                    />,
                    <Task 
                        title={'Vocabulary - 3'}
                        helpText = {'Read the paragraph and choose the right word from the box to fill in the gaps. There are more words in the box than you need to use.'}
                        type={[
                            <InputCheckTask startNum = {0}
                                useNums = {true}
                                contType = 'none'
                                type={'words'}
                                justText={true}
                                helpText={''}
                                text={['The lecturer may help students to {inputs[0]} and record the main points by writing {inputs[1]} and key words on a board, by repetition, a change of voice, a meaningful {inputs[2]}, or by using such phrases as: most important, note that, and remember that, to {inputs[3]} things that you may wish to record. Words such as first, second, also, further­more, moreover, therefore, and finally, indicate {inputs[4]} in an argument. But and however indicate a qualification. Because indicates a {inputs[5]}. On the one hand and on the other hand indicate a {inputs[6]}. Illustrated by, for example, and as seen in, indicate an {inputs[7]}. All these words, although students may not record them, help them to make good notes.']}
                                baseText={['pause','reason','select','stages','comparison','headings','contrast','graphs','example','emphasize']}
                                values={['select','headings','pause','emphasize','stages','reason','contrast','example']}/>
                                ]
                            }                                           
                    />,
                    <Task 
                        title='Vocabulary - 4' 
                        helpText={'Skim the text and find the English equivalents for the Russian collocations 1-18. '} 
                        type={
                            <InputCheckTask startNum = {0}
                            type={'text'} 
                            helpText={''} 
                            baseText={['\t\t\t\t\t\t\t   Why Don’t the Mathematicians Learn to Speak? ','The weekly colloquium in mathematics department is an opportunity for faculty and students to learn about developments in mathematics outside of their own area. Although some colloquia succeed very well in enlightening the audience, all too many fail to do so. Why is this? The speakers are highly able mathematicians, extremely knowledgeable and enthusiastic about their subject, yet the audience leaves the lecture disappointed.\n\nThe reason is, I think, that the speaker is not addressing the real audience in the room, but an imaginary audience existing in his or her mind. The imaginary audience knows all the terminology in the field, knows all but the most recent results, remembers the meaning of all the symbols introduced (and then quickly erased) by the speaker, and can follow complicated arguments and calculations on the board with ease. The real audience is different. With luck, it has a general mathematical education (say, one or two years of graduate study in algebra, analysis, geometry, and topology). It really would like to learn something from the speaker. The speaker soon leaves it in his wake and goes steaming ahead for the rest of the hour. An Why Don’t the Mathematicians Learn to Speak? opportunity is wasted.\n\nIt does not have to be this way. The particular branch of mathematics is irrelevant to the problem. One can be incomprehensible in any field. One can also communicate successfully in any field with the real audience, sitting there in all its ignorance. Necessary conditions for success are (1) discussion of some examples, (2) some explanation of how the problem arises from the classical body of mathematics, (3) avoidance of all but a few key calculations, and (4) ruthless elimination of most details. I remember a talk I heard as a graduate student. My lack of knowledge of geometry and topology was broad and deep. The speaker was Heinz Hopf, and he was talking about the existence of an almost complex structure on certain manifolds. When he started, I didn’t know what a tensor field was, or a complex manifold, or an almost complex structure. Nonetheless, he succeeded in teaching us enough of these things during his hour that it was an exciting and delightful occasion for me.']}
                            text={['еженедельный коллоквиум на кафедре математики - {inputs[0]}',
                                'узнавать о достижениях в математике, выходящих за пределы собственной сферы знаний - {inputs[1]}',
                                'добиваться успехов в обучении / росвещении слушателей - {inputs[2]}',
                                'в высшей степени знающий и любящий свой предмет - {inputs[3]}',
                                'обращаться не к реальным слушателям в аудитории, а к воображаемым - {inputs[4]}',
                                'знать всю терминологию в области - {inputs[5]}',
                                'помнить значение всех символов, вводимых лектором / докладчиком - {inputs[6]}',
                                'с легкостью следить за всеми сложными аргументами и  вычислениями на доске - {inputs[7]}',
                                'два года магистратуры по алгебре, анализу, геометрии и топологии - {inputs[8]}',
                                'конкретная отрасль математики - {inputs[9]}',
                                'не относящийся к данной математической задаче - {inputs[10]}',
                                'успешно общаться с реальными слушателями - {inputs[11]}',
                                'обсуждение некоторых примеров - {inputs[12]}',
                                'немного объяснения того, как эта задача возникает из классической математики - {inputs[13]}',
                                'избежание всех, кроме ключевых вычислений - {inputs[14]}',
                                'безжалостное исключение большинства деталей - {inputs[15]}',
                                'тензорное поле, комплексное многообразие - {inputs[16]}',
                                'интересное и восхитительное событие - {inputs[17]}'

                                ]} 
                            values={[
                                    'the weekly colloquium in mathematics department ','to learn about developments in mathematics outside of their own area',
                                    'succeed in enlightening the audience','extremely knowledgeable and enthusiastic about their subject',
                                    'not to address the real audience in the room, but an imaginary audience','know all the terminology in the field',
                                    'remember the meaning of all the symbols introduced by the speaker','follow complicated arguments and calculations on the board with ease',
                                    'two years of graduate study in algebra, analysis, geometry, and topology','particular branch of mathematics',
                                    'irrelevant to the problem',
                                    'communicate successfully with the real audience',
                                    'discussion of some examples',
                                    'some explanation of how the problem arises from the classical body of mathematics',
                                    'avoidance of all but a few key calculations',
                                    'ruthless elimination of most details',
                                    'tensor field, complex manifold',
                                    'an exciting and delightful occasion'
                                    ]}/>
                }/>,
                <Task 
                            title={'Vocabulary - 5'}
                            helpText={'For questions 1-10, read the text below. Use the word given in capitals in the box to form a word that fits in the gap in each line.'}
                            type={
                                [
                                <InputCheckTask startNum = {0} textTitle = {"Nonverbal communication matters "} useNums={true}
                                baseText={['CREDIBLE','WARM','POWER','APPROACH','FAVOUR','BORE','FACILITY','INTERESTING','CRITICAL','MODULATION']}
                                helpText=''
                                text={["Eye contact: This helps to regulate the flow of communication. It signals interest in others and increases the speaker's {inputs[0]} . Speakers who make eye contact, open the flow of communication and convey interest,\nconcern and {inputs[1]}\nFacial Expressions: Smiling is a {inputs[2]} cue that transmits friendliness and liking. So, if you smile frequently you will be perceived as more likable, friendly, warm, and {inputs[3]} . Smiling is often contagious, and others will react {inputs[4]} . They will be more comfortable around you and will want to listen to you more.\nGestures: If you fail to gesture while speaking, you may be perceived as {inputs[5]} and stiff. A lively speaking style captures attention and makes the material more interesting and {inputs[6]} understanding.\nPosture and body orientation: You communicate numerous messages by the way you talk and move. Standing erect and leaning forward communicates that you are approachable, receptive, and friendly. Speaking with your back turned or looking at the floor or ceiling should be avoided as it communicates {inputs[7]}.\nVoice: One of the major {inputs[0]} of speakers is that they speak in a monotone voice. Listeners perceive this type of speaker as boring and dull. People report that they learn less and lose interest more quickly when listening to those who have not learned to {inputs[8]} their voices."]}
                                contType='none'
                                type = 'line'
                                values = {['clarity','visual','ensure','minimum','continuing','patterned','readable','consistently','underlining',['personalities','personality']]}
                                />
                                ]
                            }
                        />,
            ]}
        />
    )
}